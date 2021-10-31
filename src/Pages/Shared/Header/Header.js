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
                        <li className="nav-list-item text-blue-400 p-4  uppercase"><NavLink to="/home">Home</NavLink></li>
                        <li className="nav-list-item text-gray-900 p-4  uppercase"><NavLink to="/tours">Tours</NavLink></li>
                       { user?.email?<li className="nav-list-item text-gray-900 p-4 uppercase"><NavLink to="/addTour">Manage Booking</NavLink></li>:<li className="nav-list-item text-gray-900 p-4  uppercase"><NavLink to="/destinations">Destinations</NavLink></li>}
                        { user?.email?<li className="nav-list-item text-gray-900 p-4  uppercase"><NavLink to="/mybooking">My Booking</NavLink></li>:<li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/booking">Booking</NavLink></li>} 
                        { user?.email?<li className="nav-list-item text-gray-900 p-4 uppercase"><NavLink to="/addTour">Add Tour</NavLink></li>:<li className="nav-list-item text-indigo-900 p-4 mx-2 uppercase"><NavLink to="/blog">Blog</NavLink></li>} 
                        {user?.email? <button className="bg-gradient-to-r from-green-400 to-blue-400 hover:from-blue-400 hover:to-green-400 text-white font-bold rounded text-base px-4" onClick={logOut}>Logout</button>:<li className="nav-list-item text-red-400 font-bold p-4 mx-4 "><NavLink to="/login">Login</NavLink></li>}
                        <li className="nav-list-item text-red-400 p-4 "><NavLink to="/login">{user?.displayName}</NavLink></li>
                        <li className="nav-list-item w-10 h-10 rounded-full "><NavLink to="/login"><img src={user?.photoURL} alt=""/></NavLink></li>
                        

                        

                       
  
        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;