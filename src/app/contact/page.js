import React from 'react'
import Contactus from '../components/Contactus'
import Navbar from '../components/Navbar'

function page() {
  return (
    <div>
        <div>
            <Navbar/>
        </div>
        <div>
        <Contactus/>
        </div>
       
    </div>
  )
}

export default page