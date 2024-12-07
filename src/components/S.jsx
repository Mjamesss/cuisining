import React, { useState } from "react";

const SignUpForm = () => {
  const [focus, setFocus] = useState({
    name: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

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
      height: "100vh",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.7)",
      backdropFilter: "blur(0px)",
      WebkitBackdropFilter: "blur(0px)",
      borderRadius: "10px",
      padding: "25px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "500px",
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
      gap: "30px",
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
      marginTop: "30px",
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
            {/* Name Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.name)}>Name</label>
              <input
                type="text"
                style={{
                  ...styles.input,
                  ...(focus.name && styles.inputFocused),
                }}
                onFocus={() => handleFocus("name")}
                onBlur={(e) => handleBlur("name", e.target.value)}
              />
            </div>
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
                type="password"
                style={{
                  ...styles.input,
                  ...(focus.password && styles.inputFocused),
                }}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
              />
            </div>
            {/* Confirm Password Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.confirmPassword)}>Confirm Password</label>
              <input
                type="password"
                style={{
                  ...styles.input,
                  ...(focus.confirmPassword && styles.inputFocused),
                }}
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
              />
            </div>
            <button type="submit" style={styles.button}>Sign Up</button>
            {/* Divider */}
            <div style={styles.hrContainer}>
              <hr style={styles.hr} />
              <span style={styles.orText}>or</span>
              <hr style={styles.hr} />
            </div>
            {/* Social Media Buttons */}
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
                  Already Have an Account? <a href="/" style={styles.signupLink}>Log In</a>
                </p>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
