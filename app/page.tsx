"use client";

import { populateDatabaseWithArticles } from "@/lib/helpers";
import {useEffect, useState} from "react";
export default function Home() {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const populateDB = async () => {
      if (articles.length === 0) {
        const result = await populateDatabaseWithArticles();
        console.log(result)
        setArticles(result);
      }
    }
    populateDB()

  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {
        articles && (
          <div className="text-white">{JSON.stringify(articles)}</div>)
      }
    </main>
  );
}
