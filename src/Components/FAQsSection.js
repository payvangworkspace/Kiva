import React from 'react'
import Navbar from './Navbar'
import { Faqs } from './Faqs'
import FaqMiddle from './FaqMiddle'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'

export const FAQsSection = () => {
    useEffect(()=>{
      document.title="KivaPays- FAQ's "
    })
  
  return (
   <>
   <Navbar/>
   <Faqs/>
   <FaqMiddle/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}
