import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import ReactGA from 'react-ga';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";


ReactGA.initialize('G-3GZQHE60S2');

const App = () => {
  let location = useLocation();
  // let { isLoading } = useAuth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [location]);


  useEffect(() => {
    // Track the page view when the Home component is mounted
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  // if (isLoading) {
  //   return <>
  //     <p>Loading...</p>
  //   </>
  // }

  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Toaster position="top-center" />
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
