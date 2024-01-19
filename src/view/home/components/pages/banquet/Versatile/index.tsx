import React from 'react'

const Versatile = () => {
  return (
    <>


      <div className=' grid grid-cols-1 w-[100%]'>
        <div className='md:block hidden w-[100%]'>
          <img
            className="scale w-[100%]"
            src="/images/banner/lawn-banner.png"
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

      <div className='  text-center py-[10%]  md:py-[3%]'>
        <p className=' text-[#D1865F] tracking-[.2rem]'>VERSATILE SPACE</p>
        <h3 className=' text-4xl md:text-5xl'>of contemporary rooms</h3>
        <p className='text-base  text-[#666] w-[90%] md:w-[50%] m-auto md:text-2xl pt-6 font-[Classy] leading-7'>Pellentesque lacinia tincidunt rhoncus. Donec sit amet fermentum risus,
          eget malesuada eros. Sed porta vitae enim nec scelerisque. Etiam et tellus ut lacus tempor fringilla.
          Maecenas aliquet diam eget turpis bibendum tempus.
        </p>
      </div>


    </>
  )
}

export default Versatile