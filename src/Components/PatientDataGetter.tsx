
export interface PatientDataGetterInterface {
    patientID: string;
}

export class PatientInfo {
    givenGlobal_PatientScrubbedId: string;
    givenGlobal_PatientNameFirst: string;
    givenGlobal_PatientNameLast: string;
    givenGlobal_PatientAge: number;
    givenGlobal_PatientSex: string;
    givenGlobal_PatientDateOfProcedure: string;
    givenGlobal_PatientAnesthesiaType: string;
    givenGlobal_PatientDateEnteredPatientFlow: string;
    givenGlobal_PatientTimeOfProcedure: string;
    givenGlobal_PatientProcedureLocation: string;
    givenGlobal_PatientPreferedLanguage: string;
    givenGlobal_PatientHasSeenProcedureIntro: number;
    givenGlobal_PatientTagsTrueArray: string;
    givenGlobal_PatientTagsFalseArray: string;
    givenGlobal_PatientProcedureID: string;
    givenGlobal_PatientProcedureName: string;
    givenGlobal_PatientOptOut: number;
}

export const fetchData = async (givenPatientInfo: string): Promise<PatientInfo> => {
    try {
        const response = await fetch(
            "https://scrubbedinapiservice.azure-api.net/api/Patient/" + givenPatientInfo,
            {
                method: "GET",
                headers: {
                    "Ocp-Apim-Subscription-Key": "d4a11d6b073b47229ef5b1a9c1fb9148",
                },
            }
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        const getPreferredLanguage = (patientTrueTags: string): string => {
            // Split the string into individual words
            const tags = patientTrueTags.split("_");

            // Find the word that starts with "language-"
            const languageTag = tags.find(tag => tag.startsWith("language-"));

            // Extract and return the language part (everything after "language-")
            return languageTag ? languageTag.replace("language-", "") : "unknown";
        };

        const patientInfo: PatientInfo = {
            givenGlobal_PatientScrubbedId: result.scrubbedId || "",
            givenGlobal_PatientNameFirst: result.patientFirstName || "",
            givenGlobal_PatientNameLast: result.patientLastName || "",
            givenGlobal_PatientAge: result.patientAge || 0,
            givenGlobal_PatientSex: result.patientSex || "",
            givenGlobal_PatientDateOfProcedure: result.dateOfProcedure || "",
            givenGlobal_PatientAnesthesiaType: result.anesthesiaType || "",
            givenGlobal_PatientDateEnteredPatientFlow: result.dateEnteredPatientFlow || "",
            givenGlobal_PatientTimeOfProcedure: result.timeOfProcedure || "",
            givenGlobal_PatientProcedureLocation: result.procedureLocation || "",
            givenGlobal_PatientPreferedLanguage: getPreferredLanguage(result.patientTrueTags || ""), // Adjust if "patientPreferredLanguage" isn't part of the response
            givenGlobal_PatientHasSeenProcedureIntro: result.hasSeenProcedureIntro || 0,
            givenGlobal_PatientTagsTrueArray: result.patientTrueTags || "",
            givenGlobal_PatientTagsFalseArray: result.patientFalseTags || "",
            givenGlobal_PatientProcedureID: result.procedureID || "no procedure ID",
            givenGlobal_PatientProcedureName: result.procedureName || "no procedure name",
            givenGlobal_PatientOptOut: result.patientOptOut || 0,
        };

        console.log(result);

        /*    console.log("Variable Names and Data Types:");
           Object.entries(result).forEach(([key, value]) => {
               console.log(`"${key}": ${typeof value}`);
           }); */
        return patientInfo; // Return the result to be used by the caller
    } catch (error: any) {
        console.error(error.message || "An error occurred");
        throw error; // Re-throw the error to handle it in the calling code
    }
};