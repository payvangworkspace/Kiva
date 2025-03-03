import React from 'react'
import Navbar from './Navbar'
import { PaymentGateway } from './PaymentGateway'
import AcceptingPayment from './Acceptingpayment'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'

export const PaymentGatewaySection = () => {
  return (
   <>
   <Navbar/>
   <PaymentGateway/>
   <AcceptingPayment/>
   <CardSlider/>
   <BusinessSection/>
   <RightSection/>
   <LeftSection/>
   <BusinessCreateAccount/>
   <Footer/>

   </>
  )
}
