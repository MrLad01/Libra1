import { NavLink } from "react-router-dom"
import gof from "../images/Rectangle 3.png"
import { motion } from "framer-motion"
import { buttonVariant, slideIn , textVariant} from "../utils/motion"


export default function HomeLayout() {
  return (
      <motion.div className="home">
        <div className="home1">
          <motion.div 
          exit={{
            opacity: 0,
            transition: {duration: 1, delay: 0.1}}}
          >
            <motion.div
              variants={slideIn("left", "tween", 0.5, 3)}
              initial="hidden"
              animate="show"

            className="home-text">
              <motion.p className="first-text">Studying books, a long lasting way to changing lives</motion.p>
              <motion.p 
                variants={textVariant(0.2)}
                className="second-text">We relieve you to a great deal by sourcing books for you to lend, read and change your lives. We are always ready to help</motion.p>
              <motion.div
                variants={buttonVariant(2)}
              >
                <NavLink to="learn-more">Learn More</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={slideIn("right", "spring", 0.5, 4)}
            initial="hidden"
            animate="show"
          >  
            <img src={gof} alt="A girl reading" />
          </motion.div>
        </div>

      </motion.div>
  )
}
