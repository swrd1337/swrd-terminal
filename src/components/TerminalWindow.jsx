import { motion, useDragControls } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FlexContainer } from "./styles/Flex";
import { CloseIcon } from "./styles/Icon";
import { CliInput } from "./styles/Cli";
import { ContentBody, GlassPaper } from "./styles/Paper";
import AnimatedCursor from "./AnimatedCursor";
import { useTheme } from "styled-components";
import { CommandBody } from "./styles/Cli";
import Commands from "../resources/commands";

const MotionGlassPaper = motion(GlassPaper);

function TerminalWindow({ ref }) {
  const theme = useTheme();
  const dragControls = useDragControls();
  const inputFocus = useRef(null);

  const [command, setCommand] = useState("");

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, [inputFocus]);

  const outsiteClickHandler = () => {
    inputFocus.current.focus();
  };

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setCommand(value);
  };

  return (
    <MotionGlassPaper
      ref={ref}
      w="40em"
      h="20em"
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        left: -50,
        right: 50,
        top: -50,
        bottom: 50,
      }}
      onClick={outsiteClickHandler}
    >
      <FlexContainer
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
        justifyContent="space-between"
        p="5px"
        style={{ borderBottom: `1px solid ${theme.paper.border.primary}` }}
      >
        <span>λ Magi Terminal</span>
        <CloseIcon />
      </FlexContainer>
      <ContentBody p="5px">
        <FlexContainer alignItems="center">
          <CliInput
            ref={inputFocus}
            onChange={inputChangeHandler}
            value={command}
          />
          <CommandBody before="ass">{command}</CommandBody>
          <AnimatedCursor />
        </FlexContainer>
      </ContentBody>
    </MotionGlassPaper>
  );
}

export default TerminalWindow;
