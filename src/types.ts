import { Timestamp } from "firebase/firestore";

export interface BookObject {
  bookId: string;
  bookAuthors?: string[];
  bookVersion?: string;
  chapterObjects: ChapterObject[];
}
export interface ChapterObject {
  topRightNavButtonDestination?: string;
  topRightNavButtonColor?: string;
  topRightNavButtonColorHover?: string;
  topRightNavButtonColorActive?: string;

  progressBarVisible?: boolean;
  progressBarColor?: string;
  progressBarColorBackground?: string;

  progressBarLength?: number;

  chapterBackgroundColor?: string;

  chapterID: string;
  pageObjects: PageObject[];
}

export interface ContactUsObject {
  id: string;
  hasLock: boolean;
  pageItems: PageItem[];
  BottomButtonHolderObject?: BottomButtonHolderObject;
}

type TextAlignOptions =
  | "left"
  | "right"
  | "center"
  | "justify"
  | "start"
  | "end"
  | "match-parent";

export interface PageObject {
  id: string;
  navTitle: string;
  keywords: string;
  authors: string;
  lastUpdated: string;
  hasVariables: boolean;
  hasLock: boolean;
  pageBackgroundColor?: string;
  pageItems: PageItem[];
  modalObjects?: ModalObject[];
  BottomButtonHolderObject?: BottomButtonHolderObject;

  chapterParent?: string;
  tagsInclude?: string;
  tagsExclude?: string;
  excludeByDefault?: boolean;
  dataToWrite?: string;

  index?: number;
}

export interface PageItem {
  renderOrder?: number;
  componentType: string;

  animationName?: string;
  buttonDisabled?: boolean;
  buttonsAllDisabled?: boolean;
  buttonHasIcon?: boolean; // TO EDDIE - Did you have this commented out for a reason? I un-commented to stop errors on all .ts files. - from Maddox
  buttonItemsList?: string[];
  buttonStyle?: string;
  buttonType?: string;
  destination?: string;
  fileName?: string;
  selectMultiple?: boolean;
  sizeOfPageTaken?: string;
  textType?: string;
  textValue?: string;
  textWidthOverride?: string;
  textAlignment?: TextAlignOptions;
  pageOrientation?: string;
  hasDropShadow?: boolean;

  tagsToWrite?: string;
  dataToWrite?: string;

  dataToWriteSomethingSelected?: string;
  dataToWriteNothingSelected?: string;


  accountCompleteText?: string;
  accountCompleteDestination?: string;

  accountIncompleteDestination?: string;
  accountIncompleteText?: string;



  tagsInclude?: string;
  tagsExclude?: string;

  iconVisible?: boolean;
  iconHorizontalPlacement?: string;
  iconFileName?: string;

  placeHolderText?: string;
  questionID?: string;
  minWordCount?: string;
  maxWordCount?: string;

  colorText?: string;
  colorBackground?: string;
  pageSectionItems?: PageItem[];
  boxShadow?: string;
  width?: string;
  marginSides?: string;
  gap?: string;

  externalLink?: string;

  variablePhoneNumber?: string;
  hardcodedPhoneNumber?: string;
  writeToAddress?: string;
  readFromAddress?: string[];

  imageHeight?: string;
  imageHeightMax?: string;
  imageHeightMin?: string;

  imageWidthMin?: string;
  imageWidthMax?: string;
  imageWidth?: string;

  imagePosition?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  imageTop?: string;
  imageBottom?: string;
  imageLeft?: string;
  imageRight?: string;
  imageOpacity?: string;

  imageZPosition?: string;

  newTab?: boolean;

  tagsToWriteSomethingSelected?: string;
  tagsToWriteNothingSelected?: string;
  buttonChildren?: PageItem[];
  buttonHolderAnchoredBottom?: boolean;

  //button-selection-confirmation variables
  buttonStyleNoneSelected?: string;
  buttonStyleSomethingSelected?: string;
  textValueNoneSelected?: string;
  textValueSomethingSelected?: string;
  destinationNoneSelected?: string;
  destinationSomethingSelected?: string;
  excludeByDefault?: boolean;

  colorOverrideDefault?: string;
  colorOverrideHover?: string;
  colorOverrideActive?: string;

  colorOverrideBorderDefault?: string;
  colorOverrideBorderHover?: string;
  colorOverrideBorderActive?: string;

  colorOverrideTextDefault?: string;
  colorOverrideTextHover?: string;
  colorOverrideTextActive?: string;


  iconSizeOverride?: string;
  iconSizeOverridePixels?: string;
  textIconGoToDestination?: string;


  videoSource?: string;
  videoEventTriggerTime?: number; // in seconds


}

export interface ModalObject {
  modalID: string;
  modalType: string;
  modalItems: PageItem[];
  alertDelayTime?: number;
  alertIsRepeatable?: boolean;

  tagsInclude?: string;
  tagsExclude?: string;

  dismissEnabled?: boolean;
  dismissDestination?: string;
  dismissTimer?: number;
  excludeByDefault?: boolean;

  overrideColorBackground?: string;
  overrideHeightMax?: string;
  overrideBackdropFilter?: string;
  overrideModalPlacementRight?: string;
  overrideModalPlacementLeft?: string;
  overrideModalPlacementTop?: string;
  overrideModalPlacementBottom?: string;
  overrideModalShowX?: boolean;
}

export interface BottomButtonHolderObject {
  bottomButtonHolderID?: string;
  bottomButtonHolderItems: PageItem[];
}

export interface SubmissionObject {

  dateCreated: Timestamp;
  dateUpdated: Timestamp;
  deviceId: string;
  submissionId: string;

  email: string;

  q_problem_solving: string;

  q_solution_category: string;

  q_built_tested: string;



  q_time_worked: string;

  q_year_from_now: string;

  q_how_involved: string;

  q_personally_connect: string;

  q_when_where: string;



  q_search_for: string;

  q_describe_idea: string;

  q_idea_name: string;

  q_user_invention: string;

  q_buyer_invention: string;

}
