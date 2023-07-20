import FeedBack from "../Component/Feedback/FeedBack";
import Offer from "../Component/Offer/Offer";
import Price from "../Component/Price/Price";
import HeroSection from "../Component/HeroSection/HeroSection";
// import Featuers from "../Component/Features/Featuers";
import Bmi from "../Component/Bmi/Bmi";
import Choose from "../Component/Choose/Choose";

const Body = () => {
  return (
    <>
      <HeroSection/>
      {/* <Featuers /> */}
      <Offer />
      <Choose/>
      <FeedBack />
      <Price /> 
      <Bmi/>
    </>
  );
};

export default Body;
