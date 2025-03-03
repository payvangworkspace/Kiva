import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import BusinessCreateAccount from './BusinessCreateAccount';
import Footer from './Footer';
import SignUp from './SignUp';
import Loader from './Loader'; // Import the Loader component

const Register = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Register";

    // Simulate a small delay before showing content
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
          <SignUp />
          <BusinessCreateAccount />
          <Footer />
        </>
      )}
    </>
  );
}

export default Register;
