import React from 'react'
import Navbar from './Navbar'
import PolicyBanner from './PolicyBanner'
import PrivacyPolicy from './PrivacyPolicy'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'
export const PrivacyPolicySection = () => {
      useEffect(()=>{
          document.title="KivaPays -  Privacy Policy"
        })
  return (
<>
<Navbar/>
<PolicyBanner/>
<PrivacyPolicy/>
<BusinessCreateAccount/>
<Footer/>
</>
  )
}
