import { useEffect, useState } from 'react'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import {useParams} from 'react-router-dom';
import { BlogEntryTitle } from '@components/BlogEntryTitle/BlogEntryTitle';
import { BlogEntryData } from '@domain/Entities/BlogEntryData';

export const BlogEntry = () => {
    SyntaxHighlighter.registerLanguage('markdown', markdown);
    setTimeout(() => {
        hljs.registerLanguage('javascript', javascript);    
        hljs.registerLanguage('python', python);   
        hljs.highlightAll();
    }, 10);

    const components = {
        a: (a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) =>{
          return (
            <a href={a.href} className='olaaaaa' target="_blank">
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
              <p className='dark:text-white mt-4'>
                {p.children}
              </p>
            )
        },
        h1: (h1: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
            return (
              <h1 className='text-2xl dark:text-white mt-12 mb-6 font-bold'>
                {h1.children}
              </h1>
            )
        }, //margin: 48px 0 24px;
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

      }

      const [article, setArticle] = useState("");
      const {fileName} = useParams();

      useEffect(() => {
        const image = async () => {
          const data = await import(`../../assets/BlogFiles/${fileName?.toLowerCase()}.md?raw`);
          setArticle(data.default)
        }
        
        image();
      }, [fileName])
      
      
      return (
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
