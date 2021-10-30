import React, { useEffect, useState } from 'react';
import MyBookingStyle from './MyBookingStyle';

const MyBookings = () => {
    const [myBookings, setMyBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyBookings(data);
            });
    }, [])
    return (
        <div>

            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    myBookings.map(myBooking => <MyBookingStyle setMyBookings={setMyBookings} myBookings={myBookings} myBooking={myBooking} key={myBooking._id}></MyBookingStyle>)
                }
            </div>
        </div>
    );
};

export default MyBookings;