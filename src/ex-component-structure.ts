
import { faL } from "@fortawesome/free-solid-svg-icons";
import { PageObject } from "./types";


export const pageData: PageObject[] = [
    // EXAMPLE PAGE ITEMS
    {
        id: "page-example-000",
        navTitle: "Example Page",
        keywords: "example, reference",
        authors: "Maddox Binder",
        lastUpdated: "11132024",
        hasVariables: true,
        hasLock: false,
        pageItems: [
            { // Image
                renderOrder: 0,
                componentType: "image",
                fileName: "dayofschedule-1.jpg",
                sizeOfPageTaken: "40%",
                animationName: "fade-up"
            },  // Renders a specific image.



            { // Page Title
                renderOrder: 1,
                componentType: "text",
                textValue: "Welcome {PATIENT_NAME}",
                textType: "h1"

                //colorText: "string - hex, RGB, or variable" /* Optional */

                //iconVisible: //true //false, /* Optional */
                //iconFileName: //"string", /* Included alongside iconVisible */
                //iconHorizontalPlacement: //"left" // "right", /* Included alongside iconVisible */

                //colorBackground: "string - hex, RGB, or variable", /* Optional */
                /* Declaring any value to colorBackground will add the extra container padding automatically */

            },  // The title of the page being shown. Always H1 format.

            { // Body Text
                renderOrder: 2,
                componentType: "text",
                textValue: "Example Text",
                textType: "bodyText"

                //colorText: "string - hex, RGB, or variable" /* Optional */

                //iconVisible: //true //false, /* Optional */
                //iconFileName: //"string", /* Included alongside iconVisible */
                //iconHorizontalPlacement: //"left" // "right", /* Included alongside iconVisible */

                //colorBackground: "string - hex, RGB, or variable", /* Optional */
                /* Declaring any value to colorBackground will add the extra container padding automatically */

                /* Remove comment status of ALL VARIABLES once officially added & functional. */

            },  // A single paragraph of body text. Use one component per paragraph of text.

            { // Button Locked
                renderOrder: 3,
                componentType: "button-locked",
                buttonType: "default",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Tap below to continue!",
                destination: "page-001"
            },  // A button that is disabled until the lock number is 0 or less.
            // A button that checks if the page is locked and if it is locked, it disables itself until it is unlocked
            // Usually used for menus that need to be interacted with before continuing.

            { // Swipe Down Button
                renderOrder: 4,
                componentType: "button-swipe",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Tap below to continue!",
                destination: "page-001"
            },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.


            // ---------- ALL BUTTON ITEMS MUST BE IN A BUTTON HOLDER IF THEY ARE TO SHOW AT THE BOTTOM OF THE SCREEN !!!!!! ---------------------

            { // Button Normal
                renderOrder: 4,
                componentType: "button",
                buttonType: "normal",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Tap below to continue!",
                destination: "page-001"
            },  // A normal button that ignores locks. Simply advances to a destination when pressed, no matter what you do on the page.

            { // Button External Link
                renderOrder: 4,
                componentType: "button-external-link",
                buttonType: "normal",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Visit the Opt-Out Site",
                externalLink: "https://www.osfinnovation.org/" // REPLACE LATER
            },  // A button that links out to an external site by opening a new tab.

            { // Button Phone Number
                renderOrder: 4,
                componentType: "button-phone-number",
                buttonType: "normal",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Call Us",
                variablePhoneNumber: "giOfficeNumber",
                hardcodedPhoneNumber: "3096552474"
            },  // A button that opens the phone number modal, allowing the user to call the numbner when selected.

            { // Button Selection Confirmation
                renderOrder: 5,
                componentType: "button-selection-confirmation",
                buttonStyleNoneSelected: "confirm",
                buttonStyleSomethingSelected: "primary",
                iconVisible: false,
                textValueNoneSelected: "None of the above",
                textValueSomethingSelected: "Confirm & Continue",
                destinationNoneSelected: "page-001",
                destinationSomethingSelected: "page-004",
            },  // If you haven't selected anything out of the list, it displays the "NoneSelected" value. However, when something is selected, it displays the "SomethingSelected" value.
            // Takes you one place if list items are not selected, takes you another place if items are selected.

            { // Button Item List
                renderOrder: 6,
                componentType: "button-item-list",
                selectMultiple: true,
                buttonItemsList: ["list-item-1", "list-item-2", "list-item-3"],
                writeToAddress: "diabetes-medication-list"
            },  // List of selectable items. Can be multiselect or single select based on the "selectMultiple" value.

            { // Button Item List Results
                renderOrder: 7,
                componentType: "button-item-list-results",
                // buttonType: // confirm // deny // normal, /* Remove comment status once this variable is officially added. */
                selectMultiple: true,
                readFromAddress: ["diabetes-medication-list"]
            },   // The results of what items were selected on a previous page.

            { // Button Prep Item List
                renderOrder: 8,
                componentType: "button-prep-item-list",
                buttonItemsList: ["Prep Display Name_page-XXX", "Prep Display Name_page-XXX", "I have not picked up my prep_modal-XXX"],
                writeToAddress: "prep-selection"
            },  // Specifically used for a list of Prep Medication items.
            // In buttonItemsList, the display name is written to the left of the underscore, and the destination is written to the right.

            { // Button Prep Confirm
                renderOrder: 9,
                componentType: "button-prep-confirm",
                readFromAddress: ["prep-selection"],

            },  // The button that is locked until a Prep Medication is selected.
            // The destination changes based on the item that was selected.

            // Specifically used for a list of Prep Medication items.
            // In buttonItemsList, the display name is written to the left of the underscore, and the destination is written to the right.

            { // Button Holder
                renderOrder: 10,
                componentType: "button-holder",
                buttonChildren: [
                    {
                        renderOrder: 4,
                        componentType: "button",
                        buttonType: "normal",//depriciated
                        buttonStyle: "primary",
                        iconVisible: false,
                        textValue: "First Example",
                        destination: "page-001"
                    }, {
                        renderOrder: 4,
                        componentType: "button",
                        buttonType: "normal", //depriciated
                        buttonStyle: "secondary",
                        iconVisible: false,
                        textValue: "Second Example",
                        destination: "page-002"
                    }, {
                        renderOrder: 4,
                        componentType: "button",
                        buttonType: "normal", //depriciated
                        buttonStyle: "tertiary",
                        iconVisible: false,
                        textValue: "Third Example",
                        destination: "page-003"
                    }
                ]
            }
        ]
    },
];
