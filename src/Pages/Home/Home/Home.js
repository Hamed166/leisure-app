import React from 'react';
import Blog from '../Blog/Blog';
import Tours from '../Tours/Tours';
import Banner from './Banner/Banner';
import Destinations from './Destinations/Destinations';

const Home = () => {
    return (
        <div>
            <h2 className="text-red-400">This is Home</h2>
            <Banner></Banner>
            <Tours></Tours>
            <Destinations></Destinations>
            <Blog></Blog>
        </div>
    );
};

export default Home;