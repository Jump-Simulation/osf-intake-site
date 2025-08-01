import { useState } from "react";
import { auth, firestore } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Full_Account_Creation.css";
import "../../CSS/Page_Component_Styles/Object_Login.css";
import openEye from "../../assets/eye-open-show.png";
import closedEye from "../../assets/eye-closed-hidden.png";
import errorIcon from "../../assets/alert-error-icon.png";

interface AuthRegisterProps {
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function AuthRegister({
  givenDestination,
  givenGoToDestination,
}: AuthRegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setRole("");
    setLocation("");
    setExperience("");
    setStatus("");
  };

  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 6;
  const isConfirmPasswordValid = confirmPassword.length >= 6;
  const isFirstNameValid = firstName.length >= 1;
  const isLastNameValid = lastName.length >= 1;
  const isJobValid = role.length >= 1;
  const isLocationValid = location.length >= 1;
  const isExperienceValid = experience.length >= 1;

  const handleRegister = async (): Promise<boolean> => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email address.");
      return false;
    }
    if (password.length < 6) {
      setStatus("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return false;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const submission = userCred.user.uid;
      const emailKey = email;

      localStorage.setItem("submissionId", submission);

      await setDoc(doc(firestore, "users", emailKey), {
        submission,
        firstName,
        lastName,
        email,
        role,
        location,
        experience,
        createdAt: new Date(),
      });

      setStatus("Account created!");
      resetForm();
      return true;
    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.code === "auth/email-already-in-use") {
        setStatus("This email is already registered.");
      } else {
        setStatus(err.message || "Could not create account.");
      }
      return false;
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-field">
          <div className="auth-label-wrapper">
            <label className="auth-label">Email</label>
            {attemptedSubmit && !isEmailValid && (
              <img src={errorIcon} alt="Error" className="inline-error-icon" />
            )}
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`auth-input ${
              attemptedSubmit && !isEmailValid
                ? "invalid-input"
                : isEmailValid
                ? "valid-input"
                : ""
            }`}
          />
          <div className="errorMessage">
            {attemptedSubmit && !isEmailValid && (
              <div className="invalid-single-input-feeback-message">
                *Please enter a valid email address
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Password</label>
          {attemptedSubmit && !isPasswordValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`auth-input ${
              attemptedSubmit && !isPasswordValid
                ? "invalid-input"
                : isPasswordValid
                ? "valid-input"
                : ""
            }`}
            style={{ paddingRight: "400px" }}
          />

          <img
            src={showPassword ? closedEye : openEye}
            alt="Toggle password visibility"
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
          />
        </div>
        <div className="errorMessage">
          {attemptedSubmit && !isPasswordValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid password
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Confirm Password</label>
          {attemptedSubmit && !isConfirmPasswordValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`auth-input ${
              attemptedSubmit && !isConfirmPasswordValid
                ? "invalid-input"
                : isConfirmPasswordValid
                ? "valid-input"
                : ""
            }`}
            style={{ paddingRight: "400px" }}
          />
          <img
            src={showPassword ? closedEye : openEye}
            alt="Toggle confirm password visibility"
            className="toggle-password"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          />
        </div>
        <div className="errorMessage">
          {attemptedSubmit && !isConfirmPasswordValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid password
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Your First Name</label>
          {attemptedSubmit && !isFirstNameValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`auth-input ${
            attemptedSubmit && !isFirstNameValid
              ? "invalid-input"
              : isFirstNameValid
              ? "valid-input"
              : ""
          }`}
        />
        <div className="errorMessage">
          {attemptedSubmit && !isFirstNameValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid name
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Your Last Name</label>
          {attemptedSubmit && !isLastNameValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={`auth-input ${
            attemptedSubmit && !isLastNameValid
              ? "invalid-input"
              : isLastNameValid
              ? "valid-input"
              : ""
          }`}
        />
        <div className="errorMessage">
          {attemptedSubmit && !isLastNameValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid name
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Your Job, Role, or Title</label>
          {attemptedSubmit && !isJobValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <input
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className={`auth-input ${
            attemptedSubmit && !isJobValid
              ? "invalid-input"
              : isJobValid
              ? "valid-input"
              : ""
          }`}
        />
        <div className="errorMessage">
          {attemptedSubmit && !isJobValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid job
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Your Facility or Location</label>
          {attemptedSubmit && !isLocationValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className={`auth-input ${
            attemptedSubmit && !isLocationValid
              ? "invalid-input"
              : isLocationValid
              ? "valid-input"
              : ""
          }`}
        />
        <div className="errorMessage">
          {attemptedSubmit && !isLocationValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid location
            </div>
          )}
        </div>
      </div>

      <div className="auth-field">
        <div className="auth-label-wrapper">
          <label className="auth-label">Years of Experience</label>
          {attemptedSubmit && !isExperienceValid && (
            <img src={errorIcon} alt="Error" className="inline-error-icon" />
          )}
        </div>
        <input
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
          className={`auth-input ${
            attemptedSubmit && !isExperienceValid
              ? "invalid-input"
              : isExperienceValid
              ? "valid-input"
              : ""
          }`}
        />
        <div className="errorMessage">
          {attemptedSubmit && !isExperienceValid && (
            <div className="invalid-single-input-feeback-message">
              *Please enter a valid number of experience
            </div>
          )}
        </div>
      </div>

      <button
        onClick={async () => {
          setAttemptedSubmit(true);
          const success = await handleRegister();
          if (success) {
            givenGoToDestination(givenDestination);
          }
        }}
        className="auth-button"
      >
        Create account
      </button>
    </div>
  );
}
