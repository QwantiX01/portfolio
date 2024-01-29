import { useState } from "react";
import Line from "./Line/Line.jsx";
import InputLine from "./InputLine/InputLine.jsx";

const LinesHolder = () => {
  const [linesArray, setLinesArray] = useState([
    {
      command: `$: is not registered command!`,
      prefix: "inf",
    },
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
