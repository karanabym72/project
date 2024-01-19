import React from 'react'
import Image from 'next/image';

const Comfort = () => {
    return (
        <div className=' bg-[#FFF9EE] my-[2%] py-[10%] md:py-[5%]' id='comfort'>
            <div className=' w-[90%] md:w-[80%] m-auto  gentle'>
                <p className=' text-[#BC502E] events-border pl-16 tracking-[.2rem]'>AROUND YOU</p>
                <h3 className=' pb-10 md:text-4xl'>for the ease and comfort of your basic needs</h3>

                <div className=' grid md:grid-cols-3 grid-cols-1 gap-4'>
                    <div className=' flex'>
                        <div className='mt-2 w-9 mr-5 md:mr-0 '>

                            <img src="/images/comfort-icon-1.png" alt="logo" />
                        </div>
                        <div className=' w-[80%] m-auto'>
                            <p className=' md:text-lg font-semibold pb-2'>Experience Anytime Dining</p>
                            <p className=' text-[15px] text-[#666]'>Whether day or night, our restaurant awaits to serve you culinary delights,
                                ensuring a delightful dining experience around the clock.</p>
                        </div>
                    </div>

                    <div className=' flex'>

                        <div className='mt-2 w-9 mr-5 md:mr-0'>

                            <img src="/images/confort-icon-2.png" alt="logo" />
                        </div>

                        <div className='w-[80%] m-auto'>
                            <p className=' md:text-lg font-semibold pb-2'>Fueling Your Journeys</p>
                            <p className=' text-[15px] text-[#666]'>Our on-site petrol pump provides continuous fueling convenience, offering you the ease of access needed for your travel requirements.</p>
                        </div>
                    </div>

                    <div className=' flex'>

                        <div className='mt-2 w-9 mr-5 md:mr-0'>


                            <img src="/images/comfort-icon-3.png" alt="logo" />
                        </div>

                        <div className=' w-[80%] m-auto'>
                            <p className='md:text-lg font-semibold pb-2'>Banking Within Reach</p>
                            <p className=' text-[15px] text-[#666]'>Enjoy seamless banking within your reach and experience the convenience of handling your finances without leaving the comfort of the hotel.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comfort