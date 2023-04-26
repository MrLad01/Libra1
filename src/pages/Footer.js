import { Link } from "react-router-dom";
import book from "../images/Rectangle 15.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"
import { useState, useEffect } from "react";


export default function Footer() {

  
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
    <div className="footer">
      {isMobile ? (
        <div className="home2">
          <p><motion.span
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 2, delay: 0.5}}
          >Sorry your screen size is small,</motion.span> <motion.span
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{duration: 2, delay: 2}}
          >but in the coming days we'll get something appropriate for you</motion.span></p>
          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2, delay: 4}}
          >
            But you can change your browser screen to desktop site or zoom out to have a better experience
            </motion.p>
        </div>
        ) : (
      <div>
        <div>
          <motion.div className="terms-and-condition"
          initial={{x: 30, opacity: 0}}
          whileInView={{x: 0, opacity: 1}}
          transition={{duration: 4, delay: 0.5}}
          >
              <img src={ book } alt="" />
              <motion.div className="terms-text"
                initial={{x: 20, opacity: 0}}
                whileInView={{x: 0, opacity: 1}}
                transition={{duration: 3, delay: 3}}
              >
                  <h2>We dedicate time diligently to provide books for you</h2>
                  <hr/>
                  <h4>Read through our code of conduct and terms of agreement on borrowing of books</h4>
                  <motion.button
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{duration: 2, delay: 6}}
                  >Read</motion.button>
              </motion.div>
          </motion.div>
        </div>
        <footer>
          <h3>Contact us on:</h3>
          <div className="footer-icons"> 
              <Link to="/"><FontAwesomeIcon icon="fa-brands fa-facebook" style={{color: "white"}} /></Link>
              <Link to="/"><FontAwesomeIcon icon="fa-brands fa-google" style={{color: "white"}} /></Link>
              <Link to="/"><FontAwesomeIcon icon="fa-brands fa-twitter" style={{color: "white"}}/></Link>
          </div>
          <div className="footer-links">
              <Link to="">Libraread Group</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">Reviews</Link>
              <select name="" id="">
                  <option value="">EN</option>
              </select>
              <Link to="">Terms and Condition</Link>
          </div>
          <hr />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id quo labore aliquid ipsam dolores placeat sed modi quis provident.</p>
        </footer>
      </div>
    )}
    </div>
  )
}
