import Button from "./components/button/Button";
import Title from "./components/title/Title";

import { ThemeProvider } from "styled-components";
import colors from "./components/theming/colors";

function App() {
  return (
    <>
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
