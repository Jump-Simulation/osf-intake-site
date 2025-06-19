
export interface PatientPayload {
    scrubbedId: string;
    patientFirstName: string;
    patientLastName: string;
    patientAge: number;
    procedureID: string;
    dateOfProcedure: string;
    timeOfProcedure: string;
    procedureLocation: string;
    patientSex: string;
    anesthesiaType: string;
    procedureName: string;
    dateEnteredPatientFlow: string;
    hasSeenProcedureIntro: number;
    patientTrueTags: string;
    patientFalseTags: string;
    patientOptOut: number;
}

export const sendPatientData = async (givenPayload: PatientPayload, givenPatientID: string) => {
    const apiUrl = "https://scrubbedinapiservice.azure-api.net/api/Patient/";
    const apiKey = "d4a11d6b073b47229ef5b1a9c1fb9148";
    //console.log("Payload being sent:", JSON.stringify(givenPayload, null, 2));
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Ocp-Apim-Subscription-Key": apiKey,
            },
            body: JSON.stringify(givenPayload),
        });

        if (response.ok) {
            const data = await response.json();
            /*     console.log("Response:", data); */
            return data; // Return the result to be used by the caller
        } else {
            console.error("Failed to POST data:", response.status, response.statusText);
        }
    } catch (error) {
        console.log("Error while making POST request for patient: " + "|| " +
            givenPayload.patientFirstName + " " + givenPayload.patientLastName + " ||")
        console.error(error);
        throw error; // Re-throw the error to handle it in the calling code
    }
};