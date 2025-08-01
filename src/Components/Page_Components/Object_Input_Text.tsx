import { useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../Firebase";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";
import { AppContext, useAppContext } from "../../App";
import { getDeviceId } from "./Object_deviceID";

interface Object_Input_Text_Props {
  givenPlaceHolderText: string;
  questionID: string;
  minWordCount?: string;
  maxWordCount?: string;
  givenDestination: string;
  givenGoToDestination(givenString: string): void;
}

export default function Object_Input_Text({
  givenPlaceHolderText,
  questionID,
  minWordCount = "5",
  maxWordCount = "10000",
  givenDestination,
  givenGoToDestination,
}: Object_Input_Text_Props) {
  const context = useAppContext();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [guestLogin, setGuestLogin] = useState(false);

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

    // Save local
    localStorage.setItem(`answer-q-${questionID}`, trimmed);
    context.state_Set_QuestionAnswer_Map_Value(
      `answer-q-${questionID}`,
      trimmed
    );

    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.warn("No Firebase user found.");
      return;
    }

    const isAnonymous = currentUser.isAnonymous;
    const uid = currentUser.uid;

    const docRef = isAnonymous
      ? doc(firestore, "Submissions", "Submissions", "Guests", getDeviceId())
      : doc(firestore, "Submissions", "Submissions", "Users", uid);

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
    const logedIn = onAuthStateChanged(auth, (user) => {
      if (user) {
        setGuestLogin(user.isAnonymous);
      } else {
        setGuestLogin(true);
      }
    });

    return () => logedIn();
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem(`answer-q-${questionID}`);
    if (saved) setInputValue(saved);
  }, [questionID]);

  useEffect(() => {
    const key = `answer-q-${questionID}`;
    if (context.state_QuestionAnswer_Map.has(key)) {
      const answerFromMap = context.state_Get_QuestionAnswer_Map_Value(key);
      if (answerFromMap !== undefined) {
        setInputValue(answerFromMap);
      }
    }
  }, [context.state_QuestionAnswer_Map, questionID]);

  useEffect(() => {
    const fetchAnswerFromFirestore = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const isAnonymous = currentUser.isAnonymous;
      const uid = currentUser.uid;
      const docRef = isAnonymous
        ? doc(firestore, "Submissions", "Submissions", "Guests", getDeviceId())
        : doc(firestore, "Submissions", "Submissions", "Users", uid);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const answer = data?.[`q-${questionID}`];
          if (typeof answer === "string") {
            setInputValue(answer);
          }
        }
      } catch (err) {
        console.error("Error loading answer from Firestore:", err);
      }
    };

    fetchAnswerFromFirestore();
  }, [questionID]);

  let message = "";

  if (currentWords < minWordCountWords && !attemptedSubmit) {
    message = `- Write at least ${minWordCountWords} words.`;
  } else if (currentWords < minWordCountWords && attemptedSubmit) {
    message = `- At least ${minWordCountWords} words required.`;
  } else if (
    currentWords >= minWordCountWords &&
    currentWords >= 0.9 * maxWordCountWords
  ) {
    message = `- Approaching ${maxWordCountWords} word limit!`;
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
              

              if (givenDestination === "guestCheck") {
                if (guestLogin) {
                  givenGoToDestination("modal-001");
                } else {
                  givenGoToDestination("page-whenWhere");
                }
                return;
              }

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
