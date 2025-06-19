// FH Open Scheduling Message

import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_fh_OpenScheduling_book: BookObject = {
    bookId: "fhOpenScheduling",

    chapterObjects: [

        // Introduction Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_introduction_chapter",
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

                // Splash Screen
                {
                    id: "page-fhSplashScreen",
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
                            fileName: "osf-logo-horizontal-teal-black.png",
                            sizeOfPageTaken: "20%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "greenman-centertext-v9.gif",
                            sizeOfPageTaken: "20%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 1 Button Holder",
                        bottomButtonHolderItems: [

                            /* { // Image
                                renderOrder: 0,
                                componentType: "image",
                                fileName: "downarrow.gif",
                                sizeOfPageTaken: "20%",
                                animationName: "fade-up",
                                pageOrientation: "portrait",
                                hasDropShadow: false,
                            }, */

                            { // Down Arrow GIF
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "icon",
                                iconFileName: "downarrow.gif",
                                buttonStyle: "primary",
                                iconVisible: false,
                                iconHorizontalPlacement: "center",
                                /*  colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                                    colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)", */
                                destination: "page-next",
                                hasDropShadow: false,
                                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                                iconSizeOverride: "56px"
                            },

                        ]
                    }

                },

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
                            fileName: "fh-intro-1.gif",
                            sizeOfPageTaken: "20%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "It may not be your fault that you have very high cholesterol...",
                            textType: "h4",
                            textAlignment: "left",
                        },


                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Why not?",
                            textType: "h2",
                            colorText: "var(--color-accent-primary-bold-800-default)",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
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
                            fileName: "fh-intro-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "There is an <span style=\"color: var(--color-accent-secondary-bold-800-default);\">80% chance</span> that <span style=\"color: var(--color-accent-secondary-bold-800-default);\">your very high cholesterol is genetic.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Body Text - first paragraph
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "If your LDL cholesterol level is 190 mg/dl or higher, a genetic cause is highly likely.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhIntro003" // Contact Before Visiting Page
                            },

                        ]
                    },
                },

                // Introduction Screen 3
                {
                    id: "page-fhIntro003",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12092024",
                    pageBackgroundColor: "var(--osfBrand-tealgray-50, #F4FBFC)",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-intro-3.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "FH, a genetic disease, is the <span style=\"color: var(--color-accent-primary-bold-800-default);\">direct cause</span> of high cholesterol in <span style=\"color: var(--color-accent-primary-bold-800-default);\">4 out of 5</span> affected people.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Holder Horizontal
                            renderOrder: 4,
                            componentType: "page-holder-horizontal",
                            // colorBackground: "darkred",
                            // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.30), 0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
                            marginSides: "0px",
                            width: "100%",
                            gap: "md",


                            pageSectionItems: [

                                { // Information Icon Button
                                    renderOrder: 0,
                                    componentType: "button",
                                    buttonType: "icon",
                                    iconFileName: "info-icon-fh.png",
                                    iconHorizontalPlacement: "left",
                                    colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                                    colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    destination: "modal-001"
                                },

                                { // Page Section Component
                                    renderOrder: 6,
                                    componentType: "page-section",
                                    marginSides: "",
                                    // colorBackground: "linear-gradient(90deg, #CEF7FF 0%, var(--color-primary-container-default, #A3EEFF) 68.65%)",
                                    colorBackground: "var(--color-primary-container-default)",
                                    pageSectionItems: [

                                        { // Caption
                                            renderOrder: 2,
                                            componentType: "text",
                                            textValue: "Tap the <b>Information</b> button on any page to see more details.",
                                            textType: "caption",
                                            textAlignment: "left",
                                            colorText: "var(--color-on-primary-container)",
                                        },
                                    ]
                                },

                            ]

                        },


                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhIntro004" // Counter Troubles Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Is FH the Cause?",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If your cholesterol is very high — 190 mg/dL or more — there is a good chance (about 80%) it could be caused by something called familial hypercholesterolemia, or FH<sup>(1)</sup>. FH is a condition that runs in families and causes high cholesterol starting from birth. If FH is left untreated, it can lead to early heart disease<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "FH is different from the kind of high cholesterol that comes from what you eat or how active you are. To know for sure if you have FH, you can get a special test called a genetic test. This test can tell if FH is the reason for your high cholesterol.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Knowing if you have FH can help your doctor choose the best treatment to lower your cholesterol and keep your heart healthy.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "You can sign up for testing today to see if FH is the cause of your high cholesterol.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-primary-interact-bold-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-primary-interact-bold-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-primary-interact-bold-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    iconHorizontalPlacement: "left",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes.</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
                            ]
                        }
                    ]
                },

                // Introduction Screen 4
                {
                    id: "page-fhIntro004",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12092024",
                    pageBackgroundColor: "var(--osfBrand-magentagray-50, #FFF7FD)",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-intro-4.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "People with FH who are diagnosed and treated <span style=\"color: var(--color-accent-tertiary-bold-800-default);\">live 20-30 years longer.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhIntro005" // Counter Troubles Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-insurance-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Live Longer? How?",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Familial hypercholesterolemia (FH) is a condition that causes very high cholesterol from birth. This happens because of changes in certain genes that affect how cholesterol is cleared from the blood. If FH isn’t treated, the extra cholesterol can build up in the arteries, which can lead to heart problems like heart attacks and strokes starting as early as age 40<sup>(1)</sup>. Without treatment, FH can shorten a person’s life by 20–30 years<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Many people don’t know they have FH until it’s too late, often after age 40, and 20% of them have already had heart problems by then<sup>(2)</sup>. But, there’s good news! There are medicines that can help lower cholesterol and reduce the risk of heart problems. With early treatment, people with FH can live longer and healthier lives.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-tertiary-700-default, #487D02) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-tertiary-600-default, #579605) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-tertiary-bolder-900-default, #2A4A00) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; </a></li><li><a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf\" target=\"_blank\">Medeiros & Bourbon, 2023,</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Introduction Screen 5
                {
                    id: "page-fhIntro005",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12092024",
                    pageBackgroundColor: "var(--osfBrand-orangegray-50, #FCF9F4)",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-intro-5.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "<span style=\"color: var(--color-accent-warning-bold-800-default);\">The right treatment</span> could <span style=\"color: var(--color-accent-warning-bold-800-default);\">lower your risk</span> of heart disease greatly.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 5 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhIntro006" // Counter Troubles Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-cost-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Lower Risk with Testing",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "FH is a condition that causes high cholesterol starting at birth. This can raise your chance of heart disease. But the good news is that getting tested and starting treatment early can really help.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Studies show that medicine like statins can lower your risk by a lot—up to 76%. After 10 years of treatment, your risk can be the same as someone without FH, and it can stay that way with continued care<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "That’s why it’s so important to catch FH early. With the right treatment, you can keep your heart healthy for many years.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Don’t wait—sign up for genetic testing today to take the first step!",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #487D02) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #579605) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #2A4A00) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; </a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Introduction Screen 6
                {
                    id: "page-fhIntro006",
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
                            fileName: "fh-intro-6.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Take your <span style=\"color: var(--color-accent-secondary-bold-800-default);\">health</span> into your <span style=\"color: var(--color-accent-secondary-bold-800-default);\">own hands</span> with genetic testing for FH.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Continue on to learn more about how signing up for genetic testing can benefit you and your family, and how to schedule your consultation!",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Page 6 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 4,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhHomeChapter" // Counter Troubles Page
                            },

                        ]
                    },
                },

            ]

        },

        // Home Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_home_chapter",
            progressBarVisible: false,
            progressBarColor: "var(--color-accent-success-bold-800-default)",
            progressBarColorBackground: "var(--color-accent-success-lighter-200-default)",
            chapterBackgroundColor: "#F7F9FA",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

            pageObjects: [

                // Home Screen ----------------------------------------------------------------------------------------------
                {
                    id: "page-fhHomeChapter",
                    navTitle: "Home",
                    keywords: "faq, frequently asked questions",
                    authors: "Maddox Binder",
                    lastUpdated: "11192024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-catalog-header.png",
                            sizeOfPageTaken: "20%",
                            animationName: "fade-up",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Your Next Step to a Healthier Heart",
                            textType: "h2",
                            colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
                        },

                        { // Button Normal
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            iconVisible: false,
                            iconFileName: "schedule-icon-fh.png",
                            textValue: "Schedule Appointment",
                            newTab: true,
                            destination: "fh-openSchedulingSection-001"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "You may be at risk for familial hypercholesterolemia (FH), a genetic condition that puts you at higher risk for heart disease. The good news? Early detection leads to effective treatment.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Body Text
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "Scheduling your consultation is quick and easy. If you’re ready, book your appointment now. Need more information first? Explore how FH testing can benefit you, your loved ones, and your peace of mind.",
                            //Need more information first? Explore how FH testing can benefit you, your loved ones, and your peace of mind.
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        /* { // Body Text
                            renderOrder: 5,
                            componentType: "text",
                            textValue: "<br>Frequently Asked Questions:",
                            textType: "h3"
                        },
                */
                        // Page Section Component

                        {
                            renderOrder: 6,
                            componentType: "page-section",
                            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30",
                            marginSides: "8px",
                            colorBackground: "var(--osfBrand-limegray-100)",
                            pageSectionItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "fh-catalog-education.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "How am I affected?",
                                    textType: "h3",
                                    colorText: "var(--color-on-secondary-light)",
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "How does FH affect you directly? What does it mean for your personal health?",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                    colorText: "var(--color-on-secondary-container)",
                                },

                                { // Caption
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Read Time: 3 minutes",
                                    iconVisible: true,
                                    iconFileName: "fh-read-time-lime-icon.png",
                                    iconHorizontalPlacement: "left",
                                    textType: "caption",
                                    colorText: "var(--color-on-secondary-container)",
                                    iconSizeOverride: "--spacing-2xl",
                                },

                                { // Button Normal
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    textValue: "Explore",
                                    destination: "page-fh-EducationSection001"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                            ]
                        },

                        // Page Section Component

                        {
                            renderOrder: 7,
                            componentType: "page-section",
                            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30",
                            marginSides: "8px",
                            colorBackground: "var(--osfBrand-tealgray-100)",
                            pageSectionItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "fh-catalog-family.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Does my family benefit?",
                                    textType: "h3",
                                    colorText: "var(--color-on-primary-light)",
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "What does FH mean for your family and their well-being?",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                    colorText: "var(--color-on-primary-container)",
                                },

                                { // Caption
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Read Time: 3 minutes",
                                    iconVisible: true,
                                    iconFileName: "fh-read-time-teal-icon.png",
                                    iconHorizontalPlacement: "left",
                                    textType: "caption",
                                    colorText: "var(--color-on-primary-container)",
                                    iconSizeOverride: "--spacing-2xl",
                                },

                                { // Button Normal
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-primary-interact-bold-default, #00677E) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #0091B1) 0%, var(--color-primary-interact-bold-default, #00677E) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #004858) 0%, var(--color-primary-interact-bold-default, #00677E) 100%)",
                                    iconVisible: false,
                                    textValue: "Explore",
                                    destination: "page-fh-FamilySection001"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                            ]
                        },

                        // Page Section Component

                        {
                            renderOrder: 8,
                            componentType: "page-section",
                            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30",
                            marginSides: "8px",
                            colorBackground: "var(--osfBrand-orangegray-100)",
                            pageSectionItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "fh-catalog-cost.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "What are the savings?",
                                    textType: "h3",
                                    colorText: "var(--color-on-warning-light)",
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "How can FH testing and the treatment it unlocks benefit my future finances?",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                    colorText: "var(--color-on-warning-container)",
                                },

                                { // Caption
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Read Time: 2 minutes",
                                    iconVisible: true,
                                    iconFileName: "fh-read-time-orange-icon.png",
                                    iconHorizontalPlacement: "left",
                                    textType: "caption",
                                    colorText: "var(--color-on-warning-container)",
                                    iconSizeOverride: "--spacing-2xl",
                                },

                                { // Button Normal
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #9E6300) 0%, var(--color-warning-interact-bold-default, #855300) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #BC7600) 0%, var(--color-warning-interact-bold-default, #855300) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #5D3A00) 0%, var(--color-warning-interact-bold-default, #855300) 100%)",
                                    iconVisible: false,
                                    textValue: "Explore",
                                    destination: "page-fh-CostSection002"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                            ]
                        },

                        // Page Section Component

                        {
                            renderOrder: 9,
                            componentType: "page-section",
                            boxShadow: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.30",
                            marginSides: "8px",
                            colorBackground: "var(--osfBrand-magentagray-100)",
                            pageSectionItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "fh-catalog-insurance.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "How am I protected?",
                                    textType: "h3",
                                    colorText: "var(--color-on-tertiary-light)",
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "What laws protect me and my genetic data?",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                    colorText: "var(--color-on-tertiary-container)",
                                },

                                { // Caption
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Read Time: 1 minute",
                                    textType: "caption",
                                    iconVisible: true,
                                    iconFileName: "fh-read-time-magenta-icon.png",
                                    iconHorizontalPlacement: "left",
                                    colorText: "var(--color-on-tertiary-container)",
                                    iconSizeOverride: "--spacing-2xl",
                                },

                                { // Button Normal
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-tertiary-700-default, #C2349C) 0%, var(--color-tertiary-interact-bold-default, #AF1685) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-tertiary-600-default, #D651B3) 0%, var(--color-tertiary-interact-bold-default, #AF1685) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-tertiary-bolder-900-default, #80005E) 0%, var(--color-tertiary-interact-bold-default, #AF1685) 100%)",
                                    iconVisible: false,
                                    textValue: "Explore",
                                    destination: "page-fh-InsuranceSection001"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                            ]
                        },

                        { // Body Text
                            renderOrder: 10,
                            componentType: "text",
                            textValue: "Sign up for an appointment to discuss the benefits of FH Genetic Testing with your healthcare provider.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Button Normal
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-secondary-interact-bold-default, #3C6A00) 100%)",
                            iconVisible: false,
                            textValue: "Schedule Appointment",
                            newTab: true,
                            destination: "fh-openSchedulingSection-001"
                        },

                    ],
                },
            ]
        },

        // Education Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_education_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-secondary-bold-800-default, #3C6A00)",
            progressBarColorBackground: "var(--color-accent-secondary-lighter-200-default, #C6F090)",
            chapterBackgroundColor: "var(--osfBrand-limegray-50, #F7FAF3)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-secondary-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",

            pageObjects: [
                // Education Screen 1
                {
                    id: "page-fh-EducationSection001",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-1.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "<span style=\"color: var(--color-accent-secondary-bold-800-default);\">90%</span> of the 1.3 million Americans living with FH are <span style=\"color: var(--color-accent-secondary-bold-800-default);\">not diagnosed.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-EducationSection002" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "How many are affected?",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Familial hypercholesterolemia (FH) is a common genetic condition that affects about 1 in 300 people, but only 10% of the 1.3 million Americans with FH know they have it<sup>(1)</sup>. This means that over a million people are at a higher risk of heart disease without knowing it. FH causes high LDL (“bad”) cholesterol from birth, which can lead to heart disease if not treated<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "It’s important to catch FH early. Research shows that if people are diagnosed early, even as kids, they can start treatment that lowers their risk of heart problems later in life<sup>(1)</sup>. But many people don’t find out they have FH until after age 40, when they’ve already had serious heart issues<sup>(2)</sup>. The best way to find out if you have FH is with genetic testing.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Schedule an appointment with our providers to discuss how FH testing could benefit your health.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li><li><a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf\" target=\"_blank\">Medeiros & Bourbon, 2023; Genetic Testing in Familial Hypercholesterolemia: Is It for Everyone?</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Education Screen 2
                {
                    id: "page-fh-EducationSection002",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Untreated FH results in <span style=\"color: var(--color-accent-secondary-bold-800-default);\">22x higher risk</span> of heart disease.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-EducationSection003" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "The Risks of FH",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Familial hypercholesterolemia (FH) greatly increases the risk of heart disease if not treated.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: " Although only 0.5% of people have FH, this small group represents 20% of heart attacks in men under 45. People with FH are 22 times more likely to have a heart attack before age 45 than people without FH<sup>(2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "The high LDL (“bad”) cholesterol levels from birth make heart disease more likely. If not treated, half of men and one in three women with FH will have a heart attack by age 60<sup>(1)</sup>. Cholesterol buildup happens slowly, so signs of heart problems don’t show up until it’s too late<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Even at the same cholesterol level, people with FH have a higher risk of heart disease than people without FH. Luckily, modern treatments can help lower this risk, so it’s important to get diagnosed early<sup>(3)</sup>. You can help protect your heart by scheduling an appointment to discuss FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.cdc.gov/heart-disease-family-history/testing/index.html#:~:text=About%2020%2D40%25%20of%20people,your%20risk%20of%20heart%20disease\" target=\"_blank\">CDC; Testing for Familial Hypercholesterolemia</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },
                            ]
                        }
                    ]
                },

                // Education Screen 3
                {
                    id: "page-fh-EducationSection003",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-3.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Testing can <span style=\"color: var(--color-accent-secondary-bold-800-default);\">prevent</span> deadly cardiac events such as <span style=\"color: var(--color-accent-secondary-bold-800-default);\">strokes</span> and <span style=\"color: var(--color-accent-secondary-bold-800-default);\">heart attacks.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-EducationSection004" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "FH and CAD Prevention",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Familial hypercholesterolemia (FH) is usually diagnosed later in life, often around age 50. By then, many people with FH have already had a serious health problem, like a stroke or heart attack<sup>(2)</sup>. Getting diagnosed and treated early can prevent these problems, but many people don’t know they have FH until after they’ve had a heart problem.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: " In fact, untreated FH patients are 10 times more likely to die of any cause before age 40, and 100 times more likely to die from coronary artery disease (CAD) compared to the most people<sup>(1)</sup>. The good news is, treatment can help. Studies show that treatment can lower the chance of heart problems by 76%<sup>(2)</sup>. Modern treatments can lower bad cholesterol (LDL) by more than 50% in just six months, helping people keep their cholesterol healthy for the long term<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Finding out if you have FH gives you the chance to get these life-saving treatments.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Education Screen 4
                {
                    id: "page-fh-EducationSection004",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-4.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "<span style=\"color: var(--color-accent-secondary-bold-800-default);\">Decrease your risk</span> of coronary heart disease by <span style=\"color: var(--color-accent-secondary-bold-800-default);\">76%</span> by getting tested and treated for FH.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-EducationSection005" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [
                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "FH Testing Saves Lives",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If you have familial hypercholesterolemia (FH), getting tested and treated early can lower your risk of heart disease. Research shows that taking statin medicine can lower your chances of heart problems by 76% compared to not taking any treatment<sup>(2)</sup>. After 10 years of treatment, your risk of heart disease can be the same as most people’s<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Before statins, people with untreated FH were much more likely to die young from heart disease. But with treatment, they can live much longer and healthier lives <sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Take control of your heart health. Schedule to discuss FH genetic testing today and reduce your risk of heart disease.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Education Screen 5
                {
                    id: "page-fh-EducationSection005",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-5.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Cut your cholesterol in <span style=\"color: var(--color-accent-secondary-bold-800-default);\">half in only six months</span> with effective treatment for FH.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 5 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-EducationSection006" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Halve Your Cholesterol",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "For people with familial hypercholesterolemia (FH), effective treatment can lower LDL cholesterol by half in just six months. Medicines like statins and alirocumab can quickly and safely bring cholesterol to healthier levels<sup>(2)</sup>. Many people with FH reach their best cholesterol levels within six months, and they can keep these levels long-term<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Treatment not only lowers cholesterol but also reduces the risk of serious heart problems like heart attacks and strokes by 76% <sup>(2)</sup>. If one medicine doesn’t work, there are many other options to help.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Start working toward lower cholesterol and better heart health — schedule an appointment to discuss FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Education Screen 6
                {
                    id: "page-fh-EducationSection006",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-education-6.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Access to more effective treatments can only be given with <span style=\"color: var(--color-accent-secondary-bold-800-default);\">testing and diagnosis.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Education 6 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhHomeChapter" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-education-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Unlock FH Treatment",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "A diagnosis of familial hypercholesterolemia (FH) could open the door to treatments that are specifically designed for your condition. FH patients often need more than just standard cholesterol-lowering drugs. Many effective treatments, like certain statins and PCSK9 inhibitors, are only available with an FH diagnosis (1, 2).",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "For some, the most powerful treatments combine cholesterol-lowering medications with therapies like lipoprotein aphaeresis, a procedure that reduces cholesterol even further. In fact, FH patients who received aphaeresis along with their medication had a 72% lower rate of heart-related events over 10 years compared to those on drug therapy alone (2). Early and effective treatment, possible only with an FH diagnosis, can lower the risk of heart attacks and strokes and help you live a healthier life.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Start working toward lower cholesterol and better heart health — schedule an appointment to discuss FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-secondary-700-default, #487D02) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-secondary-600-default, #579605) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-secondary-bolder-900-default, #2A4A00) 0%, var(--color-accent-secondary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },
            ]
        },

        // Family Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_family_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-primary-bold-800-default, #00677E)",
            progressBarColorBackground: "var(--color-accent-primary-lighter-200-default, #A3EEFF)",
            chapterBackgroundColor: "var(--osfBrand-tealgray-50, #F4FBFC)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",


            pageObjects: [
                // Family Screen 1
                {
                    id: "page-fh-FamilySection001",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-1.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Children under 18 who are treated for FH have a <span style=\"color: var(--color-accent-primary-bold-800-default);\">96% lower risk</span> of heart attacks and other cardiac events.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection002" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Protect Young Hearts",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Treating familial hypercholesterolemia (FH) early can save lives. Research shows that children treated before age 18 have a 96% lower chance of having serious heart problems before they turn 40 compared to those who are not treated<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "In families where children were diagnosed with FH, many parents who didn’t get early treatment had already developed heart disease by age 37, and 10% had died due to heart conditions by their early 40s<sup>(2, 3)</sup>. Early treatment leads to a healthier heart and a longer life. Children who are tested and treated for FH are more likely to keep heart-healthy habits as they get older<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Schedule an appointment to discuss FH genetic testing to protect your and your child’s heart health.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf\" target=\"_blank\">Medeiros & Bourbon, 2023; Genetic Testing in Familial Hypercholesterolemia: Is It for Everyone?</a></li><li><a href=\"https://www.nejm.org/doi/pdf/10.1056/NEJMoa1816454\" target=\"_blank\">Luirink et al., 2019; 20-Year Follow-up of Statins in Children with Familial Hypercholesterolemia</a></li><li><a href=\"https://jamanetwork.com/journals/jama/fullarticle/199118#google_vignette\" target=\"_blank\">Wiegman et al., 2004; Efficacy and Safety of Statin Therapy in Children With Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Family Screen 2
                {
                    id: "page-fh-FamilySection002",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "<span style=\"color: var(--color-accent-primary-bold-800-default);\">Less time</span> exposed to high cholesterol <span style=\"color: var(--color-accent-primary-bold-800-default);\">decreases risk</span> of heart disease.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Body Text - first paragraph
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Getting your children or other family members tested at a younger age gives them a chance at a healthier life.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection003" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Early Care, Strong Heart",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Taking care of high cholesterol early is important for heart health. Studies show that your risk of heart disease depends not only on how high your cholesterol is, but also on how long your blood vessels are exposed to high LDL (“bad”) cholesterol<sup>(1)</sup>. The sooner cholesterol is lowered, the less harm is done to your blood vessels, making early treatment essential.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "For children with FH, research shows that starting treatment between ages eight to 18 can slow down, or even reverse, the buildup of plaque in the arteries, which is one of the first signs of heart disease<sup>(1)</sup>. Getting diagnosed with FH can help set up a plan for your family to reduce the risk of heart problems in the future. Don’t wait - schedule an appointment to discuss FH testing to help protect your family’s heart health.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.nejm.org/doi/pdf/10.1056/NEJMoa1816454\" target=\"_blank\">Luirink et al., 2019; 20-Year Follow-up of Statins in Children with Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Family Screen 3
                {
                    id: "page-fh-FamilySection003",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-3.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Children without symptoms usually don’t qualify without <span style=\"color: var(--color-accent-primary-bold-800-default);\">family history.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Body Text - first paragraph
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Getting tested yourself could open up proactive, personalized healthcare plans for your family.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection004" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Qualify Your Family",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "FH is often silent, which means it doesn’t show clear signs until serious heart problems happen. Many kids with FH don’t get signs like fatty bumps under the skin or around the eyes until their cholesterol has been too high for a long time<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Because there are often no early signs, doctors may not test kids for FH unless someone in the family already has it. If there’s no family history, the condition can be missed until it’s too late.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Genetic testing helps find FH early. If you get tested, it can also help your family get tested and treated sooner.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 5,
                                    componentType: "text",
                                    textValue: "Help protect your family’s health by scheduling to discuss FH testing.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 8,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Family Screen 4
                {
                    id: "page-fh-FamilySection004",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-4.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "If you test positive, tests for your children will have close to <span style=\"color: var(--color-accent-primary-bold-800-default);\">100% accuracy.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection006" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Family FH Screening",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "When someone finds out they have familial hypercholesterolemia (FH), it helps doctors check if close family members have it too. If a parent has a known FH gene change, testing their children and other close relatives can be almost 100% correct<sup>(1)</sup>. This helps kids get the right care early and avoid mistakes in diagnosis.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "This kind of testing is called cascade screening. It helps find other family members who might have FH. Sometimes, it costs less or is even free. Getting tested can give your family important health information and help them get good, affordable care <sup>(2)</sup>. Help keep your family healthy – schedule to discuss FH testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://pubmed.ncbi.nlm.nih.gov/23469913/\" target=\"_blank\">Alonso et al., 2014; Early diagnosis and treatment of familial hypercholesterolemia: improving patient outcomes</a></li><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                /* // Family Screen 5
                {
                    id: "page-fh-FamilySection005",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-5.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Your family’s testing may be <span style=\"color: var(--color-accent-primary-bold-800-default);\">discounted or free.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 5 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection006" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Affordable FH Testing",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If you are told you have familial hypercholesterolemia (FH), your family members might be able to get genetic testing for free or at a lower cost. This is called cascade screening. It means close relatives — like your children or brothers and sisters — can get tested too. If they have FH, they can start treatment early. This helps them stay healthy and avoid serious problems like heart attacks or big surgeries later on<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Some labs and groups, like Invitae and Ambry Genetics, help families pay for testing. They have programs like Invitae Unlock™ and Ambry’s Patient Assistance Program that lower or even remove the cost for some people. Other groups, like FORCE and the Patient Advocate Foundation, help families find more ways to get help paying for testing<sup>(3, 4)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Talk to your doctor to learn more and see if genetic testing is right for your family.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.heart.org/en/news/2020/07/23/genetic-testing-a-tool-for-families-dealing-with-certain-heart-diseases\" target=\"_blank\">American Heart Association, 2024, Understanding Cascade Screening</a></li><li><a href=\"https://bhf.org.uk\" target=\"_blank\">British Heart Foundation, 2024, Cascade testing for inherited high cholesterol</a></li><li><a href=\"https://facingourrisk.org\" target=\"_blank\">FORCE, 2024, Health insurance protections under GINA</a></li><li><a href=\"https://www.invitae.com/us/providers/billing?tab=united-states\" target=\"_blank\">Invitae, 2024</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                }, */

                // Family Screen 6
                {
                    id: "page-fh-FamilySection006",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-6.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "It’s <span style=\"color: var(--color-accent-primary-bold-800-default);\">never too early</span> to be screened for FH.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Research recommends screening as early as two years of age for children with family history.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 6 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-FamilySection007" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-family-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "The Sooner the Better",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "For kids with familial hypercholesterolemia (FH), starting treatment early can make all the difference. Research shows that common medicines, like statins, are safe and work well for children. Some statins, like pravastatin and pitavastatin, can be used by kids as young as eight years old. Others can be used starting at age 10<sup>(1)</sup>. Studies have found that starting statin treatment early can help protect the arteries, reducing plaque buildup and heart disease risk as children grow older<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Doctors also say kids with a family history of high cholesterol or heart problems should get checked for FH early. Some children can be tested as young as the age of two<sup>(2)</sup>. Finding FH early means kids can get the care they need to stay healthy as they grow up. To help your child stay healthy, schedule now to discuss FH testing.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-primary-700-default, #487D02) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-primary-600-default, #579605) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-primary-bolder-900-default, #2A4A00) 0%, var(--color-accent-primary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225\" target=\"_blank\">McGowan et al., 2019; Diagnosis and Treatment of Heterozygous Familial Hypercholesterolemia</a></li><li><a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf\" target=\"_blank\">Medeiros & Bourbon, 2023; Genetic Testing in Familial Hypercholesterolemia: Is It for Everyone?</a></li><li><a href=\"https://jamanetwork.com/journals/jama/fullarticle/199118#google_vignette\" target=\"_blank\">Wiegman et al., 2004; Efficacy and Safety of Statin Therapy in Children With Familial Hypercholesterolemia</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Family Screen 7
                {
                    id: "page-fh-FamilySection007",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-family-7.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Get <span style=\"color: var(--color-accent-primary-bold-800-default);\">tested and diagnosed</span> to ensure better care for you and your family.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Family 7 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 0,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhHomeChapter" // Contact Before Visiting Page
                            },
                        ]
                    },
                },
            ]
        },

        // Insurance Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_insurance_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-tertiary-bold-800-default, #AF1685)",
            progressBarColorBackground: "var(--color-accent-tertiary-lighter-200-default, #FFD7F4)",
            chapterBackgroundColor: "var(--osfBrand-magentagray-50, #FFF7FD)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-tertiary-700-default, #C2349C) 0%, var(--color-accent-tertiary-bold-800-default, #AF1685) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-tertiary-600-default, #D651B3) 0%, var(--color-accent-tertiary-bold-800-default, #AF1685) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-tertiary-900-default, #80005E) 0%, var(--color-accent-tertiary-bold-800-default, #AF1685) 100%)",


            pageObjects: [
                // Insurance Screen 1
                {
                    id: "page-fh-InsuranceSection001",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-insurance-1.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "In Illinois, genetic data is <span style=\"color: var(--color-accent-tertiary-bold-800-default);\">protected by HIPAA.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Your genetic data cannot be used against you by your employer or your insurance.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Insurance 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-InsuranceSection002" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-insurance-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Genetic Protections",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "In Illinois, your genetic information is protected by strong privacy laws. A national law called HIPAA says your genetic data is private health information. This means doctors and insurance companies must keep it safe and cannot share it without your permission.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Illinois also has a special law called the Genetic Information Privacy Act (GIPA). This law says employers are not allowed to ask for or use your genetic information when making job decisions. If someone breaks this law, they can be fined up to $15,000<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "You can feel safe knowing your genetic information is private. Schedule to talk about FH genetic testing with us today, knowing your data is protected.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-tertiary-700-default, #487D02) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-tertiary-600-default, #579605) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-tertiary-bolder-900-default, #2A4A00) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://schneiderwallace.com\" target=\"_blank\">Schneider Wallace Cottrell Konecky LLP. 2024, The Illinois Genetic Information Privacy Act (GIPA)</a></li><li><a href=\"https://dandodiary.com\" target=\"_blank\">The D&O Diary, 2024, What you Need to Know about Illinois’ Genetic Information Privacy Act</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Insurance Screen 2
                {
                    id: "page-fh-InsuranceSection002",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-insurance-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Diagnosis and treatment can lead to <span style=\"color: var(--color-accent-tertiary-bold-800-default);\">lower premiums.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Decreasing your cholesterol through better treatment can decrease your insurance premium, saving you money.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Insurance 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-InsuranceSection003" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-insurance-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Don't Stay Untreated",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If your cholesterol is high and not treated, especially with familial hypercholesterolemia (FH), you might have trouble getting life insurance or paying for it. Insurance companies look at cholesterol levels to guess how likely someone is to have heart problems. If your cholesterol is high and untreated, it can increase your chances of heart attacks or strokes, which can make life insurance more expensive or cause you to be denied coverage<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Taking care of your cholesterol can help improve your life insurance options. For some people, getting genetic testing for FH can show the insurance company that they are less likely to have certain heart problems, which might help lower the cost of their insurance. While health insurance companies can’t use genetic information to change prices, life insurance companies may look at it if you choose to share it<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Consider getting genetic testing for FH to help manage your cholesterol and get better life insurance options. Schedule an appointment today to discuss it with a provider!",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-tertiary-700-default, #487D02) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-tertiary-600-default, #579605) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-tertiary-bolder-900-default, #2A4A00) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://acc.org<\" target=\"_blank\">American College of Cardiology, 2024, Clinical genetic testing for familial hypercholesterolemia.</a></li><li><a href=\"https://familyheart.org\" target=\"_blank\">Family Heart Foundation, 2024, Getting a genetic test for FH</a></li><li><a href=\"https://pinnaclequote.com\" target=\"_blank\">PinnacleQuote, 2024, Will High Cholesterol Affect My Life Insurance Rates</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Insurance Screen 3
                {
                    id: "page-fh-InsuranceSection003",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-insurance-3.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Your health insurance <span style=\"color: var(--color-accent-tertiary-bold-800-default);\">cannot drop you</span> based on your genetic data.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "The Genetic Information Nondiscrimination Act (GINA) protects people from discrimination based on their genetics.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Insurance 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-InsuranceSection004" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-insurance-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Protections Under GINA",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "The Genetic Information Nondiscrimination Act (GINA) is a law that helps protect you from being treated unfairly because of your genes. This became federal law in 2008. It says that health insurance companies can't use your genetic information—like test results for a condition called familial hypercholesterolemia (FH)—to take away your insurance, raise your costs, or say you have a health problem before you really do<sup>(2, 4)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "GINA says that health insurance companies are not allowed to use your genetic information to decide if you can get insurance or how much it will cost. Another law called HIPAA helps protect your genetic information by keeping it private. <sup>(1, 3)</sup>. These laws help keep your genetic information safe when it comes to health insurance. But they don’t cover other types of insurance, like disability or long-term care insurance<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Feel secure in your genetic testing - schedule an appointment today, knowing your health insurance coverage is protected.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-tertiary-700-default, #487D02) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-tertiary-600-default, #579605) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-tertiary-bolder-900-default, #2A4A00) 0%, var(--color-accent-tertiary-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://calhipaa.com\" target=\"_blank\">calHIPAA, 2023, How Does the HIPAA Law Protect Against Genetic Information Discrimination?</a></li><li><a href=\"https://facingourrisk.org\" target=\"_blank\">Facing Our Risk of Cancer Empowered (FORCE), 2024, Health insurance protections under GINA</a></li><li><a href=\"https://hipaahealthlaw.foxrothschild.com\" target=\"_blank\">Fox Rothschild LLP, 2022, Federal Law Passed to Protect Use and Disclosure of Genetic Information</a></li><li><a href=\"https://genome.gov\" target=\"_blank\">National Human Genome Research Institute. (n.d.), Privacy in Genomics</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Insurance Screen 4
                {
                    id: "page-fh-InsuranceSection004",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-insurance-4.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "<span style=\"color: var(--color-accent-tertiary-bold-800-default);\">More protections</span> are added every year. Stay informed about genetic data privacy.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Insurance 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 0,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhHomeChapter" // Contact Before Visiting Page
                            },
                        ]
                    },
                },
            ]
        },

        // Cost Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_cost_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-warning-bold-800-default, #855300)",
            progressBarColorBackground: "var(--color-accent-warning-lighter-200-default, #FFDEA6)",
            chapterBackgroundColor: "var(--osfBrand-orangegray-50, #FCF9F4)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "fh-openSchedulingSection-001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-warning-700-default, #9E6300) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-warning-600-default, #BC7600) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-warning-900-default, #5D3A00) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",

            pageObjects: [
                /* REMOVED FOR COMPLIANCE
                // Cost Screen 1
                {
                    id: "page-fh-CostSection001",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-cost-1.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Out-of-pocket costs after insurance are typically <span style=\"color: var(--color-accent-warning-bold-800-default);\">less than $100.</span>",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Cost 1 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-CostSection002" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-cost-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Cost of FH Testing",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Genetic testing for familial hypercholesterolemia (FH) might cost less than you think. With insurance, most people pay under $100. Labs like Invitae and Ambry Genetics help keep costs low and may offer help to families who need it<sup>(1, 2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "If you don’t have insurance, testing can cost between $250 and $1,500, depending on the test. But if you follow certain health rules, insurance often pays most of the cost<sup>(2)</sup>. Getting tested early can also save you a lot of money later by helping you avoid big medical bills from heart problems<sup>(1, 4)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Protect your heart and your budget by signing up for FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #487D02) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #579605) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #2A4A00) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://acc.org\" target=\"_blank\">American College of Cardiology, 2024</a></li><li><a href=\"https://buoyhealth.com\" target=\"_blank\">Buoy Health</a></li><li><a href=\"https://familyheart.org\" target=\"_blank\">Family Heart Foundation, 2024</a></li><li><a href=\"https://news.vumc.org\" target=\"_blank\">Vanderbilt University Medical Center, 2023</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                }, */

                // Cost Screen 2
                {
                    id: "page-fh-CostSection002",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-cost-2.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Getting tested and diagnosed for FH can <span style=\"color: var(--color-accent-warning-bold-800-default);\">save you high medical expenses.</span> ",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Find out how you could save on personal medical expenses by scheduling a discussion with our providers.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Cost 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-CostSection003" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-cost-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Save on FH Care",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Identifying FH early may save you considerably in future health care costs. With the right diagnosis, you can start treatments to lower the chances of expensive health problems like heart attacks, strokes, or surgeries<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Studies show that getting genetic testing and starting treatment early helps people stay healthier and save money over time. Patients need fewer hospital visits, pay less for treatments, and help their family members stay healthy too<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Start saving on future health care costs by scheduling an appointment to discuss FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #487D02) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #579605) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #2A4A00) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://acc.org\" target=\"_blank\">American College of Cardiology, 2024</a></li><li><a href=\"https://news.vumc.org\" target=\"_blank\">Vanderbilt University Medical Center, 2023</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Cost Screen 3
                {
                    id: "page-fh-CostSection003",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-cost-3.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Being tested can save your <span style=\"color: var(--color-accent-warning-bold-800-default);\">whole family</span> on costly future care and treatment.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                            destination: "modal-001"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Cost 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-CostSection004" // Contact Before Visiting Page
                            },

                        ]
                    },

                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-cost-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Save for Your Family",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Getting tested for familial hypercholesterolemia (FH) can help not just you, but your whole family. When someone in your family is diagnosed, other close relatives can get tested too. This helps find out who else is at risk and lets them start treatment early. Early treatment can help people live longer and avoid expensive medical problems, like heart surgeries or emergency care<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Many programs even offer free or cheaper tests for family members, making it easier to get the care needed<sup>(3)</sup>. Catching FH early with genetic testing is one of the best ways to prevent heart disease and save money.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Protect your family’s health and finances by scheduling to discuss FH genetic testing today.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #487D02) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #579605) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #2A4A00) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    /* colorText: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideDefault: "var(--color-secondary-interact-bold-default, #3C6A00)",
                                    colorOverrideHover: "var(--color-secondary-interact-bold-hovered, #2A4A00)",
                                    colorOverrideActive: "var(--color-secondary-interact-bold-pressed, #1F3600)", */
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.heart.org/en/news/2020/07/23/genetic-testing-a-tool-for-families-dealing-with-certain-heart-diseases\" target=\"_blank\">American Heart Association, 2024</a></li><li><a href=\"https://bhf.org.uk\" target=\"_blank\">British Heart Foundation, 2024</a></li><li><a href=\"https://npm.sg\" target=\"_blank\">National Precision Medicine Programme, Singapore, 2023</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Cost Screen 4
                {
                    id: "page-fh-CostSection004",
                    navTitle: "null",
                    keywords: "",
                    authors: "Kyle Formella, Maddox Binder",
                    lastUpdated: "12132024",
                    hasVariables: false,
                    hasLock: false,

                    pageItems: [
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "fh-cost-4.gif",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            pageOrientation: "portrait",
                            hasDropShadow: false,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "No insurance? Too expensive? <span style=\"color: var(--color-accent-warning-bold-800-default);\">Talk to us!</span> ",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Schedule with our providers to discuss options for financial aid, and how you can get the best treatment possible for your condition through FH testing.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        /* REMOVED FOR COMPLIANCE
                        { // Page Holder Horizontal
                            renderOrder: 4,
                            componentType: "page-holder-horizontal",
                            // colorBackground: "darkred",
                            // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.30), 0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
                            marginSides: "0px",
                            width: "100%",
                            gap: "md",


                            pageSectionItems: [

                                { // Information Icon Button
                                    renderOrder: 0,
                                    componentType: "button",
                                    buttonType: "icon",
                                    iconFileName: "info-icon-fh.png",
                                    iconHorizontalPlacement: "left",
                                    colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                                    colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    destination: "modal-001"
                                },

                                { // Page Section Component
                                    renderOrder: 6,
                                    componentType: "page-section",
                                    marginSides: "",
                                    // colorBackground: "linear-gradient(90deg, #CEF7FF 0%, var(--color-primary-container-default, #A3EEFF) 68.65%)",
                                    colorBackground: "var(--color-accent-warning-lighter-200-default)",
                                    pageSectionItems: [

                                        { // Caption
                                            renderOrder: 2,
                                            componentType: "text",
                                            textValue: "Select the <b>\"Information\"</b> button to discover alternative financial options!",
                                            textType: "caption",
                                            textAlignment: "left",
                                            colorText: "var(--color-on-warning-container)",
                                        },
                                    ]
                                },

                            ]

                        },*/

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "FH Cost 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fhHomeChapter" // Contact Before Visiting Page
                            },

                        ]
                    },

                    /* REMOVED FOR COMPLIANCE
                    modalObjects: [
                        // Learn More Modal
                        {
                            modalID: "modal-001",
                            modalType: "sheet",
                            modalItems: [

                                { // Image
                                    renderOrder: 1,
                                    componentType: "image",
                                    fileName: "fh-cost-learn.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "fade-up",
                                    pageOrientation: "portrait",
                                    hasDropShadow: false,
                                },

                                { // Page Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Finacial Aid Options",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If you're worried about the cost of genetic testing for familial hypercholesterolemia (FH), there are programs that can help make it cheaper — or even free.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Invitae Labs has programs like Invitae Unlock™ that offer lower-cost or free testing if insurance doesn't cover it. They also work with other companies to give free tests to people who qualify, so more people can get tested and avoid wrong diagnoses<sup>(2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Ambry Genetics has a program that lowers or removes the cost of testing based on how much money you make and how many people are in your family. The application is simple and usually takes about three weeks to process, often saving a lot of money<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 5,
                                    componentType: "text",
                                    textValue: "Other groups like FORCE and the Patient Advocate Foundation can help you find even more resources and guide you through applying for financial help.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Don’t let cost stop you from getting important health information. Talk to your doctor or genetic counselor to learn more about these options, and sign up for FH genetic testing today!",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    colorOverrideDefault: "radial-gradient(40.23% 100% at 50.18% 0%, var(--color-accent-warning-700-default, #487D02) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideHover: "radial-gradient(40.41% 100% at 50.18% 0%, var(--color-accent-warning-600-default, #579605) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    colorOverrideActive: "radial-gradient(116.84% 49.82% at 50.18% 0%, var(--color-accent-warning-bolder-900-default, #2A4A00) 0%, var(--color-accent-warning-bold-800-default, #3C6A00) 100%)",
                                    iconVisible: false,
                                    iconFileName: "schedule-icon-fh.png",
                                    textValue: "Schedule Appointment",
                                    destination: "fh-openSchedulingSection-001"
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss"
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "<br>Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 9,
                                    componentType: "text",
                                    textValue: "<ol><li><a href=\"https://www.ambrygen.com/\" target=\"_blank\">Ambry Genetics, 2024</a></li><li><a href=\"https://www.facingourrisk.org/\" target=\"_blank\">FORCE, 2024</a></li><li><a href=\"https://www.invitae.com/us/providers/billing?tab=united-states\" target=\"_blank\">Invitae, 2024</a></li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ] */
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

export const en_fh_contactUs_openScheduling: ContactUsObject = {

    id: "contactUsTOC",
    hasLock: false,
    pageItems: [

        { // Page Title
            renderOrder: 1,
            componentType: "text",
            textValue: "Contact Us",
            textType: "h2"
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