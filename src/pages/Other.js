import { NavLink, Outlet } from "react-router-dom";
import arrow from "../images/chevron-down.png"
import Cards from "../component/Cards";
import data3 from "../data/data3";
import data4 from "../data/data4";
import ReviewCard from "../component/ReviewCard";


export default function Other() {

  const reviews = data4.map(review => {
    return (
      <ReviewCard
      key={review.id}
      img={review.img}
      author={review.author}
      occupation={review.occupation}
      content={review.content}
      rating={review.rating}
      />
    )
  })

  const books = data3.map(book => {
    return (
      <Cards
      key={book.id}
      img={book.image}
      content={book.content}
      author={book.author}
      />
    )
  })

  return (
    <div className="others">
      <div className="other">
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
        <div className="t-books">
          {books}
        </div>
        <div className="navi">
          <div className="nav-buttons">
              <div></div>
              <div></div>
              <div></div>
              <div></div> 
          </div>
        </div>
      </div>
      <div className="reviews-ratings">
        <h2>Reviews and Ratings</h2>
          <div className="reviews-column">
              { reviews }
            </div>
      </div>
      <div className="nav-buttons">
        <div></div>
        <div></div>
        <div></div>
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
