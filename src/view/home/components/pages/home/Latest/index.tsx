import Link from 'next/link'
import React from 'react'
import { Carousel } from 'antd';


const Latest = () => {

    const contentStyle = {
        margin: 'auto'
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        centerMode: true,
        centerPadding: '18%',
        step: '10',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerPadding: '7%',
                    centerMode: true,
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
            <div className=' py-[15%] pb-[25%] md:py-[5%]  md:pb-[6%]' id='latest'>
                <div className=' text-center pb-8 md:pb-14'>
                    <p className=' text-[#BC502E] tracking-[.1rem]'>LATEST FROM THE GRAM!</p>
                    <h3 className=' md:text-5xl'>#adaabode</h3>
                </div>

                <Carousel {...settings} >
                    <div className=''>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-6.png"
                                style={contentStyle}
                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-5.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-3.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-4.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-5.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-4.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-3.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <img
                                width="100%"
                                className="scale"
                                src="/images/post/latest-post-5.png"

                                alt="banner"
                            />
                        </Link>
                    </div>
                </Carousel>
            </div>
        </>
    )
}

export default Latest