import { Link } from "react-router-dom"

export const BlogPage = () => {
  const blogFilesNames = [
    {
      "title":"5 consejos para desarrolladores Junior", 
      "date":"2023-03-23",
      "description":"Te comparto 5 consejos para desarrolladores que están comenzando en el mundo de la programación",
      "topic":"javascript"
    },
    {
      "title":"Maneras de mejorar como desarrollador de aplicaciones", 
      "date":"2023-02-10",
      "description":"Ideas de proyectos para mejorar como desarollador",
      "topic":"javascript"
    },
    {
      "title":"Empezar bien el año siendo programador", 
      "date":"2023-01-01",
      "description":"Te muestro distintas ideas creativas para empezar con mucha motivación este 2023",
      "topic":"javascript"
    },
    {
      "title":"Nuevos métodos de EMC 6", 
      "date":"2022-03-23",
      "description":"Te comparto 5 métodos de javascript para desarrolladores que están comenzando en el mundo de la programación",
      "topic":"netcore"
    }
  ]



  return (
    <section className="max-w-xl min-h-full h-4/5 m-auto">
      <h1 className="text-2xl dark:text-white font-semibold">Últimos articulos publicados...</h1>

        {
          blogFilesNames.map((blogFile, index) => {
            const filePath = blogFile.title.replaceAll(" ", "-");
            return (
              <Link to={"/blog/" + filePath} key={index}>
                <div className="flex my-5 dark:hover:bg-slate-50/[.4] p-3 rounded group">
                  <img className="w-[50px] group-hover:scale-[1.2] transition duration-500 opacity-80" src={`../../../src/assets/TechIcons/${blogFile.topic}.webp`} alt="" />
                  <div className="ml-5">
                    <h4 className="dark:text-white text-lg">{blogFile.title}</h4>
                    <p className="dark:text-white text-sm">{blogFile.date}</p>
                  </div>
                </div>
              </Link>
              
            )
          })
        }
    </section>
  )
}
