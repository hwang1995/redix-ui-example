import ReactDOM from "react-dom/client";
import { Theme } from "@radix-ui/themes";
import App from "./App.tsx";
import "@radix-ui/themes/styles.css";
import "./index.css";

import "@fontsource/ibm-plex-sans-kr/100.css";
import "@fontsource/ibm-plex-sans-kr/200.css";
import "@fontsource/ibm-plex-sans-kr/300.css";
import "@fontsource/ibm-plex-sans-kr/400.css";
import "@fontsource/ibm-plex-sans-kr/500.css";
import "@fontsource/ibm-plex-sans-kr/600.css";
import "@fontsource/ibm-plex-sans-kr/700.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Theme appearance="light" radius="full">
      <App />
    </Theme>
  </>
);
