import { Link } from "react-router-dom"

export default function LogIn() {
  return (
    <div>
      <img src="" alt="" />
      <div className="background">
            <h2>LOG IN</h2>
            <div className="inputs">
                <label htmlFor=""> Email</label>
                <input type="text" placeholder="Enter E-mail" />
                <label htmlFor=""> Password</label>
                <input type="text" placeholder="Enter Password" />
                <h5><Link>Forgot password?</Link></h5>
            </div>
            <button>Log In</button>
            <div>
                <h5>Or login using</h5>
                <div>
                    <Link><i></i></Link>
                    <Link><i></i></Link>
                    <Link><i></i></Link>
                </div>
            </div>  
            <h4>New member? <Link to="/sign-up">Sign Up</Link></h4>
      </div>
    </div>
  )
}
