import React from 'react'
import './Hero.css'
import image from '../images/rename.png'
import HeaderSection from './HeaderSection'
const Hero = () => {

  return (
   <header id='home'>
    <div className='min-h-screen relative flex md:flex-row flex-col-reverse justify-center items-center container'>
        <div 
        data-aos= "fade-down"
        data-aos-delay = "200"
        >
            <h2 className='relative lg:bottom-[-40px] left-[230px] Introduce bg-slate-200/60 backdrop-blur-md'> Hi There!
            <span className='font font-light'>   I'm Yusuf Olamilekan</span>
            </h2>
        </div>

            <div data-aos= "fade-down">
            <h2 className='Front'>Frontend Web Developer</h2>
            <div className=''> 
                <button className='hire'>Hire Me</button>
            </div>
            </div>

            <HeaderSection />
            <div className='md:h-[37rem] h-96'  data-aos= "slide-up" data-aos-delay= "300ms">
                <img src={image} alt=""  className='h-full object-cover'/>
            </div>
        </div>

   </header>
  )
}

export default Hero