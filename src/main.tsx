import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, keyFrames, extendTheme } from "@chakra-ui/react";
import App from "./App";
import "./index.css";

const theme = extendTheme({
  fonts: {
    body: "Sharp Sans",
    heading: "sans-serif",
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
