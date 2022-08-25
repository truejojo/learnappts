import React from "react";
import Header from "./components/Header";
import MainThemeContent from "./components/MainThemeContent";
import Counter from "./components/Counter";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainThemeContent />
        <Counter initialState={0} />
      </div>
    </>
  );
}

export default App;
