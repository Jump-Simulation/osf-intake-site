import { useEffect, useState } from "react";
import { Timestamp, collection, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../Firebase";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";
import { AppContext, useAppContext } from "../../App";
import { getDeviceId } from "./Object_deviceID";

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
  questionID: string;
  submissionId?: string;
  minWordCount?: string;
  maxWordCount?: string;
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function Object_Input_Text({
  givenPlaceHolderText,
  questionID,
  submissionId,
  minWordCount = "5",
  maxWordCount = "10000",
  givenDestination,
  givenGoToDestination,
}: Object_Input_Text_Props) {
  const context = useAppContext();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const minWordCountWords = parseInt(minWordCount);
  const maxWordCountWords = parseInt(maxWordCount);

  const getWordCount = (text: string) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const currentWords = getWordCount(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);

    if (words.length <= maxWordCountWords) {
      setInputValue(text);
    } else {
      const trimmed = words.slice(0, maxWordCountWords).join(" ");
      setInputValue(trimmed);
    }

    if (attemptedSubmit && words.length >= minWordCountWords) {
      setError("");
    }
  };

  const saveToFirestore = async (value: string) => {
    const wordCount = getWordCount(value);
    if (wordCount < minWordCountWords) {
      setError(`Please enter at least ${minWordCountWords} words.`);
      return;
    }

    const trimmed = value
      .trim()
      .split(/\s+/)
      .slice(0, maxWordCountWords)
      .join(" ");
    const currentUser = auth.currentUser;
    const isAnonymous = currentUser?.isAnonymous;

    localStorage.setItem(`answer-q-${questionID}`, trimmed);
    context.state_Set_QuestionAnswer_Map_Value(
      `answer-q-${questionID}`,
      trimmed
    );

    // Get deviceId or UID
    const idToUse = isAnonymous ? getDeviceId() : currentUser?.uid;

    if (!idToUse) {
      console.warn("No valid ID for Firestore doc.");
      return;
    }

    const deviceID = getDeviceId();
    // Path based on guest or registered user
    const docRef = isAnonymous
      ? doc(firestore, "Submissions", "Submissions", "Guests", deviceID)
      : doc(firestore, "Submissions", "Submissions", "Users", submissionId);

    try {
      await setDoc(
        docRef,
        {
          [`q-${questionID}`]: trimmed,
          dateUpdated: Timestamp.now(),
          deviceId: getDeviceId(),
        },
        { merge: true }
      );

      console.log("Saved to:", docRef.path);
      setError("");
    } catch (err) {
      console.error("Error saving to Firestore:", err);
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(`answer-q-${questionID}`);
    if (saved) setInputValue(saved);
  }, [questionID]);

  useEffect(() => {
    const key = `answer-q-${questionID}`;

    console.log("[AutoFill useEffect] Running for key:", key);

    if (context.state_QuestionAnswer_Map.has(key)) {
      console.log(`[AutoFill useEffect] Found key in map: ${key}`);
      const answerFromMap = context.state_Get_QuestionAnswer_Map_Value(key);

      if (answerFromMap !== undefined) {
        console.log(`[AutoFill useEffect] Value from map:`, answerFromMap);
        setInputValue(answerFromMap);
      } else {
        console.log(
          `[AutoFill useEffect] Value from map is undefined for key: ${key}`
        );
      }
    } else {
      console.log(`[AutoFill useEffect] Key not found in map: ${key}`);
    }
  }, [context.state_QuestionAnswer_Map, questionID]);

  let message = "";

  if (currentWords < minWordCountWords && attemptedSubmit === false) {
    message = `- Write at least ${minWordCountWords} words.`;
  } else if (currentWords < minWordCountWords && attemptedSubmit === true) {
    message = `- At least ${minWordCountWords} words required.`;
  } else if (
    currentWords >= minWordCountWords &&
    currentWords >= 0.9 * maxWordCountWords
  ) {
    message = `- Approaching ${maxWordCountWords} word limit!`;
  } else if (
    currentWords >= minWordCountWords &&
    currentWords < 0.9 * maxWordCountWords
  ) {
    message = "";
  }

  return (
    <div>
      <div
        className={`text_input_content_holder ${
          attemptedSubmit && currentWords < minWordCountWords
            ? "error"
            : currentWords >= minWordCountWords
            ? "success"
            : ""
        }`}
      >
        <div className="text_entry_area">
          <textarea
            placeholder={
              attemptedSubmit && currentWords <= minWordCountWords
                ? "Type your answer here"
                : givenPlaceHolderText
            }
            className={`userInput_textArea ${
              attemptedSubmit && currentWords <= minWordCountWords
                ? "error"
                : currentWords >= minWordCountWords
                ? "success"
                : ""
            }`}
            value={inputValue}
            onChange={handleChange}
          />
        </div>

        <div
          className={`Input-Feedback ${
            attemptedSubmit && currentWords < minWordCountWords
              ? "error"
              : currentWords >= minWordCountWords
              ? "success"
              : ""
          }`}
        >
          {currentWords} words {message}
        </div>
      </div>
      <div>
        {currentWords < minWordCountWords ? (
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
