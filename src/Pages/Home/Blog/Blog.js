import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className="container mx-auto px-20 mt-24 mb-8">
            <h2 className="text-center text-4xl text-blue-400 p-10 font-thin uppercase"><span className="text-gray-900">Latest *</span>News</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div className=" bg-gray-50 ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/woman-doing-eye-test-with-optometrist-in-eye-sight-2SKW9E6.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">Doctor Driven Wellness And The Care Management</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/medical-students-in-laboratory-97XUZVM.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">Healing Experiences For Everyone, All The Time</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/group-of-doctors-looking-at-x-ray-on-medical-confe-RDWUH4S.jpg" alt=""/>
                    <div>
                        <h2 className=" text-2xl mb-2">Provide A Weekly Round Up Of Healthcare News</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/young-doctors-using-digital-tablet-discussing-diag-EH42CN6.jpg" alt=""/>
                    <div>
                        <h2 className="text-thin text-2xl mb-2">The Department Of Health And Human Services</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50 ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/thoughtful-radiologist-looking-at-animal-xray-in-v-78U726F.jpg" alt=""/>
                    <div>
                        <h2 className="text-thin text-2xl mb-2">Share Facts About A Common Medical Condition</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                <div className=" bg-gray-50  ">
                    <img className="w-full h-50 mb-2" src="https://kit-demos.envalab.com/mediku/wp-content/uploads/2021/07/medical-doctors-at-the-conference-LHXEEXN-2.jpg" alt=""/>
                    <div>
                        <h2 className="text-thin text-2xl mb-2">Providing An Exceptional Patient Experience</h2>
                        <p className="text-gray-600 mb-2">Achieving excellent health isn't a privilege</p>
                    </div>
                    <Link to="">
                        <button className="mb-4 text-white text-base  text-blue-400 hover:bg-green-400 hover:text-white border-4 hover:-translate-y-1 hover:scale-110  py-2 px-4 rounded-md">View More</button>
                    </Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Blog;