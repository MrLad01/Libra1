import { useState, useEffect } from "react"
import { Link, Form } from "react-router-dom"
import facebook from "../Icons/icons8-facebook.svg"
import google from "../Icons/icons8-google.svg"
import twitter from "../Icons/icons8-twitter.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from '../images/Frame304.png';
import { motion } from "framer-motion"

export default function SignUp() {

  
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

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [view, setView] = useState(true)
  const [view2, setView2] = useState(true)


  const handleSubmit =  (e) => {
    e.preventDefault()
    
   console.log(email, password, newPassword)
  }

  return (
    <div>
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
        </div>
        ) : (
    <div className="background">
      <img src= { logo } alt="logo"  style={{marginLeft: "45px"}} />
      <div>
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
                          { view && <FontAwesomeIcon icon="fa-solid fa-eye" style={{position: "relative", top: "43px", left: "268px", color: "#AEADAE", cursor: "pointer"}} onClick={() => setView(!view)} /> }
                          { !view && <FontAwesomeIcon icon="fa-solid fa-eye-slash" style={{position: "relative", top: "43px", left: "268px", color: "#AEADAE", cursor: "pointer"}} onClick={() => setView(!view)} /> }
                          <input type={view ?"password":"text"} placeholder="Enter Password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} /> 
                          <label htmlFor="copassword"> Confirm Password</label>
                          <FontAwesomeIcon icon="fa-solid fa-unlock" style={{position: "relative", top: "39px", right: "204px", color: "#AEADAE"}} />
                          { view2 && <FontAwesomeIcon icon="fa-solid fa-eye" style={{position: "relative", top: "43px", left: "167px", color: "#AEADAE", cursor: "pointer"}} onClick={() => setView2(!view2)} />}
                          { !view2 && <FontAwesomeIcon icon="fa-solid fa-eye-slash" style={{position: "relative", top: "43px", left: "167px", color: "#AEADAE", cursor: "pointer"}} onClick={() => setView2(!view2)} />}
                          <input type={view2 ?"password":"text"} placeholder="Enter Password again" id="copassword" name="copassword" required onChange={(e) => setNewPassword(e.target.value)} />
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
      </div> )}
  </div>
  )
}
