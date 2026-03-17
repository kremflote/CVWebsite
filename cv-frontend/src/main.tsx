import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TenureProvider } from "./contexts/TenureProvider.tsx";
import { SkillProvider } from "./contexts/SkillProvider.tsx";
import { ShowcaseProvider } from "./contexts/ShowcaseProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TenureProvider>
      <SkillProvider>
        <ShowcaseProvider>
          <App />
        </ShowcaseProvider>
      </SkillProvider>
    </TenureProvider>
  </StrictMode>,
);
