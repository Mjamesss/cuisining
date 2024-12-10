import React, { useState } from "react";
import axios from "axios"; // Install axios for API requests
import { useNavigate } from "react-router-dom"; // Import useNavigate


//Manwel
const SignUpForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [focus, setFocus] = useState({
    name: false,
    username: false,
    password: false,
    confirmPassword: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [usernameTaken, setUsernameTaken] = useState("");
  const [usernameError, setUsernameError] = useState(""); // State for username error
  const [passwordError, setPasswordError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  
  // Check availability only if username is 4 characters or more
  const checkUsernameAvailability = (username) => {
    if (username.length >= 4) {
      const takenUsernames = ["user1", "admin"];
      if (takenUsernames.includes(username)) {
        setUsernameTaken("Username is already taken");
      } else {
        setUsernameTaken("Username is available");
      }
    }
  };


  // Username length validation (min 4 characters)
  //Antonio
  const validateUsername = (username) => {
    if (username.length < 4) {
      return "Username must be at least 4 characters long.";
    }
    return ""; // Return an empty string if valid
  };
  //data validation ng password
  const validatePassword = (password) => {
    const passwordLength = password.length >= 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!passwordLength) {
      return "Password must be at least 6 characters long.";
    } else if (!hasUpperCase || !hasLowerCase) {
      return "Password must contain both uppercase and lowercase letters.";
    } else if (!hasNumbers) {
      return "Password must contain at least one number.";
    } else if (!hasSpecialChars) {
      return "Password must contain at least one special character.";
    }

    return ""; // Return an empty string if valid
  };
  //blur function ng placeholder
  const handleFocus = (field) => setFocus((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value) setFocus((prev) => ({ ...prev, [field]: false }));
    if (field === "username") setUsernameError(validateUsername(value)); // Validate username length
    if (field === "password") setPasswordError(validatePassword(value)); // Validate password
  };

  //Shawn
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate password before submitting
    const passwordError = validatePassword(formData.password);
    if (passwordError) {
      setPasswordError(passwordError);
      return; // Prevent form submission if password is invalid
    }
  
    // Validate username length
    const usernameError = validateUsername(formData.username);
    if (usernameError) {
      setUsernameError(usernameError);
      return; // Prevent form submission if username is invalid
    }
  
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }
    //eto ung fucntion na kung tama ung info mag nanavigate sa ./DoneRegister
    try {
      const response = await axios.post("http://localhost:5000/api/signup", formData);
      console.log("Signup successful", response.data); // Log the response for debugging
      navigate("/DoneRegister"); // Navigate to DoneRegister
    } catch (error) {
      console.error("Signup error:", error); // Log error details
      setErrorMessage(error.response?.data?.message || "An error occurred during signup.");
    }
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
    usernameError: {
      color: "red",
      fontSize: "12px",
      marginTop: "5px",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <h2 style={styles.heading}>CUISINING</h2>
            {/* Name Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.name)}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                style={{
                  ...styles.input,
                  ...(focus.name && styles.inputFocused),
                }}
                onFocus={() => handleFocus("name")}
                onBlur={(e) => handleBlur("name", e.target.value)}
                onChange={handleChange}
              />
            </div>
            {/* Username Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.username)}>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                style={{
                  ...styles.input,
                  ...(focus.username && styles.inputFocused),
                }}
                onFocus={() => handleFocus("username")}
                onBlur={(e) => {
                  handleBlur("username", e.target.value);
                  checkUsernameAvailability(e.target.value); // Check username availability
                }}
                onChange={handleChange}
              />
              {usernameError && <div style={styles.usernameError}>{usernameError}</div>}
              {usernameTaken && formData.username.length >= 4 && (
                <div style={{ color: "green" }}>{usernameTaken}</div>
              )}
            </div>
            {/* Password Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.password)}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                style={{
                  ...styles.input,
                  ...(focus.password && styles.inputFocused),
                }}
                onFocus={() => handleFocus("password")}
                onBlur={(e) => handleBlur("password", e.target.value)}
                onChange={handleChange}
              />
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowPassword(!showPassword)} // Toggle the showPassword state
              >
                <img
                  src={showPassword ? "view.png" : "hide.png"}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>
            {passwordError && <div style={styles.passwordError}>{passwordError}</div>}
            {/* Confirm Password Input */}
            <div style={styles.inputWrapper}>
              <label style={styles.label(focus.confirmPassword)}>Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                style={{
                  ...styles.input,
                  ...(focus.confirmPassword && styles.inputFocused),
                }}
                onFocus={() => handleFocus("confirmPassword")}
                onBlur={(e) => handleBlur("confirmPassword", e.target.value)}
                onChange={handleChange}
              />
              <button
                type="button"
                style={styles.showPasswordButton}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
              >
                <img
                  src={showConfirmPassword ? "view.png" : "hide.png"}
                  alt={showConfirmPassword ? "Hide Password" : "Show Password"}
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
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
                Already Have an Account?{" "}
                <a href="/" style={styles.signupLink}>Log In</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;