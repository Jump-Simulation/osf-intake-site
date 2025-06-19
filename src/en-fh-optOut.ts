// FH Opt Out Message

import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";


export const en_fh_optOut_book: BookObject = {
    bookId: "fhOptOut",
    bookAuthors: ["Maddox Binder"],

    chapterObjects: [

        // FH Opt Out Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_opt_out_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--gray-800, #4D4D4D)",
            progressBarColorBackground: "var(--gray-200, #E6E6E6)",
            chapterBackgroundColor: "#F7F9FA",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

            pageObjects: [


                // Introduction Screen 1
                {
                    id: "page-fhIntro001",
                    navTitle: "Introduction",
                    keywords: "introduction",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12092024",
                    pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [

                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "opt-out-1.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Want to <span style=\"color: var(--color-accent-primary-bold-800-default);\">Opt Out?</span>",
                            textType: "h2",
                            textAlignment: "center",
                        },


                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Press the button below to opt out of messaging from OSF HealthCare related to FH Screening opportunities.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-opt-out",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                iconVisible: false,
                                textValue: "Opt Out of FH Messaging",
                                destination: "page-next"
                            },

                        ]
                    }

                },

                // Introduction Screen 2
                {
                    id: "page-fhIntro002",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12092024",
                    pageBackgroundColor: "var(--osfBrand-limegray-50, #F7FAF3)",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "opt-out-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Opt-Out <span style=\"color: var(--color-accent-primary-bold-800-default);\">Successful</span>",
                            textType: "h2",
                            textAlignment: "center",
                        },

                        { // Body Text - first paragraph
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "You have successfully opted out of FH screening messaging from OSF HealthCare. You will no longer receive any messages that are part of our FH Screening initiative.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Body Text - first paragraph
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "You may now close this page.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                    ],

                },

            ]

        },

        // Scheduling Chapter - Open Scheduling ----------------------------------------------------------------------------------------------
        {
                    chapterID: "fh_open_scheduling_chapter",
                    progressBarVisible: false,
                    progressBarColor: "var(--gray-800, #4D4D4D)",
                    progressBarColorBackground: "var(--gray-200, #E6E6E6)",
                    chapterBackgroundColor: "var(--color-surface-default, #F4FBFC)",
        
                    // TOP RIGHT BUTTON STYLES -------
                    topRightNavButtonDestination: "fh-openSchedulingSection-001",
                    topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
                    topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
                    topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
        
                    pageObjects: [
                        // Scheduling Screen 1
                        {
                            id: "fh-openSchedulingSection-001",
                            navTitle: "Get Scheduled",
                            keywords: "schedule, test",
                            authors: "Maddox Binder",
                            lastUpdated: "11192024",
                            hasVariables: false,
                            hasLock: false,
        
                            pageItems: [
                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "fh-scheduling-header.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },
        
                                { // Page Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Scheduling Your Consultation",
                                    textType: "h2"
                                },
        
                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "The process of getting genetic testing for FH follows three steps:",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
                                // COPY THIS !!! vvvvvvvvv Page Section Component
        
                                {
                                    renderOrder: 5,
                                    componentType: "page-section",
                                    boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30",
                                    marginSides: "8px",
                                    colorBackground: "",
                                    pageSectionItems: [
        
        
                                        { // Page Title
                                            renderOrder: 1,
                                            componentType: "text",
                                            textValue: "Consultation",
                                            textType: "h3",
                                            iconVisible: true,
                                            iconFileName: "fh-blue-number-1.png",
                                            iconHorizontalPlacement: "left",
                                            textAlignment: "left",
                                        },
        
                                        { // Page Title
                                            renderOrder: 2,
                                            componentType: "text",
                                            textValue: "Schedule Appointment with a provider to discuss a possible genetic component for your high LDL.",
                                            textType: "bodyText",
                                            textAlignment: "left",
                                        },
        
                                        { // Page Title
                                            renderOrder: 3,
                                            componentType: "text",
                                            textValue: "Testing",
                                            textType: "h3",
                                            iconVisible: true,
                                            iconFileName: "fh-blue-number-2.png",
                                            iconHorizontalPlacement: "left",
                                            textAlignment: "left",
                                        },
        
                                        { // Page Title
                                            renderOrder: 4,
                                            componentType: "text",
                                            textValue: "If your provider recommends testing, they will schedule you for a testing session.",
                                            textType: "bodyText",
                                            textAlignment: "left",
                                        },
        
                                        { // Page Title
                                            renderOrder: 5,
                                            componentType: "text",
                                            textValue: "Treatment",
                                            textType: "h3",
                                            iconVisible: true,
                                            iconFileName: "fh-blue-number-3.png",
                                            iconHorizontalPlacement: "left",
                                            textAlignment: "left",
                                        },
        
                                        { // Page Title
                                            renderOrder: 6,
                                            componentType: "text",
                                            textValue: "After 7-10 days, you’ll have your results, and can pursue tailored treatment and counseling options.",
                                            textType: "bodyText",
                                            textAlignment: "left",
                                        },
        
                                    ]
                                },
        
                                { // Body Text - first paragraph
                                    renderOrder: 9,
                                    componentType: "text",
                                    textValue: "<br>To start the first step, 'Consultation', you will need to schedule an appointment through our scheduling site. Press 'Continue' to learn how.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
        
                            ],
        
                            BottomButtonHolderObject: {
                                bottomButtonHolderID: "FH Scheduling 2 Button Holder",
                                bottomButtonHolderItems: [
        
        
                                    { // Button
                                        renderOrder: 1,
                                        componentType: "button",
                                        buttonType: "normal",
                                        buttonStyle: "primary",
                                        colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        iconVisible: false,
                                        textValue: "Continue",
                                        destination: "fh-openSchedulingSection-002" // Link out to scheduling
                                    },
        
                                ]
                            },
                        },
        
                        // Scheduling Screen 2
                        {
                            id: "fh-openSchedulingSection-002",
                            navTitle: "null",
                            keywords: "schedule, test",
                            authors: "Maddox Binder",
                            lastUpdated: "11192024",
                            hasVariables: true,
                            hasLock: false,
        
                            pageItems: [
        
                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Scheduling Continued",
                                    textType: "h2"
                                },
        
                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "The button below will take you into our scheduling site. Please fill out all information and answer questions as instructed.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Important Tip!",
                                    textType: "h4"
                                },
        
                                { // Body Text - first paragraph
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Near the end of the form, you will see the box displayed below:",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
                                { // Image
                                    renderOrder: 5,
                                    componentType: "image",
                                    fileName: "fh-scheduling-openscheduling.gif",
                                    sizeOfPageTaken: "40%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },
        
                                { // Body Text - first paragraph
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "When you see this box, please write '<b>FH Screening</b>.' This will let our providers know that you want to discuss signing up for testing.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
                                { // Body Text - first paragraph
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "Please go to the scheduling site to create your appointment!",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
        
                            ],
        
                            BottomButtonHolderObject: {
                                bottomButtonHolderID: "FH Scheduling 2 Button Holder",
                                bottomButtonHolderItems: [
        
        
                                    { // Button
                                        renderOrder: 1,
                                        componentType: "button-external-link",
                                        newTab: true,
                                        buttonType: "normal",
                                        buttonStyle: "primary",
                                        colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                        iconVisible: false,
                                        textValue: "Open the Scheduling Site",
                                        externalLink: "https://www.osfmychart.org/OSFMyChart/openscheduling/SignupAndSchedule/EmbeddedSchedule?id=19012141,19004172,10000094,19009962,1533,10000143,10000108,10000060,10000186&vt=1004&dept=11102001,11161801,11100107,11162301&linksource=fh"
                                    },
        
                                ]
                            },
                        },
                    ]
        
        }

    ]
}

export const en_fh_optOut_myChart: ContactUsObject = {
    id: "contactUsFhOptOut",
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