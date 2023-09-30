import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList"

export const BlogPage = () => {
  return (
    <section className="p-4 min-h-full m-auto">
      <h1 className="text-2xl dark:text-white font-semibold mt-7">Todos los artículos publicados</h1>
      <section className="grid grid-cols-2">
        {
          <BlogEntryList allList={true}/>
        }
      </section>
    </section>
  )
}
