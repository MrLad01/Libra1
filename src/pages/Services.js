import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import Cards from "../component/Cards";
import data from "../data/data"
import data2 from "../data/data2"
import Item from "../component/Item";
import { Navigation, Pagination, A11y, Keyboard, Mousewheel } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel'



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
           modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
            spaceBetween={0}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            keyboard={{ enabled: true }}
            mousewheel={{enabled: true}}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
         >
             {items}            
        </Swiper>
      </div>

      <div className="trending">
        <h3>Trending Books</h3>
        {/* <div className="t-books"> */}

        <Swiper
           modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            keyboard={{enabled: true}}
            mousewheel={{enabled: true}}
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
