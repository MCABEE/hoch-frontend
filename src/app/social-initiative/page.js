import React from 'react'
import Navbar from '../components/Navbar'
import Nursing from '../components/social_initiative/Nursing'
import Discription from '../components/social_initiative/Discription'
import MainFooter from '../components/MainFooter'

function page() {
  return (
    <div>
      <div>
      <Navbar/>
      </div>
      <div className='px-2 sm:px-4 xl:px-10 2xl:px-20 md:pt-4 xl:pt-8 2xl:pt-16 bg-[#FCF5EB] md:bg-white  '>

      <Nursing/>


      </div>
      <MainFooter/>
      
    </div>
  )
}

export default page