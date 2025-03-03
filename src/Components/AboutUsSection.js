import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AboutUsBanner from "./AboutUsBanner"; // Make sure this is correctly exported
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import BusinessCreateAccount from "./BusinessCreateAccount";
import Loader from "./Loader"; // Assuming Loader component is available

export const AboutUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - About Us";

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
          <AboutUsBanner />
          <AboutUs />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
