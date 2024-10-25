import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/login/Login.jsx";
import Quiz from "./pages/quiz/Quiz.jsx";
import Home from "./pages/home/home.jsx";
import Deforestation from "./pages/deforestation/Deforestation.jsx"

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
    path : "/Deforestation",
    element: <Deforestation/>,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
