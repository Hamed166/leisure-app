import React from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
    return (
        <div className="container mx-auto px-20 mt-24 mb-8">
            <h2 className="text-left text-xl text-yellow-500 font-bold ">True Now</h2>
            <h2 className="text-left text-4xl text-indigo-900 mb-8 mt-2 font-bold "><span className="text-indigo-900">Popular </span>Destinations</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
                <div className=" bg-gray-50 ">
                    <img className="w-full h-50 mb-2" src="https://cdn.pixabay.com/photo/2020/02/23/12/22/river-4873198__340.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">Egypt</h2>
                        <p className="text-gray-600 mb-2">Old historical and religious places</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://cdn.pixabay.com/photo/2014/02/17/10/20/statue-of-liberty-267948__340.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">America</h2>
                        <p className="text-gray-600 mb-2">Beautiful places to visit and staying there for 15 days</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://cdn.pixabay.com/photo/2016/07/30/08/13/moscow-1556561__340.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">Russia</h2>
                        <p className="text-gray-600 mb-2">Beautiful places to visit and staying there for 15 days</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://cdn.pixabay.com/photo/2020/11/09/22/20/tower-bridge-5727975__340.jpg" alt=""/>
                    <div>
                        <h2 className="text-thin text-2xl mb-2">England</h2>
                        <p className="text-gray-600 mb-2">Beautiful places to visit and staying there for 15 days</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Destinations;