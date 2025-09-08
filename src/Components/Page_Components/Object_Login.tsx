import { useState } from "react";
import { auth, firestore, } from "../Firebase";
import {
  signInWithEmailAndPassword, signInAnonymously, sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
  getAuth,
} from "firebase/auth";
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
  given_Destination: string;
  given_GoToDestination(givenString: string): void;
}

export default function AuthLogin_Old(props: AuthLoginProps) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);


  const handleGuestLogin = async () => {
    try {
      await signInAnonymously(auth);
      const deviceId = getDeviceId();
      localStorage.setItem("submissionId", deviceId);
      setStatus("Signed in as guest!");
      props.given_GoToDestination(props.given_Destination);
    } catch (err: any) {
      console.error("Guest login error:", err);
      setStatus("Could not sign in as guest.");
    }
  };

  // Check if user came back from email link
  useEffect(() => {
    const checkLinkSignIn = async () => {
      const authInstance = getAuth();
      if (isSignInWithEmailLink(authInstance, window.location.href)) {
        // Retrieve email from local storage
        let storedEmail = window.localStorage.getItem("emailForSignIn");
        if (!storedEmail) {
          storedEmail = window.prompt("Please provide your email for confirmation") || "";
        }

        try {
          await signInWithEmailLink(authInstance, storedEmail, window.location.href);
          setMessage("✅ Successfully signed in!");
          window.localStorage.removeItem("emailForSignIn");
        } catch (error: any) {
          console.error(error);
          setMessage("❌ Error signing in: " + error.message);
        }
      }
    };

    checkLinkSignIn();
  }, []);

  const handleSendLink = async () => {
    const actionCodeSettings = {
      url: window.location.origin, // redirect back to your app
      handleCodeInApp: true,
    };

    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", email);
      setMessage("📧 Check your inbox for the sign-in link!");
    } catch (error: any) {
      console.error(error);
      setMessage("❌ Error sending email: " + error.message);
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


      <button
        onClick={async () => {
          setAttemptedSubmit(true);
          handleSendLink();
        }}
        className="auth-button"
      >
        Sign in
      </button>
    </div>
  );
}
