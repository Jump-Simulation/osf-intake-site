import React, { useEffect, useState } from 'react';
import "../../CSS/Page_Component_Styles/Holder_Buttons_Selection_Multi.css"
import Object_Button_Selection_Multi from './Object_Button_Selection_Multi';
import { BaseCarouselChildProps } from "../../BaseProps";
interface Holder_Buttons_Selection_Multi_Props extends BaseCarouselChildProps {
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


export default function Holder_Buttons_Selection_Multi(props: Holder_Buttons_Selection_Multi_Props) {


    function HandleChecked() {

    }

    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        setShouldRender(props.givenCheckTagsToDetermineRendering(
            props.givenTagInclusion,
            props.givenTagExclusion,
            "holder buttons selection multi",
            "holder buttons selection multi",
            props.givenGlobal_ShouldExcludeByDefault));

    }, [props.givenGlobal_TagsTrueArray, props.givenGlobal_TagsFalseArray])




    function Render_Holder_Buttons_Selection_Multi() {
        return (
            <div className={`multi-select-button-holder${props.givenGlobal_isMobile}`}>
                {props.givenButtonTexts.map((text, index) => (
                    <Object_Button_Selection_Multi
                        key={index}
                        isMobile={props.givenGlobal_isMobile}
                        givenButtonText={text}
                        checked={false}
                        HandleChecked={HandleChecked}
                        isDisabled={props.givenAreDisabled}
                        givenLockNumber={props.givenLockNumber}
                        givenSetLockNumber={props.givenSetLockNumber}
                        givenAddToSelectionMap={props.givenAddToSelectionMap}
                        givenRemoveFromSelectionMap={props.givenRemoveFromSelectionMap}
                        givenAddressToWrite={props.givenAddressToWrite}

                        givenGlobal_isMobile={props.givenGlobal_isMobile}
                        givenGlobal_CurrentCarouselIndex={props.givenGlobal_CurrentCarouselIndex}
                        givenGlobal_PreviousCarouselIndex={props.givenGlobal_PreviousCarouselIndex}
                        givenGlobal_LockNumber={props.givenGlobal_LockNumber}
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
            Render_Holder_Buttons_Selection_Multi()
        )
    }
    else { return (<></>) }



}