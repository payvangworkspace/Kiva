import React from 'react'
import Navbar from './Navbar'
import { DeveloperBanner } from './DeveloperBanner'
import IntegrationSection from './IntegrationSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'
export const DeveloperSection = () => {
      useEffect(()=>{
          document.title="KivaPays -  Developers"
        })
  return (
<>
<Navbar/>
<DeveloperBanner/>
<IntegrationSection/>
<BusinessCreateAccount/>
<Footer/>
 
</>
  )
}