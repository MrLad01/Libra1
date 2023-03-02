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
                <p>Read through our code of conduct and terms of agreement on borrowing of books</p>
                <button>Read</button>
            </div>
        </div>
      </div>
      <footer>
        <h3>Contact us on:</h3>
        <div>
            <i></i>
            <i></i>
            <i></i>
        </div>
        <div>
            <Link to=""></Link>
            <Link to=""></Link>
            <Link to=""></Link>
            <select name="" id="">
                <option value="">EN</option>
            </select>
            <Link to=""></Link>
        </div>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore id quo labore aliquid ipsam dolores placeat sed modi quis provident.</p>
      </footer>
    </div>
  )
}
