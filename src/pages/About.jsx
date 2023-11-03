import { useEffect } from "react";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import About from "../component/About/About";

const AboutPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>About Us - H&H FITNESS STUDIO</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Learn about the story, mission, and passionate team behind HH Fitness Studio. Discover how we're dedicated to helping you achieve your fitness goals." />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://hhfitnessstudio.com/about" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="About Us - H&H FITNESS STUDIO" />
        <meta property="og:description" content="Learn about the story, mission, and passionate team behind HH Fitness Studio. Discover how we're dedicated to helping you achieve your fitness goals." />
        <meta property="og:url" content="https://hhfitnessstudio.com/about" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="About Us - H&H FITNESS STUDIO" />
        <meta name="twitter:description" content="Learn about the story, mission, and passionate team behind HH Fitness Studio. Discover how we're dedicated to helping you achieve your fitness goals." />
      </Helmet>
      <About />
    </>
  );
};

export default AboutPage;
