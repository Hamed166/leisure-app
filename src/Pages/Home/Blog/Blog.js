import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
       <div className="bg-black">
            <div className="container mx-auto px-20 mt-24 mb-8 p-20">
            <h2 className="text-center text-xl text-yellow-400 font-bold ">Blog</h2>
            <h2 className="text-center text-4xl text-white mb-4 mt-4 font-bold uppercase">Travel Articles</h2>
            <p className="text-gray-600 text-center p-8 mb-2">A wonderful serenity has taken possession of my entire soul, like this sweet morning of the spring which i enjoy with my whole heart</p>
            
            <div className="grid lg:grid-cols-2  grid-cols-1 gap-8">
                <div className=" bg-gray-50 ">
                    <img className="w-full h-50 mb-2" src="https://lavella.hellodigi.ru/img/prevblog1.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2 mt-2">Pick wisely before travelling</h2>
                        <p className="text-gray-600 mb-2 p-4">A wonderful serenity has taken possession of my entire soul, like this sweet morning of the spring which i enjoy with my whole heart</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-yellow-400 hover:text-black border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://lavella.hellodigi.ru/img/prevblog2.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2 mt-2">Pick wisely before travelling</h2>
                        <p className="text-gray-600 mb-2 p-4">A wonderful serenity has taken possession of my entire soul, like this sweet morning of the spring which i enjoy with my whole heart</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-yellow-400 hover:text-black border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
            </div>
            
        </div>
       </div>
    );
};

export default Blog;