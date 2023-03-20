import { NavLink } from "react-router-dom"
import gof from "../images/Rectangle 3.png"
import { motion } from "framer-motion"
import { slideIn } from "../utils/motion"


export default function HomeLayout() {
  return (
    <div className="home">
      <div className="home1">
        <motion.div 
        // variants={slideIn("left", "tween", 1, 2)}
        >
          <motion.div
            // initial={{opacity: 0, x: '-100vw'}}
            // animate={{opacity: 1, x: 0}}
            // transition={{delay: 0.5, duration: 5, type: 'spring'}}
            variants={slideIn("left", "tween", 0.1, 3)}
            initial="hidden"
            animate="show"

           className="home-text">
            <p className="first-text">Studying books, a long lasting way to changing lives</p>
            <p className="second-text">We relieve you to a great deal by sourcing books for you to lend, read and change your lives. We are always ready to help</p>
            <div>
              <NavLink to="learn-more">Learn More</NavLink>
              <NavLink to="contact">Contact Us</NavLink>
            </div>
          </motion.div>
        </motion.div>
        <motion.div 
          // initial={{x: '100vw', opacity:0}}
          // animate={{x: 0, opacity: 1}}
          // transition={{delay: 1,
          //   type:'spring',
          //   // duration: 10,
          //   stiffness: 10,
          //   mass: 4
          // }}
          variants={slideIn("right", "spring", 0.1, 4)}
          initial="hidden"
          animate="show"
        >  

        {/* //</div>variants={slideIn("right", "tween", 1, 2)} >// */}
          <img src={gof} alt="A girl reading" />
        </motion.div>
      </div>

    </div>
  )
}
