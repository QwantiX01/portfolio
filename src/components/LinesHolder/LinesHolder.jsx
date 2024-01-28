import styles from "./LinesHolder.module.css";
import { useRef, useState } from "react";
import Line from "./Line/Line.jsx";
import InputLine from "./InputLine/InputLine.jsx";

export const lines = [{ prefix: undefined, command: "sussy" }];
const LinesHolder = () => {
  const [linesArray, setLinesArray] = useState([
    { prefix: undefined, command: "sussy" },
  ]);
  return (
    <>
      <main>
        {linesArray.map((value) => (
          <Line {...value} />
        ))}
        <InputLine linesArray={linesArray} setLinesArray={setLinesArray} />
      </main>
    </>
  );
};

export default LinesHolder;
