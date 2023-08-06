import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

import NavBar from "./components/layouts/NavBar";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0px 10px;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <Outlet />
      </Wrapper>
    </>
  );
};

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;
