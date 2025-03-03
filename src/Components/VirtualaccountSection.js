import React from 'react'
import Navbar from './Navbar'
import { Virtualaccount } from './Virtualaccount'
import VirtualAccountContent from './ViratualAccountContent'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const ViratualaccountSection = () => {
  return (
   <>
   <Navbar/>
   <Virtualaccount/>
   <VirtualAccountContent/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}