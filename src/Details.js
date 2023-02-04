import React from 'react'
import "./Details.css"
import { useState } from "react";

function Details() {
  const [mydate] = useState(localStorage.getItem("date"))
  const [mytime] = useState(localStorage.getItem("time"))
  const [myguests] = useState(localStorage.getItem("guests"))
  const [myoccasion] = useState(localStorage.getItem("occasion"))
  const [myname] = useState(localStorage.getItem("name"))

  return (
    <>
    <header >
    <fieldset>
    <legend>Your reservation</legend>
      <table>
  <tr>
    <th colspan="2">Booking details</th>
    <th></th>
  </tr>
  <tr>
    <td>Date:</td>
    <td id="loadDate">{mydate? mydate: '----'}</td>
  </tr>
  <tr>
    <td>Time:</td>
    <td id="loadTime">{mytime? mytime: '----'}</td>
  </tr>
  <tr>
    <td>Guests:</td>
    <td id="loadGuests">{myguests? myguests: '----'}</td>
  </tr>
  <tr>
    <td>Occasion:</td>
    <td id="loadOccasion">{myoccasion? myoccasion: '----'}</td>
  </tr>
  <tr>
    <td>Name:</td>
    <td id="loadName">{myname? myname: '----'}</td>
  </tr>
  <tr>
    <td colspan="2"><h3>Thank you! <br/> Your booking has been confirmed</h3></td>
    <td></td>
  </tr>
</table>
</fieldset>
    </header>
    </>
  )
}

export default Details