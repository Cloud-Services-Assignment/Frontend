import { Route, Routes } from 'react-router-dom'
import './App.css'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import BookingEvents from './pages/BookingEvents'
import Bookings from './pages/Bookings'
import PortalLayout from './layouts/PortalLayout'

function App() {
  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route index element={<Events />} />
        <Route path="events/:id" element={<EventDetails />} />
        <Route path="events/book/:id" element={<BookingEvents />} />
        <Route path="bookings" element={<Bookings />} />
      </Route>
    </Routes>
  )
}

export default App
