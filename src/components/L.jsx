import React, { useState } from "react";

const LoginForm = () => {
  const [focus, setFocus] = useState({
    username: false,
    password: false,
  });

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

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
    },
    inputFocused: {
      border: "1px solid #C1B857",
      boxShadow: "0 0 8px rgba(193, 184, 87, 0.5)",
      backgroundColor: "#fff",
    },
    button: {
      width: "100%",
      padding: "10px",
      margin: "10px 0",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
    },
    hrContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px 0",
    },
    hr: {
      flex: 1,
      height: "1px",
      backgroundColor: "#000000",
      border: "none",
    },
    orText: {
      margin: "0 10px",
      fontSize: "16px",
      color: "#363100",
      fontWeight: "300",
    },
    socialButtonsContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
    socialButtonImg: {
      width: "100%",
      maxWidth: "45px",
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
    heading: {
      textAlign: "center",
      fontSize: "35px", // Reduced size for mobile
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
    },
    headingLogo: {
      height: "40px", // Reduced size for mobile
      width: "40px",
      marginBottom: "10px",
    },
    showPasswordButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
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
            <h2 style={styles.heading}>CUISINING</h2>
            {/* Username Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.username)}>Username</label>
              <input
                type="text"
                style={{
                  ...styles.input,
                  ...(focus.username && styles.inputFocused),
                }}
                onFocus={() => handleFocus("username")}
                onBlur={(e) => handleBlur("username", e.target.value)}
              />
            </div>
            {/* Password Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.password)}>Password</label>
              <input
                type={showPassword ? "text" : "password"} // Toggle password visibility
                style={{
                  ...styles.input,
                  ...(focus.password && styles.inputFocused),
                }}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
              />
              {/* Show/Hide Password Button */}
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
              >
                <img
                  src={showPassword ? "view.png" : "hide.png"} // Change image based on state
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  style={{ width: "20px", height: "20px" }} // Adjust size of the icon
                />
              </button>
            </div>
            <button type="submit" style={styles.button}>
              Log In
            </button>
            {/* Divider */}
            <div style={styles.hrContainer}>
              <hr style={styles.hr} />
              <span style={styles.orText}>or</span>
              <hr style={styles.hr} />
            </div>
            {/* Social Media Buttons */}
            <div style={styles.socialButtonsContainer}>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img
                  src="facebook.png"
                  alt="Facebook Login"
                  style={styles.socialButtonImg}
                />
              </a>
              <a href="#" className="social-button" style={styles.socialButtonImg}>
                <img
                  src="google.png"
                  alt="Google Login"
                  style={styles.socialButtonImg}
                />
              </a>
            </div>
            <div style={styles.signup}>
              <p style={styles.signupText}>
                Don't Have an Account?{" "}
                <a href="/signup" style={styles.signupLink}>
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
