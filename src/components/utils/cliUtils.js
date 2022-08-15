import { HELP } from '../../constants/commandTypes';
import Commands from "../../resources/commands";
import { COMMAND_NOT_FOUND } from '../../constants/errorMessages'

export function getCommandOutput(command) {
  let output = null;
  switch (command) {
    case HELP:
      output = Commands[HELP].messages;
      break;
    default:
      output = [COMMAND_NOT_FOUND];
      break;
  }
  return output;
}