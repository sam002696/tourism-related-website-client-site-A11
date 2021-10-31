import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const HomeBooking = (props) => {
    const { booking_name, img_url, description, _id } = props.booking;
    return (
        <Fade top cascade>
            <div className=" ring-4 ring-gray-300 rounded-xl shadow-xl">

                <img className="rounded-t-xl  w-full  object-cover " src={img_url} alt="" ></img>

                <div className="flex flex-col p-7 lg:space-y-5">
                    <div className="flex flex-row">
                        <div className="  bg-yellow-100 font-black hover:line-clamp-none line-clamp-1 p-1 px-2 rounded-2xl text-2xl text-gray-700 uppercase">
                            {booking_name}
                        </div>
                    </div>
                    <div>

                        <p className="font-medium hover:line-clamp-none line-clamp-2 mt-1 text-2xl text-gray-60">
                            {description} </p>

                    </div>
                    <div>
                        <Link to={`/bookingDetail/${_id}`}>
                            <button className="bg-white border border-gray-400 duration-500 ease-in-out font-sans font-semibold hover:-translate-y-1 hover:bg-green-500 hover:scale-110 hover:text-white mt-4 px-4 py-2 rounded shadow text-2xl text-gray-800 transform transition w-2/3 ">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </Fade>

    );
};

export default HomeBooking;