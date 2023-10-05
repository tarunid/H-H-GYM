import FeedBack from "../Component/Feedback/FeedBack";
import Offer from "../Component/Offer/Offer";
import Price from "../Component/Price/Price";
import HeroSection from "../Component/HeroSection/HeroSection";
import Bmi from "../Component/Bmi/Bmi";
import Choose from "../Component/Choose/Choose";
import Featuers from "../Component/Features/Features";
import { useEffect } from "react";
import ReactGA from 'react-ga';

const Body = () => {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
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
