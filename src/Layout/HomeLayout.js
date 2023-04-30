import { NavLink } from "react-router-dom"
import gof from "../images/Rectangle 3.png"
import { motion } from "framer-motion"
import { buttonVariant, slideIn , textVariant} from "../utils/motion"
import { useState, useEffect } from "react"


export default function HomeLayout() {

  // const isMobile = window.innerWidth < 1250;

  const [isMobile, setIsMobile] = useState(window.innerWidth < 1250); // Use useState hook to manage state

  useEffect(() => {
    const handleResize = (e) => {
      e.preventDefault();
      setIsMobile(window.innerWidth < 1250); // Update isMobile state based on screen width
    };

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="home2">
          <p><motion.span
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 1, delay: 0.25}}
          >Sorry your screen size is small,</motion.span> <motion.span
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 1, delay: 1}}
          >but in the coming days we'll get something appropriate for you</motion.span></p>
        </div>
        ) : (
        <motion.div className="home">
        <div className="home1">
          <motion.div 
          exit={{
            opacity: 0,
            transition: {duration: 0.5, delay: 0.05}}}
          >
            <motion.div
              variants={slideIn("left", "tween", 0.25, 1.5)}
              initial="hidden"
              animate="show"

            className="home-text">
              <motion.p className="first-text">Studying books, a <br /> long lasting way to changing lives</motion.p>
              <motion.p 
                variants={textVariant(0.1)}
                className="second-text">We relieve you to a great deal by sourcing books for you to lend, read and change your lives. We are always ready to help</motion.p>
              <motion.div
                variants={buttonVariant(3)}
                initial="hidden"
                animate="show"
              >
                <NavLink to="learn-more">Learn More</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={slideIn("right", "spring", 0.25, 2)}
            initial="hidden"
            animate="show"
          >  
            <img src={gof} alt="A girl reading" />
          </motion.div>
        </div>

      </motion.div>) }
      </div>
  )
}
