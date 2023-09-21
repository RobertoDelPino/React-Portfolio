import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import prueba from '../../assets/BlogFiles/5-consejos-para-desarrolladores-junior.md?raw'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';

export const BlogPage = () => {
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
            const children = p.children;
            if(typeof(children[0]) == "string"){
                if(children[0].includes("title")){
                    console.log("esto es el titulo")
                    console.log(JSON.parse(children[0]))
                    // DESARROLLAR COMPONENTE DE HEADER PARA CADA ARTICULO DEL BLOG
                    // PENSAR CÓMO HACER EL BLOG LIST Y MOSTRAR CADA BLOG
                }
            }

            return (
              <p className='dark:text-white mt-4'>
                {p.children}
              </p>
            )
        },
        h1: (h1: any) =>{
            return (
              <h1 className='text-2xl dark:text-white mt-12 mb-6 font-bold'>
                {h1.children}
              </h1>
            )
        }, //margin: 48px 0 24px;
        h2: (h2: any) =>{
            return (
              <h2 className='text-xl dark:text-white mt-10 mb-6 font-bold'>
                {h2.children}
              </h2>
            )
        },
        h3: (h2: any) =>{
            return (
              <h2 className='text-xl dark:text-white mt-10 mb-6 font-bold'>
                {h2.children}
              </h2>
            )
        },

      }

    return (
        <section className=" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800">
            <code>algo</code>
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
