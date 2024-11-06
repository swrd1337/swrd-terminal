import { motion } from 'framer-motion';
import { useTheme } from 'styled-components';
import { CliCursor } from './styles/Cli';

const AnimatedCliCursor = motion(CliCursor);

function AnimatedCursor() {
  const theme = useTheme();

  return (
    <AnimatedCliCursor
      animate={{
        backgroundColor: [
          '#FFF0',
          theme.textColor.primary,
          theme.textColor.primary,
          '#FFF0',
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1,
        ease: 'easeInOut',
      }}
    />
  );
}

export default AnimatedCursor;
