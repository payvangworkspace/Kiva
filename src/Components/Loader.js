import React from "react";
import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={styles.loaderContainer}>
      <RingLoader color="#2196F3" size={80} />
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
    backgroundColor: "#f4f7fb", // Soft off-white background
    color: "#2196F3", // Soft blue color for consistency
    fontFamily: "'Segoe UI', sans-serif", // Clean, modern font
    textAlign: "center",
    padding: "20px",
    boxSizing: "border-box",
  },
  loaderText: {
    marginTop: "20px",
    fontSize: "20px",
    fontWeight: "400",
    color: "#333", // Darker text for readability
    letterSpacing: "0.8px",
    animation: "fadeIn 1.5s ease-in-out infinite alternate",
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
  },
  progressBarContainer: {
    width: "250px",
    height: "6px",
    backgroundColor: "#e3f2fd", // Light blue background shade
    borderRadius: "30px",
    marginTop: "30px",
    overflow: "hidden",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
  },
  progressBar: {
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #2196F3, #64b5f6)", // Fresh blue gradient
    animation: "progress 2s ease-in-out infinite",
  },
};

// CSS Animations
const styleSheet = document.styleSheets[0];

styleSheet.insertRule(`
  @keyframes fadeIn {
    0% { opacity: 0.4; }
    100% { opacity: 1; }
  }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
  @keyframes progress {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`, styleSheet.cssRules.length);

export default Loader;
