import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_fh_costChapter_book: BookObject = {
    bookId: "fhCostChapterSolo",

    chapterObjects: [

        // Cost Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_cost_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-warning-bold-800-default, #855300)",
            progressBarColorBackground: "var(--color-accent-warning-lighter-200-default, #FFDEA6)",
            chapterBackgroundColor: "var(--osfBrand-orangegray-50, #FCF9F4)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "page-fh-CostSection001",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-warning-700-default, #9E6300) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-warning-600-default, #BC7600) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-warning-900-default, #5D3A00) 0%, var(--color-accent-warning-bold-800-default, #855300) 100%)",

            pageObjects: [
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
                                    textValue: "Genetic testing for familial hypercholesterolemia (FH) is more affordable than you might think. After insurance, most patients pay less than $100 out-of-pocket for FH testing. Labs like Invitae and Ambry Genetics often keep costs low, and many offer financial assistance programs to help cover additional expenses<sup>(1, 2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Without insurance, testing costs can range from $250 to $1,500, depending on the panel chosen. However, insurance usually covers much of the cost if you meet clinical guidelines<sup>(2)</sup>. Plus, early diagnosis can save tens of thousands of dollars in the long run by helping prevent expensive heart procedures and hospitalizations<sup>(1, 4)</sup>.",
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
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-CostSection001"
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
                                    textValue: "<ol><li>American College of Cardiology, 2024, https://acc.org</li><li>Buoy Health, https://buoyhealth.com</li><li>Family Heart Foundation, 2024, https://familyheart.org</li><li>Vanderbilt University Medical Center, 2023, https://news.vumc.org</li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

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
                            textValue: "You may <span style=\"color: var(--color-accent-warning-bold-800-default);\">save $50,000+</span> in future medical expenses by getting tested and diagnosed for FH.",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Prevent spending tens of thousands of dollars in medical expenses by signing up for testing.",
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
                                    textValue: "Identifying familial hypercholesterolemia (FH) early can save you tens of thousands of dollars in future healthcare costs. With the right diagnosis, patients can start preventive treatments which lower the risk of costly medical events, such as heart attacks, strokes, or even bypass surgeries - each of which can cost over $50,000<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Studies show that genetic testing followed by early care not only improves health but is also highly cost-effective over time. Patients make less hospital visits, save on intensive treatments, and benefit their family members too, allowing them to seek preventive care and enjoy healthier, more affordable lives<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Start saving on future healthcare costs by signing up for FH genetic testing today.",
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
                                    destination: "page-fh-CostSection002"
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
                                    textValue: "<ol><li>American College of Cardiology, 2024, https://acc.org</li><li>Vanderbilt University Medical Center, 2023, https://news.vumc.org</li></ol>",
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
                            textValue: "Save your family <span style=\"color: var(--color-accent-warning-bold-800-default);\">hundreds of thousands</span> in medical fees through testing opportunities.",
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
                                    textValue: "Getting tested for familial hypercholesterolemia (FH) can benefit not only you, but your entire family. Once someone in the family is diagnosed, close relatives can undergo cascade screening, which identifies others at risk, qualifies them for testing, and allows them to start preventive care early. Early treatment extends life expectancy and helps avoid costly medical procedures like bypass surgeries or emergency heart care, potentially saving hundreds of thousands in medical expenses<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Many programs even offer free or discounted testing for relatives of those diagnosed with FH, reducing financial strain while encouraging preventive care<sup>(3)</sup>. Catching FH early through genetic testing is one of the most cost-effective ways to prevent heart disease.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Protect your family’s health and finances by signing up for FH genetic testing today.",
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
                                    destination: "page-fh-CostSection003"
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
                                    textValue: "<ol><li>American Heart Association, 2024, https://heart.org</li><li>British Heart Foundation, 2024, https://bhf.org.uk</li><li>National Precision Medicine Programme, Singapore, 2023, https://npm.sg</li></ol>",
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
                            textValue: "No insurance? Too expensive? <span style=\"color: var(--color-accent-warning-bold-800-default);\">You have options!</span> ",
                            textType: "h2",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "There are many ways that you can receive financial aid for your genetic testing.",
                            textType: "bodyText",
                            textAlignment: "left",
                        },

                        { // Page Title
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "Select the \"Information\" button to discover alternative financial options!",
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
                        bottomButtonHolderID: "FH Cost 4 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button
                                renderOrder: 1,
                                componentType: "button-swipe",
                                buttonType: "swipe-indicator",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "",
                                destination: "page-fh-CostSection001" // Contact Before Visiting Page
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
                                    textValue: "Finacial Aid Options",
                                    textType: "h2"
                                },

                                { // Page Title
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If you’re concerned about the cost of genetic testing for familial hypercholesterolemia (FH), several programs can help make testing affordable - or even free.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Invitae Labs offers financial assistance through programs like Invitae Unlock™, which provides reduced-cost or no-cost testing if insurance does not cover it. They also work with biopharmaceutical companies on sponsored testing programs that offer free testing for those who qualify, giving more people access to care and reducing the chance of misdiagnosis<sup>(2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Ambry Genetics has a Patient Assistance Program that reduces or waives testing costs for patients based on income and family size. Applications are simple and take about three weeks to process, often leading to significant savings<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 5,
                                    componentType: "text",
                                    textValue: "Other organizations like FORCE and the Patient Advocate Foundation can also help connect you to financial resources and guide you through applications for charity care or financial aid.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Don’t let cost hold you back from important health information. Talk to your healthcare provider or genetic counselor to learn more about these options, and sign up for FH genetic testing today!",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 7,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-CostSection004"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 8,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4"
                                },

                                { // Page Title
                                    renderOrder: 9,
                                    componentType: "text",
                                    textValue: "<ol><li>Ambry Genetics, 2024, https://www.ambrygen.com/</li><li>FORCE, 2024, https://www.facingourrisk.org/</li><li>Invitae, 2024, https://eng1e.seismic.com/i/Oc7nSDEjSE9zJhCrZ7475Q2fN6PLUSSIGNyV2hyPR40S___mXwjUaTo___vHVeSRDalxHPkZ7MNtTNjiawGYOPLUSSIGNNSeR8B6zK6D7udsriPd22Ji34h___4OtMqwesJz7ltJ___oQ7K4j5VSnY?initialDoc=8c9a3e32-7117-493b-b53f-809266435e03</li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },
            ]
        },
    ]
}

export const en_fh_contactUs_costChapter: ContactUsObject = {

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