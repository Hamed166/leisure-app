import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';

const Tours = () => {
    const [tours, setTours] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/tours')
        .then(res=> res.json())
        .then(data => setTours(data))
    },[])
    return (
        <div className="md:container md:mx-auto mx-auto px-20 mt-24 mb-12">
        <h2 className="text-center text-4xl text-gray-600 p-10 font-thin uppercase">Most Popular <span className="text-blue-400">Tour Destination</span></h2>
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