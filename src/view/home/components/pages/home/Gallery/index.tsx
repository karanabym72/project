import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';
import Link from 'next/link';



const Gallery = () => {

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
		autoplay: false,
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
		<div className='pt-4 py-[1%] md:py-[3%]' id='gallery'>
			<div className=' text-center pb-5 md:pb-10'>
				<p className=' text-[#BC502E] tracking-[.2rem]'>GALLERY</p>
				<h3 className='md:text-5xl'>a bouquet of memories</h3>
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
	)
}

export default Gallery