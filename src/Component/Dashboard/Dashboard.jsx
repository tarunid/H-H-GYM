import { Link } from "react-router-dom";
import img from "../../assets/HH_Logo.png";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = () => {

  let { logout } = useAuth();

  return (
    <>
      <section className="pt-16">
        <div className="flex">
          <div className="w-[100%] flex flex-col flex-grow  h-screen justify-start items-center text-center">
            CMS DASHBOARD HOME
            <img src={img} alt="img" className="w-20 py-11" />

            <div>

            </div>

            <div className="2xl:container">
              <div className="w-[100%] mx-auto grid grid-cols-2 gap-5">
                <div className="py-5">
                  <Link to="/dashboard/gallery-dashboard"><button className="bg-orange-500 py-2 px-5 rounded-md">Gallery dashboard</button></Link>
                </div>
                <div className="py-5 ">
                  <Link to="/dashboard/gym-price-dashboard"><button className="bg-orange-500 py-2 px-5 rounded-md">Price Dashboard</button></Link>
                </div>
                <div className="py-5 ">
                  <Link to="/dashboard/trainer-dashboard"><button className="bg-orange-500 py-2 px-5 rounded-md">Trainer Dashboard</button></Link>
                </div>
                <div className="py-5 ">
                  <Link to="/dashboard/feedback-dashboard"><button className="bg-orange-500 py-2 px-5 rounded-md">Feedback Dashboard</button></Link>
                </div>
                <div className="py-5">
                  <Link to="/dashboard/google-product"><button className="bg-orange-500 py-2 px-5 rounded-md">Google Products</button></Link>
                </div>

                <div className="py-5">
                  <button className="bg-orange-500 py-2 px-5 rounded-md" onClick={logout}>Log out</button>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
