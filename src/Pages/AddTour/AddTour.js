import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/tours', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('New Destination Added Successfully')
                reset();
            }
        })
    } 
        
    return (
        <div className="mt-24 grid grid-cols-2">
            <div>
                <h2>Add a New Destination</h2>
            </div>
           <div>
           <form className=" grid grid-col-1 px-8 shadow p-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="mt-4 border p-2" {...register("name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <input className="mt-4 border p-2" {...register("description")} placeholder="Description"/>
                <input className="mt-4 border p-2" type="number" {...register("price")} placeholder="Price" />
                <input className="mt-4 border p-2" {...register("img")} placeholder="Image"/>
                <input className="mt-4 border p-2" type="submit" />
            </form>
           </div>
        </div>
    );
};

export default AddTour;