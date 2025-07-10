// FH Open Scheduling Message

import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_intakeQuestions_Book: BookObject = {
  bookId: "fhOpenScheduling",

  chapterObjects: [
    // Intake QA Chapter ----------------------------------------------------------------------------------------------
    {
      chapterID: "intake_QA_chapter",
      progressBarVisible: true,
      progressBarColor: "var(--gray-800, #4D4D4D)",
      progressBarColorBackground: "var(--gray-200, #E6E6E6)",
      chapterBackgroundColor: "#F7F9FA",

      // TOP RIGHT BUTTON STYLES -------
      topRightNavButtonDestination: "fh-openSchedulingSection-001",
      topRightNavButtonColor:
        "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorHover:
        "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorActive:
        "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

      pageObjects: [
        // Introduction Screen 1
        {
          id: "page-welcome",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              componentType: "start-screen",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "QA Page 3 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },
        {
          id: "page-login",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "login",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "QA Page 3 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },

        {
          id: "page-problemSolve",
          navTitle: "Intake Start",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "What problem are you trying to solve?",
              textType: "h2",
              textAlignment: "left",
            },

            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "(don't give us the solution just yet - we want to make sure we understand the problem first!)",
              textType: "bodyText",
              colorText: "var(--color-accent-primary-bold-800-default)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "problem_solving",
              destination: "page-next",
            },

            {
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-astro-man.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
          ],
        },

        {
          id: "page-problemConnect",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-problem-solve-rocket.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "How do you personally connect to this problem?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "personally_connect",
              destination: "page-next",
            },
          ],
        },

        {
          id: "page-whenWhere",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-earth.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "When and where does the problem occur?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "when_where",
              destination: "page-next",
            },
          ],
        },
        {
          id: "page-willItGetWorse",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-clock.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "How will this problem get worse if things stay the way they are?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "get_worse",
              destination: "page-next",
            },
          ],
        },

        {
          id: "page-otherSolutions",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-car.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you searched for other solutions for this problem before?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 6,
              componentType: "button-item-list",
              selectMultiple: false,
              buttonItemsList: ["Yes", "No"],
              writeToAddress: "questionID",
              questionID: "search_for",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button Selection Confirmation
                renderOrder: 5,
                componentType: "button-selection-confirmation",
                buttonStyleNoneSelected: "tertiary",
                buttonStyleSomethingSelected: "primary",
                iconVisible: false,
                textValueNoneSelected: "Select an Option",
                destinationNoneSelected: "null",
                textValueSomethingSelected: "Next Question!",
                destinationSomethingSelected: "page-next", // Stop These Medications / Medication Review Page
              },

              /* {          MADDOX *** COMMENTED OUT IN CASE WE NEED TO RESTORE
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              }, */
            ],
          },
        },

        {
          id: "page-describeYourIdea",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-blueprint.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Describe your idea. How would it work? What would it do?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "(don't give us the solution just yet - we want to make sure we understand the problem first!)",
              textType: "bodyText",
              colorText: "var(--color-accent-primary-bold-800-default)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "describe_idea",
              destination: "page-next",
            },
          ],
        },

        {
          id: "page-whatIsTheName",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "What is the working name you want to call this by?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "idea_name",
              destination: "page-next",
            },

            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "This name doesn't have to be permanent! It can be only a summary or a brand identity - just let us know what to call it!",
              textType: "bodyText",
              colorText: "var(--color-accent-primary-bold-800-default)",
              textAlignment: "left",
            },
          ],
        },
        {
          id: "page-userOfTheInvention",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-spaceshipblasting.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Who do you think will be the user of your invention?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "user_invention",
              destination: "page-next",
            },
          ],
        },
        {
          id: "page-whoWouldBuy",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-groupofspacemen.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Who do you think would buy your invention?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "buyer_invention",
              destination: "page-next",
            },
          ],
        },

        {
          id: "page-category",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part1.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "What category does your solution best fit into?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 6,
              componentType: "button-item-list",
              selectMultiple: false,
              buttonItemsList: [
                "A physical device or tool",
                "A process improvement or workflow change",
                "A software or digital solution",
                "An educational or training approach",
                "Not sure / doesn't fit neatly into these",
              ],
              questionID: "solution-category",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },

        {
          id: "page-haveYouTested",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part1.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you already built or tested anything related to your solution?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 2,
              componentType: "button-item-list",
              selectMultiple: false,
              buttonItemsList: [
                "Yes, I've tested something!",
                "I've created something but haven't tested it yet",
                "I have a concept but nothing built",
                "I've just started thinking about it",
              ],
              questionID: "built-tested",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },
        {
          id: "page-whatIsStoppingYou",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part1.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "What is stopping you from bringing your idea to life on your own?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 2,
              componentType: "button-item-list",
              selectMultiple: true,
              buttonItemsList: [
                "Too expensive",
                "Not enough time(don't have it)",
                "Can't talk to the right people",
                "Don't know who the right people are.",
                "Analysis paralysis - I don't know where to start.",
                "Other",
              ],
              questionID: "what-is-stopping-you",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 4,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },

        {
          id: "page-haveYouWorkedOnThis",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part2.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you worked on this idea during your personal time, work time, or both?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 2,
              componentType: "button-item-list",
              selectMultiple: false,
              buttonItemsList: [
                "All personal time",
                "Mostly work time",
                "A mix of both",
                "Haven't worked on it much yet",
              ],
              questionID: "time-worked",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 3,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },
        {
          id: "page-whereDoYouSeeInAYear",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part2.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Where do you see your invention a year from now?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "year_from_now",
              destination: "page-next",
            },
          ],
        },
        {
          id: "page-haveYouWorkedOnThis",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "qa-part2.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "How involved do you want to be in developing this idea further?",
              textType: "h2",
              textAlignment: "left",
            },
            {
              // Button Item List
              renderOrder: 2,
              componentType: "button-item-list",
              selectMultiple: false,
              buttonItemsList: [
                "I want to be very involved in building and testing it (4-6 hours a week)",
                "I'd like to collaborate, but let others lead the build (1-2 hours a week)",
                "I just want to share the idea and let others run with it (1 hour a month)",
                "I'm not sure yet",
              ],
              questionID: "how_involved",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [
              {
                // Button
                renderOrder: 3,
                componentType: "button",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValue: "Next Question!",
                destination: "page-next",
              },
            ],
          },
        },
        {
          id: "file_input",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have any files of your idea you would like to submit?",
              textType: "h2",
              textAlignment: "left",
            },

            {
              // Page Title
              renderOrder: 1,
              componentType: "input-file",
            },
            {
              // Button
              renderOrder: 3,
              componentType: "button",
              buttonType: "swipe-indicator",
              buttonStyle: "primary",
              iconVisible: false,
              textValue: "Next Question!",
              destination: "page-next",
            },
          ],
        },
        {
          id: "file_input",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              componentType: "review",
            },
          ],
        },
      ],
    },
  ],
};

export const en_contactUs_intakeQuestions: ContactUsObject = {
  id: "contactUsTOC",
  hasLock: false,
  pageItems: [
    {
      // Page Title
      renderOrder: 1,
      componentType: "text",
      textValue: "Contact Us",
      textType: "h2",
    },

    {
      // Body Text - first paragraph
      renderOrder: 2,
      componentType: "text",
      textValue:
        "If you have any questions or concerns about your upcoming {PROCEDURE_NAME}, please don’t hesitate call the GI Office at 309-308-5900. Please choose Option 1 when prompted. Our calling hours are <b>8:00am-4:00pm, Mon-Fri</b>.",
      textType: "bodyText",
      textAlignment: "left",
    },

    {
      // Body Text - second paragraph
      renderOrder: 3,
      componentType: "text",
      textValue:
        "<b>After 4:00pm</b>, please feel free to leave a voicemail, and your call will be answered in the order it was received the following business day.",
      textType: "bodyText",
      textAlignment: "left",
    },
  ],

  BottomButtonHolderObject: {
    bottomButtonHolderID: "Contact Us Bottom Buttons",
    bottomButtonHolderItems: [
      {
        // GI Office Phone Number Button
        renderOrder: 4,
        componentType: "button-phone-number",
        buttonType: "normal",
        buttonStyle: "primary",
        iconVisible: false,
        textValue: "Call the GI Office",
        variablePhoneNumber: "giOfficeNumber",
        hardcodedPhoneNumber: "3093085900",
      },
    ],
  },
};
