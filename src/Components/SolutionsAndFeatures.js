import React from 'react'
import Navbar from './Navbar'
import FeatureBanner from './FeatureBanner'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import { useEffect } from 'react'
export const SolutionsAndFeatures = () => {
    useEffect(()=>{
      document.title="KivaPays- Solutions & Features "
    })
  
  return (
 <>
 <Navbar/>
 <FeatureBanner/>
 <CardSlider/>
 <BusinessSection/>
 <RightSection/>
 <LeftSection/>
 <BusinessCreateAccount/>
 <Footer/>
 
 
 </>
  )
}
