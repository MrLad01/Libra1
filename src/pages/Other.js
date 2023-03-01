import { NavLink, Outlet } from "react-router-dom";
import arrow from "../images/chevron-down.png"

export default function Other() {
  return (
    <div className="others">
      <div className="other">
        <h2>Other Books</h2>
        <div className="search-bar">
            <div></div>
            <input type="text" />
        </div>
        <div className="books1">
            <div className="book1">
                <div className="book-img">
                    <img src="" alt="" />
                </div>
                <div className="book-content">
                    <h4>The Alchemist</h4>
                    <h6>Paulo Coelho</h6>
                    <div className="more">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
            <div className="book1">
                <div className="book-img">
                    <img src="" alt="" />
                </div>
                <div className="book-content">
                    <h4>A confederacy of dunces</h4>
                    <h6>John Kennedy T.</h6>
                    <div className="more">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
            <div className="book1">
                <div className="book-img">
                    <img src="" alt="" />
                </div>
                <div className="book-content">
                    <h4>Why we sleep</h4>
                    <h6>Matthew Walker</h6>
                    <div className="more">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
            <div className="book1">
                <div className="book-img">
                    <img src="" alt="" />
                </div>
                <div className="book-content">
                    <h4>An enemy called average</h4>
                    <h6>John L. Mason</h6>
                    <div className="more">
                        <i></i>
                        <button>View details</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="nav-buttons">
            <div></div>
            <div></div>
            <div></div>
            <div></div> 
        </div>
      </div>
      <div className="reviews-ratings">
        <h2>Reviews and Ratings</h2>
        <div className="reviews">
            <img src="" alt="" />
            <div>
                <span>Karoline Red</span>
                <span>Chef</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem ex nam, corporis repellat adipisci et quod non blanditiis maxime.</p>
            <i></i>
        </div>
        <div className="reviews">
            <img src="" alt="" />
            <div>
                <span>Collins Aloba</span>
                <span>Teacher</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum placeat, officia quis nobis tempora est aliquid excepturi temporibus explicabo ut.</p>
            <i></i>
        </div>
        <div className="reviews">
            <img src="" alt="" />
            <div>
                <span>Alo Bosede</span>
                <span>Forex Trader</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quam beatae illum, perspiciatis unde eius accusamus veniam architecto nobis deserunt!</p>
            <i></i>
        </div>
        <div className="reviews">
            <img src="" alt="" />
            <div>
                <span>Bill Brown</span>
                <span>Sales Manager</span>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi facere iusto repudiandae nobis, cupiditate totam. Officia, nostrum? Ea, amet fugit.</p>
            <i></i>
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
        <input type="text" />
        <button>Send</button>
      </div>

      <NavLink to="footer">
          <img src={ arrow } alt="" />
      </NavLink>

      <Outlet />
    </div>
  )
}
