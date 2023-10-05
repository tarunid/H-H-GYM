import { useEffect } from "react";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";
import Gallery from "../Component/GalleryGrid/Gallery";

const GalleryPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>
        {/* Page Title */}
        <title>Gallery View - H&H FITNESS STUDIO</title>

        {/* Meta Description (for SEO) */}
        <meta name="description" content="Explore our gallery showcasing the vibrant atmosphere, state-of-the-art equipment, and energetic workouts at HH Fitness Studio. See what awaits you." />

        {/* Canonical Link (if necessary) */}
        <link rel="canonical" href="https://hhfitnessstudio.com/gallery" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Gallery View - H&H FITNESS STUDIO" />
        <meta property="og:description" content="Explore our gallery showcasing the vibrant atmosphere, state-of-the-art equipment, and energetic workouts at HH Fitness Studio. See what awaits you." />
        <meta property="og:url" content="https://hhfitnessstudio.com/gallery-view" />

        {/* Twitter Card Meta Tags (for Twitter sharing) */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Gallery View - H&H FITNESS STUDIO" />
        <meta name="twitter:description" content="Explore our gallery showcasing the vibrant atmosphere, state-of-the-art equipment, and energetic workouts at HH Fitness Studio. See what awaits you." />
      </Helmet>
      <Gallery />
    </>
  );
};

export default GalleryPage;
