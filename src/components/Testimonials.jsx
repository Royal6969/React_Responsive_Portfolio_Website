import React from 'react'
import '../css/Testimonials.css'
import AVTR1 from '../../src/assets/img/avatar1.jpg'
import AVTR2 from '../../src/assets/img/avatar2.jpg'
import AVTR3 from '../../src/assets/img/avatar3.jpg'
import AVTR4 from '../../src/assets/img/avatar4.jpg'

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

      <Swiper 
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar" />
          </div>
          <h5 className='client__name'>Client Name</h5>
          <small className='client__review'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam adipisci dolores consectetur, blanditiis, eius perspiciatis aliquid sapiente consequatur quas enim molestiae! Perspiciatis ullam qui ratione sapiente sed ipsa vel mollitia deleniti ad exercitationem eum, laudantium numquam fugiat adipisci ut voluptas atque eos esse omnis soluta eius natus modi magnam. Illum!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials