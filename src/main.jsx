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
import Level1 from "./pages/deforestation/level0/level1.jsx";
import Level2 from "./pages/deforestation/level0/level2.jsx";
import Level3 from "./pages/deforestation/level0/level3.jsx";
import Level4 from "./pages/deforestation/level0/level4.jsx";

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
    path: "/level1",
    element: <Level1/>
  },
  {
    path: "/level2",
    element: <Level2/>
  },
  {
    path: "/level3",
    element: <Level3/>
  },
  {
    path: "/level4",
    element: <Level4/>
  },

]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);