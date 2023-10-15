import FeedBack from "../component/Feedback/FeedBack";
import Offer from "../component/Offer/Offer";
import Price from "../component/Price/Price";
import HeroSection from "../component/HeroSection/HeroSection";
import Bmi from "../component/Bmi/Bmi";
import Choose from "../component/Choose/Choose";
import Featuers from "../component/Features/Features";
import { useEffect } from "react";
import ReactGA from 'react-ga';
import { Helmet } from "react-helmet";

const Body = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Helmet>

        <title>H&H FITNESS STUDIO</title>

        {/* <!-- Favicon --> */}
        <link rel="icon" type="image/svg+xml" href="/HH-Logo.png" />

        {/* <!-- Meta Description (for SEO) --> */}
        <meta name="description"
          content="Welcome to HH Fitness Studio! Discover a world of fitness and wellness at hhfitnessstudio.com. We offer top-notch facilities, expert trainers, and a wide range of fitness programs. Join us today and start your journey to a healthier lifestyle." />

        {/* <!-- Canonical Link (if necessary) --> */}
        <link rel="canonical" href="https://hhfitnessstudio.com" />

        {/* <!-- Open Graph Meta Tags (for social media sharing) --> */}
        <meta property="og:title" content="H&H FITNESS STUDIO" />
        {/* <!-- Open Graph Meta Description (for Social Sharing) --> */}
        <meta property="og:description"
          content="Join HH Fitness Studio for a healthier, happier you! Explore our top-notch facilities, expert trainers, and diverse fitness programs. Start your fitness journey today." />

        <meta property="og:image" content="/HH-Logo.png" />
        <meta property="og:url" content="https://hhfitnessstudio.com" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Card Meta Tags (for Twitter sharing) --> */}
        <meta name="twitter:card" content="/HH-Logo.png" />
        <meta name="twitter:title" content="H&H FITNESS STUDIO" />
        {/* <!-- Twitter Card Meta Description (for Twitter Sharing) --> */}
        <meta name="twitter:description"
          content="Join HH Fitness Studio for a healthier, happier you! Explore our top-notch facilities, expert trainers, and diverse fitness programs. Start your fitness journey today." />

        <meta name="twitter:image" content="/HH-Logo.png" />

      </Helmet>
      <HeroSection />
      <Featuers />
      <Offer />
      <Choose />
      <FeedBack />
      <Price />
      <Bmi />
    </>
  );
};

export default Body;
