import { createBrowserRouter } from "react-router-dom";
import RootElement from "../RootElement/RootElement";
import Error404 from "../RootElement/Error404";
import App from "../App";
import SignIn from "../Auth/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("/touristSpot.json"),
      },
      {
        path: "/booking",
        element: <SignIn />,
        loader: () => fetch("/touristSpot.json"),
      },
    ],
  },
]);

export default router;
