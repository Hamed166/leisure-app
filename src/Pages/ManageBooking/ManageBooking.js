import React, { useEffect, useState } from 'react';
import './ManageBooking.css'

const ManageBooking = () => {
    const [user,setUser] = useState([])
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        fetch('https://calm-journey-29870.herokuapp.com/manage')
        .then(res=>res.json())
        .then(data=>{
            setUser(data)
        })
    },[load])
    const hendeldelete=id =>{
        fetch(`https://calm-journey-29870.herokuapp.com/manage/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('successfully delete')
                setLoad(true)
            }
        })
    }
    console.log(user,'this is user')
    return (
        <div className="managebooking">
            <h2>All Oder {user.length}</h2>
            <div>
               {
                  user.map(users=><div className="manageOder">
                      <p>Email: {users.email}</p>
                      <p>Address: {users.Address}</p>
                      <p>Price: $ {users.price}</p>
                      <p>PlaceName: {users.tourInfo.name}</p>
                      <button onClick={()=>hendeldelete(users._id)}>delete</button>
                      </div>)
               }
            </div>
        </div>
    );
};

export default ManageBooking;