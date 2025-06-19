
import "react-sliding-pane/dist/react-sliding-pane.css";
import "../../CSS/Page_Component_Styles/Object_Item_NavMenu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Row } from "react-bootstrap";
import Object_Item_Text from "./Object_Item_Text";
import Object_Button_NavBarDestination from "./Object_Button_NavBarDestination";
import Object_Button_ExternalLink from "./Object_Button_ExternalLink";
import { BaseCarouselChildProps } from "../../BaseProps";




interface Object_Item_NavMenu_Props extends BaseCarouselChildProps {
    givenShowNavMenu: boolean;
    givenSetShowNavMenu(givenBool: boolean): void;
    isMobile: string;

    /*   parentRef: React.RefObject<HTMLDivElement>; */

    givenNavBarLabelStrings: string[];
    givenNavBarDestinationStrings: string[];
    givenGoToDestination(givenString: string): void;
    givenPagesVisited: string[];

    givenCurrentIndex: number;

}

export default function Object_Item_NavMenu(props: Object_Item_NavMenu_Props) {



    function RenderNavMenu() {

        if (props.givenShowNavMenu) {
            /*   console.log("TRYING TO SHOW NAV MENU!!") */
            /*   console.log("currentPageID FROM NAV MENU: " + props.givenGlobal_CurrentPageID) */
            return (
                <div className={`nav-menu-container${props.givenGlobal_isMobile}`}
                    onClick={() => { props.givenSetShowNavMenu(false) }}>

                    <div className={`nav-menu-parent${props.givenGlobal_isMobile}`}
                        onClick={(event) => event.stopPropagation()}>

                        <div className={`nav-menu-top-row${props.givenGlobal_isMobile}`}>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}>
                                <Object_Item_Text
                                    givenTextValue={"Navigation"}
                                    givenTextType={"h2-navigation"}
                                    givenTextAlignment={"start"}
                                    givenTagsTrueArray={""}
                                    givenTagsFalseArray={""}
                                    givenTagInclusion={""}
                                    givenTagExclusion={""}
                                    givenCheckTagsToDetermineRendering={function (givenTagInclusion: string, givenTagExclusion: string): boolean {
                                        return true;
                                    }}
                                    givenTextColor={""}
                                    givenTextContainerColor={""}
                                    givenGlobal_isMobile={props.givenGlobal_isMobile}
                                    givenGlobal_CurrentCarouselIndex={props.givenGlobal_CurrentCarouselIndex}
                                    givenGlobal_PreviousCarouselIndex={0} />
                            </div>


                            <div className={`nav-menu-close-button${props.givenGlobal_isMobile}`} onClick={() => { props.givenSetShowNavMenu(false); }}>
                                <FontAwesomeIcon
                                    icon={faXmark as IconProp}
                                    className={`nav-menu-close-button-icon${props.givenGlobal_isMobile}`}
                                />
                            </div>

                        </div>


                        <div className={`nav-menu-button-holder${props.givenGlobal_isMobile}`}>
                            {props.givenNavBarLabelStrings.map((label, index) => {

                                if (label !== "null") {
                                    return (
                                        <Object_Button_NavBarDestination
                                            key={index} // Add a key to avoid warnings in lists
                                            givenDestination={props.givenNavBarDestinationStrings[index]}
                                            givenTextValue={label}
                                            givenGoToDestination={props.givenGoToDestination}
                                            givenSetShowNavMenu={props.givenSetShowNavMenu}
                                            givenPagesVisited={props.givenPagesVisited}
                                            isMobile={props.isMobile}
                                            givenIndex={index}
                                            /* givenCurrentIndex={props.givenCurrentIndex} */

                                            givenGlobal_isMobile={props.givenGlobal_isMobile}
                                            givenGlobal_CurrentCarouselIndex={props.givenGlobal_CurrentCarouselIndex}
                                            givenGlobal_PreviousCarouselIndex={0}
                                            givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID} />
                                    );
                                }


                            })}



                        </div>
                        <div className={`nav-menu-bottom-bar${props.givenGlobal_isMobile}`}>
                            <div className="nav-menu-privacy-policy-holder">
                                <Object_Button_ExternalLink
                                    givenLinkText={"https://x.osfhealthcare.org/patients-visitors/privacy-policy"}
                                    isMobile={props.givenGlobal_isMobile}
                                    givenIconBool={false}
                                    givenButtonText={"Privacy Policy"}
                                    givenButtonStyle={"tertiary"}
                                    givenIsDisabled={false}
                                    givenTagsTrueArray={""}
                                    givenTagsFalseArray={""}
                                    givenTagInclusion={""}
                                    givenTagExclusion={""}
                                    givenCheckTagsToDetermineRendering={function (givenTagInclusion: string, givenTagExclusion: string): boolean {
                                        return true;

                                    }}
                                    givenNewTab={false}
                                    givenGlobal_isMobile={props.givenGlobal_isMobile}
                                    givenGlobal_CurrentCarouselIndex={0}
                                    givenGlobal_PreviousCarouselIndex={0}
                                    givenGlobal_LockNumber={0} />
                            </div>

                            <img className={`nav-menu-osf-logo${props.givenGlobal_isMobile}`} src="/assets/osf-logo-franciscan-brown.png"></img>

                        </div>



                    </div>
                </div>



            )

        }
        else {
            return (<>
            </>)
        }

    }


    return (RenderNavMenu())

}