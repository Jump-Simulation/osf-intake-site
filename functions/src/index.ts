import * as functions from "firebase-functions";

import * as admin from "firebase-admin";

admin.initializeApp();



export const checkEmailRegistered = functions.https.onCall(async (data) => {
    const email = data.email?.toLowerCase();
    if (!email) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "Email is required."
        );
    }

    try {
        await admin.auth().getUserByEmail(email);
        return { exists: true };
    } catch (err: any) {
        if (err.code === "auth/user-not-found") {
            return { exists: false };
        }
        throw new functions.https.HttpsError("internal", "Error checking email", err);
    }
});


function generateRandomId(length: number): string {
    const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export const createOtpForEmail = functions.https.onCall(async (data) => {
    const email = data.email?.toLowerCase();
    if (!email) {
        throw new functions.https.HttpsError(
            "invalid-argument",
            "Email is required."
        );
    }

    try {
        const otpId = generateRandomId(6);

        const expiresAt = admin.firestore.Timestamp.fromDate(
            new Date(Date.now() + 5 * 60 * 1000)
        );

        // Write OTP doc
        await admin.firestore().collection("OTPs").doc(otpId).set({
            creds: email,
            expiresAt: expiresAt,
        });

        // EmailJS details from config
        const serviceId = functions.config().emailjs.service_id;
        const templateId = functions.config().emailjs.template_id;
        const publicKey = functions.config().emailjs.public_key;
        const privateKey = functions.config().emailjs.private_key;

        // Send OTP email via EmailJS REST API

        console.log("EmailJS config:", serviceId, templateId, publicKey, privateKey);
        console.log("Sending OTP:", otpId, "to", email);


        return { otp: otpId, expiresAt: expiresAt.toDate().toISOString() };
    } catch (err: any) {
        throw new functions.https.HttpsError(
            "internal",
            "Error creating OTP and sending email",
            err
        );
    }
});