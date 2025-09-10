import { createRoot } from "react-dom/client";

import "./app/styles/css/external/normolize.css";
import "./app/styles/css/global.css";
import "./app/styles/scss/_mixin.scss"

import MainPage from "./pages/main/main-page";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<MainPage />);
