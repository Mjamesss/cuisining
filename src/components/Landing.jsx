import React, { useState } from "react";

const SignUpForm = () => {
  const [focus, setFocus] = useState({
    name: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirming password visibility
  const [usernameTaken, setUsernameTaken] = useState(""); // State to handle username availability
  const [passwordError, setPasswordError] = useState(""); // State for password validation error

  // Simulate checking if a username is taken (replace with backend call if needed)
  const checkUsernameAvailability = (username) => {
    const takenUsernames = ["user1", "admin"]; // Example taken usernames
    if (takenUsernames.includes(username)) {
      setUsernameTaken("Username is already taken");
    } else {
      setUsernameTaken("Username is available");
    }
  };

  // Password validation
  const validatePassword = (password) => {
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
    if (field === "password") validatePassword(value); // Validate password on blur
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
    showPasswordButton: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      background: "transparent",
      border: "none",
      cursor: "pointer",
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
    passwordError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  };

  return (
    <p>Home</p>
  );
};

export default SignUpForm;
