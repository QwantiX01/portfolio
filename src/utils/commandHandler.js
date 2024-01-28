export const handleCommand = (linesArray, currentCommand) => {
  switch (currentCommand) {
    case "clear":
      linesArray.splice(0, linesArray.length);
      break;
    default:
      error(linesArray, currentCommand);
      break;
  }
};

const error = (linesArray, currentCommand) => {
  linesArray.push({
    command: `${currentCommand}: is not gaing hui`,
    prefix: "err",
  });
};
