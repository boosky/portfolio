import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Diego Campos "Boo Sky"</h1>
        <h5 className="text-light">Industrial Engineer, Web Developer and DJ</h5>
        <CTA />
        <HeaderSocials/>

        <div className='me'>
          <img src={me} alt='me' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header