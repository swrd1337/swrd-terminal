import { useEffect, useRef, useState } from "react";
import { FlexContainer } from "./styles/Flex";
import { CliInput } from "./styles/Cli";
import { ContentBody } from "./styles/Paper";
import AnimatedCursor from "./AnimatedCursor";
import { CommandBody } from "./styles/Cli";
import { CLEAR } from "../constants/commandTypes";
import { Typography } from "./styles/Typography";
import { getCommandOutput } from "./utils/cliUtils";

function TerminalBody() {
  const inputFocus = useRef(null);

  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  const outsiteClickHandler = () => {
    inputFocus.current.focus();
  };

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  const inputChangeHandler = ({ target: { value } }) => {
    setCommand(value);
  };

  const inputEnterHandler = ({ key }) => {
    if (key === "Enter") {
      if (command === CLEAR) {
        setOutput([]);
      } else {
        const commandOut = getCommandOutput(command);
        setOutput([
          ...output,
          <CommandBody>{command}</CommandBody>,
          ...commandOut,
        ]);
      }
      setCommand("");
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
        />
        <CommandBody>{command}</CommandBody>
        <AnimatedCursor />
      </FlexContainer>
    </ContentBody>
  );
}

export default TerminalBody;
