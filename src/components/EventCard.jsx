import { Link } from "react-router-dom"

function EventCard() {
  return (
    <div className="card surface small light">
        <div className="placeholder-img"></div>
        <div className="inner-container">
            <p>June 5, 2029 - 3:00 PM</p>
            <h2 className="senary-heading">Adventure Gear Show</h2>
            <p className="icon-text"><i class="fa-solid fa-location-dot"></i><span>Rocky Ridge Exhibition Hall, Denver, CO</span></p>
        </div>
        <div className="flex-sb">
            <Link className="btn" to="/events/1">Details</Link>
            <p className="text-primary">$40</p>
        </div>
    </div>
  )
}

export default EventCard