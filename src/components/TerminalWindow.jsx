import { motion, useDragControls } from "framer-motion";
import { FlexContainer } from "./styles/Flex";
import { CloseIcon } from "./styles/Icon";
import { GlassPaper } from "./styles/Paper";
import { useTheme } from "styled-components";
import TerminalBody from "./TerminalBody";
import { DialogHeading } from "./styles/Typography";
import { terminalTitle } from "../resources/mainInfo.json";

const MotionGlassPaper = motion(GlassPaper);

function TerminalWindow({ ref, openTerminal, onClose }) {
  const theme = useTheme();
  const dragControls = useDragControls();

  return (
    <MotionGlassPaper
      ref={ref}
      initial={{
        y: -1000,
        display: "none",
      }}
      animate={{
        y: openTerminal ? 0 : -1000,
        opacity: openTerminal ? 1 : 0,
        position: openTerminal ? "unset" : "absolute",
        display: openTerminal ? "block" : "none",
      }}
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
      <TerminalBody />
    </MotionGlassPaper>
  );
}

export default TerminalWindow;
