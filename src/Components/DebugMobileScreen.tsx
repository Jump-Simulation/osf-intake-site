import { useEffect, useState } from "react";
import { BaseCarouselChildProps } from "../BaseProps";
import { PageObject } from "../types";
import { AppContext, useAppContext } from "../App";
import { Button } from "react-bootstrap";


interface DebugMobileScreen_Props extends BaseCarouselChildProps {



    givenLogsToPrint: string[];
    givenDebugButtonPressedNumber: number;
    givenSetDebugButtonPressedNumber(givenNumber: number): void;





    givenURLVariable: string;
    givenShouldShowDebugScreen: boolean;
    givenTagsAnsweredTrue: string;
    givenTagsAnsweredFalse: string;
    givenCurrentPageID: string;
    givenCurrentModalID: string;
    givenCurrentCarouselIndex: number;
    givenLocalCurrentBookData: PageObject[];
    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName?: string, givenObjectType?: string, givenObjectExcludeByDefault?: boolean): boolean;

    givenPagesVisited: string[];

    givenPatientDataResetter(): Promise<void>;

    givenBuildNumber: string;

    given_SimulateFirebaseError(givenMessage: string, givenLocation: string);

    given_SimulateMissingAssetError(givenMessage: string, givenLocation: string);

}

export default function DebugMobileScreen(props: DebugMobileScreen_Props) {

    const given_Context = useAppContext();

    const [pagesToDisplay, setPagesToDisplay] = useState<PageObject[]>(props.givenLocalCurrentBookData);


    useEffect(() => {

        setPagesToDisplay(props.givenLocalCurrentBookData.filter((Page, index) => {
            var shouldInclude = true;
            if ((props.givenCheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
            ) === true)) {
                shouldInclude = true;
            }
            else if ((props.givenCheckTagsToDetermineRendering(Page.tagsInclude, Page.tagsExclude, Page.id, "", Page.excludeByDefault
            ) === false)) {
                shouldInclude = false;
            }

            if (!shouldInclude) {

            }

            return shouldInclude;
        }))

    }, [props.givenTagsAnsweredTrue, props.givenTagsAnsweredFalse])

    function RenderDebugMobileScreen() {

        if (props.givenDebugButtonPressedNumber >= 5) {
            return (<div
                style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    backgroundColor: "darkorchid",
                    color: "black", zIndex: "999999999",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0px 0px 35px 0px black"

                }}>
                <div
                    style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "10%",
                    }}>
                    <div
                        onClick={() => {
                            props.givenPatientDataResetter();
                        }}
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "10px",
                            marginRight: "10px",
                            /*  height: "10%", */
                            width: "40%",
                            backgroundColor: "darkblue",
                            color: "white",
                            zIndex: "99999999999",
                            fontSize: "var(--spacing-lg-mobile)",
                            fontWeight: "bold",
                            padding: "var(--spacing-sm-mobile)",
                            borderRadius: "100px",
                            boxShadow: "0px 0px 10px 1px black",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>Reset Patient Data</div>
                    <div
                        onClick={() => {
                            props.givenSetDebugButtonPressedNumber(0);
                        }}
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginLeft: "10px",
                            marginRight: "10px",
                            /*     height: "10%", */
                            width: "40%",
                            backgroundColor: "darkred",
                            color: "white",
                            zIndex: "99999999999",
                            fontSize: "var(--spacing-lg-mobile)",
                            fontWeight: "bold",
                            padding: "var(--spacing-sm-mobile)",
                            borderRadius: "100px",
                            boxShadow: "0px 0px 10px 1px black",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>  Hide Debug Menu Button</div>

                </div>


                <div style={{
                    backgroundColor: "darkgreen",
                    color: "white",
                    height: "30%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "15px",
                    overflow: "auto",
                    gap: "15px",
                }}><div>Error Sim Buttons</div>{/*  {props.givenTagsAnsweredTrue} */}
                    <Button onClick={() => {
                        //props.given_SimulateFirebaseError("This is a firebase error test from the mobile debug screen", "DebugMobileScreen @ line 162");
                        given_Context.SendErrorReport("Firebase Write Error", "This is a firebase error test from the mobile debug screen", "DebugMobileScreen @ line 164")
                    }}>
                        Simulate Firebase Error
                    </Button>
                    <Button onClick={() => {
                        // props.given_SimulateFirebaseError("This is a Missing Asset error test from the mobile debug screen", "DebugMobileScreen @ line 167")
                        given_Context.SendErrorReport("Missing Asset Error", "This is a Missing Asset error test from the mobile debug screen", "DebugMobileScreen @ line 170")
                    }}>
                        Simulate Missing Asset Error
                    </Button>
                </div>

                {/*   <div style={{
                    backgroundColor: "darkred",
                    color: "white",
                    height: "15%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    padding: "15px",
                    overflow: "auto",
                }}>Tags False: 
                    <div>
                        {props.givenTagsAnsweredFalse.split("_").filter(Boolean).map((part, index) => (
                            <div key={index}>{part + "_"}</div>
                        ))}
                    </div>
                </div>
 */}

                <div style={{
                    backgroundColor: "darkblue",


                    color: "white",
                    height: "40%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: "column",
                    padding: "15px",
                    textAlign: "start",
                    overflow: "auto",
                }}>
                    Current Build: {props.givenBuildNumber}
                    <br></br>
                    Current Page Id: {props.givenCurrentPageID}
                    <br></br>
                    Current Modal Id: {props.givenCurrentModalID}
                    <br></br>
                    Current Carousel Index:   {props.givenCurrentCarouselIndex}
                    <br></br>

                    <br />

                    Pages Visited: {props.givenPagesVisited.join(" || ")}

                    <br></br>
                    <br></br>
                    <br></br>
                    Current Pages:
                    {
                        pagesToDisplay.map((filteredPage, mapIndex) => (
                            <div key={filteredPage.id} style={{ textAlign: "start" }}>
                                {filteredPage.id} at Index {mapIndex}
                            </div>
                        ))
                    }




                </div>

                <div

                    style={{

                        height: "20%",
                        width: "100%",
                        backgroundColor: "darkgoldenrod",
                        color: "white",
                        zIndex: "99999999999",
                        fontSize: "var(--spacing-2xl-mobile)",
                        fontWeight: "bold",
                        overflow: "auto",
                        padding: "var(--spacing-md-mobile)"
                    }}>
                    Console Log

                    <br></br>

                    <div style={{
                        textAlign: "start", fontSize: "var(--spacing-lg-mobile)",
                        fontWeight: "normal",
                    }}>
                        {props.givenLogsToPrint.map((log, index) => (
                            <div key={index}>
                                <div>{log}</div>
                                <br />
                            </div>


                        ))}
                    </div>

                </div>


            </div>)
        }
        else {
            return (<></>)
        }

    }


    return (<>
        {RenderDebugMobileScreen()}
    </>)

}