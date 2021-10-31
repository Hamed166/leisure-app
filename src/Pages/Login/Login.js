import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from '../Hooks/useAuth';

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const url = location?.state?.from || '/home'
    const {signInUsingGoogle, setUser, setIsLoading}= useAuth();
const googleSignIn =()=>{
        signInUsingGoogle()
        .then(result=>{
            setIsLoading(true);
            setUser(result.user)
            history.push(url)
        })
        .catch(error=>{
            
        })
        .finally(()=>{setIsLoading(false)})
}
    return (
        <div>
            <div className="mt-24 ">
                <div className=" bg-cover mix-blend-multiply bg-amber-300 ">
                    <img className="w-full" src="../../3.png" alt=""/>
                </div>
                <div className="relative right-10 -top-40 left-0 bottom-0">
                    <h2 className=" text-center text-5xl text-white font-bold">Contact</h2>
                </div>
            </div>
            <div className="container mx-auto mx-2 mt-12">
            
                <div className="flex my-16  p-4 rounded-md">
                
                    <div className="flex-1 h-20 w-72 mt-16">
                        <span className="uppercase  font-bold text-sm text-gray-600">Get In Touch---</span>
                        <h3 className="text-4xl uppercase font-black text-blue-500  my-4">Write Us a Message</h3>
                        <p className="my-8 text-gray-600 text-sm text-justify">Being in control of your life and having realistic expectations about your day-to-day challenges are the keys to stress management</p>
                        
                    </div>
                    <form  className="flex-1 bg-gray-50 mt-5 mx-8">
                        <h2 className="text-blue-600 font-bold text-2xl mt-2">Please Login</h2>
                        <div className="p-8">
                                <div className="grid grid-cols-2 gap-8 ">
                                <div>
                                    <div>
                                        <input  type="text" placeholder="First Name"className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input type="text" placeholder="Last Name" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input type="email" placeholder="Email" className=" w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input type="password" placeholder="Password" className="w-full border-solid border-2 border-light-blue-900 outline-none p-4 rounded-md" required/>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                    <input  type="checkbox"  className="w-full h-8  p-8 rounded-md" required/>
                                    <label className="text-lg text-thin text-blue-400">Already Registered!</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="text-lg text-red-500 mb-4"></div>
                            <button  type="submit" name="submit" className=" bg-yellow-400 hover:bg-green-400 bg-yellow-400 py-4 px-8 rounded-md">Login</button>
                        </div>
                        <br/>
                        <div>
                            <button onClick={googleSignIn}  className="bg-blue-400 rounded p-2 mt-2">Sign in with Google</button>
                        </div>
                    </form>
                </div>
         </div>
    </div>
    );
};

export default Login;