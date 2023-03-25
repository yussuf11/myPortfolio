import React, {useState } from 'react'
import Modal from 'react-modal'
import {IoIosArrowRoundForward} from 'react-icons/io'
import corel from '../images/Corel.jpg'
import Tailwindcss from '../images/TailWind.jpg'
import Golang from '../images/GO.jpg'
import Javascript from '../images/javascript.jpg'
import html from '../images/html.jpg'
import css from '../images/css.jpg'
import react from '../images/react.jpg'
import solidity from '../images/solidity.jpg'
//center-true
//padding-4em
const customStyles = {
    content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight : "-50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "23rem",
    width: "90%",
    },
    overlay: {
        padding: "2rem",
    }
};
Modal.setAppElement("#root");

const Skills = () => {

const [modalIsOpen, setIsOpen] = useState(false)
const [selectSkill, setSelectSkill] = useState(null);
    const skills = [
        {
            logo: html,
language: 'Html',
Experience: 'Experienced'
        },
        {
            logo: css,
            language: 'Css',
            Experience: 'Experienced'
        },
        {
            logo : Tailwindcss,
            language: 'Tailwindcss',
            Experience: 'Intermediate'
        },
        {
            logo: Javascript,
            language: 'Javascript',
            Experience: 'Intermediate'
        },
        {
            logo: react,
            language: 'React js',
            Experience: 'Experienced'
        },
        {
            logo: Golang,
            language: 'Golang',
            Experience: 'Intermediate'
        },
        {
            logo: solidity,
            language: 'Solidity',
            Experience: 'Intermediate'
        },
        {
            logo : corel,
            language: 'Corel Draw',
            Experience: 'Experienced'
        }
    ]

function openModal() {
    setIsOpen(prev => !prev);
}

function closeModal(){
    setIsOpen(prev => !prev);
}

  return (
  <section className='min-h-fit bg-slate-200/60 backdrop-blur-md text-black skilled__section' id='skills'>
<Modal isOpen ={modalIsOpen} onRequestClose={closeModal} style ={customStyles}>
    <div className="flex items-center gap-2 rounded-md">
    <img src={selectSkill?.logo} alt="" className='w-10'/>
    <h2>{selectSkill?.language}</h2>
    </div>
    <br />

    <ul className='flex flex-col list-decimal sm:text-sm text-xs !leading-7 px-2 '>
    <li>Client satisfaction is my top priority</li>
        <li> Services are affordable And reliable</li>
        <li>Interactive user interface and experience</li>
    </ul>
    <br />
    <div className='flex justify-end'>
  <button onClick={closeModal} className="btn hover:text-red-900">Close</button>
  </div>
</Modal>

<div className="md:container px-5 py-14 p-16">

<h2 className=' md:text-3xl text-2xl' data-aos="fade-down">Skills</h2>
<h4 className=' text-gray-400' data-aos="fade-down">My Top Skills</h4>
<br />
<div  className="flex flex-wrap gap-4 justify-center md:grid md:grid-cols-2">
    {
skills.map((value,i)=> (
    <div key={i} data-aos="fade-up" 
    data-aos-delay = {1 * 400}
     className="bg-white  relative group sm:cursor-pointer w-full flex items-center gap-5 p-5 rounded-md border-2 max-w-sm border-slate-200">
        <div>
            <img src={value.logo} alt="" className='w-10 group-hover:scale-125 duration-200'/>
    <h2 className='font-bold'>{value.language}</h2>
    <p>{value.Experience}</p>
    <div> <IoIosArrowRoundForward onClick={() => {
setSelectSkill(value)
        openModal();}} className='text-black absolute right-5 top-14 text-2xl '/> </div>
    </div>
    </div>
))
    }
</div>
</div>
  </section>
  )
}

export default Skills