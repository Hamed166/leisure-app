import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {

    const {user, logOut}= useAuth();

    return (
        <div className="bg-white fixed  w-full top-0 shadow-lg ">
            <div className="container mx-auto px-12">
                <div className="w-full flex mx-auto justify-between p-2 ">
                    <div className="brand-logo font-bold text-4xl flex">
                        <h2 className="text-indigo-900"><span className="text-red-400 ">T</span>ravellers</h2>
                    </div>
                
                    <ul className="nav-list flex flex-row mx-4 text-base">
                        <li className="nav-list-item text-blue-400 p-4 mx-2 uppercase"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/tours">Tours</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/destinations">Destinations</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/blog">Blog</NavLink></li>
                        <li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/booking">Booking</NavLink></li>
                        {user?.email? <button className="bg-blue-400 rounded text-sm px-4" onClick={logOut}>logout</button>:<li className="nav-list-item text-red-400 font-bold p-4 mx-4 "><NavLink to="/login">Login</NavLink></li>}
                        <li className="nav-list-item text-indigo-900 p-4 "><NavLink to="/login">{user?.displayName}</NavLink></li> 
  
        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;