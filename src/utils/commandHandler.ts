import { log } from "console";
import { PrintLines, PrintLine } from "./printLines.js";

const helpArray: string[] = [
  "Keys:",
  "Enter: confirm line",
  "Shift + Enter: confirm autocomplete",
  "",
  "Commands:",
  "clear",
  "  - Clear terminal",
  "",
  "help",
  "  - This menu",
];

export const handleCommand = (
  linesArray: [{}],
  setLinesArray,
  currentCommand: string
) => {
  const commandArray = currentCommand.split(" ");

  const command = commandArray[0];

  switch (command) {
    case "clear":
      setLinesArray([]);
      break;
    case "help":
      PrintLines(linesArray, setLinesArray, helpArray);
      break;
    case "settings":
      setLinesArray(linesArray);
      settings(linesArray, setLinesArray, commandArray);
      break;
    default:
      error(linesArray, setLinesArray, currentCommand);
      break;
  }
};

//Settings
const settings = (linesArray, setLinesArray, commandArray: string[]) => {
  let argsArray: { arg: string; value: any }[] = [];
  commandArray.map(
    (value, index) =>
      value.startsWith("-") &&
      argsArray.push({
        arg: value.replace("-", ""),
        value: commandArray[index + 1],
      })
  );
  if (!argsArray.length) {
    PrintLine(linesArray, setLinesArray, "Settings menu");
  } else {
    argsArray.map(({ arg, value }) => {
      switch (arg) {
        case "aac":
          value === "true" ? console.log(value) : console.log(value);
          break;
        default:
          break;
      }
    });
  }
};

const error = (linesArray, setLinesArray, currentCommand) => {
  let tempLines = [...linesArray];
  tempLines.push({
    command: `${currentCommand}: is not registered command!`,
    prefix: "err",
  });
  setLinesArray(tempLines);
};
