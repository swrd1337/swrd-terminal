import { FlexContainer } from "./components/styles/Flex";
import { BackgroundImage } from "./components/styles/Image";
import Welcome from './components/Welcome';

function App() {
  return (
    <main>
      <FlexContainer h="100vh" justifyContent="center" alignItems="center">
        <BackgroundImage src="./eva_bg.gif" alt="Evangelion blur background" />
        <Welcome onButtonClick={() => {}} />
      </FlexContainer>
    </main>
  );
}

export default App;
