import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_fh_insuranceChapter_book: BookObject = {
    bookId: "fhInsuranceChapterSolo",

    chapterObjects: [

        // Insurance Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_insurance_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-tertiary-bold-800-default, #AF1685)",
            progressBarColorBackground: "var(--color-accent-tertiary-lighter-200-default, #FFD7F4)",
            chapterBackgroundColor: "var(--osfBrand-magentagray-50, #FFF7FD)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "page-fh-InsuranceSection001",
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
                                    textValue: "In Illinois, your genetic information is safeguarded by strong privacy laws, including the federal HIPAA regulations. HIPAA ensures that your genetic data is classified as protected health information, meaning healthcare providers and insurers must handle it responsibly and cannot share it without your consent.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Additionally, Illinois has its own Genetic Information Privacy Act (GIPA), which goes beyond federal protections by making it illegal for employers to request or use genetic information in employment decisions. This law ensures that your genetic information cannot be used against you by your employer, and any misuse carries fines of up to $15,000<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "You can feel confident that your genetic information will remain private. Sign up for FH genetic testing today, knowing your data is protected.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-InsuranceSection001"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4"
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li>Schneider Wallace Cottrell Konecky LLP. 2024, The Illinois Genetic Information Privacy Act (GIPA). Retrieved from schneiderwallace.com</li><li>The D&O Diary, 2024, What you Need to Know about Illinois’ Genetic Information Privacy Act. Retrieved from dandodiary.com</li></ol>",
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
                            textValue: "<span style=\"color: var(--color-accent-tertiary-bold-800-default);\">Untreated</span> high cholesterol increases your chances of being <span style=\"color: var(--color-accent-primary-bold-800-default);\">denied</span> by life insurance.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Getting correctly diagnosed can decrease your premium, getting you a better deal.",
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
                                    textValue: "If your cholesterol is high and untreated - especially with familial hypercholesterolemia (FH) - you might face challenges getting life insurance or securing affordable premiums. Life insurance companies look closely at cholesterol levels to estimate a person’s risk for heart problems. Unmanaged high cholesterol increases the risk of heart attacks and strokes, making applicants more likely to receive high premiums or even be denied coverage altogether<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Taking steps to manage cholesterol can improve your life insurance options. For some, genetic testing for FH can provide insurers with a detailed risk profile, showing a lower-than-expected risk for certain heart conditions, which may help lower premium costs. While health insurers are restricted by HIPAA and GINA from using genetic data to adjust premiums, life insurers may consider it if you share it voluntarily<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Consider genetic testing for FH to help manage your cholesterol and secure better life insurance options.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-InsuranceSection002"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4"
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li>American College of Cardiology, 2024, Clinical genetic testing for familial hypercholesterolemia. Retrieved from https://acc.org</li><li>Family Heart Foundation, 2024, Getting a genetic test for FH. Retrieved from https://familyheart.org</li><li>PinnacleQuote, 2024, Will High Cholesterol Affect My Life Insurance Rates. Retrieved from https://pinnaclequote.com</li></ol>",
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
                                    textValue: "The Genetic Information Nondiscrimination Act (GINA) protects you from discrimination based on genetic information. This federal law, signed in 2008, prevents health insurers from using your genetic data, like results from familial hypercholesterolemia (FH) testing, to deny coverage, increase premiums, or classify you as having a pre-existing condition<sup>(2, 4)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Under GINA, health insurers are prohibited from using genetic information for any decisions about eligibility or costs, and HIPAA extends these protections by treating genetic data as private health information, requiring strict confidentiality<sup>(1, 3)</sup>. While GINA and HIPAA ensure your genetic data is safe with health insurers, it’s worth noting that these protections don’t apply to disability or long-term care insurance<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Feel secure in your genetic testing - sign up for FH testing today, knowing your health insurance coverage is protected.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-InsuranceSection003"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4"
                                },

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "<ol><li>calHIPAA, 2023, How Does the HIPAA Law Protect Against Genetic Information Discrimination? Retrieved from https://calhipaa.com</li><li>Facing Our Risk of Cancer Empowered (FORCE), 2024, Health insurance protections under GINA. Retrieved from https://facingourrisk.org</li><li>Fox Rothschild LLP, 2022, Federal Law Passed to Protect Use and Disclosure of Genetic Information. Retrieved from https://hipaahealthlaw.foxrothschild.com</li><li>National Human Genome Research Institute. (n.d.), Privacy in Genomics. Retrieved from https://genome.gov</li></ol>",
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
                                destination: "page-fh-InsuranceSection001" // Contact Before Visiting Page
                            },
                        ]
                    },
                },
            ]
        },
    ]
}

export const en_fh_contactUs_insuranceChapter: ContactUsObject = {

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