import React from 'react';
import { Carousel } from 'antd';
import Link from 'next/link'

const RoomBanner = () => {

    const contentStyle = {
		color: '#fff',
		lineHeight: '160px',
		textAlign: 'center',
		width: '100%',
		margin: 'auto',

	};
	const SampleNextArrow = props => {
		const { className, style, onClick } = props
		return (
			<div
				className={className}
				style={{ ...style, display: 'none', background: 'red' }}
				onClick={onClick}
			/>
		)
	}

	const SamplePrevArrow = props => {
		const { className, style, onClick } = props
		return (
			<div
				className={className}
				style={{ ...style, display: 'none', background: 'green' }}
				onClick={onClick}
			/>
		)
	}



	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: false,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerPadding: '0px',
					padding: '0px'
				},
			},
		]
	};
  return (
    <>
    
    <Carousel {...settings}>
			<div >
				<Link rel="preload" href="">
					<div className='md:block hidden'>
						<img

							className="scale md:h-[100%]"
							src="/images/banner/room-banner.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>

					<div className='md:hidden block'>
						<img

							className="scale md:h-[100%]"
							src="/images/banner/bedroom-post-mobile.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
				</Link>
			</div>
			<div>
				<Link rel="preload" href="">
					<div className='md:block hidden'>
						<img

							className="scale"
							src="/images/banner/room-banner.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
					<div className='md:hidden block'>
						<img

							className="scale md:h-[100%]"
							src="/images/banner/bedroom-post-mobile.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
				</Link>
			</div>
			<div>
				<Link rel="preload" href="">
					<div className='md:block hidden'>
						<img

							className="scale"
							src="/images/banner/room-banner.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
					<div className='md:hidden block'>
						<img

							className="scale md:h-[100%]"
							src="/images/banner/bedroom-post-mobile.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
				</Link>
			</div>
			<div>
				<Link rel="preload" href="">
					<div className='md:block hidden'>
						<img

							className="scale"
							src="/images/banner/room-banner.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
					<div className='md:hidden block'>
						<img

							className="scale md:h-[100%]"
							src="/images/banner/bedroom-post-mobile.png"
							style={contentStyle}
							alt="banner"
						/>
					</div>
				</Link>
			</div>
		</Carousel>
    
    </>
  )
}

export default RoomBanner