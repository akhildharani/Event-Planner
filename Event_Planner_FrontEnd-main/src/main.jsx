import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthProvider";
import './index.css'
import ContProvider from "./ContProvider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ContProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
      </ContProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);  