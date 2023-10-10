import "./styles/index.scss";
import { StrictMode } from "react";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { createRoot } from "react-dom/client";

import { App } from "@/App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
