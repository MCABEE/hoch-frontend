import React from 'react'
import Contactus from '../components/Contactus'
import Navbar from '../components/Navbar'
import MainFooter from '../components/MainFooter'

function page() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <Contactus/>
        <MainFooter/>
        </div>
       
    </div>
  )
}

export default page