import { useEffect } from "react";
import ReactGA from 'react-ga';
import About from "../Component/About/About";

const AboutPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <About />
    </>
  );
};

export default AboutPage;
