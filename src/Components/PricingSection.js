import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { PricingMiddle } from './PricingMiddle'
import PricingTable from './PricingTable'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import Loader from './Loader' // Assuming Loader component is available

export const PricingSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Pricing";

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
          <PricingMiddle />
          <PricingTable />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
