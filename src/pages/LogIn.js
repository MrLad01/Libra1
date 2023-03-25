import { useState } from "react"
import { Link, Form } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import facebook from "../Icons/icons8-facebook.svg"
import google from "../Icons/icons8-google.svg"
import twitter from "../Icons/icons8-twitter.svg"



export default function LogIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit =  (e) => {
    e.preventDefault()
    
   console.log(email, password)
  }
  return (
        <div>
          <img src="" alt="" />
          <div className="background ">
              <div className="form-container">
                <div className="page-content">
                      <h2>LOG IN</h2>
                      <Form onSubmit={ handleSubmit}>
                        <div className="inputs">
                            <label htmlFor="email"> Email</label>
                            <FontAwesomeIcon icon="fa-solid fa-user" style={{position: "relative", top: "39px", right: "60px", color: "#AEADAE"}} />
                            <input type="email" placeholder="Enter E-mail" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="password"> Password</label>
                            <FontAwesomeIcon icon="fa-solid fa-unlock" style={{position: "relative", top: "39px", right: "105px", color: "#AEADAE"}} />
                            <input type="password" placeholder="Enter Password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                            <h5><Link>Forgot password?</Link></h5>
                        </div>
                        <button className="button1">Log In</button>
                        {/* {email}
                        {password} */}
                      </Form>
                      <div>
                          <h5>Or login using</h5>
                          <div className="login-icons">
                              <Link to="/"><img src={facebook} alt="" /></Link>
                              <Link to="/"><img src={google} alt="" /></Link>
                              <Link to="/"><img src={twitter} alt="" /></Link>
                          </div>
                      </div>  
                      <h4>New member? <Link to="/sign-up">Sign Up</Link></h4>
                </div>
              </div>
            </div>
          </div>
      )
  }
