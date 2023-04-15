import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout/Layout";
import Dashborad from "./pages/Dashboard/Dashboard";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout sidebar navbar>
        <Dashborad />
      </Layout>
    </Provider>
  </React.StrictMode>,
);

reportWebVitals();
