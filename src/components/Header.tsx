export default function Header(){
  return(
    <section id="hero" className="hero">
    <img
      src="public/eve.svg"
      className="eve"
      width="200"
      height="300"
      loading="lazy"
    />
    <img
      src="public/lina.svg"
      className="lina"
      width="300"
      height="300"
      loading="lazy"
    />
    <img
      src="public/evelina.svg"
      className="evelina"
      width="700"
      height="300"
      loading="lazy"
    />
    <div className="hero-flex">
      <img
        src="public/evelina_norlin.jpg"
        width="300"
        height="400"
        alt="image og blonde woman"
        loading="lazy"
        className="profile-picture"
      />
      <div>
        <h1>
          Frilansande <span>webbutvecklare</span> med passion för funktionell
          <span>kod</span> & krispig <span>design</span>.
        </h1>
        <p className="about">
          Just nu läser till front-end utvecklare. Vid sidan av mina studier
          läser jag kurser i grafisk design och UX-design. När jag inte sitter
          vid datorn och skapar hittar du mig i yogasalen, på en klätterklippa
          eller ute till havs.
        </p>
        <button className="dark-button">jobba med mig</button>
        <button className="dark-button">portfolio</button>
      </div>
    </div>
  </section>
  )
}