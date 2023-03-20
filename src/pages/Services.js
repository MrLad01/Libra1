import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import Cards from "../component/Cards";
import data from "../data/data"
import data2 from "../data/data2"
import Item from "../component/Item";
import { Pagination, A11y, Keyboard, Mousewheel, Autoplay, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


export default function Services() {

  const items = data2.map(item => {
    return (  
      <SwiperSlide>
          <Item
            key={item.id}
            img={item.img}
              title={item.title}
              content={item.content}
            />
      </SwiperSlide> 
 
    )
  })
  const books = data.map(book => {
    return (
      <SwiperSlide>
          <Cards                 
          key={book.id}
          img={book.image}
          content={book.content}
          author={book.author}
          rating={book.rating}
          />
      </SwiperSlide>
      )
    })
    
    return (
      <div className="services">
      <div className="what-we-do">  
        <h3>What We Do</h3>
        <Swiper
           modules={[A11y, Keyboard, Mousewheel, Autoplay, EffectCoverflow]}
            spaceBetween={20}
            slidesPerView={3}
            keyboard={{ enabled: true }}
            mousewheel={{enabled: true}}
            effect={"coverflow"}
            grabCursor={true}
           autoplay={{delay: 2000}}
           coverflowEffect={{
                 rotate: 30,
                 stretch: 0,
                 depth: 60,
                 modifier: 1,
                 slideShadows: false,
        }}
 
         >
             {items}            
        </Swiper>
      </div>

      <div className="trending">
        <h3>Trending Books</h3>
  
        <Swiper
           modules={[Pagination, A11y, Keyboard, Mousewheel, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            keyboard={{enabled: true}}
            mousewheel={{enabled: true}}
            autoplay={{delay: 2000}}
         >
               {books}
        </Swiper>

      </div>

      <NavLink to="others">
        <img src={ arrow } alt="" />
      </NavLink>


      <Outlet />
    </div>
  )
}
