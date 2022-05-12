import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import * as Sentry from "@sentry/react"
import {BrowserTracing} from "@sentry/tracing"
import reportWebVitals from "./reportWebVitals"

console.log(import.meta.env.MODE)
console.log(import.meta.env.VITE_APP_TITLE)

const sentryDSN = import.meta.env.VITE_SENTRY_DSN

if (sentryDSN) {
    Sentry.init({
        dsn: sentryDSN,
        integrations: [new BrowserTracing()],
        tracesSampleRate: 1.0,
    })
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)

reportWebVitals(console.log)

