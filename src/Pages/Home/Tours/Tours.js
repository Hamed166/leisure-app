import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(()=>{
        fetch('https://calm-journey-29870.herokuapp.com/tours')
        .then(res=> res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className="md:container md:mx-auto mx-auto px-20 mt-24 mb-12">
        <h2 className="text-left text-xl text-yellow-500 font-bold ">Populary</h2>
            <h2 className="text-left text-4xl text-indigo-900 mb-8 mt-2 font-bold ">Most Popular Holiday Destinations</h2>
       <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
       {
            tours.map(tour =><Tour 
                key ={tour._id}
                tour={tour}
            ></Tour>)
        }
       </div>
    </div>
    );
};

export default Tours;