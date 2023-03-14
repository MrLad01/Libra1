import { Link, Form } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from "../Icons/icons8-facebook.svg"
import google from "../Icons/icons8-google.svg"
import twitter from "../Icons/icons8-twitter.svg"



export default function LogIn() {
  return (
    <div>
      <img src="" alt="" />
      <div className="background">
        <div className="page-content">
              <h2>LOG IN</h2>
              <Form>
                <div className="inputs">
                    <label htmlFor="email"> Email</label>
                    <input type="text" placeholder="Enter E-mail" id="email" name="email" />
                    <label htmlFor="password"> Password</label>
                    <input type="text" placeholder="Enter Password" id="password" name="password" />
                    <h5><Link>Forgot password?</Link></h5>
                </div>
                <button className="button1">Log In</button>
              </Form>
              <div>
                  <h5>Or login using</h5>
                  <div className="login-icons">
                      {/* <Link to="/"><FontAwesomeIcon 
                                    icon="fa-brands fa-twitter"  
                                    style={{color: "red"}}/></Link> */}
                      <Link to="/"><img src={facebook} alt="" /></Link>
                      <Link to="/"><img src={google} alt="" /></Link>
                      <Link to="/"><img src={twitter} alt="" /></Link>
                      {/* <Link to="/"><FontAwesomeIcon icon="fa-brands fa-google" /></Link>
                      <Link to="/"><FontAwesomeIcon icon="fa-brands fa-facebook" /></Link> */}
                  </div>
              </div>  
              <h4>New member? <Link to="/sign-up">Sign Up</Link></h4>
        </div>
      </div>
    </div>
  )
}
