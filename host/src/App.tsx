import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { RemoteContent } from "remote/RemoteContent";

const App = () => (
  <div className="container">
    <nav className="sidebar">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Help</li>
        <li>Exit</li>
      </ul>
    </nav>
    <section className="content">
      <RemoteContent />
    </section>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(<App />);
