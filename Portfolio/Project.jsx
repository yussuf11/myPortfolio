import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';


import image from '../images/rename.png'
import image1 from '../images/a.webp'
import image2 from '../images/b.webp'
import image3 from '../images/c.webp'
const Project = () => {
  return (
    <section className='bg-gray-200' id='project'>
<div className='md:container px-5 pt-14 min-h-screen flex flex-col justify-between'>
    <div>
<h2 className='md:text-3xl text-2xl' data-aos="fade-down">Project</h2>
<h4 className='text-gray-400' data-aos="fade-down">My Creation</h4>
<br/>
    </div>
 <div className='flex justify-center m-auto'>
    <Swiper
      pagination = {{
        clickable: true,
      }} 
      data-aos="fade-up"
      spaceBetween={20}
      modules = {[Pagination]}
      className="rounded-3xl pb-16 max-w-xs drop-shadow-md "
    >
      <SwiperSlide className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'>
        <img src={image1} alt="..." />
        <div className='flex flex-col gap-1 mt-2'>
            <h5 className='font-bold '>Finance Website</h5>
            <button className='font-bold text-gray-500 self-end'>READ MORE</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'>
        <img src={image2} alt="..." />
        <div className='flex flex-col gap-1 mt-2'>
            <h5 className='font-bold '>Shopping Website</h5>
            <button className='font-bold text-gray-500 self-end'>READ MORE</button>
        </div>
      </SwiperSlide>

      <SwiperSlide className='bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit'>
        <img src={image3} alt="..." />
        <div className='flex flex-col gap-1 mt-2'>
            <h5 className='font-bold '>Website</h5>
            <button className='font-bold text-gray-500 self-end'>READ MORE</button>
        </div>
      </SwiperSlide>

    </Swiper>
 </div>
</div>
    </section>
    
  )
}

export default Project