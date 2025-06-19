import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_fh_familyChapter_book: BookObject = {
    bookId: "fhFamilyChapterSolo",

    chapterObjects: [

        // Family Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_family_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-primary-bold-800-default, #00677E)",
            progressBarColorBackground: "var(--color-accent-primary-lighter-200-default, #A3EEFF)",
            chapterBackgroundColor: "var(--osfBrand-tealgray-50, #F4FBFC)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "page-fh-FamilySection001",
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
                                    textValue: "Early treatment for familial hypercholesterolemia (FH) is life-saving. Research shows that children diagnosed and treated before age 18 have a 96% lower chance of experiencing serious heart issues—like heart attacks, strokes, and coronary artery disease—before the age of 40 compared to those left untreated<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "In families where children were diagnosed with FH, many parents who didn’t get early treatment had already developed cardiovascular disease by age 37, and 10% had passed away due to heart conditions by their early 40s<sup>(2, 3)</sup>. Starting treatment early means a healthier heart and longer life. Children who are tested for, correctly identify, and take steps toward managing their FH are more likely to maintain heart-healthy habits as they grow older<sup>(1)</sup>.",
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
                                    renderOrder: 5,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-FamilySection001"
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
                                    textValue: "<ol><li>Medeiros & Bourbon, 2023, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf</li><li>Luirink et al., 2019, https://www.nejm.org/doi/pdf/10.1056/NEJMoa1816454</li><li>Wiegman et al., 2004, https://jamanetwork.com/journals/jama/fullarticle/199118#google_vignette</li></ol>",
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
                                    textValue: "When it comes to heart health, the earlier high cholesterol is managed, the better. Studies show that cardiovascular disease risk is linked not just to how high your cholesterol levels are, but also to how long arteries are exposed to high LDL (“bad” cholesterol)<sup>(1)</sup>. The sooner cholesterol levels are lowered, the less damage occurs to blood vessels over time, making early diagnosis and treatment essential.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "For children with FH, research found that starting treatment between ages 8 to 18 can slow, and even reverse, the buildup of plaque in the arteries - one of the earliest signs of heart disease<sup>(1)</sup>. A diagnosis of FH could help set up your family with proactive, personalized health care to reduce long-term risks for heart issues. Sign up for genetic testing to protect your family’s heart health.",
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
                                    destination: "page-fh-FamilySection002"
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
                                    textValue: "<ol><li>Luirink et al., 2019, https://www.nejm.org/doi/pdf/10.1056/NEJMoa1816454</li></ol>",
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
                                    textValue: "Familial hypercholesterolemia (FH) is often “silent,” meaning it doesn’t cause symptoms until serious heart issues occur. For many children, signs of FH like fatty deposits under the skin or around the eyes don’t appear until LDL cholesterol levels have already been dangerously high for years<sup>(1)</sup>. This delay in visible symptoms makes early detection through traditional methods challenging.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Without a family history of FH or high cholesterol, children may not be tested early enough. Traditional diagnosis methods rely on a mix of physical signs, cholesterol levels, and family medical history. If a child presents no physical symptoms, then they will likely not even be eligible for genetic testing unless someone in their family record has a history of FH. If family records are incomplete or don’t include FH, a diagnosis may come only after health risks are already present.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Genetic testing can change this. By getting tested yourself, you open up care pathways for your family, such as cascade screening, that would otherwise be closed, allowing them to begin protective treatments much sooner.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 5,
                                    componentType: "text",
                                    textValue: "Give your family the advantage of early detection by signing up sooner rather than later.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 6,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-FamilySection003"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 7,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4"
                                },

                                { // Page Title
                                    renderOrder: 8,
                                    componentType: "text",
                                    textValue: "<ol><li>McGowan et al., 2019, https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225</li></ol>",
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
                            textValue: "If you test positive, tests for your children will have near <span style=\"color: var(--color-accent-primary-bold-800-default);\">100% accuracy.</span>",
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
                                destination: "page-fh-FamilySection005" // Contact Before Visiting Page
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
                                    textValue: "When a person is diagnosed with familial hypercholesterolemia (FH), it allows for highly accurate testing for close family members. Once the specific genetic mutation causing FH is found in a parent, testing for children and other first-degree relatives can be nearly 100% accurate<sup>(1)</sup>. This precise identification means your children can avoid misdiagnosis and receive the care they need as early as possible.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "This process, known as cascade screening, makes it easier to identify other family members who might also have FH, often at a reduced or no cost. Taking the step to get tested could set your family up with life-saving information and open doors to proactive, affordable care options<sup>(2)</sup>.",
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
                                    destination: "page-fh-FamilySection004"
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
                                    textValue: "<ol><li>Alonso et al., 2014, https://www.pismin.com/10.1586/erc.13.7</li><li>McGowan et al., 2019, https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225</li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

                // Family Screen 5
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
                                    textValue: "If you’re diagnosed with familial hypercholesterolemia (FH), your family members may also qualify for genetic testing at reduced or no cost. Cascade screening programs allow close relatives - such as children and siblings - to be tested following your FH diagnosis, identifying others at risk who can benefit from early treatment. This early intervention helps prevent serious health problems down the line, like heart attacks or costly surgeries, while improving life expectancy<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Several labs and organizations, including Invitae and Ambry Genetics, offer financial assistance to make testing more affordable. Programs like Invitae Unlock™ and Ambry’s Patient Assistance Program reduce or waive fees for qualifying families, making testing accessible for more people. Additionally, groups like FORCE and the Patient Advocate Foundation connect families to resources for further financial support<sup>(3, 4)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Talk to your healthcare provider about these options by signing up to talk about genetic testing.",
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
                                    destination: "page-fh-FamilySection005"
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
                                    textValue: "<ol><li>American Heart Association, 2024, Understanding Cascade Screening. Retrieved from https://heart.org</li><li>British Heart Foundation, 2024, Cascade testing for inherited high cholesterol. Retrieved from https://bhf.org.uk</li><li>FORCE, 2024, Health insurance protections under GINA. Retrieved from https://facingourrisk.org</li><li>Invitae, 2024, https://eng1e.seismic.com/i/Oc7nSDEjSE9zJhCrZ7475Q2fN6PLUSSIGNyV2hyPR40S___mXwjUaTo___vHVeSRDalxHPkZ7MNtTNjiawGYOPLUSSIGNNSeR8B6zK6D7udsriPd22Ji34h___4OtMqwesJz7ltJ___oQ7K4j5VSnY?initialDoc=8c9a3e32-7117-493b-b53f-809266435e03</li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
                            ]
                        }
                    ]
                },

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
                            textValue: "Research recommends screening as early as 2 years of age for children with family history.",
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
                                    textValue: "For children with familial hypercholesterolemia (FH), starting treatment early can make all the difference. Research shows that standard treatments, like statins, are safe and effective for young children. Pravastatin and pitavastatin are FDA-approved for children starting at age 8, while other statins are approved for use beginning at age 10<sup>(1)</sup>. Studies have found that starting statin treatment early can help protect the arteries, reducing plaque buildup and heart disease risk as children grow older<sup>(3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Early screening for FH is also recommended, especially for children with a family history of high cholesterol or early heart disease. In these cases, screening can begin as young as age 2, allowing for earlier identification and management<sup>(2)</sup>. Early diagnosis and treatment give children the best chance at a healthy future.",
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
                                    destination: "page-fh-FamilySection006"
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
                                    textValue: "<ol><li>McGowan et al., 2019, https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225</li><li>Medeiros & Bourbon, 2023, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf</li><li>Wiegman et al., 2004, https://jamanetwork.com/journals/jama/fullarticle/199118#google_vignette</li></ol>",
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
                                destination: "page-fh-FamilySection001" // Contact Before Visiting Page
                            },
                        ]
                    },
                },
            ]
        },
    ]
}

export const en_fh_contactUs_familyChapter: ContactUsObject = {

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