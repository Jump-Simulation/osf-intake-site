var projectName: string = "OSF-Intake-Submission";
var BuildVersion: string = `0.01`;
var debugMode = false;

import { ReactElement, createContext, useContext, useEffect, useMemo, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import "./CSS/Page_Main_Styles.css"
import "./CSS/Page_Component_Styles/Bottom-Shadow.css"

import {
  FieldValue,
  collection, doc, getDoc, increment, setDoc, updateDoc, serverTimestamp
} from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import { UAParser } from 'ua-parser-js';
import { CarouselOrientation } from './Components/Eddies_Custom_Carousel'
import Eddies_Custom_Carousel from './Components/Eddies_Custom_Carousel'
import Eddies_Custom_Carousel_Item, { Eddies_Custom_Carousel_Item_Props } from './Components/Eddies_Custom_Carousel_Item'
import Object_Item_Modal_Popup, { Object_Item_Modal_Popup_Props } from './Components/Page_Components/Object_Item_Modal_Popup'
import Object_Item_Text from './Components/Page_Components/Object_Item_Text'
import Object_Item_Image from './Components/Page_Components/Object_Item_Image'
import Object_Item_Modal_Slide, { Object_Item_Modal_Slide_Props } from './Components/Page_Components/Object_Item_Modal_Slide'

import { PageObject, PageItem, ContactUsObject, BookObject, ChapterObject } from './types'

/* import Object_Button_Swipe from './Components/Page_Components/Object_Button_Swipe' */
import Object_Button_Normal from './Components/Page_Components/Object_Button_Normal'
import Object_Button_Normal_Locked from './Components/Page_Components/Object_Button_Normal_Locked'
import Object_Item_Modal_Alert, { Object_Item_Modal_Alert_Props } from './Components/Page_Components/Object_Item_Modal_Alert'
import Object_Button_Selection_Confirmation from './Components/Page_Components/Object_Button_Selection_Confirmation'
import Object_Button_ArrowDown from './Components/Page_Components/Object_Button_ArrowDown'
import React from 'react'
import Eddies_Custom_Carousel_Dots from './Components/Eddies_Custom_Carousel_Dots'

import Holder_Buttons_Selection_Multi from './Components/Page_Components/Holder_Buttons_Selection_Multi'
import Holder_Buttons_Selection_Single from './Components/Page_Components/Holder_Buttons_Selection_Single'

import Object_Button_ArrowUp from './Components/Page_Components/Object_Button_ArrowUp'
import Object_Button_NavMenuButton from './Components/Page_Components/Object_Button_NavMenuButton'
import Object_Item_NavBarSpacer from './Components/Page_Components/Object_Item_NavBarSpacer'

import Holder_Buttons_Selection_Results from './Components/Page_Components/Holder_Buttons_Selection_Results'


// 
import Holder_Buttons_Prep_Destinations from './Components/Page_Components/Holder_Buttons_Prep_Destinations'
import Object_Button_Prep_Confirm from './Components/Page_Components/Object_Button_Prep_Confirm'


import ReactSlidingPane from 'react-sliding-pane'
import Object_Item_NavMenu from './Components/Page_Components/Object_Item_NavMenu'
import Holder_PageItems from './Components/Page_Components/Holder_PageItems'
import Holder_Buttons_AnchoredBottom from './Components/Page_Components/Holder_Buttons_AnchoredBottom'
import Screen_SplashScreen from './Components/SplashScreen'
import Object_Button_ExternalLink from './Components/Page_Components/Object_Button_ExternalLink'
import Object_Button_PhoneNumber from './Components/Page_Components/Object_Button_PhoneNumber'
import Object_Button_Confirm from './Components/Page_Components/Object_Button_Confirm'
import Object_Button_Deny from './Components/Page_Components/Object_Button_Deny'





import Object_Button_ModalDismiss from './Components/Page_Components/Object_Button_ModalDismiss'


import Holder_Objects_PageSection from './Components/Page_Components/Holder_Objects_PageSection'


import { sendPatientData } from "./Components/PatientDataSender";

import { fetchData } from "./Components/PatientDataGetter";

import { contactUsExampleData, en_exampleData_book } from './exampleData';

import { en_fh_OpenScheduling_book, en_fh_contactUs_openScheduling } from './en-fh-openScheduling'
import { BaseCarouselChildProps } from './BaseProps';
import Object_Button_NavOptions from './Components/Page_Components/Object_Button_NavOptions';
import Object_Item_NavOptionsMenu from './Components/Page_Components/Object_Item_NavOptionsMenu';
import Object_Modal_LanguageSelect from './Components/Object_Modal_LanguageSelect';
import Object_Modal_SuggestFeature from './Components/Object_Modal_SuggestFeature';
import Object_Modal_ReportProblem from './Components/Object_Modal_ReportProblem';
import Object_Modal_OptOut from './Components/Object_Modal_OptOut';
import DebugScreens from './Components/DebugScreens';

import { en_siteIndex, en_contactUs_siteIndex } from './en-homepage'

import Holder_Objects_HorizontalHolder from './Components/Page_Components/Holder_Objects_HorizontalHolder';



import DebugMobileScreen from './Components/DebugMobileScreen';
import Object_Modal_ContactUs from './Components/Object_Modal_ContactUs';
import { en_fh_contactUs_myChart, en_fh_myChart_book } from './en-fh-mychart';
import Object_Button_IconButton from './Components/Page_Components/Object_Button_IconButton';
import Object_Button_ScheduleButton from './Components/Page_Components/Object_Button_ScheduleButton';
import { en_fh_contactUs_costChapter, en_fh_costChapter_book } from './en-fh-costChapter';
import { en_fh_contactUs_educationChapter, en_fh_educationChapter_book } from './en-fh-educationChapter';
import { en_fh_contactUs_familyChapter, en_fh_familyChapter_book } from './en-fh-familyChapter';
import { en_fh_contactUs_insuranceChapter, en_fh_insuranceChapter_book } from './en-fh-insuranceChapter';
import { en_fh_optOut_book, en_fh_optOut_myChart } from './en-fh-optOut';
import Object_Button_OptOut from './Components/Page_Components/Object_Button_OptOut';
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";
import { auth, firestore } from './Components/Firebase';




var osfProceduresPath: string = `organizations/osf_st-francis/procedures`;

var firestoreAnalyticsPath: string = `analytics/organizations/osf-sfmc/procedures`;
var firestoreFeedbackPath: string = `feedback/organizations/osf-sfmc/procedures`;

/* const firestoreProcedurePath = collection(firestore, osfProceduresPath);

const firestoreAnalyticsPath = collection(firestore, osfAnalyticsPath); */
var localCurrentBookData: BookObject;
var localCurrentChapterData: ChapterObject[];
var localCurrentChapter: ChapterObject;

var localCurrentPageData: PageObject[] = [];


var localCurrentContactUsPage: ContactUsObject = en_fh_contactUs_openScheduling;


var projectHealthReportString: string = "";

const originalLog = console.log;
const originalError = console.error;

export type AppContextType = {

  SendErrorReport(givenErrorType: string, givenErrorMessage?: string, givenErrorLocation?: string): void;

};
export const AppContext = createContext<AppContextType | undefined>(undefined);
export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppContext.Provider");
  }
  return context;
};


const isMobile =
  /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );



//var localCurrentBookData: PageObject[] = en_fh_openScheduling;


// FH STUFF
var localCurrentProgressbarVisible: boolean = true;
var localCurrentProgressbarColor: string = "default";
var localCurrentProgressBarColorBackground: string = "default";

var localCurrentTopRightButtonColor: string = "default";
var localCurrentTopRightButtonColorHover: string = "default";
var localCurrentTopRightButtonColorActivate: string = "default";
var localCurrentTopRightButtonDestination: string = "default";
var localCurrentShouldShowTopRightButton: boolean = true;

var localCurrentPageColor: string = "default"


var currentProgressBarIndex: number = 0;
// FH STUFF

//var localIntroBookData: PageObject[] = en_fh_openScheduling;
//var localIntroBookData: PageObject[] = en_fh_openScheduling;


var keyInt = 0;

class PatientInfo {
  scrubbedId: string;
  patientFirstName: string;
  patientLastName: string;
  patientAge: number;
  procedureID: string;
  procedureName: string;
  dateOfProcedure: string;
  timeOfProcedure: string;
  procedureLocation: string;
  patientSex: string;
  anesthesiaType: string;

  dateEnteredPatientFlow: string;
  hasSeenProcedureIntro: number;
  patientTrueTags: string;
  patientFalseTags: string;
  patientOptOut: number;
}

var patientInfo: PatientInfo = {
  scrubbedId: '',
  patientFirstName: '',
  patientLastName: '',
  patientAge: 0,
  procedureID: '',
  dateOfProcedure: '',
  timeOfProcedure: '',
  procedureLocation: '',
  patientSex: '',
  anesthesiaType: '',
  procedureName: '',
  dateEnteredPatientFlow: '',
  hasSeenProcedureIntro: 0,
  patientTrueTags: '',
  patientFalseTags: '',
  patientOptOut: 0,
};


const generateRandomID = (length: number) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

var patientID: string = generateRandomID(10);
var patientPID: string = "none";
var contentInfo: string = "";

var localTagsAnsweredTrue: string = "";
var localTagsAnsweredFalse: string = "";
var localPagesVisited: string[] = [];

var localCurrentCarouselIndex: number = 0;
var localPreviousCarouselIndex: number = -1;

var previousPagesVisitedStrings: string[] = [];


var localURLVariable: string = "";
/* var BuildVersion: string = `1.008 - ${new Date().toLocaleString()}`; */

var localChapterID: string = "none yet";

var localPageID: string = "none yet";

var localModalID: string = "none yet";



function setLocalModalID(givenModalId: string) {
  localModalID = givenModalId;
}

var localPageLockNumber: number = 1;
var contentProcedure: string = "";
var contentBook: string = "";

var goToDestinationLockNumber: number = 0;
var localSelectionMapVariable: Map<string, string[]> = new Map();


var dataLock: number = 0;

function App() {

  const [appPaddingStyle, setAppPaddingStyle] = useState("");

  const [isMobileString, setIsMobileString] = useState("-mobile")

  const contextValue: AppContextType = {
    SendErrorReport: SendProjectHealthReport,
  };

  const deviceInfo = useMemo(() => {
    const ua = navigator.userAgent;
    const parser = new UAParser();
    const result = parser.getResult();

    // Device type fallback
    let deviceType = result.device.type || '';

    // Manual user-agent overrides
    if (/Android/i.test(ua)) {
      deviceType = 'Android';
    } else if (/iPhone/i.test(ua)) {
      deviceType = 'iPhone';
    } else if (/iPad/i.test(ua)) {
      deviceType = 'iPad';
    } else if (/iPod/i.test(ua)) {
      deviceType = 'iPod';
    } else if (/BlackBerry/i.test(ua)) {
      deviceType = 'BlackBerry';
    } else if (/IEMobile/i.test(ua)) {
      deviceType = 'Windows Phone';
    } else if (/Opera Mini/i.test(ua)) {
      deviceType = 'Opera Mini';
    } else if (/Kindle|Silk/i.test(ua)) {
      deviceType = 'Amazon Kindle';
    } else if (/PlayBook/i.test(ua)) {
      deviceType = 'BlackBerry PlayBook';
    } else if (/webOS/i.test(ua)) {
      deviceType = 'Palm webOS';
    } else if (/Tizen/i.test(ua)) {
      deviceType = 'Samsung Tizen';
    } else if (/CrOS/i.test(ua)) {
      deviceType = 'Chromebook';
    } else if (/Macintosh|Mac OS X/i.test(ua)) {
      deviceType = 'Mac';
    } else if (/Windows NT/i.test(ua)) {
      deviceType = 'Windows PC';
    } else if (/Linux/i.test(ua)) {
      deviceType = 'Linux';
    } else {
      deviceType = 'Desktop';
    }

    // Device and OS details
    const deviceVendor = result.device.vendor || 'Unknown Vendor';
    const deviceModel = result.device.model || deviceType;
    const osName = result.os.name || 'Unknown OS';
    const osVersion = result.os.version || '';
    const browserName = result.browser.name || 'Unknown Browser';
    const browserVersion = result.browser.version || '';

    // Formatted display string
    const formatted = `${deviceModel} (${osName}${osVersion ? ` ${osVersion}` : ''})`;

    return {
      type: deviceType,
      vendor: deviceVendor,
      model: deviceModel,
      os: `${osName} ${osVersion}`.trim(),
      browser: {
        name: browserName,
        version: browserVersion,
      },
      formatted,
      isMobileString,
    };
  }, []);

  async function SendProjectHealthReport(givenReportType: string, givenReportMessage?: string, givenReportCodeLocation?: string) {

    const now = new Date();
    const day = now.toLocaleDateString('en-US', { day: 'numeric' });   // <- No leading zero
    const month = now.toLocaleDateString('en-US', { month: 'long' });
    const year = now.toLocaleDateString('en-US', { year: 'numeric' });
    const time = now.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }); // e.g., "4:14:23 PM"
    const customFormattedDate = `${year}-${month}-${day}-${time}`;




    projectHealthReportString =
      "Project Name_" + projectName +
      "||" +
      "Report Type_" + givenReportType +
      "||" +
      "Report Date_" + customFormattedDate +
      "||" +
      "Report Message_" + givenReportMessage +
      "||" +
      "Report Code Location_" + givenReportCodeLocation +
      "||" +
      "User ID_" + getOrCreateUserID() +
      "||" +
      "Device Info_" + deviceInfo.formatted +
      "||" +
      "Browser Name_" + deviceInfo.browser.name +
      "||" +
      "Browser Version_" + deviceInfo.browser.version

    //Keep this console.log here so that devs can see the report in the dev debug consoles!
    originalLog("REPORT STRING: " + projectHealthReportString);

    try {
      const userId = await getOrCreateUserID(); // Must return a string

      const docId = `${userId}_${customFormattedDate}`;

      const docRef = doc(firestore, 'AppReports/organizations/osf-sfmc', docId);

      await setDoc(docRef, {
        Report: projectHealthReportString
      });

      originalLog('Report written successfully');
    } catch (error) {
      originalLog('Error writing report:', error);
    }

  }


  async function SimulateFirebaseWriteError(givenMessage: string, givenLocation: string) {
    try {
      const docRef = doc(firestore, 'DOESNTEXIST/organizations/osf-sfmc', "whatever");
    } catch {
      await SendProjectHealthReport("Firebase Write Error", givenMessage, givenLocation);
    }
    originalLog("Simulate Firebase Write Error was called from: " + givenLocation);
  }

  async function SimluateMissingAssetError(givenMessage: string, givenLocation: string) {
    await SendProjectHealthReport("Missing Asset Error", givenMessage, givenLocation);
    originalLog("Simulate Missing Asset Error was called from: " + givenLocation);
  }




  useEffect(() => {

    if (isMobile) {

      setAppPaddingStyle("app-padding-mobile");
      setIsMobileString("-mobile");
    }
    else {
      setAppPaddingStyle("app-padding-desktop");
      setIsMobileString("-desktop");
    }

  }, [])

  const [patientInfo_ScrubbedId, setPatientInfo_ScrubbedId] = useState("null");
  const [patientInfo_PatientNameFirst, setPatientInfo_PatientNameFirst] = useState("null");
  const [patientInfo_PatientNameLast, setPatientInfo_PatientNameLast] = useState("null");
  const [patientInfo_PatientAge, setPatientInfo_PatientAge] = useState(-1);
  const [patientInfo_PatientSex, setPatientInfo_PatientSex] = useState("null");
  const [patientInfo_PatientDateOfProcedure, setPatientInfo_PatientDateOfProcedure] = useState("null");
  const [patientInfo_PatientAnesthesiaType, setPatientInfo_PatientAnesthesiaType] = useState("null");
  const [patientInfo_PatientDateEnteredPatientFlow, setPatientInfo_PatientDateEnteredPatientFlow] = useState("null");
  const [patientInfo_PatientTimeOfProcedure, setPatientInfo_PatientTimeOfProcedure] = useState("null");
  const [patientInfo_PatientProcedureID, setPatientInfo_PatientProcedureID] = useState("null");
  const [patientInfo_PatientProcedureLocation, setPatientInfo_PatientProcedureLocation] = useState("null");
  const [patientInfo_PatientPreferedLanguage, setPatientInfo_PatientPreferedLanguage] = useState("null");
  const [patientInfo_PatientHasSeenProcedureIntro, setPatientInfo_PatientHasSeenProcedureIntro] = useState(-1);
  const [patientInfo_PatientTagsTrueArray, setPatientInfo_PatientTagsTrueArray] = useState("null");
  const [patientInfo_PatientTagsFalseArray, setPatientInfo_PatientTagsFalseArray] = useState("null");
  const [patientInfo_PatientOptOut, setPatientInfo_PatientOptOut] = useState(0);
  const [patientInfo_PatientProcedureName, setPatientInfo_PatientProcedureName] = useState("null")


  // FH SPECIFIC STUFF
  //var localCurrentProgressbarVisible: boolean = true;
  const [state_currentProgressbarVisible, setState_currentProgressbarVisible] = useState(localCurrentProgressbarVisible);

  //var localCurrentProgressbarColor: string = "default";
  const [state_currentProgressbarColor, setState_currentProgressbarColor] = useState(localCurrentProgressbarColor);

  //var localCurrentProgressBarColorBackground: string = "default";
  const [state_currentProgressBarColorBackground, setState_currentProgressBarColorBackground] = useState(localCurrentProgressBarColorBackground);



  const [state_currentProgressBarIndex, setState_currentProgressBarIndex] = useState(0);


  const [state_currentProgressBarLength, setState_currentProgressBarLength] = useState(0);


  //var localCurrentTopRightButtonColor: string = "default";
  const [state_currentTopRightButtonColor, setState_currentTopRightButtonColor] = useState(localCurrentTopRightButtonColor);

  //var localCurrentTopRightButtonColorHover: string = "default";
  const [state_currentTopRightButtonColorHover, setState_currentTopRightButtonColorHover] = useState(localCurrentTopRightButtonColorHover);

  //var localCurrentTopRightButtonColorActivate: string = "default";
  const [state_currentTopRightButtonColorActivate, setState_currentTopRightButtonColorActivate] = useState(localCurrentTopRightButtonColorActivate);

  //var localCurrentTopRightButtonDestination: string = "";
  const [state_currentTopRightButtonDestination, setState_currentTopRightButtonDestination] = useState(localCurrentTopRightButtonDestination);

  //var localCurrentShouldShowTopRightButton: boolean = true
  const [state_currentShouldShowTopRightButton, setState_currentShouldShowTopRightButton] = useState(localCurrentShouldShowTopRightButton);


  //var localCurrentPageColor: string = "default"
  const [state_currentPageColor, setState_currentPageColor] = useState(localCurrentPageColor);


  /*DATA VARIABLES*/

  const [tagsAnsweredTrue, setTagsAnsweredTrue] = useState("");
  const [tagsAnsweredFalse, setTagsAnsweredFalse] = useState("");


  const [urlVariable, setURLVariable] = useState("");
  const [shouldShowDebugScreen, setShouldShowDebugScreen] = useState(true);


  const [debugMobileLogs, setDebugMobileLogsLogs] = useState<string[]>([]);
  const [debugMobileButtonTapped, setDebugMobileButtonTapped] = useState(0)



  const [pagesVisited, setPagesVisited] = useState<string[]>([]);
  var debugging = false;

  ///USE EFFECT THAT POPULATES OUR CONSOLE.LOG DEBUG MOBILE MENU
  useEffect(() => {

    if (debugMode === false) {


      let isReporting = false; // <-- prevents recursion

      const handleLog = (type: string, shouldWriteReport: boolean, ...args: any[]) => {

        if (isReporting) {
          originalLog("REPORTING WAS TRUE, ABORTING")
          return;
        }
        const message = args.map(arg => (typeof arg === "object" ? JSON.stringify(arg) : arg)).join(" ");



        // Capture stack trace
        const err = new Error();
        const stackLines = err.stack?.split("\n") || [];
        let locationInfo = "";

        // Stack line format varies, but we typically want the third line
        // (first is 'Error', second is this function, third is caller)
        if (stackLines.length >= 3) {
          const relevantLine = stackLines[3]; // Index 2 = caller of console.* 
          const match = relevantLine.match(/\(?([^\s]+:\d+:\d+)\)?$/); // Capture file:line:col

          if (match) {
            locationInfo = `\n@ ${match[1]}`; // Append to log message
          }
        }

        setDebugMobileLogsLogs(prevLogs => [...prevLogs, `[${type}] ${message}${locationInfo}`]);
        originalLog.apply(console, args);
        if (shouldWriteReport) {
          try {
            isReporting = true;
            SendProjectHealthReport("UncaughtLog", message, locationInfo);
          } finally {
            isReporting = false;
          }
        } else {

        };
      }

      console.log = (...args) => handleLog("LOG", false, ...args);
      //  console.warn = (...args) => handleLog("WARN", ...args);
      console.error = (...args) => handleLog("ERROR", true, ...args);

      return () => {
        console.log = originalLog;
        // console.warn = originalWarn;
        console.error = originalError;
      };
    }
  }, []);


  //DATA GETTING USE EFFECT
  useEffect(() => {

    signInAnonymously(auth).then(() => {

      const fetchPatientData = async () => {
        try {
          const urlParams = new URLSearchParams(window.location.search);
          setURLVariable(window.location.href);
          localURLVariable = window.location.href;
          // patientID = urlParams.get('id');
          patientPID = urlParams.get("pid");
          contentProcedure = urlParams.get('p');
          contentBook = urlParams.get('b');
          contentInfo = contentProcedure + "-" + contentBook;


          //console.log("contentInfo: " + contentInfo);
          if (contentInfo !== "") {
            //console.log("content info gotten: " + contentInfo + " should be the empty one")

            if (contentInfo == "fh-exampleData") {
              localCurrentBookData = en_exampleData_book;
              // console.log("content info was " + contentInfo)
              //FH STUFF!! vv
              localCurrentChapterData = en_exampleData_book.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = contactUsExampleData;
              GenerateCarouselModal(localCurrentContactUsPage)


              // console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );

            }

            else if (contentBook === "2") {

              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_myChart_book;

              //FH STUFF!! vv
              localCurrentChapterData = en_fh_myChart_book.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_myChart;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else if (contentBook === "cost") {

              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_costChapter_book;

              //FH STUFF!! vv
              localCurrentChapterData = localCurrentBookData.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^

              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_costChapter;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else if (contentBook === "optOut") {


              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_optOut_book;

              //FH STUFF!! vv
              localCurrentChapterData = localCurrentBookData.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_optOut_myChart;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );



            }
            else if (contentBook === "education") {

              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_educationChapter_book;

              //FH STUFF!! vv
              localCurrentChapterData = localCurrentBookData.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_educationChapter;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else if (contentBook === "family") {

              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_familyChapter_book;

              //FH STUFF!! vv
              localCurrentChapterData = localCurrentBookData.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_familyChapter;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else if (contentBook === "insurance") {

              console.log("content info gotten: " + contentInfo)
              console.log("contentBook gotten: " + contentBook)
              localCurrentBookData = en_fh_insuranceChapter_book;

              //FH STUFF!! vv
              localCurrentChapterData = localCurrentBookData.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_insuranceChapter;
              GenerateCarouselModal(localCurrentContactUsPage)

              console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else if (contentInfo === "null-null") {
              // console.log("content info ELSE reached: " + contentInfo + " should be the empty one")
              localCurrentBookData = en_fh_OpenScheduling_book;

              //FH STUFF!! vv
              localCurrentChapterData = en_fh_OpenScheduling_book.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_openScheduling;
              GenerateCarouselModal(localCurrentContactUsPage)
              // console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }
            else {
              // console.log("content info ELSE reached: " + contentInfo + " should be the empty one")
              localCurrentBookData = en_fh_OpenScheduling_book;

              //FH STUFF!! vv
              localCurrentChapterData = en_fh_OpenScheduling_book.chapterObjects;

              localCurrentChapter = localCurrentChapterData[0];

              localCurrentPageData = localCurrentChapterData.flatMap(chapter =>
                chapter.pageObjects.map((page, pageIndex) => ({
                  ...page,
                  index: pageIndex,
                  chapterParent: chapter.chapterID, // Assign chapterID to chapterParent
                }))
              );

              SetTopRightButton();
              SetChapterData(localCurrentChapter.chapterID);
              //FH STUFF!! ^^



              GenerateCarouselPages();
              localCurrentContactUsPage = en_fh_contactUs_openScheduling;
              GenerateCarouselModal(localCurrentContactUsPage)
              // console.log("localCurrentBookData: " + localCurrentBookData.bookId)

              localPagesVisited.push(localCurrentChapter.pageObjects[0].id)

              setPagesVisited((prevPages) =>
                prevPages.includes(localCurrentChapter.pageObjects[0].id) ? prevPages : [...prevPages, localCurrentChapter.pageObjects[0].id]
              );
            }


          }




          if (!localURLVariable.includes("localhost")
            && localURLVariable != ""
          ) {

            dataLock += 10;

          }
          else {
            /*       console.log("we're in local host, no need for patient data get") */
          }


          // Path includes the patientID as part of the collection path
          const documentPath = `${firestoreAnalyticsPath}/${contentProcedure}`;
          const timestampPath = `${firestoreAnalyticsPath}/${contentProcedure}/${patientID}/timestamped-usage`;

          // Document ID: Create the document with the current date + patientID
          const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
          const docTimestampId = `${today}_${patientID}`;  // Unique ID for the document based on date + patientID
          const docId = `${patientID}`;
          const docRef = doc(firestore, documentPath, docId);
          // Create a reference to the document
          const docTimestampRef = doc(firestore, timestampPath, docTimestampId);

          // Dynamic field name based on contentInfo
          const fieldName = (`book-${contentInfo}-timesOpened`).replace("4b2-", "");



          // console.log("this is right before the first try catch for firestore!")
          try {
            //  console.log("we reached the first firestore try!")
            await setDoc(docRef,
              {
                invisiFix: "fix",
                //awd: increment(1),
              },
              { merge: true });
            //   console.log("we passed the first invisi fix for docRef!");
            //   console.log(`Ensuring timestamp document exists at path: ${timestampPath}/${docTimestampId}`);


            // Check if the document exists
            const docSnap = await getDoc(docTimestampRef);

            if (docSnap.exists()) {

              //   console.log("we're in the DOC EXISTS if statement");
              // Document exists, increment the field
              await updateDoc(docTimestampRef, {
                [fieldName]: increment(1), // Increment the field if document exists

                useId: patientID,
                //anesthesiaType: patientInfo.anesthesiaType,
              },
              );
              //    console.log("we got past the updateDoc statement!")
            } else {
              // Document doesn't exist, create a new one
              //     console.log("we're in the ELSE statement");
              await setDoc(
                docTimestampRef,
                {
                  [fieldName]: increment(1), // Initialize the field with 1 if it doesn't exist
                  timestamp: serverTimestamp(), // Add a timestamp
                  useId: patientID,
                  //anesthesiaType: patientInfo.anesthesiaType,
                },
                { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
              );

              //   console.log("we got past the setDoc statement!")
            }

            /*    console.log("Document successfully written/updated:", docTimestampRef); */
          } catch (error) {
            console.error("Error writing timestamp document: ", error);
          }



        } catch (err: any) {
          console.log("Error fetching patient data: " + err)
        }

      };

      fetchPatientData().then(() => {

        if (!localURLVariable.includes("localhost")
          && localURLVariable != ""
        ) {


          if (!localTagsAnsweredTrue.includes(patientInfo.anesthesiaType)) {
            localTagsAnsweredTrue += patientInfo.anesthesiaType + "_";
            SetTagsAnsweredTrue(patientInfo.anesthesiaType + "_", "Anesthesia Type");
          }


          if (patientInfo.patientTrueTags !== undefined && patientInfo.patientTrueTags !== "null" && patientInfo.patientTrueTags !== null && patientInfo.patientTrueTags !== "" && patientInfo.patientTrueTags !== "\"\"") {
            localTagsAnsweredTrue = patientInfo.patientTrueTags;
            SetTagsAnsweredTrue(patientInfo.patientTrueTags, "Initial Patient True Tags Fetch");

            //console.log("WE'RE SEEING NEW TRUE TAGS FROM A PATIENT DATA GET: ")
            //console.log(patientInfo.patientTrueTags)
          }
          else {
            //console.log("PATIENT INFO WE GOT HAD NO TRUE TAGS!!")
          }

          if (patientInfo.patientFalseTags !== undefined &&
            patientInfo.patientFalseTags !== "null" &&
            patientInfo.patientFalseTags !== null &&
            patientInfo.patientFalseTags !== "" &&
            patientInfo.patientFalseTags !== "\"\"") {
            localTagsAnsweredFalse = patientInfo.patientFalseTags;
            setTagsAnsweredFalse(patientInfo.patientFalseTags);
            //console.log("WE'RE SEEING NEW FALSE TAGS FROM A PATIENT DATA GET: ")
            //console.log(patientInfo.patientFalseTags)
          }
          else {
            //console.log("PATIENT INFO WE GOT HAD NO FALSE TAGS!!")
          }



          if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {
            SetTagsAnsweredTrue(contentInfo.replace("4b2", "book") + "-seen" + "_", "Book Seen First Time");
            /*     localTagsAnsweredTrue += contentInfo.replace("4b2", "book") + "-seen" + "_"; */

            incrementFirestoreVariableAggregate(contentInfo.replace("4b2", "book") + "_first-visit")

            //console.log("we should be seeing the first page being added as new visit: " + contentInfo.replace("4b2", "book"))


          }
          else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
            && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {

            console.log("WE'RE CURRENTLY SEEING THESE TAGS: " + localTagsAnsweredTrue);
            SetTagsAnsweredTrue(contentInfo.replace("4b2", "book") + "-seenAgain" + "_", "Book Seen Second Time");
            /* localTagsAnsweredTrue += contentInfo.replace("4b2", "book") + "-seenAgain" + "_"; */

            incrementFirestoreVariableAggregate(contentInfo.replace("4b2", "book") + "_second-visit")
          }
          else {
            incrementFirestoreVariableAggregate(contentInfo.replace("4b2", "book") + "_extra-visit")
          }




        }
        else {
          /*    console.log("we're in local host, no need for patient data get") */
        }

      }); // Invoke the async function

    })



  }, []); // Empty dependency array ensures this runs once when the component mounts



  //DATA SEND USE EFFECT
  useEffect(() => {

    /*     console.log("WE SAW A CHANGE IN TAGS");
        console.log("localURLVariable: " + localURLVariable);
        console.log("patientID: " + patientID); */
    patientInfo.patientTrueTags = localTagsAnsweredTrue;
    patientInfo.patientFalseTags = localTagsAnsweredFalse;

    /*     console.log("patientInfo.patientTrueTags: " + patientInfo.patientTrueTags);
        console.log("patientInfo.patientFalseTags: " + patientInfo.patientFalseTags) */

    GenerateCarouselPages();
    if (!localURLVariable.includes("localhost")
      && localURLVariable != ""
      && patientID !== undefined
      && patientID !== null
      && patientID !== "") {

      if (dataLock > 0) {
        //console.log("About to call handleSendData()");
        //handleSendData();
      }
      else {
        //console.log("post data lock is still NOT greater than 0, not posting data!! (this is normal to see once!).")
      }

    }

  }, [tagsAnsweredTrue, tagsAnsweredFalse])




  async function optOut(givenLocation: string) {


    // console.log("optOut function called from: " + givenLocation)

    //TODO OPT OUT
    try {

      SendFirestoreData_Feedback("opt-out", "");

    } catch (error) {
      console.error("Error opting out patient:", error);
    }

  }


  const resetPatientData = async () => {
    if (patientID !== undefined && patientID !== null && patientID !== "") {
      var tempPatientInfoToReset: PatientInfo = {
        scrubbedId: patientInfo.scrubbedId,
        patientFirstName: patientInfo.patientFirstName,
        patientLastName: patientInfo.patientLastName,
        patientAge: patientInfo.patientAge,
        procedureID: patientInfo.procedureID,
        dateOfProcedure: patientInfo.dateOfProcedure,
        timeOfProcedure: patientInfo.timeOfProcedure,
        procedureLocation: patientInfo.procedureLocation,
        patientSex: patientInfo.patientSex,
        anesthesiaType: patientInfo.anesthesiaType,
        procedureName: patientInfo.procedureName,
        dateEnteredPatientFlow: patientInfo.dateEnteredPatientFlow,
        hasSeenProcedureIntro: 0,
        patientTrueTags: '',
        patientFalseTags: '',
        patientOptOut: 0,
      };
      try {
        const result = await sendPatientData(tempPatientInfoToReset, patientID);
        console.log("Data successfully RESET:", result);
      } catch (error) {
        console.error("Error RESETTING patient data:", error);
      }




    }
    else {
      console.log("We don't have a patient to reset!")
      console.log("patientID is currently: ")
      console.log(patientID);
    }



  }




  async function incrementFirestoreVariableAggregate(givenVariableName: string) {
    //console.log("About to write aggregate data of name: " + givenVariableName)
    const docPath = `${firestoreAnalyticsPath}/${contentProcedure}/1_aggregate-stats`;

    if (localURLVariable != ""
      && !localURLVariable.includes("localhost")
      && patientID !== undefined
      && patientID !== null
      && patientID !== "") {

      try {
        const docRef = doc(firestore, docPath); // Reference to the document
        const docSnap = await getDoc(docRef); // Check if the document exists

        if (!docSnap.exists()) {
          // console.log("Document does not exist. Creating it now...");
          await setDoc(docRef, { [givenVariableName]: 1 }); // Create the document with an initial value
          // console.log("Document created successfully.");
        } else {
          // console.log("Document exists. Incrementing value...");
          await updateDoc(docRef, { [givenVariableName]: increment(1) }); // Increment the value
          //  console.log(givenVariableName + " incremented successfully.");
        }
      } catch (error) {

        console.error("Error updating document:", error);
      }

    }



  }


  async function incrementFirestoreVariableIndividual(givenVariableName: string) {


    const documentPath = `${firestoreAnalyticsPath}/${contentProcedure}`;
    const timestampPath = `${firestoreAnalyticsPath}/${contentProcedure}/${patientID}/timestamped-usage`;

    // Document ID: Create the document with the current date + patientID
    const today = new Date().toISOString().split("T")[0]; // "YYYY-MM-DD"
    const docTimestampId = `${today}_${patientID}`;  // Unique ID for the document based on date + patientID
    const docId = `${patientID}`;
    const docRef = doc(firestore, documentPath, docId);
    // Create a reference to the document
    const docTimestampRef = doc(firestore, timestampPath, docTimestampId);


    if (localURLVariable != ""
      && patientID !== undefined
      && patientID !== null
      && patientID !== "") {

      try {



        const patientDocSnap = await getDoc(docRef);
        if (!patientDocSnap.exists()) {
          console.log(`Patient document ${docId} does not exist, creating with 'invisFix' field.`);
          await setDoc(docRef, { invisFix: "awd" }, { merge: true });
        }



        // Check if the document exists
        const docSnap = await getDoc(docTimestampRef);

        if (docSnap.exists()) {
          // Document exists, increment the field
          console.log("individual document exists, incrementing datafield: " + givenVariableName)
          await updateDoc(docTimestampRef, {
            [givenVariableName]: increment(1), // Increment the field if document exists
          });
        } else {
          // Document doesn't exist, create a new one
          // console.log("individual document: " + docTimestampId + " doesn't exist, making new one!")
          await setDoc(
            docTimestampRef,
            {
              [givenVariableName]: increment(1), // Initialize the field with 1 if it doesn't exist
            },
            { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
          );
        }

        /*    console.log("Document successfully written/updated:", docTimestampRef); */
      } catch (error) {
        console.error("Error writing timestamp document: ", error);
      }

    }



  }








  const getOrCreateUserID = (): string => {
    let userID = localStorage.getItem("userIDActual");
    if (!userID) {
      userID = crypto.randomUUID(); // Generate unique UUID
      localStorage.setItem("userIDActual", userID);
    }
    return userID;
  };

  async function SendFirestoreData_Feedback(givenFeedbackType: string, givenFeedback) {


    const documentPath = `${firestoreFeedbackPath}/${contentProcedure}`;
    const feedbackProblemCollectionPath = `${firestoreFeedbackPath}/${contentProcedure}/report-a-problem/reported-problems`;
    const feedbackSuggestionCollectionPath = `${firestoreFeedbackPath}/${contentProcedure}/suggest-a-feature/suggested-features`;
    const optOutCollectionPath = `${firestoreFeedbackPath}/${contentProcedure}/opt-out/opted-out`;

    // Document ID: Create the document with the current date + patientID

    const userIDActual = getOrCreateUserID();
    console.log("userIDActual: " + userIDActual);

    const now = new Date();
    const datePart = now.toISOString().split("T")[0]; // "YYYY-MM-DD"

    const hours = now.getHours() % 12 || 12; // Convert to 12-hour format, handling midnight (0 => 12)
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const amPm = now.getHours() >= 12 ? "PM" : "AM";

    const docTimestampId = `${datePart}_${hours}-${minutes}-${seconds}_${amPm}_${userIDActual}`;  // Unique ID for the document based on date + patientID

    const docTimestampPID = `${datePart}_${hours}-${minutes}-${seconds}_${amPm}_${patientPID}`;


    const docIdReportProblem = `report-a-problem`;
    const docRefReportProblem = doc(firestore, documentPath, docIdReportProblem);


    const docIdSuggestFeature = `suggest-a-feature`;
    const docRefSuggestFeature = doc(firestore, documentPath, docIdSuggestFeature);

    const docIdOptOut = `opt-out`;
    const docRefOptOut = doc(firestore, documentPath, docIdOptOut);

    // Create a reference to the document


    if (givenFeedbackType === "report-a-problem") {



      try {

        const docSnapReportProblem = await getDoc(docRefReportProblem);
        if (!docSnapReportProblem.exists()) {
          console.log(`report-a-problem does not exist, creating with 'invisFix' field.`);
          await setDoc(docRefReportProblem, { invisFix: "awd" }, { merge: true });
        }


        const docProblemRef = doc(firestore, feedbackProblemCollectionPath, docTimestampId);
        // Check if the document exists
        const docSnapReportProblemActual = await getDoc(docProblemRef);

        if (docSnapReportProblemActual.exists()) {
          // Document exists, increment the field
          await updateDoc(docProblemRef, {
            reportedProblem: givenFeedback,
          });
        } else {
          // Document doesn't exist, create a new one
          // console.log("individual document: " + docProblemRef + " doesn't exist, making new one!")
          await setDoc(
            docProblemRef,
            {
              reportedProblem: givenFeedback,
            },
            { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
          );
        }

        /*    console.log("Document successfully written/updated:", docTimestampRef); */
      } catch (error) {
        console.error("Error writing docProblemRef document: ", error);
      }





    }
    else if (givenFeedbackType === "suggest-a-feature") {


      try {

        const docSnapSuggestFeature = await getDoc(docRefSuggestFeature);
        if (!docSnapSuggestFeature.exists()) {
          console.log(`suggest-a-feature does not exist, creating with 'invisFix' field.`);
          await setDoc(docRefSuggestFeature, { invisFix: "awd" }, { merge: true });
        }


        const docFeatureRef = doc(firestore, feedbackSuggestionCollectionPath, docTimestampId);
        // Check if the document exists
        const docSnapSuggestFeatureActual = await getDoc(docFeatureRef);

        if (docSnapSuggestFeatureActual.exists()) {
          // Document exists, increment the field
          await updateDoc(docFeatureRef, {
            suggestedFeature: givenFeedback,
          });
        } else {
          // Document doesn't exist, create a new one
          // console.log("individual document: " + docFeatureRef + " doesn't exist, making new one!")
          await setDoc(
            docFeatureRef,
            {
              suggestedFeature: givenFeedback,
            },
            { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
          );
        }

        /*    console.log("Document successfully written/updated:", docTimestampRef); */
      } catch (error) {
        console.error("Error writing docFeatureRef document: ", error);
      }



    }
    else if (givenFeedbackType === "opt-out") {


      try {

        const docSnapOptOut = await getDoc(docRefOptOut);
        if (!docSnapOptOut.exists()) {
          console.log(`opt-out does not exist, creating with 'invisFix' field.`);
          await setDoc(docRefOptOut, { invisFix: "awd" }, { merge: true });
        }

        var idToUse: string = "";
        if (patientPID !== undefined && patientPID !== null) {
          idToUse = patientPID
        }
        else {
          idToUse = "USER_ID_ACTUAL_" + userIDActual;
        }

        const docFeatureRef = doc(firestore, optOutCollectionPath, idToUse);
        // Check if the document exists
        const docSnapOptOutActual = await getDoc(docFeatureRef);

        if (docSnapOptOutActual.exists()) {
          // Document exists, increment the field
          await updateDoc(docFeatureRef, {
            pid: patientPID,
            timeOfOptOut: `${datePart}_${hours}-${minutes}-${seconds}_${amPm}`
          });
        } else {
          // Document doesn't exist, create a new one
          // console.log("individual document: " + docFeatureRef + " doesn't exist, making new one!")
          await setDoc(
            docFeatureRef,
            {
              pid: patientPID,
              timeOfOptOut: `${datePart}_${hours}-${minutes}-${seconds}_${amPm}`
            },
            { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
          );
        }

        /*    console.log("Document successfully written/updated:", docTimestampRef); */
      } catch (error) {
        console.error("Error writing docFeatureRef document: ", error);
      }



    }
    else if (givenFeedbackType === "opt-out-feedback") {


      try {

        const docSnapOptOut = await getDoc(docRefOptOut);
        if (!docSnapOptOut.exists()) {
          console.log(`opt-out does not exist, creating with 'invisFix' field.`);
          await setDoc(docRefOptOut, { invisFix: "awd" }, { merge: true });
        }

        var idToUse: string = "";
        if (patientPID !== undefined && patientPID !== null) {
          idToUse = patientPID
        }
        else {
          idToUse = "USER_ID_ACTUAL_" + userIDActual;
        }

        const docFeatureRef = doc(firestore, optOutCollectionPath, idToUse);
        // Check if the document exists
        const docSnapOptOutActual = await getDoc(docFeatureRef);

        if (docSnapOptOutActual.exists()) {
          // Document exists, increment the field
          await updateDoc(docFeatureRef, {
            pid: patientPID,
            timeOfOptOut: `${datePart}_${hours}-${minutes}-${seconds}_${amPm}`,
            feedback: givenFeedback
          });
        } else {
          // Document doesn't exist, create a new one
          // console.log("individual document: " + docFeatureRef + " doesn't exist, making new one!")
          await setDoc(
            docFeatureRef,
            {
              pid: patientPID,
              timeOfOptOut: `${datePart}_${hours}-${minutes}-${seconds}_${amPm}`,
              feedback: givenFeedback
            },
            { merge: true } // Merge to ensure fields like `timestamp` don't overwrite other data
          );
        }

        /*    console.log("Document successfully written/updated:", docTimestampRef); */
      } catch (error) {
        console.error("Error writing docFeatureRef document: ", error);
      }



    }
    else {
      console.log("Unrecognized feedback type given with value: " + givenFeedbackType)
    }




  }


  /*NAVIGATION VARIABLES AND VISUALS*/


  const [currentCarouselIndex, hiddenSetCurrentCarouselIndex] = useState(0);

  function SetCurrentCarouselIndex(givenNumber: number) {

    localCurrentCarouselIndex = givenNumber;
    hiddenSetCurrentCarouselIndex(givenNumber);

  }

  const [previousCarouselIndex, hiddenSetPreviousCarouselIndex] = useState(-1);
  function SetPreviousCarouselIndex(givenNumber: number) {
    localPreviousCarouselIndex = givenNumber;
    hiddenSetPreviousCarouselIndex(givenNumber)

  }


  //USE EFFECT THAT SETS THE CURRENT PAGE ID!!
  const [currentPageId, setCurrentPageId] = useState("null");
  useEffect(() => {
    var tempNameToSet: string = "null";
    if (localCurrentChapterData !== undefined) {
      localCurrentChapterData.forEach(chapter => {
        chapter.pageObjects.filter((Page, index) => {
          var shouldInclude = true;
          if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
          ) === true)) {
            shouldInclude = true;
          }
          else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
          ) === false)) {
            shouldInclude = false;
          }

          if (!shouldInclude) {

          }

          return shouldInclude;
        }).forEach((page, index) => { if (index === currentCarouselIndex) { tempNameToSet = page.id } })

        localPageID = tempNameToSet;
        setCurrentPageId(tempNameToSet);
      });

    }

  }, [currentCarouselIndex])




  const [pageLockNumber, setPageLockNumber] = useState(1);

  const [isCurrentPageLocked, setIsCurrentPageLocked] = useState(false);

  const [shouldShowModalShadow, setShouldShowModalShadow] = useState(false);

  const [selectionMapState, setSelectionMapState] = useState<Map<string, string[]>>(new Map());


  const [prepDestination, setPrepDestination] = useState("null");


  const [showNavOptionsMenu, setShowNavOptionsMenu] = useState(false);
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showReportProblemModal, setShowReportProblemModal] = useState(false);
  const [showSuggestFeatureModal, setShowSuggestFeatureModal] = useState(false);
  const [showOptOutModal, setShowOptOutModal] = useState(false);
  const [showContactUsModal, setShowContactUsModal] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const [navBarButtonLabels, setNavBarButtonLabels] = useState<string[]>([]);
  const [navBarButtonDestinations, setNavBarButtonDestinations] = useState<string[]>([]);

  const [isOverflowing, setIsOverflowing] = useState(false);

  const [screen, setScreen] = useState("splashScreen");

  var urlBarString: string = window.location.href;



  function SetTagsAnsweredTrue(givenString: string, givenCalledFromLocation: string) {

    // console.log("SET TAGS ANSWERED TRUE CALLED FROM: " + givenCalledFromLocation)

    if (!localTagsAnsweredTrue.includes(givenString)) {
      // console.log("This is the first time we've seen tag: " + givenString + " in localTrueTags: " + localTagsAnsweredTrue);
      localTagsAnsweredTrue += givenString;
    }
    else {
      //  console.log("We've ALREADY seen tag: " + givenString + " in localTrueTags: " + localTagsAnsweredTrue);

    }

    if (localTagsAnsweredFalse.includes(givenString)) {
      //we have a contradicting duplicate tag in the other address!
      //console.log("we have a contradicting duplicate tag:" + givenString + " in the false address!")
      //console.log("localTagsAnsweredFalse before replace: " + localTagsAnsweredFalse);
      localTagsAnsweredFalse = localTagsAnsweredFalse.replace(givenString, "");

      // localTagsAnsweredFalse = localTagsAnsweredFalse.split("_")  // Split into an array of words
      //    .filter(word => word !== givenString && word !== "")  // Remove the target word and empty entries
      //   .join("_") + (localTagsAnsweredFalse.endsWith("_") ? "_" : "");

      //console.log("localTagsAnsweredFalse after replace: " + localTagsAnsweredFalse); 
      setTagsAnsweredFalse(localTagsAnsweredFalse);
    }
    setTagsAnsweredTrue((currentState) => {
      if (!currentState.includes(givenString)) {

        /* localTagsAnsweredTrue = currentState + givenString; */
        //console.log("This is the first time we've seen tag: " + givenString + " in stateTrueTags: " + currentState);

        return currentState + givenString;
      }
      else {
        // console.log("We've seen tag: " + givenString + " in stateTrueTags already: " + currentState);

        return currentState; // Do nothing if it already exists
      }

    });
  }

  function SetTagsAnsweredFalse(givenString: string) {
    if (!localTagsAnsweredFalse.includes(givenString)) {
      //  console.log("This is the first time we've seen tag: " + givenString + " in localTagsAnsweredFalse: " + localTagsAnsweredFalse);

      localTagsAnsweredFalse += givenString;
    } else {
      console.log("We've seen tag: " + givenString + " in localTagsAnsweredFalse already: " + localTagsAnsweredFalse);
    }
    if (localTagsAnsweredTrue.includes(givenString)) {
      //we have a contradicting duplicate tag in the other address!
      // console.log("we have a contradicting duplicate tag:" + givenString + " in the true address!")
      // console.log("localTagsAnsweredTrue before replace: " + localTagsAnsweredTrue);
      localTagsAnsweredTrue = localTagsAnsweredTrue.replace(givenString, "");

      //  localTagsAnsweredTrue = localTagsAnsweredTrue.split("_")  // Split into an array of words
      //   .filter(word => word !== givenString && word !== "")  // Remove the target word and empty entries
      //   .join("_") + (localTagsAnsweredTrue.endsWith("_") ? "_" : "");


      //  console.log("localTagsAnsweredTrue before replace: " + localTagsAnsweredTrue);
      setTagsAnsweredTrue(localTagsAnsweredTrue);
    }
    setTagsAnsweredFalse((currentState) => {
      if (!currentState.includes(givenString)) {
        /*  localTagsAnsweredFalse = currentState + givenString; */
        // console.log("This is the first time we've seen tag: " + givenString + " in stateFalseTags: " + currentState);

        return currentState + givenString;
      }
      else {
        console.log("We've already seen tag: " + givenString + " in stateFalseTags: " + currentState);
        return currentState; // Do nothing if it already exists
      }

    });
  }


  function WriteData(givenDataToWrite: string) {

    if (givenDataToWrite != "") {



      var tempDataToWrite: string[] = givenDataToWrite.split("_").filter(tag => tag !== undefined && tag !== "");;

      var tempDataToWriteToAggregate: string = "";
      var tempDataToWriteToIndividual: string = "";


      tempDataToWrite.forEach(data => {

        //console.log("WE GOT A DATA TO WRITE: " + data);
        var tempDataSplit: string[] = data.split("-");
        var tempDataToWrite: string = tempDataSplit[0];
        var tempDataAddress: string = tempDataSplit[1] ?? "individual";

        if (tempDataAddress !== undefined) {
          tempDataAddress = tempDataAddress.replace("_", "");
        }
        else {
          tempDataAddress = "individual"
        }


        console.log("trying to write data: " + data + ", it's address is: " + tempDataAddress);


        if (tempDataAddress === "aggregate") {

          tempDataToWriteToAggregate += tempDataToWrite;
          incrementFirestoreVariableAggregate(tempDataToWriteToAggregate);

        }
        else if (tempDataAddress === "individual") {

          tempDataToWriteToIndividual += tempDataToWrite;
          incrementFirestoreVariableIndividual(tempDataToWriteToIndividual);

        }
        else {
          console.log("WE GOT AN UNEXPECTED DATA ADDRESS OF: " + tempDataAddress)
        }

      });

    }



  }



  function WriteTags(givenTagToWrite: string) {

    if (givenTagToWrite != "") {



      var tempTagsToWrite: string[] = givenTagToWrite.split("_").filter(tag => tag !== undefined && tag !== "");;

      var tempTagToWriteToTrue: string = "";
      var tempTagToWriteToFalse: string = "";


      tempTagsToWrite.forEach(tag => {

        //console.log("WE GOT A TAG TO WRITE: " + tag);
        var tempTagSplit: string[] = tag.split("-");
        var tempTagToWrite: string = tempTagSplit[0];
        var tempTagAddress: string = tempTagSplit[1] ?? "true";
        var tempTagCategory: string = tempTagSplit[2] ?? "";
        if (tempTagAddress !== undefined) {
          tempTagAddress = tempTagAddress.replace("_", "");
        }
        else {
          tempTagAddress = "true"
        }

        if (tempTagCategory !== undefined) {
          tempTagCategory = tempTagCategory.replace("_", "");
        }



        // console.log("trying to write a tag: " + tag + ", it's category is: " + tempTagCategory);

        if (tempTagCategory !== "") { //THIS SHOULD REMOVE TAGS THAT SHARE THIS CATEGORY
          // console.log("about to check for category: " + tempTagCategory)

          //console.log("localTagsTrue before split: " + localTagsAnsweredTrue); 
          var tempTagsArray: string[] = localTagsAnsweredTrue.split("_").filter(tag => tag !== "");
          // console.log("tempTagsArray: ");
          // console.log(tempTagsArray);
          // Filter out tags that contain the category
          var filteredTags: string[] = tempTagsArray.filter(tag => !tag.includes(`-${tempTagCategory}`));

          //console.log("filteredTags: ");
          //console.log(filteredTags);
          localTagsAnsweredTrue = filteredTags.join("_") + (localTagsAnsweredTrue.endsWith("_") ? "_" : "");
          //console.log("localTagsTrue after split and removal: " + localTagsAnsweredTrue);
          ////////////////////////now we do the state variables

          tempTagsArray = tagsAnsweredTrue.split("_").filter(tag => tag !== "");
          filteredTags = tempTagsArray.filter(tag => !tag.includes(`-${tempTagCategory}`));
          setTagsAnsweredTrue(filteredTags.join("_") + (localTagsAnsweredTrue.endsWith("_") ? "_" : ""));

          var tempTagsArray: string[] = localTagsAnsweredFalse.split("_").filter(tag => tag !== "");

          // Filter out tags that contain the category
          var filteredTags: string[] = tempTagsArray.filter(tag => !tag.includes(`-${tempTagCategory}`));

          localTagsAnsweredFalse = filteredTags.join("_") + (localTagsAnsweredFalse.endsWith("_") ? "_" : "");

          ////////////////////////now we do the state variables

          tempTagsArray = tagsAnsweredFalse.split("_").filter(tag => tag !== "");
          filteredTags = tempTagsArray.filter(tag => !tag.includes(`-${tempTagCategory}`));
          setTagsAnsweredFalse(filteredTags.join("_") + (localTagsAnsweredFalse.endsWith("_") ? "_" : ""));
        }


        if (tempTagAddress === "true") {

          //console.log("we should be writing a true tag: " + 
          //tempTagToWrite + " to address: " + tempTagAddress);
          if (tempTagCategory !== "") {
            tempTagToWriteToTrue += tempTagToWrite + "-" + tempTagCategory + "_";
            //SetTagsAnsweredTrue(tempTagToWrite + "-" + tempTagCategory + "_");
          } else {
            tempTagToWriteToTrue += tempTagToWrite + "_";
            //SetTagsAnsweredTrue(tempTagToWrite + "_");
          }

        }
        else if (tempTagAddress === "false") {


          //console.log("we should be writing a false tag: " +
          //tempTagToWrite + " to address: " + tempTagAddress);
          if (tempTagCategory !== "") {
            tempTagToWriteToFalse += tempTagToWrite + "-" + tempTagCategory + "_";
            //SetTagsAnsweredFalse(tempTagToWrite + "-" + tempTagCategory + "_");
          } else {
            tempTagToWriteToFalse += tempTagToWrite + "_";
            //SetTagsAnsweredFalse(tempTagToWrite + "_");
          }
        }

      });


      if (tempTagToWriteToTrue !== "") {
        SetTagsAnsweredTrue(tempTagToWriteToTrue, "Write Tags Location");

        if (tempTagToWriteToTrue === "wantsToOptOut_") {
          optOut("tag write");
        }
      }

      if (tempTagToWriteToFalse !== "") {
        SetTagsAnsweredFalse(tempTagToWriteToFalse);
      }

    }


  }


  function CheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
    givenObjectName?: string, givenObjectType?: string, givenObjectExcludeByDefault?: boolean): boolean {

    var booleanToReturn: boolean = true;

    if (givenObjectExcludeByDefault !== undefined) {
      if (givenObjectExcludeByDefault === true) {
        booleanToReturn = false;
      }
    }

    if (givenTagInclusion !== undefined || givenTagExclusion !== undefined) {


      if (givenTagInclusion != "" && givenTagInclusion !== undefined) {  //we have an inclusion tag!!
        var tempInclusionTags: string[] = givenTagInclusion.split('_');

        tempInclusionTags.forEach(element => { //this should run about once or twice, depending on the given tags

          /* takes each tag from the split tag1-true_tag2-false_ array and splits it further by the dash '-' */
          var tempTagToSplit = element.split('-');

          /* takes the first half of the tag so we can see what tag we need to read */
          var tempTagName = tempTagToSplit[0];

          /* takes the second half of the tag so we can see which address to read from */
          var tempTagAddress = tempTagToSplit[1];


          if (tempTagAddress === "true" && /* tagsAnsweredTrue */ localTagsAnsweredTrue !== "") {

            var tempArrayToHoldTrueTags: string[] = /* tagsAnsweredTrue */localTagsAnsweredTrue.split('_');
            tempArrayToHoldTrueTags.forEach(tagTrue => {
              var tempTagTrueArray: string[] = tagTrue.split("-");
              var tempTagTrueToRead: string = tempTagTrueArray[0]
              if (tempTagTrueToRead === tempTagName) { //seeing if the tag we have matches the written one

                booleanToReturn = true;
              }
            });
          }
          else if (tempTagAddress === "false" && /* tagsAnsweredFalse */localTagsAnsweredFalse !== "") {
            var tempArrayToHoldFalseTags: string[] = /* tagsAnsweredFalse */localTagsAnsweredFalse.split('_');
            tempArrayToHoldFalseTags.forEach(tagFalse => {

              var tempTagFalseArray: string[] = tagFalse.split("-");
              var tempTagFalseToRead: string = tempTagFalseArray[0]
              if (tempTagFalseToRead === tempTagName) { //seeing if the tag we have matches the written one

                booleanToReturn = true;
              }
            });
          }
        });
      }

      //THIS ISN'T AN ELSE IF, BECAUSE WHAT IF BOTH ARE TRUE, I WANT TO DEFAULT TO DISABLING STUFF!

      if (givenTagExclusion != "" && givenTagExclusion !== undefined) //we have an exclusion tag!!
      {



        var tempExclusionTags: string[] = givenTagExclusion.split('_');

        tempExclusionTags.forEach(element => { //this should run about once or twice, 
          //depending on the given tags

          /* takes each tag from the split tag1-true_tag2-false_ array and 
          splits it further by the dash '-' */
          var tempTagToSplit = element.split('-');

          /* takes the first half of the tag so we can see what tag we need to read */
          var tempTagName = tempTagToSplit[0];

          /* takes the second half of the tag so we can see which address to read from */
          var tempTagAddress = tempTagToSplit[1];

          if (tempTagAddress === "true" && /* tagsAnsweredTrue */ localTagsAnsweredTrue !== "") {

            var tempArrayToHoldTrueTags: string[] = /* tagsAnsweredTrue */localTagsAnsweredTrue.split('_');
            tempArrayToHoldTrueTags.forEach(tagTrue => {
              var tagTrueSplit: string[] = tagTrue.split("-");
              var tagTrueNameActual: string = tagTrueSplit[0]
              if (tagTrueNameActual === tempTagName) { //seeing if the tag we have matches the written one


                booleanToReturn = false;

              }
            });
          }
          else if (tempTagAddress === "false" && /* tagsAnsweredFalse */localTagsAnsweredFalse !== "") {
            var tempArrayToHoldFalseTags: string[] = /* tagsAnsweredFalse */localTagsAnsweredFalse.split('_');
            tempArrayToHoldFalseTags.forEach(tagFalse => {
              var tagFalseSplit: string[] = tagFalse.split("-");
              var tagFalseNameActual: string = tagFalseSplit[0]
              //console.log("we're comparing exclusion tag with TagFalse: " + tagFalseNameActual + " || " + tempTagName)


              if (tagFalseNameActual === tempTagName) { //seeing if the tag we have matches the written one


                if (givenObjectName !== undefined && givenObjectName === "page-001") {
                  /*   console.log("TAG-MATCH ON OBJECT: " + givenObjectName); */
                }

                booleanToReturn = false;

              }
            });
          }
        });
      }

    }
    else {
      if (givenObjectName !== undefined && givenObjectName === "page-001") {

      }

      return booleanToReturn;

    }

    return booleanToReturn;
  }


  function addToSelectionMap(key: string, newValue: string) {
    //console.log("About to add the following tag: " + newValue + " from map key: " + key)


    var tempMap = localSelectionMapVariable;
    const tempExistingValues = tempMap.get(key) || [];

    if (!tempExistingValues.includes(newValue)) {
      /*  console.log(`Adding value "${newValue}" to key "${key}"`); */
      tempMap.set(key, [...tempExistingValues, newValue]);
      localSelectionMapVariable = tempMap;
    } else {
      //console.log(`Value "${newValue}" already exists for key "${key}"`);
    }

    setSelectionMapState((prevMap) => {
      // Create a copy of the previous map
      const newMap = new Map(prevMap);
      // console.log("newMap before addition: ");
      // console.log(newMap);
      // Retrieve the existing values for the key or initialize an empty array
      const existingValues = newMap.get(key) || [];

      // Add the new value only if it doesn't already exist
      if (!existingValues.includes(newValue)) {
        /*  console.log(`Adding value "${newValue}" to key "${key}"`); */
        newMap.set(key, [...existingValues, newValue]);
      } else {
        console.log(`Value "${newValue}" already exists for key "${key}"`);
      }

      /*  console.log("newMap")
       console.log(newMap) */

      // console.log("newMap after addition: ");
      // console.log(newMap);

      return newMap;
    });
  }

  function removeFromSelectionMap(key: string, valueToRemove: string) {
    // Create a new map from the current state
    //console.log("About to remove the following tag: " + valueToRemove + " from map key: " + key);

    var tempNewMap = localSelectionMapVariable;

    //const newMap = new Map(selectionMapState);

    // console.log("tempNewMap before removal: ");
    // console.log(tempNewMap);
    // Check if the key exists in the map
    var existingValues = tempNewMap.get(key);

    if (existingValues) {
      // Filter out the value to remove
      var updatedValues = existingValues.filter(value => value !== valueToRemove);

      if (updatedValues.length > 0) {
        // Update the map with the filtered array
        tempNewMap.set(key, updatedValues);
      } else {
        // Remove the key entirely if no values remain
        tempNewMap.delete(key);
      }
    }
    // console.log("tempNewMap after removal: ");
    // console.log(tempNewMap);
    // Update the state with the modified map
    setSelectionMapState(tempNewMap);
  };

  function SetShouldShowModalShadow(givenBool: boolean, givenOrigin: string) {
    /*     console.log("TRYING TO CHANGE SHADOW BOOL FROM ORIGIN: " + givenOrigin);
        console.log("with original value: " + shouldShowModalShadow + " to: " + givenBool) */
    setShouldShowModalShadow(givenBool)
  }
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  //pageLock useEffect
  useEffect(() => {
    if (localCurrentBookData !== undefined) {
      if (localCurrentBookData.chapterObjects.length == 0) {
        console.log("we have an empty localCurrentBookData")
      }

      if (localCurrentPageData[currentCarouselIndex].hasLock) {
        setIsCurrentPageLocked(true);

      }
      else if (!localCurrentPageData[currentCarouselIndex].hasLock) {
        setIsCurrentPageLocked(false);

      }
    }



  }, [(localCurrentBookData !== undefined && localCurrentBookData.chapterObjects.length !== 0), currentCarouselIndex])

  const [currentModalID, setCurrentModalID] = useState("none");


  var shouldRenderToF: boolean = true;


  function SetTopRightButton() {

    if (localCurrentChapter.topRightNavButtonDestination !== undefined) {
      localCurrentTopRightButtonDestination = localCurrentChapter.topRightNavButtonDestination;
      setState_currentTopRightButtonDestination(localCurrentChapter.topRightNavButtonDestination);
    }
    else {
      localCurrentShouldShowTopRightButton = false;
      setState_currentShouldShowTopRightButton(false);
    }
    if (localCurrentChapter.topRightNavButtonColor !== undefined) {
      localCurrentTopRightButtonColor = localCurrentChapter.topRightNavButtonColor;
      setState_currentTopRightButtonColor(localCurrentChapter.topRightNavButtonColor);
    }

    if (localCurrentChapter.topRightNavButtonColorActive !== undefined) {
      localCurrentTopRightButtonColorActivate = localCurrentChapter.topRightNavButtonColorActive;
      setState_currentTopRightButtonColorActivate(localCurrentChapter.topRightNavButtonColorActive);
    }
    if (localCurrentChapter.topRightNavButtonColorHover !== undefined) {
      localCurrentTopRightButtonColorHover = localCurrentChapter.topRightNavButtonColorHover;
      setState_currentTopRightButtonColorHover(localCurrentChapter.topRightNavButtonColorHover);
    }



  }


  function SetChapterData(givenChapterName: string) {

    for (const chapter of localCurrentChapterData) {
      if (givenChapterName === chapter.chapterID) {
        localCurrentChapter = chapter;
        break; // Exit the loop immediately after finding a match
      }
    }



    if (localCurrentChapter.chapterID !== givenChapterName) {
      console.log("INVALID CHAPTER NAME GIVEN. CURRENT CHAPTER NAME: " + localCurrentChapter.chapterID + " GIVEN CHAPTER NAME: " + givenChapterName)
    }

    if (localCurrentChapter.chapterBackgroundColor !== undefined) {
      localCurrentPageColor = localCurrentChapter.chapterBackgroundColor;
      setState_currentPageColor(localCurrentChapter.chapterBackgroundColor);
    }
    else {
      localCurrentPageColor = "default";
      setState_currentPageColor("default");
    }

    if (localCurrentChapter.progressBarVisible !== undefined) {
      localCurrentProgressbarVisible = localCurrentChapter.progressBarVisible;
      setState_currentProgressbarVisible(localCurrentChapter.progressBarVisible);
      // console.log("progress bar visibility should be: " + localCurrentProgressbarVisible)
    }
    else {
      // console.log("NO VALID PROGRESS BAR VISIBLE DATA!")
    }

    if (localCurrentChapter.progressBarColor !== undefined) {
      localCurrentProgressbarColor = localCurrentChapter.progressBarColor;
      setState_currentProgressbarColor(localCurrentChapter.progressBarColor);
    }

    if (localCurrentChapter.progressBarColorBackground !== undefined) {
      localCurrentProgressBarColorBackground = localCurrentChapter.progressBarColorBackground;
      setState_currentProgressBarColorBackground(localCurrentChapter.progressBarColorBackground);
    }


    setState_currentProgressBarLength(localCurrentChapter.pageObjects.length);


    SetTopRightButton();

  }

  function GoToDestination(givenDestinationName: string, shouldWriteToPageHistory?: boolean) {

    if (goToDestinationLockNumber < 1) {
      /*    goToDestinationLockNumber += 1; */
      shouldRenderToF = true;
      // console.log("GoToDestination called with givenDestination: " + givenDestinationName)
      localPageLockNumber = 1; //TODO, MIGHT HAVE TO GO ELSEWHERE, CHECK SCRUBBED IN
      setPageLockNumber(1); //TODO, MIGHT HAVE TO GO ELSEWHERE, CHECK SCRUBBED IN
      localModalID = "none"; //TODO, MIGHT HAVE TO GO ELSEWHERE, CHECK SCRUBBED IN
      setCurrentModalID("none"); //TODO, MIGHT HAVE TO GO ELSEWHERE, CHECK SCRUBBED IN
      setShouldShowModalShadow(false);
      var tempNavVariable = 0;
      /*     console.log("previous tempNavVariable = " + tempNavVariable); */
      tempNavVariable = localCurrentCarouselIndex;
      /*   console.log("current tempNavVariable = " + tempNavVariable);
        console.log("localCurrentCarouselIndex = " + localCurrentCarouselIndex); */

      var tempPagesToLookAt: PageObject[] = localCurrentPageData.filter((Page, index) => {
        var shouldInclude = true;
        if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === true)) {
          shouldInclude = true;
        }
        else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === false)) {
          shouldInclude = false;
        }

        if (!shouldInclude) {
        }
        return shouldInclude;
      })

      if (givenDestinationName.includes("page")) {
        /*  console.log("givenDestination is a page: " + givenDestinationName) */
        tempPagesToLookAt.forEach((page, pageIndex) => {
          /*  console.log("looking at pageID: " + page.id + " and pageTitle: " + page.navTitle + " @index: " + pageIndex)
           */
          if (page.id === givenDestinationName) {
            /*    console.log("found a valid page to show: " + givenDestinationName) */

            if (page.tagsExclude && page.tagsExclude.length > 0) {
              shouldRenderToF = CheckTagsToDetermineRendering("", page.tagsExclude, page.id);
              /*    console.log("shouldRenderToF: " + shouldRenderToF) */
            }

            if (shouldRenderToF === false) {
              /*  console.log("shouldRenderToF: " + shouldRenderToF) */
              /*    console.log("page we tried to go to is returning false for shouldRenderToF!!!") */
            }
            else {
              // console.log("Passed all tests, should be going to: " + givenDestinationName + " at index: " + pageIndex)
              SetPreviousCarouselIndex(tempNavVariable)

              SetCurrentCarouselIndex(pageIndex);
              localPageID = page.id;
              setCurrentPageId(page.id);
              localPagesVisited.push(page.id)

              if (shouldWriteToPageHistory !== false) {
                previousPagesVisitedStrings.push(tempPagesToLookAt[tempNavVariable].id)
              }

              //FH STUFF
              if (page.chapterParent !== localCurrentChapter.chapterID) {
                SetChapterData(page.chapterParent);
              }
              if (page.pageBackgroundColor !== undefined) {
                localCurrentPageColor = page.pageBackgroundColor
                setState_currentPageColor(page.pageBackgroundColor)
              }

              if (page.index !== undefined) {
                currentProgressBarIndex = page.index;
                setState_currentProgressBarIndex(page.index);
              }


              //FH STUFF

              if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {

                localPagesVisited.push(page.id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_first-visit");


                setPagesVisited((prevPages) =>
                  prevPages.includes(page.id) ? prevPages : [...prevPages, page.id]
                );
                /*  setIndexesVisited(localIndexesVisited); */

              }
              else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
                && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {


                localPagesVisited.push(page.id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_second-visit");


                setPagesVisited((prevPages) =>
                  prevPages.includes(page.id) ? prevPages : [...prevPages, page.id]
                );


              }
              else {
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_extra-visit");
              }
            }
          }
          else if (givenDestinationName.includes("next") && pageIndex === tempNavVariable) {

            /*         console.log("==============================================================");
                    console.log("NEXT BUTTON WAS CALLED");
                    console.log("currentPageID = " + page.id);
                    console.log("currentPageTitle = " + page.navTitle);
                    console.log("pageIndex = " + pageIndex);
                    console.log("Here's the pages we see right now: ")
                    console.log(tempPagesToLookAt)
                    console.log("=============================================================="); */



            if (pageIndex < tempPagesToLookAt.length - 1) {
              shouldRenderToF = CheckTagsToDetermineRendering("", page.tagsExclude, page.id);
              SetPreviousCarouselIndex((pageIndex));
              /* console.log("Going to page-next at index: " + (pageIndex + 1) + " at page id: " + tempPagesToLookAt[pageIndex + 1].id)
            */

              SetCurrentCarouselIndex((pageIndex + 1));
              localPageID = tempPagesToLookAt[pageIndex + 1].id;
              setCurrentPageId(tempPagesToLookAt[pageIndex + 1].id);
              localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id)

              if (shouldWriteToPageHistory !== false) {
                previousPagesVisitedStrings.push(tempPagesToLookAt[pageIndex].id)
              }
              //FH STUFF
              SetChapterData(tempPagesToLookAt[pageIndex + 1].chapterParent)
              if (tempPagesToLookAt[pageIndex + 1].pageBackgroundColor !== undefined) {
                localCurrentPageColor = tempPagesToLookAt[pageIndex + 1].pageBackgroundColor
                setState_currentPageColor(tempPagesToLookAt[pageIndex + 1].pageBackgroundColor)
              }

              if (tempPagesToLookAt[pageIndex + 1].index !== undefined) {
                currentProgressBarIndex = tempPagesToLookAt[pageIndex + 1].index;
                setState_currentProgressBarIndex(tempPagesToLookAt[pageIndex + 1].index);
              }
              //FH STUFF


              if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {
                localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_first-visit");
                incrementFirestoreVariableAggregate(patientInfo.anesthesiaType);

                setPagesVisited((prevPages) =>
                  prevPages.includes(tempPagesToLookAt[pageIndex + 1].id) ? prevPages : [...prevPages, tempPagesToLookAt[pageIndex + 1].id]
                );
                /*  setIndexesVisited(localIndexesVisited); */
              } else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
                && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {


                localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_second-visit");
                incrementFirestoreVariableAggregate(patientInfo.anesthesiaType);

                setPagesVisited((prevPages) =>
                  prevPages.includes(tempPagesToLookAt[pageIndex + 1].id) ? prevPages : [...prevPages, tempPagesToLookAt[pageIndex + 1].id]
                );

              }
              else {
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_extra-visit");

              }
              return;
            }
            else {
              console.log("WE TRIED GOING PAST THE LAST PAGE!! given destination: " + givenDestinationName)
              console.log("localCurrentCarouselIndex: " + tempNavVariable);
              console.log("localCurrentCarouselIndex + 1: " + (tempNavVariable + 1));
              console.log("tempPagesToLookAt.length - 1: " + (tempPagesToLookAt.length - 1));

            }

          }
          else if (givenDestinationName.includes("previous") && pageIndex === tempNavVariable) {
            console.log("Previous button called at page index: " + pageIndex + " and tempNavVariable (current index): " + tempNavVariable)

            //PREVIOUS PAGE RECURSION

            //PREVIOUS PAGE RECURSION
            console.log("PREVIOUS PAGES: ");
            console.log(previousPagesVisitedStrings);
            console.log("PREVIOUS PAGE AT INDEX: " + (previousPagesVisitedStrings.length - 1) + " = " + previousPagesVisitedStrings[previousPagesVisitedStrings.length - 1]);
            GoToDestination(previousPagesVisitedStrings[previousPagesVisitedStrings.length - 1], false)
            previousPagesVisitedStrings.pop();






          }

          else if (page.id !== "page-next" && page.id !== "page-previous" && page.id !== givenDestinationName) {
            //console.log("no match between page ids: " + givenDestinationName + " and " + page.id)

          }
          else {
            // console.log("UNKNOWN PAGE DESTINATION FOUND AT: " + givenDestinationName)

          }
        });


      } else if (givenDestinationName.includes("dismiss")) {
        localModalID = "none";
        setCurrentModalID("none");

        //console.log("We should be seeing a modal dismissal");
      } else if (givenDestinationName.includes("modal")) {

        //console.log("we found a modal to go to!");

        localCurrentPageData.filter((Page) => {
          var shouldInclude = true;
          if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
          ) === true)) {
            shouldInclude = true;
          }
          else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
          ) === false)) {
            shouldInclude = false;
          }

          if (!shouldInclude) {
            /*   console.log(`Filtering out Page with ID: ${Page.id}`); */
          }

          return shouldInclude;
        }).forEach((page, pageIndex) => {
          if (page.modalObjects) {
            page.modalObjects.forEach(modal => {
              if (modal.modalID.includes(givenDestinationName)) {


                localModalID = givenDestinationName
                setCurrentModalID(givenDestinationName);
                if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {
                  incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + modal.modalID + "_first-visit");

                } else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
                  && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {
                  incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + modal.modalID + "_second-visit");

                }
                else {
                  incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + modal.modalID + "_extra-visit");

                }

              }
            });
          }

        });

      }
      else {
        tempPagesToLookAt.forEach((page, pageIndex) => {
          /*  console.log("looking at pageID: " + page.id + " and pageTitle: " + page.navTitle + " @index: " + pageIndex)
           */
          if (page.id === givenDestinationName) {
            /*    console.log("found a valid page to show: " + givenDestinationName) */

            if (page.tagsExclude && page.tagsExclude.length > 0) {
              shouldRenderToF = CheckTagsToDetermineRendering("", page.tagsExclude, page.id);
              /*    console.log("shouldRenderToF: " + shouldRenderToF) */
            }

            if (shouldRenderToF === false) {
              /*  console.log("shouldRenderToF: " + shouldRenderToF) */
              /*    console.log("page we tried to go to is returning false for shouldRenderToF!!!") */
            }
            else {
              // console.log("Passed all tests, should be going to: " + givenDestinationName + " at index: " + pageIndex)
              SetPreviousCarouselIndex(tempNavVariable)

              SetCurrentCarouselIndex(pageIndex);
              localPageID = page.id;
              setCurrentPageId(page.id);
              localPagesVisited.push(page.id)

              if (shouldWriteToPageHistory !== false) {
                previousPagesVisitedStrings.push(tempPagesToLookAt[tempNavVariable].id);
              }
              //FH STUFF
              if (page.chapterParent !== localCurrentChapter.chapterID) {
                SetChapterData(page.chapterParent);
              }
              if (page.pageBackgroundColor !== undefined) {
                localCurrentPageColor = page.pageBackgroundColor
                setState_currentPageColor(page.pageBackgroundColor)
              }

              if (page.index !== undefined) {
                currentProgressBarIndex = page.index;
                setState_currentProgressBarIndex(page.index);
              }
              //FH STUFF

              if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {

                localPagesVisited.push(page.id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_first-visit");


                setPagesVisited((prevPages) =>
                  prevPages.includes(page.id) ? prevPages : [...prevPages, page.id]
                );
                /*  setIndexesVisited(localIndexesVisited); */

              }
              else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
                && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {


                localPagesVisited.push(page.id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_second-visit");


                setPagesVisited((prevPages) =>
                  prevPages.includes(page.id) ? prevPages : [...prevPages, page.id]
                );


              }
              else {
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_extra-visit");
              }
            }
          }
          else if (givenDestinationName.includes("next") && pageIndex === tempNavVariable) {

            /*         console.log("==============================================================");
                    console.log("NEXT BUTTON WAS CALLED");
                    console.log("currentPageID = " + page.id);
                    console.log("currentPageTitle = " + page.navTitle);
                    console.log("pageIndex = " + pageIndex);
                    console.log("Here's the pages we see right now: ")
                    console.log(tempPagesToLookAt)
                    console.log("=============================================================="); */



            if (pageIndex < tempPagesToLookAt.length - 1) {
              shouldRenderToF = CheckTagsToDetermineRendering("", page.tagsExclude, page.id);
              SetPreviousCarouselIndex((pageIndex));
              /* console.log("Going to page-next at index: " + (pageIndex + 1) + " at page id: " + tempPagesToLookAt[pageIndex + 1].id)
            */

              SetCurrentCarouselIndex((pageIndex + 1));
              localPageID = tempPagesToLookAt[pageIndex + 1].id;
              setCurrentPageId(tempPagesToLookAt[pageIndex + 1].id);
              localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id)

              if (shouldWriteToPageHistory !== false) {
                previousPagesVisitedStrings.push(tempPagesToLookAt[pageIndex].id);
              }
              //FH STUFF
              SetChapterData(tempPagesToLookAt[pageIndex + 1].chapterParent)
              if (tempPagesToLookAt[pageIndex + 1].pageBackgroundColor !== undefined) {
                localCurrentPageColor = tempPagesToLookAt[pageIndex + 1].pageBackgroundColor
                setState_currentPageColor(tempPagesToLookAt[pageIndex + 1].pageBackgroundColor)
              }

              if (tempPagesToLookAt[pageIndex + 1].index !== undefined) {
                currentProgressBarIndex = tempPagesToLookAt[pageIndex + 1].index;
                setState_currentProgressBarIndex(tempPagesToLookAt[pageIndex + 1].index);
              }
              //FH STUFF


              if (!localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")) {
                localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_first-visit");
                incrementFirestoreVariableAggregate(patientInfo.anesthesiaType);

                setPagesVisited((prevPages) =>
                  prevPages.includes(tempPagesToLookAt[pageIndex + 1].id) ? prevPages : [...prevPages, tempPagesToLookAt[pageIndex + 1].id]
                );
                /*  setIndexesVisited(localIndexesVisited); */
              } else if (localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seen")
                && !localTagsAnsweredTrue.includes(contentInfo.replace("4b2", "book") + "-seenAgain")) {


                localPagesVisited.push(tempPagesToLookAt[pageIndex + 1].id);
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_second-visit");
                incrementFirestoreVariableAggregate(patientInfo.anesthesiaType);

                setPagesVisited((prevPages) =>
                  prevPages.includes(tempPagesToLookAt[pageIndex + 1].id) ? prevPages : [...prevPages, tempPagesToLookAt[pageIndex + 1].id]
                );

              }
              else {
                incrementFirestoreVariableAggregate("book" + contentInfo.replace("4b2", "") + "-" + page.id + "_extra-visit");

              }
              return;
            }
            else {
              console.log("WE TRIED GOING PAST THE LAST PAGE!! given destination: " + givenDestinationName)
              console.log("localCurrentCarouselIndex: " + tempNavVariable);
              console.log("localCurrentCarouselIndex + 1: " + (tempNavVariable + 1));
              console.log("tempPagesToLookAt.length - 1: " + (tempPagesToLookAt.length - 1));

            }

          }
          else if (givenDestinationName.includes("previous") && pageIndex === tempNavVariable) {
            console.log("Previous button called at page index: " + pageIndex + " and tempNavVariable (current index): " + tempNavVariable)

            //PREVIOUS PAGE RECURSION
            console.log("PREVIOUS PAGES: ");
            console.log(previousPagesVisitedStrings);
            console.log("PREVIOUS PAGE AT INDEX: " + (previousPagesVisitedStrings.length - 1) + " = " + previousPagesVisitedStrings[previousPagesVisitedStrings.length - 1]);
            GoToDestination(previousPagesVisitedStrings[previousPagesVisitedStrings.length - 1], false)
            previousPagesVisitedStrings.pop();


          }

          else if (page.id !== "page-next" && page.id !== "page-previous" && page.id !== givenDestinationName) {
            //console.log("no match between page ids: " + givenDestinationName + " and " + page.id)

          }
          else {
            // console.log("UNKNOWN PAGE DESTINATION FOUND AT: " + givenDestinationName)

          }
        });

      }

    }

  }




  function SetPageLockNumber(givenNumber: number, callingFunction: string) {

    //console.log("SET PAGE LOCK NUMBER CALLED FROM: " + callingFunction + " || with state: " + pageLockNumber + " + " + givenNumber)

    // console.log("localPageLockNumber: " + localPageLockNumber + " + givenNumber: " + givenNumber)

    localPageLockNumber += givenNumber;
    // console.log("localPageLockNumber after: " + localPageLockNumber)

    setPageLockNumber(pageLockNumber + givenNumber);
  }




  var hasNavButton: boolean = false;

  const [contactUsPageChildren, setContactUsPageChildren] = useState<React.ReactElement<BaseCarouselChildProps>[]>([]);

  function GenerateCarouselModal(givenContactUsObject: ContactUsObject) {


    const pageItemsForContactUsPage: React.ReactElement<BaseCarouselChildProps>[] = [];

    const pageHolderItems: React.ReactElement<BaseCarouselChildProps>[] = [];

    const bottomButtonHolderItems: React.ReactElement<BaseCarouselChildProps>[] = [];

    var pageHolderItemsActualObject: React.ReactNode = null;
    var bottomButtonHolderItemsActualObject: React.ReactNode = null;

    hasNavButton = false;

    var tempPageItem: React.ReactElement;
    // Iterate through the pageItems of the current Page
    Object.values(givenContactUsObject.pageItems).forEach(pageItem => {

      tempPageItem = renderPageItem(givenContactUsObject, pageItem);

      // If a tempPageItem was created, add it to the pageItems array
      if (tempPageItem) {
        pageHolderItems.push(tempPageItem);
      }
    });

    //FIRST WE CREATE THE Holder_PageItems and populate it
    pageHolderItemsActualObject = (
      <Holder_PageItems isMobile={isMobileString}
        givenPageItemChildren={pageHolderItems}
        givenGlobal_isMobile={isMobileString}
        givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
        givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
        givenGlobal_LockNumber={pageLockNumber}

      />
    )
    //THEN WE PUSH IT INTO OUR ACUAL PAGE!!!
    pageItemsForContactUsPage.push(pageHolderItemsActualObject);

    if (givenContactUsObject.BottomButtonHolderObject) {
      givenContactUsObject.BottomButtonHolderObject.bottomButtonHolderItems.forEach(bottomButton => {

        var tempButtonItem: React.ReactNode = renderPageItem(givenContactUsObject, bottomButton);

        if (tempButtonItem) {
          hasNavButton = true;
          bottomButtonHolderItems.push(tempButtonItem);
        }

      });

      bottomButtonHolderItemsActualObject = (
        <Holder_Buttons_AnchoredBottom
          isMobile={isMobileString}
          givenBottomButtonChildren={bottomButtonHolderItems}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}

        />)

      pageItemsForContactUsPage.push(bottomButtonHolderItemsActualObject);
    }

    //WE SHOULD NOW HAVE BOTH PAGE ITEMS AND BOTTOM ANCHORED BUTTONS IN (if we have any)

    // Create a PageObject with the collected PageItems

    setContactUsPageChildren(pageItemsForContactUsPage)
    /*     return (
          <Object_Modal_ContactUs
    
            givenModalItems={pageItemsForCarousel}
    
            givenGlobal_isMobile={''}
            givenGlobal_CurrentCarouselIndex={0}
            givenGlobal_PreviousCarouselIndex={0} />
    
        ); */



  }


  const renderPageItem = (givenPage: PageObject | ContactUsObject, pageItem: PageItem): React.ReactElement => {

    let tempPageItem: React.ReactElement = null;
    keyInt++;
    if (pageItem.componentType === "image") {

      tempPageItem = (
        <Object_Item_Image
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenImageName={pageItem.fileName || 'missing-image.jpg'}
          givenImageOrientation={pageItem.pageOrientation || "portrait"}
          givenImageSize={pageItem.sizeOfPageTaken || "20%"}
          givenHasShadow={pageItem.hasDropShadow}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}

          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
        />
      );
    } else if (pageItem.componentType === "text") {

      tempPageItem = (
        <Object_Item_Text
          key={givenPage.id + pageItem.renderOrder + keyInt}

          givenTextValue={pageItem.textValue || "MISSING TEXT VALUE"}
          givenTextType={pageItem.textType || "bodyText"}
          givenTextAlignment={pageItem.textAlignment || "center"}
          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}
          givenTextColor={pageItem.colorText || ""}
          givenTextContainerColor={pageItem.colorBackground || ""}

          givenIconVisible={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || ""}
          givenIconHorizontalPlcement={pageItem.iconHorizontalPlacement || "left"}
          givenIconSizeOverride={pageItem.iconSizeOverride || ""}


          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_PatientProcedureName={patientInfo_PatientProcedureName}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
        />
      );
    } else if (pageItem.componentType === "button") {
      hasNavButton = true;
      if (pageItem.buttonType) {
        if (pageItem.buttonType === "normal") {

          tempPageItem = (
            <Object_Button_Normal
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}
              givenIconBool={pageItem.iconVisible || false}
              givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
              givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
              givenButtonText={pageItem.textValue || ""}



              givenButtonStyle={pageItem.buttonStyle || "primary"}
              givenIsDisabled={pageItem.buttonDisabled || false}
              givenDestination={pageItem.destination || "page-next"}
              givenGoToDestination={GoToDestination}
              givenPageIndex={currentCarouselIndex}

              givenWriteTags={WriteTags}

              givenWriteData={WriteData}
              givenDataToWrite={pageItem.dataToWrite || ""}

              givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
              givenNewActiveColor={pageItem.colorOverrideActive || ""}
              givenNewHoverColor={pageItem.colorOverrideHover || ""}

              /* 
                            givenSetTagsAnsweredTrue={SetTagsAnsweredTrue}
                            givenSetTagsAnsweredFalse={SetTagsAnsweredFalse} */

              givenTagsTrueArray={tagsAnsweredTrue}
              givenTagsFalseArray={tagsAnsweredFalse}

              givenTagInclusion={pageItem.tagsInclude || ""}
              givenTagExclusion={pageItem.tagsExclude || ""}

              givenTagToWrite={pageItem.tagsToWrite || ""}
              givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}



            />
          );

        }
        else if (pageItem.buttonType === "confirm") {

          tempPageItem = (
            <Object_Button_Confirm
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}
              givenIconBool={pageItem.iconVisible || false}
              givenButtonText={pageItem.textValue || ""}

              givenButtonStyle={pageItem.buttonStyle || "primary"}
              givenIsDisabled={pageItem.buttonDisabled || false}
              givenDestination={pageItem.destination || "page-next"}
              givenGoToDestination={GoToDestination}
              givenPageIndex={currentCarouselIndex}

              givenWriteTags={WriteTags}

              givenWriteData={WriteData}
              givenDataToWrite={pageItem.dataToWrite || ""}
              /*     givenSetTagsAnsweredTrue={SetTagsAnsweredTrue}
                  givenSetTagsAnsweredFalse={SetTagsAnsweredFalse} */

              givenTagsTrueArray={tagsAnsweredTrue}
              givenTagsFalseArray={tagsAnsweredFalse}

              givenTagInclusion={pageItem.tagsInclude || ""}
              givenTagExclusion={pageItem.tagsExclude || ""}

              givenTagToWrite={pageItem.tagsToWrite || ""}
              givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

              givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
              givenNewActiveColor={pageItem.colorOverrideActive || ""}
              givenNewHoverColor={pageItem.colorOverrideHover || ""}

            />
          );

        }
        else if (pageItem.buttonType === "deny") {

          tempPageItem = (
            <Object_Button_Deny
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}
              givenIconBool={pageItem.iconVisible || false}
              givenButtonText={pageItem.textValue || ""}

              givenButtonStyle={pageItem.buttonStyle || "primary"}
              givenIsDisabled={pageItem.buttonDisabled || false}
              givenDestination={pageItem.destination || "page-next"}
              givenGoToDestination={GoToDestination}
              givenPageIndex={currentCarouselIndex}

              givenWriteTags={WriteTags}

              givenWriteData={WriteData}
              givenDataToWrite={pageItem.dataToWrite || ""}
              /*       givenSetTagsAnsweredTrue={SetTagsAnsweredTrue}
                    givenSetTagsAnsweredFalse={SetTagsAnsweredFalse} */

              givenTagsTrueArray={tagsAnsweredTrue}
              givenTagsFalseArray={tagsAnsweredFalse}

              givenTagInclusion={pageItem.tagsInclude || ""}
              givenTagExclusion={pageItem.tagsExclude || ""}

              givenTagToWrite={pageItem.tagsToWrite || ""}
              givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

              givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
              givenNewActiveColor={pageItem.colorOverrideActive || ""}
              givenNewHoverColor={pageItem.colorOverrideHover || ""}

            />
          );

        } else if (pageItem.buttonType === "icon") {
          tempPageItem = (
            <Object_Button_IconButton
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}

              givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
              givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
              givenButtonText={pageItem.textValue || ""}
              givenNewBoxShadow={pageItem.boxShadow || ""}



              givenIsDisabled={pageItem.buttonDisabled || false}
              givenDestination={pageItem.destination || "page-next"}
              givenGoToDestination={GoToDestination}
              givenPageIndex={currentCarouselIndex}

              givenWriteTags={WriteTags}

              givenWriteData={WriteData}
              givenDataToWrite={pageItem.dataToWrite || ""}

              givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
              givenNewActiveColor={pageItem.colorOverrideActive || ""}
              givenNewHoverColor={pageItem.colorOverrideHover || ""}
              givenIconSize={pageItem.iconSizeOverride || ""}

              /* 
                            givenSetTagsAnsweredTrue={SetTagsAnsweredTrue}
                            givenSetTagsAnsweredFalse={SetTagsAnsweredFalse} */

              givenTagsTrueArray={tagsAnsweredTrue}
              givenTagsFalseArray={tagsAnsweredFalse}

              givenTagInclusion={pageItem.tagsInclude || ""}
              givenTagExclusion={pageItem.tagsExclude || ""}

              givenTagToWrite={pageItem.tagsToWrite || ""}
              givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

            />
          )
        }
        else if (pageItem.buttonType === "modal-dismiss") {

          tempPageItem = (
            <Object_Button_ModalDismiss
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}
              givenIconBool={pageItem.iconVisible || false}
              givenButtonText={pageItem.textValue || ""}

              givenButtonStyle={pageItem.buttonStyle || "primary"}
              givenIsDisabled={pageItem.buttonDisabled || false}

              givenSetCurrentModalID={setCurrentModalID}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

            />
          );

        }
        else {
          tempPageItem = (
            <Object_Button_Normal
              key={givenPage.id + pageItem.renderOrder + keyInt}
              isMobile={isMobileString}
              givenIconBool={pageItem.iconVisible || false}
              givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
              givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
              givenButtonText={pageItem.textValue || ""}

              givenButtonStyle={pageItem.buttonStyle || "primary"}
              givenIsDisabled={pageItem.buttonDisabled || false}
              givenDestination={pageItem.destination || "page-next"}
              givenGoToDestination={GoToDestination}
              givenPageIndex={currentCarouselIndex}

              givenWriteTags={WriteTags}

              givenWriteData={WriteData}
              givenDataToWrite={pageItem.dataToWrite || ""}
              /*   givenSetTagsAnsweredTrue={SetTagsAnsweredTrue}
                givenSetTagsAnsweredFalse={SetTagsAnsweredFalse} */

              givenTagsTrueArray={tagsAnsweredTrue}
              givenTagsFalseArray={tagsAnsweredFalse}

              givenTagInclusion={pageItem.tagsInclude || ""}
              givenTagExclusion={pageItem.tagsExclude || ""}

              givenTagToWrite={pageItem.tagsToWrite || ""}
              givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_LockNumber={pageLockNumber}
              givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

              givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
              givenNewActiveColor={pageItem.colorOverrideActive || ""}
              givenNewHoverColor={pageItem.colorOverrideHover || ""}

            />
          );
        }
      }
      else {
        tempPageItem = (
          <Object_Button_Normal
            key={givenPage.id + pageItem.renderOrder + keyInt}
            isMobile={isMobileString}
            givenIconBool={pageItem.iconVisible || false}
            givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
            givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
            givenButtonText={pageItem.textValue || ""}

            givenButtonStyle={pageItem.buttonStyle || "primary"}
            givenIsDisabled={pageItem.buttonDisabled || false}
            givenDestination={pageItem.destination || "page-next"}
            givenGoToDestination={GoToDestination}
            givenPageIndex={currentCarouselIndex}

            givenWriteTags={WriteTags}

            givenWriteData={WriteData}
            givenDataToWrite={pageItem.dataToWrite || ""}


            givenTagsTrueArray={tagsAnsweredTrue}
            givenTagsFalseArray={tagsAnsweredFalse}

            givenTagInclusion={pageItem.tagsInclude || ""}
            givenTagExclusion={pageItem.tagsExclude || ""}

            givenTagToWrite={pageItem.tagsToWrite || ""}
            givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}
            givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

            givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
            givenNewActiveColor={pageItem.colorOverrideActive || ""}
            givenNewHoverColor={pageItem.colorOverrideHover || ""}

          />
        );
      }
    } else if (pageItem.componentType === "button-locked") {

      hasNavButton = true;

      tempPageItem = (
        <Object_Button_Normal_Locked
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
          givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
          givenButtonText={pageItem.textValue || ""}
          givenButtonStyle={pageItem.buttonStyle || "primary"}
          givenIsDisabled={pageItem.buttonDisabled || false}
          givenIsLocked={givenPage.hasLock || false}
          givenLockNumber={pageLockNumber}

          givenDestination={pageItem.destination || "page-next"}
          givenGoToDestination={GoToDestination}
          givenPageIndex={currentCarouselIndex}

          givenWriteTags={WriteTags}

          givenWriteData={WriteData}
          givenDataToWrite={pageItem.dataToWrite || ""}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}

          givenTagToWrite={pageItem.tagsToWrite || ""}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}


        />
      );
    }
    else if (pageItem.componentType === "button-opt-out") {

      hasNavButton = true;

      tempPageItem = (
        <Object_Button_OptOut
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
          givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
          givenButtonText={pageItem.textValue || ""}
          givenButtonStyle={pageItem.buttonStyle || "primary"}
          givenIsDisabled={pageItem.buttonDisabled || false}

          givenSetShowOptOutModal={setShowOptOutModal}

          givenDestination={pageItem.destination || "page-next"}
          givenGoToDestination={GoToDestination}
          givenPageIndex={currentCarouselIndex}

          givenWriteTags={WriteTags}

          givenWriteData={WriteData}
          givenDataToWrite={pageItem.dataToWrite || ""}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}

          givenTagToWrite={pageItem.tagsToWrite || ""}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}

          givenPatientPID={patientPID}
          givenSendFeedback={SendFirestoreData_Feedback}

        />
      );
    }
    else if (pageItem.componentType === "button-selection-confirmation") {

      hasNavButton = true;

      tempPageItem = (
        <Object_Button_Selection_Confirmation
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
          givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
          givenIsDisabled={pageItem.buttonDisabled || false}
          givenIsLocked={givenPage.hasLock || false}
          givenPageLockNumberLocal={localPageLockNumber}
          givenPageLockNumberState={pageLockNumber}
          givenButtonTextNoneSelected={pageItem.textValueNoneSelected || "None of the above"}
          givenButtonTextSomethingSelected={pageItem.textValueSomethingSelected || "Confirm and Continue"}
          givenButtonStyleNoneSelected={pageItem.buttonStyleNoneSelected || "tertiary"}
          givenButtonStyleSomethingSelected={pageItem.buttonStyleSomethingSelected || "primary"}
          givenDestinationNoneSelected={pageItem.destinationNoneSelected || "page-next"}
          givenDestinationSomethingSelected={pageItem.destinationSomethingSelected || "page-next"}
          givenGoToDestination={GoToDestination}
          givenPageIndex={currentCarouselIndex}


          givenWriteTags={WriteTags}
          givenMapToRead={selectionMapState}

          givenWriteData={WriteData}
          givenDataToWriteSomethingSelected={pageItem.dataToWriteSomethingSelected || ""}
          givenDataToWriteNothingSelected={pageItem.dataToWriteNothingSelected || ""}


          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={localPageLockNumber}
          givenTagsToWriteSomethingSelected={pageItem.tagsToWriteSomethingSelected || ""}
          givenTagsToWriteNothingSelected={pageItem.tagsToWriteNothingSelected || ""}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
          /*  givenAddressesToRead={[]} */


          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}
        />
      );
    } else if (pageItem.componentType === "button-item-list") {
      if (pageItem.selectMultiple) {
        tempPageItem = (
          <Holder_Buttons_Selection_Multi
            key={givenPage.id + pageItem.renderOrder + keyInt}
            isMobile={isMobileString}
            givenButtonTexts={pageItem.buttonItemsList || ["missing button items!!"]}
            givenAreDisabled={pageItem.buttonsAllDisabled || false}
            givenLockNumber={pageLockNumber}
            givenSetLockNumber={SetPageLockNumber}
            givenAddToSelectionMap={addToSelectionMap}
            givenRemoveFromSelectionMap={removeFromSelectionMap}
            givenAddressToWrite={pageItem.writeToAddress || "buttonItemListAddress"}

            givenTagsTrueArray={tagsAnsweredTrue}
            givenTagsFalseArray={tagsAnsweredFalse}

            givenTagInclusion={pageItem.tagsInclude || ""}
            givenTagExclusion={pageItem.tagsExclude || ""}
            givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}
            givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}


          />
        );
      } else {
        tempPageItem = (
          <Holder_Buttons_Selection_Single
            key={givenPage.id + pageItem.renderOrder + keyInt}
            isMobile={isMobileString}
            givenButtonTexts={pageItem.buttonItemsList || ["missing button items!!"]}
            givenAreDisabled={pageItem.buttonsAllDisabled || false}
            givenLockNumber={pageLockNumber}
            givenSetLockNumber={SetPageLockNumber}
            givenAddToSelectionMap={addToSelectionMap}
            givenRemoveFromSelectionMap={removeFromSelectionMap}
            givenAddressToWrite={pageItem.writeToAddress || "buttonItemListAddress"}

            givenTagsTrueArray={tagsAnsweredTrue}
            givenTagsFalseArray={tagsAnsweredFalse}

            givenTagInclusion={pageItem.tagsInclude || ""}
            givenTagExclusion={pageItem.tagsExclude || ""}
            givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}
            givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
          />
        );
      }
    } else if (pageItem.componentType === "button-item-list-results") {



      tempPageItem = (
        <Holder_Buttons_Selection_Results
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenMapToRead={selectionMapState}
          givenAddressesToRead={pageItem.readFromAddress || ["buttonItemListAddress"]}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
        />
      );
    } else if (pageItem.componentType === "button-prep-item-list") {

      tempPageItem = (
        <Holder_Buttons_Prep_Destinations
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenButtonTexts={pageItem.buttonItemsList || ["missing button items!!"]}
          givenLockNumber={pageLockNumber}
          givenSetLockNumber={SetPageLockNumber}

          givenSetPrepDestination={setPrepDestination}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}

          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

        />
      );
    } else if (pageItem.componentType === "button-prep-confirm") {

      hasNavButton = true;

      tempPageItem = (
        <Object_Button_Prep_Confirm
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
          givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
          givenPrepDestination={prepDestination}
          givenLockNumber={pageLockNumber}
          givenButtonTextNoneSelected={pageItem.textValueNoneSelected || "None of the above"}
          givenButtonTextSomethingSelected={pageItem.textValueSomethingSelected || "Confirm and Continue"}
          givenButtonStyleNoneSelected={pageItem.buttonStyleNoneSelected || "tertiary"}
          givenButtonStyleSomethingSelected={pageItem.buttonStyleSomethingSelected || "primary"}
          givenGoToDestination={GoToDestination}
          givenPageIndex={currentCarouselIndex}
          givenButtonDisabled={pageItem.buttonDisabled || true}

          givenWriteTags={WriteTags}

          givenWriteData={WriteData}
          givenDataToWriteSomethingSelected={pageItem.dataToWriteSomethingSelected || ""}
          givenDataToWriteNothingSelected={pageItem.dataToWriteNothingSelected || ""}




          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}

          givenTagToWrite={pageItem.tagsToWrite || ""}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={localPageLockNumber}
          givenGlobal_PrepDestination={prepDestination}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}


          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}

        />
      );
    } else if (pageItem.componentType === "button-external-link") {
      tempPageItem = (
        <Object_Button_ExternalLink
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenButtonText={pageItem.textValue || ""}
          givenButtonStyle={pageItem.buttonStyle || "primary"}
          givenIsDisabled={pageItem.buttonDisabled || false}
          givenLinkText={pageItem.externalLink || "google.com"}
          givenNewTab={pageItem.newTab}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}

          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}
        />
      );
    }
    else if (pageItem.componentType === "button-phone-number") {
      tempPageItem = (
        <Object_Button_PhoneNumber
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenIconBool={pageItem.iconVisible || false}
          givenIconFileName={pageItem.iconFileName || "backupImage.jpg"}
          givenIconHorizontalPlacement={pageItem.iconHorizontalPlacement || "left"}
          givenButtonText={pageItem.textValue || ""}
          givenButtonStyle={pageItem.buttonStyle || "primary"}
          givenIsDisabled={pageItem.buttonDisabled || false}
          givenPhoneNumberHardCoded={pageItem.hardcodedPhoneNumber || "3096552000"}
          givenPhoneNumberVariable={pageItem.variablePhoneNumber || "default_number"}

          givenTagsTrueArray={tagsAnsweredTrue}
          givenTagsFalseArray={tagsAnsweredFalse}

          givenTagInclusion={pageItem.tagsInclude || ""}
          givenTagExclusion={pageItem.tagsExclude || ""}


          givenIncrementFirestoreVariable={incrementFirestoreVariableAggregate}

          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGlobal_CurrentPageID={localPageID}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
          givenGlobal_TagsTrueArray={tagsAnsweredTrue}


          givenNewPrimaryColor={pageItem.colorOverrideDefault || ""}
          givenNewActiveColor={pageItem.colorOverrideActive || ""}
          givenNewHoverColor={pageItem.colorOverrideHover || ""}
        />
      );
    } else if (pageItem.componentType === "button-swipe") {
      hasNavButton = true;
      tempPageItem = (
        <Object_Button_ArrowDown
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenDestination={pageItem.destination || ""}
          givenGoToDestination={GoToDestination}
          givenSetLockNumber={SetPageLockNumber}
          givenButtonStyle={pageItem.buttonStyle || "primary"}
          givenButtonText={pageItem.textValue || ""}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenTagToWrite={pageItem.tagsToWrite || ""}


          givenWriteTags={WriteTags}

          givenWriteData={WriteData}
          givenDataToWrite={pageItem.dataToWrite || ""}



          givenGlobal_ShouldExcludeByDefault={pageItem.excludeByDefault || false}
        />
      );
    }
    else if (pageItem.componentType === "page-section") {


      var tempMiniPageItems: React.ReactElement[] = [];

      pageItem.pageSectionItems.forEach((sectionElement, index) => {
        var tempMiniPageItem = renderPageItem(givenPage, sectionElement)

        if (tempMiniPageItem) {
          tempMiniPageItems.push(tempMiniPageItem);
        }
      });//end of foreach


      tempPageItem = (
        <Holder_Objects_PageSection
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenPageSectionChildren={tempMiniPageItems}

          givenBackgroundColor={pageItem.colorBackground || ""}
          givenWidth={pageItem.width || "auto"}
          givenBoxShadow={pageItem.boxShadow || "0px 0px 0px 0px rgba(0, 0, 0, 0)"}
          givenMarginSides={pageItem.marginSides || "auto"}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}

        />
      );
    }
    else if (pageItem.componentType === "page-holder-horizontal") {


      var tempMiniPageItems: React.ReactElement[] = [];

      pageItem.pageSectionItems.forEach((sectionElement, index) => {
        var tempMiniPageItem = renderPageItem(givenPage, sectionElement)

        if (tempMiniPageItem) {
          tempMiniPageItems.push(tempMiniPageItem);
        }
      });//end of foreach


      tempPageItem = (
        <Holder_Objects_HorizontalHolder
          key={givenPage.id + pageItem.renderOrder + keyInt}
          isMobile={isMobileString}
          givenHorizontalHolderChildren={tempMiniPageItems}

          givenBackgroundColor={pageItem.colorBackground || ""}
          givenWidth={pageItem.width || "auto"}
          givenBoxShadow={pageItem.boxShadow || "0px 0px 0px 0px rgba(0, 0, 0, 0)"}
          givenMarginSides={pageItem.marginSides || "auto"}

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_LockNumber={pageLockNumber}
          givenGap={pageItem.gap || "50px"}

        />
      );
    }
    else {
      console.warn(`Unknown component type: ${pageItem.componentType}`);
      tempPageItem = <div>Unknown component type</div>;
    }

    return tempPageItem;


  }

  ///////////////////////////////////////////////////////////////////////////////////
  /////////////////NAV MENU BUTTON POPULATION AREA///////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////
  var navBarDataGetterLock: number = 1;
  var localNavBarLabels: string[] = [];
  var localNavBarDestinations: string[] = [];

  useEffect(() => {
    if (/* navBarDataGetterLock >= 1 */ true) {
      /*     console.log("WE SHOULD SEE NAV BAR REPOPULATING") */

      localCurrentPageData.filter((Page) => {
        var shouldInclude = true;
        if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === true)) {
          shouldInclude = true;
        }
        else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === false)) {
          shouldInclude = false;
        }

        if (!shouldInclude) {

        }

        return shouldInclude;
      }).forEach((Page, index) => {
        if (!Page.navTitle.trim().toLowerCase().includes("null")
          && !Page.navTitle.toLowerCase().includes("NULL")) {
          if (CheckTagsToDetermineRendering(
            Page.tagsInclude,
            Page.tagsExclude,
            Page.id,
            "",
            Page.excludeByDefault
          )) {
            if (!localNavBarLabels.includes(Page.navTitle)) {
              localNavBarLabels.push(Page.navTitle)
            }

            if (!localNavBarDestinations.includes(Page.id)) {
              localNavBarDestinations.push(Page.id);
            }
          }
        }
        else {

        }
      });

      setNavBarButtonLabels(localNavBarLabels);
      setNavBarButtonDestinations(localNavBarDestinations);
      navBarDataGetterLock -= 1;
    }

  }, [tagsAnsweredTrue, tagsAnsweredFalse])


  const [modalAlertStateArray, setModalAlertStateArray] = useState<ReactElement<Object_Item_Modal_Alert_Props>[]>([]);
  const [modalPopupStateArray, setModalPopupStateArray] = useState<ReactElement<Object_Item_Modal_Popup_Props>[]>([]);
  const [modalSlideStateArray, setModalSlideStateArray] = useState<ReactElement<Object_Item_Modal_Slide_Props>[]>([]);


  const localModalAlertItemsToPushTo: React.ReactElement[] = [];
  const localModalPopupItemsToPushTo: React.ReactElement[] = [];
  const localModalSlideItemsToPushTo: React.ReactElement[] = [];


  /* const [carouselPages, SetCarouselPages] = useState<React.ReactNode[]>([]); */

  const [carouselPages, SetCarouselPages] = useState<ReactElement<Eddies_Custom_Carousel_Item_Props>[]>([]);

  function GenerateCarouselPages() {
    keyInt++;
    var firstPageLock = 0;
    localPagesVisited = [];
    previousPagesVisitedStrings = [];

    var tempCarouselPagesToPush: PageObject[] = [];
    //console.log("About to generate some pages, localCurrentBookData is: ");
    //console.log(localCurrentBookData);
    //console.log("localTagsAnsweredTrue:");
    //console.log(localTagsAnsweredTrue);
    //console.log("hasSeenProcedureIntro is: " + patientInfo.hasSeenProcedureIntro + " and !localTagsAnsweredTrue.includes hasSeenIntro is: " + !localTagsAnsweredTrue.includes("hasSeenIntro"));
    if (dataLock > 0 && patientInfo.hasSeenProcedureIntro === 0 && !localTagsAnsweredTrue.includes("hasSeenIntro_")) {
      //console.log("We havent seen the intro before, adding it to the start!")
      //localCurrentPageData = [...localIntroBookData, ...localCurrentPageData]
      var tempPagesToPush: PageObject[] = localCurrentPageData.filter((Page) => {

        var shouldInclude: boolean = true;

        if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === true)) {
          shouldInclude = true;
        }
        else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === false)) {
          shouldInclude = false;
        }

        if (!shouldInclude) {
          /*   console.log(`Filtering out Page with ID: ${Page.id}`); */
        }

        return shouldInclude;
      });

      tempCarouselPagesToPush.push(...tempPagesToPush)
      patientInfo.hasSeenProcedureIntro = 1;
      setPatientInfo_PatientHasSeenProcedureIntro(1);
      localTagsAnsweredTrue += "hasSeenIntro_";
      WriteTags("hasSeenIntro-true_")
      /*    handleSendData(); */
    }
    else {
      //console.log("We HAVE seen the intro before, ignoring it!")
      //console.log("localCurrentBookData is: ");
      //console.log(localCurrentBookData);
      tempCarouselPagesToPush = localCurrentPageData.filter((Page) => {

        var shouldInclude: boolean = true;

        if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === true)) {
          shouldInclude = true;
        }
        else if ((CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
        ) === false)) {
          shouldInclude = false;
        }

        if (!shouldInclude) {
          /*   console.log(`Filtering out Page with ID: ${Page.id}`); */
        }

        return shouldInclude;
      });


    }


    //NEW VERSION
    SetCarouselPages(tempCarouselPagesToPush.map((Page, carouselPageIndex) => {
      /*   console.log("looking at page: " + Page.id + " in GeneratePages()") */
      if (Page.excludeByDefault === false ||
        CheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault)) {
        /*           console.log("found a valid page: " + Page.id + " after initial GeneratePages() IF") */
        // Initialize an array to hold the PageItems for the current Page
        const pageItemsForCarousel: React.ReactElement<BaseCarouselChildProps>[] = [];

        const pageHolderItems: React.ReactElement<BaseCarouselChildProps>[] = [];

        const bottomButtonHolderItems: React.ReactElement<BaseCarouselChildProps>[] = [];

        var pageHolderItemsActualObject: React.ReactNode = null;
        var bottomButtonHolderItemsActualObject: React.ReactNode = null;

        hasNavButton = false;

        var tempPageItem: React.ReactElement;
        // Iterate through the pageItems of the current Page
        Object.values(Page.pageItems).forEach(pageItem => {

          tempPageItem = renderPageItem(Page, pageItem);

          // If a tempPageItem was created, add it to the pageItems array
          if (tempPageItem) {
            pageHolderItems.push(tempPageItem);
          }
        });

        //FIRST WE CREATE THE Holder_PageItems and populate it
        pageHolderItemsActualObject = (
          <Holder_PageItems isMobile={isMobileString}
            givenPageItemChildren={pageHolderItems}
            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}

          />
        )
        //THEN WE PUSH IT INTO OUR ACUAL PAGE!!!
        pageItemsForCarousel.push(pageHolderItemsActualObject);

        if (Page.modalObjects) {

          // Iterate through the modalObjects of the current Page
          var modalItems: React.ReactNode[] = [];
          let tempModalObject: React.ReactElement = null; // Initialize to null
          Page.modalObjects.forEach(modalObject => {

            tempModalObject = null;
            modalItems = [];
            modalObject.modalItems.forEach(modalItem => {
              //going through each of the modal's 
              const tempPageMiniItem = renderPageItem(Page, modalItem);

              if (tempPageMiniItem) {
                modalItems.push(tempPageMiniItem);
              }
            });

            const keyToCheck = modalObject.modalID + "-" + carouselPageIndex;
            // Check the component type and render the corresponding component
            // Check the component type using if/else statements
            if (modalObject.modalType === "sheet") {

              if (localModalSlideItemsToPushTo.some(item => item.props.givenKey === keyToCheck)) {

              } else {

                tempModalObject = (
                  <Object_Item_Modal_Slide
                    key={modalObject.modalID + carouselPageIndex + keyInt}
                    givenKey={modalObject.modalID + "-" + carouselPageIndex}

                    givenSlideDirection={"bottom"}
                    givenModalItems={modalItems}

                    givenPageIndex={carouselPageIndex}

                    givenModalID={modalObject.modalID}

                    givenSetCurrentModal={setCurrentModalID}
                    givenSetModalShadowState={SetShouldShowModalShadow}


                    givenTagInclusion={modalObject.tagsInclude || ""}
                    givenTagExclusion={modalObject.tagsExclude || ""}
                    givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

                    givenDismissDestination={modalObject.dismissDestination || "none"}
                    givenDismissEnabled={modalObject.dismissEnabled || false}
                    givenDismissTimer={modalObject.dismissTimer || 2000}
                    givenGoToDestination={GoToDestination}

                    givenGlobal_isMobile={isMobileString}
                    givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
                    givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
                    givenGlobal_LockNumber={pageLockNumber}
                    givenGlobal_TagsTrueArray={tagsAnsweredTrue}
                    givenGlobal_TagsFalseArray={tagsAnsweredFalse}
                    givenGlobal_ShouldExcludeByDefault={modalObject.excludeByDefault || false}
                  />);
                localModalSlideItemsToPushTo.push(tempModalObject);
              }
            }
            else if (modalObject.modalType == "popup") {

              if (localModalPopupItemsToPushTo.some(item => item.props.givenKey === keyToCheck)) {

              } else {

                tempModalObject = (
                  <Object_Item_Modal_Popup
                    key={modalObject.modalID + carouselPageIndex + keyInt}
                    givenKey={modalObject.modalID + "-" + carouselPageIndex}

                    givenModalItems={modalItems}

                    givenPageIndex={carouselPageIndex}

                    givenModalID={modalObject.modalID}

                    givenSetCurrentModal={setCurrentModalID}
                    givenSetModalShadowState={SetShouldShowModalShadow}


                    givenTagInclusion={modalObject.tagsInclude || ""}
                    givenTagExclusion={modalObject.tagsExclude || ""}
                    givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

                    givenDismissDestination={modalObject.dismissDestination || "none"}
                    givenDismissEnabled={modalObject.dismissEnabled || false}
                    givenDismissTimer={modalObject.dismissTimer || 2000}
                    givenGoToDestination={GoToDestination}

                    givenGlobal_isMobile={isMobileString}
                    givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
                    givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
                    givenGlobal_LockNumber={pageLockNumber}
                    givenGlobal_TagsTrueArray={tagsAnsweredTrue}
                    givenGlobal_TagsFalseArray={tagsAnsweredFalse}
                    givenGlobal_ShouldExcludeByDefault={modalObject.excludeByDefault || false}

                  />);
                localModalPopupItemsToPushTo.push(tempModalObject);
              }


            }
            else if (modalObject.modalType == "alert") {
              // console.log("WE DETECTED A POPUP MODAL")

              if (localModalAlertItemsToPushTo.some(item => item.props.givenKey === keyToCheck)) {


              } else {


                tempModalObject = (
                  <Object_Item_Modal_Alert
                    key={modalObject.modalID + carouselPageIndex + keyInt}
                    givenKey={modalObject.modalID + "-" + carouselPageIndex}


                    givenModalItems={modalItems}

                    givenPageIndex={carouselPageIndex}

                    givenModalID={modalObject.modalID}

                    givenSetCurrentModal={setCurrentModalID}
                    givenSetModalShadowState={SetShouldShowModalShadow}

                    givenAlertDelayTime={modalObject.alertDelayTime || 500}
                    givenAlertRepeatableBoolean={modalObject.alertIsRepeatable || false}

                    givenTagInclusion={modalObject.tagsInclude || ""}
                    givenTagExclusion={modalObject.tagsExclude || ""}
                    givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

                    givenGlobal_isMobile={isMobileString}
                    givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
                    givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
                    givenGlobal_LockNumber={pageLockNumber}
                    givenGlobal_TagsTrueArray={tagsAnsweredTrue}
                    givenGlobal_TagsFalseArray={tagsAnsweredFalse}
                    givenGlobal_ShouldExcludeByDefault={modalObject.excludeByDefault || false}
                  />)
                localModalAlertItemsToPushTo.push(tempModalObject);
              }
            }
            else {
              console.warn(`Unknown modal type: ${modalObject.modalType}`);
            }
          });


          if (localModalPopupItemsToPushTo.length !== 0) {
            setModalPopupStateArray(localModalPopupItemsToPushTo);
          }

          if (localModalAlertItemsToPushTo.length !== 0) {
            setModalAlertStateArray(localModalAlertItemsToPushTo);
          }

          if (localModalSlideItemsToPushTo.length !== 0) {
            setModalSlideStateArray(localModalSlideItemsToPushTo);
          }

        }

        if (Page.BottomButtonHolderObject) {
          Page.BottomButtonHolderObject.bottomButtonHolderItems.forEach(bottomButton => {

            var tempButtonItem: React.ReactNode = renderPageItem(Page, bottomButton);

            if (tempButtonItem) {
              hasNavButton = true;
              bottomButtonHolderItems.push(tempButtonItem);
            }

          });

          bottomButtonHolderItemsActualObject = (
            <Holder_Buttons_AnchoredBottom
              isMobile={isMobileString}
              givenBottomButtonChildren={bottomButtonHolderItems}

              givenGlobal_isMobile={isMobileString}
              givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
              givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
              givenGlobal_LockNumber={pageLockNumber}

            />)

          pageItemsForCarousel.push(bottomButtonHolderItemsActualObject);
        }

        //WE SHOULD NOW HAVE BOTH PAGE ITEMS AND BOTTOM ANCHORED BUTTONS IN (if we have any)
        if (firstPageLock < 1) {
          firstPageLock++;
          localPagesVisited.push(Page.id);
          previousPagesVisitedStrings.push(Page.id)
          /*        console.log("previousPagesVisitedStrings");
                 console.log(previousPagesVisitedStrings); */
        }

        // Create a PageObject with the collected PageItems
        return (
          <Eddies_Custom_Carousel_Item
            key={`${carouselPageIndex}-${Page.id}` + keyInt} // Ensure each carousel item has a unique key
            givenPageID={Page.id}
            givenCarouselChild={pageItemsForCarousel} // Pass the array of PageItems
            givenCarouselOrientation={'vertical'}
            givenIndex={carouselPageIndex}
            givenCurrentIndex={currentCarouselIndex}
            givenPreviousIndex={previousCarouselIndex}
            givenIsAtTop={isAtTop}
            givenIsAtBottom={isAtBottom}
            givenSetIsAtTop={setIsAtTop}
            givenSetIsAtBottom={setIsAtBottom}
            givenSetIsCurrentlyOverflowing={setIsOverflowing}
            givenLockNumber={pageLockNumber}

            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}
            isMobile={isMobileString}

            givenTagInclusion={Page.tagsInclude}
            givenTagExclusion={Page.tagsExclude}
            givenGlobal_ShouldExcludeByDefault={Page.excludeByDefault || false}
            givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}
            givenGlobal_CurrentPageID={localPageID}
            givenGlobal_CurrentModalID={localModalID}

          />
        );
      }
      else {
        /*      console.log("We found a Page to ignore with ID: " + Page.id) */
      }
    })
    );


  }




  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      //behavior: 'smooth', // Optional: Adds a smooth scrolling animation
    });
  };

  async function loadScreen(givenString: string, givenOrigin: string) {
    scrollToTop();
    setScreen(givenString);
  }

  function loadLandingScreen(givenOrigin: string) {
    //navigateTo("Home");
    loadScreen("landingScreen", givenOrigin);
    /*   console.log("LOAD LANDING SCREEN WAS CALLED!") */
  }

  const renderCustomDots = () => {
    const childrenArray = React.Children.toArray(carouselPages);
    return localCurrentChapter.pageObjects.map((_, index) => (
      <Eddies_Custom_Carousel_Dots
        key={index}
        index={index}
        currentSlide={currentProgressBarIndex} //currentCarouselIndex
        active={index === currentProgressBarIndex} //currentCarouselIndex 
        givenNumberOfDots={state_currentProgressBarLength}
        givenCustomBackgroundColor={state_currentProgressBarColorBackground}
        givenCustomColor={state_currentProgressbarColor}

        onClick={() => {
          /*   props.givenSetPreviousIndex(props.givenCurrentIndex),
                props.givenSetCurrentIndex(index); */

        }}

      />
    ));
  };

  function renderScreen() {
    //console.log("We are on screen: " + screen);
    if (screen === "splashScreen") {
      return (
        <Screen_SplashScreen
          nextPageString={"landingScreen"}
          givenOrigin="Splash Screen Click"
          GoToNextPage={loadScreen} />)
    }
    else if (screen === "landingScreen") {
      return renderLandingScreen();
    }
  }



  function renderLandingScreen() {
    return (
      <div className={appPaddingStyle}>


        {state_currentProgressbarVisible ? (
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "start",
              flexDirection: "row",
              zIndex: "999",
              width: "100%",
              height: "8px",
              backgroundColor: state_currentProgressBarColorBackground === "default"
                ? "#b5c4f4"
                : state_currentProgressBarColorBackground,
              position: "absolute",
              left: "0",
              top: "0",
            }}
          >
            {renderCustomDots()}
          </div>
        ) : <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "start",
            flexDirection: "row",
            zIndex: "999",
            width: "100%",
            height: "8px",
            backgroundColor: "rgba(248, 249, 251, 0.80)",
            position: "absolute",
            left: "0",
            top: "0",
          }}
        >
        </div>}
        <div id='navBar' className='nav-bar'>
          <Object_Button_NavOptions

            isMobile={isMobileString}
            givenShowNavOptionsMenu={showNavOptionsMenu}
            givenSetShowNavOptionsMenu={setShowNavOptionsMenu}
          />
          {/*    <Object_Item_NavBarSpacer /> */}
          <Object_Button_ArrowUp
            isMobile={isMobileString}
            givenGoToDestination={GoToDestination}
            givenCurrentPageIndex={currentCarouselIndex}

            givenGlobal_isMobile={isMobileString}
            givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
            givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
            givenGlobal_LockNumber={pageLockNumber}
          />
          {state_currentShouldShowTopRightButton ? (
            <Object_Button_ScheduleButton
              isMobile={isMobileString}
              givenDestination={localCurrentTopRightButtonDestination}
              givenGoToDestination={GoToDestination}
              givenNewPrimaryColor={state_currentTopRightButtonColor}
              givenNewHoverColor={state_currentTopRightButtonColorHover}
              givenNewActiveColor={state_currentTopRightButtonColorActivate}


            />
          ) : (
            <Object_Button_NavMenuButton
              isMobile={isMobileString}
              givenSetShowNavMenu={setShowNavMenu}
            />
          )}
        </div>
        <Object_Item_NavOptionsMenu
          givenShowNavOptionsMenu={showNavOptionsMenu}
          givenSetShowNavOptionsMenu={setShowNavOptionsMenu}

          givenShouldShowDebugScreen={shouldShowDebugScreen}
          givenSetShouldShowDebugScreen={setShouldShowDebugScreen}
          givenURLBar={urlVariable}

          givenSetCurrentModalID={setLocalModalID}

          givenGoToDestination={GoToDestination} givenCurrentIndex={currentCarouselIndex}
          givenSetShowLanguageSelectModal={setShowLanguageModal}
          givenSetShowOptOutModal={setShowOptOutModal}
          givenSetShowReportProblemModal={setShowReportProblemModal}
          givenSetShowSuggestFeatureModal={setShowSuggestFeatureModal}
          givenSetShowContactUsModal={setShowContactUsModal}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenDebugButtonPressedNumber={debugMobileButtonTapped}
          givenSetDebugButtonPressedNumber={setDebugMobileButtonTapped}
          givenGlobal_CurrentPageID={currentPageId}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentBookID={contentBook}
          givenScheduleNowDestination={state_currentTopRightButtonDestination}
        />
        <Object_Item_NavMenu
          givenShowNavMenu={showNavMenu}
          givenSetShowNavMenu={setShowNavMenu}
          isMobile={isMobileString}
          givenNavBarLabelStrings={navBarButtonLabels}
          givenNavBarDestinationStrings={navBarButtonDestinations}
          givenPagesVisited={pagesVisited}
          givenGoToDestination={GoToDestination}
          givenCurrentIndex={currentCarouselIndex}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_CurrentPageID={localPageID}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentBookID={contentBook} />

        <Object_Modal_LanguageSelect
          /* givenIsMobile={isMobileString} */
          givenShowLanguageSelectModal={showLanguageModal}
          givenSetShowLanguageSelectModal={setShowLanguageModal}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />
        <Object_Modal_SuggestFeature
          givenShowSuggestFeatureModal={showSuggestFeatureModal}
          givenSetShowSuggestFeatureModal={setShowSuggestFeatureModal}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentBookID={contentBook}

          givenSendFeedback={SendFirestoreData_Feedback}
        />
        <Object_Modal_ReportProblem
          givenShowReportProblemModal={showReportProblemModal}
          givenSetShowReportProblemModal={setShowReportProblemModal}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
          givenIncrementFirestoreVariable={incrementFirestoreVariableAggregate}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentPageID={localPageID}

          givenSendFeedback={SendFirestoreData_Feedback}


        />
        <Object_Modal_OptOut
          givenShowOptOutModal={showOptOutModal}
          givenSetShowOptOutModal={setShowOptOutModal}

          givenOptOutFunction={optOut}
          givenSendFeedback={SendFirestoreData_Feedback}


          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}
        />

        <Object_Modal_ContactUs

          givenModalItems={contactUsPageChildren}
          givenShowContactUsModal={showContactUsModal}
          givenSetShowContactUsModal={setShowContactUsModal}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={0}
          givenGlobal_PreviousCarouselIndex={0}

          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentBookID={contentBook}
          givenGlobal_CurrentPageID={currentPageId}
          givenSetLocalModalID={setLocalModalID}
        />


        {React.Children.map(modalPopupStateArray, (child) => {
          if (React.isValidElement(child) && child.type === Object_Item_Modal_Popup) {
            return React.cloneElement(child, {

              givenGlobal_isMobile: isMobileString,
              givenGlobal_CurrentCarouselIndex: currentCarouselIndex,
              givenGlobal_CurrentModalID: currentModalID,
              givenGlobal_TagsTrueArray: tagsAnsweredTrue,
              givenGlobal_TagsFalseArray: tagsAnsweredFalse,
              givenGlobal_CurrentBookID: contentBook,
            });
          }
          else { return child; }
        })}

        {React.Children.map(modalSlideStateArray, (child) => {
          if (child.type === Object_Item_Modal_Slide) {
            return React.cloneElement(child, {

              givenGlobal_isMobile: isMobileString,
              givenGlobal_CurrentCarouselIndex: currentCarouselIndex,
              givenGlobal_CurrentModalID: currentModalID,
              givenGlobal_TagsTrueArray: tagsAnsweredTrue,
              givenGlobal_TagsFalseArray: tagsAnsweredFalse,
              givenGlobal_CurrentBookID: contentBook,
            });
          }
          else { return child; }
        })}

        {React.Children.map(modalAlertStateArray, (child) => {
          if (child.type === Object_Item_Modal_Alert) {
            return React.cloneElement(child, {

              givenGlobal_isMobile: isMobileString,
              givenGlobal_CurrentCarouselIndex: currentCarouselIndex,
              givenGlobal_CurrentModalID: currentModalID,
              givenGlobal_TagsTrueArray: tagsAnsweredTrue,
              givenGlobal_TagsFalseArray: tagsAnsweredFalse,
              givenGlobal_CurrentBookID: contentBook,

            });
          }
          else { return child; }
        })}

        <Eddies_Custom_Carousel
          givenCarouselChildren={carouselPages}
          givenCarouselChildrenCount={carouselPages.length}
          givenCarouselOrientation={CarouselOrientation.Vertical}

          givenCurrentIndex={currentCarouselIndex}
          givenSetCurrentIndex={SetCurrentCarouselIndex}
          givenPreviousIndex={previousCarouselIndex}
          givenSetPreviousIndex={SetPreviousCarouselIndex}
          showDotsBool={true}
          showArrowsBool={false}
          givenGoToDestination={GoToDestination}
          shouldShowModalShadow={shouldShowModalShadow}

          givenShowNavMenu={showNavMenu}
          givenSetShowNavMenu={setShowNavMenu}

          givenLockNumber={pageLockNumber}

          givenPageBackgroundColor={state_currentPageColor}


          isMobile={isMobileString}
          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenGlobal_PrepDestination={prepDestination}

          givenGlobal_ScrubbedId={patientInfo_ScrubbedId}
          givenGlobal_PatientNameFirst={patientInfo_PatientNameFirst}
          givenGlobal_PatientNameLast={patientInfo_PatientNameLast}
          givenGlobal_PatientAnesthesiaType={patientInfo_PatientAnesthesiaType}
          givenGlobal_PatientSex={patientInfo_PatientSex}
          givenGlobal_PatientAge={patientInfo_PatientAge}
          givenGlobal_PatientDateEnteredPatientFlow={patientInfo_PatientDateEnteredPatientFlow}
          givenGlobal_PatientDateOfProcedure={patientInfo_PatientDateOfProcedure}
          givenGlobal_PatientHasSeenProcedureIntro={patientInfo_PatientHasSeenProcedureIntro}
          givenGlobal_PatientPreferedLanguage={patientInfo_PatientPreferedLanguage}
          givenGlobal_PatientProcedureLocation={patientInfo_PatientProcedureLocation}
          givenGlobal_PatientTimeOfProcedure={patientInfo_PatientTimeOfProcedure}
          givenGlobal_PatientProcedureID={patientInfo_PatientProcedureID}
          givenGlobal_PatientProcedureName={patientInfo_PatientProcedureName}
          givenGlobal_TagsTrueArray={patientInfo_PatientTagsTrueArray}
          givenGlobal_TagsFalseArray={patientInfo_PatientTagsFalseArray}
          givenGlobal_PatientOptOut={patientInfo_PatientOptOut}
          givenGlobal_MapToRead={selectionMapState}
          givenGlobal_LockNumber={localPageLockNumber}
          givenGlobal_CurrentPageID={localPageID}
          givenGlobal_CurrentModalID={localModalID}
          givenGlobal_CurrentBookID={contentBook}


        ></Eddies_Custom_Carousel>

        {isOverflowing ? <div className={`bottom-shadow${isMobileString}`}></div> : null}



        <DebugScreens
          givenURLVariable={urlVariable}
          givenShouldShowDebugScreen={shouldShowDebugScreen}
          givenTagsAnsweredTrue={tagsAnsweredTrue}
          givenTagsAnsweredFalse={tagsAnsweredFalse}
          givenCurrentModalID={currentModalID}
          givenCurrentPageID={currentPageId}
          givenCurrentCarouselIndex={currentCarouselIndex}
          givenPagesVisited={pagesVisited}
          givenLocalCurrentBookData={localCurrentPageData}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}
          givenLogsToPrint={debugMobileLogs}
          givenBuildNumber={BuildVersion}

          given_SimulateFirebaseError={SimulateFirebaseWriteError}
          given_SimulateMissingAssetError={SimluateMissingAssetError}

        />



        <DebugMobileScreen

          givenGlobal_isMobile={isMobileString}
          givenGlobal_CurrentCarouselIndex={currentCarouselIndex}
          givenGlobal_PreviousCarouselIndex={previousCarouselIndex}
          givenLogsToPrint={debugMobileLogs}
          givenDebugButtonPressedNumber={debugMobileButtonTapped}
          givenSetDebugButtonPressedNumber={setDebugMobileButtonTapped}



          givenURLVariable={urlVariable}
          givenShouldShowDebugScreen={shouldShowDebugScreen}
          givenTagsAnsweredTrue={tagsAnsweredTrue}
          givenTagsAnsweredFalse={tagsAnsweredFalse}
          givenCurrentModalID={currentModalID}
          givenCurrentPageID={currentPageId}
          givenCurrentCarouselIndex={currentCarouselIndex}
          givenPagesVisited={pagesVisited}
          givenLocalCurrentBookData={localCurrentPageData}
          givenCheckTagsToDetermineRendering={CheckTagsToDetermineRendering}

          givenPatientDataResetter={resetPatientData}
          givenBuildNumber={BuildVersion}

          given_SimulateFirebaseError={SimulateFirebaseWriteError}
          given_SimulateMissingAssetError={SimluateMissingAssetError}

        />
      </div>

    )
  }




  return (


    <AppContext.Provider value={contextValue}>{renderScreen()}</AppContext.Provider>

  )
}

export default App
