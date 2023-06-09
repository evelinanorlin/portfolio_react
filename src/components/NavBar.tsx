import MobileNav from "./MobileNav"
import DesktopNav from "./desktopNav"


export default function NavBar() {
  // gömma burger när toppmeny syns
  // gömma meny onScroll
  return (<header>
    <MobileNav></MobileNav>
    <DesktopNav></DesktopNav>
  </header>)
}