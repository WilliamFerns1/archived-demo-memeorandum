from fastapi import FastAPI
from fastapi.openapi.models import APIKey
from pydantic import BaseModel
from dotenv import load_dotenv
from openai import OpenAI
import os
import json

load_dotenv()

openai_api_key = os.getenv("OPENAI_API_KEY")
openai_model = os.getenv("OPENAI_MODEL")

client = OpenAI(api_key=openai_api_key)

app = FastAPI()

class PopulateDBBody(BaseModel):
    total_articles_per_category: int # Total articles to be generated per category
    all_categories: list[str] 

app.get("/")
def read_root():
    return {"Hello": "World"}

app.post("/populate_db") # This is the endpoint that will populate the database with 3 articles for each category in the body
async def populate_db(body: PopulateDBBody):
    # This is where you would write the code to populate the database
    all_categories = body.all_categories
    total_articles = body.total_articles_per_category


    article_names_json = generate_article_names(all_categories, total_articles)
    all_articles = []
    for category in article_names_json:
        all_category_articles = []
        print(f"Generating articles for {category['category']}")
        for index, title in enumerate(category["articles_titles"]):
            print(f"Generating article for {title}")

            # Generate article using OpenAI API
            completion = client.chat.completions.create(
                model=openai_model or "gpt-3.5-turbo",
                response_format={"type": "json_object"},
                messages=[
                    {"role": "system", "content": """You are a professional article writer, who writes happy, positive and fun articles. You never write in markdown. You will receive an article title, and you will respond in JSON, like this: 
                    {
                        'article': 'the entire generated article here',
                        'article_title': 'the article title here',
                        'article_tags: ['tag1', 'tag2', 'tag3'],
                    }
                    ."""},
                    {"role": "user", "content": f"Here is the article title, make it a happy, fun and postive article: {title}"},
                ]
            )

            article_json_str = completion.choices[0].message.content or ""
            article_json = json.loads(article_json_str)
            article_json["category"] = category["category"]

            print(f"Generated article for `{title}`, total length: {len(article_json['article'])}")
            all_category_articles.append(article_json)
        all_articles.append(all_category_articles)

    return {"message": "Database populated successfully"}

# Generate all article names for each category.
def generate_article_names(categories: list, total_articles: int):
    completion = client.chat.completions.create(
        model=openai_model or "gpt-3.5-turbo",
        response_format={"type": "json_object"},
        messages=[
            {
                "role": "system", 
                "content": f"""
                    You are a professional article title generator, that generates captivating, positive and happy news articles titles for given input articles. You generate a total amount of {total_articles} positive article titles per category. You will receive an array of categories, and then you will output in this format:

                    [
                        {{
                            'category': 'Category 1',
                            'articles_titles': ['Article 1', 'Article 2', 'Article 3']
                        }},
                        {{
                            'category': 'Category 2',
                            'articles_titles': ['Article 1', 'Article 2', 'Article 3']
                        }},
                        ...
                    ]
                """
            },
            {"role": "user", "content": f"Generate article names for each of the following categories: {categories}"}
        ]
    )

    categories_str = completion.choices[0].message.content or ""
    print(categories_str)
    categories_json = json.loads(categories_str)
    print(f"Categories JSON: {categories_json}")

    return categories_json
