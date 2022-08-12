import { motion } from 'framer-motion';
import { FlexContainer } from './styles/Flex';

const MotionFlex = motion(FlexContainer);

function Footer() {
  return (
    <footer>
      <MotionFlex>
        placeholder
      </MotionFlex>
    </footer>
  )
}

export default Footer;