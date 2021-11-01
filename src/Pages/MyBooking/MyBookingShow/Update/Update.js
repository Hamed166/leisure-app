import React, { useEffect, useReducer, useState } from 'react';
import { set } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './Update.css';

const Update = () => {
    const history = useHistory()
    const {id} = useParams();
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(`https://calm-journey-29870.herokuapp.com/myBookinged/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
        })
    },[])
    // ===========
    const hendelEmail = e=>{
        const newEmail = e.target.value;
        const updateEmail = {email:newEmail,address:data.Address,price:data.price}
        setData(updateEmail)
    }
    const hendelAddress = e=>{
        const newAddress = e.target.value;
        const updateAddress = {email:data.email,Address:newAddress,price:data.price}
        setData(updateAddress)
    }
    const hendelNumber = e=>{
        const newPrice = e.target.value;
        const updatePrice = {email:data.email,Address:data.Address, price:newPrice}
        setData(updatePrice)
    }
    // ==========
    console.log(data,'mydata')
    const hendelsubmit =(e)=>{
        e.preventDefault()
        console.log(data)
        fetch(`https://calm-journey-29870.herokuapp.com/myBookinged/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount>0){
                alert('successfully Update')
                history.push('/mybooking')
            }
        })

    }
    return (
        <div className="update">
            <div className="update-card">
                <form onSubmit ={hendelsubmit}>
                    <input type="text" onChange={hendelEmail} value={data.email}/>
                    <input type="text" onChange={hendelAddress} value={data.Address}/>
                    <input type="text" onChange={hendelNumber} value={data.price}/>
                    <input type="submit" value="Update"/>
                </form>
            </div>
        </div>
    );
};

export default Update;