// homepage


import { faL } from "@fortawesome/free-solid-svg-icons";
import { ContactUsObject, PageObject } from "./types";

export const en_siteIndex: PageObject[] = [

    // Introduction Section
    {
        id: "page-001",
        navTitle: "null",
        keywords: "introduction",
        authors: "Kyle Formella, Maddox Binder",
        lastUpdated: "12092024",
        hasVariables: false,
        hasLock: false,

        pageItems: [

            { // Image
                renderOrder: 0,
                componentType: "image",
                fileName: "logo-temp.png",
                sizeOfPageTaken: "20%",
                animationName: "fade-up",
                hasDropShadow: false,
            },

            { // Body Text
                renderOrder: 3,
                componentType: "text",
                textValue: "A helpful pre-procedure informational guide to prepare you for a healthcare visit.",
                textType: "bodyText"
            },

            {
                renderOrder: 6,
                componentType: "page-section",
                boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.3)",
                marginSides: "10px",
                colorBackground: "",
                pageSectionItems: [

                    { // Image
                        renderOrder: 0,
                        componentType: "image",
                        fileName: "scrubbedin-contents-banner.png",
                        sizeOfPageTaken: "20%",
                        animationName: "fade-up",
                        hasDropShadow: false,
                    },

                    { // Page Title
                        renderOrder: 1,
                        componentType: "text",
                        textValue: "Colonoscopy",
                        textType: "h1"
                    },

                    { // Page Title
                        renderOrder: 2,
                        componentType: "text",
                        textValue: "A guide for colonoscopy precedures conducted at Saint Francis Medical Center in Peoria, IL.",
                        textType: "bodyText"
                    },

                    { // Button Normal
                        renderOrder: 2,
                        componentType: "button-external-link",
                        buttonType: "normal",
                        buttonStyle: "primary",
                        iconVisible: false,
                        textValue: "View the Guide",
                        newTab: false,
                        externalLink: "https://osf.myvisit.guide/?p=4b2&b=toc"
                    },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                ]
            },

        ],

    },

];


export const en_contactUs_siteIndex: ContactUsObject = {
    id: "contactUsTOC",
    hasLock: false,
    pageItems: [

        { // Page Title
            renderOrder: 1,
            componentType: "text",
            textValue: "Contact Us",
            textType: "h1"
        },

        { // Body Text - first paragraph
            renderOrder: 2,
            componentType: "text",
            textValue: "If you have any questions or concerns about your upcoming {PROCEDURE_NAME}, please don’t hesitate call the GI Office at 309-308-5900. Please choose Option 1 when prompted. Our calling hours are <b>8:00am-4:00pm, Mon-Fri</b>.",
            textType: "bodyText",
            textAlignment: "left",
        },

        { // Body Text - second paragraph
            renderOrder: 3,
            componentType: "text",
            textValue: "<b>After 4:00pm</b>, please feel free to leave a voicemail, and your call will be answered in the order it was received the following business day.",
            textType: "bodyText",
            textAlignment: "left",
        },

    ],

    BottomButtonHolderObject: {
        bottomButtonHolderID: "Contact Us Bottom Buttons",
        bottomButtonHolderItems: [
            { // GI Office Phone Number Button
                renderOrder: 4,
                componentType: "button-phone-number",
                buttonType: "normal",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Call the GI Office",
                variablePhoneNumber: "giOfficeNumber",
                hardcodedPhoneNumber: "3093085900"
            },
        ]
    },
}