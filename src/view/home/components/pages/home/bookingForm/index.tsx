import React from 'react';
import { Carousel } from 'antd';
import Link from 'next/link';

const BookingForm: React.FC = () => {
	return (
		<>
			<div className="container mx-auto md:w-[90%]">
				<div className="contact-form-sec">
					<div className='p-4 md:p-8'>
						<h3 className=' md:pl-14 font-[Classy]'>book with ease, stay with delight!</h3>
						<div className="grid grid-cols-2 md:grid-cols-6 pt-5">


						
								<div className='pb-5 pr-4 md:pr-0 md:mx-auto '>
									<h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>CHECK IN</h5>

									<select name="cars" id="cars" className='w-[100%] outline-none text-[#555] pb-1 bg-transparent border-b-[1px] border-[#555] mt-5 italic  font-[serif] font-semibold'>
										<option value="volvo">28 Sept 23</option>
										<option value="saab">28 Sept 23</option>
										<option value="mercedes">28 Sept 23</option>
										<option value="audi">28 Sept 23</option>
									</select>
								</div>
								<div className='pb-5 pl-4 md:pl-0 md:mx-auto'>
									<h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>CHECK OUT</h5>
									<select name="cars" id="cars" className='w-[100%]  outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] border-[#555] mt-5 italic font-[serif] font-semibold'>
										<option value="volvo">30 Sept 23</option>
										<option value="saab">28 Sept 23</option>
										<option value="mercedes">28 Sept 23</option>
										<option value="audi">28 Sept 23</option>
									</select>
								</div>
							
								<div className='pb-5 md:mx-auto col-span-2 md:col-span-1'>
									<h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>ROOM TYPE</h5>
									<select name="cars" id="cars" className='w-[100%] outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] border-[#555] mt-5 italic font-[serif] font-semibold' >
										<option value="volvo">Executive</option>
										<option value="saab">classic</option>
										<option value="mercedes">premium</option>
										<option value="audi">basic</option>
									</select>
								</div>
								<div className='pb-5 md:mx-auto col-span-2 md:col-span-1'>
									<h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>NO. OF ROOMS</h5>
									<select name="cars" id="cars" className='w-[100%] outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] border-[#555] mt-5 italic font-[serif] font-semibold'>
										<option value="volvo">01</option>
										<option value="saab">02</option>
										<option value="mercedes">02</option>
										<option value="audi">02</option>
									</select>
								</div>
								<div className='pb-5 md:mx-auto col-span-2 md:col-span-1'>
									<h5 className='text-[#BC502E] tracking-[.2rem] font-[sans-serif]'>NO. OF GUESTS</h5>
									<select name="cars" id="cars" className='w-[100%] outline-none text-[#555]  pb-1 bg-transparent border-b-[1px] border-[#555] mt-5 italic font-[serif] font-semibold'>
										<option value="volvo">02</option>
										<option value="saab">03</option>
										<option value="mercedes">04</option>
										<option value="audi">05</option>
									</select>
								</div>
								<div className='mt-4  md:mx-auto items-center col-span-2 md:col-span-1'>
									<button className='w-[100%] bg-[#BC502E] p-3 text-white font-[sans-serif]'>BOOK NOW</button>
								</div>
					


						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BookingForm;
