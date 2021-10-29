import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PrivateRoute.css'

const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    console.log(user);
    if(isLoading){
        return <div className="min-h-screen flex justify-center items-center bg-black">
                    <div className="loader bg-white p-5 rounded-full flex space-x-3">
                        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                        <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce"></div>
                    </div>
                </div>
    }
    return (
        <Route
        {...rest}

        render={({location}) => user.email ? children : <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
        >
        </Redirect> 
    }
        >
        </Route>
    );
};

export default PrivateRoute;