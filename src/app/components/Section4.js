import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function Section4() {
  return (
    <div className='w-full px-5 xl:px-0 2xl:px-14 '>
        <h1 className='font-semibold text-center text-[34px] lg:text-[38px] pb-1 lg:pb-6'>Latest Events</h1>
        <div className='w-full flex flex-col md:flex-row justify-evenly gap-y-8 md:gap-6 xl:gap-0'>
            <div className='w-full md:w-[400px]  h-full md:h-[500px] xl:h-[700px] hover:scale-105 ease-in-out duration-300 '>
                <div className='w-full flex justify-center items-center'>
                <img src="job_abroad.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                </div>
                <h1 className='font-bold  md:h-[74px] lg:h-auto text-[24px] text-center mt-6 md:mt-0 lg:mt-6'>Careers Abroad</h1>
                <p className='text-base  md:h-[198px] lg:h-[105px] xl:h-[130px] px-10 2xl:px-14 text-center py-4 font-light'>Expert guidance and support for job placements abroad, from documentation to final approval.</p>
                <div className='w-full flex pt-8 cursor-pointer px-0 sm:px-20 md:px-0'>
                    <div className='w-[80%] h-[65px] bg-[#1F2437] text-white flex justify-center items-center rounded-l-lg'>
                        
                        <p>Learn More</p>
                    </div>
                    <div className='w-[20%] h-[65px] bg-[#FF5421] hover:bg-[#ff5521d1] text-white flex justify-center items-center rounded-r-lg'>
                        
                        <p><IoIosArrowRoundForward className='size-10'/></p>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[400px] h-full md:h-[650px] hover:scale-105 ease-in-out duration-300'>
                <div className='w-full flex justify-center items-center'>
                <img src="study_abroad.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                </div>
                <h1 className='font-bold  md:h-[74px] lg:h-auto text-[24px] text-center mt-6 md:mt-0 lg:mt-6'>Study Abroad Opportunities</h1>
                <p className='text-base  md:h-[198px] lg:h-[105px] xl:h-[130px] px-10 2xl:px-14 text-center py-4 font-light'>We assist you in gaining admission to prestigious foreign universities, guiding you through the entire application process for a successful future. </p>
                <div className='w-full flex pt-8 cursor-pointer px-0 sm:px-20 md:px-0'>
                    <div className='w-[80%] h-[65px] bg-[#1F2437] text-white flex justify-center items-center rounded-l-lg'>
                        
                        <p>Learn More</p>
                    </div>
                    <div className='w-[20%] h-[65px] bg-[#FF5421] text-white flex justify-center items-center rounded-r-lg'>
                        
                        <p><IoIosArrowRoundForward className='size-10'/></p>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[400px] h-[650px] hover:scale-105 ease-in-out duration-300 '>
                <div className='w-full flex justify-center items-center'>
                <img src="admission-open.svg" className='w-[400px] h-[300px] xl:h-[400px]'/>
                </div>
                <h1 className='font-bold  md:h-[74px] lg:h-auto text-[24px] text-center mt-6 md:mt-0 lg:mt-6'>India Admissions</h1>
                <p className='text-base md:h-[198px] lg:h-[105px] xl:h-[130px] px-10 2xl:px-14 text-center py-4 font-light'>Secure your place in leading Indian institutions with our seat booking and admission support.</p>
                <div className='w-full flex pt-8 cursor-pointer px-0 sm:px-20 md:px-0'>
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