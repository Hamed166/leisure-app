import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Images/404-error-page-.jpg'

const PageNotFound = () => {
    return (
        <div>
             <img src={img} className="w-full" alt=""/>
             <Link className="bg-yellow-400 rounded p-2" to="/home"><button>Home</button></Link>
        </div>
    );
};

export default PageNotFound;