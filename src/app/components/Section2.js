

import React from "react";
import Link from 'next/link'


function Section2() {
  return (
    <div className="w-full  md:h-[380px] md:relative ">
      <div className="w-full  flex flex-col xl:flex-row xl:p-7 2xl:p-9 md:absolute bottom-o md:bottom-16 lg:bottom-12 xl:bottom-0 left-0 px-0 xl:px-6 2xl:px-20">
        <div className="w-full py-3 md:py-0">
          <div className="w-full grid grid-cols-1 md:flex flex-col md:flex-row items-center md:items-start  justify-center gap-4 gap-y-10 md:gap-y-0 lg:gap-10 xl:gap-0 px-2 lg:px-8 xl:px-0">
            <div className="w-[90%] md:w-[360px] xl:w-[280px] 3xl:w-[360px] h-full  bg-white rounded-[10px] border-[1px] border-gray-300 shadow-xl hover:scale-105 ease-in-out duration-300 mx-auto">
              <div className="flex justify-center items-center py-3 md:py-0 px-3 sm:px-0">
                <img
                  src="/card1.svg"
                  alt="Jobs in Abroad"
                  className="rounded-[10px] md:rounded-none"
                />
              </div>
              <h1 className="text-black font-bold text-sm sm:text-lg md:text-base xl:text-2xl 3xl:text-[30px] text-center mt-3">
              Careers Abroad
              </h1>
              <p className="md:h-[130px] lg:h-[128px] xl:h-[105px] text-black text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-5 sm:leading-6 text-center py-4 px-16 sm:px-20 md:px-4 2xl:px-0 3xl:px-4">
              Expert guidance and support for job placements abroad, from documentation to final approval.
              </p>
              <p className="text-[#1982FE] text-base xl:text-xl 3xl:text-[21px] text-center cursor-pointer hover:text-blue-700 pb-5">
                Enquire Now
              </p>
            </div>

            <div className="w-[90%] md:w-[360px] xl:w-[280px] 3xl:w-[360px] h-full bg-white rounded-[10px] border-[1px] border-gray-300 shadow-xl hover:scale-105 ease-in-out duration-300 mx-auto">
              
              <div className="flex justify-center items-center py-3 md:py-0 px-3 sm:px-0">
                <img
                  src="/card2.svg"
                  alt="Admissions in India"
                  className="rounded-[10px] md:rounded-none"
                />
              </div>
              <h1 className="text-black font-bold text-sm sm:text-lg md:text-base xl:text-2xl 3xl:text-[30px] text-center mt-3">
              India Admissions
              </h1>
              <p className="md:h-[130px] lg:h-[128px] xl:h-[105px] text-black text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-5 sm:leading-6 text-center py-4  px-16 sm:px-20 md:px-4 2xl:px-0 3xl:px-4">
              Secure your place in leading Indian institutions with our seat booking and admission support.
              </p>
              <p className="text-[#1982FE] text-base xl:text-xl 3xl:text-[21px] text-center cursor-pointer hover:text-blue-700 pb-5">
                Enquire Now
              </p>
            </div>

            <div className="w-[90%] md:w-[360px] xl:w-[280px] 3xl:w-[360px] h-full bg-white rounded-[10px] border-[1px] border-gray-300 shadow-xl hover:scale-105 ease-in-out duration-300 mx-auto">
              
              <div className="flex justify-center items-center py-3 md:py-0 px-3 sm:px-0">
                <img
                  src="/card3.svg"
                  alt="Denmark Migration"
                  className="rounded-[10px] md:rounded-none"
                />
              </div>
              <h1 className="text-black font-bold text-sm sm:text-lg md:text-base xl:text-2xl 3xl:text-[30px] text-center mt-3">
              Denmark Migration
              </h1>
              <p className="md:h-[130px] lg:h-[128px] xl:h-[105px] text-black text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-5 sm:leading-6 text-center py-4 px-16 sm:px-20 md:px-4 2xl:px-0 3xl:px-4">
              Open your mind to a whole new world, experience world-class education, and develop a global perspective.
              </p>
              <p className="text-[#1982FE] text-base xl:text-xl 3xl:text-[21px] text-center cursor-pointer hover:text-blue-700 pb-5">
                Enquire Now
              </p>
            </div>




            <div className="w-[90%] md:w-[360px] xl:w-[280px] 3xl:w-[360px] h-full bg-white rounded-[10px] border-[1px] border-gray-300 shadow-xl hover:scale-105 ease-in-out duration-300 mx-auto">
              
             <Link href={'/social_initiative'}>
             <div className="flex justify-center items-center py-3 md:py-0 px-3 sm:px-0">
                <img
                  src="/card4.svg"
                  alt="Study Nursing for Free"
                  className="rounded-[10px] md:rounded-none"
                />
              </div>
              <h1 className="text-black font-bold text-sm sm:text-lg md:text-base xl:text-2xl text-center 3xl:text-[30px] mt-3 ">
              Free Nursing Education 
              </h1>
              <p className="md:h-[130px] lg:h-[128px] xl:h-[105px] text-black text-[12px] 2xl:text-[16px] 3xl:text-[18px] leading-5 sm:leading-6 text-center py-4 px-16 sm:px-20 md:px-4 2xl:px-0 3xl:px-4">
              Enroll in a no-fee nursing program with a short-term work commitment, ideal for financially limited students.
              </p>
             
              <p className="text-[#1982FE] text-base xl:text-xl 3xl:text-[21px] text-center cursor-pointer  hover:text-blue-700 pb-5">
                Enquire Now
              </p>
             </Link>
            </div>
         

          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;