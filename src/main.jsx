import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Component/Error/Error";
import App from "./Component/AppLayout";
import Body from "./pages/Body";
import ProtectedRouter from "./Component/Dashboard/ProtectedRouter";
import Gallerydashboard from "./Component/Dashboard/Gallerydashboard";
import AboutPage from "./pages/About";
import GalleryPage from "./pages/Gallery";
import ContactPage from "./pages/Contact";
import Dashboard from "./Component/Dashboard/Dashboard";
import Login from "./Component/Login/Login";
import Gympricedashboard from "./Component/Dashboard/Gympricedashboard";
import GoogleProducts from "./Component/Dashboard/GoogleProducts";
import TermCondition from "./Component/TermAndCondition/TermCondition";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import TestimonialDashboard from "./Component/Dashboard/TestimonialDashboard";
import GymTrainerDashboard from "./Component/Dashboard/GymTrainerDashboard";

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
      {
        path: "/dashboard",
        element: <ProtectedRouter />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "google-product",
            element: <GoogleProducts />,
          },
          {
            path: "gallery-dashboard",
            element: <Gallerydashboard />,
          },
          {
            path: "gym-price-dashboard",
            element: <Gympricedashboard />,
          },
          {
            path:"trainer-dashboard",
            element:<GymTrainerDashboard/>
          },
          {
            path: "feedback-dashboard",
            element: <TestimonialDashboard />,
          }
        ],
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
