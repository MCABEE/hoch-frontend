import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Contactus() {
  return (
    <div className="bg-white">
      <div className="w-full 2xl:p-20 3xl:pb-10">
        <div className="w-full h-full  flex flex-col lg:flex-row gap-0 lg:gap-14 2xl:gap-36 bg-[#E7F0FF] px-5 md:px-12 2xl:py-28 2xl:px-24 3xl:pt-9 pt-5 pb-7 2xl:rounded-[10px] ">
          <div className="w-full 3xl:w-[45%]">
            <div className="w-full py-5 pb-0 lg:pb-20  2xl:py-28 3xl:pe-10  ">
              <h1 className="text-[21px] md:text-[30px] 3xl:text-[48px] text-black font-bold px-5 ">
                Contact Us
              </h1>
              <p className=" w-[250px] md:w-full md:text-[24px] 3xl:text-[30px] text-lg text-black leading-6 3xl:leading-[27px] px-5 pt-3">
                Have something you want to share with us?
              </p>
              <p className="w-[300px] md:w-full md:text-xl text-sm 3xl:text-2xl font-light leading-[18px] text-black px-5 py-4 3xl:pb-0 pb-7 3xl:pt-5 lg:py-0 lg:pb-0 ">
                You have the power to make us better, and of course, we consider
                the words of encouragement as well. Our customer support team is
                always available to attend you.
              </p>
            </div>

            <div className="w-full  bg-[#FFFFFF] rounded-[20px] p-4">
              <h1 className="text-lg md:text-[24px] text-[#FC3657] font-bold py-5 px-6 ">
                Quick Connect
              </h1>
              <p className="text-sm md:text-[20px] 3xl:text-[24px] text-black font-bold px-6">
                Phone
              </p>
              <p className="text-sm md:text-[18px] 3xl:text-[24px] text-black px-6 pt-2 3xl:pt-3">
                91 - 90812 34567, 9080987654
              </p>
              <p className="text-sm md:text-[20px] 3xl:text-[24px] text-black font-bold px-6 pt-4 3xl:pt-6">
                Whatsapp
              </p>
              <p className="text-sm md:text-[18px] 3xl:text-[24px] text-black px-6 pt-2 3xl:pt-3">
                91-90812 34567
              </p>
              <p className="text-sm md:text-[20px] 3xl:text-[24px] text-black font-bold px-6 pt-4 3xl:pt-6">
                Email
              </p>
              <p className="text-sm md:text-[18px] 3xl:text-[24px] text-black px-6 pt-2 3xl:pt-3 pb-8">
                mail@hochinternational.com
              </p>
            </div>
          </div>

          <div className="w-full 3xl:w-[55%] 3xl:ps-44 3xl:pt-16">
            <div className=" 3xl:w-[600px] bg-white rounded-[20px] mt-7 px-0 lg:px-10 2xl:px-20  py-6 lg:py-10 2xl:py-16 3xl:pb-20 3xl:pt-14 ">
              <h1 className="text-[21px] 2xl:text-[36px] font-bold text-black py-5 3xl:py-0 3xl:px-2 px-6  3xl:pb-4">
                Get in Touch
              </h1>
              <div className=" flex flex-col gap-y-3 sm:gap-y-8 lg:gap-5 justify-center items-center px-3 3xl:px-2  pe-5">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full h-[45px] 3xl:h-[50px] border border-[#BBBBBB] rounded-[15px] ps-3 placeholder:text-black placeholder:font-light text-black"
                />
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Mobile Number"
                  className="w-full h-[45px] 3xl:h-[50px] border border-[#BBBBBB] rounded-[15px] ps-3 placeholder:text-black placeholder:font-light text-black"
                />

                <input
                  type="text"
                  placeholder="Email ID"
                  className="w-full h-[45px] 3xl:h-[50px] border border-[#BBBBBB] rounded-[15px] ps-3  placeholder:text-black placeholder:font-light text-black"
                />
                <select
                  name="Select Service"
                   defaultValue="Select Service"
                  className="w-full h-[45px] 3xl:h-[50px] border border-[#BBBBBB] rounded-[15px] ps-3  text-black "
                >
                  {/* <option disabled selected className="font-light">
                    Select Service
                  </option> */}
                  <option value="volvo">Jobs Abroad</option>
                  <option value="volvo">Study Abroad</option>
                  <option value="saab">Admissions in India</option>
                </select>
                <textarea
                  name="w3review"
                  rows="3"
                  cols="40"
                  placeholder="How can we help you?"
                  className="w-full h-[130px] border border-[#BBBBBB] rounded-[15px]  p-3 text-black placeholder:text-black placeholder:font-light "
                ></textarea>
                <button className="w-full h-[45px] bg-[#1982FE] flex justify-center items-center rounded-2xl text-[16px] font-bold text-white mb-4 hover:bg-[#1984fed3] hover:scale-105 ">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full bg-[#FCF5EB] lg:bg-white px-5 lg:px-12 2xl:px-20 py-5  flex flex-col lg:flex-row ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3926.8718005957608!2d76.388404!3d10.191065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDExJzI3LjgiTiA3NsKwMjMnMTguMyJF!5e0!3m2!1sen!2sin!4v1730709064162!5m2!1sen!2sin"
          className="w-full xl:w-[1/2]  h-[223px] sm:h-[350px] 3xl:h-[470px] rounded-[10px] 3xl:ms-20"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="w-full  xl:h-[1/2] px-2 lg:px-10 3xl:px-20 ">
          <div className="py-4">
            <h1 className="text-black font-bold text-2xl 3xl:text-[36px] 3xl:pt-4 pb-2 3xl:pb-8 ">
              Our Location
            </h1>
            <p className="text-black font-bold text-sm md:text-lg 3xl:text-[24px] pb-2 3xl:pb-5 ">
              Kochi
            </p>
            <p className="text-sm md:text-base 3xl:text-[24px] font-light text-black  leading-[18px] 3xl:pb-8">
              2nd Floor, Anns Tower, MG Road
              <br />
              Angamaly, Ernakulam - 682 018
            </p>
          </div>
          <div>
            <p className="text-black font-bold text-sm pb-2 md:text-lg 3xl:text-[24px] 3xl:pb-5">
              Bengaluru
            </p>
            <p className="text-sm md:text-base 3xl:text-[24px]  font-light text-black leading-[18px]">
              1st Main, 2nd Cross, Bannerghatta Rd, behind
              <br /> Apollo Hospital, Venkatadri Layout, Bengaluru,
              <br /> Karnataka 560076
            </p>
          </div>
          <div className="w-full pt-6 text-black flex 3xl:pt-20 gap-4 py-4">
            <FaFacebookSquare className="size-7 cursor-pointer hover:scale-110" />
            <PiInstagramLogoFill className="size-[30px] cursor-pointer hover:scale-110" />
            <FaLinkedin className="size-[26px] cursor-pointer hover:scale-110" />
            <FaYoutube className="size-7 cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
