import { NavLink, Outlet } from "react-router-dom";
import arrow  from "../images/chevron-down.png";
import Cards from "../component/Cards";
import data from "../data/data"
import data2 from "../data/data2"
import Item from "../component/Item";

export default function Services() {

  const items = data2.map(item => {
    return (
      <Item
      img={item.img}
      title={item.title}
      content={item.content}
      />
    )
  })
  const books = data.map(book => {
    return (
      <Cards
      img={book.image}
      content={book.content}
      author={book.author}
      />
    )
  })

  return (
    <div className="services">
      <div className="what-we-do">  
        <h3>What We Do</h3>
        <div>
          { items }
        </div>
      </div>

      <div className="trending">
        <h3>Trending Books</h3>
        <div className="t-books">
          {books}
        </div>

        <div className="nav-buttons">
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
          <NavLink><div></div></NavLink>
        </div>

      </div>

      <NavLink to="others">
        <img src={ arrow } alt="" />
      </NavLink>


      <Outlet />
    </div>
  )
}
