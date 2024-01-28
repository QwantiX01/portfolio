import styles from "./LinesHolder.module.css";
import { useRef, useState } from "react";
import Line from "../Line/Line.jsx";
import InputLine from "../InputLine/InputLine.jsx";

export const lines = [{ prefix: undefined, command: "sussy" }];
const LinesHolder = () => {
  const [lineNumber, setLineNumber] = useState(0);
  return (
    <>
      <main>
        {lines.map((value) => {
          return (
            <Line
              isInput={false}
              prefix={value.prefix}
              content={value.command}
            />
          );
        })}
        <InputLine line={lineNumber} update={setLineNumber} />
      </main>
    </>
  );
};

export default LinesHolder;
