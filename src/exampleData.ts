import { BookObject, ContactUsObject, PageObject } from "./types";


export const en_exampleData_book: BookObject = {
    bookId: "exampleData",
    bookAuthors: ["eddie", "someone else idk"],

    chapterObjects: [

        //chapter 1
        {
            chapterID: "chapter_1",
            progressBarVisible: true,
            progressBarColor: "red",
            progressBarColorBackground: "darkred",
            chapterBackgroundColor: "#f1d4db",

            ///TOP RIGHT BUTTON STUFF

            topRightNavButtonDestination: "page-001-intro",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

            pageObjects: [
                // id-page000
                {
                    id: "page-001-intro",
                    navTitle: "Welcome Page",
                    keywords: "introduction, welcome, day, scheduled",
                    authors: "Kyle Formella, Eric Ou",
                    lastUpdated: "09252024",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: false,

                    /* tagsExclude: "testExclude-true_",
                    tagsInclude: "testInclude-false_", */
                    pageItems: [
                        {
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "day-of-schedule-1.jpg",

                            sizeOfPageTaken: "40%",
                            animationName: "fade-up"
                        },
                        {
                            renderOrder: 4,
                            componentType: "page-section",
                            colorBackground: "transparent",
                            boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.30), 0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
                            marginSides: "25px",
                            /*  width: "95%", */

                            pageSectionItems: [
                                {
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "PAGE ONE",
                                    textType: "h1",
                                    colorText: "black",

                                },
                                {
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Testing text with a background container inside of a page section!! Should be lots of padding maybe? Also this scenario probably should never happen!",
                                    textType: "bodyText",
                                    colorText: "white",
                                    colorBackground: "darkgreen",
                                },

                                {
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Testing a regular text component with custom color inside of a page section.",
                                    textType: "bodyText",
                                    colorText: "darkgreen",
                                },

                                {
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Testing.",
                                    textType: "bodyText",
                                    colorText: "darkblue",
                                    iconVisible: true,
                                    iconFileName: "confirm-checkmark.png",
                                    iconHorizontalPlacement: "right",
                                },

                                {
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Testing Button in Section",
                                    destination: "page-next",

                                },



                            ]

                        },
                        {
                            renderOrder: 4,
                            componentType: "page-holder-horizontal",
                            //colorBackground: "darkred",
                            // boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.30), 0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
                            marginSides: "0px",
                            width: "100%",
                            gap: "3xl",


                            pageSectionItems: [

                                {
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "icon",
                                    iconFileName: "info-icon-fh.png",
                                    iconHorizontalPlacement: "left",
                                    colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                                    colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                    destination: "page-next",
                                },

                                {
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Test Button",
                                    destination: "page-next",

                                },

                            ]

                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Go To Next Page TEST",
                            destination: "page-next",
                            tagsToWrite: "exampleTagOne-true-categoryOne_whateverTag-true_otherTag-false-categoryTwo_addPageBefore-true_",


                        },
                        { // Information Icon Button
                            renderOrder: 0,
                            componentType: "button",
                            buttonType: "icon",
                            iconFileName: "info-icon-fh.png",
                            iconHorizontalPlacement: "left",
                            colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                            colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.2) 100%)",
                            colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.25) 100%)",
                            destination: "page-next"
                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Testing Modal w/ Dismiss Button",
                            destination: "modal-3",

                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Testing Hidden button",
                            destination: "modal-3",
                            excludeByDefault: true,



                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Go To Third Page and Write Tag \"whateverTag-true_\"",
                            destination: "page-next",
                            tagsToWrite: "addPageBefore-true_"

                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Go To Third Page and Write No Tag",
                            destination: "page-next",
                            /*    tagsToWrite: "whateverTag-true_" */

                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "Testing Individual Data Write button",
                            destination: "page-next",
                            dataToWrite: "TESTINGINDIVIDIALDATA-individual_"

                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "Testing Aggregate Data Write button",
                            destination: "page-next",
                            dataToWrite: "TESTINGAGGREGATEDATA-aggregate_"

                        },


                    ],
                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Contact Us Bottom Buttons",
                        bottomButtonHolderItems: [
                            { // Down Arrow GIF
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "icon",
                                iconFileName: "downarrow.gif",
                                buttonStyle: "primary",
                                iconVisible: false,
                                iconHorizontalPlacement: "center",
                                /*                                 colorOverrideDefault: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.09) 100%)",
                                                                colorOverrideHover: "linear-gradient(180deg, rgba(0, 0, 0, 0.02) 14.9%, rgba(0, 0, 0, 0.15) 100%)",
                                                                colorOverrideActive: "linear-gradient(180deg, rgba(0, 0, 0, 0.12) 14.9%, rgba(0, 0, 0, 0.15) 100%)", */
                                destination: "page-next",
                                hasDropShadow: false,
                                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
                                iconSizeOverride: "56px"
                            },
                        ]
                    },
                    modalObjects: [
                        {
                            modalID: "modal-3",
                            modalType: "popup",
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Congrats!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "LOTS OF TEXT",
                                    textType: "h4"
                                },
                                {
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Leave me out",
                                    destination: "page-004",
                                    animationName: ""
                                },
                                {
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Actually, keep me in!",
                                    destination: "dismiss",
                                    animationName: "thumbs-up.gif"
                                }
                            ]
                        },
                        {
                            modalID: "modal-4",
                            modalType: "popup",
                            dismissEnabled: true,
                            dismissDestination: "page_next",
                            dismissTimer: 1000,
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Congrats!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "1 SECOND TIMER!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Here's maybe some additional info? My favorite color is cyan and I wish noodles were always angel hair",
                                    textType: "h4"
                                },
                            ]
                        },
                        {
                            modalID: "modal-5",
                            modalType: "sheet",
                            dismissEnabled: true,
                            dismissDestination: "dismiss",
                            dismissTimer: 2500,
                            modalItems: [
                                /*       {
                                          renderOrder: 0,
                                          componentType: "text",
                                          textValue: "Success!",
                                          textType: "h2"
                                      }, */
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Thank you for confirming!",
                                    textType: "h4"
                                },

                            ]
                        },
                        {
                            modalID: "modal-6",
                            modalType: "sheet",
                            dismissEnabled: true,
                            dismissDestination: "dismiss",
                            dismissTimer: 3000,
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Congrats!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "3 SECOND TIMER!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Here's maybe some additional info? My favorite color is burgandy and I wish noodles were always linguini",
                                    textType: "h4"
                                },
                            ]
                        },
                    ]
                },

            ]
        },
        //chapter 2
        {
            chapterID: "chapter_2",
            progressBarVisible: true,
            progressBarColor: "blue",
            progressBarColorBackground: "darkblue",
            progressBarLength: 4,

            ///TOP RIGHT BUTTON STUFF

            topRightNavButtonDestination: "page-001-intro",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",


            pageObjects: [
                // Colon Prep Pickup Page PAGE 2
                {
                    id: "page-002-colonPrepPickup",
                    navTitle: "Colon Prep Pickup",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder",
                    lastUpdated: "012925",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: true,
                    tagsInclude: "addPageBefore-true_",

                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE TWO, COLON PREP PICKUP",
                            textType: "h1",
                            colorText: "black",

                        },
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "colon-prep-pickup-1.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            hasDropShadow: true,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Colon Prep Pickup",
                            textType: "h1"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Picking up your colon prep sooner prevents you from needing to visit the pharmacy later on, and avoids complications near your procedure date.",
                            textType: "bodyText"
                        },

                        { // Body Text
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "<b>Have you picked up your colon prep already?</b>",
                            textType: "bodyText"
                        },

                        { // Button
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "I have picked up my prep",
                            destination: "page-next", // Colon Prep Confirmation Page
                            tagsToWrite: "hasPrep-true_",
                        },


                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Other Prescription Meds Button Holder",
                        bottomButtonHolderItems: [



                            { // Button
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "secondary",
                                iconVisible: false,
                                textValue: "I have picked up my prep",
                                destination: "page-003-whateverTest", // Colon Prep Confirmation Page
                                tagsToWrite: "hasPrep-true_",
                            },


                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Include Page Colon Stuff",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 1",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_otherTag-true-categoryTwo_whateverTag-false_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 2",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Hidden button",
                                destination: "page-next",
                                excludeByDefault: true,
                                tagsInclude: "exampleTagOne-true-categoryOne_",



                            },


                        ]
                    },
                },
                // Colon Prep Pickup Page PAGE 3
                {
                    id: "page-003-colonPrepPickup",
                    navTitle: "Colon Prep Pickup",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder",
                    lastUpdated: "012925",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: true,
                    pageBackgroundColor: '#e5f1d4',
                    tagsInclude: "addPageBefore-true_",

                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE THREE, COLON PREP PICKUP",
                            textType: "h1",
                            colorText: "black",

                        },
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "colon-prep-pickup-1.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            hasDropShadow: true,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Colon Prep Pickup",
                            textType: "h1"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Picking up your colon prep sooner prevents you from needing to visit the pharmacy later on, and avoids complications near your procedure date.",
                            textType: "bodyText"
                        },

                        { // Body Text
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "<b>Have you picked up your colon prep already?</b>",
                            textType: "bodyText"
                        },


                        { // Button
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "I have picked up my prep",
                            destination: "page-next", // Colon Prep Confirmation Page
                            tagsToWrite: "hasPrep-true_",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Other Prescription Meds Button Holder",
                        bottomButtonHolderItems: [



                            { // Button
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "secondary",
                                iconVisible: false,
                                textValue: "I have picked up my prep",
                                destination: "page-003-whateverTest", // Colon Prep Confirmation Page
                                tagsToWrite: "hasPrep-true_",
                            },


                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Include Page Colon Stuff",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 1",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_otherTag-true-categoryTwo_whateverTag-false_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 2",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Hidden button",
                                destination: "page-next",
                                excludeByDefault: true,
                                tagsInclude: "exampleTagOne-true-categoryOne_",



                            },


                        ]
                    },
                },
                // Colon Prep Pickup Page PAGE 4
                {
                    id: "page-004-colonPrepPickup",
                    navTitle: "Colon Prep Pickup",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder",
                    lastUpdated: "012925",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: true,
                    tagsInclude: "addPageBefore-true_",

                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE FOUR",
                            textType: "h1",
                            colorText: "black",

                        },
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "colon-prep-pickup-1.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            hasDropShadow: true,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Colon Prep Pickup",
                            textType: "h1"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Picking up your colon prep sooner prevents you from needing to visit the pharmacy later on, and avoids complications near your procedure date.",
                            textType: "bodyText"
                        },

                        { // Body Text
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "<b>Have you picked up your colon prep already?</b>",
                            textType: "bodyText"
                        },

                        { // Button
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "I have picked up my prep",
                            destination: "page-next", // Colon Prep Confirmation Page
                            tagsToWrite: "hasPrep-true_",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Other Prescription Meds Button Holder",
                        bottomButtonHolderItems: [



                            { // Button
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "secondary",
                                iconVisible: false,
                                textValue: "I have picked up my prep",
                                destination: "page-003-whateverTest", // Colon Prep Confirmation Page
                                tagsToWrite: "hasPrep-true_",
                            },


                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Include Page Colon Stuff",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 1",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_otherTag-true-categoryTwo_whateverTag-false_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 2",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Hidden button",
                                destination: "page-next",
                                excludeByDefault: true,
                                tagsInclude: "exampleTagOne-true-categoryOne_",



                            },


                        ]
                    },
                },
                // Colon Prep Pickup Page PAGE 5
                {
                    id: "page-005-colonPrepPickup",
                    navTitle: "Colon Prep Pickup",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder",
                    lastUpdated: "012925",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: true,
                    pageBackgroundColor: "#9ac4f5",
                    tagsInclude: "addPageBefore-true_",

                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE FIVE",
                            textType: "h1",
                            colorText: "black",

                        },
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "colon-prep-pickup-1.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            hasDropShadow: true,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Colon Prep Pickup",
                            textType: "h1"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Picking up your colon prep sooner prevents you from needing to visit the pharmacy later on, and avoids complications near your procedure date.",
                            textType: "bodyText"
                        },

                        { // Body Text
                            renderOrder: 3,
                            componentType: "text",
                            textValue: "<b>Have you picked up your colon prep already?</b>",
                            textType: "bodyText"
                        },
                        { // Button
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "secondary",
                            iconVisible: false,
                            textValue: "I have picked up my prep",
                            destination: "page-next", // Colon Prep Confirmation Page
                            tagsToWrite: "hasPrep-true_",
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Other Prescription Meds Button Holder",
                        bottomButtonHolderItems: [



                            { // Button
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "secondary",
                                iconVisible: false,
                                textValue: "I have picked up my prep",
                                destination: "page-003-whateverTest", // Colon Prep Confirmation Page
                                tagsToWrite: "hasPrep-true_",
                            },


                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Include Page Colon Stuff",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 1",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_otherTag-true-categoryTwo_whateverTag-false_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Test Tag Write 2",
                                destination: "page-next", // Colon Prep Confirmation Page
                                tagsToWrite: "exampleTagTwo-true-categoryOne_",


                            },
                            {
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "Testing Hidden button",
                                destination: "page-next",
                                excludeByDefault: true,
                                tagsInclude: "exampleTagOne-true-categoryOne_",



                            },


                        ]
                    },
                },

            ]
        },
        //chapter 3
        {
            chapterID: "chapter_3",
            progressBarVisible: true,
            progressBarColor: "green",
            progressBarColorBackground: "darkgreen",
            progressBarLength: 2,
            ///TOP RIGHT BUTTON STUFF

            topRightNavButtonDestination: "page-001-intro",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

            pageObjects: [
                // id-page003 PAGE 3
                {
                    id: "page-006-whateverTest",
                    navTitle: "Site Context",
                    keywords: "overview, colonoscopy",
                    authors: "Kyle Formella",
                    lastUpdated: "09252024",
                    hasVariables: false,
                    hasLock: false,


                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE SIX",
                            textType: "h1",
                            colorText: "black",

                        },
                        {
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "day-of-schedule-2.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up"
                        },
                        {
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "In the days leading up to your procedure, these links and messages will provide you crucial information such as:<br><ul><li>Medication stop needs.</li><li>Personalized prep instructions.</li><li>Transportation & parking information.</li><li>All diet change details.</li><li>Hospital / lab rules</li><li>And more!</li></ul><br>Please continue to verify that you will be receiving these messages.",
                            textType: "bodyText"
                        },
                        {
                            renderOrder: 4,
                            componentType: "button",
                            buttonType: "normal",
                            buttonStyle: "primary",
                            iconVisible: false,
                            textValue: "Go To Fourth Page and Write Tag \"whateverTag-true_\"",
                            destination: "page-next",
                            tagsToWrite: "addPageBefore-true_"

                        },
                        { // Button Item List
                            renderOrder: 6,
                            componentType: "button-item-list",
                            selectMultiple: true,
                            buttonItemsList: ["Adipex", "Amferpramone (generic)", "Atti-Plex", "Benzphetamine", "Bontril", "Buprenorphine HCL", "Bupropion", "Bydureon bcise (Taken Weekly)", "Contrave", "Desoxyn", "Dexedrine", "Dextroamphetamine", "Didrex", "Diethylpropion", "Diethylcathinone", "Dulaglutide (Taken Weekly)", "Exenatide Extended Release (Taken Weekly)", "Fastin", "Ionamin", "Moclodura", "Lomaira", "Melfiat", "Methamphetamine", "Mounjaro (Taken Weekly)", "Naltrexone", "Naloxone HCL", "Oby-Cap", "Ozempic (Taken Weekly)", "Phentercot", "Phentermine", "Phentride", "Phentermine Resin", "Phendimetrazine", "Pro-Fast", "Rybelsus (Taken Daily)", "Semaglutide (Taken Weekly)", "Suboxone", "Suprenza", "Tenuate", "Trulicity", "Tirzepatide (Taken Weekly)", "Wegovy (Taken Weekly)"],
                            writeToAddress: "day-8-medication-hold-list"
                        },
                        {
                            renderOrder: 2,
                            componentType: "button",
                            buttonType: "primary",
                            textValue: "modal-0 destination",
                            textType: "h4",
                            destination: "modal-0"
                        },


                    ],
                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "8 Days Out Page 2 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button Normal
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "tertiary",
                                iconVisible: false,
                                textValue: "Why is this necessary?",
                                destination: "modal-day8MedHoldsWhyIsThisNecessary"
                            },

                            { // Button Selection Confirmation
                                renderOrder: 5,
                                componentType: "button-selection-confirmation",
                                buttonStyleNoneSelected: "secondary",
                                buttonStyleSomethingSelected: "primary",
                                iconVisible: false,
                                textValueNoneSelected: "I don't take any of these",
                                textValueSomethingSelected: "I have reviewed the list",
                                destinationNoneSelected: "page-next",
                                // tagsToWriteNothingSelected: "selectedMedsOnDay8-false_", // ---- COMMENTED OUT BECAUSE IT WON'T ACTUALLY BE HERE, CAN UNCOMMENT FOR TESTING PURPOSES!!
                                destinationSomethingSelected: "page-day8StopTheseMedications",
                                tagsToWriteSomethingSelected: "selectedMedsOnDay8-true_",
                                readFromAddress: ["day-8-medication-hold-list"]
                            },

                        ]
                    },

                    modalObjects: [
                        {
                            modalID: "modal-day8MedHoldsWhyIsThisNecessary",
                            modalType: "popup",
                            modalItems: [
                                { // Modal Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Why Do I Need to Stop These Medications?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "These medications may cause the following problems during your upcoming procedure:",
                                    textType: "bodyText"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "<b><ul><li>Excessive bleeding.</li><li>Impaired anesthesia.</li><li>Lowered blood sugar.</li><li>Interfere with procedure results.</li></ul></b>",
                                    textType: "bodyText"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Stop taking them to minimize risks during your procedure.",
                                    textType: "bodyText"
                                },

                                { // "Back" Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss", // Day 8 Medication Hold List Page (Should simply close out to reveal the page underneath)
                                    animationName: ""
                                    // MODAL TIMER / AUTO FUNCTION: Needs to enter automatically upon first visit, then not appear again for the duration of this visit to the site. FIGURE THIS OUT
                                    // Scroll position on previous page should be maintained, not reset. Figure this out too.
                                },
                            ]
                        },
                        {
                            modalID: "modal-0",
                            modalType: "sheet",
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Would you like to continue receiving crucial prep information via these messages?",
                                    textType: "h4"
                                },
                                {
                                    renderOrder: 1,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Yes, I want to continue receiving messages",
                                    destination: "page-004",
                                    animationName: "thumbs-up.gif"
                                },
                                {
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "tertiary",
                                    iconVisible: false,
                                    textValue: "Leave me out, thanks",
                                    destination: "modal-1",
                                    animationName: ""
                                }
                            ]
                        },
                        {
                            modalID: "modal-1",
                            modalType: "popup",
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Are You Sure?",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "LOTS OF TEXT",
                                    textType: "h4"
                                },
                                {
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Leave me out",
                                    destination: "page-004",
                                    animationName: ""
                                },
                                {
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Actually, keep me in!",
                                    destination: "page-whateverTest",
                                    animationName: "thumbs-up.gif"
                                }
                            ]
                        }, {
                            modalID: "modal-2",
                            modalType: "alert",
                            alertDelayTime: 500,
                            alertIsRepeatable: true,
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "This is a test alert, yay!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Hopefully I get to see this",
                                    textType: "bodyText"
                                },
                                {
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Test Back Button",
                                    destination: "dismiss-modal",
                                    animationName: "thumbs-up.gif"
                                }

                            ]
                        }, {
                            modalID: "modal-3",
                            modalType: "popup",
                            modalItems: [
                                {
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Congrats!",
                                    textType: "h2"
                                },
                                {
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "LOTS OF TEXT",
                                    textType: "h4"
                                },
                                {
                                    renderOrder: 2,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Leave me out",
                                    destination: "page-004",
                                    animationName: ""
                                },
                                {
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Actually, keep me in!",
                                    destination: "whateverTest",
                                    animationName: "thumbs-up.gif"
                                }
                            ]
                        },
                    ]
                },

                //PAGE 4 Colon Prep Confirmation / Selection Page 
                {
                    id: "page-007-colonPrepConfirmation",
                    navTitle: "null",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder, Kyle Formella, Eric Ou",
                    lastUpdated: "012925",
                    hasVariables: true,
                    hasLock: false,
                    /*    excludeByDefault: true,
                       tagsInclude: "hasPrep-true_", */

                    pageItems: [
                        {
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "PAGE SEVEN",
                            textType: "h1",
                            colorText: "black",

                        },
                        { // Image
                            renderOrder: 0,
                            componentType: "image",
                            fileName: "colon-prep-confirmation-selection-1.jpg",
                            sizeOfPageTaken: "40%",
                            animationName: "fade-up",
                            hasDropShadow: true,
                        },

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Colon Prep Selection",
                            textType: "h1"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "Today, you may need to start some steps of your colon prep. On the next page, you will select the prep that you will be taking, and we will provide any steps that need to be followed for today.",
                            textType: "bodyText"
                        },

                        { // Prep Item List
                            renderOrder: 3,
                            componentType: "button-prep-item-list",
                            buttonItemsList: ["Golytely, PEG 3350, or Gavilyte C_modal-golytelyConfirm", "Plenvu_modal-plenvuConfirm", "SuPrep_modal-suprepConfirm", "SuTab_modal-sutabConfirm", "SuFLAVE_modal-suflaveConfirm", "Gatorade & Miralax_modal-gatoradeMiralaxConfirm", "I picked up a prep that is not on this list._modal-followDoctorsInstructions", "I haven’t picked up my prep medication yet_modal-callYourPharmacyImmediately"],
                            // WRITE NEW BUTTON TAGS WHEN IMPLEMENTED!
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "Colon Prep Selection Page Bottom Buttons",
                        bottomButtonHolderItems: [

                            { // Prep Confirm Button
                                renderOrder: 4,
                                componentType: "button-prep-confirm",
                                buttonStyleNoneSelected: "disabled", // Is the disabled style able to be called?
                                buttonStyleSomethingSelected: "primary",
                                textValueNoneSelected: "Continue",
                                textValueSomethingSelected: "Continue"
                            }

                        ]
                    },

                    modalObjects: [

                        // Golytely Confirm Modal
                        {
                            modalID: "modal-golytelyConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm Golytely, Gavilyte C, or PEG 3350?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>Golytely, Gavilyte C, or PEG 3350</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage", // Magnesium Shopping Page - SAME DAY VERSION
                                    tagsToWrite: "golytelyPrep-true_",
                                },
                            ]
                        },

                        // Plenvu Confirm Modal
                        {
                            modalID: "modal-plenvuConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm Plenvu?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>Plenvu</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage",
                                    tagsToWrite: "plenvuPrep-true_",
                                },
                            ]
                        },

                        // SuPrep Confirm Modal
                        {
                            modalID: "modal-suprepConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm SuPrep?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>SuPrep</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage",
                                    tagsToWrite: "suprepPrep-true_",
                                },
                            ]
                        },

                        // SuTab Confirm Modal
                        {
                            modalID: "modal-sutabConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm SuTab?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>SuTab</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage",
                                    tagsToWrite: "sutabPrep-true_",
                                },
                            ]
                        },

                        // SuFLAVE Confirm Modal
                        {
                            modalID: "modal-suflaveConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm SuFLAVE?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>SuFLAVE</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage",
                                    tagsToWrite: "suflavePrep-true_",
                                },
                            ]
                        },

                        // Gatorade & Miralax Confirm Modal
                        {
                            modalID: "modal-gatoradeMiralaxConfirm",
                            modalType: "sheet",
                            modalItems: [

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Confirm Gatorade & Miralax?",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Your selection will be used to provide more accurate guidance in future messages. Please make sure <b>Gatorade & Miralax</b> is correct before you continue.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "deny",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "dismiss",
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "confirm",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Confirm",
                                    destination: "modal-successMessage",
                                    tagsToWrite: "suflavePrep-true_",
                                },
                            ]
                        },

                        // Follow Your Doctor's Instructions Modal
                        {
                            modalID: "modal-followDoctorsInstructions",
                            modalType: "sheet",
                            modalItems: [


                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Follow Your Doctor’s Instructions",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Please refer to any instructions sent via mail, email, or MyChart to correctly take your prep as directed by your doctor and the GI Lab. ",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Continue",
                                    destination: "page-colonPrepAddOnsSelection",
                                    animationName: ""
                                },
                            ]
                        },

                        // Call Your Pharmacy Immediately Modal.
                        {
                            modalID: "modal-callYourPharmacyImmediately",
                            modalType: "sheet",
                            modalItems: [



                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Call Your Pharmacy Immediately",
                                    textType: "h3"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "<b>This is your last chance</b> to pick up your prep. If you do not have it ready to take by tomorrow, your procedure will be <b>canceled</b>.",
                                    textType: "bodyText"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "If you are having issues locating your prep, please contact us.",
                                    textType: "bodyText"
                                },

                                { // Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "secondary",
                                    iconVisible: false,
                                    textValue: "Contact Us",
                                    destination: "page-???", // Contact Us Page
                                    animationName: ""
                                },

                                { // Button
                                    renderOrder: 4,
                                    componentType: "button",
                                    buttonType: "normal",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Continue",
                                    destination: "page-colonPrepAddOnsSelection", // Colon Prep Add-Ons
                                    animationName: ""
                                },
                            ]
                        },

                        { // Success Message Modal.
                            modalID: "modal-successMessage",
                            modalType: "sheet",
                            dismissEnabled: true,
                            dismissDestination: "page-keepYourPrepHandy",
                            dismissTimer: 2500,

                            modalItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "confirm-checkmark-spacy.png",
                                    sizeOfPageTaken: "40%",
                                    animationName: "fade-up",
                                    hasDropShadow: false,
                                },

                                { // Modal Title
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "Thank you for confirming!",
                                    textType: "h2-confirm",
                                },

                            ]
                        },
                    ]

                },

            ]
        },
        //chapter 4
        {
            chapterID: "chapter_4",
            progressBarVisible: false,
            /*          progressBarColor: "blue",
                     progressBarColorBackground: "darkblue",
                     progressBarLength: 2, */


            ///TOP RIGHT BUTTON STUFF

            topRightNavButtonDestination: "page-001-intro",
            topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
            topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",


            pageObjects: [

                // Stop These Medications / Medication Review Page
                {
                    id: "page-day8StopTheseMedications",
                    navTitle: "null",
                    keywords: "introduction, welcome, day, scheduled, scheduling",
                    authors: "Maddox Binder, Kyle Formella, Eric Ou",
                    lastUpdated: "11202024",
                    hasVariables: true,
                    hasLock: false,
                    excludeByDefault: true,
                    tagsInclude: "selectedMedsOnDay8-true_",

                    pageItems: [

                        { // Page Title
                            renderOrder: 1,
                            componentType: "text",
                            textValue: "Stop These Medications",
                            textType: "h2"
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "You chose the following medications on the previous list:",
                            textType: "bodyText"
                        },

                        { // Button Item List Results
                            renderOrder: 7,
                            componentType: "button-item-list-results",
                            selectMultiple: true,
                            readFromAddress: ["day-8-medication-hold-list"]
                        },

                        { // Body Text
                            renderOrder: 2,
                            componentType: "text",
                            textValue: "By confirming below, you agree that you will stop taking these medications by midnight tonight, or your procedure will be canceled.",
                            textType: "bodyText"
                        },

                    ],

                    BottomButtonHolderObject: {
                        bottomButtonHolderID: "8 Days Out Page 3 Button Holder",
                        bottomButtonHolderItems: [

                            { // Button Normal
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "normal",
                                buttonStyle: "tertiary",
                                iconVisible: false,
                                textValue: "Why is this necessary?",
                                destination: "modal-day8MedHoldsWhyIsThisNecessaryCopy" // "Why is this necessary?" Pop-Up Modal COPY
                            },

                            { // Button Normal
                                renderOrder: 4,
                                componentType: "button",
                                buttonType: "confirm",
                                buttonStyle: "primary",
                                iconVisible: false,
                                textValue: "I will stop these meds by midnight",
                                destination: "modal-day8MedHoldsConfirmedSuccessMessage",
                            },

                        ]
                    },

                    modalObjects: [

                        // "Why is this necessary?" Pop-Up Modal COPY
                        {
                            modalID: "modal-day8MedHoldsWhyIsThisNecessaryCopy",
                            modalType: "popup",
                            modalItems: [
                                { // Modal Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Why Do I Need to Stop These Medications?",
                                    textType: "h2"
                                },

                                { // Body Text
                                    renderOrder: 1,
                                    componentType: "text",
                                    textValue: "These medications may cause the following problems during your upcoming procedure:",
                                    textType: "bodyText"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "<b><ul><li>Excessive bleeding.</li><li>Impaired anesthesia.</li><li>Lowered blood sugar.</li><li>Interfere with procedure results.</li></ul></b>",
                                    textType: "bodyText"
                                },

                                { // Body Text
                                    renderOrder: 2,
                                    componentType: "text",
                                    textValue: "Stop taking them to minimize risks during your procedure.",
                                    textType: "bodyText"
                                },

                                { // "Back" Button
                                    renderOrder: 3,
                                    componentType: "button",
                                    buttonType: "default",
                                    buttonStyle: "primary",
                                    iconVisible: false,
                                    textValue: "Back",
                                    destination: "page-day8MedicationHoldList", // Day 8 Medication Hold List Page (Should simply close out to reveal the page underneath)
                                    animationName: ""
                                    // Scroll position on previous page should be maintained, not reset. Figure this out too.
                                },
                            ]
                        },

                        // Confirmation Transition Modal
                        {
                            modalID: "modal-day8MedHoldsConfirmedSuccessMessage",
                            modalType: "sheet",
                            dismissEnabled: true,
                            dismissDestination: "page-dontStopAllMedications", // Don't Stop All Medications Page,
                            dismissTimer: 2500,
                            modalItems: [

                                { // Image
                                    renderOrder: 0,
                                    componentType: "image",
                                    fileName: "confirm-checkmark-spacy.png",
                                    sizeOfPageTaken: "20%",
                                    animationName: "",
                                    hasDropShadow: false,
                                },

                                { // Modal Title
                                    renderOrder: 0,
                                    componentType: "text",
                                    textValue: "Thank you for confirming!",
                                    textType: "h2-confirm",
                                    colorText: "var(--color-success-interact-bold)",
                                },
                            ]
                        },
                    ]

                },

            ]
        },


    ]
}

export const contactUsExampleData: ContactUsObject = {
    id: "contactUsExampleData",
    hasLock: false,
    pageItems: [

        { // Page Title
            renderOrder: 1,
            componentType: "text",
            textValue: "Contact Us Example Data",
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

/* 
    // Primary-Teal Top Nav Button Styles
    topRightNavButtonColor: "var(--color-accent-primary-bold-800-default, #00677E)",
    topRightNavButtonColorHover: "var(--color-accent-primary-bold-700-default, #007A95)",
    topRightNavButtonColorActive: "var(--color-accent-primary-bold-900-default, #004858)",
 */

/* 
    // Secondary-Lime Top Nav Button Styles
    topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-secondary-700-default, #007A95) 0%, var(--color-accent-secondary-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-secondary-600-default, #007A95) 0%, var(--color-accent-secondary-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-secondary-900-default, #007A95) 0%, var(--color-accent-secondary-bold-800-default, #00677E) 100%)",
*/
/* 
    // Tertiary-Magenta Top Nav Button Styles
    topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-tertiary-700-default, #007A95) 0%, var(--color-accent-tertiary-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-tertiary-600-default, #007A95) 0%, var(--color-accent-tertiary-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-tertiary-900-default, #007A95) 0%, var(--color-accent-tertiary-bold-800-default, #00677E) 100%)",
*/
/* 
    // Orange Top Nav Button Styles
    topRightNavButtonColor: "linear-gradient(180deg, var(--color-accent-warning-700-default, #007A95) 0%, var(--color-accent-warning-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorHover: "linear-gradient(180deg, var(--color-accent-warning-600-default, #007A95) 0%, var(--color-accent-warning-bold-800-default, #00677E) 100%)",
    topRightNavButtonColorActive: "linear-gradient(180deg, var(--color-accent-warning-900-default, #007A95) 0%, var(--color-accent-warning-bold-800-default, #00677E) 100%)",
*/