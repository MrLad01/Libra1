import { NavLink } from "react-router-dom";


export default function Services() {
  return (
    <div className="services">
      <h3>What we do</h3>
      <div>
        <img src="" alt="" />
        <h4>Source books</h4>
        <p>We diligently go through the process of vetting, selecting and compil live changing books for your reading enjoyment</p>
      </div>
      <div>
        <img src="" alt="" />
        <h4>Lend Books</h4>
        <p>We help you save some money while getting the same value through the lending of books at reduced rates</p>
      </div>
      <div>
        <img src="" alt="" />
        <h4>Deliver Books</h4>
        <p>Our efficient delivery service gets your books to your doorstep saving you some energy to read</p>
      </div>

      <div>
        <h3>Trending Books</h3>
        <div>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h5>Steal like an artist</h5>
                <h6>Austin Kleon</h6>
                <div>
                    <i></i>
                    <button>View details</button>
                </div>
            </div>

            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h5>Half of a yellow sun</h5>
                <h6>Austin Kleon</h6>
                <div>
                    <i></i>
                    <button>View details</button>
                </div>
            </div>
            
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h5>The sun and her flowers</h5>
                <h6>Rupi Kaur</h6>
                <div>
                    <i></i>
                    <button>View details</button>
                </div>
            </div>

            <div>
                <img src="" alt="" />
            </div>
            <div>
                <h5>Purple Hibicus</h5>
                <h6>Chimamanda Adichie</h6>
                <div>
                    <i></i>
                    <button>View details</button>
                </div>
            </div>
        </div>

        <NavLink><div></div></NavLink>
        <NavLink><div></div></NavLink>
        <NavLink><div></div></NavLink>
        <NavLink><div></div></NavLink>
      </div>
    </div>
  )
}
