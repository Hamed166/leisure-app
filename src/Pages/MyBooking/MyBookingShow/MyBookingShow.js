import React from 'react';
import { Link } from 'react-router-dom';
import './MyBookingShow.css'



const MyBookingShow = ({booking}) => {
    console.log(booking,'booking')
    // delete my booking
    const hendeldelet = id =>{
       const confirmed = window.confirm('are your sure this item delet')
       if(confirmed){
        fetch(`http://localhost:5000/myBooking/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('successfully delete')
            }
        })
       }
    }
    // Update my booking
   
    return (
        <div >
            <div className="booking-card">
                <img src={booking.tourInfo.img} alt=""/>
                <div className="booking-info">
                <p>Price: {booking.tourInfo.price}</p>
                <p>Name: {booking.tourInfo.name}</p>
                </div>
                <div className="booking-info">
                <p>Address: {booking.Address}</p>
                <p>Email: {booking.email}</p>
                </div>
                <p>Number: {booking.price}</p>
                <div className="booking-info">
                <Link to={`/updated/${booking._id}`}><button className="all-btn">Update</button></Link>
                 <button onClick={()=>hendeldelet(booking._id)} className="all-btn">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyBookingShow;