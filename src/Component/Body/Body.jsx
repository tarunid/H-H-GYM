import FeedBack from "../Feedback/FeedBack";
import Offer from "../Offer/Offer";
import Price from "../Price/Price";
import HeroSection from "../HeroSection/HeroSection";
import Featuers from "../Features/Featuers";
import Bmi from "../Bmi/Bmi";
import Choose from "../Choose/Choose";

const Body = () => {
  return (
    <>
      <HeroSection/>
      <Featuers />
      <Choose/>
      <FeedBack />
      <Offer />
      <Price /> 
      <Bmi/>
    </>
  );
};

export default Body;
