



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

type TextAlignOptions = "left" | "right" | "center" | "justify" | "start" | "end" | "match-parent";

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
    textAlignment?: TextAlignOptions;
    pageOrientation?: string;
    hasDropShadow?: boolean;

    tagsToWrite?: string;
    dataToWrite?: string;

    dataToWriteSomethingSelected?: string;
    dataToWriteNothingSelected?: string;

    tagsInclude?: string;
    tagsExclude?: string;


    iconVisible?: boolean;
    iconHorizontalPlacement?: string;
    iconFileName?: string;


    colorText?: string
    colorBackground?: string;
    pageSectionItems?: PageItem[];
    boxShadow?: string;
    width?: string;
    marginSides?: string;
    gap?: string;


    // Added By Maddox vvvv

    externalLink?: string;

    variablePhoneNumber?: string;
    hardcodedPhoneNumber?: string;
    writeToAddress?: string;
    readFromAddress?: string[];
    // Added By Maddox ^^^^

    newTab?: boolean;

    tagsToWriteSomethingSelected?: string;
    tagsToWriteNothingSelected?: string;
    buttonChildren?: PageItem[]
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
    iconSizeOverride?: string;

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
}

export interface BottomButtonHolderObject {
    bottomButtonHolderID?: string;
    bottomButtonHolderItems: PageItem[];
}