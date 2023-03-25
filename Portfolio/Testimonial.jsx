import React from 'react'
import{ Scrollbar } from 'swiper'
// Import Swiper React components
import a from '../images/e.jpg'
import b from '../images/f.jpg'
import c from '../images/c.jpg'
import d from '../images/d.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
const Testimonial = () =>{
  const data=[
    {
      avatar: b,
      name: 'Tony Clinton',
      review:"I have had many websites since the early 90s. Most were pulling teeth to get developed. Not so with Yusuf. This guy is a professional in every aspect.he listened to my needs, offered relevant option. Kudos to Yusuf, I will be pursing future projects with him and highly recommend him to anyone in the market for professional website.",
    },
    {
      avatar: c,
      name: 'Elizabeth Esther',
      review:"We re-did our website twice in a 12 month period. There was no comparison between the first website and the one Yusuf did. Professional Creative, Attentive to Detail, Excellent Communication... If i had contracted with Yusuf the first time i would not have had to do it twice.I highly recommend him to anyone for professional website.",
    },
    {
      avatar: d,
      name: 'Tracy Clifford',
      review:"Yusuf listened to everything we needed and wanted in a new website,then delivered it! Our new website is fun, exciting and easy to use, i have gone through website redesigns before, and by far, this one done by Yusuf was superb, Yusuf is an extremely talented web developer. ",
    },
    {
      avatar: a,
      name: 'Abdulrahman Idowu',
      review:"Yusuf excels at turning your website dream into reality. We are so proud of the work he've done for us that we have recommended him to many of our partners.",
    },
  ]
  return(
    <section id="testimonials" className='test'>
      <div className="review">
      <h5 className='uppercase ' data-aos="fade-down" > Review from clients</h5>
      <h2 className='text-gray-400' data-aos="fade-down">Testimonials</h2>
      </div>
      <Swiper className="container testimonials__container bg-slate-200/60 backdrop-blur-md rounded-2xl"
      data-aos="fade-up"
      modules={[Pagination, Scrollbar]}
      spaceBetween = {40}
      slidesPerView = {1}
      pagination = {{
clickable:true
      }} >
        
     {
      data.map(({avatar,name, review},index) =>{
        return(
          <SwiperSlide key={index} className='testimonial '>
          <div className="client__avatar ">
            <img src={avatar} alt="" />
          </div>
          <h5 className="client__name">
            {name}
          </h5>
          <small className="client__review">
{review}
          </small>
          </SwiperSlide>
        )
      } )
     }
      </Swiper>
    </section>
  )
}
export default Testimonial