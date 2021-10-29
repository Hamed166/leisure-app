import React from 'react';
import { Link } from 'react-router-dom';

const Tour = ({tour}) => {
    const {index, name, picture, description}= tour;
    return (
        <div className=" bg-blue-100 ">
            <img className="w-full h-50 mb-2" src={picture} alt=""/>
            <div>
                <h2 className="text-thin text-2xl mb-2">{name}</h2>
                <p className="text-gray-600 mb-2">{description}</p>
            </div>
            <Link to={`/tourinfo/${index}`}>
                <button className="mb-4 text-white text-base bg-blue-400 hover:bg-green-400  hover:-translate-y-1 hover:scale-110 bg-yellow-400 py-2 px-4 rounded-md">Book {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Tour;