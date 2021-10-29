import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLightbulb, faPhone, faUserNurse } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="bg-gray-50">
            <h2 className="bg-gray-50 text-center text-4xl text-blue-400  font-thin  uppercase">About Us</h2>
            <div className="">
            
                <div className="">
                
                    {/* <div className=" px-4 text-justify mr-16">
                        <span className=" font-bold text-xl text-gray-600">Welcome to Medicenter</span>
                        <h3 className="text-4xl text-justify text-thin my-4 mt-2"><span className="text-red-300 font-bold"> Medicare</span> holds the privilage of being Chittagong's first choice hospital to care your family</h3>
                       
                        <p className="my-4 text-gray-600 text-justify mt-2">Since its founding we become an integral part of the city, advancing our mission of providing access to compassionate care to our communities. Today patients find care that combines world-class medicine with compassion.</p>

                        <div className="mb-4 mt-2">
                        <button className="text-white text-base bg-blue-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-4 px-4 rounded-md">Fix an Appoinment</button>
                        <Link to="/services"><button className="text-white text-base my-2 mx-8 bg-yellow-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-blue-400 py-4 px-4 rounded-md">View Services</button></Link>
                        </div>
                    </div> */}
                    <div className=" mt-2 ">
                        <img className="w-full h-50 bg-cover bg-left bg-fixed" src="https://cdn.pixabay.com/photo/2020/10/01/02/49/sunset-5617413_960_720.jpg" alt=""/>
                    </div>
                </div>
            </div>

            
            <div className="container mx-auto px-20 mx-2 mt-40">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 overflow-hidden ">
                    <div className="flex bg-gray-200 p-4 rounded-md overflow-hidden">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 rounded-full text-2xl h-20 w-20 p-5 "><FontAwesomeIcon icon={faUserNurse} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Qualified Doctors</h3>
                            <p>0187778899</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faPhone} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">24 hours Service</h3>
                            <p>react-hero@.com</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faLightbulb} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Need Emergency</h3>
                            <p>2 St, Chittagong</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;