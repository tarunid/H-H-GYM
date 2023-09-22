import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.jsx";
import Sidebar from "./Sidebar.jsx";

const ProtectedRouter = () => {

  let { accessToken,isLoading } = useAuth();

  if(isLoading) {
    return<>
    <p>loading...</p>
    </>
  }

  console.log('accessToken inside ProtectedRouter:', accessToken);

  if (!accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <section className="pt-16">
        <div className="flex">
          <Sidebar />
          <div className="w-[100%] h-[100vh] flex flex-col flex-grow justify-start items-center text-center overflow-auto">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  )
};

export default ProtectedRouter;