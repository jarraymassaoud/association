import React from "react";
import { HashRouter } from "react-router-dom"; // 👈 زدنا هذا
import Main from "./components/Main";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </HashRouter>
  );
}

export default App;
