import React from 'react'
import Navbar from './Navbar'
import { Whitelabel } from './Whitelabel'
import WhitelabelContent from './WhitelabelContent'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const WhitelabelSection = () => {
  return (
   <>
   <Navbar/>
   <Whitelabel/>
   <WhitelabelContent/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}