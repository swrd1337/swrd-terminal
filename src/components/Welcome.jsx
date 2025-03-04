import { FlexContainer } from './styles/Flex';
import { motion } from 'framer-motion';
import MainInfo from '../resources/mainInfo';
import { Headline } from './styles/Typography';
import styled from 'styled-components';
import { media } from './styles/breakpoints';

const MotionFlex = motion(FlexContainer);

const TerminalButton = motion(styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.textColor.primary};
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: 600;
  border-radius: 12px;
  padding: 10px;
  max-width: 210px;
  margin: 10px;
  min-width: 164px;
  &:hover {
    cursor: pointer;
    background-color: #87c7bd24;
  }
`);

const ResumeButton = motion(styled.button`
  background-color: transparent;
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.textColor.primary};
  font-weight: 600;
  padding: 10px;
  margin: 10px;
  min-width: 164px;
  &:hover {
    cursor: pointer;
    background-color: #87c7bd24;
  }
`);

const ArrowButton = motion(styled.button`
  background-color: transparent;
  border: none;
  border-radius: 36px;
  color: ${({ theme }) => theme.textColor.primary};
  padding: 20px;
  &:hover {
    cursor: pointer;
    background-color: #87c7bd24;
  }
`);

const HeadlineContainer = styled.div`
  margin: 32px;
  @media ${media.mobile} {
    margin: 8px;
  }
`;

function Welcome({ onButtonClick }) {
  const onDownloadClick = () => {
    window.open('./cv.pdf', '_blank');
  };

  return (
    <MotionFlex
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
      flexDir='column'
      alignItems='center'
      justifyContent='center'
    >
      <HeadlineContainer>
        <Headline
          style={{ margin: 0 }}
          dangerouslySetInnerHTML={{ __html: MainInfo.title }}
        />
        <p dangerouslySetInnerHTML={{ __html: MainInfo.description }} />
      </HeadlineContainer>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <TerminalButton
          onClick={onButtonClick}
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
        >
          Open terminal
        </TerminalButton>
        <ResumeButton
          onClick={onDownloadClick}
          whileHover={{
            scale: 1.2,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 15,
          }}
        >
          Download CV
        </ResumeButton>
      </div>
    </MotionFlex>
  );
}

export default Welcome;
