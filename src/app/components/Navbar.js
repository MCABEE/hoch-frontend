// import React from "react";
// import { HiMail } from "react-icons/hi";
// import { FaPhoneAlt } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";



// function Navbar() {
//   return (
//     <div className="w-full ">
//       <div className="w-full px-8 xl:px-12 flex justify-between">
//       <div className="w-[20%] md-[30%] xl:w-[45%] p-2">
//         <img src="/logo1.svg" className="w-[160px]"/>
//       </div>

//       <div className="w-[80%] md:w-[70%] xl:w-[60%] flex justify-center items-center">
//         <div className="w-full flex justify-center items-center">
//           <HiMail className="size-4 xl:size-6" />
//           <p className=" text-black text-xs lg:text-lg ps-4 ">mail@hochinternational.com</p>
//         </div>
//         <div className="w-full flex justify-center items-center">
//        <FaPhoneAlt className="size-4 xl:size-6"/><p className=" text-black text-xs lg:text-lg ps-4">91-90812 34567 <br/> 91-90809 87654</p>
//         </div>
//         <div className="w-full flex justify-center items-center">
//         <IoLogoWhatsapp className="size-4 xl:size-7"/><p className=" text-black text-xs  lg:text-lg ps-4" >91-90812 34567</p>
//         </div>
//       </div>
//     </div>
//     <div className="bg-[#1C1C1C] w-full h-[65px] flex justify-center items-center px-6 ">
//       <ul className=" w-full flex justify-evenly items-center cursor-pointer" >
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light ">HOME</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110  text-[13px] lg:text-[18px] font-light">STUDY ABROAD</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">STUDY INDIA</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">JOB ABROAD</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">MIGRATION</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">ABOUT</li>
//         <li className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">CONTACT</li>
       
//       </ul>
//     </div>
//     </div>
//   );
// }

// export default Navbar;



// "use client";
// import React, { useState } from "react";
// import { HiMail } from "react-icons/hi";
// import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
// import { IoLogoWhatsapp } from "react-icons/io";

// function Navbar() {
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <div className="w-full">
//       {/* Header section */}
//       <div className="w-full px-8 xl:px-12 flex justify-between items-center">
//         <div className="w-[20%] md:w-[30%] xl:w-[45%] p-2">
//           <img src="/logo1.svg" className="w-[160px]" alt="Logo" />
//         </div>

//         {/* Contact Information - hidden on small screens */}
//         <div className="hidden md:flex w-[80%] md:w-[70%] xl:w-[60%] justify-center items-center">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center">
//               <HiMail className="size-4 xl:size-6" />
//               <p className="text-black text-xs lg:text-lg ps-4">mail@hochinternational.com</p>
//             </div>
//             <div className="flex items-center">
//               <FaPhoneAlt className="size-4 xl:size-6" />
//               <p className="text-black text-xs lg:text-lg ps-4">91-90812 34567 <br /> 91-90809 87654</p>
//             </div>
//             <div className="flex items-center">
//               <IoLogoWhatsapp className="size-4 xl:size-7" />
//               <p className="text-black text-xs lg:text-lg ps-4">91-90812 34567</p>
//             </div>
//           </div>
//         </div>

//         {/* Drawer toggle button */}
//         <div className="md:hidden">
//           <button onClick={toggleDrawer} className="text-black text-2xl">
//             {drawerOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>
//       </div>

//       {/* Main Navigation Bar for larger screens */}
//       <div className="hidden md:flex bg-[#1C1C1C] w-full h-[65px] justify-center items-center px-6">
//         <ul className="w-full flex justify-evenly items-center cursor-pointer">
//           {["HOME", "STUDY ABROAD", "STUDY INDIA", "JOB ABROAD", "MIGRATION", "ABOUT", "CONTACT"].map((item) => (
//             <li key={item} className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* App Drawer for small screens */}
//       <div
//         className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#1C1C1C] h-full p-6 transform transition-transform duration-300 ease-in-out ${
//           drawerOpen ? "translate-x-0" : "translate-x-full"
//         } z-40`}
//       >
//         {/* Close Button */}
//         <button onClick={toggleDrawer} className="text-white text-2xl absolute top-4 right-4">
//           <FaTimes />
//         </button>

//         <ul className="space-y-4 text-white mt-8">
//           {["HOME", "STUDY ABROAD", "STUDY INDIA", "JOB ABROAD", "MIGRATION", "ABOUT", "CONTACT"].map((item) => (
//             <li key={item} className="hover:text-gray-300 text-lg font-light">
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Contact Information inside Drawer */}
//         <div className="mt-8 space-y-4 text-white border-t-[1px] border-gray-400 py-4">
//           <div className="flex items-center">
//             <HiMail className="size-4" />
//             <p className="text-white text-sm ps-4">mail@hochinternational.com</p>
//           </div>
//           <div className="flex items-center">
//             <FaPhoneAlt className="size-4" />
//             <p className="text-white text-sm ps-4">91-90812 34567 <br /> 91-90809 87654</p>
//           </div>
//           <div className="flex items-center">
//             <IoLogoWhatsapp className="size-4" />
//             <p className="text-white text-sm ps-4">91-90812 34567</p>
//           </div>
//         </div>
//       </div>

//       {/* Overlay for the drawer */}
//       {drawerOpen && (
//         <div
//           className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
//           onClick={toggleDrawer}
//         ></div>
//       )}
//     </div>
//   );
// }

// export default Navbar;





"use client";
import React, { useState } from "react";
import { HiMail } from "react-icons/hi";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Navigation links with text and URL
  const navItems = [
    { name: "HOME", link: "/" },
    { name: "STUDY ABROAD", link: "" },
    { name: "STUDY INDIA", link: "" },
    { name: "JOB ABROAD", link: "" },
    { name: "MIGRATION", link: "" },
    { name: "ABOUT", link: "" },
    { name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="w-full">
      {/* Header section */}
      <div className="w-full px-8 xl:px-12 flex justify-between items-center">
        <div className="w-[20%] md:w-[30%] xl:w-[45%] p-2">
          <img src="/logo1.svg" className="w-[160px]" alt="Logo" />
        </div>

        {/* Contact Information - hidden on small screens */}
        <div className="hidden md:flex w-[80%] md:w-[70%] xl:w-[60%] justify-center items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <HiMail className="size-4 xl:size-6" />
              <p className="text-black text-xs lg:text-lg ps-4">mail@hochinternational.com</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="size-4 xl:size-6" />
              <p className="text-black text-xs lg:text-lg ps-4">91-90812 34567 <br /> 91-90809 87654</p>
            </div>
            <div className="flex items-center">
              <IoLogoWhatsapp className="size-4 xl:size-7" />
              <p className="text-black text-xs lg:text-lg ps-4">91-90812 34567</p>
            </div>
          </div>
        </div>

        {/* Drawer toggle button */}
        <div className="md:hidden">
          <button onClick={toggleDrawer} className="text-black text-2xl">
            {drawerOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Main Navigation Bar for larger screens */}
      <div className="hidden md:flex bg-[#1C1C1C] w-full h-[65px] justify-center items-center px-6">
        <ul className="w-full flex justify-evenly items-center cursor-pointer">
          {navItems.map((item) => (
            <li key={item.name} className="text-white hover:text-gray-300 hover:scale-110 text-[13px] lg:text-[18px] font-light">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* App Drawer for small screens */}
      <div
        className={`fixed top-0 right-0 w-[75%] sm:w-[60%] bg-[#1C1C1C] h-full p-6 transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        } z-40`}
      >
        {/* Close Button */}
        <button onClick={toggleDrawer} className="text-white text-2xl absolute top-4 right-4">
          <FaTimes />
        </button>

        <ul className="space-y-4 text-white mt-8">
          {navItems.map((item) => (
            <li key={item.name} className="hover:text-gray-300 text-lg font-light">
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>

        {/* Contact Information inside Drawer */}
        <div className="mt-8 space-y-4 text-white border-t-[1px] border-gray-400 py-4">
          <div className="flex items-center">
            <HiMail className="size-4" />
            <p className="text-white text-sm ps-4">mail@hochinternational.com</p>
          </div>
          <div className="flex items-center">
            <FaPhoneAlt className="size-4" />
            <p className="text-white text-sm ps-4">91-90812 34567 <br /> 91-90809 87654</p>
          </div>
          <div className="flex items-center">
            <IoLogoWhatsapp className="size-4" />
            <p className="text-white text-sm ps-4">91-90812 34567</p>
          </div>
        </div>
      </div>

      {/* Overlay for the drawer */}
      {drawerOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-30"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
