import React from 'react'
import { FaFacebook } from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io'
const Footer = () => {
  return (
<footer >
  <div data-aos="fade-up">
<a href="#" className="footer__logo">Yusuf Olamilekan</a>
<ul className="permalinks" >
    <li> <a href="#">Home</a></li>
    <li> <a href="#">About</a></li>
    <li> <a href="#">Skills</a></li>
    <li> <a href="#">Project</a></li>
    <li> <a href="#">Testimonial</a></li>
    <li> <a href="#"> Contact</a></li>
</ul>
<div className="footer__socials">
    <a href="https://facebook.com"> <FaFacebook /></a>
    <a href="https://instagram.com"> <FiInstagram /></a>
    <a href="https://twitter.com"><IoLogoTwitter /></a>
</div>
<div className="footer_copyright">
    <small className='text-white'>&copy; Yusuf Olamilekan. All Right Reserved 2023</small>
</div>
</div>
</footer>
  )
}

export default Footer