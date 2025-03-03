import React from "react";
import Navbar from "./Navbar";
import ContactUsBanner from "./ContactUsBanner";
import Footer from "./Footer";
import BusinessCreateAccount from "./BusinessCreateAccount";
import ContactSection from "./ContactSection";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

export const ContactUsSection = () => {
      useEffect(()=>{
          document.title="KivaPays -  Contact Us"
        })
  return (
    <>
      <Navbar />
      <ContactUsBanner />
      <ContactSection/>
      <ContactForm/>
      <BusinessCreateAccount/>
      <Footer />
    </>
  );
};


