import { Helmet } from "react-helmet"
import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList"
import articles from "@domain/Repository/Articles.tsx";
import { useState } from "react";
import { findImage } from "@assets/Images/Images";

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
    <section id="blog" className="px-5 max-w-screen-xl md:w-[100%] dark:bg-gray-800 mt-2 mb-10 mx-auto flex flex-col flex-grow">
      <Helmet>
        <title>Roberto del Pino - Web Developer - Blog</title>
      </Helmet>
      <h1 className="text-2xl dark:text-white font-semibold mt-7 mb-4">Todos los artículos publicados</h1>
      <section className="mt-3 relative w-full md:w-72 mb-3">
        <label htmlFor="searchArticles_input" className="w-5 absolute right-0 h-[100%] align-middle mr-2 flex items-center"> <img src={findImage("searchSymbol")} alt="" /></label>
        <input className="p-1 border rounded w-[100%]" type="text" id="searchArticles_input" onKeyUp={(input) => searchArticle(input.currentTarget.value)} placeholder="Busca un artículo" />
      </section>

      <section className="grid md:grid-cols-2 auto-rows-max mt-7">
        {
          <BlogEntryList blogEntryList={articlesSearched}/>
        }
      </section>
    </section>
  )
}
