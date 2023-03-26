import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuthStore } from "../../store";

const PrivateRoute = (props) => {
  const { token } = useAuthStore();
  const isAuthenticated = token !== "";

  return (
    <Route {...props}>
      {isAuthenticated ? props.children : <Navigate replace to="/" />}
    </Route>
  );
};

export default PrivateRoute;
