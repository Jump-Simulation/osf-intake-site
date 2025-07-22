import { useState } from "react";
import { auth, firestore } from "../Firebase";

import { SubmissionData } from "../../types";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInAnonymously,
} from "firebase/auth";
import { doc, setDoc, collection, getDocs, query, where } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Login.css";
import { getDeviceId } from "./Object_deviceID";

interface Object_Login_Props {
  givenDestination: string;
  givenGoToDestination(givenString: string): void;


  given_state_Set_Array_IncompleteSubmissions(givenSubs: SubmissionData[]): void;

  given_state_Set_Array_CompleteSubmissions(givenSubs: SubmissionData[]): void;



}

export default function AuthScreen({
  givenDestination,
  givenGoToDestination,
  given_state_Set_Array_CompleteSubmissions,
  given_state_Set_Array_IncompleteSubmissions,

}: Object_Login_Props) {
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

  const expectedFields = [
    "q-buttonItemListAddress",
    "q-buyer_invention",
    "q-describe_idea",
    "q-get_worse",
    "q-idea_name",
    "q-page-category",
    "q-page-haveYouTested",
    "q-page-haveYouWorkedOnThis",
    "q-page-howInvolvedDoYouWantToBe",
    "q-page-otherSolutions",
    "q-personally_connect",
    "q-problem_solving",
    "q-user_invention",
    "q-when_where",
    "q-year_from_now",
  ];
  var incompleteSubmissions: SubmissionData[] = [];
  var completeSubmissions: SubmissionData[] = [];

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

  const handleLogin = async (): Promise<boolean> => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const uid = userCred.user.uid;
      localStorage.setItem("submissionId", uid);
      // setStatus("Signed in successfully!");


      const usersCollectionRef = collection(
        firestore,
        "Submissions",
        "Submissions",
        "Users"
      );


      const q = query(usersCollectionRef, where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        querySnapshot.forEach((docSnap) => {
          /*        console.log("Matched doc ID:", docSnap.id);
                 console.log("Data:", docSnap.data()); */

          const data = docSnap.data();
          let isIncomplete = false;

          for (const field of expectedFields) {
            const value = data[field];

            const isMissing =
              value === undefined ||
              value === null ||
              value === "" ||
              value === "Incomplete" ||
              value === "Unnamed" ||
              (Array.isArray(value) && value.includes("incomplete"));

            if (isMissing) {
              isIncomplete = true;

              // Special case for "q-idea_name"
              if (field === "q-idea_name") {
                data[field] = "Unnamed";
              } else if (value === undefined) {
                data[field] = "Incomplete";
              }
            }
          }

          if (isIncomplete) {
            incompleteSubmissions.push(data as SubmissionData);
          } else {
            completeSubmissions.push(data as SubmissionData);
          }
        });

        console.log("✅ Incomplete submissions:", incompleteSubmissions);
        given_state_Set_Array_IncompleteSubmissions([...incompleteSubmissions])


        console.log("✅ Complete submissions:", completeSubmissions);
        given_state_Set_Array_CompleteSubmissions([...completeSubmissions])





      } else {
        console.log("No matching document found for email:", email);
      }


      return true;
    } catch (err: any) {
      console.error("Login error:", err);
      setStatus("Login failed. Check credentials.");
      return false;
    }
  };

  const handleInitialRegister = () => {
    if (password !== confirmPassword) {
      setStatus("Passwords do not match.");
      return;
    }
    setStep(2);
  };

  const handleFinishRegister = async (): Promise<boolean> => {
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
          onClick={async () => {
            let success = false;

            if (mode === "login") {
              success = await handleLogin();
            } else {
              if (step === 1) {
                handleInitialRegister();
                return; // stop here until step 2
              } else {
                success = await handleFinishRegister();
              }
            }

            if (success) {
              givenGoToDestination("page-SubmissionsOverview");
            }
          }}
          className="auth-button"
        >
          {mode === "login" ? "Login" : step === 1 ? "Next" : "Create Account"}
        </button>

        {mode === "login" && (
          <button
            style={{ marginTop: "6px" }}
            onClick={async () => {
              await handleGuestLogin();
              givenGoToDestination("page-problemSolve");
            }}
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
