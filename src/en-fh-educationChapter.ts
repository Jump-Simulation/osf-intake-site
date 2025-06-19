import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_fh_educationChapter_book: BookObject = {
    bookId: "fhEducationChapterSolo",

    chapterObjects: [

        // Education Chapter ----------------------------------------------------------------------------------------------
        {
            chapterID: "fh_education_chapter",
            progressBarVisible: true,
            progressBarColor: "var(--color-accent-secondary-bold-800-default, #3C6A00)",
            progressBarColorBackground: "var(--color-accent-secondary-lighter-200-default, #C6F090)",
            chapterBackgroundColor: "var(--osfBrand-limegray-50, #F7FAF3)",

            // TOP RIGHT BUTTON STYLES -------
            topRightNavButtonDestination: "page-fh-EducationSection001",
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
                            textValue: "<span style=\"color: var(--color-accent-secondary-bold-800-default);\">90%</span> of the 1.3 million Americans living with FH are <span style=\"color: var(--color-accent-secondary-bold-800-default);\">undiagnosed.</span>",
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
                                    textValue: "Familial hypercholesterolemia (FH) is a common genetic condition, affecting about 1 in 300 people, yet only 10% of the estimated 1.3 million Americans with FH have been diagnosed<sup>(1)</sup>. This means that over a million people are at a higher risk of heart disease without even knowing it. FH leads to very high LDL (“bad”) cholesterol from birth, which can cause early heart disease if not treated<sup>(1, 2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Early diagnosis is key. Research shows that people diagnosed with FH early, even in childhood, can receive treatment that significantly reduces their risk of serious heart issues later in life<sup>(1)</sup>. But without genetic testing, many people don’t find out until they’ve already experienced severe heart problems, usually after age 40<sup>(2)</sup>. Genetic testing is the best way to detect FH accurately and early.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Button Normal
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-fh-EducationSection001"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "<ol><li>McGowan et al., 2019, https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225</li><li>Medeiros & Bourbon, 2023, https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10027780/pdf/11883_2023_Article_1091.pdf</li></ol>",
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
                                    textValue: "Familial hypercholesterolemia (FH) dramatically increases the risk of heart disease if left untreated.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "While only 0.5% of the population has FH, this small group makes up 20% of heart attacks in men under 45. This means that people with FH have up to 22 times the risk of having a heart attack before age 45 compared to those without FH<sup>(2, 3)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "The high LDL cholesterol levels from birth in FH patients make coronary artery disease (CAD) much more likely. If left untreated, half of men and one in three women with FH will have a heart attack by age 60<sup>(1)</sup>. Because cholesterol buildup happens “silently” for a long time before symptoms show, by the time physical signs appear, such as xanthomas (fatty deposits under the skin) or corneal arcus (eye changes), the risk of a cardiac event is already high<sup>(3)</sup>.",
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
                                    destination: "page-fh-EducationSection002"
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
                                    textValue: "<ol><li>Alonso et al., 2014, https://www.pismin.com/10.1586/erc.13.7</li><li>CDC Website https://www.cdc.gov/heart-disease-family-history/testing/index.html#:~:text=About%2020%2D40%25%20of%20people,your%20risk%20of%20heart%20disease</li><li>McGowan et al., 2019, https://www.ahajournals.org/doi/epub/10.1161/JAHA.119.013225</li></ol>",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                }
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
                            textValue: "Testing can <span style=\"color: var(--color-accent-secondary-bold-800-default);\">prevent</span> lethal cardiac events such as <span style=\"color: var(--color-accent-secondary-bold-800-default);\">strokes</span> and <span style=\"color: var(--color-accent-secondary-bold-800-default);\">heart attacks.</span>",
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
                                    textValue: "Familial hypercholesterolemia (FH) is traditionally diagnosed later in life, usually around age 50. By this time, over one-third of FH patients have already experienced a serious cardiovascular event, such as a stroke or heart attack<sup>(2)</sup>. Early diagnosis and treatment can prevent these dangerous events, but without genetic testing, many people remain unaware until they have already suffered a cardiac event.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "In fact, untreated FH patients are ten times more likely to die of any cause before age 40, and 100 times more likely to die from coronary artery disease (CAD) compared to the general population<sup>(1)</sup>. Treatment can make a huge difference. Studies show that adults who begin lipid-lowering therapy experience a 76% reduction in cardiovascular events, including heart attacks and strokes<sup>(2)</sup>. Modern treatment options can reduce LDL cholesterol by over 50% in just 6 months, making it possible to reach healthy cholesterol levels and maintain them long-term regardless of your age when you start treatment<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Knowing if you have FH opens up these life-saving treatment options.",
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
                                    destination: "page-fh-EducationSection003"
                                },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

                                { // Page Title
                                    renderOrder: 6,
                                    componentType: "text",
                                    textValue: "Sources",
                                    textType: "h4",
                                    textAlignment: "left",
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
                                    textValue: "For people with familial hypercholesterolemia (FH), getting tested and starting treatment early can significantly lower the risk of serious heart disease. Research shows that with statin therapy, FH patients experience a 76% reduction in cardiovascular events compared to those left untreated<sup>(2)</sup>. After just 10 years of treatment, their risk of coronary heart disease aligns closely with that of the general population<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Before effective treatments like statins, people with untreated FH were up to 100 times more likely to die from coronary heart disease at a young age. With proper medication, the outlook is much brighter, giving FH patients a far healthier and longer life expectancy<sup>(1)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Take control of your heart health. Sign up for FH genetic testing today and reduce your risk of heart disease.",
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
                                    destination: "page-fh-EducationSection004"
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
                            textValue: "Cut your cholesterol in <span style=\"color: var(--color-accent-secondary-bold-800-default);\">half in only 6 months</span> with effective treatment for FH.",
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
                                    textValue: "For those with familial hypercholesterolemia (FH), effective treatment can cut LDL cholesterol levels in half within just six months. Studies show that high-intensity statins and other lipid-lowering medications like alirocumab can reduce LDL-C levels by 50–60%, bringing cholesterol to healthier levels quickly and safely<sup>(2)</sup>. In a large series of FH treatment studies, many patients reached optimal LDL levels within 24 weeks, and these improvements were maintained long-term<sup>(2)</sup>.",
                                    textType: "h2",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Effective treatment not only brings down cholesterol levels but also reduces the risk of serious heart conditions by 76% within the first few months, including heart attacks and strokes<sup>(2)</sup>. And if certain medications aren’t a fit, many alternative treatments are available, so most patients find a solution that works well for them.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Get started on the path to lower cholesterol and better heart health—sign up for FH genetic testing today.",
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
                                    destination: "page-fh-EducationSection005"
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
                                destination: "page-fh-EducationSection001" // Contact Before Visiting Page
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
                                    textValue: "For those with familial hypercholesterolemia (FH), effective treatment can cut LDL cholesterol levels in half within just six months. Studies show that high-intensity statins and other lipid-lowering medications like alirocumab can reduce LDL-C levels by 50–60%, bringing cholesterol to healthier levels quickly and safely<sup>(2)</sup>. In a large series of FH treatment studies, many patients reached optimal LDL levels within 24 weeks, and these improvements were maintained long-term<sup>(2)</sup>.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 3,
                                    componentType: "text",
                                    textValue: "Effective treatment not only brings down cholesterol levels but also reduces the risk of serious heart conditions by 76% within the first few months, including heart attacks and strokes<sup>(2)</sup>. And if certain medications aren’t a fit, many alternative treatments are available, so most patients find a solution that works well for them.",
                                    textType: "bodyText",
                                    textAlignment: "left",
                                },

                                { // Page Title
                                    renderOrder: 4,
                                    componentType: "text",
                                    textValue: "Get started on the path to lower cholesterol and better heart health—sign up for FH genetic testing today.",
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
                                    destination: "page-fh-EducationSection006"
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
            ]
        },
    ]
}

export const en_fh_contactUs_educationChapter: ContactUsObject = {

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