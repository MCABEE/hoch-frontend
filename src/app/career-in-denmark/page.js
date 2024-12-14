import React from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/denmark/Section1'
import FAQ from '../components/denmark/FAQ'
import Form from '../components/denmark/Form'
import MainFooter from '../components/MainFooter'

function page() {
  return (
    <div className=' bg-[#FCF5EB] sm:bg-white '>
        <Navbar/>
        <div>
        <Section1/>
        </div>
        <FAQ/>
        <Form/>
       <div className='pt-10'>
       <MainFooter/>
       </div>
        
    </div>
  )
}

export default page