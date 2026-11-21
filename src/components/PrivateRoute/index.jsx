import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store";

const PrivateRoute = ({ children }) => {
  const { token, user } = useAuthStore();
  return token && user ? children : <Navigate replace to="/" />;
};

export default PrivateRoute;
