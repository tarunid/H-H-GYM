import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ReactGA from 'react-ga';
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import { Toaster } from "react-hot-toast";
import Loader from "../component/Loaded/Loader";

ReactGA.initialize('G-3GZQHE60S2');

const App = () => {
  const [loading, setLoading] = useState(true);
  let location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);

    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });

    ReactGA.pageview(window.location.pathname + window.location.search);
  }, [location]);

  return (
    <>
    {loading ? (
        <Loader/>
      ) : (
        <AuthProvider>
          <Header />
          <Outlet />
          <Toaster position="top-center" />
          <Footer />
        </AuthProvider>
      )}
    </>
  );
};

export default App;
