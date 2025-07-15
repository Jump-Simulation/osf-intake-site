import { useState } from "react";
import { auth, firestore } from "../Firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Login.css";
import { getDeviceId } from "./Object_deviceID";

export default function AuthScreen() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [step, setStep] = useState<1 | 2>(1); // for register steps

  // Step 1
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Step 2
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");

  const [status, setStatus] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setFirstName("");
    setLastName("");
    setRole("");
    setLocation("");
    setExperience("");
    setStep(1);
    setStatus("");
  };

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      const deviceId = getDeviceId();
      localStorage.setItem("submissionId", deviceId);
      setStatus("Signed in as guest!");
    } catch (err: any) {
      console.error("Guest login error:", err);
      setStatus("Could not sign in as guest.");
    }
  };
  const handleLogin = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      localStorage.setItem("submissionId", uid);
      setStatus("Signed in successfully!");
    } catch (err: any) {
      console.error("Login error:", err);
      setStatus("Login failed. Check credentials.");
    }
  };

  const handleInitialRegister = async () => {
    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }
    setStep(2);
  };

  const handleFinishRegister = async () => {
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
      setMode("login");
    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.code === "auth/email-already-in-use") {
        setStatus("This email is already registered.");
      } else {
        setStatus(err.message || "Could not create account.");
      }
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">
          {mode === "login"
            ? ""
            : step === 1
            ? "Create Your Account"
            : "Complete Your Profile"}
        </h2>

        {mode === "register" && step === 1 && (
          <>
            <input
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="auth-input"
            />
            <input
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="auth-input"
            />
          </>
        )}

        {(mode === "login" || step === 1) && (
          <>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="auth-input"
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="auth-input"
            />
          </>
        )}

        {mode === "register" && step === 1 && (
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="auth-input"
          />
        )}

        {mode === "register" && step === 2 && (
          <>
            <input
              placeholder="Your Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="auth-input"
            />
            <input
              placeholder="Your Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="auth-input"
            />
            <input
              placeholder="Your Experience"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="auth-input"
            />
          </>
        )}

        <button
          onClick={
            mode === "login"
              ? handleLogin
              : step === 1
              ? handleInitialRegister
              : handleFinishRegister
          }
          className="auth-button"
        >
          {mode === "login" ? "Login" : step === 1 ? "Next" : "Create Account"}
        </button>
        {mode === "login" && (
          <button
            style={{ marginTop: "6px" }}
            onClick={handleGuestLogin}
            className="auth-button guest-button"
          >
            Continue as Guest
          </button>
        )}

        <div style={{ marginTop: "12px" }}>
          {mode === "login" ? (
            <p className="auth-link">
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setMode("register");
                  setStatus("");
                }}
              >
                Create one
              </span>
            </p>
          ) : (
            <p className="auth-link">
              Already have an account?{" "}
              <span
                onClick={() => {
                  setMode("login");
                  setStatus("");
                  setStep(1);
                }}
              >
                Log in
              </span>
            </p>
          )}
        </div>

        {status && <p className="auth-status">{status}</p>}
      </div>
    </div>
  );
}
