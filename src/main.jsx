
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login.jsx";
import Home from "./pages/home/home.jsx";
import Deforestation from "./pages/deforestation/Deforestation.jsx";
import SoilErosion from "./pages/soilErosion/SoilErosion.jsx";
import SelectCharacter from "./pages/selectCharacter/selectCharacter.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path : "/Deforestation",
    element: <Deforestation/>,
  },
  {
    path: "/SoilErosion",
    element: <SoilErosion/>
  },
  {
    path: "/selectCharacter",
    element: <SelectCharacter/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
