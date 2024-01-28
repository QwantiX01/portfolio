export const handleCommand = (linesArray, setLinesArray, currentCommand) => {
  switch (currentCommand) {
    case "clear":
      setLinesArray([]);
      break;
    default:
      error(linesArray, setLinesArray, currentCommand);
      break;
  }
};

const error = (linesArray, setLinesArray, currentCommand) => {
  let tempLines = [...linesArray];
  tempLines.push({
    command: `${currentCommand}: is not gaing hui`,
    prefix: "err",
  });

  setLinesArray(tempLines);
};
