import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login/Login.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import Home from "./pages/home/home.jsx";
import Deforestation from "./pages/deforestation/Deforestation.jsx";
import SoilErosionPage from "./pages/soilErosion/SoilErosionPage.jsx";
import Branch from "./pages/branch/Branch.jsx";

const router = createBrowserRouter([
   {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Quiz",
    element: <Quiz />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Deforestation",
    element: <Deforestation />,
  },
  {
    path: "/SoilErosionPage",
    element: <SoilErosionPage />,
  },
  {
    path: "/Branch",
    element:<Branch/>
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
