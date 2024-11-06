import React from 'react'

function Section5() {
  return (
    <div className='w-full h-full md:h-[540px] bg-[#E6EBF0] flex flex-col md:flex-row px-2 md:px-11 xl:px-28 py-3 md:py-0'>
        <div className='w-full md:w-[40%] flex justify-center flex-col mt-2  '>
         <div className='w-full lg:w-[310px] h-[60px] bg-[#1F2437] text-white flex justify-center items-center'>Our Social Initiative</div> 
         <div>
            <img src='/students.svg'/>
         </div>
        </div>
        <div className= 'w-full md:w-[60%] h-full flex justify-center  flex-col px-4 md:px-8 '>
            <h1 className='text-black font-bold text-2xl xl:text-4xl mt-4 md:mt-16 '>Free Nursing Course with Job Placement for Financially Challenged Students</h1>
            <p className='text-black text-xs xl:text-base font-light  leading-5 xl:leading-7 pt-2 mt-2 xl:mt-4 pe-0 2xl:pe-14'>Our unique nursing program offers free education for financially challenged students. Participants complete the course at no cost and commit to a short-term work placement afterward. This initiative not only enables aspiring nurses to gain essential skills but also provides assured job placement support, helping them build a secure and successful career in healthcare.</p>
            <p className='text-[#1982FE] text-lg xl:text-xl mt-2 xl:mt-6'>Learn More</p>
        </div>
    </div>
  )
}

export default Section5