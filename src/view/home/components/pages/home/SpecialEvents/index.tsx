import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';


const SpecialEvents = () => {



    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '15px',

                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ]

    };

    return (
        <div className='py-[15%] md:py-[2%]' id='special-events'>

            <div className=' md:w-[70%] m-auto'>
                <div className='' id='special'>

                    <Carousel {...settings} >
                        <div className=' md:w-[97%] w-90% md:m-auto' >
                            <div className='gentle'>
                                <p className=' text-[#BC502E] tracking-[.2rem] md:pb-3 events-border pl-[13%]'>GENTLE COMFORTS</p>
                            </div>
                            <h3 className='pb-5 text-2xl md:text-4xl'>of contemporary rooms</h3>
                            <div className='md:w-[96%] w-[92%]'>

                                <img src="/images/rooms.png" alt="" />
                            </div>
                        </div>

                        <div className=' md:w-[97%] w-93% md:m-auto' >
                            <div className='gentle'>
                                <p className=' text-[#BC502E] tracking-[.2rem] md:pb-3 events-border pl-[13%]'>VERSATILE SPACE</p>
                                <h3 className='pb-5 text-2xl md:text-4xl'>for special events</h3>
                            </div>
                            <div className='md:w-[96%] w-[92%]'>
                                <img src="/images/events.png" alt="" />
                            </div>
                        </div>

                        <div className=' md:w-[97%] w-100% md:m-auto  ' >
                            <div className='gentle'>
                                <p className=' text-[#BC502E] tracking-[.2rem] md:pb-3 events-border pl-[13%]'>LUSH GREEN lAWN</p>
                                <h3 className='pb-5 text-2xl md:text-4xl'>for outdoor celebrations</h3>
                            </div>
                            <div className='md:w-[96%] w-[92%]'>
                                <img src="/images/outdoor.png" alt="" />
                            </div>
                        </div>


                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default SpecialEvents