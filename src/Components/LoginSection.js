import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Login from './Login';
import Loader from './Loader';

export const LoginSection = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "KivaPays - Login";

    // Simulating a delay before loading the login page
    setTimeout(() => {
      setLoading(false);
    }, 1000); // 1 second delay
  }, []);

  return (
    <>
      {loading ? (
        <Loader /> // Show loader while content is loading
      ) : (
        <>
          <Navbar />
          <Login />
        </>
      )}
    </>
  );
};
