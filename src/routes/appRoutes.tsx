import { createBrowserRouter} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import Trade from "../pages/Trade";
import Login from "../pages/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/trade",
        element: <Trade/>
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;