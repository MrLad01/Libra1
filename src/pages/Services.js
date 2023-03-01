import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import book1 from "../images/image 7.png";
import book2 from "../images/image 9.png";
import book3 from "../images/image 11.png";
import book4 from "../images/image 8.png";

export default function Services() {
  return (
    <div className="services">
      <div className="what-we-do">  
        <h3>What We Do</h3>
        <div>
        <NavLink to="/">
        <div className="items">
          <img src={ item3 } alt="" />
          <h4>Source books</h4>
          <p>We diligently go through the process of vetting, selecting and compile live changing books for your reading enjoyment</p>
        </div>
        </NavLink>
        <NavLink to="/">
        <div className="items">
          <img src={ item2 } alt="" />
          <h4>Lend Books</h4>
          <p>We help you save some money while getting the same value through the lending of books at reduced rates</p>
        </div>
        </NavLink>
        <NavLink to="/">
        <div className="items">
          <img src={ item1 } alt="" />
          <h4>Deliver Books</h4>
          <p>Our efficient delivery service gets your books to your doorstep saving you some energy to read</p>
        </div>
        </NavLink>
        </div>
      </div>

      <div className="trending">
        <h3>Trending Books</h3>
        <div className="t-books">
          <div className="t-book">
            <div className="t-img1">
                <img src={ book1 } alt="" />
            </div>
            <div className="t-content">
                <h5>Steal like an artist</h5>
                <h6>Austin Kleon</h6>
                <div>
                  <div className="stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                    <button>View details</button>
                </div>
            </div>
          </div>
          <div className="t-book">
            <div className="t-img">
                <img src={ book2 } alt="" />
            </div>
            <div className="t-content">
                <h5>Half of a yellow sun</h5>
                <h6>Austin Kleon</h6>
                <div>
                    <div className="stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                    <button>View details</button>
                </div>
            </div>
            
          </div>
          <div className="t-book">
            <div className="t-img">
                <img src={ book3} alt="" />
            </div>
            <div className="t-content">
                <h5>The sun and her flowers</h5>
                <h6>Rupi Kaur</h6>
                <div>
                    <div className="stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                    <button>View details</button>
                </div>
            </div>
          </div>
          <div className="t-book">
            <div className="t-img">
                <img src={ book4 } alt="" />
            </div>
            <div className="t-content">
                <h5>Purple Hibicus</h5>
                <h6>Chimamanda Adichie</h6>
                <div>
                    <div className="stars">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    </div>
                    <button>View details</button>
                </div>
            </div>
          </div>

        </div>

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
