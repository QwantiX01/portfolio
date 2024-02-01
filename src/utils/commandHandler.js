import { PrintLines } from "./printLines.js";

const helpArray = [
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

export const handleCommand = (linesArray, setLinesArray, currentCommand) => {
  const commandArray = currentCommand.split(" ");

  const command = commandArray[0];

  switch (command) {
    case "clear":
      setLinesArray([]);
      break;
    // case "amogus":
    //   PrintLines(linesArray, setLinesArray, huiArray);
    // break;
    // case "gh":
    //   PrintLine(linesArray, setLinesArray, {
    //     command: " - Youtube link",
    //     link: "https://youtube.com",
    //     linkName: "YT",
    //   });
    //   break;
    case "help":
      PrintLines(linesArray, setLinesArray, helpArray);
      break;
    case "settings":
      settings(commandArray);
      break;
    default:
      error(linesArray, setLinesArray, currentCommand);
      break;
  }
};

const settings = (commandArray) => {};
const error = (linesArray, setLinesArray, currentCommand) => {
  let tempLines = [...linesArray];
  tempLines.push({
    command: `${currentCommand}: is not registered command!`,
    prefix: "err",
  });
  setLinesArray(tempLines);
};
