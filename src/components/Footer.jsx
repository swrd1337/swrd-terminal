import { motion } from "framer-motion";
import { FlexContainer } from "./styles/Flex";
import { Typography } from "./styles/Typography";
import MainInfo from "../resources/mainInfo";
import { GithubIcon } from "./styles/Icon";

const MotionFlex = motion(FlexContainer);

function Footer() {
  return (
    <footer>
      <MotionFlex
        h="40px"
        w="100%"
        p="0 15px"
        justifyContent="space-between"
        alignItems="center"
        initial={{
          y: 10,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <Typography>{MainInfo.author}</Typography>
        <a href={MainInfo.githubUrl} target="_blank">
          <span>
            <GithubIcon />
          </span>
        </a>
      </MotionFlex>
    </footer>
  );
}

export default Footer;
