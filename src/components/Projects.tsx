import items from "../portfolioItems";

export default function Projects(){
  const html = items.map((item) => {
    return (
    <div key={item.id} className="content">
      <img src={item.image} alt={item.alt} className="project-img"></img>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      <p className="small-text"><strong>Kategori:</strong> {item.category.map((cat, i) => {
        if(i < item.category.length-1){
          return cat + ', '
        } else{
          return cat
        }
      })}</p>

      <p className="small-text"><strong >Tekniker:</strong> {item.techStack.map((stack, i) => {
        if(i < item.techStack.length-1){
          return stack + ', '
        } else{
          return stack
        }
      })}</p>

    </div>
    )
  })
  return <>
    <section className="projects">
      <h2>Projekt</h2>
      {html}
    </section>
  </>
}