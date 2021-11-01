import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLightbulb, faPhone, faUserNurse } from '@fortawesome/free-solid-svg-icons';

const Banner = () => {
    return (
        <div className="bg-gray-50">
            
            <div className="">
            
                    <div className=" container mx-auto bg-gray-500 w-full mt-16 p-4 relative overflow-hidden ">
                        <img className="object-cover w-full h-auto" src="https://cdn.pixabay.com/photo/2020/10/01/02/49/sunset-5617413_960_720.jpg" alt="bg-img"/>
                        <div className=" w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-lg p-4">
                            <h2 className="text-4xl text-white font-bold">This is about page</h2>
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