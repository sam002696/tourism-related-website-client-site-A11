import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBooking from './HomeBooking';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';

const Home = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        fetch('https://lit-dawn-59033.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data));
    }, [])
    return (
        <div>
            <div className='bg-gray-100 lg:flex lg:flex-row justify-evenly m-12 p-10 rounded-3xl sm:flex-col-reverse sm:flex sm:m-5'>

                <div className='flex-col self-center sm:pt-1.5 sm:w-11/12 w-1/3'>
                    <Fade left>
                        <h1 className='font-bold text-5xl'>Your <span className=' text-blue-600'>Hotel </span>, <span className='text-red-600'>Car</span> & <span className='text-green-600'>Experiences</span></h1>
                    </Fade>


                    <p className='mt-10 text-2xl font-serif'>Accompanying us, you have a trip full of experiences. With Chisfis, booking accommodation, resort villas, hotels.</p>

                    <Link to='/about'> <button className=" bg-gradient-to-r from-green-400 to-blue-500 transition delay-150 duration-300 ease-in-out bg-white  border border-gray-400 font-semibold hover:bg-green-500 hover:text-white mt-16  px-4 py-2 rounded shadow text-gray-800 w-2/3 text-2xl ">
                        About Us
                    </button>
                    </Link>
                </div>


                <div>
                    <img src='https://chisnghiax.com/chisfis/static/media/our-features.d6902772.png' alt="study" />
                </div>

            </div>
            {/* Bookings */}

            <div>
                <Slide left>
                    <h1 className='font-bold p-10 text-5xl text-center'>Choose Your <span className='text-indigo-500'>Package</span> </h1>
                </Slide>

            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">Select Your Best Package For Your Travel</h1>
            </div>

            <div>
                {
                    bookings.length === 0 ?
                        <div className="flex items-center justify-center space-x-2 animate-bounce mt-28">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-green-400 rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div> :
                        <div className="gap-8 grid lg:grid-cols-3 lg:p-36  sm:p-10">
                            {
                                bookings.map(booking => <HomeBooking booking={booking} key={booking._id}></HomeBooking>)
                            }
                        </div>
                }
            </div>


            {/* How it work */}
            <div>
                <Slide right>
                    <h1 className='font-bold p-10 text-5xl text-center'>How It  <span className='text-red-600'>Work</span></h1>
                </Slide>

            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">Keep calm and travel on</h1>
            </div>

            <div className='lg:flex lg:flex-row lg:items-baseline lg:items-center lg:p-24 sm:flex sm:flex-col sm:p-12 sm:space-x-0.5 sm:space-y-10 lg:space-x-20'>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW1.bbef046f.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold text-2xl'>Book & relax</h1>
                        <p className='font-thin text-2xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW2.f6857768.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold text-2xl'>Smart checklist</h1>
                        <p className='font-thin text-2xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
                <div className='text-center'>
                    <div>
                        <img className='mx-auto w-2/3' src="https://chisnghiax.com/chisfis/static/media/HIW3.b650d652.png" alt="" />
                    </div>
                    <div className='mt-10'>
                        <h1 className='font-bold text-2xl'>Save more</h1>
                        <p className='font-thin text-2xl' >Let each trip be an inspirational journey, each room a peaceful space</p>
                    </div>
                </div>
            </div>

            {/* Suggestions For Discovery */}

            <div>
                <Bounce top>
                    <h1 className='font-bold p-10 text-5xl text-center'>Suggestions For <span className='text-blue-400'>Discovery</span></h1>
                </Bounce>

            </div>
            <div>
                <h1 className="mx-auto sm:text-2xl text-3xl text-center w-2/3 font-serif">Popular places to stay that Chisfis recommends for you</h1>
            </div>
            <div className='gap-11 lg:grid lg:grid-cols-3 p-16 sm:grid sm:grid-cols-1'>
                <Fade top cascade>
                    <div className='text-center col-span-1'>
                        <div>
                            <img className='rounded-2xl' src="https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" />
                        </div>
                        <div className='mt-10'>
                            <h1 className='font-bold text-2xl'>Book & relax</h1>
                            <p className='font-thin text-2xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                    </div>
                    <div className='text-center col-span-1'>
                        <div>
                            <img className='rounded-2xl' src="https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                        </div>
                        <div className='mt-10'>
                            <h1 className='font-bold text-2xl'>Smart checklist</h1>
                            <p className='font-thin text-2xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                    </div>
                    <div className='text-center col-span-1'>
                        <div>
                            <img className='rounded-2xl' src="https://images.unsplash.com/photo-1544376798-89aa6b82c6cd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVydGljYWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        </div>
                        <div className='mt-10'>
                            <h1 className='font-bold text-2xl'>Save more</h1>
                            <p className='font-thin text-2xl'>Let each trip be an inspirational journey, each room a peaceful space</p>
                        </div>
                    </div>
                </Fade>

            </div>
            {/* Join Our Newsletter */}
            <div className='bg-gray-100 lg:flex lg:flex-row justify-evenly m-12 p-10 rounded-3xl sm:flex-col-reverse sm:flex'>

                <div className='flex flex-col self-center sm:pt-5  lg:text-left sm:w-11/12 w-1/3'>
                    <h1 className='font-bold text-5xl'>Join Our <span className='hover:text-green-600 text-indigo-600'>Newsletter</span></h1>
                    <p className='mt-10 text-2xl'>Read and share new perspectives on just about any topic. Everyone’s welcome.</p>
                    <p className='mt-10 text-2xl font-light'> <span className='border-2 border-blue-200 p-1.5 rounded-2xl'>01</span> Get more discount</p>
                    <p className='mt-10 text-2xl font-light'><span className='border-2 border-blue-200 p-1.5 rounded-2xl'>02</span> Get premium magazines</p>

                    <input type='text' className="bg-white border border-gray-400 font-semibold  hover:text-white mt-16  px-4 py-2 rounded-2xl shadow text-gray-800 w-2/3 outline-none hover:bg-green-300 ring-2 ring-gray-300 " placeholder='Enter Your Email' />



                </div>


                <div>
                    <img src='https://chisnghiax.com/chisfis/static/media/SVG-subcribe2.efb832b2.png' alt="study" />
                </div>

            </div>
        </div>
    );
};

export default Home;