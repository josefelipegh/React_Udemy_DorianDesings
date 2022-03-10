import Button from "./components/button/Button";
import Title from "./components/title/Title";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import colors from "./components/theming/colors";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: greenyellow;
  }
`

function App() {
  return (
    <>
      <GlobalStyle/>
      <Title/>
      <ThemeProvider theme={colors}>
        <Button>Click Me!</Button>
        <Button danger>Click Me!</Button>
        <Button ghost>Ghost Me!</Button>
        <Button danger ghost>Ghost Me!</Button>
      </ThemeProvider>
    </>
  );
}

export default App;
