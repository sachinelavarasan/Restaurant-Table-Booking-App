import React from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";

import User from "./pages/Admin";
import Hotel from "./pages/Hotel";

import ForgotPasswordOld from "./pages/ForgotPasswordOld";
import ResetPassword from "./pages/PasswordReset";
import Signup from "./pages/SignupOld";
import ActivateUser from "./pages/ActivateUser";

import { LoginRoute, PrivateRoute } from "./PrivateRoute";
import { ForgotPassword, Login, Register } from "./pages/Auth/pages";

function App() {
  const userType = localStorage.getItem("jc-user-type");

  return (
    <>
      <Helmet>
        <title>Restaurant Table Booking</title>
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            userType === "1" ? (
              <Navigate to="/hotel" replace />
            ) : (
              <Navigate to="/admin" replace />
            )
          }
        />

        {/* <Route path="/user/*" element={<User />} />

        <Route
          path="/hotel/*"
          element={<PrivateRoute element={<Hotel />} isAdmin />}
        />

        <Route
          path="/verify/:id"
          element={<LoginRoute element={<ActivateUser />} />}
        />
        <Route
          path="/password-reset/:id"
          element={<LoginRoute element={<ResetPassword />} />}
        />
        <Route
          path="/forgot-password"
          element={<LoginRoute element={<ForgotPassword />} />}
        />
        <Route path="/login" element={<LoginRoute element={<Login />} />} />
        <Route
          path="/reset-password-confirmation"
          element={<LoginRoute element={<ForgotPasswordOld />} />}
        />
        <Route
          path="/register"
          element={<LoginRoute element={<Register />} />}
        />
        <Route
          path="/register-success"
          element={<LoginRoute element={<Signup />} />}
        /> */}
      </Routes>
    </>
  );
}

export default App;
