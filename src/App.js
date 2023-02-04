import { Routes, Route } from 'react-router-dom';
import './App.css';
import Booking from "./pages/Bookingpage";
import Home from "./pages/Home";
import ConfirmedBooking from "./pages/ConfirmedBooking";




function App() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/ConfirmedBooking' element={<ConfirmedBooking />} />
     </Routes>
    </>
  );
}

export default App;

