import Header from "../components/Header"
import { Link } from "react-router-dom"

function EventDetails() {
  return (
    <>
      <title>Event Details | Ventixe</title>
      <Header pageTitle={"Event Details"} />
      <main className="details surface">
        <div className="left">
          <section className="card surface light">
            <div className="placeholder-img large"></div>
            <h2 className="quaternary-heading text-dark">Adventure Gear Show</h2>
            <div className="flex-sb">
              <div className="left-col">
                <p className="icon-text"><i class="fa-solid fa-calendar"></i><span>June 5, 2029 - 3:00 PM</span></p>
                <p className="icon-text"><i class="fa-solid fa-location-dot"></i><span>Rocky Ridge Exhibition Hall, Denver, CO</span></p>
              </div>
              <div className="right">
                <p>Ticket Price</p>
                <p className="text-primary">$40</p>
              </div>
            </div>
            <div className="text-container">
              <h3 className="text-accent fw-semibold">About Event</h3>
              <p>The Echo Beats Festival brings together a stellar lineup of artists across EDM, pop, and hip-hop genres. Prepare to experience a night of electrifying music, vibrant light shows, and unforgettable performances under the stars. Explore food trucks, art installations, and VIP lounges for an elevated experience.</p>
            </div>
          </section>
          <section className="surface light terms">
            <h2 className="senary-heading">Terms & Conditions</h2>
            <ol>
              <li className="septenary-heading">Ticket Purchase and Entry
                <ul className="bullets">
                  <li>All attendees must possess a valid ticket for entry.</li>
                  <li>Tickets are non-refundable and non-transferable unless specified by the event organizer.</li>
                  <li>Attendees must present a valid government-issued ID along with their ticket at the gate.</li>
                </ul>
              </li>
              <li className="septenary-heading">Security and Safety
                <ul className="bullets">
                  <li>Attendees are subject to security checks, including bag inspections, upon entry.</li>
                  <li>Prohibited items include weapons, drugs, alcohol, fireworks, and other hazardous materials.</li>
                  <li>The event organizer reserves the right to deny entry to individuals deemed a security risk.</li>
                </ul>
              </li>
              <li className="septenary-heading">Code of Conduct
                <ul className="bullets">
                  <li>Attendees are expected to behave responsibly and respectfully toward others.</li>
                  <li>Any disruptive behavior, harassment, or illegal activity will result in immediate removal from the event without refund.</li>
                </ul>
              </li>
              <li className="septenary-heading">Event Schedule and Changes
                <ul className="bullets">
                  <li>The event schedule is subject to change without prior notice.</li>
                  <li>The event organizer is not responsible for delays or cancellations caused by weather, technical issues, or unforeseen circumstances.</li>
                </ul>
              </li>
            </ol>
          </section>
        </div>
        <Link className="btn" to="/events/book/1">Book Event</Link>
      </main>
    </>
  )
}

export default EventDetails