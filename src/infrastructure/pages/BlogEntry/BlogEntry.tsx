import { Helmet } from "react-helmet"
import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import {useNavigate, useParams} from 'react-router-dom';
import { BlogEntryTitle } from '@pages/BlogEntry/components/BlogEntryTitle/BlogEntryTitle';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import bash from 'highlight.js/lib/languages/bash';
import { flushSync } from "react-dom";

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

  const navigate = useNavigate();
  const viewNavigate = (newRoute: string) => {
      if (newRoute === window.location.pathname) return;
      if (!document.startViewTransition) {
          return navigate(newRoute);
      }
      return document.startViewTransition(() => {
        flushSync(() => {
            navigate(newRoute);
        });
    });
  };

  const components = {
      a: (a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) =>{
        if(!a.href.includes("http")){
          return (
            <a onClick={(e) => {e.preventDefault(); viewNavigate(a.href)}} href={a.href} className='underline hover:text-gray-800/[.5] dark:hover:text-white/60 cursor-pointer'>
              {a.children}
            </a>
          )
        }

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
                setArticleDescription(data.description)
                return <BlogEntryTitle data={data} />
            }
          }

          return (
            <p className='dark:text-white my-3 inline-block w-11/12 text-lg'>
              {p.children}
            </p>
          )
      },
      h1: (h1: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
          return (
            <h1 className='text-3xl dark:text-white mt-6 mb-3 font-bold'>
              {h1.children}
            </h1>
          )
      },
      h2: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
          return (
            <h2 className='text-2xl dark:text-white mt-5 mb-2 font-bold'>
              {h2.children}
            </h2>
          )
      },
      h3: (h2: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
          return (
            <h3 className='text-2xl dark:text-white mt-6 mb-3 font-bold'>
              {h2.children}
            </h3>
          )
      },
      h4: (h4: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
          return (
            <h4 className='text-xl dark:text-white mt-6 mb-3'>
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
          <li className='dark:text-white list-inside my-3 text-lg'>
            {li.children}
          </li>
        )
      },

      ol: (ol: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) =>{
        return (
          <ol className='list-decimal ml-8 my-2'>
            {ol.children}
          </ol>
        )
      },
      blockquote: (bloquote: React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>) =>{
        return (
          <blockquote className='border-l-4 border-gray-800 dark:border-white/60 pl-4 mb-2 mt-3 bg-gray-600/30 dark:bg-gray-600/50 '>
            {bloquote.children}
          </blockquote>
        )
      },
      img: (img: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
        return (
          <img {...img} className="w-full h-40 md:h-96 object-contain object-center" />
        )
      },
      table: (table: React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => {
        return (
          <table className='w-full my-10 dark:text-white border-collapse table-fixed'>
            {table.children}
          </table>
        )
      },
      th: (th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>) => {
        return (
          <th className='border-b dark:border-slate-600 p-4 pl-8 pt-0 pb-3 font-bold dark:text-white text-left'>
            {th.children}
          </th>
        )
      },
      td: (td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => {
        return (
          <td className='border-b border-slate-100 dark:border-slate-700 p-4 pl-8 dark:text-white/80'>
            {td.children}
          </td>
        )
      }
    }

    const [article, setArticle] = useState("");
    const [articleTitle, setArticleTitle] = useState("");
    const [articleDescription, setArticleDescription] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const {fileName} = useParams();

    useEffect(() => {
      const getArticle = async () => {
        try {
          const data = await import(`../../../assets/BlogFiles/${fileName?.toLowerCase()}.md?raw`);
          setArticle(data.default)
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
            <title>{articleTitle} Roberto del Pino - Web Developer - Blog</title>
          </Helmet>
          <h1 className='text-2xl dark:text-white font-bold text-center'>No se ha encontrado el articulo</h1>
        </section>
      )
      : (
        <section id="blogEntry" className="dark:bg-gray-800 px-3 py-4">
          <Helmet>
            <title>{articleTitle} - Roberto del Pino - Web Developer</title>
            <meta name="title" content={articleTitle} />
            <meta name="description" content={articleDescription} />
            <meta property="og:title" content={articleTitle} />
            <meta property="og:description" content={articleDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`https://robertodelpino.com/blog/${fileName}`} />
            <meta property="og:image" content={`https://robertodelpino.com/ogimage/${fileName}`} />
            <link rel="canonical" href={`https://robertodelpino.com/blog/${fileName}`} />
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
