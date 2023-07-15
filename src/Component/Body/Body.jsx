import FeedBack from "../Feedback/FeedBack";
import Trainer from "../Trainer/Trainer";
import Offer from "../Offer/Offer";
import Price from "../Price/Price";
import HeroSection from "../HeroSection/HeroSection";
import Featuers from "../Features/Featuers";

const Body = () => {
  return (
    <>
      <HeroSection/>
      <Featuers />
      <Trainer />
      <FeedBack />
      <Offer />
      <Price /> 
    </>
  );
};

export default Body;
