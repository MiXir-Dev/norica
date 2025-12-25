import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/500.css";
import "@fontsource/league-spartan/600.css";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";


createRoot(document.getElementById("root")!).render(<App />);
