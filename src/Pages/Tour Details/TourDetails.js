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
        fetch(`http://localhost:5000/tours/${tourId}`)
        .then(res =>res.json())
        .then(data=> setTourInfo(data))

    },[]);

    const onSubmit = data =>{
        data.tourInfo= tourInfo;
       fetch(`http://localhost:5000/myBooking`,{
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
            <div  className="container mx-auto px-20 mt-24 ">
                
                  <div className="grid grid-cols-2  gap-4">
                    <div>
                        <h2 className="text-5xl text-red-400">Your Destination {tourId}</h2>
                        <div className="">
                            <img src={tourInfo?.img} alt=""/>
                            <h2  className=" text-4xl font-bold">{tourInfo?.name}</h2>
                            <p>{tourInfo?.description}</p>
                        </div>
                    </div>
                    <div>
                        <form className=" grid grid-col-1 px-8 shadow p-4" onSubmit={handleSubmit(onSubmit)}>


                            <input className="mt-4 border p-2" defaultValue={user.email} {...register("email", { required: true, maxLength: 40 })} />
                            <input className="mt-4 border p-2" type="number" {...register("price")} placeholder="Phone Number" />
                            <input className="mt-4 border p-2" type="text" {...register("Address")} placeholder="Address" />
                            <input  className="mt-4 border p-2" type="submit" />
                        </form>
                    </div>
        
                </div>
            </div>
    );
};

export default TourDetails;