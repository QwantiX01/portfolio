import styles from "./InputLine.module.css";
import { useRef, useState } from "react";
import { handleCommand, settingsData } from "../../../utils/commandHandler.ts";
import { commands } from "../../../utils/misc.js";

const InputLine = ({ linesArray, setLinesArray }) => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState("");

  //Autofocus
  document.addEventListener("click", () => {
    inputRef.current && inputRef.current.focus();
  });

  //Autocomplete
  let autoComplete, autoCompleteFull;
  let regex = RegExp(`\\b(${inputValue})\\w+\\b`, "i");
  try {
    autoCompleteFull = commands.toString().match(regex);
    autoComplete = autoCompleteFull[0].slice(autoCompleteFull[1].length);
    if (autoCompleteFull[1] === "") {
      autoCompleteFull = "";
      autoComplete = "";
    }
  } catch (e) {
    autoCompleteFull = "";
    autoComplete = "";
  }

  //Input command handler
  const sendLine = (e) => {
    if (!e.shiftKey && e.key === "Enter") {
      if (settingsData.isAAC) {
        inputRef.current.value =
          autoCompleteFull[0] == null || ""
            ? inputRef.current.value
            : autoCompleteFull[0];
        setInputValue(autoCompleteFull[0] == null ? "" : autoCompleteFull[0]);
      }
      //Get value from input
      const value = inputRef.current.value;
      //Re-render lines and update array
      setLinesArray([...linesArray].push({ command: value }));
      //Clear input
      inputRef.current.value = null;
      setInputValue("");
      //Handle command
      handleCommand(linesArray, setLinesArray, value);
    } else if (e.shiftKey && e.key === "Enter") {
      inputRef.current.value =
        autoCompleteFull[0] == null || ""
          ? inputRef.current.value
          : autoCompleteFull[0];
      setInputValue(autoCompleteFull[0] == null ? "" : autoCompleteFull[0]);
    }
  };

  //HTML markup
  return (
    <>
      <div className={styles.inputLine}>
        <p>{"~ →"}</p>
        <input
          onKeyDown={(e) => sendLine(e)}
          onChange={(e) => setInputValue(e.target.value)}
          autoFocus={true}
          ref={inputRef}
          type="text"
        />
        <p className={styles.content}>{inputValue}</p>
        <p className={styles.autocomplete}>{autoComplete}</p>
      </div>
    </>
  );
};

export default InputLine;
