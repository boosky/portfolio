import React from 'react'
import './about.css'
import me from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={me} aria-hidden alt="About Image."/> 
          </div>
        </div>
      

      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>10+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>+100 Worldwide</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>25+ Completed</small>
          </article>
        </div>
        
        <p>
        I'm an ambitious, self-taught, creative, entrepreneurial, enthusiastic person. I am an Industrial Engineer since late 2014, graduated from the Universidad Latina de Costa Rica, some time ago I spent most of my free time learning to program, today I know several languages and I have created several personal projects, I am passionate about technology. I have participated in several projects which have been successfully completed. I have worked with ISO 9001 and have been audited in internal, external and international audits.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
      </div>
    </section>
  )
}

export default About