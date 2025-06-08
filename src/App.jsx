import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import BookingEvents from './pages/BookingEvents'
import Bookings from './pages/Bookings'

function App() {
  return (
    <Routes>
      <Route index element={<Events />} />
      <Route path="events/:id" element={<EventDetails />} />
      <Route path="events/book/:id" element={<BookingEvents />} />
      <Route path="bookings" element={<Bookings />} />
    </Routes>
  )
}

export default App
