import { motion } from "framer-motion";
import { useTheme } from "styled-components";
import { CliCursor } from "./styles/Cli";

const AnimatedCliCursor = motion(CliCursor);

function AnimatedCursor() {
  const theme = useTheme();

  return (
    <AnimatedCliCursor
      animate={{
        backgroundColor: [
          "#FFF0",
          theme.input.primary,
          theme.input.primary,
          "#FFF0",
        ],
      }}
      transition={{ repeat: Infinity }}
    />
  );
}

export default AnimatedCursor;
