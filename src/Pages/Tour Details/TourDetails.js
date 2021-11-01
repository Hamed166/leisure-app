import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';
import { useForm } from "react-hook-form";


const TourDetails = () => {
    const history = useHistory()
    const { register, handleSubmit, reset } = useForm();
    const {tourId}= useParams();
    const [tourInfo, setTourInfo]= useState([]);
    const {user}= useAuth();



    useEffect(()=>{
        fetch(`https://calm-journey-29870.herokuapp.com/tours/${tourId}`)
        .then(res =>res.json())
        .then(data=> setTourInfo(data))

    },[]);

    const onSubmit = data =>{
        data.tourInfo= tourInfo;
       fetch(`https://calm-journey-29870.herokuapp.com/myBooking`,{
           method:'POST',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(data)
       })
       .then(res=>res.json())
       .then(data=>{
            history.push('/mybooking')
       })
    }

    
   
    // const detail = tourInfo.find((x)=>x.index === tourId)
        return (
            <div  className="container mx-auto px-20  mb-8  mt-24 ">
                <div className="mb-8">
                <h2 className="text-center text-xl text-yellow-500 font-bold ">Book Now</h2>
                <h2 className="text-center text-4xl text-indigo-900 mb-4 mt-4 font-bold">Book Your Destination</h2>
                </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <h2 className="text-xl text-indigo-400 mb-2">Your Destination {tourId}</h2>
                        <div className="border shadow">
                            <img src={tourInfo?.img} alt=""/>
                            <h2  className=" text-4xl mt-2 text-indigo-900 font-bold">{tourInfo?.name}</h2>
                            <p>{tourInfo?.description}</p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <form className=" grid grid-col-1 px-8 shadow p-4" onSubmit={handleSubmit(onSubmit)}>


                            <input className="mt-4 border p-2" defaultValue={user.email} {...register("email", { required: true, maxLength: 40 })} />
                            <input className="mt-4 border p-2" type="number" {...register("price")} placeholder="Phone Number" />
                            <input className="mt-4 border p-2" type="text" {...register("Address")} placeholder="Address" />
                            <input  className="mt-4 border p-2" type="submit" value="Place Booking"/>
                        </form>
                    </div>
        
                </div>
            </div>
    );
};

export default TourDetails;