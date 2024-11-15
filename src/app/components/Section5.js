import React from "react";
import Link from 'next/link'

function Section5() {
  return (
    <div className="w-full h-full md:h-[540px] 3xl:h-[651px] bg-[#E6EBF0] flex flex-col md:flex-row px-2 md:px-11 xl:px-28 py-3 md:py-0">
      <div className="w-full md:w-[40%] flex justify-center flex-col mt-2  ">
        <div className="w-full lg:w-[310px] 3xl:w-[410px] h-[60px] text-xs md:text-2xl bg-[#1F2437] text-white flex justify-center items-center">
          Our Social Initiative
        </div>
        <div>
        <Link href={'/social-initiative'}>
          <img src="/students.svg" />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full flex justify-center  flex-col px-4 md:px-8 3xl:px-2 ">
      <Link href={'/social-initiative'}>

        <h1 className="text-black font-bold text-lg sm:text-2xl xl:text-4xl 3xl:text-5xl mt-4 md:mt-16 ">
          Free Nursing Course with Job Placement for Financially Challenged
          Students
        </h1>
        </Link>
        <p className="text-black text-xs sm:text-base 3xl:text-3xl font-light  leading-[14px] sm:leading-5 xl:leading-7 3xl:leading-9 pt-2 mt-2 xl:mt-4 pe-0 2xl:pe-14">
          Our unique nursing program offers free education for financially
          challenged students. Participants complete the course at no cost and
          commit to a short-term work placement afterward. This initiative not
          only enables aspiring nurses to gain essential skills but also
          provides assured job placement support, helping them build a secure
          and successful career in healthcare.
        </p>
        <Link href={'/social-initiative'}>

        <p className="text-[#1982FE] text-base sm:text-lg xl:text-xl 3xl:text-2xl mt-2 xl:mt-6">
          Learn More
        </p>
        </Link>
      </div>
    </div>
  );
}

export default Section5;
