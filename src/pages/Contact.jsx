import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Contact from "../Component/Contact/Contact";

const ContactPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
