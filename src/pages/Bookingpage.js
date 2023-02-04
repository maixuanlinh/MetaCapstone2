import React from 'react'
import Nav  from "../Nav";
import BookingForm  from "../BookingForm";
import Rating from "../Rating";
import Footer from "../Footer";
import { useReducer} from "react";
import {fetchAPI, submitAPI} from "../API";
import { useNavigate} from "react-router-dom";
import {DoneData}  from "../Donedata";


export const initializeTimes = () => {
  return fetchAPI(new Date());
}

export const updateTimes = (state, action) => {
  switch (action.type) {
      case DoneData.DATE_CHANGE:
          return fetchAPI(new Date(action.payload));

      case DoneData.ADD_BOOKING:
          return state.filter((time) => time.value !== action.payload)
          break;
      default:
          return state
  }
}






export default function Bookingpage() {

  const [availableTimes, setAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes(),
)
const navigate = useNavigate()

const submitForm = (formData) => {
    setAvailableTimes({
        type: DoneData.ADD_BOOKING,
        payload: formData.time,
    })

    const response = submitAPI(formData)
    if (response) {
        navigate("/ConfirmedBooking")
    }
} 

  return (
    <>
    <Nav/>
    <BookingForm submitForm={submitForm} availableTimes={availableTimes} setAvailableTimes={setAvailableTimes}/>
    <Rating />
    <Footer/>
    </>
  )
}
