import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout/Layout";
import Dashborad from "./pages/Dashboard/Dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Layout sidebar navbar>
      <Dashborad />
    </Layout>
  </React.StrictMode>,
);

reportWebVitals();
