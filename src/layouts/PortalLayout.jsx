import { Outlet } from "react-router-dom"
import SideNavbar from "../components/SideNavbar"
import Footer from "../components/Footer"

function PortalLayout() {
  return (
    <div className="portal-grid">
        <Outlet />
        <SideNavbar />
        <Footer />
    </div>
  )
}

export default PortalLayout