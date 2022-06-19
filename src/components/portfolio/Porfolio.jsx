import React from 'react'
import './portfolio.css'
import logo1 from '../../assets/portfolio1.jpg'
import logo2 from '../../assets/portfolio2.jpg'
import logo3 from '../../assets/portfolio3.jpg'
import logo4 from '../../assets/portfolio4.jpg'
import logo5 from '../../assets/portfolio5.png'
import logo6 from '../../assets/portfolio6.jpg'


const Porfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo1} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo2} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo3} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo4} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo5} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={logo6} alt=''/>   
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn' target="_blank" rel='noopener noreferrer'>Github</a>
          <a href='https://github.com' className='btn btn-primary' target="_blank" rel='noopener noreferrer'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Porfolio