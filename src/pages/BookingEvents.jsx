import Header from "../components/Header"

function BookingEvents() {
  return (
    <>
      <title>Book Event | Ventixe</title>
      <Header pageTitle={"Book Event"} />
      <main className="surface event-booking">
        <h2 className="senary-heading">Adventure Gear Show</h2>
        <form action="" className="form surface light">
          <div className="form-inner">
            <label htmlFor="FullName">Full Name</label>
            <input type="text" id="FullName" name="FullName" />
          </div>
          <div className="form-inner">
            <label htmlFor="Quantity">Quantity</label>
            <input type="number" id="Quantity" name="Quantity" min={1} max={10}/>
          </div>
          <button className="btn">Book</button>
        </form>
      </main>
    </>
  )
}

export default BookingEvents