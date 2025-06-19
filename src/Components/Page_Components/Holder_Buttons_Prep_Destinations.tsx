import React, { useEffect, useState } from 'react';
import "../../CSS/Page_Component_Styles/Holder_Buttons_Prep_Destinations.css"
import Object_Button_Prep_Destination from './Object_Button_Prep_Destination';
import { BaseCarouselChildProps } from "../../BaseProps";

interface Holder_Buttons_Prep_Destinations_Props extends BaseCarouselChildProps {

    isMobile: string;
    givenButtonTexts: string[];
    givenLockNumber: number;
    givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;

    givenSetPrepDestination(givenString: string): void;

    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;



    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

    /*     givenAddToSelectionMap(key: string, newValue: string): void;
        givenRemoveFromSelectionMap(key: string, valueToRemove: string): void; */
}


export default function Holder_Buttons_Prep_Destinations(props: Holder_Buttons_Prep_Destinations_Props) {

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion,
            props.givenTagExclusion,
            "holder buttons prep destination",
            "holder buttons prep destination",
            props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenTagsTrueArray, props.givenTagsFalseArray])



    const [currentHolderIndex, setCurrentHolderIndex] = useState(-1);

    function Render_Holder_Buttons_Selection_Multi() {
        return (
            <div className={`holder-buttons-prep-destinations${props.givenGlobal_isMobile}`}>
                {props.givenButtonTexts.map((text, index) => {

                    // Split the text based on the underscore
                    var splitText = text.split('_');

                    // Store the part before the underscore
                    var tempButtonText = splitText[0];

                    // Store the part after the underscore
                    var tempValueToWrite = splitText[1];
                    /*   console.log("Inside of key: " + tempButtonText + " we found a temp value to write: " + tempValueToWrite) */



                    return (
                        <Object_Button_Prep_Destination
                            isMobile={props.givenGlobal_isMobile}
                            key={index}
                            givenButtonText={tempButtonText} // Pass the part before the underscore
                            givenIndex={index}
                            givenCurrentIndex={currentHolderIndex}
                            setGivenCurrentIndex={setCurrentHolderIndex}
                            givenLockNumber={props.givenLockNumber}
                            givenSetLockNumber={props.givenSetLockNumber}

                            /*     givenAddToSelectionMap={props.givenAddToSelectionMap}
                                givenRemoveFromSelectionMap={props.givenRemoveFromSelectionMap} */
                            givenSetPrepDestination={props.givenSetPrepDestination}
                            givenValueToWrite={tempValueToWrite}

                            givenGlobal_isMobile={props.givenGlobal_isMobile}
                            givenGlobal_CurrentCarouselIndex={0}
                            givenGlobal_PreviousCarouselIndex={0}
                            givenGlobal_LockNumber={props.givenGlobal_LockNumber}

                            givenGlobal_MapToRead={props.givenGlobal_MapToRead}
                            givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
                            givenGlobal_CurrentModalID={props.givenGlobal_CurrentModalID}
                            givenGlobal_CurrentBookID={props.givenGlobal_CurrentBookID}
                        />
                    );
                })}
            </div>
        );
    }


    if (shouldRender) {
        return (
            Render_Holder_Buttons_Selection_Multi()
        )
    }
    else { return (<></>) }


}