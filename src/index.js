import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import { Layout } from "./components/common";
import App from "./components/app";

import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Layout>
		<App />
	</Layout>
);

reportWebVitals();
serviceWorker.unregister();
