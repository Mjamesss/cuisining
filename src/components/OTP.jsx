import React, { useState } from "react";

const OTPVerificationForm = () => {
  const [otp, setOtp] = useState(["", "", "", "", ""]); // 5 input values for OTP
  const [email] = useState("user@example.com"); // Replace with the dynamic value from the database

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Ensure that the input is a single digit number (0-9)
    if (/^[0-9]{0,1}$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input if a valid digit is entered
      if (index < 4 && value !== "") {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const styles = {
    background: {
      backgroundImage: "url('lbg.png')", // Replace with your image URL
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      height: "100vh",
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
    heading: {
      textAlign: "center",
      fontSize: "35px", // Reduced size for mobile
      color: "#363100",
      fontWeight: "800",
      lineHeight: "1.2",
    },
    inputWrapper: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: "20px",
    },
    otpInput: {
      width: "50px",
      height: "50px",
      borderRadius: "10px",
      border: "1px solid #ccc",
      textAlign: "center",
      fontSize: "20px",
      margin: "0 5px",
    },
    button: {
      width: "100%",
      padding: "10px",
      margin: "20px 0",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#C1B857",
      color: "#363100",
      cursor: "pointer",
      fontWeight: "700",
    },
    resendLink: {
      display: "block",
      textAlign: "center",
      fontSize: "14px",
      color: "#363100",
      textDecoration: "none",
      marginTop: "10px",
      fontWeight: "500",
    },
    infoText: {
      fontSize: "16px",
      textAlign: "center",
      color: "#363100",
    },
  };

  return (
    <div style={styles.background}>
      <div style={styles.formWrapper}>
        <div style={styles.formContainer}>
          <h2 style={styles.heading}>Check Your Email</h2>
          <p style={styles.infoText}>
            We have sent a reset link to <strong>{email}</strong>. Please enter the 5-digit code mentioned in the email.
          </p>
          <div style={styles.inputWrapper}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                type="text"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                maxLength="1"
                style={styles.otpInput}
              />
            ))}
          </div>
          <a href="/SetNewPass">
          <button type="submit" style={styles.button}>
            Verify Code
          </button>
          </a>
          <p style={styles.infoText}>
            Haven't got the email yet?{" "}
            <a href="/OTP" style={styles.resendLink}>
              Resend Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OTPVerificationForm;