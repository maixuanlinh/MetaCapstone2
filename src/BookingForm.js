import { useState } from "react";
import React from 'react'
import './BookingForm.css'
// import { Link } from 'react-router-dom';
import  {DoneData}  from "./Donedata";

export default function BookingForm({availableTimes, setAvailableTimes, submitForm}) {

  const changeTimeSlots = (e) => {
    setDate(e.target.value)
    setAvailableTimes({
        type: DoneData.DATE_CHANGE,
        payload: e.target.value,
    })
}

     const today = new Date().toISOString().split("T")[0];

     const [date, setDate] = useState("__");
     const [time, setTime] = useState("__");
     const [guests, setGuests] = useState("__");
     const [occasion, setOccasion] = useState("__");
     const [myname, setMyname] = useState("");
     const [error, setError] = useState(false);
 
  function createItem() {

    var datadate = document.getElementById("date").value;
    localStorage.setItem("date", datadate);
    var dataTime = document.getElementById("time").value;
    localStorage.setItem("time", dataTime);
    var dataGuests = document.getElementById("guests").value;
    localStorage.setItem("guests", dataGuests);
    var dataOccasion = document.getElementById("occasion").value;
    localStorage.setItem("occasion", dataOccasion);
    var dataName = document.getElementById("myname").value;
    localStorage.setItem("name", dataName);
    const submitbtn = document.getElementById("submitbtn");
 if(occasion==="" || date ==="" || time===""|| myname ==="" || guests ===""){
  setError(true)
  document.getElementById("submitbtn").style.backgroundColor = 'red';
  document.getElementById("submitbtn").style.color = 'white';
  submitbtn.disabled = true;
 }


  }


  return (

    <>

    <div className="formcontainer">

            <form onSubmit={submitForm} role="test">
             <div>
              <h1 id="formheading">Make your reservation</h1>
                <label htmlFor="date">Choose date </label><br/>
                <input required
                       name="date"
                       type="date"
                       value={date}
                       min={today}
                    onChange={changeTimeSlots}
                       id="date"/>
                       {error?
                <label style={{color:'red'}}><br/>Please select date</label>:""}
                </div>
                <div>
                <label htmlFor="time">Choose time </label><br/>
                <select required
                        name="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        id="time">
                    {availableTimes?.map((time, index) =>
                        <option id="selectedTime" key={index} value={time}><span >{time}</span></option>)}
                </select>
                {error?
                <label style={{color:'red'}}><br/>Please select time</label>:""}
              </div>
              <div>
                <label htmlFor="guests">Number of guests </label><br/>
                <input required
                       type="number"
                       name="guests"
                       value={guests}
                       onChange={(e) => setGuests(e.target.value)}
                       placeholder="max 10"
                       min="1"
                       max="10"r
                       id="guests"/>
                       {error&&time.length<10?
                <label style={{color:'red'}}><br/>Please select number of guests</label>:""}
                </div>
                <div> 
                <label htmlFor="occasion">Occasion </label><br/>
                <select required
                        name="occasion"
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        id="occasion"
                        data-test-id="currentNumber">
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                {error?
                <label style={{color:'red'}}><br/>Please select occasion</label>:""}
               </div>
               <div> 
                <label htmlFor="myname">Name </label><br/>
                <input minlength="2" required type="text" id="myname"  name="myname" value={myname} onChange={(e) => setMyname(e.target.value)} placeholder="e.g John Doe">

                </input>
                {error&&myname.length<=0?
                <label style={{color:'red'}}><br/>Cannot be empty</label>:""}
               </div>
               <div>  
                <input type="submit"
                       name="submit"
                       role="button"
                       aria-label="Submit your reservation"
                       value="Book Your Table"
                       className="btn"
                       id="submitbtn"
                       aria-label="Click to make a reservation"
                       onClick={createItem} />
                </div>
            </form>
            <div className="reservation">
            
            <fieldset>
            <legend>Your reservation</legend>
                <div className="title">Date: <span id="selectedDate">{date}</span> </div> 
               <div className="title">Time:  <span id="selectedTime">{time}</span></div>
                <div className="title">Guests:  <span  id="selectedGuests">{guests}</span></div>
                <div className="title">Occasion:  <span id="selectedOccasion">{occasion}</span></div>
                <div className="title">Name: <span id="selectedName">{myname}</span></div>
            </fieldset>
            <div> 
            {/* <Link to="/ConfirmedBooking"> 
          <input onClick={createItem} type="submit" value="Confirm Your reservation"></input>
          </Link> */}
          </div>
            </div>
            </div>
            </>

  )
}




