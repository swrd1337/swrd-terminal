import { FlexContainer } from "./components/styles/Flex";
import { BackgroundImage } from "./components/styles/Image";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import TerminalWindow from "./components/TerminalWindow";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [openTerminal, setOpenTerminal] = useState(false);

  const containerRef = useRef();

  const [boundaries, setBoundaries] = useState();

  useEffect(() => {
    if (containerRef.current) {
      setBoundaries({
        height: containerRef.current.scrollHeight,
        width: containerRef.current.scrollWidth,
      })
    }
  }, []);

  const onOpenClickHandler = () => setOpenTerminal(!openTerminal);

  return (
    <>
      <main>
        <FlexContainer
          h="100vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          ref={containerRef}
        >
          <BackgroundImage
            src="./eva_bg.gif"
            alt="Evangelion blur background"
          />
          <motion.div
            animate={{
              y: openTerminal ? -1000 : 0,
              display: openTerminal ? "none" : "block",
            }}
          >
            <Welcome onButtonClick={onOpenClickHandler} />
          </motion.div>
          <TerminalWindow
            openTerminal={openTerminal}
            onClose={onOpenClickHandler}
            boundaries={boundaries}
          />
        </FlexContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
