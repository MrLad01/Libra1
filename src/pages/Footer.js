import { Link } from "react-router-dom";
import book from "../images/Rectangle 15.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from "framer-motion"


export default function Footer() {
  return (
    <div className="footer">
      <div>
        <motion.div className="terms-and-condition"
        initial={{x: 20, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 2, delay: 0.5}}
        >
            <img src={ book } alt="" />
            <div className="terms-text">
                <h2>We dedicate time diligently to provide books for you</h2>
                <hr />
                <h4>Read through our code of conduct and terms of agreement on borrowing of books</h4>
                <button>Read</button>
            </div>
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
  )
}
