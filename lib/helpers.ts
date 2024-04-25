"use server";

import OpenAI from "openai";
const openaiAPIKey = process.env.OPENAI_API_KEY;
const openaiModel = process.env.OPENAI_MODEL;

console.log(openaiAPIKey)
console.log(openaiModel)

const client = new OpenAI({apiKey: openaiAPIKey});

export async function populateDatabaseWithArticles() {
  const allCategories = [
    "Trending",
    "Food",
    "Wellness",
    "Travel",
    "sports",
    "science",
    "celebrity",
    "art",
    "nature",
  ]
  const titles = await generateAllArticleTitles(allCategories, 5)
  console.log("BACKEND: ", titles)
  return titles
}

async function generateAllArticleTitles(allCategories: string[], totalTitlesPerCategory: number = 5)  {
  const completion = await client.chat.completions.create({
    messages: [
      {"role": "system", "content": `You generate a total of ${totalTitlesPerCategory} {entertaining, fun and happy news articles and stories titles for each catogory, in JSON format.`}, 
      {"role": "user", "content": `Here is all the categoris: ${allCategories}`},
    ],
    model: openaiModel || "gpt-3.5-turbo",
    response_format: { type: "json_object"}
  });

  const response = completion.choices[0].message.content;
  if (response) {
    const responseJSON = JSON.parse(response);
    return responseJSON;
  }
  else {
    return {"message": "Error: No response from OpenAI"}
  }
}
