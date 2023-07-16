import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
