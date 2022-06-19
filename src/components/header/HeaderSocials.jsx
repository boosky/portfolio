import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {ImSoundcloud2} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com/in/xdiegocampos' target="_blank" rel='noopener noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/boosky' target="_blank" rel='noopener noreferrer'><FaGithub/></a>
        <a href='https://soundcloud.com/djboosky' target="_blank" rel='noopener noreferrer'><ImSoundcloud2/></a>
        <a href='https://www.instagram.com/djboosky/' target="_blank" rel='noopener noreferrer'><AiFillInstagram/></a>
    </div>
  )
}

export default HeaderSocials