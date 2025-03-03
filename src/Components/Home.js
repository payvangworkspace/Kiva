import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import ContactSection from './ContactSection'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import AnimatedStats from './AnimatedStats'
import ModernSection from './ModernSection'
import ClientUnderstanding from './ClientUnderstanding'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import Loader from './Loader'

export const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Home";

    // Simulating a small delay before showing content
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 seconds delay (adjust as needed)
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <>
          <Navbar />
          <HeroSection />
          <ContactSection />
          <CardSlider />
          <BusinessSection />
          <RightSection />
          <LeftSection />
          <AnimatedStats />
          <ModernSection />
          <ClientUnderstanding />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
