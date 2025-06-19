import React, { useEffect, useState } from 'react';
import Object_Button_Selection_Single from './Object_Button_Selection_Single';

import "../../CSS/Page_Component_Styles/Holder_Buttons_Selection_Single.css";
import { BaseCarouselChildProps } from "../../BaseProps";

interface Holder_Buttons_Selection_Single_Props extends BaseCarouselChildProps {
    isMobile: string;

    givenButtonTexts: string[];
    givenAreDisabled: boolean;

    givenLockNumber: number;
    givenAddressToWrite: string;
    givenSetLockNumber(givenNumber: number, givenFunctionName: string): void;
    givenAddToSelectionMap(key: string, newValue: string): void;
    givenRemoveFromSelectionMap(key: string, valueToRemove: string): void;


    givenTagsTrueArray: string;
    givenTagsFalseArray: string;

    givenTagInclusion: string;
    givenTagExclusion: string;



    givenCheckTagsToDetermineRendering(givenTagInclusion: string, givenTagExclusion: string,
        givenObjectName: string, givenObjectType: string, givenObjectExcludeByDefault: boolean): boolean;

}


export default function Holder_Buttons_Selection_Single(props: Holder_Buttons_Selection_Single_Props) {


    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion, props.givenTagExclusion,
            "holder buttons selection single",
            "holder buttons selection single",
            props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenGlobal_TagsFalseArray, props.givenGlobal_TagsTrueArray])




    const [currentHolderIndex, setCurrentHolderIndex] = useState(-1);



    function Render_Holder_Buttons_Selection_Single() {
        return (
            <div className={`single-select-button-holder${props.givenGlobal_isMobile}`}>
                {props.givenButtonTexts.map((text, index) => (
                    <Object_Button_Selection_Single
                        key={index}
                        isMobile={props.givenGlobal_isMobile}
                        givenButtonText={text}
                        givenIndex={index}
                        givenCurrentIndex={currentHolderIndex}
                        setGivenCurrentIndex={setCurrentHolderIndex}
                        isDisabled={props.givenAreDisabled}

                        givenLockNumber={props.givenLockNumber}
                        givenSetLockNumber={props.givenSetLockNumber}

                        givenAddToSelectionMap={props.givenAddToSelectionMap}
                        givenRemoveFromSelectionMap={props.givenRemoveFromSelectionMap}
                        givenAddressToWrite={props.givenAddressToWrite}
                        givenGlobal_isMobile={props.givenGlobal_isMobile}
                        givenGlobal_LockNumber={props.givenGlobal_LockNumber}
                        givenGlobal_CurrentCarouselIndex={0}
                        givenGlobal_PreviousCarouselIndex={0}
                        givenGlobal_MapToRead={props.givenGlobal_MapToRead}
                        givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
                        givenGlobal_CurrentModalID={props.givenGlobal_CurrentModalID}
                        givenGlobal_CurrentBookID={props.givenGlobal_CurrentBookID}
                    />


                ))}
            </div>
        )
    }
    if (shouldRender) {
        return (
            Render_Holder_Buttons_Selection_Single()
        )
    }
    else { return (<></>) }


}