import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const jsonServer = require("json-server"); // importing json-server library
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

// server.use(middlewares);
// server.use(router);

// server.listen(port);
