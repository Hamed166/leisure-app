import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <div className="bg-white fixed  w-full top-0 shadow-lg ">
            <div className="container mx-auto px-12">
                <div className="w-full flex mx-auto justify-between p-2 ">
                    <div className="brand-logo font-bold text-4xl flex">
                        <h2 className="text-indigo-900"><span className="text-blue-400">Travellers</span></h2>
                    </div>
                
                    <ul className="nav-list flex flex-row mx-4 text-base">
                        <li className="nav-list-item text-blue-400 p-4 mx-4 uppercase"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/doctors">Tours</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/about">Destinations</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/blog">Blog</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/services">Pages</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-4 uppercase"><NavLink to="/contact">Contact</NavLink></li>
        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;