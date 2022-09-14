import React from 'react'
import '../css/Footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#header" className='footer__logo'>NombreUsuario</a>

      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experiences">Experiences</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="hhtps://facebook.com"><FaFacebook /></a>
        <a href="hhtps://instagram.com"><FiInstagram /></a>
        <a href="hhtps://twitter.com"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small><AiOutlineCopyrightCircle/> NombreUsuario. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer