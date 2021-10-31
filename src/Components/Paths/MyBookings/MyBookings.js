import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import MyBookingStyle from './MyBookingStyle';

const MyBookings = () => {
    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch('https://lit-dawn-59033.herokuapp.com/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBookings(data);
            });
    }, [])
    return (
        <div className="w-full h-full bg-cover bg-no-repeat bg-left bg-fixed" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1531685250784-7569952593d2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFja2dyb3VuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,

        }}>
            <div className='font-serif mt-24 text-5xl text-center'>
                {
                    user.email ?
                        <div className='border-b-4 border-black lg:mx-auto sm:mx-auto sm:p-1.5 sm:w-2/3 lg:w-1/3'>
                            <h1>Welcome, <span className='text-purple-500'>{user.displayName}</span> </h1>
                        </div> :
                        <div>
                            <h1 className='sm:p-1.5'>Please Order from our Packages</h1>
                        </div>
                }
            </div>
            <div>
                {
                    myBookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-1 lg:mx-80 p-36 sm:p-20">
                            {
                                myBookings.map(myBooking => <MyBookingStyle setMyBookings={setMyBookings} myBookings={myBookings} myBooking={myBooking} key={myBooking._id}></MyBookingStyle>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default MyBookings;