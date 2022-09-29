import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Resume from "./components/Resume";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider>
        <ColorModeScript initialColorMode="light"></ColorModeScript>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
