import { Helmet } from "react-helmet"
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import {useParams} from 'react-router-dom';
import { BlogEntryTitle } from '@components/BlogEntryTitle/BlogEntryTitle';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

export const BlogEntry = () => {
    SyntaxHighlighter.registerLanguage('markdown', markdown);
    setTimeout(() => {
        hljs.registerLanguage('javascript', javascript);    
        hljs.registerLanguage('typescript', typescript);    
        hljs.highlightAll();
    }, 10);

    const components = {
        a: (a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) =>{
          return (
            <a href={a.href} className='underline hover:text-gray-800/[.5] dark:hover:text-white/60' target="_blank">
              {a.children}
            </a>
          )
        },
        p: (p: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            const children = [...(p.children as string[])];
            if(typeof(children[0]) == "string"){
              if(children[0].includes("title")){
                  const data = JSON.parse(children[0])
                  setArticleTitle(data.title)
                  return <BlogEntryTitle data={data} />
              }
            }

            return (
              <p className='dark:text-white my-3 inline-block'>
                {p.children}
              </p>
            )
        },
        h1: (h1: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h1 className='text-2xl dark:text-white mt-6 mb-3 font-bold'>
                {h1.children}
              </h1>
            )
        },
        h2: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h2 className='text-xl dark:text-white mt-5 mb-2 font-bold'>
                {h2.children}
              </h2>
            )
        },
        h3: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h3 className='text-xl dark:text-white mt-6 mb-3 font-bold'>
                {h2.children}
              </h3>
            )
        },
        h4: (h4: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h4 className='text-lg dark:text-white mt-6 mb-3'>
                {h4.children}
              </h4>
            )
        },
        ul: (ul: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLUListElement>, HTMLUListElement>) =>{
          return (
            <ul className='list-disc ml-8'>
              {ul.children}
            </ul>
          )
        },

        li: (li: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLLIElement>, HTMLLIElement>) =>{
          return (
            <li className='dark:text-white list-decimal list-inside'>
              {li.children}
            </li>
          )
        },

        ol: (ol: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) =>{
          return (
            <ol className='list-decimal ml-8'>
              {ol.children}
            </ol>
          )
        }

      }

      const [article, setArticle] = useState("");
      const [articleTitle, setArticleTitle] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const {fileName} = useParams();

      useEffect(() => {
        const image = async () => {
          try {
            const data = await import(`../../assets/BlogFiles/${fileName?.toLowerCase()}.md?raw`);
            setArticle(data.default)
            setIsLoading(false)
          } catch (error) {
            setIsLoading(false)
          }
          
        }
        
        image();
      }, [fileName])
      

      if(isLoading){
        return (
          <section className='dark:bg-gray-800 flex flex-col flex-grow items-center justify-center'>
            <Helmet>
              <title>Roberto del Pino - Web Developer - Blog</title>
            </Helmet>
            <h1 className='text-2xl dark:text-white font-bold text-center'>Cargando...</h1>
          </section>
        )
      }

      return article == "" 
        ? (
          <section className='dark:bg-gray-800 flex flex-col flex-grow items-center justify-center'>
            <Helmet>
              <title>Roberto del Pino - Web Developer - Blog</title>
            </Helmet>
            <h1 className='text-2xl dark:text-white font-bold text-center'>No se ha encontrado el articulo</h1>
          </section>
        )
        : (
          <section className="dark:bg-gray-800 p-8">
            <Helmet>
              <title>Roberto del Pino - Web Developer - {articleTitle}</title>
            </Helmet>
            <article className="max-w-screen-lg my-0 mx-auto">
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
