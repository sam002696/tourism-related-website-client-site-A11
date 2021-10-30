import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewBooking.css'

const AddNewBooking = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/bookings", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Package Successfully Added");
                }
                console.log(result)
            });
        console.log(data);
    }
    return (
        <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1499678329028-101435549a4e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80 ")`,
            // backgroundPosition: 'center',

            // backgroundSize: 'cover',

            // backgroundRepeat: 'no-repeat'
        }}>
            <div>
                <h1 className='font-serif pt-10 text-3xl text-center text-white underline'>Add New Tour Package</h1>
            </div>
            <div className='lg:m-10 lg:mx-auto sm:w-auto lg:w-3/5'>
                <form className="flex flex-col mx-20 py-10 space-y-5 opacity-70" onSubmit={handleSubmit(onSubmit)}>


                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Booking Place Name" defaultValue="" {...register("booking_name")} />
                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Description" defaultValue="" {...register("description")} />
                    <textarea className='border-2 p-3 rounded outline-none font-black text-2xl' rows='5' cols='45' placeholder="Details Description" defaultValue="" {...register("details_description")} />
                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Image URL" defaultValue="" {...register("img_url")} />
                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Per Person Cost" defaultValue="" {...register("per_person_cost")} />
                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Package Duration" defaultValue="" {...register("duration")} />
                    <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Package Rating" defaultValue="" {...register("rating")} />

                    <input className='border-2 hover:bg-green-400 hover:text-white p-3 ring-2 ring-gray-300 rounded text-gray-500 text-2xl font-black' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddNewBooking;