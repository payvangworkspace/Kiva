import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Invoice } from './Invoice'
import BusinessCreateAccount from './BusinessCreateAccount'
import Footer from './Footer'
import InvoicingContent from './Invoicecontent'
import Loader from './Loader'

export const InvoiceSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Invoice";

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
          <Invoice />
          <InvoicingContent />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
};
