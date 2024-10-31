import React from 'react'

function Section5() {
  return (
    <div className='w-full h-full md:h-[540px] bg-[#E6EBF0] flex flex-col md:flex-row px-2 md:px-11 xl:px-28 py-3 md:py-0'>
        <div className='w-full md:w-[40%] flex justify-center flex-col mt-2  '>
         <div className='w-full lg:w-[310px] h-[60px] bg-[#1F2437] text-white flex justify-center items-center'>Our Social Initiative</div> 
         <div>
            <img src='/students.svg'/>
         </div>
        </div>
        <div className= 'w-full md:w-[60%] h-full flex justify-center  flex-col px-4 md:px-8 '>
            <h1 className='text-black font-bold text-2xl xl:text-4xl mt-4 md:mt-16 '>Study Nursing for Free and Secure a Bright Future with Guaranteed Job Placement!</h1>
            <p className='text-black text-xs 2xl:text-base font-light  leading-5 xl:leading-7 pt-2 mt-2 xl:mt-4 pe-0 2xl:pe-14'>we are offering a life-changing opportunity for financially disadvantaged students to pursue their dreams of becoming a nurse – absolutely free of cost. With our unique initiative, you can complete your nursing education without worrying about tuition fees. In return, all we ask is for you to work with one of our partner hospitals for a specific period after graduation, gaining hands-on experience while securing a stable job.<br/>
            Take advantage of this amazing opportunity and step confidently into a rewarding nursing career!</p>
            <p className='text-[#1982FE] text-lg xl:text-xl mt-2 xl:mt-6'>Learn More</p>
        </div>
    </div>
  )
}

export default Section5