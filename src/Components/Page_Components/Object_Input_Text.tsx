import { useEffect, useState } from "react";
import { Timestamp, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
  questionID: string;
  submissionId?: string;
  min?: string;
  max?: string;
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function Object_Input_Text({
  givenPlaceHolderText,
  questionID,
  submissionId,
  min = "0",
  max = "10000",
  givenDestination,
  givenGoToDestination,
}: Object_Input_Text_Props) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const minWords = parseInt(min);
  const maxWords = parseInt(max);

  const getWordCount = (text: string) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const currentWords = getWordCount(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length <= maxWords) {
      setInputValue(text);
    } else {
      const trimmed = words.slice(0, maxWords).join(" ");
      setInputValue(trimmed);
    }

    if (attemptedSubmit && words.length >= minWords) {
      setError("");
    }
  };

  const saveToFirestore = async (value: string) => {
    const wordCount = getWordCount(value);
    if (wordCount < minWords) {
      setError(`Please enter at least ${minWords} words.`);
      return;
    }

    const trimmed = value.trim().split(/\s+/).slice(0, maxWords).join(" ");
    const idToUse = auth.currentUser?.uid;

    localStorage.setItem(`answer-q-${questionID}`, trimmed);

    if (!idToUse) {
      console.warn("User not authenticated.");
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
      console.log("Saved to submission:", idToUse);
      setError("");
    } catch (err) {
      console.error("Error saving to Firestore:", err);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(`answer-q-${questionID}`);
    if (saved) setInputValue(saved);
  }, [questionID]);

  return (
    <div className="text_input_content_holder">
      {attemptedSubmit && currentWords <= minWords && (
        <div style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
          *Please enter an answer to continue!
        </div>
      )}
      <div className="text_entry_bubble">
        <textarea
          placeholder={
            attemptedSubmit && currentWords <= minWords
              ? "Type your answer here"
              : givenPlaceHolderText
          }
          className={`body ${
            attemptedSubmit && currentWords <= minWords
              ? "error"
              : currentWords >= 1
              ? "success"
              : ""
          }`}
          value={inputValue}
          onChange={handleChange}
        />
      </div>

      <div>
        {currentWords <= minWords ? (
          <button
            className="gray-button-primary-desktop"
            style={{
              fontSize: "24px",
              background: "gray",
              borderColor: "black",
            }}
            onClick={() => {
              setAttemptedSubmit(true);
            }}
          >
            Next Question!
          </button>
        ) : (
          <button
            className="normal-button-primary-desktop"
            style={{ fontSize: "24px" }}
            onClick={async () => {
              setAttemptedSubmit(true);
              await saveToFirestore(inputValue);
              givenGoToDestination(givenDestination);
            }}
          >
            Next Question!
          </button>
        )}
      </div>
    </div>
  );
}
