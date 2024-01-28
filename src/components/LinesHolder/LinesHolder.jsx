import styles from "./LinesHolder.module.css";
import { useRef, useState } from "react";
import Line from "./Line/Line.jsx";
import InputLine from "./InputLine/InputLine.jsx";

export const lines = [{ prefix: undefined, command: "sussy" }];
const LinesHolder = () => {
  const [linesArray, setLinesArray] = useState([
    { prefix: "", command: "Init" },
  ]);
  return (
    <>
      <main>
        {linesArray.map((value) => (
          <Line prefix={value.prefix} content={value.command} />
        ))}

        <InputLine linesArray={linesArray} setLinesArray={setLinesArray} />
      </main>
    </>
  );
};

export default LinesHolder;
