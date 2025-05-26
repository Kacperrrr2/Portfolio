import Intro from "./components/intro/Intro.jsx";
import Tobar from "./components/topbar/Tobar.jsx";
import Portfolio from "./components/porfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import"./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu.jsx";
function App() {
  const [menuOpen,setMenuOpen]= useState(false);
  return (
    <div className="app">
      <Tobar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
       <Intro/>
       <Portfolio/>
       <Works/>
       <Testimonials/>
       <Contact/>
     </div>
    </div>
  );
}

export default App;
