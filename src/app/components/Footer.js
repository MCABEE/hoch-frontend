import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function Footer() {
  return (
   <div>
    
    <div className="w-full h-[400px] lg:h-[500px] bg-[#1F2437] flex">
      <div className="w-[25%] flex justify-center items-center flex-col">
        <img src="/footer_logo.svg" className="size-36" />
        <div className="w-full flex justify-center items-center text-white mt-28 gap-4">
          <FaFacebookSquare className="size-6" />
          <PiInstagramLogoFill className="size-6" />
          <FaLinkedin className="size-6" />
          <FaYoutube className="size-6" />
        </div>
      </div>
      <div className="w-[25%] flex justify-center px-10 flex-col">
        <h1 className="text-white font-bold text-base lg:text-xl">QUICK ACCESS</h1>
        <ul className="text-white pt-5 text-sm xl:text-base ">
          <li className="pb-3"> Home</li>
          <li className="pb-3">About us</li>
          <li className="pb-3">Contact</li>
          <li className="pb-3">Study Abroad</li>
          <li className="pb-3">Study India</li>
          <li className="pb-3">Job Abroad</li>
          <li className="pb-3">Migration</li>
        </ul>
      </div>
      <div className="w-[25%] flex justify-center px-10 flex-col">
        <h1 className="text-white font-bold text-base lg:text-xl">STUDY</h1>
        <ul className="text-white pt-5 text-sm xl:text-base ">
          <li className="pb-3"> MBBS</li>
          <li className="pb-3">BSc Nursing</li>
          <li className="pb-3">GNM</li>
          <li className="pb-3">Paramedical</li>
          <li className="pb-3">Pharmacy</li>
          <li className="pb-3">MBA</li>
          <li className="pb-3">MSW</li>
        </ul>
      </div>
      <div className="w-[25%] flex justify-center px-4 xl:px-10 flex-col gap-y-[26px] lg:gap-y-8">
        <h1 className="text-white font-bold text-base lg:text-xl">GET IN TOUCH</h1>
        <div className="w-full flex  items-center">
          <FaPhoneAlt className="size-4 text-white" />
          <p className=" text-white text-xs xl:text-base ps-4">
            91-90812 34567 <br /> 91-90809 87654
          </p>
        </div>
        <div className="w-full flex items-center">
          <HiMail className="size-6 text-white" />
          <p className=" text-white text-xs xl:text-base ps-0 lg:ps-4 ">
            mail@hochinternational.com
          </p>
        </div>
        <div className="w-full flex items-center">
          <IoLogoWhatsapp className="size-6  text-white" />
          <p className=" text-white text-xs xl:text-base ps-4">
            91-90812 34567
          </p>
        </div>
        <div className="w-full flex  items-center">
          <FaLocationDot className="size-6 text-white" />
          <p className=" text-white text-xs xl:text-base ps-4">
            2nd Floor, Anns Tower, MG Road <br /> Angamaly, Ernakulam - 682 018
          </p>
        </div>
      </div>
    </div>
    <div className="w-full h-20 bg-white flex justify-between items-center px-20">
        <p className="text-black text-base xl:text-xl">Copyright 2024 - Hoch International</p>
        <p className="text-black text-base xl:text-xl">Powered By <span className="font-[700] antonio " >MCABEE DIGITAL</span> </p>

        


    </div>

  </div>
  );
}

export default Footer;
