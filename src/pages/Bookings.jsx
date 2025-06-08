import Header from "../components/Header"

function Bookings() {
  return (
    <>
      <title>Bookings | Ventixe</title>
      <Header pageTitle={"Bookings"} />
      <main className="surface">
        <table className="bookings surface light">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Event</th>
              <th>Ticket Price</th>
              <th>Qty</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody className="booking">
            <tr>
              <td>2029/02/15</td>
              <td>Jackson Moore</td>
              <td>Adventure Gear Show</td>
              <td>$40</td>
              <td>2</td>
              <td>$80</td>
            </tr>
          </tbody>
        </table>
      </main>
    </>
  )
}

export default Bookings