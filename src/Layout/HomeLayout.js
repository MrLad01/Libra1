import { NavLink } from "react-router-dom"
import gof from "../images/Rectangle 3.png"
import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"


export default function HomeLayout() {
  return (
    <div className="home">
      <div className="home1">
        <motion.div 
        variants={slideIn("left", "tween", 1, 2)}
        className="home-text"
        >
          <p className="first-text">Studying books, a long lasting way to changing lives</p>
          <p className="second-text">We relieve you to a great deal by sourcing books for you to lend, read and change your lives. We are always ready to help</p>
          <div>
            <NavLink to="learn-more">Learn More</NavLink>
            <NavLink to="contact">Contact Us</NavLink>
          </div>
        </motion.div>
        <motion.img  variants={slideIn("left", "tween", 1, 2)}  src={gof} alt="A girl reading" />
      </div>

    </div>
  )
}
