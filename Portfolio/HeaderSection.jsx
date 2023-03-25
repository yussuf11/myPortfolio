import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaFacebook, FaGithub} from "react-icons/fa"

const HeaderSection = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"> <BsLinkedin /></a>
        <a href="https://github.com"><FaGithub /></a>
    <a href="https://messenger.com" ><FaFacebook /></a>
    </div>
  )
}

export default HeaderSection