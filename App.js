import { useEffect } from 'react';
import './App.css';
import About from './Portfolio/About';
import Contact from './Portfolio/Contact';
import Footer from './Portfolio/Footer';
import Hero from './Portfolio/Hero';
import Navbar from './Portfolio/Navbar';
import Project from './Portfolio/Project';
import Service from './Portfolio/Service';
import Skills from './Portfolio/Skills';
import Testimonial from './Portfolio/Testimonial';
import Aos, { AOS } from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(()=>{
Aos.init({
duration: 1800,
offset: 100,
});
  },[])
  return (
<div className='App'>
  <Navbar />
<Hero />
<About />
<Skills />
<Service />
<Project />
<Testimonial />
<Contact />
<Footer/>
</div>

  );
}

export default App;

// <div className='relative sm:8 p-4 bg-[#13131a] min-h-screen flex flex-row'>

//<Go/>
  
  //<div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
  //<Navbar />
  //<Start />
  //</div>