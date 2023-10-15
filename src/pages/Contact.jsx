import { useEffect } from 'react';
import ReactGA from 'react-ga';
import Contact from "../component/Contact/Contact";
import { Helmet } from "react-helmet";

const ContactPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        {/* Page Title */}

        <title>Contact Us - H&H FITNESS STUDIO</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Get in touch with HH Fitness Studio. Our friendly team is here to answer your questions, schedule appointments, and assist with your fitness journey." />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://hhfitnessstudio.com/contact-us" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Contact Us - H&H FITNESS STUDIO" />
        <meta property="og:description" content="Get in touch with HH Fitness Studio. Our friendly team is here to answer your questions, schedule appointments, and assist with your fitness journey." />
        <meta property="og:url" content="https://hhfitnessstudio.com/contact-us" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact Us - H&H FITNESS STUDIO" />
        <meta name="twitter:description" content="Get in touch with HH Fitness Studio. Our friendly team is here to answer your questions, schedule appointments, and assist with your fitness journey." />
      </Helmet>
      <Contact />
    </>
  );
};

export default ContactPage;
