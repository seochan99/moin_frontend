import { styled, ThemeProvider } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme.js";

import { Outlet } from "react-router-dom";

import { useState } from "react";
import NavBar from "./components/layouts/nabBar/NavBar";
import FooterBar from "./components/layouts/footer/FooterBar";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Layout = () => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <FooterBar />
    </>
  );
};

function App() {
  const [laguage, setLaguage] = useState("KOR");
  const getLanguage = laguage => {
    setLaguage(laguage);
  };
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
