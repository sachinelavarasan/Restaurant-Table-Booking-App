/* eslint react/prop-types: 0 */
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { fetchProfile } from "./redux/authSlice";

const isAuthenticated = () => {
  const token = localStorage.getItem("jwtToken");
  return !!token;
};

export const PrivateRoute = ({ element, isAdmin, isTeacher }) => {
  const token = useRef(isAuthenticated()).current;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("token",token)
    if (token) {
      dispatch(
        fetchProfile(() => {
          // If fetchProfile fails (e.g. token invalid), redirect to login
          navigate("/login");
        })
      );
    }
  }, [token, dispatch, navigate]);

  if (!token) {
    // Not logged in, redirect to login, preserve current location
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const userType = localStorage.getItem("jc-user-type");

  if (isAdmin && userType !== "1") {
    // If route requires admin and user is not admin, redirect to user homepage
    return <Navigate to="/admin" state={{ from: location }} replace />;
  }

  if (isTeacher && userType !== "2") {
    // If route requires teacher and user is not teacher, redirect to hotel homepage
    return <Navigate to="/hotel" state={{ from: location }} replace />;
  }

  // All good, render the wrapped component
  return element;
};

export const LoginRoute = ({ element }) => {
  const token = isAuthenticated();

  if (token) {
    // Already logged in, redirect away from login/register pages
    return <Navigate to="/hotel" replace />;
  }

  return element;
};
