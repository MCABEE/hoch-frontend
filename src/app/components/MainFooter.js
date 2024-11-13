import React from 'react'
import localFont from 'next/font/local'

const antonio_h1 = localFont({ src: '../utils/assets/AntoniaH1-Regular.woff' })

const antonio_h2 = localFont({ src: '../utils/assets/AntoniaH2-SemiBold.woff' })

function MainFooter() {
  return (
    <div>
<div className="w-full h-10 md:h-20 bg-white flex justify-between items-center px-4 md:px-20">
        <p className={` ${antonio_h1.className} text-black text-[10px] sm:text-xs md:text-base xl:text-xl 3xl:text-2xl`}>Copyright 2024 - Hoch International</p>
        <p className={` ${antonio_h1.className} text-black text-[10px] sm:text-xs md:text-base xl:text-xl 3xl:text-2xl`}>Powered By <span className={` ${antonio_h2.className} font-[700] `} >MCABEE DIGITAL</span> </p>

        


    </div>

    </div>
  )
}

export default MainFooter