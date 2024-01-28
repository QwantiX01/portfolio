import { PrintLine, PrintLines } from "./printLines.js";

const helpArray = ["clear", "  - Clear terminal", "", "help", "  - This menu"];
const huiArray = [
  "⠀⠀⠀⠀⠀⠀⠀⣠⣤⣤⣤⣤⣤⣄⡀",
  "⠀⠀⠀⠀⠀⢰⡿⠋⠁⠀⠀⠈⠉⠙⠻⣷⣄",
  "⠀⠀⠀⠀⢀⣿⠇⠀⢀⣴⣶⡾⠿⠿⠿⢿⣿⣦⡀",
  "⠀⠀⣀⣀⣸⡿⠀⠀⢸⣿⣇⠀⠀⠀⠀⠀⠀⠙⣷",
  "⠀⣾⡟⠛⣿⡇⠀⠀⢸⣿⣿⣷⣤⣤⣤⣤⣶⣶⣿⠇⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀",
  "⢀⣿⠀⢀⣿⡇⠀⠀⠀⠻⢿⣿⣿⣿⣿⣿⠿⣿⡏⠀⠀⠀⠀⢴⣶⣶⣿⣿⣿⣆",
  "⢸⣿⠀⢸⣿⡇⠀⠀⠀⠀⠀⠈⠉⠁⠀⠀⠀⣿⡇⣀⣠⣴⣾⣮⣝⠿⠿⠿⣻⡟",
  "⢸⣿⠀⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠉⠀",
  "⠸⣿⠀⠀⣿⡇⠀⠀⠀⠀⠀⣠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠀⠀⠀",
  "⠀⠻⣷⣶⣿⣇⠀⠀⠀⢠⣼⣿⣿⣿⣿⣿⣿⣿⣛⣛⣻⠉⠁⠀",
  "⠀⠀⠀⠀⢸⣿⠀⠀⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇",
  "⠀⠀⠀⠀⢸⣿⣀⣀⣀⣼⡿⢿⣿⣿⣿⣿⣿⡿⣿⣿⡿",
  "⠀⠀⠀⠀⠀⠙⠛⠛⠛⠋⠁⠀⠙⠻⠿⠟⠋⠑⠛⠋⠀",
];
export const handleCommand = (linesArray, setLinesArray, currentCommand) => {
  const commandArray = currentCommand.split(" ");
  const command = commandArray[0];
  switch (command) {
    case "clear":
      setLinesArray([]);
      break;
    case "amogus":
      PrintLines(linesArray, setLinesArray, huiArray);
      break;
    case "links":
      PrintLine(linesArray, setLinesArray, {
        command: " - Youtube link",
        link: "https://youtube.com",
        linkName: "YT",
      });
      break;
    case "help":
      PrintLines(linesArray, setLinesArray, helpArray);
      break;
    default:
      error(linesArray, setLinesArray, currentCommand);
      break;
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
