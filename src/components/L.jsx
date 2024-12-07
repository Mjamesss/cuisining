import React, { useState } from "react";

const LoginForm = () => {
  const [focus, setFocus] = useState({ username: false, password: false });

  const styles = {
    body: {
      margin: 0,
      padding: 0,
      height: "100%",
      width: "100%",
    },
    background: {
      backgroundImage: "url('lbg.png')",
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
      height: "100vh",
      padding: "20px", // Add padding for smaller screens
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      borderRadius: "10px",
      padding: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "100%",
      maxWidth: "500px",
      boxSizing: "border-box",
    },
    inputWrapper: {
      position: "relative",
      marginBottom: "20px",
    },
    label: (focused) => ({
      position: "absolute",
      left: "10px",
      top: focused ? "-10px" : "50%",
      fontSize: focused ? "12px" : "16px",
      color: "#363100",
      transition: "all 0.3s ease",
      transform: focused ? "translateY(0)" : "translateY(-50%)",
      padding: "0 5px",
    }),
    input: {
      width: "100%",
      padding: "10px",
      border: "1px solid transparent",
      borderRadius: "10px",
      outline: "none",
      backgroundColor: "#f8f8f8",
      transition: "all 0.3s ease",
      fontSize: "16px",
    },
    inputFocused: {
      border: "1px solid #ffffff",
      boxShadow: "0 0 8px rgba(193, 184, 87, 0.5)",
      backgroundColor: "#fff",
    },
    button: {
      width: "100%",
      padding: "15px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
      fontSize: "16px",
    },
    forgotPassword: {
      display: "block",
      textAlign: "center",
      fontSize: "14px",
      color: "#363100",
      marginTop: "10px",
      textDecoration: "none",
      fontWeight: "300",
    },
    socialButtonsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
      marginTop: "20px",
    },
    socialButtonImg: {
      width: "100%",
      maxWidth: "40px",
      height: "auto",
      borderRadius: "10px",
      cursor: "pointer",
    },
    signup: {
      justifyContent: "center",
      display: "flex",
      marginTop: "20px",
    },
    signupText: {
      fontSize: "14px",
      fontWeight: "200",
      color: "#363100",
    },
    signupLink: {
      textDecoration: "none",
      fontWeight: "700",
      color: "#363100",
    },
    // Add responsive design
    "@media (max-width: 768px)": {
      formContainer: {
        padding: "15px",
        maxWidth: "90%",
      },
      button: {
        padding: "12px",
        fontSize: "14px",
      },
      label: {
        fontSize: "14px",
      },
    },
    "@media (max-width: 480px)": {
      h2: {
        fontSize: "50px",
      },
      input: {
        fontSize: "14px",
      },
      button: {
        fontSize: "14px",
        padding: "10px",
      },
      forgotPassword: {
        fontSize: "12px",
      },
    },
  };
  

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <form>
            <h2 style={{ textAlign: "center", fontSize: "70px", color: "#363100", fontWeight: "800" }}>
              <span>
                <img src="cuisining-wordmark.png" alt="C" style={{ height: "60px", width: "60px", marginBottom: "10px" }} />
              </span>
              UISINING
            </h2>
            {/* Username Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.username)}>Username</label>
              <input
                type="text"
                style={{
                  ...styles.input,
                  ...(focus.username && styles.inputFocused), // Apply focused styles
                }}
                onFocus={() => handleFocus("username")}
                onBlur={(e) => handleBlur("username", e.target.value)}
              />
            </div>
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.password)}>Password</label>
              <input
                type="password"
                style={{
                  ...styles.input,
                  ...(focus.password && styles.inputFocused), // Apply focused styles
                }}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
              />
            </div>
            <button type="submit" style={styles.button}>Login</button>
            <a href="#" className="forgot-password" style={styles.forgotPassword}>
              Forgot Password?
            </a>
            <hr />
            <div style={styles.socialButtonsContainer}>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img src="facebook.png" alt="Facebook Login" style={styles.socialButtonImg} />
              </a>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img src="google.png" alt="Google Login" style={styles.socialButtonImg} />
              </a>
            </div>
            <div style={styles.signup}>
              <p style={styles.signupText}>
                New to Cuisining? <a href="/signup" style={styles.signupLink}>Sign Up</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
