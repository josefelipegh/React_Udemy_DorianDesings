import Button from "./components/button/Button";
import Title from "./components/title/Title";

import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./theming/colors";
import Responsive from "./components/responsive/Responsive";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: goldenrod;
  }
`

const ButtonRounded = styled(Button)`
  border-radius: 15px;
  padding: 1rem 2rem;
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Title/>
      <ThemeProvider theme={colors}>
        <Responsive>
            <Button>Click Me!</Button>
            <Button danger>Click Me!</Button>
            <Button ghost>Ghost Me!</Button>
            <Button danger ghost>Ghost Me!</Button>
            <ButtonRounded danger ghost>Rounded</ButtonRounded>
            <Button>Click Me!</Button>
        </Responsive>
      </ThemeProvider>
    </>
  );
}

export default App;
