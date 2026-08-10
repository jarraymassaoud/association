import React from "react";
import { BrowserRouter } from "react-router-dom"; // 👈 زدنا هذا
import Main from "./components/Main";
import { LanguageProvider } from "./context/LanguageContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
