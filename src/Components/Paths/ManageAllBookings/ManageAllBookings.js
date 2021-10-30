import React, { useEffect, useState } from 'react';
import ManageAllBookingStyle from './ManageAllBookingStyle';

const ManageAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBookings(data);
            });
    }, [])
    return (
        <div>
            <div className="gap-8 grid lg:grid-cols-3 p-36 sm:p-20">
                {
                    allBookings.map(allBooking => <ManageAllBookingStyle allBooking={allBooking} key={allBooking._id} allBookings={allBookings} setAllBookings={setAllBookings}></ManageAllBookingStyle>)
                }
            </div>
        </div>
    );
};

export default ManageAllBookings;