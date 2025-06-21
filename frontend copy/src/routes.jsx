import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Admin from "./pages/Admin";
import Hotel from "./pages/Hotel";

import {
  HotelMenuList,
  OffersList,
  ViewHotelTables,
  BookingCalender,
  BookedTables,
  HotelUserComments,
} from "./pages/Hotel/pages";

import {
  HotelList,
  ViewHotel,
  CommentsList,
  MenuAndOfferHotel,
  BookingTable,
  HistoryList,
} from "./pages/Admin/pages-new";

import { LoginRoute } from "./PrivateRoute"; // Assuming this is your wrapper for auth routes
import ForgotPasswordOld from "./pages/ForgotPasswordOld";
import ResetPassword from "./pages/PasswordReset";
import Signup from "./pages/SignupOld";
import ActivateUser from "./pages/ActivateUser";
import { ForgotPassword, Login, Register } from "./pages/Auth/pages";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: <Admin />,
    children: [
      { index: true, element: <HotelList /> },
      { path: "history", element: <HistoryList /> },
      { path: "hotelList/:hotelId/view", element: <ViewHotel /> },
      { path: "hotelList/:hotelId/view-comments", element: <CommentsList /> },
      { path: "hotelList/:hotelId/menu-offer", element: <MenuAndOfferHotel /> },
      { path: "hotelList/:hotelId/book-table", element: <BookingTable /> },
    ],
  },
  {
    path: "/hotel",
    element: <Hotel />,
    children: [
      { index: true, element: <HotelMenuList /> },
      { path: "offers", element: <OffersList /> },
      { path: "tables", element: <ViewHotelTables /> },
      { path: "reservations/calender", element: <BookingCalender /> },
      { path: "reservations", element: <BookedTables /> },
      { path: "comments", element: <HotelUserComments /> },
    ],
  },
  // Auth / login related routes (no layout wrapper assumed here)
  {
    path: "/verify/:id",
    element: <LoginRoute element={<ActivateUser />} />,
  },
  {
    path: "/password-reset/:id",
    element: <LoginRoute element={<ResetPassword />} />,
  },
  {
    path: "/forgot-password",
    element: <LoginRoute element={<ForgotPassword />} />,
  },
  {
    path: "/login",
    element: <LoginRoute element={<Login />} />,
  },
  {
    path: "/reset-password-confirmation",
    element: <LoginRoute element={<ForgotPasswordOld />} />,
  },
  {
    path: "/register",
    element: <LoginRoute element={<Register />} />,
  },
  {
    path: "/register-success",
    element: <LoginRoute element={<Signup />} />,
  },
]);

export default router;
