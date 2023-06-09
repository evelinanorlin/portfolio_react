import { useState } from "react"

export default function DesktopNav(){
  const [burger, setBurger] = useState(<div className="burger">
  <div className="burger-line"></div>
</div>);

  // const showBurger = () => {
  //   if(window.pageYOffset === 0){
  //     setBurger(<></>)
  //     console.log('ontop')
  //   }else{
  //   setBurger(<div className="burger">
  //     <div className="burger-line"></div>
  //   </div>)
  //   console.log('scrollin');
  //   }
  // }

  // const scrollTimer = () => {
  //   console.log('körs');
  //   const timeOut = setTimeout(() => {
  //     showBurger();
  //     console.log('yes')
  //   }, 1000);
  //   // const timeOut = setTimeout(showBurger, 200);
  //   clearTimeout(timeOut);
  // }

  // window.addEventListener('scroll', scrollTimer);


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
    {burger}
  </nav>)
}