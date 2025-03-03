import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import FeatureBanner from './FeatureBanner'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import Loader from './Loader' // Assuming Loader component is available

export const SolutionsAndFeatures = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Solutions & Features";

    // Simulating a small delay before showing content
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay (adjust as needed)
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <>
          <Navbar />
          <FeatureBanner />
          <CardSlider />
          <BusinessSection />
          <RightSection />
          <LeftSection />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
