import React from 'react'
import { BiCheckCircle } from 'react-icons/bi'
const Service = () => {
 const MyService = [
    {
        skill: "FrontEnd Development",
        Detail: "Ability to create a professional and engaging user interface.",
        Detail2:"Ability to develop website for all screens.",
        Detail3:"Developing and maintaining the user interface.",
    },

    {
        skill: "Web3 Developer",
        Detail : "Highly skilled at developing decentralized applications",
        Detail:"Ability to build front-end web3 interfaces that interact with smart contract.",
        Detail2:"problem Solving, Flexibility, communication and Teamwork.",
        Detail3:"Ability to work on an ethereum ."

    },
    {
        skill: "Graphics Design",
        Detail: "Ability to create an amazing design",
        Detail2: "Ability to use various design technique.",
        Detail3: "Creating highly accassible and usable products for users."
    },
 ]
  return (
    <section id='service'>
<div className='md:container px-5 py-14'>
<h2 className='md:text-3xl text-2xl' data-aos="fade-down">Services</h2>
<h4 className='text-gray-400' data-aos="fade-down">What I Offer</h4>
<br />

<div className='flex gap-5 justify-between flex-wrap group'>
    {
        MyService.map((values,i) => (
            <div key={i} data-aos="fade-up"
            data-aos-delay= {i * 600}
             className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-gray-200 p-6 flex-1 group-hover:blur-sm hover:!blur-none">
                <h6 className='my-5 uppercase font-extrabold'>{values.skill}</h6>
                <div className='service__part mb-5 '>
                <BiCheckCircle className='text-2xl text-blue-900'/>
                <h6 className=''>  {values.Detail}</h6>
                </div>
                <div className='service__part mb-5'>
                <BiCheckCircle className='font text-2xl text-blue-900'/>
                <h6 >{values.Detail2}</h6>
                </div>
                <div  className='service__part mb-5'>
                <BiCheckCircle className='text-2xl text-blue-900' />
                <h6 className=''>  {values.Detail3}</h6>
                </div>
                </div>
        ))
    }
</div>
</div>
    </section>
    
  )
}

export default Service