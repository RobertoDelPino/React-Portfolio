var A=Object.defineProperty;var j=(r,t,a)=>t in r?A(r,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[t]=a;var i=(r,t,a)=>(j(r,typeof t!="symbol"?t+"":t,a),a);import{j as e,r as h,N as w,L as o,H as y,C as k,B as p,a as b,b as f,G as u,c as N,S as v,m as S,d as m,e as P,p as Q,R as L,f as F,g as I,h as D,i as c,k as q,l as z}from"./vendor-bc7e0200.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(s){if(s.ep)return;s.ep=!0;const n=a(s);fetch(s.href,n)}})();const B="/assets/fotoPerfil-1-06ff6577.webp",J=r=>e.jsx("article",{"aria-label":"technology",className:"mx-4 lg:mx-12 my-4",children:e.jsxs("strong",{children:[e.jsx("img",{loading:"lazy",src:r.tech.image,alt:r.tech.name,className:"w-24"}),e.jsx("p",{className:"hidden",children:r.tech.name})]})}),H=({list:r})=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"flex justify-center flex-wrap py-10 px-5 max-w-screen-lg m-auto",children:r.map((t,a)=>e.jsx(J,{tech:t},a))})}),U="data:image/webp;base64,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",W="data:image/webp;base64,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",C="/assets/css-3-f6a138e3.webp",T="/assets/html-5-74301573.webp",Y="/assets/github-0fd94da1.webp",V="/assets/mysql-5dbc286d.webp",E="/assets/react-744a4ccb.webp",Z="data:image/webp;base64,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",M="/assets/visual-studio-017e871b.webp",O="/assets/vscode-f0f32002.webp",R="/assets/webstorm-de74cbd3.webp",K="/assets/netcore-a2d07cf3.webp",G="data:image/webp;base64,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",X=()=>{const r=[{name:"HTML",image:T},{name:"CSS",image:C},{name:"Javascript",image:U},{name:"Bootstrap",image:W},{name:"Tailwind",image:G},{name:"Github",image:Y},{name:"React",image:E},{name:"Typescript",image:Z},{name:"ASP.NET Core",image:K},{name:"MySQL",image:V},{name:"Visual Studio",image:M},{name:"Visual Studio Code",image:O},{name:"WebStorm",image:R}];return e.jsx(e.Fragment,{children:e.jsxs("section",{className:"w-[100%] dark:bg-gray-800 min-h-[95%] pb-14",children:[e.jsxs("section",{className:" max-w-screen-xl m-auto flex flex-wrap w-[100%] justify-around py-10 lg:py-32 dark:bg-gray-800 ",children:[e.jsxs("div",{className:"flex content-center flex-wrap px-6 mb-9",children:[e.jsx("h1",{className:"text-2xl dark:text-white w-[100%] md:text-start lg:text-4xl text-center",children:e.jsx("b",{children:"Roberto del Pino Hormiga"})}),e.jsx("h1",{className:"text-xl dark:text-white mt-1.5 lg:text-2xl w-[100%] text-center md:text-start",children:"Software Developer"})]}),e.jsx("img",{loading:"lazy",src:B,alt:"Photo of Roberto del Pino Hormiga",className:"w-72 lg:w-80 rounded-full border-black border-2 dark:border-white"})]}),e.jsxs("section",{className:"dark:bg-gray-800 dark:text-white max-w-screen-xl m-auto",children:[e.jsx("h2",{className:"text-2xl text-bold text-center pt-10",children:"Mi Stack Tecnológico"}),e.jsx("p",{className:"text-center mt-3",children:"Herramientas que he estado utilizando en proyectos recientes"}),e.jsx(H,{list:r})]})]})})},_=()=>{const[r,t]=h.useState(localStorage.getItem("theme")||""),a=()=>{const l=r==="dark"?"light":"dark";t(l),localStorage.setItem("theme",l)};return h.useEffect(()=>{r==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]),e.jsx(e.Fragment,{children:e.jsx("button",{type:"button",onClick:a,className:" text-lg p-1 rounded-md mr-6",role:"button","aria-label":"dark-mode",children:r==="dark"?"🌙":"🌞"})})},$=()=>{const[r,t]=h.useState(!1),a=()=>t(s=>!s),l=e.jsx(e.Fragment,{children:e.jsxs("ul",{className:"justify-end mr-3 mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6  dark:text-white h-[100%]",role:"list","aria-label":"links-pages-container",children:[e.jsx("li",{className:"inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",role:"link",children:e.jsx(o,{to:"/",children:"Inicio"})}),e.jsx("li",{className:"inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",role:"link",children:e.jsx(o,{to:"/about",children:"Sobre mi"})}),e.jsx("li",{className:"inline-block mx-1 p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",role:"link",children:e.jsx(o,{to:"/projects",children:"Proyectos"})}),e.jsxs("ul",{className:"flex ",children:[e.jsx("li",{className:"text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",children:e.jsxs("a",{href:"https://www.linkedin.com/in/robertodelpinohormiga/",target:"_blank",children:[" ",e.jsx(p,{})," "]})}),e.jsx("li",{className:"text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",children:e.jsxs("a",{href:"https://github.com/RobertoDelPino",target:"_blank",children:[" ",e.jsx(b,{})," "]})}),e.jsx("li",{className:"text-2xl p-1 mr-3 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",children:e.jsxs("a",{href:"https://www.instagram.com/roberto.ph03/",target:"_blank",children:[" ",e.jsx(f,{})," "]})}),e.jsx("li",{className:"text-2xl p-1 transition duration-300 hover:bg-blue-50 dark:hover:bg-gray-600",children:e.jsxs("a",{href:"mailto:robertodelpino11@gmail.com",target:"_blank",children:[" ",e.jsx(u,{})," "]})})]})]})});return e.jsxs(e.Fragment,{children:[e.jsxs(w.Navbar,{className:"mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 dark:bg-gray-800 flex flex-wrap content-center justify-between rounded-md",children:[e.jsx("h1",{className:"inline-block leading-10 dark:text-white text-xl font-bold w-[70%] lg:w-[25%]",children:e.jsx(o,{to:"/",children:"roberto.ph"})}),e.jsxs("div",{className:"flex justify-end w-[30%] lg:w-[75%]",children:[e.jsx("div",{className:"hidden lg:block w-[90%]",children:l}),e.jsx(_,{}),e.jsx("button",{onClick:a,className:"lg:hidden",children:e.jsx(y,{role:"graphics-document",className:"dark:text-white"})})]}),e.jsx(k.Collapse,{open:r,className:"hidden w-[100%]",children:e.jsx("div",{className:"lg:hidden",children:r&&l})})]}),e.jsx("hr",{className:"max-w-screen-xl m-auto"})]})},ee=({work:r})=>e.jsxs("section",{children:[e.jsxs("article",{className:"hidden md:block border-b-2 pb-4 mt-3 ",children:[e.jsxs("article",{className:"md:flex justify-between",children:[e.jsx("h3",{className:"text-xl font-bold dark:text-white ",children:r.name}),e.jsx("p",{className:"inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold",children:r.workday})]}),e.jsxs("article",{className:"flex justify-between mt-6 text-gray-500 dark:text-gray-300",children:[e.jsxs("p",{children:["🔠",e.jsx("a",{href:r.urlCompany,target:"_blank",className:"hover:border-b-2 py-1 hover:text-gray-800 dark:hover:text-gray-100",children:r.company})]}),e.jsxs("p",{children:["🗺️",r.workplace]}),e.jsxs("p",{children:["📅",r.time]})]})]}),e.jsxs("article",{className:"block md:hidden border-b-2 pb-4 my-8",children:[e.jsx("h3",{className:"text-lg font-bold dark:text-white",children:r.name}),e.jsxs("article",{className:"flex justify-between mt-4",children:[e.jsxs("p",{children:["🔠",e.jsx("a",{href:r.urlCompany,target:"_blank",className:"hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300",children:r.company})]}),e.jsx("p",{className:"inline-block bg-green-300 w-24 text-center rounded-3xl text-green-700 font-bold",children:r.workday})]}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300 my-3",children:["🗺️",r.workplace]}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300",children:["📅",r.time]})]})]});var x=(r=>(r.FullTime="Full time",r.PartTime="Part time",r))(x||{});const re=()=>{const r=[{name:"Web developer",company:"SaludOnNet",urlCompany:"https://www.saludonnet.com/",time:"Junio 2023 - Actualidad",workplace:"San Cristóbal de La Laguna",workday:x.FullTime},{name:"Prácticas de Web Developer",company:"LeanMind",urlCompany:"https://www.leanmind.es",time:"Marzo 2023 - Mayo 2023",workplace:"San Cristóbal de La Laguna",workday:x.FullTime}];return e.jsx("section",{className:"md:w-[70%] ",children:r.map((t,a)=>e.jsx(ee,{work:t},a))})},te=({education:r})=>e.jsxs("section",{children:[e.jsxs("article",{className:"hidden md:block border-b-2 pb-4 mt-3",children:[e.jsxs("article",{className:"md:flex justify-between",children:[e.jsx("h3",{className:"text-xl font-bold dark:text-white",children:r.name}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300",children:["📅",r.time]})]}),e.jsxs("p",{className:"mt-6 text-gray-500 dark:text-gray-300",children:["🔠",e.jsx("a",{href:r.instituteUrl,target:"_blank",className:"hover:border-b-2 py-1 hover:text-gray-800 dark:hover:text-gray-200",children:r.institute})," en ",r.place]})]}),e.jsxs("article",{className:"block md:hidden border-b-2 pb-4 my-8",children:[e.jsx("h3",{className:"text-lg font-bold dark:text-white",children:r.name}),e.jsxs("p",{className:"mt-4",children:["🔠",e.jsx("a",{href:r.instituteUrl,target:"_blank",className:"hover:border-b-2 py-1 text-gray-500 hover:text-gray-600 dark:text-gray-300",children:r.institute})]}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300 my-3",children:["🗺️",r.place]}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300",children:["📅",r.time]})]})]}),ae=()=>{const r=[{name:"Desarrollo de Aplicaciones Web (DAW)",time:"Septiembre 2021 - Mayo 2023",place:"San Cristóbal de La Laguna",institute:"CIFP César Manrique",instituteUrl:"https://www.cifpcesarmanrique.es"}];return e.jsx("section",{className:"md:w-[70%] ",children:r.map((t,a)=>e.jsx(te,{education:t},a))})},se=({event:r})=>e.jsxs(e.Fragment,{children:[e.jsxs("article",{className:"hidden md:block border-b-2 pb-4 mt-3",children:[e.jsxs("article",{className:"flex justify-between",children:[e.jsx("h3",{className:"text-xl font-bold dark:text-white",children:r.name}),e.jsx("a",{href:r.website,target:"_blank",children:e.jsx("p",{className:" bg-amber-300 text-amber-700 font-bold dark:text-amber-700 dark:hover:bg-amber-400 inline-block rounded-xl w-24 text-center ",children:"Website"})})]}),e.jsxs("p",{className:"mt-4 text-gray-500 dark:text-gray-300",children:["📅 ",r.time]})]}),e.jsxs("article",{className:"block md:hidden border-b-2 pb-4 my-8",children:[e.jsx("h3",{className:"text-lg font-bold dark:text-white",children:r.name}),e.jsxs("p",{className:"text-gray-500 dark:text-gray-300 mt-4",children:["📅 ",r.time]}),e.jsx("p",{className:"mt-3",children:e.jsx("a",{href:r.website,target:"_blank",className:"bg-amber-300 font-bold dark:text-amber-700 dark:hover:bg-amber-400 inline-block rounded-xl w-24 text-center ",children:"Website"})})]})]}),ne=()=>{const r=[{name:"Voluntariado JSDay Canarias 2023",website:"https://jsdaycanarias.com",time:"Mayo 2023"}];return e.jsx("section",{className:"md:w-[70%]",children:r.map((t,a)=>e.jsx(se,{event:t},a))})},le=()=>e.jsx(e.Fragment,{children:e.jsx("section",{className:"dark:bg-gray-800 2xl:min-h-[95%] md:min-h-[80%]",children:e.jsxs("section",{className:"dark:bg-gray-800 max-w-screen-xl m-auto lg:p-8 p-4",children:[e.jsxs("article",{role:"region","aria-label":"About me region",className:"my-10",children:[e.jsx("h2",{className:"text-2xl font-extrabold tracking-wide dark:text-white my-4",children:"Sobre mi"}),e.jsx("p",{className:"dark:text-gray-100 w-[100%] lg:w-[70%]",children:"Apasionado por el desarollo de software. Invierto mi tiempo en aprender diversas arquitecturas como Arquitectura Hexagonal o Arquitectura limpia. Además, desde que hice las prácticas en LeanMind, me gusta aplicar TDD en todos los proyectos que pueda."})]}),e.jsxs("article",{role:"region","aria-label":"Work experience region",className:"my-10",children:[e.jsx("h2",{className:"text-2xl font-extrabold tracking-wide dark:text-white my-4",children:"Experiencia de Trabajo"}),e.jsx(re,{})]}),e.jsxs("article",{role:"region","aria-label":"Events region ",className:"my-10",children:[e.jsx("h2",{className:"text-2xl font-extrabold tracking-wide dark:text-white my-4",children:"Eventos asistidos"}),e.jsx(ne,{})]}),e.jsxs("article",{role:"region","aria-label":"Education region",children:[e.jsx("h2",{className:"text-2xl font-extrabold tracking-wide dark:text-white my-4",children:"Educación"}),e.jsx(ae,{})]})]})})}),ie=()=>e.jsx(e.Fragment,{children:e.jsx("footer",{className:"dark:bg-gray-800 w-[100%]",children:e.jsxs("section",{className:"dark:bg-gray-800 max-w-screen-xl m-auto md:flex md:justify-between dark:text-white px-10 py-3 pb-6",children:[e.jsx("h2",{className:"text-center block font-bold",children:"Roberto del Pino Hormiga"}),e.jsxs("section",{className:"md:flex",children:[e.jsx("p",{className:"md:px-4 m-auto my-3 text-center",children:e.jsx("a",{className:"w-3 block m-auto",href:"https://www.linkedin.com/in/robertodelpinohormiga/",target:"_blank",children:e.jsx(p,{})})}),e.jsx("p",{className:"md:px-4 m-auto my-3 text-center",children:e.jsx("a",{className:"w-3 block m-auto",href:"https://github.com/RobertoDelPino",target:"_blank",children:e.jsx(b,{})})}),e.jsx("p",{className:"md:px-4 m-auto my-3 text-center",children:e.jsx("a",{className:"w-3 block m-auto",href:"https://www.instagram.com/roberto.ph03/",target:"_blank",children:e.jsx(f,{})})}),e.jsx("p",{className:"md:px-4 m-auto my-3 text-center",children:e.jsx("a",{className:"w-3 block m-auto",href:"mailto:robertodelpino11@gmail.com",target:"_blank",children:e.jsx(u,{})})})]})]})})}),oe=r=>e.jsxs("article",{role:"article","aria-label":"Project",className:"m-3 w-52 md:w-72 dark:bg-gray-600 rounded-2xl border-2 dark:border-0",children:[e.jsx("img",{loading:"lazy",src:r.project.image,alt:r.project.title}),e.jsxs("article",{className:"p-4",children:[e.jsx("h3",{className:"font-bold text-xl mb-2",children:r.project.title}),e.jsx("p",{children:r.project.description}),e.jsxs("section",{className:"mt-3 md:flex h-10 mb-5 md:mb-0",children:[e.jsxs("p",{className:"mb-2 md:mb-0",children:[e.jsx(N,{className:"inline h-[100%]"})," ",e.jsx("a",{className:"h-[100%] mr-3 text-center underline",target:"_blank",href:r.project.previewUrl,children:"Live Preview"})]}),e.jsxs("p",{children:[e.jsx(b,{className:"inline h-[100%]"})," ",e.jsx("a",{className:"h-[100%] mr-4 text-center underline",target:"_blank",href:r.project.githubUrl,children:"Ver código"})]})]})]})]}),ce=({list:r})=>e.jsx("section",{role:"region","aria-label":"Project List Section",className:"flex justify-center flex-wrap mt-5",children:r.map((t,a)=>e.jsx(oe,{project:t},a))});class g{constructor(t,a,l,s,n){i(this,"githubUrl");i(this,"title");i(this,"description");i(this,"previewUrl");i(this,"image");this.githubUrl=t,this.title=a,this.description=l,this.previewUrl=s,this.image=n}}const de="/assets/RobertoProject-d5bc0931.webp",me="/assets/HiriamProject-b3ff6f22.webp",he=()=>{const r=[new g("https://github.com/RobertoDelPino/React-Portfolio","Mi portfolio","Te presento el código de esta página, mi portfolio. Si deseas enviarme cualquier feedback contacta conmigo a través de mi correo.","https://robertodelpino.netlify.com",de),new g("https://www.github.com","Hiriambg portfolio","Te presento el portfolio de una estudiante de fotografía, Hiriam Bartolomé, quien ha estado en diversos eventos internacionales como JSDay Canarias.","https://hiriambg.netlify.com",me)];return e.jsx("section",{className:" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800",children:e.jsxs("article",{className:"max-w-screen-xl m-auto dark:text-white mt-20",children:[e.jsx("h2",{className:"text-3xl font-bold text-center",children:"Proyectos"}),e.jsx("p",{className:"text-center text-lg",children:"Proyectos que he creado hasta ahora"}),e.jsx(ce,{list:r})]})})},xe=`\r
An h1 header\r
============\r
\r
Paragraphs are separated by a blank line.\r
\r
2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists\r
look like:\r
\r
Note that --- not considering the asterisk --- the actual text\r
content starts at 4-columns in.\r
\r
> Block quotes are\r
> written like so.\r
>\r
> They can span multiple paragraphs,\r
> if you like.\r
\r
Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all\r
in chapters 12--14"). Three dots ... will be converted to an ellipsis.\r
Unicode is supported. ☺\r
\r
\r
\r
An h2 header\r
------------\r
\r
Here's a numbered list:\r
\r
 1. first item\r
 2. second item\r
 3. third item\r
\r
Note again how the actual text starts at 4 columns in (4 characters\r
from the left side). Here's a code sample:\r
\r
    # Let me re-iterate ...\r
    for i in 1 .. 10 { do-something(i) }\r
\r
As you probably guessed, indented 4 spaces. By the way, instead of\r
indenting the block, you can use delimited blocks, if you like:\r
\r
~~~\r
define foobar() {\r
    print "Welcome to flavor country!";\r
}\r
~~~\r
\r
(which makes copying & pasting easier). You can optionally mark the\r
delimited block for Pandoc to syntax highlight it:\r
\r
~~~python\r
import time\r
# Quick, count to ten!\r
for i in range(10):\r
    # (but not *too* quick)\r
    time.sleep(0.5)\r
    print i\r
~~~\r
\r
\r
\r
### An h3 header ###\r
\r
Now a nested list:\r
\r
 1. First, get these ingredients:\r
\r
      * carrots\r
      * celery\r
      * lentils\r
\r
 2. Boil some water.\r
\r
 3. Dump everything in the pot and follow\r
    this algorithm:\r
\r
        find wooden spoon\r
        uncover pot\r
        stir\r
        cover pot\r
        balance wooden spoon precariously on pot handle\r
        wait 10 minutes\r
        goto first step (or shut off burner when done)\r
\r
    Do not bump wooden spoon or it will fall.\r
\r
Notice again how text always lines up on 4-space indents (including\r
that last line which continues item 3 above).\r
\r
Here's a link to [a website](http://foo.bar), to a [local\r
doc](local-doc.html), and to a [section heading in the current\r
doc](#an-h2-header). Here's a footnote [^1].\r
\r
[^1]: Footnote text goes here.\r
\r
Tables can look like this:\r
\r
size  material      color\r
----  ------------  ------------\r
9     leather       brown\r
10    hemp canvas   natural\r
11    glass         transparent\r
\r
Table: Shoes, their sizes, and what they're made of\r
\r
(The above is the caption for the table.) Pandoc also supports\r
multi-line tables:\r
\r
--------  -----------------------\r
keyword   text\r
--------  -----------------------\r
red       Sunsets, apples, and\r
          other red or reddish\r
          things.\r
\r
green     Leaves, grass, frogs\r
          and other things it's\r
          not easy being.\r
--------  -----------------------\r
\r
A horizontal rule follows.\r
\r
***\r
\r
Here's a definition list:\r
\r
apples\r
  : Good for making applesauce.\r
oranges\r
  : Citrus!\r
tomatoes\r
  : There's no "e" in tomatoe.\r
\r
Again, text is indented 4 spaces. (Put a blank line between each\r
term/definition pair to spread things out more.)\r
\r
Here's a "line block":\r
\r
| Line one\r
|   Line too\r
| Line tree\r
\r
and images can be specified like so:\r
\r
And note that you can backslash-escape any punctuation characters\r
which you wish to be displayed literally, ex.: \\\`foo\\\`, \\*bar\\*, etc.`,be=()=>{console.warn=()=>console.log(),v.registerLanguage("markdown",S),setTimeout(()=>{m.registerLanguage("javascript",P),m.registerLanguage("python",Q),document.querySelectorAll("div.code").forEach(t=>{m.highlightElement(t)})},10);const r={a:t=>e.jsx("a",{href:t.href,className:"olaaaaa",target:"_blank",children:t.children}),p:t=>e.jsx("p",{className:"dark:text-white my-10",children:t.children}),h1:t=>e.jsx("h1",{className:"text-2xl dark:text-white",children:t.children}),h2:t=>e.jsx("h2",{className:"text-xl dark:text-white",children:t.children}),h3:t=>e.jsx("h2",{className:"text-xl dark:text-white",children:t.children})};return e.jsx("section",{className:" 2xl:min-h-[95%] xl:min-h-[70%] md:min-h-[80%] dark:bg-gray-800",children:e.jsx("article",{className:"max-w-screen-xl m-auto dark:algo mt-7",children:e.jsx(L,{className:"markdown-body",components:r,remarkPlugins:[F],children:xe})})})},ge=()=>e.jsx("div",{className:"dark:bg-gray-800 h-[100%]",children:e.jsxs(I,{children:[e.jsx($,{}),e.jsxs(D,{children:[e.jsx(c,{path:"/",element:e.jsx(X,{})}),e.jsx(c,{path:"/about",element:e.jsx(le,{})}),e.jsx(c,{path:"/projects",element:e.jsx(he,{})}),e.jsx(c,{path:"/blog",element:e.jsx(be,{})})]}),e.jsx(ie,{})]})});q.createRoot(document.getElementById("root")).render(e.jsx(z.StrictMode,{children:e.jsx(ge,{})}));
