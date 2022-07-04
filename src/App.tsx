import styled, { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import "./App.css";
import Header from "./components/common/Header";
import { theme } from "./styles/theme";
import { RecoilRoot } from "recoil";
import MainSection from "./components/common/MainSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <RecoilRoot>
        <AppContainer>
          <Header />
          <MainSection />
        </AppContainer>
      </RecoilRoot>
    </ThemeProvider>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

export default App;
