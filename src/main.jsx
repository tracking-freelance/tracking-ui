import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";
import { ToastContainer } from "react-toastify";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <ToastContainer />
    </RouterProvider>
  </React.StrictMode>
);
