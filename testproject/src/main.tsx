// React機能の追加
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// CSS File
import "./scss/index.css";

// tsx file import
import Main from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
