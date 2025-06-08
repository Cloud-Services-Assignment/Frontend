import { Link, NavLink } from "react-router-dom"

function SideNavbar() {
  return (
    <aside className="surface dark">
        <nav className="nav">
            <Link className="logo" to="/"><img src="src/assets/logo.svg" alt="Ventixe logo" /><span>Ventixe</span></Link>
            <ul className="nav-links">
                <li><NavLink className="nav-link" to="/bookings"><i class="fa-solid fa-square-check fa-lg"></i><span>Bookings</span></NavLink></li>
                <li><NavLink className="nav-link" to="/"><i class="fa-solid fa-ticket"></i><span>Events</span></NavLink></li>
            </ul>
        </nav>
    </aside>
  )
}

export default SideNavbar