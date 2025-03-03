import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { PaymentGateway } from './PaymentGateway'
import AcceptingPayment from './Acceptingpayment'
import CardSlider from './CardSlider'
import BusinessSection from './BusinessSection'
import RightSection from './RightSection'
import LeftSection from './LeftSection'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import Loader from './Loader'

export const PaymentGatewaySection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Payment Gateway";

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
          <PaymentGateway />
          <AcceptingPayment />
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
