import { createBrowserRouter } from "react-router-dom";
import Admin from "./Admin"; // or wherever your Admin component is
import {
  HotelList,
  ViewHotel,
  CommentsList,
  MenuAndOfferHotel,
  BookingTable,
  HistoryList,
} from "./pages-new";

const router = createBrowserRouter([
  {
    path: "/admin", // Admin layout path
    element: <Admin />,
    children: [
      { index: true, element: <HotelList /> }, // /admin
      { path: "history", element: <HistoryList /> }, // /admin/history
      { path: "hotelList/:hotelId/view", element: <ViewHotel /> },
      { path: "hotelList/:hotelId/view-comments", element: <CommentsList /> },
      { path: "hotelList/:hotelId/menu-offer", element: <MenuAndOfferHotel /> },
      { path: "hotelList/:hotelId/book-table", element: <BookingTable /> },
    ],
  },
]);

export default router;
