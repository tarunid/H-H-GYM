import { lazy, Suspense } from 'react'

import Error from "../component/Error/Error";
import Loader from "../component/Loaded/Loader";
import App from "../layout/AppLayout";
import Body from "../pages/Body";

const LazyGalleryPage = lazy(() => import("../pages/Gallery"));
const LazyAboutPage = lazy(() => import("../pages/About"));
const LazyContactPage = lazy(() => import("../pages/Contact"));
const LazyTermCondition = lazy(() => import("../component/PrivacyPolicy/PrivacyPolicy"));
const LazyPrivacyPolicy = lazy(() => import("../component/PrivacyPolicy/PrivacyPolicy"));
const LazySiteMap = lazy(() => import("../component/Sitemap/Sitemap"));

const routes = [
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
]

export default routes;