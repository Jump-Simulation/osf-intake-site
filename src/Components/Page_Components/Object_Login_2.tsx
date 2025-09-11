import { useState } from "react";
import { auth } from "../Firebase";
import {
    signInWithEmailLink,
    isSignInWithEmailLink,

} from "firebase/auth";

import { getFunctions, httpsCallable } from "firebase/functions";

import "../../CSS/Page_Component_Styles/Object_Login.css";
import { getDeviceId } from "./Object_deviceID";
import "../../CSS/Page_Component_Styles/Object_Item_Text.css";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css";
import { BaseCarouselChildProps } from "../../BaseProps";

import { useEffect } from "react";



import { SubmissionObject } from "../../types";

import emailjs from '@emailjs/browser';

import { useAppContext } from "../../App";





interface AuthLoginProps extends BaseCarouselChildProps {
    given_Destination: string;
    given_GoToDestination(givenString: string): void;
    given_LocalSubmissionObject: SubmissionObject;
    given_SetCurrentEmail(givenEmail: string);
}


const functions = getFunctions();
const checkEmailRegistered = httpsCallable(functions, "checkEmailRegistered");

const createOtpForEmail = httpsCallable(functions, "createOtpForEmail");

export default function AuthLogin(props: AuthLoginProps) {

    const context = useAppContext();
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    async function testEmail(givenEmail: string): Promise<boolean> {
        try {
            const result = await checkEmailRegistered({ email: givenEmail });
            const exists = (result.data as { exists: boolean }).exists;
            console.log(`${givenEmail} exists:`, exists);



            return exists;
        } catch (error) {
            console.error("Error checking email:", error);
            return false; // treat errors as "not registered"
        }
    }

    type OtpResponse = {
        otp: string;
        expiresAt: string;
    };

    const sendLink = async () => {

        setLoading(true);  // ⬅️ start loading
        setStatus("");     // optional: clear status while waiting
        const cleanedEmail = email.trim();

        const exists = await testEmail(cleanedEmail);

        if (exists) {
            // ✅ Email exists → send OTP
            console.log("Email exists");

            try {
                // 1️⃣ Create OTP
                const result_OTP = await createOtpForEmail({ email: cleanedEmail });
                const data = result_OTP.data as OtpResponse;
                const otp = data.otp;

                // 2️⃣ Send email via EmailJS
                try {
                    // console.log("otp: ")
                    // console.log(otp)
                    await emailjs.send(
                        "service_8ex7325",
                        "template_ao0gzax",
                        { email: cleanedEmail, otp_code: otp },
                        "_cUYb55TMz6cShy13"
                    );
                    setLoading(false); // ⬅️ stop loading
                    props.given_GoToDestination(props.given_Destination)

                    setStatus("Sign-in OTP sent! Please check your email.");
                    console.log("OTP email sent successfully!");
                } catch (emailErr) {
                    console.error("EmailJS failed:", emailErr);
                    setStatus(
                        "OTP generated, but there was a problem sending the email. Please try again."
                    );
                }
            } catch (otpErr) {
                console.error("Failed to create OTP:", otpErr);
                setStatus("Failed to generate OTP. Please try again.");
            }



        } else {
            // ❌ Email does not exist → redirect
            console.log("Email not registered → redirecting");
            props.given_GoToDestination("page-newAccountCreation");
        }



    };


    function sneakyEntrance() {
        setLoading(false); // ⬅️ stop loading
        props.given_SetCurrentEmail("edouardkb@gmail.com");
        props.given_GoToDestination(props.given_Destination)

        setStatus("Sign-in OTP sent! Please check your email.");
        console.log("OTP email sent successfully!");
    }

    function TestAccountCompletion() {
        setLoading(false); // ⬅️ stop loading
        props.given_SetCurrentEmail("edouardkb@gmail.com");
        props.given_GoToDestination("page-account-checker")
    }

    useEffect(() => {
        const checkSignIn = async () => {
            if (isSignInWithEmailLink(auth, window.location.href)) {
                let storedEmail = window.localStorage.getItem("emailForSignIn");
                if (!storedEmail) {
                    storedEmail = window.prompt("Please enter your email to confirm") || "";
                }

                try {
                    const result = await signInWithEmailLink(auth, storedEmail, window.location.href);
                    window.localStorage.removeItem("emailForSignIn");
                    sessionStorage.setItem("justSignedIn", "true");
                    setStatus(`Signed in as ${result.user.email}`);
                    console.log("Signed in user:", result.user);

                    // ✅ Redirect without React Router
                    props.given_GoToDestination(props.given_Destination)
                } catch (err: any) {
                    console.error("Error completing sign-in", err);
                    setStatus("Error completing sign-in: " + err.message);
                }
            }
        };

        checkSignIn();
    }, []);

    return (
        <div
            style={{
                display: "flex", justifyContent: "center",
                alignItems: "start", flexDirection: "column"
            }}>
            <div style={{

                color: "var(--color-neutral-200, #DEE4E5)",

                fontFamily: "var(--font-family-body, Avenir)",
                fontSize: "var(--font-size-body-default, 16px)",
                fontStyle: "normal",
                fontWeight: " var(--font-weight-body-default, 800)",
                lineHeight: "var(--font-line-height-body-default, 24px)", /* 150% */
                letterSpacing: "var(--font-letter-spacing-default, 0.2px)",

            }}>Email</div>

            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

                style={{

                    display: "flex",
                    paddingTop: "16px",
                    paddingBottom: "16px",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    alignItems: "center",
                    gap: "4px",
                    alignSelf: "stretch",
                    color: "#FFF",
                    borderRadius: "16px",
                    border: "1.5px solid var(--color-primary-800, #00677E)",
                    backgroundColor: "#171D1E",
                    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",



                    fontFamily: " var(--font-family-body, Avenir)",
                    fontSize: "var(--font-size-body-default, 16px)",
                    fontStyle: "normal",
                    fontWeight: "var(--font-weight-body-default, 400)",
                    lineHeight: "var(--font-line-height-body-default, 24px)",
                    letterSpacing: "var(--font-letter-spacing-default, 0.2px)",


                }}
            />
            <button
                onClick={() => { props.given_SetCurrentEmail(email); sendLink(); }}
                className={email ?
                    `normal-button-primary${context.isMobileString}` :
                    `normal-button-primary-disabled${context.isMobileString}`}
                disabled={loading}  // disable button while loading
            >
                {loading ? (
                    <div className="loader" /> // we'll define CSS below
                ) : (
                    "Sign In"
                )}
            </button>

            <button onClick={() => { sneakyEntrance() }}>sneaky entrance</button>



            <button onClick={() => { TestAccountCompletion() }}>Test Account Completion</button>

            {status && <p className="mt-4 text-white">{status}</p>}
        </div>
    );
}
