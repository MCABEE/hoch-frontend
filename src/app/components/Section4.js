import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Section4() {
  return (
    <div className='w-full px-5 xl:px-0 2xl:px-14 '>
        <h1 className='font-semibold text-center text-[34px] lg:text-[38px] pb-1 lg:pb-6'>Latest Events</h1>
        <div className='w-full flex justify-evenly gap-6 xl:gap-0'>
            <div className='w-[400px] h-[500px] xl:h-[650px] hover:scale-105 ease-in-out duration-300'>
                <img src="job_abroad.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                <h1 className='font-bold text-[24px] text-center mt-6'>Jobs Abroad</h1>
                <p className='text-base px-10 2xl:px-14 text-center py-4 font-light'>Open your mind to a whole new world, experience world-class education, and develop a global perspective.</p>
                <div className='w-full flex pt-8 cursor-pointer'>
                    <div className='w-[80%] h-[65px] bg-[#1F2437] text-white flex justify-center items-center rounded-l-lg'>
                        
                        <p>Learn More</p>
                    </div>
                    <div className='w-[20%] h-[65px] bg-[#FF5421] hover:bg-[#ff5521d1] text-white flex justify-center items-center rounded-r-lg'>
                        
                        <p><IoIosArrowRoundForward className='size-10'/></p>
                    </div>
                </div>
            </div>
            <div className='w-[400px] h-[650px] hover:scale-105 ease-in-out duration-300'>
                <img src="study_abroad.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                <h1 className='font-bold text-[24px] text-center mt-6'>Jobs Abroad</h1>
                <p className='text-base px-10 2xl:px-14 text-center py-4 font-light'>Open your mind to a whole new world, experience world-class education, and develop a global perspective.</p>
                <div className='w-full flex pt-8 cursor-pointer'>
                    <div className='w-[80%] h-[65px] bg-[#1F2437] text-white flex justify-center items-center rounded-l-lg'>
                        
                        <p>Learn More</p>
                    </div>
                    <div className='w-[20%] h-[65px] bg-[#FF5421] text-white flex justify-center items-center rounded-r-lg'>
                        
                        <p><IoIosArrowRoundForward className='size-10'/></p>
                    </div>
                </div>
            </div>
            <div className='w-[400px] h-[650px] hover:scale-105 ease-in-out duration-300 '>
                <img src="admission-open.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                <h1 className='font-bold text-[24px] text-center mt-6'>Jobs Abroad</h1>
                <p className='text-base px-10 2xl:px-14 text-center py-4 font-light'>Open your mind to a whole new world, experience world-class education, and develop a global perspective.</p>
                <div className='w-full flex pt-8 cursor-pointer'>
                    <div className='w-[80%] h-[65px] bg-[#1F2437] text-white flex justify-center items-center rounded-l-lg'>
                        
                        <p>Learn More</p>
                    </div>
                    <div className='w-[20%] h-[65px] bg-[#FF5421] text-white flex justify-center items-center rounded-r-lg'>
                        
                        <p><IoIosArrowRoundForward className='size-10'/></p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
    
  )
}

export default Section4