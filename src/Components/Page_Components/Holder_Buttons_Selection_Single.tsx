import React, { useEffect, useState } from "react";
import Object_Button_Selection_Single from "./Object_Button_Selection_Single";
import "../../CSS/Page_Component_Styles/Holder_Buttons_Selection_Single.css";
import { BaseCarouselChildProps } from "../../BaseProps";
import { doc, updateDoc, Timestamp, setDoc } from "firebase/firestore";
import { firestore, auth } from "../Firebase";
import { getDeviceId } from "./Object_deviceID";

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
  givenCheckTagsToDetermineRendering(
    inclusion: string,
    exclusion: string,
    objName: string,
    objType: string,
    excludeByDefault: boolean
  ): boolean;
}

export default function Holder_Buttons_Selection_Single(
  props: Holder_Buttons_Selection_Single_Props
) {
  const [shouldRender, setShouldRender] = useState(true);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    setShouldRender(
      props.givenCheckTagsToDetermineRendering(
        props.givenTagInclusion,
        props.givenTagExclusion,
        "holder buttons selection single",
        "holder buttons selection single",
        props.givenGlobal_ShouldExcludeByDefault
      )
    );
  }, [props.givenGlobal_TagsTrueArray, props.givenGlobal_TagsFalseArray]);

  /*   useEffect(() => {
      const saved = localStorage.getItem(
        `answer-q-${props.givenGlobal_CurrentPageID}`
      );
      if (saved) {
        setSelectedValue(saved);
        props.givenAddToSelectionMap(props.givenAddressToWrite, saved);
      }
    }, [props.givenGlobal_CurrentPageID]);
   */
  const saveToFirestore = async (value: string) => {
    const submissionId = localStorage.getItem("submissionId");

    if (!submissionId) {
      console.warn("No submission ID found");
      return;
    }

    try {
      /*    localStorage.setItem(
           `answer-q-${props.givenGlobal_CurrentPageID}`,
           value
         ); */

      const currentUser = auth.currentUser;
      const isAnonymous = currentUser?.isAnonymous;

      const deviceID = getDeviceId();
      // Path based on guest or registered user
      const docRef = isAnonymous
        ? doc(firestore, "Submissions", "Submissions", "Guests", "none")
        : doc(firestore, "Submissions", "Submissions", "Users", submissionId);

      await updateDoc(docRef, {
        [`q-${props.givenGlobal_CurrentPageID}`]: value,
        dateUpdated: Timestamp.now(),
      });

      console.log(`Saved to Firestore doc: ${docRef.path}`);
    } catch (err) {
      console.error("Error saving to Firestore:", err);
    }
  };

  const handleSelect = (value: string) => {
    props.givenAddToSelectionMap(props.givenAddressToWrite, value);
    setSelectedValue(value);
    saveToFirestore(value);
  };

  return shouldRender ? (
    <div className={`single-select-button-holder${props.givenGlobal_isMobile}`}>
      {props.givenButtonTexts.map((text, index) => (
        <Object_Button_Selection_Single
          key={index}
          isMobile={props.givenGlobal_isMobile}
          givenButtonText={text}
          givenIndex={index}
          givenCurrentIndex={selectedValue === text ? index : -1}
          setGivenCurrentIndex={() => handleSelect(text)}
          isDisabled={props.givenAreDisabled}
          givenLockNumber={props.givenLockNumber}
          givenSetLockNumber={props.givenSetLockNumber}
          givenAddToSelectionMap={props.givenAddToSelectionMap}
          givenRemoveFromSelectionMap={props.givenRemoveFromSelectionMap}
          givenAddressToWrite={props.givenAddressToWrite}
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_LockNumber={props.givenGlobal_LockNumber}
          givenGlobal_CurrentCarouselIndex={
            props.givenGlobal_CurrentCarouselIndex
          }
          givenGlobal_PreviousCarouselIndex={
            props.givenGlobal_PreviousCarouselIndex
          }
          givenGlobal_MapToRead={props.givenGlobal_MapToRead}
          givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
          givenGlobal_CurrentModalID={props.givenGlobal_CurrentModalID}
          givenGlobal_CurrentBookID={props.givenGlobal_CurrentBookID}
        />
      ))}
    </div>
  ) : (
    <></>
  );
}
