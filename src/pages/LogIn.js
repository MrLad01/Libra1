import { Link, Form } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}



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
                  <div>
                      <Link><FontAwesomeIcon icon={brands('twitter')} /></Link>
                      <Link><i></i></Link>
                      <Link><i></i></Link>
                  </div>
              </div>  
              <h4>New member? <Link to="/sign-up">Sign Up</Link></h4>
        </div>
      </div>
    </div>
  )
}
