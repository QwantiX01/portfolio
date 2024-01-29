import styles from "./InputLine.module.css";
import { useRef } from "react";
import { handleCommand } from "../../../utils/commandHandler.js";

const InputLine = ({ linesArray, setLinesArray }) => {
  const inputRef = useRef();

  //Set active on click anywhere
  document.addEventListener("click", () => inputRef.current.focus());

  //Input command handler
  const sendLine = (e) => {
    if (e.key === "Enter") {
      //Get value from input
      const value = inputRef.current.value;
      //Re-render lines and update array
      setLinesArray([...linesArray].push({ command: value }));
      //Clear input
      inputRef.current.value = null;
      //Handle command
      handleCommand(linesArray, setLinesArray, value);
    }
  };

  //HTML markup
  return (
    <>
      <div className={styles.inputLine}>
        <p>{"~ →"}</p>
        <input ref={inputRef} onKeyDown={(e) => sendLine(e)} type="text" />
      </div>
    </>
  );
};

export default InputLine;
