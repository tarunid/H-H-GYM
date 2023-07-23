import FeedBack from "../Component/Feedback/FeedBack";
import Offer from "../Component/Offer/Offer";
import Price from "../Component/Price/Price";
import HeroSection from "../Component/HeroSection/HeroSection";
import Bmi from "../Component/Bmi/Bmi";
import Choose from "../Component/Choose/Choose";
import Featuers from "../Component/Features/Features";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const Body = () => {
  useEffect(() => {
    Aos.init({once:true});
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
