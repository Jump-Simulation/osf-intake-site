import { useState } from "react";
import { auth, firestore } from "../Firebase";
import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth";
import "../../CSS/Page_Component_Styles/Object_Login.css";
import { getDeviceId } from "./Object_deviceID";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css";
import { BaseCarouselChildProps } from "../../BaseProps";
import errorIcon from "../../assets/alert-error-icon.png";
import openEye from "../../assets/eye-open-show.png";
import closedEye from "../../assets/eye-closed-hidden.png";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { doc, setDoc, Timestamp } from "firebase/firestore";

interface AuthLoginProps extends BaseCarouselChildProps {
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function AuthLogin({
  givenDestination,
  givenGoToDestination,
  givenGlobal_isMobile,
}: AuthLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
  const isPasswordValid = password.length >= 6;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      const deviceId = getDeviceId();
      localStorage.setItem("submissionId", deviceId);
      setStatus("Signed in as guest!");
      givenGoToDestination(givenDestination);
    } catch (err: any) {
      console.error("Guest login error:", err);
      setStatus("Could not sign in as guest.");
    }
  };

  const handleLogin = async (): Promise<boolean> => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;

      localStorage.setItem("submissionId", uid);

      const userDocRef = doc(
        firestore,
        "Submissions",
        "Submissions",
        "Users",
        uid
      );

      const allKeys = Object.keys(localStorage).filter((key) =>
        key.startsWith("answer-q-")
      );

      const answers: Record<string, any> = {};

      /*  allKeys.forEach((key) => {
         const answer = localStorage.getItem(key);
         if (answer) {
           answers[key] = answer;
         }
       }); */

      if (Object.keys(answers).length > 0) {
        await setDoc(
          userDocRef,
          {
            ...answers,
            dateUpdated: Timestamp.now(),
            deviceId: getDeviceId(),
          },
          { merge: true }
        );

        console.log("Migrated local answers to:", userDocRef.path);
      }

      /*     allKeys.forEach((key) => localStorage.removeItem(key)); */

      return true;
    } catch (err: any) {
      console.error("Login error:", err);
      setStatus("Invalid email");
      return false;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        signInAnonymously(auth)
          .then(() => {
            const deviceId = getDeviceId();
            /*      localStorage.setItem("submissionId", deviceId); */
            console.log("Signed in as guest");
          })
          .catch((err) => {
            console.error("Auto guest login error:", err);
            setStatus("Could not sign in as guest.");
          });
      } else {
        const id = user.isAnonymous ? getDeviceId() : user.uid;
        /*     localStorage.setItem("submissionId", id); */
        console.log("Already signed in:", id);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="auth-container">
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
          className={`auth-input ${attemptedSubmit && (!isEmailValid || status)
              ? "invalid-input"
              : isEmailValid
                ? "valid-input"
                : ""
            }`}
        />
        {attemptedSubmit && !isEmailValid && (
          <div className="invalid-single-input-feeback-message">
            *Invalid email address
          </div>
        )}
        {status && (
          <div className="invalid-single-input-feeback-message">
            *Email not found
          </div>
        )}
      </div>

      <div className={`auth-field ${givenGlobal_isMobile}`}>
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
            className={`auth-input ${attemptedSubmit && !isPasswordValid
                ? "invalid-input"
                : isPasswordValid
                  ? "valid-input"
                  : ""
              }`}
            style={{ paddingRight: "12%" }}
          />
          <img
            src={showPassword ? closedEye : openEye}
            alt={showPassword ? "Hide password" : "Show password"}
            className="toggle-password"
            onClick={() => setShowPassword((prev) => !prev)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setShowPassword((prev) => !prev);
              }
            }}
            title={showPassword ? "Hide password" : "Show password"}
          />
        </div>

        <div
          className={`single-input-feeback-message ${attemptedSubmit && !isPasswordValid
              ? "invalid-single-input-feeback-message"
              : isPasswordValid
                ? "valid-single-input-feeback-message"
                : ""
            }`}
        >
          *password must be 6 characters
        </div>
      </div>

      <button
        onClick={async () => {
          setAttemptedSubmit(true);
          if (!isEmailValid || !isPasswordValid) return;

          const success = await handleLogin();
          if (success) {
            givenGoToDestination(givenDestination);
          }
        }}
        className="auth-button"
      >
        Sign in
      </button>
    </div>
  );
}
