import styled, { createGlobalStyle } from "styled-components";

export const StyleWrapper = styled.div`
  root: {
    --new-spacer: 1rem;
  }
  background-color: #eee;
  padding: 0.5rem 0;

  header,
  footer {
    width: 99%;
    max-width: 1080px;
    margin: 0 auto;
  }
`;

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    font-family: sans-serif;
    font-size: 100%;
    line-height: 1.5;
    text-rendering: optimizeSpeed;
  }

  img {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  main,
  aside {
    padding: calc(var(--spacer) * var(--multiplicator-2));
  }

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }

    html {
      scroll-behavior: initial;
    }
  }
`;


