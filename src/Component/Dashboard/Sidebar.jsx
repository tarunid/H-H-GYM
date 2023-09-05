import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] flex flex-col flex-grow  h-screen justify-start items-center text-center bg-[#93C5F9]">
        <div className="w-[100%] flex flex-col items-center  py-5">
          <div className="py-5">
            <Link>
              <button>DashBoard Home</button>
            </Link>
          </div>
          <div className="py-5">
            <Link to="gallery-dashboard">
              <button>Gallery View</button>
            </Link>
          </div>
          <div className="py-5">
            <Link to="gym-price-dashboard">
              <button>Gym Price</button>
            </Link>
          </div>
          <div className="py-5">
            <Link to="trainer-info-dashboard">
              <button>Trainer Info</button>
            </Link>
          </div>
          <div className="py-5">
            <Link to="google-product">
              <button>Google Product</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
