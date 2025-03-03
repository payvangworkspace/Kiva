import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import PolicyBanner from './PolicyBanner'
import PrivacyPolicy from './PrivacyPolicy'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import Loader from './Loader' // Assuming Loader component is available

export const PrivacyPolicySection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Privacy Policy";

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
          <PolicyBanner />
          <PrivacyPolicy />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
