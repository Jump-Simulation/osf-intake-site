import { useEffect, useState } from "react";
import { PageObject } from "../types";
import { Button } from "react-bootstrap";
import { useAppContext } from "../App";

interface DebugScreens_Props {
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

    givenLogsToPrint: string[];

    givenBuildNumber: string;

    given_SimulateFirebaseError(givenMessage: string, givenLocation: string);

    given_SimulateMissingAssetError(givenMessage: string, givenLocation: string);

}



export default function DebugScreens(props: DebugScreens_Props) {

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

    function renderDebugScreens() {
        if (props.givenURLVariable.includes("test-myvisit") || props.givenURLVariable.includes("localhost")) {
            if (props.givenShouldShowDebugScreen === true) {
                return (
                    <>
                        <div style={{
                            position: "absolute",
                            left: "-100%", top: "0%",
                            color: "white", height:
                                "100%", width: "80%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column",
                            padding: "15px",


                        }}>

                            <div style={{
                                backgroundColor: "darkgreen",
                                color: "white",
                                height: "60%",
                                width: "100%",
                                display: "flex",

                                justifyContent: "start",
                                alignItems: "start",
                                padding: "15px",
                                overflowY: "auto",
                                textAlign: "start",
                                textWrap: "pretty",
                                flexDirection: "column",
                                gap: "15px",

                            }}><div>Error Sim Buttons</div>
                                <Button onClick={() => {

                                    // props.given_SimulateFirebaseError("This is a firebase error test from the desktop debug screen", "DebugScreens @ line 94")
                                    given_Context.SendErrorReport("Firebase Write Error", "This is a firebase error test from the mobile debug screen", "DebugMobileScreen @ line 97")

                                }}>
                                    Simulate Firebase Error
                                </Button>
                                <Button onClick={() => {
                                    // props.given_SimulateFirebaseError("This is a Missing Asset error test from the desktop debug screen", "DebugScreens @ line 99")
                                    given_Context.SendErrorReport("Missing Asset Error", "This is a Missing Asset error test from the mobile debug screen", "DebugMobileScreen @ line 107")

                                }}>
                                    Simulate Missing Asset Error
                                </Button>

                                {/*      <div>
                                    {props.givenTagsAnsweredTrue.split("_").filter(Boolean).map((part, index) => (
                                        <div key={index}>{part + "_"}</div>
                                    ))}
                                </div> */}


                            </div>

                            {/*        <div style={{
                                backgroundColor: "darkred",
                                color: "white",
                                height: "30%",
                                width: "100%",
                                display: "flex",
                                justifyContent: "start",
                                alignItems: "start",
                                padding: "15px",
                                overflowY: "auto",
                                textAlign: "start",
                                textWrap: "pretty",
                                flexDirection: "column",
                            }}>Tags False:
                                <div>
                                    {props.givenTagsAnsweredFalse.split("_").filter(Boolean).map((part, index) => (
                                        <div key={index}>{part + "_"}</div>
                                    ))}
                                </div>
                            </div> */}


                            <div style={{
                                backgroundColor: "darkgoldenrod",
                                color: "white",
                                height: "40%",
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "start",
                                alignItems: "start",
                                padding: "15px",
                                overflow: "auto",
                                fontSize: "var(--spacing-lg-mobile)",
                                fontWeight: "bold",
                            }}>

                                Console Log:

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


                        </div >

                        <div style={{
                            backgroundColor: "darkblue",
                            position: "absolute",
                            right: "-100%", top: "0%",
                            color: "white", height:
                                "100%", width: "80%",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "start",
                            flexDirection: "column",
                            padding: "15px",
                            textAlign: "start",
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
                    </>
                )
            }
            else {
                return (<></>)
            }

        }
        else { return (<></>) }


    }




    return (<>{renderDebugScreens()}</>)

}