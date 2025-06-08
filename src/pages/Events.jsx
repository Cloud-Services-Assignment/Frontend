import EventCard from "../components/EventCard"
import Header from "../components/Header"

function Events() {
  return (
    <>
      <title>Events | Ventixe</title>
      <Header pageTitle={"Events"} />
      <main className="surface">
        <section className="card-grid">
          <EventCard />
          <EventCard />
          <EventCard />
          <EventCard />
        </section>
      </main>
    </>
  )
}

export default Events