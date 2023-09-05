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
            <img src={img} />
            <div className="py-10">
              <button onClick={logout} className="bg-red-500 py-5 px-5 rounded-md">Log out</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
