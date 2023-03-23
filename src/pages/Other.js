import { NavLink, Outlet } from "react-router-dom";
import arrow from "../images/chevron-down.png"
import Cards from "../component/Cards";
import data3 from "../data/data3";
import data4 from "../data/data4";
import ReviewCard from "../component/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Keyboard, Mousewheel, Autoplay} from 'swiper';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';


export default function Other() {

  const reviews = data4.map(review => {
    return (
      <SwiperSlide>
        <ReviewCard
        key={review.id}
        img={review.img}
        author={review.author}
        occupation={review.occupation}
        content={review.content}
        rating={review.rating}
        />
      </SwiperSlide>
    )
  })

  const books = data3.map(book => {
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
    <div className="others">
      <motion.div className="other"
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 3, delay: 0.6 }}
      >
        <h2>Other Books</h2>
        <div className="search-bar">
            <div>
                <h3>All</h3>
                <select name="" id="">
                    <option value="">Genre</option>
                </select>
            </div>
            <input type="text" placeholder="Search by name" />
        </div>
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
      <div className="reviews-ratings">
        <h2>Reviews and Ratings</h2>
        <Swiper
           modules={[Pagination, A11y, Keyboard, Mousewheel, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            pagination={{ clickable: true }}
            keyboard={{enabled: true}}
            mousewheel={{enabled: true}}
            autoplay={{delay: 2500}}
         >
               {reviews}
        </Swiper>
      </div>

      <hr />
      <div>
        <h3>Have reviews or ratings to give about your favourite book? Enter it below  </h3>
        <div className="your-review">
          <textarea name="" id="" cols="60" rows="3"></textarea>
          <button>Send</button>
        </div>
      </div>

      <NavLink to="footer">
          <img src={ arrow } alt="" />
      </NavLink>

      <Outlet />
    </div>
  )
}
