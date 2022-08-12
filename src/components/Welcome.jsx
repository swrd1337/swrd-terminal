import { useState } from "react";
import { OutlinedButton } from "./styles/Button";
import { FlexContainer } from "./styles/Flex";
import { motion } from "framer-motion";
import MainInfo from "../resources/mainInfo";
import { Headline } from './styles/Typography';

const MotionButton = motion(OutlinedButton);

const MotionFlex = motion(FlexContainer);

function Welcome({ onButtonClick }) {
  const [buttonHover, setButtonHover] = useState(false);

  const onEnterHandler = () => setButtonHover(true);
  const onLeaveHandler = () => setButtonHover(false);

  return (
    <MotionFlex 
      initial={{
        y: 10,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        delay: 0.3
      }}
      flexDir="column"
      alignItems="center"
    >
      <motion.div 
        animate={{
          scale: buttonHover ? 0.9 : 1
        }}
      >
        <Headline style={{ margin: 0 }} dangerouslySetInnerHTML={{ __html: MainInfo.title  }} />
        <p>{MainInfo.description}</p>
      </motion.div>

      <MotionButton 
        onClick={onButtonClick}
        onMouseEnter={onEnterHandler}
        onMouseLeave={onLeaveHandler}
        whileHover={{
          scale: 1.2,
        }}
      >
        Open the Terminal
      </MotionButton>
    </MotionFlex>
  )
}

export default Welcome;