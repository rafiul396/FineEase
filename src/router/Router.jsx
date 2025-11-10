import { createBrowserRouter } from "react-router";
import Root from "../root/Root";
import Home from "../pages/home/Home";
import Signup from "../pages/log-sign/Signup";
import Login from "../pages/log-sign/Login";
import AddT from "../pages/add-transaction/AddT";
import Mytransaction from "../pages/my-transaction/Mytransaction";
import Details from "../pages/Details/Details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
        {
            index: true,
            element: <Home />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/add-transaction",
          element: <AddT />
        },
        {
          path: "/my-transaction",
          loader: () => fetch('http://localhost:3000/my-transaction'),
          element: <Mytransaction />
        },
        {
          path: "/transaction-details/:id",
          loader: ({ params }) => fetch(`http://localhost:3000/my-transaction/${params.id}`),
          element: <Details />
        }
    ]
  },
]);