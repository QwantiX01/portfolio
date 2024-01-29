export const PrintLine = (linesArray, setLinesArray, newLine) => {
  let tempArray = [...linesArray];
  switch (typeof newLine) {
    case "string":
      tempArray.push({ command: newLine });
      break;
    default:
      tempArray.push(newLine);
  }
  setLinesArray(tempArray);
};

export const PrintLines = (linesArray, setLinesArray, newLines) => {
  let tempArray = [...linesArray];
  newLines.map((value) => {
    switch (typeof value) {
      case "string":
        tempArray.push({ command: value });
        break;
      default:
        tempArray.push(value);
    }
  });
  setLinesArray(tempArray);
};
