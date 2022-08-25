import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainThemeContent from "./components/MainThemeContent";
import Counter from "./components/Counter";
import Theme from "./components/Theme";
import Like from "./assets/Like";
import styled from "styled-components";
import { ThemeContentCounterProvider } from "./provider/ThemeContentCounter";
import { ThemeContentProvider } from "./provider/ThemeContent";

function App() {
  const Container = styled.div`
    width: 90%;
    max-width: 960px;
    margin: 0 auto;

    @media (min-width: 700px) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-gap: 1rem;
    }
  `;

  return (
    <ThemeContentCounterProvider>
      <ThemeContentProvider>
        <Header />
        <Container>
          <MainThemeContent />
          <aside>
            <Counter />
            <Theme />
            <Like />
          </aside>
        </Container>
        <Footer />
      </ThemeContentProvider>
    </ThemeContentCounterProvider>
  );
}

export default App;
