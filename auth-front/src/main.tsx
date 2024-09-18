import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Login from "./routes/Login.tsx";
import Dashboard from "./routes/Dashboard.tsx";
import Signup from "./routes/Signup.tsx";
import ProtectRoute from "./routes/ProtectRoute.tsx";
import { AuthProvider } from "./auth/AuthProvider.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <ProtectRoute />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
