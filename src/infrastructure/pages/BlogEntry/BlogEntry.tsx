import { Helmet } from "react-helmet"
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import {useParams} from 'react-router-dom';
import { BlogEntryTitle } from '@pages/BlogEntry/components/BlogEntryTitle/BlogEntryTitle';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import { BlogEntryData } from "@domain/Entities/BlogEntryData";
import articles from "@domain/Repository/Articles.tsx";
import { components } from "./components/markdown/markdownComponents";

export const BlogEntry = () => {
    useEffect(() => {
      const linkElement = document.createElement('link');
      linkElement.href = '//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/monokai-sublime.min.css'; // Replace with the actual URL to your external CSS file
      linkElement.rel = 'stylesheet';

      document.head.appendChild(linkElement);

      return () => {
        document.head.removeChild(linkElement);
      }
    }, [])

    SyntaxHighlighter.registerLanguage('markdown', markdown);
    setTimeout(() => {
        hljs.registerLanguage('javascript', javascript);    
        hljs.registerLanguage('typescript', typescript); 
        hljs.registerLanguage('bash', bash);
        hljs.highlightAll();
    }, 10);

    const [article, setArticle] = useState("");
    const [articleInfo, setArticleInfo] = useState<BlogEntryData>(null);
    const [isLoading, setIsLoading] = useState(true);
    const {fileName} = useParams();

    useEffect(() => {
      const getArticle = async () => {
        try {
          const data = await import(`../../../assets/BlogFiles/${fileName?.toLowerCase()}.md?raw`);
          setArticle(data.default)
          const article = articles.find((article) => article.slug === fileName);
          setArticleInfo(article);
          setIsLoading(false)
        } catch (error) {
          setIsLoading(false)
        }
        
      }
      
      getArticle();
    }, [fileName])
    

    if(isLoading){
      return (
        <section id="blogEntry" className='dark:bg-gray-800 flex flex-col flex-grow items-center justify-center'>
          <Helmet>
            <title>Roberto del Pino - Web Developer - Blog</title>
          </Helmet>
          <h1 className='text-2xl dark:text-white font-bold text-center'>Cargando...</h1>
        </section>
      )
    }

    return article == "" 
      ? (
        <section id="blogEntry" className='dark:bg-gray-800 flex flex-col flex-grow items-center justify-center'>
          <Helmet>
            <title>{articleInfo.title} Roberto del Pino - Web Developer - Blog</title>
          </Helmet>
          <h1 className='text-2xl dark:text-white font-bold text-center'>No se ha encontrado el articulo</h1>
        </section>
      )
      : (
        <section id="blogEntry" className="dark:bg-gray-800 px-3 py-4">
          <Helmet>
            <title>{articleInfo.title} - Roberto del Pino - Web Developer</title>
            <meta name="title" content={articleInfo.title} />
            <meta name="description" content={articleInfo.description} />
            <meta property="og:title" content={articleInfo.title} />
            <meta property="og:description" content={articleInfo.description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://robertodelpino.com/blog/${fileName}`} />
            <meta property="og:image" content={`https://robertodelpino.com/ogimage/${fileName}`} />
            <link rel="canonical" href={`https://robertodelpino.com/blog/${fileName}`} />
          </Helmet>
          <article className="max-w-screen-lg my-0 mx-auto">
              <BlogEntryTitle data={articleInfo} />
              <ReactMarkdown 
                  components={components}
                  remarkPlugins={[remarkGfm]}
                  >
                  {article}
              </ReactMarkdown>
          </article>
        </section>
  );
}
