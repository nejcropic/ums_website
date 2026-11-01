import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = document.getElementById("root");
if (!root) throw new Error("Missing application root");
const prerendered = root.dataset.prerendered === "true";
const application = <BrowserRouter><App prerendered={prerendered} /></BrowserRouter>;
if (prerendered) hydrateRoot(root, application);
else createRoot(root).render(application);
