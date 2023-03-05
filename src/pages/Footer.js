import { Link } from "react-router-dom";
import book from "../images/Rectangle 15.png"

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <div className="terms-and-condition">
            <img src={ book } alt="" />
            <div className="terms-text">
                <h2>We dedicate time diligently to provide books for you</h2>
                <hr />
                <h4>Read through our code of conduct and terms of agreement on borrowing of books</h4>
                <button>Read</button>
            </div>
        </div>
      </div>
      <footer>
        <h3>Contact us on:</h3>
        <div>
            <FontAwesomeIcon icon="fa-brands fa-facebook" />
            <FontAwesomeIcon icon="fa-brands fa-google" />
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
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
