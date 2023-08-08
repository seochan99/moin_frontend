import React from "react";
import { RecoilRoot } from "recoil";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import router from "./router";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  </React.StrictMode>
);
