import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const BookNew = () => {
    const {bookingId}= useParams();
    const [bookNew, setBookNew]= useState([]);

    useEffect(()=>{
        fetch(`https://calm-journey-29870.herokuapp.com/myBooking/${bookingId}`)
        .then(res =>res.json())
        .then(data=> setBookNew(data))

    },[]);
    return (
        <div>
            <div>
                <h2>{bookingId?.name}</h2>
                
            </div>
        </div>
    );
};

export default BookNew;