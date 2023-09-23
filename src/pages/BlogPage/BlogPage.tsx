import { BlogEntryList } from "@components/BlogEntryList/BlogEntryList"

export const BlogPage = () => {
  return (
    <section className="max-w-xl min-h-full h-4/5 m-auto">
      <h1 className="text-2xl dark:text-white font-semibold">Últimos articulos publicados...</h1>
        {
          <BlogEntryList />
        }
    </section>
  )
}
