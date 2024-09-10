import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Ranking from "./pages/Ranking";
import ErrorPage from "./pages/ErrorPage.jsx";
import Loader from "./pages/Loader.jsx";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,

        element: <Home />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
