import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main";
import CartPage from "../pages/cart";
import ItemListPage from "../pages/itemlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/itemlist",
    element: <ItemListPage />,
  },
]);

export default router;
