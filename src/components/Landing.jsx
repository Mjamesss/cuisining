//Bands
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const SuccessPage = () => {
  const [email, setEmail] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false); // Track if email was submitted
  const [errorMessage, setErrorMessage] = useState(""); // Track error messages
  const navigate = useNavigate(); // Hook for navigation

  
  const handleForgotPassword = (e) => {
    e.preventDefault();

    // Simple email validation for the sake of example (you can adjust the regex to be more thorough)
    const emailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (emailRegex.test(email)) {
      setIsEmailSubmitted(true); // Email is valid, show success message
      setErrorMessage(""); // Clear error message if valid email
    } else {
      setErrorMessage("Please enter a valid Gmail address.");
      setIsEmailSubmitted(false); // Don't show success if email is invalid
    }

    // Logic for password recovery would go here (e.g., send email to server)
    console.log("Password recovery requested for email:", email);
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/"); // Redirect to login page or home page
  };
  

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
    input: {
      padding: "10px",
      borderRadius: "10px",
      border: "1px solid #C1B857",
      width: "100%",
      fontSize: "16px",
      marginBottom: "20px",
    },
    logoutButton: {
      padding: "10px 20px",
      borderRadius: "10px",
      backgroundColor: "#FF4D4D",
      color: "white",
      fontWeight: "700",
      cursor: "pointer",
      border: "none",
      fontSize: "16px",
      width: "100%",
      marginTop: "20px", // Space for logout button
    },
    successMessage: {
      fontSize: "18px",
      color: "green",
      marginTop: "20px",
    },
    errorMessage: {
      fontSize: "18px",
      color: "red",
      marginTop: "20px",
    },
  };

  
  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          {/* Check mark logo */}
          <img src="cuisining-wordmark.png" alt="Success" style={styles.logo} />

          {/* Heading */}
          <h2 style={styles.heading}>Successful naka log in</h2>

          {/* Success message */}
          <p style={styles.message}>
            Welcome sa luto luto
          </p>

          {/* Forgot Password Form */}
          {!isEmailSubmitted ? (
            <form onSubmit={handleForgotPassword}>
              <input
                type="email"
                placeholder="Enter your Gmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.input}
                required
              />
              <button type="submit" style={styles.button}>
                Submit for Password Reset
              </button>
            </form>
          ) : (
            // Show success message after email is submitted
            <p style={styles.successMessage}>
              A recovery email has been sent to {email}. Please check your inbox.
            </p>
          )}

          {/* Show error message if email is invalid */}
          {errorMessage && <p style={styles.errorMessage}>{errorMessage}</p>}

          {/* Logout Button */}
          <button onClick={handleLogout} style={styles.logoutButton}>
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;