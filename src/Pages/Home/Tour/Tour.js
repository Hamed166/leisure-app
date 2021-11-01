import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({tour}) => {
    const {_id, name, img, description}= tour;
    return (
        <div className=" bg-blue-100 ">
            <img className="w-full h-40 mb-2" src={img} alt=""/>
            <div>
                <h2 className="text-thin text-2xl mb-2">{name}</h2>
                <p className="text-gray-600 p-2 mb-2">{description}</p>
            </div>
            <Link to={`/tourinfo/${_id}`}>
                <button className="mb-4 text-white text-base bg-yellow-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-2 px-4 rounded-md">Book Now</button>
            </Link>
        </div>
    );
};

export default Tour;