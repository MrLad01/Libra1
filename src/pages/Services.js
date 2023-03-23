import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import Cards from "../component/Cards";
import data from "../data/data"
import data2 from "../data/data2"
import Item from "../component/Item";
import { Pagination, A11y, Keyboard, Mousewheel, Autoplay, EffectCoverflow } from 'swiper';
import { motion } from "framer-motion"

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
        <motion.h3
        initial={{opacity: 0, z: 10}}
        animate={{opacity: 1, Z: 0}}
        transition={{delay: 1, duration: 1}}
        >What We Do</motion.h3>
        <motion.div
        initial={{opacity: 0, z: 10}}
        animate={{opacity: 1, Z: 0}}
        transition={{delay: 2.5, duration: 3.5}}
        
        >
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
        </motion.div>
      </div>

      <motion.div 
      className="trending"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 3, delay: 0.8 }}
      >
        <h3>Trending Books</h3>
  
        <Swiper
           modules={[Pagination, A11y, Keyboard, Mousewheel, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            keyboard={{enabled: true}}
            mousewheel={{enabled: true}}
            autoplay={{delay: 2500}}
         >
               {books}
        </Swiper>

      </motion.div>

      <motion.div
       animate={{ y: -25}}
       transition={{ repeat: Infinity, repeatDelay: 0.2, duration: 0.5, repeatType: 'reverse'}}
      >
      <NavLink to="others">
        <img src={ arrow } alt="" />
      </NavLink>
      </motion.div>


      <Outlet />
    </div>
  )
}
