import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Learning from "./components/Learning";
import Ervaring from "./components/Ervaring";
//import Projecten from "./components/Projecten";
import Work from "./components/Work";
import Example from "./components/example"; 
import ImageModal from "./components/ImageModal";

import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

//temp place this here so it appears on the whole app.
function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;

if (elementTop < windowHeight - elementVisible) {
  reveals[i].classList.add("active");
} else {
  reveals[i].classList.remove("active");
}
}
}

window.addEventListener("scroll", reveal);



function App() {

  
  return ( 
    
    <>
   
    <Navbar /> 
    <Home />
    <About />
    
    <Learning 
       title="I like to learn new things"
       description="Keeping up to date with the latest tech is my go-to passion. I always keep an eye out for new frameworks or designs to keep up to date and work with the best technology."
       />

    <Ervaring />  

    <Example />

    <Work />
    

    <Contact />   
    
    </>
  ); 
}

export default App;
