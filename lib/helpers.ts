"use server";

import OpenAI from "openai";
import * as admin from "firebase-admin";
const openaiAPIKey = process.env.OPENAI_API_KEY;
const openaiModel = process.env.OPENAI_MODEL;

console.log(openaiAPIKey)
console.log(openaiModel)

const client = new OpenAI({apiKey: openaiAPIKey});

export async function populateDatabaseWithArticles() {
  const allCategories = [
    "trending",
    "food",
    "wellness",
    "ravel",
    "sports",
    "science",
    "celebrity",
    "art",
    "nature",
  ]
  const titles = await generateAllArticleTitles(allCategories, 1)

  console.log(titles)
  console.log(`Generated titles for ${titles.length} categories.`)

  const articles = await generateAllArticles(titles)
  console.log(`Generated articles for ${articles.length} categories.`)
  
  saveArticlesToFirebase(articles)

  return articles;
}

async function generateAllArticleTitles(allCategories: string[], totalTitlesPerCategory: number)  {
  console.log(`Total number of categories: ${allCategories.length}`)
  console.log(`Total number of titles per category: ${totalTitlesPerCategory}`)

  const completion = await client.chat.completions.create({
    messages: [
      {"role": "system", "content": `You are a professional article/story title generator. For each category provided to you, you will generate a total of ${totalTitlesPerCategory} title/s that meets the following criteria: entertaining, fun, happy an positive. No blood or violence. Your response is in json format. The format or your return must be in the following format, nothing else (ignore the amount of titles, the amount of title/s you need to generate for each category is ${totalTitlesPerCategory}): {"titles": {"category": "trending", "titles": ["title1", "title2", "title3", "title4", "title5"]}, {"category": "food", "titles": ["title1", "title2", "title3", "title4", "title5"]}, ...}`},
      {"role": "user", "content": `Here is all the categoris: ${allCategories}`},
    ],
    model: openaiModel || "gpt-3.5-turbo",
    response_format: { type: "json_object"}
  });

  const response = completion.choices[0].message.content;
  if (response) {
    const responseJSON = JSON.parse(response);
    return responseJSON["titles"]
  }
  else {
    return {"message": "Error: No response from OpenAI"}
  }
}

interface CategoryTitlesObj {
  "category": string,
  "titles": string[]
}

async function generateAllArticles(titles: CategoryTitlesObj[]) {
  const allArticles = []
  for (let i = 0; i < titles.length; i++) {
    const category: CategoryTitlesObj = titles[i];

    const articles : any[] = []
    const categoryObject = {
      "category": category.category,
      "articles": articles,
    };

    for (let j = 0; j < category.titles.length; j++) {
      const title = category.titles[j];

      const completion = await client.chat.completions.create({
        messages: [
          {"role": "system", "content": `You generate a fun and happy long form news article or story for the category ${category.category} with the title: ${title}. You do not use markdown at all. You generate associated tags for the topic, keywords aswell. Your response format in json, it must be in th format like this: {"content": "the article or story here", "tags": [tag1, tag2, tag3, tag4] }. Format the content well, use newline characters (backslash+n).`},
          {"role": "user", "content": `Here is the title: ${title}`},
        ],
        model: openaiModel || "gpt-3.5-turbo",
        response_format: { type: "json_object"},
        max_tokens: 4095,
      });

      const response = completion.choices[0].message.content;

      interface ArticleObj {
        "content": string,
        "tags": string[],
        "title": string,
        "category": string,
      }

      if (response) {
        const responseJSON : any = JSON.parse(response);
        console.log(`"${title}" has a length of ${responseJSON["content"].length}`)
        responseJSON["title"] = title;
        responseJSON["category"] = category.category;

        const newArticle : ArticleObj = responseJSON;
        categoryObject.articles.push(newArticle);
        console.log(responseJSON)
      }
      else {
        console.log({"message": "Error: No response from OpenAI"})
      }
    }
    allArticles.push(categoryObject);
  }
  return allArticles;
}

async function saveArticlesToFirebase(articles: any) {
  try {
    // Initialize Firebase Admin SDK
    const serviceAccount = require('@/serviceAccount.json'); // Replace with your service account key path
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      // Replace with your Firestore database URL
      databaseURL: "https://memeorandum-demo.firebaseio.com"
    });

    // Function to save JSON objects as documents in Firestore
    async function saveJSONObjectsToFirestore(jsonArray: any[], collectionName: string) {
      const db = admin.firestore();

      try {
        // Iterate through the JSON array
        for (const jsonObj of jsonArray) {
          // Add a new document to the collection with the key-value pairs from the JSON object
          await db.collection(collectionName).add(jsonObj);
        }
        console.log("Documents added successfully!");
      } catch (error) {
        console.error("Error adding documents: ", error);
      }
    }

    // Name of the Firestore collection where you want to save the documents
    const collectionName = "articles";

    // Call the function to save JSON objects to Firestore
    saveJSONObjectsToFirestore(articles, collectionName);

    return {"message": "success"};
  }
  catch (e) {
    console.log(e)
    return {"message": "Error: Unable to save articles to Firebase"}
  }
}
