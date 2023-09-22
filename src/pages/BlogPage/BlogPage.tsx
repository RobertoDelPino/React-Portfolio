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
      "topic":"python"
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
      "topic":"javascript"
    }
  ]



  return (
    <section>
        {
          blogFilesNames.map((blogFile, index) => {
            const filePath = blogFile.title.replaceAll(" ", "-");
            console.log(filePath)
            return (
              <Link to={"/blog/" + filePath}>
                <div key={index}>
                  <img src={`../../assets/TechIcons/${blogFile.topic}.webp`} alt="" />
                  <div>
                    <h4>{blogFile.title}</h4>
                    <p>{blogFile.date}</p>
                  </div>
                </div>
              </Link>
              
            )
          })
        }
    </section>
  )
}
