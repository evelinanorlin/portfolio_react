import { useState } from "react"

export default function MobileNav(){
  const [menuHtml, setMenuHtml] = useState(<></>);
  const [menuOpen, setMenuOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const showMenu = () => {
    if(!menuOpen){
      setMenuHtml(
      <div className="open-menu">
        <div className="nav-links-mob">
          <a href="#">om</a>
          <a href="#">jobba med mig</a>
          <a href="#">portfolio</a>
          <a href="#">kontakt</a>
        </div>
      </div>);
    setMenuOpen(true);
    setBurgerOpen(true);
    } else{
      setMenuHtml(<></>);
      setMenuOpen(false);
      setBurgerOpen(false)
    }
  }

  return(
    <div id="top-bar" className="top-bar">
    <img src="public/evelina_logga.svg" height="120" width="120" />
    <div className={"burger " + (burgerOpen ? "open" : null)} onClick={showMenu}>
      <div className="burger-line"></div>
    </div>
    {menuHtml}
  </div>
  )
}