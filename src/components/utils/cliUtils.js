import Commands from "../../resources/commands";
import ErrorMessages from "../../constants/ErrorMessages";

export function getCommandOutput(command) {
  let output = null;
  const commandData = Commands[command];
  if (commandData && !commandData.noOutput) {
    output = commandData.messages;
  } else {
    output = [ErrorMessages.COMMAND_NOT_FOUND];
  }

  return output;
}

export function getHistoryOutput(historyList) {
  let output =  historyList.map(entry => `<span class='cmdhl'>${entry}</span>`);
  return ["<br>", ...output, "<br>"];
}
