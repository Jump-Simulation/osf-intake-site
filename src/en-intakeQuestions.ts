// FH Open Scheduling Message

import { faL } from "@fortawesome/free-solid-svg-icons";
import { BookObject, ContactUsObject, PageObject } from "./types";

export const en_intakeQuestions_Book: BookObject = {
  bookId: "fhOpenScheduling",

  chapterObjects: [
    
    // Intake QA Chapter ----------------------------------------------------------------------------------------------
    {
      chapterID: "welcome_login_chapter",
      progressBarVisible: false,
      progressBarColor: "var(--gray-800, #4D4D4D)",
      progressBarColorBackground: "var(--gray-200, #E6E6E6)",
      chapterBackgroundColor: "var(--color-neutral-1150, #0E1416)",

      // TOP RIGHT BUTTON STYLES -------
      topRightNavButtonDestination: "fh-openSchedulingSection-001",
      topRightNavButtonColor:
        "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorHover:
        "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorActive:
        "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

      pageObjects: [
        {
          id: "page-login",
          navTitle: "null",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "var(--neutral-teal-gray-1150, #0E1416)",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              componentType: "text",
              textValue: "Sign in to get started",
              textType: "h2",
              textAlignment: "left",
              colorText: "var(--color-primary-300, #60D6ED)",
            },
            {
              componentType: "text",
              textValue:
                "Having an account with us allows you to auto-save your progress and receive responses from our team.",
              textType: "bodyText",
              textAlignment: "left",
              colorText: "var(--color-neutral-200, #DEE4E5)",
            },
            {
              // Page Title
              renderOrder: 1,
              componentType: "login",
              destination: "page-sectionOneStart",
              minWordCount: "5",
            },
            {
              componentType: "button",
              buttonType: "normal",
              buttonStyle: "secondary",
              colorOverrideDefault: "var(--color-primary-300ds, #88D2E3)",
              colorOverrideHover: "var(--color-primary-200, #A3EEFF)",
              colorOverrideActive: "var(--color-primary-100, #E0FAFF)",
              iconVisible: false,
              textValue: "Create Inventor Account",
              destination: "page-register"
            },
            {
              componentType: "text",
              textValue: "----------------- Or -----------------",
              textType: "bodyText",
              textAlignment: "center",
              colorText: "var(--color-neutral-300, #BFC8CA)",
            },
            {
              componentType: "text",
              textValue:
                "If you'd prefer to create your account later, you can get started from here!",
              textType: "bodyText",
              textAlignment: "left",
              colorText: "var(--color-neutral-200, #DEE4E5)",
            },
            {
              componentType: "button",
              buttonStyle: "secondary",
              colorOverrideDefault: "var(--color-primary-300ds, #88D2E3)",
              colorOverrideHover: "var(--color-primary-200, #A3EEFF)",
              colorOverrideActive: "var(--color-primary-100, #E0FAFF)",
              iconVisible: false,
              textValue: "Preview as guest",
              destination: "page-welcome",
            },
          ],
        },
        {
          id: "page-register",
          navTitle: "Intake Start",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "--osfBrand-tealgray-50, #F4FBFC",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              componentType: "text",
              textValue: "Create your Inventor Account",
              textType: "h2",
              textAlignment: "left",
              colorText: "var(--color-primary-300, #60D6ED)",
            },
            {
              componentType: "text",
              textValue:
                "Welcome, new Inventor! We're excited to meet you. PLease tell us a little about yourself so we know who we're reaching out to!",
              textType: "bodyText",
              textAlignment: "left",
              colorText: "var(--color-neutral-200, #DEE4E5)",
            },

            {
              componentType: "new-account",
              destination: "page-sectionOneStart",
            },
          ],
        },
        {
          id: "page-sectionOneStart",
          navTitle: "Intake Start",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "var(--color-neutral-1150, #0E1416)",
          // pageBackgroundColor: "var(--neutral-teal-gray-1150, #0E1416)",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Section 1/3",
              textType: "h4",
              colorText: "var(--color-neutral-300, #BFC8CA)",
              textAlignment: "left",
            },

            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue: 'Start With the <span style="color: var(--color-accent-secondary-light-300-default);">Problem</span>',
              textType: "h1",
              colorText:
                "var(--color-accent-primary-light-300-default, #60D6ED)",
              textAlignment: "left",
            },
            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "Every great invention begins with a clear problem, and no one understands your problem better than you.",
              textType: "bodyText",
              colorText: "var(--color-neutral-200, #DEE4E5)",
              textAlignment: "left",
            },
            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "What’s happening, when, and to whom? Why is there a need for change?",
              textType: "bodyText",
              colorText: "var(--color-neutral-200, #DEE4E5)",
              textAlignment: "left",
            },
            {
              // Page Holder Horizontal
              renderOrder: 4,
              componentType: "page-holder-horizontal",
              marginSides: "0px",
              width: "100%",
              gap: "md",

              pageSectionItems: [
                {
                  // Information Icon Button
                  renderOrder: 0,
                  componentType: "button",
                  buttonType: "icon",
                  iconFileName: "info-icon-fh.png",
                  iconHorizontalPlacement: "left",
                  destination: "modal-001",
                },

                {
                  // Page Section Component
                  renderOrder: 6,
                  componentType: "page-section",
                  marginSides: "",
                  // colorBackground: "linear-gradient(90deg, #CEF7FF 0%, var(--color-primary-container-default, #A3EEFF) 68.65%)",
                  colorBackground: "var(--color-primary-container-default)",
                  pageSectionItems: [
                    {
                      // Caption
                      renderOrder: 2,
                      componentType: "text",
                      textValue: "Questions to Answer: 4",
                      textType: "caption",
                      textAlignment: "left",
                      colorText: "var(--color-on-primary-container)",
                    },
                  ],
                },
              ],
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
                textValue: "Let's do this!",
                destination: "page-next",
              },
            ],
          },
        },
      ],
    },
    
    // Intake QA Chapter ----------------------------------------------------------------------------------------------
    {
      chapterID: "intake_section_one_questions_chapter",
      progressBarVisible: true,
      progressBarColor: "var(--gray-800, #4D4D4D)",
      progressBarColorBackground: "var(--gray-200, #E6E6E6)",
      chapterBackgroundColor: "var(--color-surface-default, #F4FBFC)",

      // TOP RIGHT BUTTON STYLES -------
      topRightNavButtonDestination: "fh-openSchedulingSection-001",
      topRightNavButtonColor:
        "linear-gradient(180deg, var(--color-accent-primary-700-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorHover:
        "linear-gradient(180deg, var(--color-accent-primary-600-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",
      topRightNavButtonColorActive:
        "linear-gradient(180deg, var(--color-accent-primary-900-default, #007A95) 0%, var(--color-accent-primary-bold-800-default, #00677E) 100%)",

      pageObjects: [

        {
          id: "page-problemSolve",
          navTitle: "Intake Start",
          keywords: "introduction",
          authors: "Kyle Formella, Maddox Binder",
          lastUpdated: "12092024",
          pageBackgroundColor: "var(--color-surface-default, #F4FBFC)",
          hasVariables: false,
          hasLock: false,

          pageItems: [
            {
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "What problem are you trying to solve?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },

            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "(don't give us the solution just yet - we want to make sure we understand the problem first!)",
              textType: "bodyText",
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
              fileName: "astronaut-broken-piece-rocket-lowpoly-draft.png",
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "How do you personally connect to this problem?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "personally_connect",
              destination: "guestCheck",
            },
            {
              renderOrder: 0,
              componentType: "image",
              fileName: "hopeful-connection-astronaut-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
          ],
          modalObjects: [
            {
              modalID: "modal-001",
              modalType: "sheet",
              modalItems: [
                {
                  componentType: "text",
                  textValue: "Create an account to save and continue",
                },
                {
                  componentType: "text",
                  textValue:
                    "We're excited to connect! To continue, we need a way to contact you.",
                },
                {
                  componentType: "partial-account-creation",
                  destination: "page-next"
                },

              ],
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "When and where does the problem occur?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "when_where",
              destination: "page-next",
            },
            {
              renderOrder: 0,
              componentType: "image",
              fileName: "when-and-where-problem-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you searched for other solutions for this problem before?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
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
            {
                // Button Selection Confirmation
                renderOrder: 5,
                componentType: "button-selection-confirmation",
                buttonStyleNoneSelected: "tertiary",
                buttonStyleSomethingSelected: "primary",
                iconVisible: false,
                textValueNoneSelected: "Select an Option",
                destinationNoneSelected: "null",
                textValueSomethingSelected: "Next question!",
                destinationSomethingSelected: "page-next", // Stop These Medications / Medication Review Page
              },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "searching-for-parts-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
          ],
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Describe your idea. How would it work? What would it do?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "describe_idea",
              destination: "page-next",
            },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "astronaut-experiment-lab-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
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
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              // Body Text
              renderOrder: 2,
              componentType: "text",
              textValue:
                "Remember, this name does not have to be permanent and can change later!",
              textType: "bodyText",
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
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "astronaut-draw-conspiracy-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Who do you think will be the user of your invention?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "user_invention",
              destination: "page-next",
            },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "robouser-astroobserver-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Who do you think would buy your invention?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "buyer_invention",
              destination: "page-next",
            },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "astronaut-robot-handshake-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
          ],
        },

        {
          id: "page-categoryOfInvention",
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
              textValue: "What category does your solution best fit into?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
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
            {
              // Button
              renderOrder: 4,
              componentType: "button-selection-confirmation",
              buttonType: "swipe-indicator",
              buttonStyle: "primary",
              iconVisible: false,
              textValueNoneSelected: "Select an Option",
              destinationNoneSelected: "null",
              textValueSomethingSelected: "Next question!",
              destination: "page-next",
            },
          ],

          BottomButtonHolderObject: {
            bottomButtonHolderID: "FH Page 1 Button Holder",
            bottomButtonHolderItems: [

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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you already built or tested anything related to your solution?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
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
            {
                // Button
                renderOrder: 4,
                componentType: "button-selection-confirmation",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValueNoneSelected: "Select an Option",
                destinationNoneSelected: "null",
                textValueSomethingSelected: "Next Question!",
                destination: "page-next",
              },
          ],
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "What is stopping you from bringing your idea to life on your own?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "barriers_to_begin",
              destination: "page-next",
            },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "thoughtful-astronaut-satellite-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue:
                "Have you worked on this idea during your personal time, work time, or both?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
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
            {
                // Button
                renderOrder: 3,
                componentType: "button-selection-confirmation",
                buttonType: "swipe-indicator",
                buttonStyle: "primary",
                iconVisible: false,
                textValueNoneSelected: "Select an option",
                destinationNoneSelected: "null",
                textValueSomethingSelected: "Next question!",
                destination: "page-next",
              },
          ],
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
              // Page Title
              renderOrder: 1,
              componentType: "text",
              textValue: "Where do you see your invention a year from now?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
              textAlignment: "left",
            },
            {
              renderOrder: 3,
              componentType: "input-text",
              placeHolderText: "Type your answer here",
              questionID: "year_from_now",
              destination: "page-next",
            },
            {
              // Image
              renderOrder: 0,
              componentType: "image",
              fileName: "thinking-astronaut-lowpoly-draft.png",
              sizeOfPageTaken: "20%",
              animationName: "fade-up",
              pageOrientation: "portrait",
              hasDropShadow: false,
            },
          ],
        },
        {
          id: "page-howInvolvedDoYouWantToBe",
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
                "How involved do you want to be in developing this idea further?",
              textType: "h2",
              colorText: "var(--color-accent-primary-bold-800-default, #00677E)",
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
            {
              // Button
              renderOrder: 4,
              componentType: "button-selection-confirmation",
              buttonType: "swipe-indicator",
              buttonStyle: "primary",
              iconVisible: false,
              textValueNoneSelected: "Select an Option",
              destinationNoneSelected: "null",
              textValueSomethingSelected: "Next question!",
              destination: "modal-accountFinishedCheckpoint",
            },
          ],

          modalObjects: [
            {
              modalID: "modal-accountFinishedCheckpoint",
              modalType: "sheet",
              modalItems: [
                {
                  componentType: "text",
                  textValue: "Congrats",
                },
                {
                  componentType: "account-checker",
                  destination: "",
                },
              ],
            },
          ],
        },

        {
          id: "page-fileInput",
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
