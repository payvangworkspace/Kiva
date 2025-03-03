import React from 'react'
import Navbar from './Navbar'
import { PricingMiddle } from './PricingMiddle'
import PricingTable from './PricingTable'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'
export const PricingSection = () => {
    useEffect(()=>{
      document.title="KivaPays -  Pricing"
    })
  
  return (
    <>
    <Navbar/>
<PricingMiddle/>
<PricingTable/>
<BusinessCreateAccount/>
<Footer/>
    
    </>
  )
}
