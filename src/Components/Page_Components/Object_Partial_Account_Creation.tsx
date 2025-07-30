import { useState } from "react";
import { auth, firestore } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Login.css";

interface AuthPartialRegisterProps {
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function AuthPartialRegister({
  givenDestination,
  givenGoToDestination,
}: AuthPartialRegisterProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus("Please enter a valid email.");
      return;
    }
    if (password.length < 6) {
      setStatus("Password must be at least 6 characters.");
      return;
    }

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const submissionId = userCred.user.uid;

      await setDoc(doc(firestore, "users", email), {
        submission: submissionId,
        email,
        createdAt: new Date(),
      });

      localStorage.setItem("submissionId", submissionId);
      setStatus("Account created!");
      givenGoToDestination(givenDestination);
    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.code === "auth/email-already-in-use") {
        setStatus("This email is already registered.");
      } else {
      }
    }
  };

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
          <label className="auth-label">Create Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>

        <button onClick={handleRegister} className="auth-button">
          Create account
        </button>

        {status && <p className="auth-status">{status}</p>}
      </div>
    </div>
  );
}
