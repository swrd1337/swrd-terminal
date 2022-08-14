import { FlexContainer } from "./components/styles/Flex";
import { BackgroundImage } from "./components/styles/Image";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import TerminalWindow from "./components/TerminalWindow";
import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [openTerminal, setOpenTerminal] = useState(true);

  const onOpenClickHandler = () => setOpenTerminal(!openTerminal);

  return (
    <>
      <main>
        <FlexContainer
          h="100vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
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
          <motion.div
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
          >
            <TerminalWindow />
          </motion.div>
        </FlexContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
