import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div>
      <img src="" alt="" />
      <div className="background">
            <h2>SIGN UP</h2>
            <div className="inputs">
                <label htmlFor=""> Email</label>
                <input type="text" placeholder="Enter E-mail" />
                <label htmlFor=""> Password</label>
                <input type="text" placeholder="Enter Password" />
                <label htmlFor=""> Confirm Password</label>
                <input type="text" placeholder="Enter Password again" />
                <h5><Link>Forgot password?</Link></h5>
            </div>
            <button>Sign Up</button>
            <div>
                <h5>Or login using</h5>
                <div>
                    <Link><i></i></Link>
                    <Link><i></i></Link>
                    <Link><i></i></Link>
                </div>
            </div>  
            <h4>Already a member? <Link to="/log-in">Log In</Link></h4>
      </div>
    </div>
  )
}
