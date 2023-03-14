import { Link, Form } from "react-router-dom"
import facebook from "../Icons/icons8-facebook.svg"
import google from "../Icons/icons8-google.svg"
import twitter from "../Icons/icons8-twitter.svg"


export default function SignUp() {
  return (
    <div>
      <img src="" alt="" />
      <div className="background">
        <div className="page-content">
              <h2>SIGN UP</h2>
              <Form>
                <div className="inputs">
                    <label htmlFor="email"> Email</label>
                    <input type="text" placeholder="Enter E-mail" id="email" name="email" />
                    <label htmlFor="password"> Password</label>
                    <input type="text" placeholder="Enter Password" id="password" name="password" />
                    <label htmlFor="copassword"> Confirm Password</label>
                    <input type="text" placeholder="Enter Password again" id="copassword" name="copassword" />
                    {/* <h5><Link>Forgot password?</Link></h5> */}
                </div>
                <button className="button2">Sign Up</button>
              </Form>
              <div>
                  <h5>Or login using</h5>
                  <div>
                      <Link to="/"><img src={facebook} alt="" /></Link>
                      <Link to="/"><img src={google} alt="" /></Link>
                      <Link to="/"><img src={twitter} alt="" /></Link>
                  </div>
              </div>  
              <h4>Already a member? <Link to="/log-in">Log In</Link></h4>
        </div>
      </div>
    </div>
  )
}
