import React from "react";

function Section6() {
  return (
    <div className="w-full bg-white ">
      <h1 className="text-center text-black font-bold text-2xl sm:text-3xl  lg:text-4xl 3xl:text-5xl pt-4">
        Our Partnering Hospitals
      </h1>
      <p className="pt-4 text-center text-black text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl font-light px-4 md:px-0">
        Partnering Hospitals for Training and Job Placement Opportunities
      </p>
      <div className="w-full h-full sm:h-[190px] lg:h-[230px] flex flex-col sm:flex-row justify-evenly ">
        <div className="w-full sm:w-[65%] flex justify-evenly items-center gap-4">
          <img src="/apollo.svg" className="size-20 lg:size-36" />
          <img src="/fortis.svg" className="size-20  lg:size-48" />
          <img
            src="/manipal.svg"
            className="size-40  lg:w-[300px]  pt-5 xl:pt-10"
          />
        </div>
        <div className="w-full sm:w-[35%] flex  justify-evenly sm:justify-around  items-center ">
          <img src="/sparsh.svg" className="size-20  lg:size-36" />
          <img src="/aster.svg" className="size-20  lg:size-48" />
        </div>
      </div>
    </div>
  );
}

export default Section6;
