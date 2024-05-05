import { FlexContainer } from "./components/styles/Flex";
import { BackgroundImage } from "./components/styles/Image";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import TerminalWindow from "./components/TerminalWindow";
import { useState } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [openTerminal, setOpenTerminal] = useState(false);

  const onOpenClickHandler = () => setOpenTerminal(!openTerminal);

  return (
    <>
      <main>
        <FlexContainer
          h="100vh"
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          responsive={true}
        >
          <BackgroundImage
            src="./eva_bg.webp"
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
          />
        </FlexContainer>
        <Analytics />
      </main>
      <Footer />
    </>
  );
}

export default App;
