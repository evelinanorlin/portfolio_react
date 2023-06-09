import { useState } from "react";
import { useEffect } from "react";

export default function DesktopNav(){
  const [isVisible, setIsVisible] = useState(false)
  const burger = (
  <div className="burger">
    <div className="burger-line"></div>
  </div>);

useEffect(() => {
  window.addEventListener("scroll", listenToScroll);
  return () =>
     window.removeEventListener("scroll", listenToScroll);
})

const listenToScroll = () => {
  const heightToShowFrom = 100;
  const winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;

  if (winScroll > heightToShowFrom) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};

  return (<nav> 
    <div className="nav-flex" id="desktop-nav">
      <a href="" className="logo-img"
        ><img src="public/evelina_logga.svg" height="120" width="120"
      /></a>
      <div className="nav-links">
        <a href="#">om</a>
        <a href="#">jobba med mig</a>
        <a href="#">portfolio</a>
        <a href="#">kontakt</a>
      </div>
    </div>
    {isVisible && burger}
  </nav>)
}