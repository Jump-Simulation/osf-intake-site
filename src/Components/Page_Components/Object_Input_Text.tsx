import { useEffect, useState } from "react";
import { Timestamp, doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../Firebase";
import "../../CSS/Page_Component_Styles/Object_Input_Text.css";
import "../../CSS/Page_Component_Styles/Object_Button_Normal.css";
import { AppContext, useAppContext } from "../../App";
import { getDeviceId } from "./Object_deviceID";

interface Object_Input_Text_Props {
  given_PlaceHolderText: string;
  given_questionID: string;
  given_minWordCount?: string;
  given_maxWordCount?: string;
  given_Destination: string;
  given_GoToDestination(givenString: string): void;

  given_WriteSubmissionToFirestore(givenFieldName: string, givenData: string);
}

export default function Object_Input_Text(props: Object_Input_Text_Props) {
  const context = useAppContext();

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [guestLogin, setGuestLogin] = useState(false);

  const minWordCountWords = props.given_minWordCount
    ? parseInt(props.given_minWordCount)
    : 0;

  const maxWordCountWords = props.given_maxWordCount
    ? parseInt(props.given_maxWordCount)
    : Infinity; // no max if not provided

  const getWordCount = (text: string) =>
    text.trim().split(/\s+/).filter(Boolean).length;

  const currentWords = getWordCount(inputValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);

    /*    setInputValue(text); */

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

  /*   useEffect(() => {
      const saved = localStorage.getItem(`answer-q-${questionID}`);
      if (saved) setInputValue(saved);
    }, [questionID]); */

  /*   useEffect(() => {
      const key = `answer-q-${questionID}`;
      if (context.state_QuestionAnswer_Map.has(key)) {
        const answerFromMap = context.state_Get_QuestionAnswer_Map_Value(key);
        if (answerFromMap !== undefined) {
          setInputValue(answerFromMap);
        }
      }
    }, [context.state_QuestionAnswer_Map, questionID]); */

  useEffect(() => {
    const fetchAnswerFromFirestore = async () => {
      const currentUser = auth.currentUser;
      if (!currentUser) return;

      const isAnonymous = currentUser.isAnonymous;
      const uid = currentUser.uid;
      const docRef = isAnonymous
        ? doc(firestore, "Submissions", "Submissions", "Guests", "none")
        : doc(firestore, "Submissions", "Submissions", "Users", uid);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          const answer = data?.[`q-${props.given_questionID}`];
          if (typeof answer === "string") {
            setInputValue(answer);
          }
        }
      } catch (err) {
        console.error("Error loading answer from Firestore:", err);
      }
    };

    fetchAnswerFromFirestore();
  }, [props.given_questionID]);

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
    <div className="text_input_items_container">
      <div
        className={`text_input_content_holder ${attemptedSubmit && currentWords < minWordCountWords
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
                : props.given_PlaceHolderText
            }
            className={`userInput_textArea ${attemptedSubmit && currentWords <= minWordCountWords
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
          className={`Input-Feedback ${attemptedSubmit && currentWords < minWordCountWords
            ? "error"
            : currentWords >= minWordCountWords
              ? "success"
              : ""
            }`}
        >
          {currentWords} words {message}
        </div>
      </div>

      <div className="input_button_holder">
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
            Next question!
          </button>
        ) : (
          <button
            className="normal-button-primary-desktop"
            style={{ fontSize: "24px" }}
            onClick={async () => {
              setAttemptedSubmit(true);

              console.log("QUESTION ID: " + props.given_questionID);

              props.given_WriteSubmissionToFirestore(props.given_questionID, inputValue);
              /*   await saveToFirestore(inputValue); */


              if (props.given_Destination === "guestCheck") {
                if (guestLogin && context.localCurrentEmail === "null") {
                  props.given_GoToDestination("modal-001");
                } else {
                  props.given_GoToDestination("page-whenWhere");
                }
                return;
              }

              props.given_GoToDestination(props.given_Destination);
            }}
          >
            Next question!
          </button>
        )}
      </div>
    </div>
  );
}
