import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import ContactUsBanner from "./ContactUsBanner";
import Footer from "./Footer";
import BusinessCreateAccount from "./BusinessCreateAccount";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";
import Loader from "./Loader"; // Assuming Loader component is available

export const ContactUsSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Contact Us";

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
          <ContactUsBanner />
          <ContactSection />
          <ContactForm />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
