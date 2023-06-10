// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// import bootstrap from "./bootstrap";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
// bootstrap(() => {});

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(<App />);
