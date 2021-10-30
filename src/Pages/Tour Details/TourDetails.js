import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const TourDetails = () => {
    const {tourId}= useParams()
    const [tourInfo, setTourInfo]= useState([]);
    const {user}= useAuth();



    useEffect(()=>{
        fetch('/ToursData.json')
        .then(res =>res.json())
        .then(data=> setTourInfo(data))

    },[])
   
    const detail = tourInfo.find((x)=>x.index == tourId)
        return (
            <div  className="container mx-auto px-20 mt-24 ">
                <div className="justify-center mb-8">
                    <div className="flex justify-center text-xl text-indigo-900  mb-4">
                        <NavLink to="/login">Welcome <span className="text-2xl text-indigo-900 font-bold">{user?.displayName} </span></NavLink>
                        <NavLink to="/login"><img src={user?.photoURL} alt=""/></NavLink>
                    </div>
                    <div className="mx-8 text-lg text-blue-400">
                        <NavLink to="/login">Email:: {user?.email}</NavLink>
                    </div>
                </div>
                  <div className="grid grid-cols-2  gap-4">
                    <div>
                        <h2 className="text-5xl text-red-400">Your Destination {tourId}</h2>
                        <div className="">
                            <img src={detail?.picture} alt=""/>
                            <h2  className=" text-4xl font-bold">{detail?.name}</h2>
                            <p>{detail?.description}</p>
                        </div>
                    </div>
                    <div>
                        <form  className="flex-1 bg-gray-100 mt-5 mx-8">
                            <h2 className="text-indigo-800 font-bold text-2xl p-4">Place Your Booking</h2>
                            <div className="p-8">
                                    <div className="grid grid-cols-2 gap-8 ">
                                    <div>
                                        <div>
                                            <input  type="text" placeholder=" Name"className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <input type="number" placeholder="Phone" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <input  type="text" placeholder="Type of service" className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <input type="text" placeholder="Staff" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                        <input type="date" placeholder="Date" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                        </div>
                                    </div>
                                    <button className="bg-blue-400 text-white rounded p-2 mt-2">Check Availability</button>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="mt-2 flex gap-12">
                                <div>
                                    <input type="checkbox"  className="w-full h-8  p-8 rounded-md" required/>
                                    <label className="text-lg text-thin text-blue-400">Alreadey Registered!</label>
                                </div>

                                <button  type="submit" name="submit" className=" bg-yellow-400 hover:bg-green-400 bg-yellow-400  px-8 rounded-md">Login</button>
                            </div>
                            <br/>
                            <div>
                                <button className="bg-blue-400 rounded p-2 mt-2 mb-4">Sign in with Google</button>
                            </div>
                        </form>
                    </div>
        
                </div>
            </div>
    );
};

export default TourDetails;