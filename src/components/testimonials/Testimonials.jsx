import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR1} alt='avatar 1'/>
          </div>
          <h5 className='client__name'>Adriana Mahecha</h5>
          <small className='client__review'>
              Gerente General de LIMPSA. Durante el tiempo laborado para LIMPSA, el señor Diego Campos demostró ser una persona honesta, responsable, de buenos valores morales, con grandes deseos de superación y de trabajar. Además, demostró buen desempeño en las labores que le fueron encomendadas.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR2} alt='avatar 2'/>
          </div>
          <h5 className='client__name'>Marisol Naranjo</h5>
          <small className='client__review'>
              Gerencia. El señor Diego Campos, durante el tiempo que estuvo bajo mis órdenes, siempre demostró entusiasmo y pasión en todas las labores asignadas, un jóven honesto, de grandes valores y principios, siempre se notaba su buen desempeño en el lugar de trabajo.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR3} alt='avatar 3'/>
          </div>
          <h5 className='client__name'>Lorenzo Obando</h5>
          <small className='client__review'>
            Project Manager. He tenido la oportunidad de haber trabajado en conjunto con el señor Diego Campos en varios proyectos, de los cuales ha sido partícipe muy activo, una persona siempre con grandes ideas, siempre dispuesto a ayudar y aportar su grano de arena, excelente actitud de superación.
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={AVTR4} alt='avatar 4'/>
          </div>
          <h5 className='client__name'>Marco Vinicio</h5>
          <small className='client__review'>
          Coordinator. Conozco al señor Diego Campos desde el colegio, somos buenos amigos y el tiempo nos ha dado la oportunidad de ser socios en algunos momentos, Diego siempre fue una persona con grandes ideas y mucho ánimo de lograr todas sus metas, es una persona con grandes valores y costumbres.
          </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials