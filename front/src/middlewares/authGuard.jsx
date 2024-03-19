import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
    const authed = useSelector((state) => state.token);

    return authed === null ? <Navigate to="/" replace /> : children ;
}

export default RequireAuth