import NavigationButton from "@components/NavigationButton/NavigationButton"

export const components = {
  a: (a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) =>{
    if(!a.href.includes("http")){
      return (
        <NavigationButton
          children={a.children}
          newRoute={a.href}
          className='underline hover:text-gray-800/[.5] dark:hover:text-white/60 cursor-pointer'
        />
      )
    }

    return (
      <a href={a.href} className='underline hover:text-gray-800/[.5] dark:hover:text-white/60' target="_blank">
        {a.children}
      </a>
    )
  },
  p: (p: React.DetailedHTMLProps<React.ParamHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) =>{
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
      <table className='w-full my-10 dark:text-white border-collapse table-fixed overflow-hidden'>
        {table.children}
      </table>
    )
  },
  th: (th: React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>) => {
    return (
      <th className='border-b dark:border-slate-600 p-4 pt-0 pb-3 font-bold dark:text-white text-left'>
        {th.children}
      </th>
    )
  },
  td: (td: React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>) => {
    return (
      <td className='border-b border-slate-100 dark:border-slate-700 p-4 dark:text-white/80'>
        {td.children}
      </td>
    )
  }
}