import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialize from "../Login/Firebase/Firebase.init";


firebaseInitialize();

const useFirebase = () =>{
    const [user, setUser]= useState({});
    const [isLoading, setIsLoading]= useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle=()=>{
        
        
      return  signInWithPopup(auth, googleProvider)
            
  
  
    }
    
//observe user's state change.............

    useEffect(()=>{
      const unsubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user);
            }else{
                setUser({})
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    },[])

    const logOut = ()=>{
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(()=> setIsLoading(false));
    }

    return{
        user,
        isLoading,
        setIsLoading,
        setUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;