import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./component/Error/Error";
import Loader from "./component/Loaded/Loader";
import App from "./RootLayout/AppLayout";
import Body from "./pages/Body";

const LazyGalleryPage = lazy(() => import("./pages/Gallery"));
const LazyAboutPage = lazy(() => import("./pages/About"));
const LazyContactPage = lazy(() => import("./pages/Contact"));
const LazyTermCondition = lazy(() => import("./component/TermAndCondition/TermCondition"));
const LazyPrivacyPolicy = lazy(() => import("./component/PrivacyPolicy/PrivacyPolicy"));
const LazySiteMap = lazy(() => import("./component/Sitemap/Sitemap"));

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
        path: "/gallery",
        element: <Suspense fallback={<Loader />}><LazyGalleryPage /></Suspense>,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Loader />}><LazyAboutPage /></Suspense>,
      },
      {
        path: "/contact",
        element: <Suspense fallback={<Loader />}><LazyContactPage /></Suspense>,
      },
      {
        path: "/terms-and-condition",
        element: <Suspense fallback={<Loader />}><LazyTermCondition /></Suspense>,
      },
      {
        path: "/privacy-policy",
        element: <Suspense fallback={<Loader />}><LazyPrivacyPolicy /></Suspense>,
      },
      {
        path: "/sitemap",
        element: <Suspense fallback={<Loader />}><LazySiteMap /></Suspense>,
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={browerRouter} />
  </React.StrictMode>
);
