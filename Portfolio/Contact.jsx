import React,{useRef} from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'
import {Toaster,toast} from 'react-hot-toast'
import './Hero.css'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('service_kxf0dkk', 'template_0xwu5eo' ,form.current, '3yg17mfVzU7wUfCDI')
        .then((result) => {
           console.log( result.text);
           form.current.reset();
           toast.success('Email send Successfully')
        },(error) => {
           console.log(error.text);
           toast.error("Please Check your internet connection! Unable to deliver message.")
        });
    

    }
  return (
<section id="contact">
    <Toaster />
    <div className="__contact">
    <h5 className='text-black text-2xl'>
        Get In Touch
    </h5>
    <h2 className='text-gray-400 text-[15px]'>Contact Me</h2>
    </div>
    <div className="container contact__container">
        <div className="contact__options " data-aos="fade-up" data-aos-delay="600">
            <article className="contact__option bg-slate-200/60 backdrop-blur-md text-black border-2  border-slate-200">
                <MdOutlineEmail className='contact__option-icon  m-auto'/>
                <h4>Email</h4>
                <h5>yusufolamilekan795@gmail.com</h5>
                <a href="mailto:yusufolamilekan795@gmail.com" className='border-2 border-gray-500 p-2 rounded-md font-bold hover:bg-gray-500 hover:text-white hover:border-cyan-50'>
                    Send A Message
                </a>
            </article>
            <article className="contact__option bg-slate-200/60 backdrop-blur-md text-black">
                <RiMessengerLine className='contact__option-icon m-auto'/>
                <h4>Messenger
                </h4>
                <a href="mailto:yusufolamilekan795@gmail.com" className='border-2 border-gray-500 p-2 rounded-md font-bold hover:bg-gray-500 hover:text-white hover:border-cyan-50'>
                    Send A Message
                </a>
            </article>
            <article className="contact__option bg-slate-200/60 backdrop-blur-md text-black">
                <BsWhatsapp className='contact__option-icon m-auto'/>
                <h4>Whatsapp</h4>
                <h5>+2349090215759</h5>
                <a href="https://api.whatsapp.com/send?phone=+2349090215759" className='border-2 border-gray-500 p-2 rounded-md font-bold hover:bg-gray-500 hover:text-white hover:border-cyan-50'>
                    Send A Message
                </a>
            </article>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-down" data-aos-delay= "400">
            <input type="text" name="name" placeholder='Enter Your Name....' required/>
            <input type="email" name="email" placeholder='Enter Your Email....' required/>
            <textarea name="message"  cols="30" rows="7" placeholder='Enter Your Message....' required></textarea>
            <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
    </div>
</section>
  )
}

export default Contact