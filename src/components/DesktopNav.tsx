import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./NavBar";

export default function DesktopNav(){
  const [burgerVisible, setBurgerVisible] = useState(false);
  const [navBarVisible, setNavBarVisible] = useState(true);

useEffect(() => {
  window.addEventListener("scroll", listenToScroll);
  return () =>
     window.removeEventListener("scroll", listenToScroll);
})

const listenToScroll = () => {
  const heightToShowFrom = 1;
  const winScroll = document.body.scrollTop ||
    document.documentElement.scrollTop;

  if (winScroll > heightToShowFrom) {
    setBurgerVisible(true);
    setNavBarVisible(false);
  } else {
    setBurgerVisible(false);
    setNavBarVisible(true);
  }
};

const showNav = () => {
  console.log('click')
  if(navBarVisible){
    setNavBarVisible(false)
  } else{
    setNavBarVisible(true)
  }
}

  return (<nav> 
    {navBarVisible && (
    <div className="nav-flex">
      <a href="" className="logo-img"
        ><img src="/evelina_logga.svg" height="120" width="120"
      /></a>
      <div className="nav-links">
        <a href="#">om</a>
        <a href="#">jobba med mig</a>
        <a href="#">portfolio</a>
        <a href="#">kontakt</a>
      </div>
    </div>
  )}
    {burgerVisible && (
      <div className="burger" onClick={showNav}>
        <div className="burger-line"></div>
      </div>
    )}
  </nav>)
}