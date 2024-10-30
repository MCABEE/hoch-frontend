import React from "react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";



function Navbar() {
  return (
    <div className="w-full ">
      <div className="w-full px-8 xl:px-12 flex justify-between">
      <div className="w-[20%] md-[30%] xl:w-[45%] p-2">
        <img src="/logo1.svg" className="w-[160px]"/>
      </div>

      <div className="w-[80%] md:w-[70%] xl:w-[60%] flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <HiMail className="size-4 xl:size-6" />
          <p className=" text-black text-xs lg:text-lg ps-4 ">mail@hochinternational.com</p>
        </div>
        <div className="w-full flex justify-center items-center">
       <FaPhoneAlt className="size-4 xl:size-6"/><p className=" text-black text-xs lg:text-lg ps-4">91-90812 34567 <br/> 91-90809 87654</p>
        </div>
        <div className="w-full flex justify-center items-center">
        <IoLogoWhatsapp className="size-4 xl:size-7"/><p className=" text-black text-xs  lg:text-lg ps-4" >91-90812 34567</p>
        </div>
      </div>
    </div>
    <div className="bg-[#1C1C1C] w-full h-[65px] flex justify-center items-center px-6 ">
      <ul className=" w-full flex justify-evenly items-center" >
        <li className="text-white text-[13px] lg:text-[18px] font-light">HOME</li>
        <li className="text-white text-[13px] lg:text-[18px] font-light">STUDY ABROAD</li>
        <li className="text-white text-[13px] lg:text-[18px] font-light">STUDY INDIA</li>
        <li className="text-white text-[13px] lg:text-[18px] font-light">JOB ABROAD</li>
        <li className="text-white text-[13px] lg:text-[18px] font-light">MIGRATION</li>
        <li className="text-white text-[13px] lg:text-[18px] font-light">ABOUT</li>
        <li className="text-white text-[17px] font-light">CONTACT</li>
       
      </ul>
    </div>
    </div>
  );
}

export default Navbar;
