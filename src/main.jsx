import "./index.css";
import React from "react";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import ReactDOM from "react-dom/client";
import Settings from "./pages/settings.jsx";
import SignInPage from "./pages/sign-in.jsx";
import SignUpPage from "./pages/sign-up.jsx";
import Analytics from "./pages/analytics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Account from "./pages/account";

// const [city, setCity] = useState("Sri Lanka")

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/analytics",
        element: <Analytics />,
      },
      {
        path: "/account",
        element: <Account />,
      },
    ],
  },
  {
    element: <SignUpPage />,
    path: "/sign-up",
  },
  {
    element: <SignInPage />,
    path: "/sign-in",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
