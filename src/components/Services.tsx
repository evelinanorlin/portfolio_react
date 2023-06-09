import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Services(){
  return (
    <>
    <section className="services">
    <div className="content">
      <h2>Jobba med mig</h2>
      <div className="divider-line"></div>
      <div className="services-flex">
        <div className="div-1">
          <h3>Webbutveckling och design</h3>
          <p className="p-last">
            Just nu läser till front-end utvecklare på Medieinstitutet. Vid
            sidan av mina studier läser jag kurser i grafisk design och
            UX-design. När jag inte sitter vid datorn och skapar hittar du mig
            i yogasalen, på en klätterklippa eller ute till havs.
          </p>
        </div>
        <div className="divider-line vertical-line"></div>
        <div className="div-2">
          <h3>Hur funkar det?</h3>
          <p className="p-last">
            Just nu läser till front-end utvecklare på Medieinstitutet. Vid
            sidan av mina studier läser jag kurser i grafisk design och
            UX-design. När jag inte sitter vid datorn och skapar hittar du mig
            i yogasalen, på en klätterklippa eller ute till havs.
          </p>
        </div>
      </div>
      <h4>
        Låter det som att vi kan samarbeta? <br /><span>Hör av dig</span> så
        tar vi en digital fika och snackar ihop oss!
      </h4>
      <button className="light-button">kontakt</button>
    </div>
  </section>

  <div className="coffee-img">
  <ParallaxBanner style={{ aspectRatio: '1 / 1.2' }}>
      <ParallaxBannerLayer image="/chemex.jpg" speed={-15} />
    </ParallaxBanner>
  </div>
  
  {/* <img
    src="public/chemex.jpg"
    height="400"
    width="300"
    alt="coffee pouring into a cup"
    loading="lazy"
    className="coffee-img"
  /> */}
  </>
  )
}