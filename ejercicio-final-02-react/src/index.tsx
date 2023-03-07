import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

//*> json-server --watch api/fakeapi.json   



const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
 