import { NavLink, Outlet } from "react-router-dom";
import Frame304 from '../images/Frame304.png';
import { motion } from "framer-motion";
import { useState } from "react";

export default function LandingLayout() {

  const [loginModal, setLoginModal] = useState(false);
 



  const loginClick = () => {
    setLoginModal(!loginModal)
    console.log("log in")
  }

  return (
    <div className="landing">
      <motion.header
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 0.1, duration: 1}}
      >
        <img src={Frame304} alt="logo" />
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="services">Services</NavLink>
                <select name="Settings" id="" >
                    <option value="0">Settings</option>
                    <option value="">No Value</option>
                </select>

            <NavLink to="help">Help</NavLink>
        </nav>
        <div>
            <NavLink to="sign-up" onClick={loginClick}>Sign Up</NavLink>
            <NavLink to="log-in" onClick={loginClick}>Log In</NavLink>
        </div>
      </motion.header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
