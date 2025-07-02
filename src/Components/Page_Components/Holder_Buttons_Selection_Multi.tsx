import React, { useEffect, useState } from "react";
import Object_Button_Selection_Multi from "./Object_Button_Selection_Multi";
import { BaseCarouselChildProps } from "../../BaseProps";
import { setDoc, doc, Timestamp } from "firebase/firestore";
import { firestore } from "../Firebase";

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
  givenCheckTagsToDetermineRendering(
    inclusion: string,
    exclusion: string,
    objName: string,
    objType: string,
    excludeByDefault: boolean
  ): boolean;
}

export default function Holder_Buttons_Selection_Multi(
  props: Holder_Buttons_Selection_Multi_Props
) {
  const [shouldRender, setShouldRender] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  useEffect(() => {
    setShouldRender(
      props.givenCheckTagsToDetermineRendering(
        props.givenTagInclusion,
        props.givenTagExclusion,
        "multi-select",
        "multi-select",
        props.givenGlobal_ShouldExcludeByDefault
      )
    );
  }, [props.givenGlobal_TagsTrueArray, props.givenGlobal_TagsFalseArray]);

  const saveToFirestore = async (values: string[]) => {
    const submissionId = localStorage.getItem("submissionId");
    if (!submissionId) {
      console.warn("No submissionId found");
      return;
    }

    try {
      await setDoc(
        doc(firestore, "submission", submissionId),
        {
          [`q-${props.givenAddressToWrite}`]: values,
          dateUpdated: Timestamp.now(),
        },
        { merge: true }
      );
      console.log("Saved multi-select:", values);
    } catch (err) {
      console.error("Failed to save multi-select:", err);
    }
  };

  const handleChecked = (value: string) => {
    setSelectedValues((prev) => {
      let updated;
      if (prev.includes(value)) {
        updated = prev.filter((v) => v !== value);
        props.givenRemoveFromSelectionMap(props.givenAddressToWrite, value);
      } else {
        updated = [...prev, value];
        props.givenAddToSelectionMap(props.givenAddressToWrite, value);
      }

      saveToFirestore(updated);
      return updated;
    });
  };

  if (!shouldRender) return null;

  return (
    <div className={`multi-select-button-holder${props.givenGlobal_isMobile}`}>
      {props.givenButtonTexts.map((text, index) => (
        <Object_Button_Selection_Multi
          key={index}
          isMobile={props.givenGlobal_isMobile}
          givenButtonText={text}
          checked={selectedValues.includes(text)}
          HandleChecked={() => handleChecked(text)}
          isDisabled={props.givenAreDisabled}
          givenLockNumber={props.givenLockNumber}
          givenSetLockNumber={props.givenSetLockNumber}
          givenAddToSelectionMap={props.givenAddToSelectionMap}
          givenRemoveFromSelectionMap={props.givenRemoveFromSelectionMap}
          givenAddressToWrite={props.givenAddressToWrite}
          givenGlobal_isMobile={props.givenGlobal_isMobile}
          givenGlobal_CurrentCarouselIndex={
            props.givenGlobal_CurrentCarouselIndex
          }
          givenGlobal_PreviousCarouselIndex={
            props.givenGlobal_PreviousCarouselIndex
          }
          givenGlobal_LockNumber={props.givenGlobal_LockNumber}
          givenGlobal_MapToRead={props.givenGlobal_MapToRead}
          givenGlobal_CurrentPageID={props.givenGlobal_CurrentPageID}
          givenGlobal_CurrentModalID={props.givenGlobal_CurrentModalID}
          givenGlobal_CurrentBookID={props.givenGlobal_CurrentBookID}
        />
      ))}
    </div>
  );
}
