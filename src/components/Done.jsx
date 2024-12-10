import React from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const SuccessPage = () => {
  const navigate = useNavigate(); // Hook for navigation

  const styles = {
    background: {
      backgroundImage: "url('lbg.png')", // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100%",
      width: "100%",
    },
    formWrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      minHeight: "100vh",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(0px)",
      borderRadius: "10px",
      padding: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "400px",
      textAlign: "center", // Center the content
    },
    heading: {
      fontSize: "35px",
      color: "#363100",
      fontWeight: "800",
      marginBottom: "20px",
    },
    logo: {
      width: "50px",
      height: "50px",
      marginBottom: "20px", // Space below the logo
    },
    message: {
      fontSize: "16px",
      color: "#363100",
      fontWeight: "300",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      fontWeight: "700",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      width: "100%",
    },
  };

  const handleContinue = () => {
    navigate("/"); // Use navigate instead of history.push
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          {/* Check mark logo */}
          <img src="success.png" alt="Success" style={styles.logo} />

          {/* Heading */}
          <h2 style={styles.heading}>Successful</h2>

          {/* Success message */}
          <p style={styles.message}>
            Congratulations! Your password has been changed. Click continue to login.
          </p>

          {/* Continue Button */}
          <button style={styles.button} onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
