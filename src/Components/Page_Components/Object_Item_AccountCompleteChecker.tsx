import { BaseCarouselChildProps } from "../../BaseProps";
import Object_Item_Text from "./Object_Item_Text";
import "../../CSS/Page_Component_Styles/Object_Item_AccountCompleteChecker.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Object_Button_Normal from "./Object_Button_Normal";
import { useAppContext } from "../../App";
import { useEffect, useState } from "react";
import { firestore, auth } from "../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import errorIcon from "../../assets/alert-error-icon.png";

import "../../CSS/Page_Component_Styles/Object_Full_Account_Creation.css";
import "../../CSS/Page_Component_Styles/Object_Login.css";

interface AccountCompleteChecker_Props {


}

var accountCheckLock: number = 0;
/* var completedAccount: boolean = false; */




export default function AccountCompleteChecker(
  props: AccountCompleteChecker_Props
) {


  const context = useAppContext();

  var currentUsername = context.localCurrentEmail.split("@")[0];

  const [state_CheckingAccount, stateSet_CheckingAccount] = useState(true);
  const [completedAccount, setCompletedAccount] = useState<boolean | null>(null);




  async function checkAccountCompletion() {
    console.log("checkAccountCompletion CALLED!")
    accountCheckLock++;
    try {
      const userRef = doc(firestore, "Users", currentUsername);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        const data = userSnap.data();
        if (data.firstName && data.firstName.trim() !== "") {
          console.log("Doc found and looks complete!")
          //  completedAccount = true;
          setCompletedAccount(true);
          stateSet_CheckingAccount(false);
          context.GoToDestination("page-submission-submit");

        } else {
          console.log("Doc found and looks INcomplete!")

          //completedAccount = false;
          setCompletedAccount(false);
          stateSet_CheckingAccount(false);
        }
      } else {
        // No doc at all → definitely incomplete
        console.log("No doc at all → definitely incomplete!")
        // completedAccount = false;
        setCompletedAccount(false);
        stateSet_CheckingAccount(false);
      }
    } catch (err) {
      console.error("Error checking account completion:", err);
      // completedAccount = false;
      setCompletedAccount(false);
      stateSet_CheckingAccount(false);
    }
  }

  useEffect(() => {


    if (currentUsername && accountCheckLock < 1) {
      checkAccountCompletion();
    }
  }, []);




  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [status, setStatus] = useState("");


  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isEmailValid = emailRegex.test(email);
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

    try {

      const emailKey = email.split("@")[0];

      /*    localStorage.setItem("submissionId", submission); */

      await setDoc(doc(firestore, "Users", emailKey), {

        firstName: firstName,
        lastName: lastName,
        cred: email,
        role: role,
        localtion: location,
        experience: experience,
        dateCreated: new Date(),

      }, { merge: true });



      context.localCurrentEmail = email;
      setStatus("Account created!");
      console.log("Account created!");
      // completedAccount = true;
      setCompletedAccount(true);
      context.GoToDestination("page-submission-submit");
      //  resetForm();
      return true;
    } catch (err: any) {
      console.error("Registration error:", err);
      if (err.code === "auth/email-already-in-use") {
        setStatus("This email is already registered.");
        context.GoToDestination("page-submission-submit");
      } else {
        setStatus(err.message || "Could not create account.");
        context.GoToDestination("page-submission-submit");
      }
      return false;
    }
  };






  function RenderAccountCompleteChecker() {
    if (state_CheckingAccount) {
      return (<div>loading</div>)
    }
    else {

      return Render_OptionalSection_AccountIncomplete();

    }

  }

  /*   function Render_OptionalSection_AccountComplete() {
  
    } */

  function Render_OptionalSection_AccountIncomplete() {
    return (<div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      justifyContent: "start",
      gap: "20px"
    }}>
      <div className="account-complete-checker-title">Finish your Inventor Account</div>
      <div className="account-complete-checker-subtitle">We’re excited to meet you! To finish your submission, please tell us a little about yourself so we know who we’re talking to.</div>
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
              className={`auth-input ${attemptedSubmit && !isEmailValid
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
            <label className="auth-label">Your First Name</label>
            {attemptedSubmit && !isFirstNameValid && (
              <img src={errorIcon} alt="Error" className="inline-error-icon" />
            )}
          </div>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={`auth-input ${attemptedSubmit && !isFirstNameValid
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
            className={`auth-input ${attemptedSubmit && !isLastNameValid
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
            className={`auth-input ${attemptedSubmit && !isJobValid
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
            className={`auth-input ${attemptedSubmit && !isLocationValid
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
            className={`auth-input ${attemptedSubmit && !isExperienceValid
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
              context.GoToDestination("page-submission-submit");
            }
          }}
          className="auth-button"
        >
          Create account
        </button>
      </div>

    </div>

    );
  }

  return <>{RenderAccountCompleteChecker()}</>;
}
