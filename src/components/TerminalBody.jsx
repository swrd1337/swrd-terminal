import { useEffect, useRef, useState } from "react";
import { FlexContainer } from "./styles/Flex";
import { CliInput } from "./styles/Cli";
import { ContentBody } from "./styles/Paper";
import AnimatedCursor from "./AnimatedCursor";
import { CommandBody } from "./styles/Cli";
import ActionCommandTypes from "../constants/ActionCommandTypes";
import { Typography } from "./styles/Typography";
import { getCommandOutput, getHistoryOutput } from "./utils/cliUtils";
import ActionKeys from "../constants/ActionKeys";
import Commands from "../resources/commands.json"
import { useTheme } from 'styled-components';

function TerminalBody({ openTerminal }) {
  const inputFocus = useRef(null);
  const theme = useTheme();

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([...Commands.cover.messages]);
  const [history, setHistory] = useState({
    pos: -1,
    commands: [],
  });

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  useEffect(() => {
    if (inputFocus.current && window.innerWidth > theme.breakpoints.tablet) {
      inputFocus.current.scrollIntoView();
    }
  }, [output])

  const outsiteClickHandler = () => {
    inputFocus.current.focus();
  };

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus, openTerminal]);

  const inputChangeHandler = ({ target: { value } }) => {
    setCommand(value);
  };

  const inputEnterHandler = ({ key }) => {
    if (key === ActionKeys.ENTER) {
      onEnter();
    }
  };

  const upPressHandler = (e) => {
    if (e.key === ActionKeys.ARROW_UP) {
      e.preventDefault();
      onArrowUp();
    }
    if (e.key === ActionKeys.ARROW_DOWN) {
      onArrowDown();
    }
  };

  const onEnter = () => {
    if (command) {
      setHistory({
        commands: [...history.commands, command],
        pos: history.commands.length + 1,
      });
    }
    executeCommand();
    setCommand("");
  };

  const executeCommand = () => {
    const lastCmdElement = <CommandBody>{command}</CommandBody>;
    if (command === ActionCommandTypes.CLEAR) {
      setOutput([]);
    } else if (command === ActionCommandTypes.HISTORY) {
      const historyOutput = getHistoryOutput(history.commands);
      setOutput([...output, lastCmdElement, ...historyOutput]);
    } else if (command) {
      const commandOut = getCommandOutput(command);
      setOutput([...output, lastCmdElement, ...commandOut]);
    } else {
      setOutput([...output, lastCmdElement]);
    }
  };

  const onArrowUp = () => {
    const newPos = history.pos - 1;
    if (newPos >= 0) {
      const historyCmd = history.commands[newPos];
      setCommand(historyCmd);
      setHistory({
        ...history,
        pos: newPos,
      });
    }
  };

  const onArrowDown = () => {
    const newPos = history.pos + 1;
    if (newPos < history.commands.length) {
      const historyCmd = history.commands[newPos];
      setCommand(historyCmd);
      setHistory({
        ...history,
        pos: newPos,
      });
    } else {
      setCommand("");
      setHistory({
        ...history,
        pos: history.commands.length,
      });
    }
  };

  return (
    <ContentBody onClick={outsiteClickHandler}>
      {output.map((row, index) => {
        const key = `out_${index}`;
        let element = null;
        if (row.type === CommandBody) {
          element = <div key={key}>{row}</div>;
        } else {
          element = (
            <Typography key={key} dangerouslySetInnerHTML={{ __html: row }} />
          );
        }
        return element;
      })}
      <FlexContainer alignItems="center">
        <CliInput
          ref={inputFocus}
          onChange={inputChangeHandler}
          value={command}
          onKeyPress={inputEnterHandler}
          onKeyDown={upPressHandler}
        />
        <CommandBody>{command}</CommandBody>
        <AnimatedCursor />
      </FlexContainer>
    </ContentBody>
  );
}

export default TerminalBody;
