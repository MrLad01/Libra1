import { NavLink, Outlet } from "react-router-dom";
import arrow from "../images/chevron-down.png"
import book1 from "../images/image 16.png";
import book2 from "../images/image 14.png";
import book3 from "../images/image 13.png";
import book4 from "../images/image 12.png";
import profile1 from "../images/profile1.png";
import profile2 from "../images/Profile2.png";
import profile3 from "../images/Profile3.png";
import profile4 from "../images/Profile4.png";
import Cards from "../component/Cards";


export default function Other() {
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
        <Cards img={book1} content="The Alchemist" author="Paulo Coelho"/>
        <Cards img={book2} content="A confederacy of dunces" author="John Kennedy T."/>
        <Cards img={book3} content="Why we sleep" author="Matthew Walker"/>
        <Cards img={book4} content="An enemy called average" author="John L.Mason"/>
       
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
              <div className="reviews">
                  <img src={ profile1 } alt="" />
                  <div>
                      <span className="author">Karoline Red</span>
                      <span className="occupation">Chef</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem ex nam, corporis repellat adipisci et quod non blanditiis maxime.</p>
                  <i></i>
              </div>
              <div className="reviews">
                  <img src={ profile2 } alt="" />
                  <div>
                      <span className="author">Collins Aloba</span>
                      <span className="occupation">Teacher</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, officia quis nobis tempora est aliquid excepturi temporibus explicabo ut.</p>
                  <i></i>
              </div>
              <div className="reviews">
                  <img src={ profile3 } alt="" />
                  <div>
                      <span className="author">Alo Bosede</span>
                      <span className="occupation">Forex Trader</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam beatae illum, perspiciatis unde eius accusamus veniam architecto nobis deserunt!</p>
                  <i></i>
              </div>
              <div className="reviews">
                  <img src={ profile4 } alt="" />
                  <div>
                      <span className="author">Bill Brown</span>
                      <span className="occupation">Sales Manager</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere iusto repudiandae nobis, cupiditate totam. Officia, nostrum? Ea, amet fugit.</p>
                  <i></i>
              </div>
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
