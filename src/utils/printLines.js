export const PrintLine = (linesArray, setLinesArray, newLine) => {
  const tempLines = [...linesArray];
  tempLines.push(newLine);

  setLinesArray(tempLines);
};

export const PrintLines = (linesArray, setLinesArray, newLines) => {
  const tempLines = [...linesArray];
  newLines.map((value) => {
    tempLines.push(value);
  });

  setLinesArray(tempLines);
};
