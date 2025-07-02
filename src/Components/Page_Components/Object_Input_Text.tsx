import { useState } from "react";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { firestore } from "../Firebase";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
  questionID: string;
  submissionId?: string;
  min?: string;
  max?: string;
}

export default function Object_Input_Text({
  givenPlaceHolderText,
  questionID,
  submissionId,
  min = "0",
  max = "10000",
}: Object_Input_Text_Props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const minWords = parseInt(min);
  const maxWords = parseInt(max);

  const getWordCount = (text: string) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const saveToFirestore = async (value: string) => {
    const wordCount = getWordCount(value);
    if (wordCount < minWords) {
      setError(`Please enter at least ${minWords} words.`);
      return;
    }

    const trimmed = value.trim().split(/\s+/).slice(0, maxWords).join(" ");

    const idToUse = submissionId || localStorage.getItem("submissionId");
    if (!idToUse) {
      console.warn("No submission ID available.");
      return;
    }

    try {
      const docRef = doc(firestore, `submission/${idToUse}`);

      await setDoc(
        docRef,
        {
          [`q-${questionID}`]: trimmed,
          dateUpdated: Timestamp.now(),
        },
        { merge: true }
      );
      console.log("Saved q-" + questionID + " under submission:", idToUse);
      setError("");
    } catch (err) {
      console.error("Error saving to Firestore:", err);
    }
  };

  const handleBlur = () => {
    saveToFirestore(inputValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length <= maxWords) {
      setInputValue(text);
    } else {
      const trimmed = words.slice(0, maxWords).join(" ");
      setInputValue(trimmed);
    }
  };

  const currentWords = getWordCount(inputValue);

  return (
    <div>
      <div className="text_entry_bubble">
        <textarea
          placeholder={givenPlaceHolderText}
          className="body"
          value={inputValue}
          onChange={handleChange}
        />

        {error && <p className="error-text">{error}</p>}
      </div>
      <div>
        {" "}
        <button
          className="normal-button-primary-desktop"
          style={{ fontSize: "24px" }}
          onClick={() => saveToFirestore(inputValue)}
        >
          Next Question!
        </button>
      </div>
    </div>
  );
}
