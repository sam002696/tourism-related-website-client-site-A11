import React, { useEffect, useState } from 'react';
import './ManageAllBookings.css'

const ManageAllBookings = () => {
    const [allBookings, setAllBookings] = useState([]);
    useEffect(() => {
        fetch('https://lit-dawn-59033.herokuapp.com/submitbookings')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAllBookings(data);
            });
    }, [])

    const handleCancelBooking = (id) => {
        const proceed = window.confirm("You sure you want to cancel booking?")

        console.log(id);
        if (proceed) {
            fetch(`https://lit-dawn-59033.herokuapp.com/submitbookings/${id}`, {
                method: 'DELETE',
                headers: {
                    "content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = allBookings.filter(booking => booking._id !== id)
                        setAllBookings(remainingUsers);
                    }
                })
        }

    }

    const handleBookingUpdate = (id) => {
        fetch(`https://lit-dawn-59033.herokuapp.com/submitbookings/${id}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Booking Status Changed');
                    window.location.reload(false);
                }
            });
    }

    return (
        <div>
            <div>
                {/* <!-- component --> */}
                <div className="bg-gray-200 m-12 mx-auto p-28 rounded-3xl text-gray-900 w-10/12">

                    <div className="wrapper sm:px-0 sm:py-0 px-3 py-4 flex justify-center">
                        <table className="w-full text-md bg-white shadow-md rounded mb-4">
                            <tbody>
                                <tr className="border-b">
                                    <th className="text-left p-3 px-5">Name</th>
                                    <th className="text-left p-3 px-5">Email</th>
                                    <th className="text-left p-3 px-5">Booking Place</th>
                                    <th className="text-left p-3 px-5">Phone No</th>
                                    <th className="text-left p-3 px-5">Status</th>
                                    <th className="text-left p-3 px-5">Delete</th>

                                </tr>
                                {allBookings.map(allBooking =>
                                (<tr className="border-b hover:bg-orange-100 bg-gray-100">
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.name} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.email} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.bookingDetails} className="bg-transparent" /></td>
                                    <td className="p-3 px-5"><input type="text" value={allBooking?.phone} className="bg-transparent" /></td>

                                    <td className="p-3 px-5 flex justify-end"><button onClick={() => handleBookingUpdate(allBooking?._id)} type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{allBooking?.status}</button></td>
                                    <td className='p-3'><button onClick={() => handleCancelBooking(allBooking?._id)} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button></td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageAllBookings;