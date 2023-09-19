import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import prueba from '../../assets/BlogFiles/Prueba.md?raw'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

export const BlogPage = () => {
    console.warn = () => console.log();
    SyntaxHighlighter.registerLanguage('markdown', markdown);
    setTimeout(() => {
        hljs.registerLanguage('javascript', javascript);    
        hljs.registerLanguage('python', python);   
        hljs.highlightAll();
    }, 10);

    const components = {
        a: (a: any) =>{
          return (
            <a href={a.href} className='olaaaaa' target="_blank">
              {a.children}
            </a>
          )
        },
        p: (p: any) =>{
            return (
              <p className='dark:text-white my-10'>
                {p.children}
              </p>
            )
        },
        h1: (h1: any) =>{
            return (
              <h1 className='text-2xl dark:text-white'>
                {h1.children}
              </h1>
            )
        },
        h2: (h2: any) =>{
            return (
              <h2 className='text-xl dark:text-white'>
                {h2.children}
              </h2>
            )
        },
        h3: (h2: any) =>{
            return (
              <h2 className='text-xl dark:text-white'>
                {h2.children}
              </h2>
            )
        },

      }

    return (
        <section className=" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800">
            <article className="max-w-screen-xl m-auto dark:algo mt-7">
                <ReactMarkdown 
                    className='markdown-body' 
                    components={components}
                    remarkPlugins={[remarkGfm]}
                    
                    >
                    {prueba}
                </ReactMarkdown>
            </article>
        </section>
    );
}
