import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import GlobalStyles from "./assets/styles/global";

import { ViewsProvider } from "./contexts/ViewsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <ViewsProvider>
      <App />
    </ViewsProvider>
  </React.StrictMode>
);
