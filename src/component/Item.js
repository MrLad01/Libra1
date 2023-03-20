import { NavLink } from "react-router-dom"
import  Tilt  from "react-parallax-tilt"

export default function Item({img, title, content}) {
  return (
    <div>
      <Tilt glareEnable={true} tiltMaxAngleX={10} 
        tiltMaxAngleY={10} perspective={1000} 
        glareColor={"rgb(255,0,0)"}>
        <NavLink to="/">
          <div className="items">
            <img src={ img } alt="" />
            <h4>{ title }</h4>
            <p>{ content }</p>
          </div>
          </NavLink>
        </Tilt>
    </div>
  )
}
