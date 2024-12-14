import React from "react";
import Footer from "../Footer";

function Form() {
  return (
    <div className="w-full px-6 sm:px-8 3xl:px-36 flex mt-20 gap-10 flex-col md:flex-row">
      <div className=" h-full w-full md:w-[45%] 2xl:w-[40%] 3xl:w-[35%]">
        <form className="bg-[#E4E4E4] py-10 rounded-[30px]" action="">
          <h1 className="text-[21px] sm:text-[36px] text-black font-bold ps-8 xl:ps-24 py-2">Apply Now</h1>
          <div className="w-full px-4 sm:px-8 xl:px-24 flex flex-col gap-3">
            <input placeholder="Full name"
              type="text"
              className="bg-white w-full h-[45px] sm:h-[50px] rounded-[15px] px-4   placeholder:text-black placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-light  border-[1px] border-[#BBBBBB] "
            />
            <input placeholder="Mobile Number"
              type="text"
              className="bg-white w-full h-[45px] sm:h-[50px] rounded-[15px] px-4  placeholder:text-black placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-light  border-[1px] border-[#BBBBBB] "
            />
            <input placeholder="Email ID"
              type="text"
              className="bg-white w-full h-[45px] sm:h-[50px] rounded-[15px] px-4  placeholder:text-black placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-light  border-[1px] border-[#BBBBBB] "
            />
            <input placeholder="Address with Pincode"
              type="text"
              className="bg-white w-full h-[45px] sm:h-[50px] rounded-[15px] px-4  placeholder:text-black placeholder:text-[14px] sm:placeholder:text-[16px] placeholder:font-light  border-[1px] border-[#BBBBBB] "
            />

<select
      name="Qualification"
       defaultValue="Qualification"
      className="w-full h-[45px] sm:h-[50px] rounded-2xl text-sm xl:text-base  pl-4 border-[1px] border-[#BBBBBB] placeholder:text-black"
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

        </form>
      </div>
      <div className="w-full md:w-[50%]  3xl:w-[65%]  ">

        <div className="w-full xl:w-[577px]  bg-[#E4E4E4] rounded-[20px] py-6 px-8 border-[1px] border-[#DDDCDC] ">

            <h1 className="text-[#FC3657] text-[14px] sm:text-[20px] lg:text-[24px] font-bold">Quick Connect</h1>

            <h2 className="text-[14px] sm:text-[20px] lg:text-[24px] text-black font-bold pt-2">Phone</h2>

            <p className="text-[14px] sm:text-[20px] lg:text-[24px] text-black ">91 - 90812 34567, 9080987654</p>
          
            <h2 className="text-[14px] sm:text-[20px] lg:text-[24px] text-black font-bold pt-3">Whatsapp</h2>

            <p className="text-[14px] sm:text-[20px] lg:text-[24px] text-black ">91-90812 34567</p>

        </div>


        


      </div>
    </div>
  );
}

export default Form;
