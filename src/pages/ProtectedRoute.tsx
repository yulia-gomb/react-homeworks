import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";


const ProtectedRoute = () => {
    const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
    const location = useLocation();

    return isLoggedIn ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
};

export default ProtectedRoute;
