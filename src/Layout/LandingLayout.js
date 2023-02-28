import { NavLink, Outlet } from "react-router-dom";
import Frame304 from '../images/Frame304.png';

export default function LandingLayout() {
  return (
    <div className="landing">
      <header>
        <img src={Frame304} alt="logo" />
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            {/* <NavLink to="settings"> */}
                <select name="Settings" id="" >
                    <option value="0">Settings</option>
                    <option value="">No Value</option>
                </select>
                {/* </NavLink> */}
            <NavLink to="help">Help</NavLink>
        </nav>
        <div>
            <NavLink to="sign-up">Sign Up</NavLink>
            <NavLink to="log-in">Log In</NavLink>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
