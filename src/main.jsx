import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TermCondition } from "./Component/TermAndCondition/TermCondition";
import { PrivacyPolicy } from "./Component/PrivacyPolicy/PrivacyPolicy";
import App from "./Component/AppLayout";
import Error from "./Component/Error/Error";
import Login from "./Component/Login/Login";
import Body from "./pages/Body";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";

let browerRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/terms-and-condition",
        element: <TermCondition />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browerRouter} />
  </React.StrictMode>
);
