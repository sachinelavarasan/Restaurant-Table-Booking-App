// import React from "react";
// import { Route, Routes as Switch, useLocation } from "react-router";
// import Navbar from "../../components/shared/Navbar"

// import {
//   HotelList,
//   ViewHotel,
//   CommentsList,
//   MenuAndOfferHotel,
//   BookingTable,
//   HistoryList,
// } from "./pages-new";

// const Admin = () => {
//   const match = useLocation();
//   console.log(match)

//   return (
//     <>
//       <Switch>
//         <Route
//           exact
//           path={[
//             `${match.pathname}/hotelList/:hotelId/view`,
//             `${match.pathname}/hotelList/:hotelId/view-comments`,
//             `${match.pathname}/hotelList/:hotelId/book-table`,
//           ]}
//           render={() => null}
//         />
//         <Route element={<Navbar />} />
//       </Switch>
//       <Navbar />
//       <Switch>
//         <Route element={<HotelList />} exact path="/" />
//         <Route element={<HistoryList />} exact path={`/history`} />

//         <Route
//           element={<ViewHotel />}
//           exact
//           path={`/hotelList/:hotelId/view`}
//         />
//         <Route
//           element={<CommentsList />}
//           exact
//           path={`/hotelList/:hotelId/view-comments`}
//         />
//         <Route
//           element={<MenuAndOfferHotel />}
//           exact
//           path={`/hotelList/:hotelId/menu-offer`}
//         />
//         <Route
//           element={<BookingTable />}
//           exact
//           path={`/hotelList/:hotelId/book-table`}
//         />
//       </Switch>
//     </>
//   );
// };

// export default Admin;



import React from "react";
import { Outlet, useMatches } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";

const Admin = () => {
  const matches = useMatches();
  console.log(matches);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Admin;
