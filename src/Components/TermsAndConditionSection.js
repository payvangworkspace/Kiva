import React from 'react'
import Navbar from './Navbar'
import { TermsAndConditionBanner } from './TermsAndConditionBanner'
import TermsAndConditions from './TermsAndConditions'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'
export const TermsAndConditionSection = () => {
     useEffect(()=>{
        document.title="KivaPays -  Terms & Conditions"
      })
  return (
  <>
  <Navbar/>
  <TermsAndConditionBanner/>
  <TermsAndConditions/>
  <BusinessCreateAccount/>
  <Footer/>
  </>
  )
}
