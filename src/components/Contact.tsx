export default function Contact(){
  return(
    <section id="contact" className="contact">
      <div className="content">
        <h2>Kontakt</h2>
        <div className="divider-line"></div>
        <h4>Tveka inte att kontakta mig!</h4>
        <div className="contact-flex">
          <div className="div-1">
            <h4>Antingen på <i>mejl</i>:</h4>
            <a className="email" href="mailto: norlin.evelina@gmail.com"
              >norlin.evelina@gmail.com</a
            >
          </div>
          <div className="div-2">
            <h4>Eller via <i>sociala medier</i>:</h4>
            <a className="socials" href="#"><i className="fa-brands fa-github"></i></a>
            <a className="socials" href="#"
              ><i className="fa-brands fa-instagram"></i
            ></a>
            <a className="socials" href="#"
              ><i className="fa-brands fa-linkedin-in"></i
            ></a>
          </div>
        </div>
      </div>
    </section>
  )
}