import { useState } from "react";
import { auth, firestore } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Login.css";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css"
import { useAppContext } from "../../App";

interface AuthPartialRegisterProps {
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
  given_SetCurrentEmail(givenEmail: string): void;
  given_WriteSubmissionToFirestore(givenFieldName: string, givenData: string): void;
  given_CreateFirebaseUser(givenEmail: string)


}

export default function AuthPartialRegister(props: AuthPartialRegisterProps) {

  const context = useAppContext();

  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleContinue = () => {
    const emailTrimmed = email.trim().toLowerCase();
    const confirmTrimmed = confirmEmail.trim().toLowerCase();
    // basic regex for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailTrimmed || !confirmTrimmed) {
      setStatus("Please fill out both email fields.");
      return;
    }

    if (!emailRegex.test(emailTrimmed) || !emailRegex.test(confirmTrimmed)) {
      setStatus("Please enter valid email addresses.");
      return;
    }

    if (emailTrimmed !== confirmTrimmed) {
      setStatus("Emails do not match.");
      return;
    }

    // ✅ Emails match → proceed
    props.given_SetCurrentEmail(emailTrimmed);
    props.given_WriteSubmissionToFirestore("email", emailTrimmed);
    props.given_CreateFirebaseUser(emailTrimmed);
    props.givenGoToDestination(props.givenDestination);
  };

  function handleQuit() {
    props.givenGoToDestination("page-intro");
    props.given_SetCurrentEmail("null");
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-field">
          <label className="auth-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"

          />
        </div>

        <div className="auth-field">
          <label className="auth-label">Confirm Email</label>
          <input
            type="email"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
            className="auth-input"

          />
        </div>

        <button
          className={`normal-button-primary${context.isMobileString}`}
          onClick={() => { handleContinue(); }}
        >
          Continue Submission
        </button>
        <button
          className={`normal-button-tertiary${context.isMobileString}`}
          onClick={() => { handleQuit(); }}
        >
          Quit this submission
        </button>
        {status && <p className="auth-status">{status}</p>}
      </div>
    </div>
  );
}
