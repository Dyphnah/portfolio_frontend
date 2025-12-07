
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { system } from "./theme.js"
import App from "./App.jsx";
import { Global, css } from "@emotion/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider value={system}>
          <Global
        styles={css`
          ::selection {
            background: #255059; 
            color: #FFFFFF;      
          }
        `}
      />
      <App />
    </ChakraProvider>
  </StrictMode>
);
