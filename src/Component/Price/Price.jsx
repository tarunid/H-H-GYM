import "./Price.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Price = () => {

  const [priceCards, setPriceCards] = useState([]);

  useEffect(() => {
    const url = 'https://hh-gym-backend-production.up.railway.app/api/price/all';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPriceCards(data.deserializedPriceCards);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  priceCards.sort((a, b) => a.price - b.price);

  return (
    <>
      <section className="py-14 bg">
        <div className="2xl:container mx-auto">
          <div className="grid grid-cols-1 w-[80%] mx-auto pb-14">
            <div className="flex flex-col justify-center items-center text-center my-1">
              <div className="bg-heroSection-heading py-5">
                <h3 className="heading-3-bg">PRICE</h3>
              </div>

              <h2 className="heading-2 py-5">Exclusive Pricing Plan</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 w-[90%] mx-auto">
            {priceCards.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center w-[90%] mx-auto bg-[#e8e8e8] text-[#000] rounded-lg my-5 py-5 hover:scale-105"
              >
                <div className="flex justify-between items-center w-[80%] mx-auto py-5">
                  <h3 className="price-haeding">{item.tag}</h3>
                </div>

                <ul className="w-[80%] mx-auto py-5 leading-loose ul-tag">
                  {item.description.map((desc, index) => (
                    <li key={index}>&#10003; {desc}</li>
                  ))}
                </ul>

                <h2 className="flex justify-start items-center text-center w-[80%] mx-auto py-5">
                  <p className="price">{item.price}</p>
                  <span className="month-price">/ month</span>
                </h2>

                <div className="py-5">
                  <button>
                    <Link className="fancy" to="/contact">
                      <span className="top-key"></span>
                      <span className="textt">Enroll Now</span>
                      <span className="bottom-key-1"></span>
                      <span className="bottom-key-2"></span>
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Price;