import React from 'react'
import navras from '../post/navras.png'
import Image from 'next/image';


const WelCome = () => {
    return (
        <div className='  text-center py-[10%]  md:py-[3%]'>
            <p className=' text-[#D1865F] tracking-[.2rem]'>WELCOME TO</p>
            <h3 className=' text-4xl md:text-5xl'>Ada Abode</h3>
            <p className='text-base  text-[#666] w-[90%] md:w-[80%] m-auto md:text-2xl pt-6 font-[Classy] leading-7'>Your gateway to relaxation in Jaunpur, India! Feel the warmth of Indian hospitality just moments away from
                the spiritual energy of Varanasi. Whether it's a cosy stay or a special event,
                we're here to make your experience relaxing and festive.
            </p>
            <div className=' flex justify-center items-center gap-2 md:gap-5 pt-5'>
                <div>
                    <Image
                        alt="logo"
                        src="/images/navras.svg"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div>
                    <Image
                        alt="logo"
                        src="/images/arka.svg"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div>
                    <Image
                        alt="logo"
                        src="/images/leafy.svg"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
                <div>
                    <Image
                        alt="logo"
                        src="/images/amore.svg"
                        width={80}
                        height={80}
                        className=""
                    />
                </div>
            </div>
        </div>
    )
}

export default WelCome