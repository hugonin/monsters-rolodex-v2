import ReactDom from "react-dom/client";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";

ReactDom.createRoot(document.getElementById("root")).render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
)
  
 

