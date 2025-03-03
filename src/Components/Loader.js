import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <RingLoader color="#ff9800" size={100} />
      <h2 style={styles.loaderText}>Loading... Please Wait</h2>
      <div style={styles.progressBarContainer}>
        <div style={styles.progressBar}></div>
      </div>
    </div>
  );
};

const styles = {
  loaderContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "whitesmoke",
    backdropFilter: "blur(10px)",
    color: "#ffcc80",
  },
  loaderText: {
    marginTop: "20px",
    fontSize: "22px",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    letterSpacing: "1px",
    textShadow: "0px 0px 5px rgba(255, 152, 0, 0.8)",
    animation: "fadeIn 1.5s ease-in-out infinite alternate",
  },
  progressBarContainer: {
    width: "250px",
    height: "8px",
    backgroundColor: "#2e2e2e",
    borderRadius: "4px",
    overflow: "hidden",
    marginTop: "15px",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #ff5722, #ff9800)",
    animation: "progress 2s ease-in-out infinite",
  },
};

export default Loader;
