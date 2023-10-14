import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import {useParams} from 'react-router-dom';
import { BlogEntryTitle } from '@components/BlogEntryTitle/BlogEntryTitle';
import javascript from 'highlight.js/lib/languages/javascript';

export const BlogEntry = () => {
    SyntaxHighlighter.registerLanguage('markdown', markdown);
    setTimeout(() => {
        hljs.registerLanguage('javascript', javascript);    
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
                  return <BlogEntryTitle data={data} />
              }
            }

            return (
              <p className='dark:text-white mt-6'>
                {p.children}
              </p>
            )
        },
        h1: (h1: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h1 className='text-2xl dark:text-white my-8 font-bold'>
                {h1.children}
              </h1>
            )
        },
        h2: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h2 className='text-xl dark:text-white mt-10 mb-6 font-bold'>
                {h2.children}
              </h2>
            )
        },
        h3: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h2 className='text-xl dark:text-white mt-10 mb-6 font-bold'>
                {h2.children}
              </h2>
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
            <li className='dark:text-white'>
              {li.children}
            </li>
          )
        },

      }

      const [article, setArticle] = useState("");
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
          <section className='dark:bg-gray-800 flex items-center justify-center h-[85%]'>
            <h1 className='text-2xl dark:text-white font-bold text-center'>Cargando...</h1>
          </section>
        )
      }

      return article == "" 
        ? (
          <section className='dark:bg-gray-800 flex items-center justify-center h-[85%]'>
            <h1 className='text-2xl dark:text-white font-bold text-center'>No se ha encontrado el articulo</h1>
          </section>
        )
        : (
          <section className=" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800">
              <article className="max-w-screen-xl m-auto dark:algo">
                  <ReactMarkdown 
                      className='markdown-body' 
                      components={components}
                      remarkPlugins={[remarkGfm]}
                      
                      >
                      {article}
                  </ReactMarkdown>
              </article>
          </section>
    );
}
