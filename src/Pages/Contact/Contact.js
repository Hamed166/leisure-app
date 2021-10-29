import React from 'react';
import { faAddressCard, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Contact = () => {
    return (
        <div>
            <div className="mt-40">
                <div className=" ">
                <h2 className=" text-center text-5xl text-blue-900 font-thin">Stay Connect With Us</h2>
                </div>
            </div>
            
            <div className="container mx-auto mx-2 mt-16 px-12">
                <div className="grid grid-cols-3 gap-8 overflow-hidden ">
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 rounded-full text-2xl h-20 w-20 p-5 "><FontAwesomeIcon icon={faPhone} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Phone</h3>
                            <p>0187778899</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faEnvelope} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Email</h3>
                            <p>react-hero@.com</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-200 p-4 rounded-md">
                        <div className="mx-2">
                            <h4 className="bg-blue-400 text-2xl rounded-full h-20 w-20 p-5 "><FontAwesomeIcon icon={faAddressCard} /></h4>
                        </div>
                        <div className="p-4">
                            <h3 className="font-bold text-lg text-indigo-900">Our Address</h3>
                            <p>2 St, Chittagong</p>
                        </div>
                    </div>
                </div>
                <div className="flex my-16 bg-yellow-50  p-4 rounded-md">
            
                <div className="flex-1 h-20  w-72 mt-24">
                    <span className="uppercase  font-bold text-sm text-gray-600">Get In Touch---</span>
                    <h3 className="text-4xl uppercasr font-black text-blue-600  my-4">Write Us a Message</h3>
                    <p className="my-8 text-gray-600 text-xl text-justify">Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management</p>
                    
                </div>
                <form  className="flex-1 bg-gray-100 mt-5 mx-8">
                    <h2 className="text-blue-600 font-bold text-2xl mt-2">Fix an Appoinment</h2>
                    <div className="p-8">
                            <div className="grid grid-cols-2 gap-8 ">
                            <div>
                                <div>
                                    <input  type="text" placeholder="Fisrt Name"className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                </div>
                            </div>
                            <div>
                                <div>
                                <input type="number" placeholder="Phone" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                </div>
                            </div>
                            <div>
                                <div>
                                <input  type="text" placeholder="Type of service" className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                </div>
                            </div>
                            <div>
                                <div>
                                <input type="text" placeholder="Staff" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                </div>
                            </div>
                            <div>
                                <div>
                                <input type="date" placeholder="Date" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                </div>
                            </div>
                            <button className="bg-blue-400 text-white rounded p-2 mt-2">Check Availability</button>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 flex gap-12">
                        <div>
                            <input type="checkbox"  className="w-full h-8  p-8 rounded-md" required/>
                            <label className="text-lg text-thin text-blue-400">Alreadey Registered!</label>
                        </div>

                        <button  type="submit" name="submit" className=" bg-yellow-400 hover:bg-green-400 bg-yellow-400  px-8 rounded-md">Login</button>
                    </div>
                    <br/>
                    <div>
                        <button className="bg-blue-400 rounded p-2 mt-2 mb-4">Sign in with Google</button>
                    </div>
                </form>
            </div>
     </div>
</div>
    );
};

export default Contact;