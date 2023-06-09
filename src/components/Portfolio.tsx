import items from "../portfolioItems";

export default function Portfolio() {

  const itemHtml = items.map(item => {
      return (
      <div className={item.id % 2 == 0 ? 'even' : 'odd'} key={item.id}>
        <img src={item.image} width="500" height="300" alt={item.alt} loading="lazy" />
        <div>
          <p>{item.shortDesc}</p>
          <h3>{item.name}</h3>
          <button className="showItemBtn dark-button">visa mer</button>
        </div>
      </div>)
  })

  return (
    <>
    <section id="portfolio" className="portfolio">
      <div className="content">
        <h2>Portfolio</h2>
        <div className="divider-line"></div>
        <div id="portfolio-container" className="portfolio-container">{itemHtml}</div>
      </div>
    </section>
    </>
  )
}