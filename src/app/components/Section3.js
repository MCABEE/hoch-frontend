import React from "react";
import Link from "next/link";
function Section3() {
  return (
    <div className="w-full mt-6 md:mt-0  ">
      <div className="bg-white rounded-[30px] mx-6 sm:mx-0 py-6" >
      <h1 className="text-center text-xl  md:text-3xl lg:text-4xl 3xl:text-5xl font-bold">
        Healthcare Migration to Denmark
      </h1>
      <p className="text-center text-sm md:text-base lg:text-2xl 3xl:text-[30px] px-5 sm:px-10 md:px-32 lg:px-50 lg:px-80  py-2 sm:py-8 leading-[20px] 3xl:leading-[39px] font-[350px]">
        Offering migration programs for doctors and nurses to Denmark.
        Requirements: MBBS with Medical Council registration or B.Sc/GNM Nursing
        with Nursing Council registration. Unlock new career opportunities
        abroad.
      </p>
      <div className="w-full flex justify-center items-center">
      <Link href={'/career-in-denmark'}>

        <button className="w-[200px] md:w-[350px] lg:w-[400px] h-[40px] lg:h-[60px] 3xl:h-[75px] bg-[#09B438] hover:bg-[#09b437cf] rounded-[5px] text-white text-sm md:text-base lg:text-xl 3xl:text-2xl mt-4 md:mt-3 lg:mt-5">
          MORE INFORMATION
        </button>
        </Link>
      </div>
      </div>
    
    </div>
  );
}

export default Section3;
