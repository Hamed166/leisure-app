import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';

const Booking = () => {
    const {tourId}= useParams();
    const [booking, setBooking]= useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/tours/${tourId}`)
        .then(res=>res.json())
        .then(data=>setBooking(data))
    },[])
    return (
        <div>
            <h1>{booking.name}</h1>
            <h2 className="text-4xl text-red-400 font-bold mt-36">This is Booking page{tourId}</h2>
        </div>
    );
};

export default Booking;