"use client";

import { populateDatabaseWithArticles } from "@/lib/helpers";
import {useEffect, useState} from "react";
export default function Home() {
  const [articles, setArticles] = useState([]);

  const populateDB = async () => {
    if (articles.length === 0) {
      const result : any = await populateDatabaseWithArticles();
      console.log(result)
      setArticles(result);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button 
        className="bg-blue-500 px-[15px] py-[8px] rounded-[5px] font-bold text-black"
        onClick={populateDB}
      >
        Populate DB
      </button>

      {
        articles && (
          <div className="text-white">{JSON.stringify(articles)}</div>)
      }
    </main>
  );
}
