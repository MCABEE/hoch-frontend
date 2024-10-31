import React from 'react'

function Section6() {
  return (
    <div className='w-full bg-white '>
        <h1 className='text-center text-black font-bold text-3xl lg:text-4xl'>Our Partnering Hospitals</h1>
        <p className='pt-4 text-center text-black text-lg lg:text-xl 2xl:text-2xl font-light px-4 md:px-0'>According to the latest World Happiness Report, Denmark is considered .</p>
<div className='w-full h-full md:h-[190px] lg:h-[230px] flex justify-evenly items-center'>
    <img src='/apollo.svg' className='size-20 md:size-32 lg:size-40'/>
    <img src='/fortis.svg' className='size-20 md:size-48 lg:size-56'/>
    <img src='/manipal.svg' className='size-32 md:w-[280px] lg:w-[380px] pt-5 md:pt-10'/>
</div>
    </div>
  )
}

export default Section6