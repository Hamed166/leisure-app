import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import './MyBooking.css'
import MyBookingShow from './MyBookingShow/MyBookingShow';

const MyBooking = () => {
    const {user} = useAuth();
    const [load,setLoad] = useState(false);
    console.log(user.email,"this is user")
    const [book,setbook] = useState([])
    useEffect(()=>{
        
        fetch(`http://localhost:5000/myBooking/${user?.email}`)
        
        .then(res=>res.json())
        .then(data=>{
            setbook(data)
            
        })
    },[book])
    console.log(book,'book all')
    return (
        <div >
           <div className="container">
               <div className="mybooking">
               {
                book.map(booking=><MyBookingShow booking={booking}></MyBookingShow>)
            }
               </div>
           </div>
        </div>
    );
};

export default MyBooking;