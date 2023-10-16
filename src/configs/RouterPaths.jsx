import { getImage } from "../../utils";
import App from "../pages/app/App";
import Home from "../pages/home/container/Home";
import Login from "../pages/login/container/Login";

export const RouterPaths = [
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/login",
        element:<Login/>,
    },
];
