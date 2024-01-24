import React, { useEffect, useState } from "react";
import './Styles/app.scss'
import Header, { Navmin } from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Timeline from "./Components/Timeline";
import Services from "./Components/Services";

import Contact from "./Components/Contact";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";



function App() {
  const [ham,setHam]=useState(false)
  const [ratio,setRatio]=useState(window.innerWidth/window.innerHeight);

//  console.log(ratio)

useEffect(()=>{ 
  const resizeRatio =()=>{ 
setRatio(window.innerWidth/window.innerHeight)
  };
  window.addEventListener("resize",resizeRatio)
  return()=>{ 
    window.removeEventListener("resize",resizeRatio)
  }
},[ratio])

  return ratio <2 ?(
    <> 
    <Navmin ham={ham} setHam={setHam}/>
    <Header ham={ham} setHam={setHam}/>
    <Home ratio={ratio}/>
    <Work/>
    
    <Timeline/>
    <Skills/>
     
    
    <Services/>
    <Contact/>
    <Toaster/>
    <Footer/>
    </>
     ):<em id="customM">Please Change the screen ratio to View content</em>
}

export default App;
