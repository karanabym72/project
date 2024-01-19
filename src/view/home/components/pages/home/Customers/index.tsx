import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';

const Customers = () => {

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
                    centerPadding: '20px 0px 0px 0px',

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
        <>

            <div className=' py-[10%] md:py-[2%]'>
                <div className='text-center '>
                    <p className=' text-[#D1865F] tracking-[.1rem] text-[16px]'>GRATITUDE</p>
                    <h3 className=' md:text-5xl'>Happy Customers</h3>
                </div>
                <div className=' pt-7 w-[90%] md:w-[80%] m-auto'>

                    <Carousel {...settings}>
                        <div className=' '>
                            <div className='w-[95%] md:w-[80%] md:m-auto pr-3 md:pr-0'>
                                <p className=' font-[Classy] leading-7 text-[#666] text-[15px] md:text-lg text-justify'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse scelerisque mi metus,
                                    non vestibulum nibh finibus iaculis. Praesent et dolor fringilla,
                                    molestie ligula in, sodales mauris. Lorem”.</p>
                                <p className=' font-semibold md:pt-3 pt-2 text-[#000]'>Michael M. McNamee</p>
                                <p className=' text-sm text-[#666]'>Bank Employee</p>
                            </div>
                        </div>

                        <div className=''>
                            <div className=' w-[95%] md:w-[80%] md:m-auto pr-3 md:pr-0'>
                                <p className=' font-[Classy] leading-7 text-[#666] text-[15px] md:text-lg text-justify'>“Ut in lectus sed massa elementum feugiat. Phasellus consectetur convallis nulla ac interdum. Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Suspendisse scelerisque
                                    mi metus, mi metus</p>
                                <p className=' font-semibold md:pt-3 pt-2 text-[#000]'>Marjory P. Boes</p>
                                <p className=' text-sm text-[#666]'>It Professional</p>
                            </div>
                        </div>

                        <div className=''>
                            <div className=' w-[95%] md:w-[80%] md:m-auto pr-3 md:pr-0'>
                                <p className=' font-[Classy] leading-7 text-[#666] text-[15px] md:text-lg text-justify'>“Praesent et dolor fringilla, molestie ligula in, sodales mauris. Ut in lectus sed massa elementum feugiat.
                                    Phasellus consectetur convallis nulla ac interdum.” Lorem ipsum dolor
                                    sit amet, consectetur adipiscing. </p>
                                <p className=' font-semibold md:pt-3 pt-2 text-[#000]'>Ron M. Tracey</p>
                                <p className=' text-sm text-[#666]'>Business Man</p>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

        </>
    )
}

export default Customers