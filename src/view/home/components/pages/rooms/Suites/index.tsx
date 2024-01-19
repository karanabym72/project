import React from 'react'
import { Carousel } from 'antd';
import Link from 'next/link';

const Suites = () => {

    const contentStyle = {
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        width: '100%',
        margin: 'auto',
        padding: '15px',

    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerMode: true,
        centerPadding: '20%',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                    padding: '0px'
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

            <div className="grid md:grid-cols-1 md:w-[90%] m-auto">
                <div>
                    <div className='md:block hidden w-[100%]'>
                        <img
                            className="scale "
                            src="/images/banner/slider1.webp"
                            alt="banner"
                        />
                    </div>
                    <div className='md:hidden block'>
                        <img
                            className="scale md:h-[100%]"
                            src="/images/banner/bedroom-post-mobile.png"
                            alt="banner"
                        />
                    </div>
                </div>

                <div className='md:pt-5 pt-1 flex justify-between'>

                    <div className=' w-[24%] '>
                        <img
                            className=" w-[100%]"
                            src="/images/banner/suites-mobile.png"
                            alt="banner"
                        />
                    </div>

                    <div className=' w-[24%] '>
                        <img
                            className=" w-[100%]"
                            src="/images/banner/suites-mobile.png"
                            alt="banner"
                        />
                    </div>

                    <div className=' w-[24%] '>
                        <img
                            className=" w-[100%]"
                            src="/images/banner/suites-mobile.png"
                            alt="banner"
                        />
                    </div>

                    <div className=' w-[24%] '>
                        <img
                            className="w-[100%]"
                            src="/images/banner/suites-mobile.png"
                            alt="banner"
                        />
                    </div>
                </div>
            </div>



            <div className=' grid md:grid-cols-12 grid-cols-1 w-[90%] m-auto py-[5%]'>
                <div className=' md:col-span-9'>
                    <div className=' '>
                        <h3 className='text-[#000] md:text-4xl text-3xl pb-3'>dark suite</h3>

                        <div className='pb-3'>
                            <p className=' text-[#BC502E] inline md:text-xl text-[18px] tracking-[.1rem] '>&#8377;  5499.00/NIGHT</p>
                            <span className=' text-[#CCC] pl-2 text-[14px] line-through'>5999.00</span>
                            <span className=' pl-2 font-semibold text-[#000] text-[14px]'>(SAVE 20%)</span>

                        </div>

                        <div className=' flex md:gap-8 gap-4'>
                            <div className=' flex items-center'>
                                <img src="/images/icons/suite-icon-1.png" alt="" />


                                <span className=' pt-1 pl-2 md:text-base text-[15px]'>80m2</span>

                            </div>

                            <div className=' flex items-center'>
                                <img src="/images/icons/suite-icon-2.png" alt="" />


                                <span className=' pt-1 pl-2 md:text-base text-[15px]'>4 Beds</span>

                            </div>

                            <div className=' flex items-center'>
                                <img src="/images/icons/suite-icon-3.png" alt="" />


                                <span className=' pt-1 pl-2 md:text-base text-[15px]'>2 Bathrooms</span>

                            </div>



                        </div>

                        <p className=' pt-7 text-[#666] md:text-lg text-[15px] pr-0 md:pr-20'>
                            Pellentesque lacinia tincidunt rhoncus. Donec sit amet fermentum risus, eget malesuada eros.
                            Sed porta vitae enim nec scelerisque. Etiam et tellus ut lacus tempor fringilla. Maecenas a
                            liquet diam eget turpis bibendum tempus. Proin sit amet viverra magna. Nunc aliquet massa ut
                            vestibulum blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
                            ridiculus mus.
                        </p>


                    </div>

                    <div className='md:pt-10 pt-5'>
                        <h3>room facilities</h3>

                        <div className='md:w-[40%] w-[100%] flex justify-between mt-7'>
                            <div className='w-[50%]'>
                                <ul className=' inline-grid'>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-2.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-2.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-2.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-2.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-2.png" alt="" /> </span>80m2
                                    </li>
                                </ul>
                            </div>

                            <div className='w-[50%]'>
                                <ul className=' inline-grid'>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-1.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'> <img src="/images/icons/suite-icon-1.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-1.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-1.png" alt="" /> </span>80m2
                                    </li>
                                    <li className=' inline-flex justify-center items-center mb-6'>
                                        <span className=' pr-2'><img src="/images/icons/suite-icon-1.png" alt="" /> </span>80m2
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='md:col-span-3 mt-5 '>
                    <div className="contact-form-sec p-4 md:p-10">

                    <h3 className='text-[#000] md:text-4xl text-3xl pb-3'>book your room</h3>
                        <div className='pb-5 md:pr-0 mx-auto font-[lato] md:w-[100%]'>
                            <h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>CHECK IN - CHECKOUT</h5>

                            <select name="cars" id="cars" className='w-[100%]  outline-none text-[#555] pb-1 bg-transparent border-b-[1px] font-[serif] border-[#555] font-semibold mt-5 italic text-[20px]'>
                                <option value="volvo">28 Sept 23</option>
                                <option value="saab">28 Sept 23</option>
                                <option value="mercedes">28 Sept 23</option>
                                <option value="audi">28 Sept 23</option>
                            </select>
                        </div>
                        <div className='pb-5 mx-auto md:w-[100%]'>
                            <h5 className='text-[#BC502E] tracking-[.2rem]  font-[sans-serif]'>NO. OF ROOMS</h5>
                            <select name="cars" id="cars" className='w-[100%] outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] font-[serif] border-[#555] font-semibold  mt-5 italic text-[18px]'>
                                <option value="volvo">01</option>
                                <option value="saab">02</option>
                                <option value="mercedes">02</option>
                                <option value="audi">02</option>
                            </select>
                        </div>
                        <div className='pb-5 mx-auto w-[100%]'>
                            <h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>NO. OF GUESTS</h5>
                            <select name="cars" id="cars" className='w-[100%] outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] font-[serif] border-[#555] font-semibold  mt-5 italic text-[18px]'>
                                <option value="volvo">02</option>
                                <option value="saab">03</option>
                                <option value="mercedes">04</option>
                                <option value="audi">05</option>
                            </select>
                        </div>
                        <div className='mt-4  md:mx-auto items-center col-span-2 md:col-span-1 w-[100%]'>
                            <button className='w-[100%] bg-[#BC502E] tracking-[.1rem] p-3 text-white font-[sans-serif]'>BOOK NOW</button>
                        </div>



                    </div>
                </div>
            </div>


            <div className='py-[10%] md:py-[0%] mb-20' id='gallery'>
                <div className=' text-center pb-5 md:pb-10'>

                    <h3 className='md:text-5xl'>other rooms</h3>
                </div>

                <Carousel {...settings} >
                    <div>
                        <Link rel="preload" href="">
                            <div className='md:block hidden'>
                                <img
                                    width="80%"
                                    className="scale justify-center "
                                    src="/images/banner/slider1.webp"
                                    style={contentStyle}
                                    alt="banner"
                                />

                            </div>

                            <div className='md:hidden block'>
                                <img
                                    width="80%"
                                    className="scale justify-center "
                                    src="/images/post/family-post-mobile.png"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div id='gallery'>
                                <div className='gentle'>
                                    <p className=' text-black text-xl events-border pl-[32%] md:pl-[11%] tracking-[.2rem]'>FAMILY SUITE</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <div className='md:block hidden'>
                                <img
                                    width="80%"
                                    className="scale"
                                    src="/images/banner/slider1.webp"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div className='md:hidden block'>
                                <img
                                    width="80%"
                                    className="scale justify-center "
                                    src="/images/post/family-post-mobile.png"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>


                            <div id='gallery'>
                                <div className='gentle'>
                                    <p className=' text-black text-xl events-border pl-[32%] md:pl-[11%] tracking-[.2rem]'>SINGLE ROOM</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <div className='md:block hidden'>
                                <img
                                    width="80%"
                                    className="scale"
                                    src="/images/banner/slider1.webp"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div className='md:hidden block'>
                                <img
                                    width="80%"
                                    className="scale justify-center "
                                    src="/images/post/family-post-mobile.png"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div id='gallery'>
                                <div className='gentle'>
                                    <p className=' text-black text-xl events-border pl-[32%] md:pl-[11%] tracking-[.2rem]'>DOUBLE ROOM</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div>
                        <Link rel="preload" href="">
                            <div className='md:block hidden'>
                                <img
                                    width="80%"
                                    className="scale"
                                    src="/images/banner/slider1.webp"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div className='md:hidden block'>
                                <img
                                    width="80%"
                                    className="scale justify-center "
                                    src="/images/post/family-post-mobile.png"
                                    style={contentStyle}
                                    alt="banner"
                                />
                            </div>

                            <div id='gallery'>
                                <div className='gentle'>
                                    <p className=' text-black text-xl events-border pl-[32%] md:pl-[11%] tracking-[.2rem]'>GRAND ROOM</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </Carousel>


            </div>

        </>
    )
}

export default Suites