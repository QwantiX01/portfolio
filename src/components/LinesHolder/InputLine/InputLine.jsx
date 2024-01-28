import styles from "./InputLine.module.css";
import { lines } from "../LinesHolder.jsx";
import { useRef } from "react";
import { handleCommand } from "../../../utils/commandHandler.js";

const InputLine = ({ update, line }) => {
  const input = useRef();
  const sendLine = (e) => {
    const value = input.current.value;
    if (e.key === "Enter") {
      lines.push({ command: value });
      input.current.value = null;
      handleCommand(lines, value);
      update(line + 1);
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
