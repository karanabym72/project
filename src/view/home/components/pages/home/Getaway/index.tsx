import React from 'react'
import Image from 'next/image';

const Getaway = () => {
    return (
        <>

            <div className='pt-[20%] pb-[5%] md:py-[3%]'>
                <p className=' text-[#D1865F] text-center tracking-[.2rem] pb-2 mx-7'>YOUR GETAWAY, YOUR SAVINGS</p>
                <h3 className=' md:text-5xl text-center mx-5'>enhance your stay with our handpicked special offers</h3>

                <div className='w-[90%] md:w-[50%] m-auto pt-10 md:pt-14'>
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                        <div className='m-auto w-[95%]'>
                            <div className='relative '>
                                <div className=' w-[100%] md:w-[95%]'>
                                <img src="/images/getaway-post-1.png"  alt="" />
                                </div>
                                <div className='p-6 bg-white bg-opacity-90 absolute bottom-0 w-[80%] md:w-[70%] right-[0%] md:right-[5%]'>
                                    <p className=' text-[#BC502E] text-base tracking-[.1rem]'>OFFER</p>
                                    <p className=' text-semibold text-justify text-lg font-[Vogue] leading-6 text-[#000]'>get 10% off on your first-time booking with code - ADA10</p>
                                </div>
                            </div>

                        </div>
                        <div className='m-auto pt-7 md:pt-0 w-[95%]'>
                            <div className='relative'>
                                <div className=' w-[100%] md:w-[95%]'>
                                    <img src="/images/getaway-post-2.png"  alt="" />
                                </div>
                                <div className='p-6 bg-white bg-opacity-90 absolute bottom-0 w-[80%]  md:w-[70%] right-[0%] md:right-[5%]'>
                                    <p className=' text-[#BC502E] text-base tracking-[.1rem]'>OFFER</p>
                                    <p className=' text-semibold text-justify text-lg font-[Vogue] leading-6 text-[#000]'>get 10% off on your first-time booking with code - ADA10</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default Getaway