import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import './PrivateRoute.css'



const PrivateRoute = ({ children, ...rest }) => {
    const {user, isLoading} = useAuth();
    
    if(isLoading){
        return <div wireloading className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
                    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
                    <h2 className="text-center text-white text-xl font-bold">Loading</h2>
                    <p className="w-1/3 text-center text-white">This may take a few seconds, please don't close this page.</p>
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