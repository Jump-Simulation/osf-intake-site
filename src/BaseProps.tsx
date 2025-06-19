export interface BaseCarouselChildProps {
    givenGlobal_isMobile: string;
    givenGlobal_CurrentCarouselIndex: number;
    givenGlobal_PreviousCarouselIndex: number;
    givenGlobal_LockNumber?: number;
    givenGlobal_PrepDestination?: string;

    givenGlobal_ScrubbedId?: string;
    givenGlobal_PatientNameFirst?: string;
    givenGlobal_PatientNameLast?: string;
    givenGlobal_PatientAge?: number;
    givenGlobal_PatientSex?: string;
    givenGlobal_PatientDateOfProcedure?: string;
    givenGlobal_PatientAnesthesiaType?: string;
    givenGlobal_PatientDateEnteredPatientFlow?: string;
    givenGlobal_PatientTimeOfProcedure?: string;
    givenGlobal_PatientProcedureLocation?: string;
    givenGlobal_PatientPreferedLanguage?: string;
    givenGlobal_PatientHasSeenProcedureIntro?: number;
    givenGlobal_PatientProcedureID?: string;
    givenGlobal_PatientProcedureName?: string;
    givenGlobal_PatientOptOut?: number;


    givenGlobal_MapToRead?: Map<string, string[]>;
    givenGlobal_AddressesToRead?: string[];
    givenGlobal_TagsTrueArray?: string;
    givenGlobal_TagsFalseArray?: string;
    givenGlobal_ShouldExcludeByDefault?: boolean;

    givenGlobal_CurrentModalID?: string;
    givenGlobal_CurrentPageID?: string;
    givenGlobal_CurrentBookID?: string;


    givenGlobal_NewPrimaryColor?: string;
    givenGlobal_NewHoverColor?: string;
    givenGlobal_NewActiveColor?: string;


}