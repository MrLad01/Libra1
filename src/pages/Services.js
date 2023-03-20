import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import Cards from "../component/Cards";
import data from "../data/data"
import data2 from "../data/data2"
import Item from "../component/Item";
import { Navigation, Pagination, A11y, Keyboard, Mousewheel, Autoplay, EffectCoverflow } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
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
           modules={[Navigation, A11y, Keyboard, Mousewheel, Autoplay, EffectCoverflow]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            keyboard={{ enabled: true }}
            mousewheel={{enabled: true}}
            effect={"coverflow"}
            grabCursor={true}
           centeredSlides={true}
           coverflowEffect={{
                 rotate: 50,
                 stretch: 0,
                 depth: 100,
                 modifier: 1,
                 slideShadows: true,
        }}
 
         >
             {items}            
        </Swiper>
      </div>

      <div className="trending">
        <h3>Trending Books</h3>
        {/* <div className="t-books"> */}

        <Swiper
           modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            keyboard={{enabled: true}}
            mousewheel={{enabled: true}}
            autoplay
         >
               {books}
        </Swiper>
       

        {/* </div> */}
        {/* <div className="t-books">
          {books}
        </div> */}

        <div className="nav-buttons">
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
        </div>

      </div>

      <NavLink to="others">
        <img src={ arrow } alt="" />
      </NavLink>


      <Outlet />
    </div>
  )
}
