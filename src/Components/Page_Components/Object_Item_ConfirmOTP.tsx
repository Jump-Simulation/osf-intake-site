

import { useState, useRef } from "react";
import { firestore } from "../Firebase"; // your initialized firestore
import { doc, getDoc, deleteDoc, Timestamp } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css";
import { useAppContext } from "../../App";


interface Object_Item_ConfirmOTP_Props {
    given_FetchSubmissions(): void;
    given_Destination: string;
    given_GoToDestination(given_Destination: string): void;
}



export default function Object_Item_ConfirmOTP(
    props: Object_Item_ConfirmOTP_Props
) {
    const [otpValues, setOtpValues] = useState<string[]>(["", "", "", "", "", ""]);
    const [status, setStatus] = useState<string>("");
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const context = useAppContext();

    // Handle input change
    const handleChange = (index: number, value: string) => {
        if (!/^[a-zA-Z0-9]?$/.test(value)) return; // only allow single alphanumeric char

        const newOtp = [...otpValues];
        newOtp[index] = value.toLowerCase();
        setOtpValues(newOtp);

        // Move focus
        if (value && index < 5) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otpValues[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    // Confirm OTP
    const handleConfirm = async () => {
        const enteredOtp = otpValues.join("");
        if (enteredOtp.length !== 6) {
            setStatus("Please enter all 6 characters.");
            return;
        }

        try {
            const otpDocRef = doc(firestore, "OTPs", enteredOtp);
            const otpSnap = await getDoc(otpDocRef);

            const data = otpSnap.data() as { creds: string; expiresAt: Timestamp };
            const now = Timestamp.now();


            if (!otpSnap.exists()) {
                setStatus("Invalid OTP.");
                return;
            }



            /*  console.log("Entered OTP: ")
             console.log(enteredOtp)
             console.log("data.creds: ")
             console.log(data.creds)
             console.log("props.given_CurrentEmail: ")
             console.log(context.localCurrentEmail) */


            if (data.creds !== context.localCurrentEmail) {
                setStatus("OTP does not match your email: ");

                /*   console.log("Entered OTP: ")
                  console.log(enteredOtp)
                  console.log("data.creds: ")
                  console.log(data.creds)
                  console.log("props.given_CurrentEmail: ")
                  console.log(context.localCurrentEmail) */
                return;
            }

            if (data.expiresAt.toMillis() < now.toMillis()) {

                setStatus("OTP has expired.");
                await deleteDoc(otpDocRef);
                return;
            }

            // Optionally delete used OTP
            await deleteDoc(otpDocRef);

            await props.given_FetchSubmissions();

            setStatus("OTP confirmed! Redirecting...");
            props.given_GoToDestination(props.given_Destination);

        } catch (err) {
            console.error(err);
            setStatus("Error checking OTP.");
        }
    };

    async function sneakyContinue() {
        await props.given_FetchSubmissions();

        setStatus("OTP confirmed! Redirecting...");
        props.given_GoToDestination(props.given_Destination);
    }

    return (
        <div style={{
            display: "flex", flexDirection: "column",
            alignItems: "center", gap: "1rem"
        }}>
            <div style={{
                display: "flex",
                gap: "8px",
                width: "100%",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {otpValues.map((value, idx) => (
                    <input
                        key={idx}
                        ref={(el) => (inputRefs.current[idx] = el)}
                        value={value}
                        onChange={(e) => handleChange(idx, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(idx, e)}
                        maxLength={1}
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "10px",
                            fontSize: "20px",
                            cursor: "pointer",
                            borderRadius: "20px",
                            border: " 1.5px solid var(--color-primary-interact-light-default, #00677E)",
                            background: "#090F10",
                            boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.30), 0 1px 3px 1px rgba(0, 0, 0, 0.15)",
                            /*  maxWidth: "70px", */
                            height: "auto",
                            flex: "1 1 0", // flex-grow:1, flex-shrink:1, flex-basis:0 → evenly fill row
                            minWidth: "25px", // don’t shrink too small
                            minHeight: "85px",
                            textAlign: "center"
                        }}
                    />
                ))}
            </div>

            <button
                onClick={() => { handleConfirm(); }}
                className={otpValues.join("").length > 5 ?
                    `normal-button-primary${context.isMobileString}` :
                    `normal-button-primary-disabled${context.isMobileString}`}
            >
                Confirm
            </button>
            {/*       <button onClick={() => { sneakyContinue() }}>sneaky continue</button>
 */}
            {status && <p style={{ color: "white" }}>{status}</p>}
        </div>
    );
}