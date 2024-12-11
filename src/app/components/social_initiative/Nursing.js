import React from "react";
import Discription from "./Description";

function Nursing() {
  return (
 <div>
   <div className="w-full relative">
   {/* <img
     src="/freeNursing.svg" 
     className="3xl:object-cover"
     /> */}
     <img
  src="/freeNursing.svg" 
  className="object-contain 2xl:object-scale-down 3xl:object-cover w-full h-auto"
/>

     <h1 className=" hidden sm:block text-[28px] lg:text-[32px] xl:text-[52px] 2xl:text-[72px] text-black font-bold 2xl:leading-[84px] tinos-bold absolute left-6 lg:left-12 3xl:left-[100px] top-20 md:top-2  lg:top-10 3xl:top-28">
     Free Nursing
     <br />
     Education Program
   </h1>
   <h1 className="sm:hidden block text-[20px]  text-black font-bold 2xl:leading-[84px] tinos-bold absolute left-5 top-16 ">
     Free Nursing
     <br />
     Education <br/>Program
   </h1>




   <div className=" hidden w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[500px] 3xl:w-[600px] rounded-3xl bg-white md:flex flex-col gap-3 2xl:gap-5 px-4 xl:px-8 2xl:px-10 py-4 lg:py-6 2xl:py-10 absolute left-6 lg:left-12 3xl:left-[100px] top-24 lg:top-48 xl:top-60 2xl:top-64 3xl:top-96">
    <h1 className="text-[26px] xl:text-[36px] text-black font-bold lg:pb-1 2xl:pb-3">
      Apply Now
    </h1>
    <input
      type="text"
      placeholder="Full name"
      className="w-full h-[35px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black "
    />

    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full h-[35px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <input
      type="text"
      placeholder="Email ID"
      className="w-full h-[35px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <input
      type="text"
      placeholder="Address with Pincode"
      className="w-full h-[35px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <select
      name="Qualification"
       defaultValue="Qualification"
      className="w-full h-[35px] lg:h-[40px] xl:h-[50px] rounded-2xl text-sm xl:text-base  pl-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    >
      {/* <option selected disabled className="text-sm xl:text-base">
        Qualification
      </option> */}
      <option>MBBS</option>
      <option>BSC Nursing</option>
      <option>GNM Nursing</option>
      <option>Others</option>
    </select>
    <button className="w-full h-[40px] xl:h-[50px] rounded-2xl bg-[#1982FE] text-white">
      Submit
    </button>
  </div>

    </div>



     <div className="w-full">
      <Discription/>
     </div>


     <div className="w-full  md:hidden flex py-6 px-2">
     <div className="  w-full rounded-3xl bg-white flex flex-col gap-3 2xl:gap-5 px-4 xl:px-8 2xl:px-10 py-8 lg:py-6 2xl:py-10 ">
    <h1 className="text-[21px] sm:text-[26px] xl:text-[36px] text-black font-bold lg:pb-1 2xl:pb-3">
      Apply Now
    </h1>
    <input
      type="text"
      placeholder="Full name"
      className="w-full h-[45px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black "
    />

    <input
      type="text"
      placeholder="Mobile Number"
      className="w-full h-[45px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <input
      type="text"
      placeholder="Email ID"
      className="w-full h-[45px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <input
      type="text"
      placeholder="Address with Pincode"
      className="w-full h-[45px] lg:h-[40px] xl:h-[50px] rounded-2xl placeholder:text-sm xl:placeholder:text-base placeholder:font-light px-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    />
    <select
      name="Qualification"
      
      defaultValue="Qualification"
      className="w-full h-[45px] lg:h-[40px] xl:h-[50px] rounded-2xl text-sm xl:text-base  pl-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
    >
      {/* <option selected disabled className="text-sm xl:text-base">
        Qualification
      </option> */}
      <option>MBBS</option>
      <option>BSC Nursing</option>
      <option>GNM Nursing</option>
      <option>Others</option>
    </select>
    <button className="w-full h-[40px] xl:h-[50px] rounded-2xl bg-[#1982FE] text-white">
      Submit
    </button>
  </div>
     </div>
    
 </div>
  );
}

export default Nursing;