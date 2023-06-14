import { ParallaxBanner } from 'react-scroll-parallax';

export default function Header(){
  return(
    <section className="heroWrap">
      <div className="hero">
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
      <h1>Evelina</h1>
      <div className="hero-flex">
      <ParallaxBanner layers={[{ image: '/evelina_norlin.jpg', speed: -10 }]} className={"profile-picture "} />
        <div>
          <h3>
            Frilansande <span>webbutvecklare</span> med passion för funktionell 
            <span> kod</span> & krispig <span>design</span>.
          </h3>
          <div className="buttons">
          <button className="dark-button">jobba med mig</button>
          <button className="dark-button">portfolio</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}