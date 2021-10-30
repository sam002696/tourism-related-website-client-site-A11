import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './BookingDetails.css'
const BookingDetails = () => {
    const { user } = useAuth();
    const { bookingID } = useParams();
    const [bookingDetails, setBookingDetails] = useState([]);


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        data.status = 'pending';
        data.bookingDetails = `${bookingDetails.booking_name}`;
        data.image = `${bookingDetails.img_url}`;
        // data.email = `${user.email}`;
        fetch("http://localhost:5000/submitBooking", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.insertedId) {
                    alert("Confirmed Booking")
                }
                console.log(result)
            });
        console.log(data);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/bookingDetail/${bookingID}`)
            .then(res => res.json())
            .then(data => setBookingDetails(data));
    }, []);

    return (
        <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{
            backgroundImage: `url(${bookingDetails?.img_url})`,
            // backgroundPosition: 'center',

            // backgroundSize: 'cover',

            // backgroundRepeat: 'no-repeat'
        }}>
            <div className='lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1'>
                <div className='col-span-2'>


                    {bookingDetails.length === 0 ? <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                        <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div> :

                        <div className='lg:p-36 sm:p-10 space-y-10 text-center'>
                            <div>
                                <img className='mx-auto rounded-2xl' src={bookingDetails?.img_url} alt="" />
                            </div>
                            <div>
                                <h1 className='sm:w-max border-b-2 font-semibold mx-auto pb-5 text-3xl w-1/3 border-blue-400 text-white'> {bookingDetails?.booking_name}</h1>
                                <h2 className='mx-auto sm:font-semibold sm:pt-5 sm:text-2xl sm:text-justify sm:w-5/6 text-3xl w-1/2 text-white'> {bookingDetails?.details_description}</h2>
                            </div>
                        </div>


                    }


                </div>
                <div className='col-span-1 lg:mt-72 sm:mt-10 sm:mx-auto'>
                    <h2 className='font-black italic text-3xl underline text-white sm:text-center'>Confirm Your Booking</h2>
                    <form className="booking-form flex flex-col  py-10 space-y-5" onSubmit={handleSubmit(onSubmit)}>

                        <input className='outline-none border-2 rounded p-3 font-black text-2xl' defaultValue={user.displayName} {...register("name")} />

                        <input className='outline-none border-2 rounded p-3 font-black text-2xl' defaultValue={user.email} {...register("email", { required: true })} />
                        {/* {errors.email && <span className="error">This field is required</span>} */}
                        <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="Address" defaultValue="" {...register("address")} />
                        <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="City" defaultValue="" {...register("city")} />
                        <input className='outline-none border-2 rounded p-3 font-black text-2xl' placeholder="phone number" defaultValue="" {...register("phone")} />

                        <input className='border-2 hover:bg-green-400 hover:text-white p-3 ring-2 ring-gray-300 rounded text-gray-500 text-2xl font-black' type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingDetails;