import { useEffect } from "react";
import ReactGA from 'react-ga';
import Gallery from "../Component/GalleryGrid/Gallery";

const GalleryPage = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Gallery />
    </>
  );
};

export default GalleryPage;
