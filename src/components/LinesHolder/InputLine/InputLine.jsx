import styles from "./InputLine.module.css";
import { lines } from "../LinesHolder.jsx";
import { useRef } from "react";
import { handleCommand } from "../../../utils/commandHandler.js";

const InputLine = ({ linesArray, setLinesArray }) => {
  const input = useRef();

  //Input command handler
  const sendLine = (e) => {
    if (e.key === "Enter") {
      //Get value from input
      const value = input.current.value;

      //Re-render lines and update array
      setLinesArray([...linesArray].push({ command: value }));

      //Clear input
      input.current.value = null;
      //Handle command
      handleCommand(linesArray, setLinesArray, value);
    }
  };
  //HTML markup
  return (
    <>
      <div className={styles.inputLine}>
        <p>{"~ →"}</p>
        <input ref={input} onKeyDown={(e) => sendLine(e)} type="text" />
      </div>
    </>
  );
};

export default InputLine;
