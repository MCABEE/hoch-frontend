



import React from 'react';

function Section1() {
  return (
    <div className="w-full p-3 relative 3xl:p-[80px]">
      {/* Cover Image */}
      <img 
        src="denmark.svg" 
        alt="Career in Denmark" 
        className="w-full h-auto rounded-t-lg drop-shadow-2xl object-cover" 
      />

      {/* Heading */}
      <h1 
        className="tinos-bold text-[#F5F5F5] text-[21px] sm:text-[31px] lg:text-[60px] xl:text-[80px] 2xl:text-[100px] 3xl:text-[116px] font-bold absolute 
                   top-28 sm:top-44 md:top-52 lg:top-64 xl:top-80 2xl:top-96 3xl:top-[500px]
                   left-12 sm:left-20 md:left-28 xl:left-36 2xl:left-44 3xl:left-56
                   leading-5 sm:leading-8 lg:leading-[50px] xl:leading-[70px] 2xl:leading-[80px] 3xl:leading-[100px]"
      >
        Career <br />
        in Denmark
      </h1>
    </div>
  );
}

export default Section1;
