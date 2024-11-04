import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contactus() {
  return (
    <div className="bg-white">
   <div className="w-full 2xl:p-20">
   <div className="w-full h-full  flex flex-col lg:flex-row gap-0 lg:gap-14 2xl:gap-36 bg-[#E7F0FF] px-5 md:px-12 2xl:py-28 2xl:px-24 pt-5 pb-7 2xl:rounded-[10px] ">
        <div className="w-full">
          <div className="w-full py-5 pb-0 lg:pb-20  2xl:py-28 ">
            <h1 className="text-[21px] md:text-[30px] text-black font-bold px-5 ">
              Contact Us
            </h1>
            <p className=" w-[250px] md:w-full md:text-[24px] text-lg text-black leading-6 px-5 pt-3">
              Have something you want to share with us?
            </p>
            <p className="w-[300px] md:w-full md:text-xl text-sm font-light leading-[18px] text-black px-5 py-4 pb-7 lg:py-0 lg:pb-0">
              You have the power to make us better, and of course, we consider
              the words of encouragement as well. Our customer support team is
              always available to attend you.
            </p>
          </div>

          <div className="w-full h-[206px] bg-[#FFFFFF] rounded-[20px]">
            <h1 className="text-lg md:text-[24px] text-[#FC3657] font-bold py-5 px-6">
              Quick Connect
            </h1>
            <p className="text-sm md:text-[20px] text-black font-bold px-6">
              Phone
            </p>
            <p className="text-sm md:text-[18px] text-black px-6 pt-2">
              91 - 90812 34567, 9080987654
            </p>
            <p className="text-sm md:text-[20px] text-black font-bold px-6 pt-4">
              Whatsapp
            </p>
            <p className="text-sm md:text-[18px] text-black px-6 pt-2">
              91-90812 34567
            </p>
          </div>
        </div>

        <div className="w-full  bg-white rounded-[20px] mt-7 px-0 lg:px-10 2xl:px-20 py-0 lg:py-10 2xl:py-16 ">
          <h1 className="text-[21px] 2xl:text-[36px] font-bold text-black py-5 px-6 ">
            Get in Touch
          </h1>
          <div className=" flex flex-col gap-y-8 lg:gap-5 justify-center items-center px-3  pe-5">
            <input
              type="text"
              placeholder="Full name"
              className="w-full h-[45px] border border-[#BBBBBB] rounded-[15px] ps-3 placeholder:text-black text-black"
            />
            <input
              type="tel"
              maxLength={10}
              placeholder="Mobile Number"
              className="w-full h-[45px] border border-[#BBBBBB] rounded-[15px] ps-3 placeholder:text-black text-black"
            />

            <input
              type="text"
              placeholder="Email ID"
              className="w-full h-[45px] border border-[#BBBBBB] rounded-[15px] ps-3  placeholder:text-black text-black"
            />
            <select
              name="Select Service"
              className="w-full h-[45px] border border-[#BBBBBB] rounded-[15px] ps-3  text-black"
            >
              <option disabled>Select Service</option>
              <option value="volvo">Jobs Abroad</option>
              <option value="volvo">Study Abroad</option>
              <option value="saab">Admissions in India</option>

            </select>
            <textarea
              name="w3review"
              rows="3"
              cols="40"
              placeholder="How can we help you?"
              className="w-full h-[130px] border border-[#BBBBBB] rounded-[15px]  p-3 text-black placeholder:text-black "
            ></textarea>
            <button className="w-full h-[45px] bg-[#1982FE] flex justify-center items-center rounded-2xl text-[16px] font-bold text-white mb-4 hover:bg-[#1984fed3] hover:scale-105 ">
              Submit
            </button>
          </div>
          
        </div>
      </div>
   </div>
      <div className="w-full h-full bg-[#FCF5EB] lg:bg-white px-5 lg:px-12 2xl:px-20 py-5 flex flex-col lg:flex-row ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.8718005957608!2d76.388404!3d10.191065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDExJzI3LjgiTiA3NsKwMjMnMTguMyJF!5e0!3m2!1sen!2sin!4v1730709064162!5m2!1sen!2sin"
          className="w-full xl:w-[1/2] h-[223px] sm:h-[350px]  rounded-[10px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-full xl:h-[1/2] px-2 lg:px-10">
          <div className="py-4">
            <h1 className="text-black font-bold text-2xl pb-2 ">
              Our Location
            </h1>
            <p className="text-black font-bold text-sm md:text-lg pb-2 ">
              Kochi
            </p>
            <p className="text-sm md:text-base font-light text-black leading-[18px]">
              2nd Floor, Anns Tower, MG Road
              <br />
              Angamaly, Ernakulam - 682 018
            </p>
          </div>
          <div>
            <p className="text-black font-bold text-sm pb-2 md:text-lg">
              Bengaluru
            </p>
            <p className="text-sm md:text-base  font-light text-black leading-[18px]">
              2nd Floor, Anns Tower, MG Road
              <br />
              Angamaly, Ernakulam - 682 018
            </p>
          </div>
          <div className="w-full pt-6 text-black flex  gap-4 py-4">
            <FaFacebookSquare className="size-7 cursor-pointer hover:scale-110" />
            <PiInstagramLogoFill className="size-[30px] cursor-pointer hover:scale-110" />
            <FaLinkedin className="size-[26px] cursor-pointer hover:scale-110" />
            <FaYoutube className="size-7 cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="w-full h-[31px] px-5 md:px-10 flex items-center bg-white justify-between">
        <p className="font-light text-xs">
          Copyright 2024 - Hoch International
        </p>
        <p className="font-light text-xs ">
          Powered by <span className="font-bold">MCABEE DIGITAL</span>
        </p>
      </div>
    </div>
  );
}

export default Contactus;
