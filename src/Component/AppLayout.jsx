import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Toaster } from "react-hot-toast";

const App = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, [location]);

  return (
    <>
      <AuthProvider>
        <Header />
        <Outlet />
        <Toaster position="top-center"/>
        <Footer />
      </AuthProvider>
    </>
  );
};

export default App;
