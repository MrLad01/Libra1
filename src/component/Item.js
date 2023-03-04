import { NavLink } from "react-router-dom"

export default function Item({img, title, content}) {
  return (
    <div>
       <NavLink to="/">
        <div className="items">
          <img src={ img } alt="" />
          <h4>{ title }</h4>
          <p>{ content }</p>
        </div>
        </NavLink>
    </div>
  )
}
