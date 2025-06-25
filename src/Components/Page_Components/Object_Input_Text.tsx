import { useState } from "react";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";
import { firestore } from "../Firebase"; // Make sure this points to your Firebase config

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
  questionID: string;
}

export default function Object_Input_Text({
  givenPlaceHolderText,
  questionID,
}: Object_Input_Text_Props) {
  const [inputValue, setInputValue] = useState("");

  const saveToFirestore = async (value: string) => {
    if (value.trim() === "") return;

    try {
      const docRef = doc(firestore, "responses", questionID);
      await setDoc(docRef, {
        response: value,
        questionId: questionID,
        timestamp: Timestamp.now(),
      });
      console.log("Saved response for", questionID);
    } catch (err) {
      console.error("Error saving to Firestore:", err);
    }
  };

  const handleBlur = () => {
    saveToFirestore(inputValue);
  };

  return (
    <div className="text_entry_bubble">
      <textarea
        placeholder={givenPlaceHolderText}
        className="body"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={handleBlur}
      />
    </div>
  );
}
