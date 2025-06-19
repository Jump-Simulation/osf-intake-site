
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../../CSS/Page_Component_Styles/Object_Item_NavOptionsMenu.css"
import "../../CSS/Page_Component_Styles/Object_Item_NavMenu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBug, faChevronRight, faCross, faGear, faGlobe, faHouse, faPersonThroughWindow, faPhone, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faFlag as faFlagRegular } from "@fortawesome/free-regular-svg-icons";

import { faLightbulb as faLightbulbRegular } from "@fortawesome/free-regular-svg-icons";

import { Row } from "react-bootstrap";
import Object_Item_Text from "./Object_Item_Text";

import { BaseCarouselChildProps } from "../../BaseProps";
import { useState } from "react";




interface Object_Item_NavOptionsMenu_Props extends BaseCarouselChildProps {
    givenShowNavOptionsMenu: boolean;
    givenSetShowNavOptionsMenu(givenBool: boolean): void;

    givenShouldShowDebugScreen: boolean;
    givenSetShouldShowDebugScreen(givenBool: boolean): void;
    givenURLBar: string;

    givenGoToDestination(givenString: string): void;
    givenCurrentIndex: number;

    givenSetShowLanguageSelectModal(givenBool: boolean): void;
    givenSetShowReportProblemModal(givenBool: boolean): void;
    givenSetShowSuggestFeatureModal(givenBool: boolean): void;
    givenSetShowOptOutModal(givenBool: boolean): void;
    givenSetShowContactUsModal(givenBool: boolean): void;

    givenSetCurrentModalID(givenID: string): void;



    givenDebugButtonPressedNumber: number;
    givenSetDebugButtonPressedNumber(givenNumber: number): void;

    givenScheduleNowDestination: string;

}

export default function Object_Item_NavOptionsMenu(props: Object_Item_NavOptionsMenu_Props) {




    function RenderHideDebugButton() {
        if (props.givenURLBar.includes("localhost") || props.givenURLBar.includes("test-myvisit")) {
            if (props.givenShouldShowDebugScreen === true) {
                return (
                    <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                        onClick={() => {
                            props.givenSetShouldShowDebugScreen(false)
                        }}>
                        <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                            <FontAwesomeIcon
                                icon={faBug as IconProp}
                                className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                            />
                            Hide Debug Screens
                        </div>
                        <FontAwesomeIcon
                            icon={faXmark}
                            className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                        />
                    </div>)
            }
        }
    }

    function RenderNavOptionsMenu() {

        if (props.givenShowNavOptionsMenu) {
            /*   console.log("TRYING TO SHOW NAV MENU!!") */
            return (
                <div className={`nav-options-menu-container${props.givenGlobal_isMobile}`}
                    onClick={() => { props.givenSetShowNavOptionsMenu(false) }}>

                    <div className={`nav-options-menu-parent${props.givenGlobal_isMobile}`}
                        onClick={(event) => event.stopPropagation()}>

                        <div className={`nav-options-menu-top-row${props.givenGlobal_isMobile}`}>

                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Object_Item_Text
                                    givenTextValue={"Menu"}
                                    givenTextType={"h2-navigation"}
                                    givenTextAlignment="start"
                                    givenCheckTagsToDetermineRendering={function (givenTagInclusion: string, givenTagExclusion: string): boolean {
                                        return true;
                                    }}
                                    givenTextColor={"var(--color-on-surface-variant)"}
                                    givenGlobal_isMobile={props.givenGlobal_isMobile}
                                    givenGlobal_CurrentCarouselIndex={0}
                                    givenGlobal_PreviousCarouselIndex={0} />
                            </div>


                            <div className={`nav-options-menu-close-button${props.givenGlobal_isMobile}`} onClick={() => { props.givenSetShowNavOptionsMenu(false); }}>
                                <FontAwesomeIcon
                                    icon={faXmark as IconProp}
                                    className={`nav-options-menu-close-button-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>

                        </div>


                        <div className={`nav-options-menu-button-holder${props.givenGlobal_isMobile}`}>

                            {/*      <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenSetShowLanguageSelectModal(true),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}
                            >
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <FontAwesomeIcon
                                        icon={faGlobe as IconProp}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    />
                                    Language

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>
 */}

                            {/*          <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenSetCurrentModalID("Modal_ContactUs"),
                                        props.givenSetShowContactUsModal(true),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <FontAwesomeIcon
                                        icon={faPhone as IconProp}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    />
                                    Contact Us

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>
 */}

                            <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenGoToDestination(props.givenScheduleNowDestination),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>


                                    {/*  <FontAwesomeIcon
                                        icon={faChevronRight}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    /> */}
                                    <img

                                        src={`/assets/schedule-now-icon-fh.png`}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    >

                                    </img>

                                    Schedule Now

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />

                            </div>


                            <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenGoToDestination("page-fhHomeChapter"),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <img

                                        src={`/assets/home-icon-fh.png`}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    >

                                    </img>
                                    Go Home

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>




                            <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenSetShowReportProblemModal(true),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <img
                                        src={`/assets/red-flag-icon-fh.png`}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    >

                                    </img>
                                    Report a Problem

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>


                            <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenSetShowSuggestFeatureModal(true),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <img
                                        src={`/assets/light-bulb-icon-fh.png`}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    >
                                    </img>
                                    Suggest a Feature

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>

                            {/*     <div className={`nav-options-menu-optionButton-parent${props.givenGlobal_isMobile}`}
                                onClick={() => {
                                    props.givenSetShowOptOutModal(true),
                                        props.givenSetShowNavOptionsMenu(false);
                                }}>
                                <div className={`nav-options-menu-optionButton-child${props.givenGlobal_isMobile}`}>

                                    <img
                                        src={`/assets/opt-out-icon-myvisit.png`}
                                        className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                    >
                                    </img>
                                    Opt-Out

                                </div>
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className={`nav-options-menu-optionButton-icon${props.givenGlobal_isMobile}`}
                                />
                            </div> */}

                            {RenderHideDebugButton()}


                        </div>

                        <div
                            onClick={() => {
                                props.givenSetDebugButtonPressedNumber(props.givenDebugButtonPressedNumber + 1)
                            }}
                            style={{
                                height: "var(--spacing-xl-mobile)",
                                width: "var(--spacing-xl-mobile)",
                                backgroundColor: "transparent",
                                position: "absolute",
                                left: "0px",
                                bottom: "0px",
                                marginTop: "auto"
                            }}></div>




                    </div>
                </div>



            )

        }
        else {
            return (<>
            </>)
        }

    }


    return (RenderNavOptionsMenu())

}