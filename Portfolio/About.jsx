import React from 'react'
import './Hero.css'
import image from '../images/Anand.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <>
    <div id='about'>
<h1 className='flex justify-center mt-10 mb-10 text-gray-400 text-2xl' data-aos="fade-down">About Me</h1>
    </div>
<div className="About__me mt-3 mb-10">
<div className="about__container bg-slate-200/60 backdrop-blur-md" data-aos="fade-right">
    <div className="image__section">
<img src={image} alt="..."  className='' data-aos="fade-right"/>
    </div>
</div>
    <div className="skill__section" data-aos="fade-left">
        <div className ="about__cards mr-10">
            <div className="about__card" >
                <FaAward className='about__icons'/>
<h5>Experience</h5>
<small className='text-gray-400'>3+ Years working</small>
</div>

<div className="about__card">
    <FiUser className='about__icons' />
<h5>Clients</h5>
<small className='text-gray-400'>100+ worldwide</small>
</div>

<div className="about__card">
<h5>
    <VscFolderLibrary className='about__icons'/>
Projects
</h5>
<small className='text-gray-400'>50+ Completed</small>
</div>
    </div>
    <p>
    I help startups launch And grow thier products,
        <br />
        deliver quality products to clients. i have expert
        <br />
     knowledge in software development and web3 development.
    </p>
    <button className='border-2 border-black p-2 rounded-md hover:bg-black hover:text-white'> <a href="#contact" className='duration-300'>Hire Me</a></button>
    </div>
    </div>
    </>
  )
}

export default About