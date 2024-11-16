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
import Level0 from "./pages/deforestation/level0/level0.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path : "/Deforestation",
    element: <Deforestation/>,
  },
  {
    path: "/soilErosion",
    element: <SoilErosion/>
  },
  {
    path: "/selectCharacter",
    element: <SelectCharacter/>
  },
  {
    path: "/level0",
    element: <Level0/>
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);