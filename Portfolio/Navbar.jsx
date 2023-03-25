import React, { createElement, useState } from 'react'
import {HiMenuAlt2} from 'react-icons/hi'
import {content} from '../Portfolio/Content'
const Navbar = () => {
    const {nav} = content;
    const[active, setactive] = useState(0);
    const[showmenu, setshowmenu] = useState(0);
  return (
    <div className='w-full flex justify-center'>
        <div onClick={()=>setshowmenu(!showmenu)} className='sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2'>
          <HiMenuAlt2 size={34} />
        </div>
        <nav className={`fixed  z-[999] text-black  flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full duration-200 ${showmenu ? 'bottom-10' : 'bottom-[-100%]'}`}>

{
    nav.map((value,i) => (
   
        <a href ={value.link}  onClick={() =>setactive(i)}
        className={`text-xl p-2.5 rounded-full sm:cursor-pointer duration-300 text-black ${i === active && "bg-black text-white"}`}>{createElement(value.icon)}</a>

    ))
}

        </nav>
    </div>
  )
}

export default Navbar