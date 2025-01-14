import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);

    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
