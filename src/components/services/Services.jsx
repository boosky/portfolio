import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Developer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CSS.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>JavaScript.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>React.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>NodeJs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python.</p>
            </li>
          {/*  <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  </li> */}
          </ul>
        </article>
        {/*END OF FIRST SERVICE*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Industrial Engineer</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Administrative.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Supervisor.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Management.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Assistant.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quality manager.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Project assistant.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Quality control.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Task manager.</p>
            </li>
          </ul>
        </article>
        {/* END OF DEVELPMENTS*/}

        <article className='service'>
          <div className='service__head'>
            <h3>Technology</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Installation of Operating Systems.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Virtual machines.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Virtual assistance.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technological consultancy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Software installation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Formatting.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Virus and malware cleaning.</p>
            </li>
          </ul>
        </article>
        {/*END OF CONTENT*/}
      </div>
    </section>
  )
}

export default Services