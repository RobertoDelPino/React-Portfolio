import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList"
import articles from "@domain/Repository/Articles.tsx";
import { useState } from "react";

export const BlogPage = () => {

  const [articlesSearched, setArticleSearched] = useState(articles)

  function searchArticle(text: string){
    const textToLowerCase = text.toLowerCase();
    const result = articles.filter(x => 
      x.title.toLowerCase().includes(textToLowerCase) 
      || x.topic.toLowerCase().includes(textToLowerCase) 
      || x.date.includes(textToLowerCase))
    setArticleSearched(result)
  }

  return (
    <section className="p-4 min-h-full m-auto w-[80%] md:w-[100%]">
      <h1 className="text-2xl dark:text-white font-semibold mt-7">Todos los artículos publicados</h1>
      <section>
        <label htmlFor="searchArticles_input"></label>
        <input type="text" id="searchArticles_input" onKeyUp={(input) => searchArticle(input.currentTarget.value)} />
      </section>

      <section className="grid md:grid-cols-2">
        {
          <BlogEntryList blogEntryList={articlesSearched}/>
        }
      </section>
    </section>
  )
}
