import { useState } from "react"
import { Link, Form } from "react-router-dom"
import facebook from "../Icons/icons8-facebook.svg"
import google from "../Icons/icons8-google.svg"
import twitter from "../Icons/icons8-twitter.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export default function SignUp() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [view, setView] = useState("password")


  const handleSubmit =  (e) => {
    e.preventDefault()
    
   console.log(email, password, newPassword)
  }

  const handleView = () => {
    setView(!view)
  }

  return (
    <div>
      <img src="" alt="" />
      <div className="background">
            <div className="form-container">
              <div className="page-content">
                    <h2>SIGN UP</h2>
                    <Form onSubmit={ handleSubmit}>
                      <div className="inputs">
                          <label htmlFor="email"> Email</label>
                          <FontAwesomeIcon icon="fa-solid fa-user" style={{position: "relative", top: "39px", right: "60px", color: "#AEADAE"}} />
                          <input type="email" placeholder="Enter E-mail" id="email" name="email" required onChange={ (e) => setEmail(e.target.value)} />
                          <label htmlFor="password"> Password</label>
                          <FontAwesomeIcon icon="fa-solid fa-unlock" style={{position: "relative", top: "39px", right: "105px", color: "#AEADAE"}} />
                          <FontAwesomeIcon icon="fa-solid fa-eye" style={{position: "relative", top: "43px", left: "268px", color: "#AEADAE"}} onClick={handleView} />
                          <input type={view} placeholder="Enter Password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} /> 
                          <label htmlFor="copassword"> Confirm Password</label>
                          <FontAwesomeIcon icon="fa-solid fa-unlock" style={{position: "relative", top: "39px", right: "204px", color: "#AEADAE"}} />
                          <FontAwesomeIcon icon="fa-solid fa-eye" style={{position: "relative", top: "43px", left: "167px", color: "#AEADAE"}} />
                          <input type="password" placeholder="Enter Password again" id="copassword" name="copassword" required onChange={(e) => setNewPassword(e.target.value)} />
                      </div>
                      <button className="button2">Sign Up</button>
                    </Form>
                    <div>
                        <h5>Or login using</h5>
                        <div className="login-icons2">
                            <Link to="/"><img src={facebook} alt="" /></Link>
                            <Link to="/"><img src={google} alt="" /></Link>
                            <Link to="/"><img src={twitter} alt="" /></Link>
                        </div>
                    </div>  
                    <h4>Already a member? <Link to="/log-in">Log In</Link></h4>
              </div>
            </div>
          </div>
      </div>
  )
}
