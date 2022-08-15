import { motion, useDragControls } from "framer-motion";
import { FlexContainer } from "./styles/Flex";
import { CloseIcon } from "./styles/Icon";
import { GlassPaper } from "./styles/Paper";
import { useTheme } from "styled-components";
import TerminalBody from "./TerminalBody";
import { DialogHeading } from "./styles/Typography";
import { terminalTitle } from "../resources/mainInfo.json";
import { useEffect, useRef, useState } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

const MotionGlassPaper = motion(GlassPaper);

function TerminalWindow({ openTerminal, onClose }) {
  const terminalRef = useRef();
  const theme = useTheme();
  const dragControls = useDragControls();

  const [dragConstraints, setDragConstraints] = useState({});

  useEffect(() => {
    if (terminalRef) {
      const { width, height } = getWindowDimensions();
      const { current: {scrollWidth, scrollHeight} } = terminalRef;
      const w = Math.round((width - scrollWidth) / 2);
      const h = Math.round((height - scrollHeight) / 2);

      setDragConstraints({
        left: -(w - 2), // 2 stands for 'border width' in px.
        right: w - 2,
        top: -(h - 2), 
        bottom: h - 2,
      })
    }
  }, [openTerminal]);

  return (
    <MotionGlassPaper
      ref={terminalRef}
      initial={{
        y: -1000,
      }}
      animate={{
        y: openTerminal ? 0 : -1000,
        opacity: openTerminal ? 1 : 0,
        position: openTerminal ? "unset" : "absolute",
      }}
      drag
      dragControls={dragControls}
      dragListener={false}
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraints}
    >
      <FlexContainer
        onPointerDown={(e) => {
          dragControls.start(e);
        }}
        justifyContent="space-between"
        alignItems="center"
        p="5px"
        style={{ borderBottom: `1px solid ${theme.paper.border.primary}` }}
      >
        <FlexContainer w="100%" justifyContent="center">
          <DialogHeading>
            <span style={{
              color: theme.accent.primary,
              marginRight: "10px"
            }}>λ</span>
            {terminalTitle}
          </DialogHeading>
        </FlexContainer>
        <CloseIcon onClick={onClose} />
      </FlexContainer>
      <TerminalBody openTerminal={openTerminal} />
    </MotionGlassPaper>
  );
}

export default TerminalWindow;
