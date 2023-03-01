import { NavLink, Outlet } from "react-router-dom"
import gof from "../images/Rectangle 3.png"
import arrow from "../images/chevron-down.png"

export default function HomeLayout() {
  return (
    <div className="home">
      <div className="home1">
        <div className="home-text">
          <p className="first-text">Studying books, a long lasting way to changing lives</p>
          <p className="second-text">We relieve you to a great deal by sourcing books for you to lend, read and change your lives. We are always ready to help</p>
          <div>
            <NavLink to="learn-more">Learn More</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
          </div>
        </div>
        <img src={gof} alt="A girl reading" />
      </div>

      <NavLink to="services"><img src={arrow} alt="" /></NavLink>
      
        <Outlet />
    </div>
  )
}
