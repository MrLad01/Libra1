import { NavLink } from "react-router-dom"
import  Tilt  from "react-parallax-tilt"

export default function Item({img, title, content}) {
  return (
    <div>
      <Tilt tiltMaxAngleX={20} 
        tiltMaxAngleY={20} perspective={1000} 
        tiltReverse={true}
        >
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
