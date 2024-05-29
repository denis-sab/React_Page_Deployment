import { NavLink } from "react-router-dom";


function Navbar() {
  return (

    <div>
        <nav>
          <ol>
            <li>
             <NavLink to="/">Home</NavLink>
            </li>
            <li>
            <NavLink to="/users">Users</NavLink>
            </li>
          </ol>
        </nav>

    </div>
  )
}

export default Navbar; 