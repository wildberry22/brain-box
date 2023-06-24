import '@fontsource/poppins';
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter as Router} from 'react-router-dom'
import theme from "./theme.js";
import App from "./App.jsx";
import './main.css'


ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Router>
      <App />
    </Router>
  </ChakraProvider>
);
