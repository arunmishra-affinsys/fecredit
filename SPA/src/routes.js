import { Navigate, useRoutes } from "react-router-dom";
// layouts
import DashboardLayout from "./layouts/dashboard";
import SimpleLayout from "./layouts/simple";
import BlogPage from "./pages/BlogPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
import CreditCards from "./pages/CreditCards";
import DebitCardPage from "./pages/DebitCardPage";
import Insurance from "./pages/Insurance";
import DashboardAppPage from "./pages/DashboardAppPage";
import Accounts from "./pages/Accounts";
import Loan from "./pages/Loan";
import { CardDetails } from "./sections/@dashboard/products/CardDetails";
import Deposits from "./pages/Deposits";

// ----------------------------------------------------------------------
export default function Router() {
  const routes = useRoutes([
    {
      path: "/",
      element: <BlogPage />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          element: <Navigate to="/dashboard/" />,
          index: true,
        },
        { path: "app", element: <DashboardAppPage /> },
        { path: "account", element: <Accounts /> },
        { path: "creditcard", element: <CreditCards /> },
        { path: "debitcard", element: <DebitCardPage /> },
        { path: "insurance", element: <Insurance /> },
        { path: "deposits", element: <Deposits /> },
        { path: "loan", element: <Loan /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
    {
      path: "/dashboard/creditcard/CardDetails/:id",
      element: <CardDetails />,
    },
    {
      path: "/dashboard/insurance/:id",
      element: <CardDetails />,
    },
    {
      path: "/dashboard/creditcard/:id",
      element: <CardDetails />,
    },
    {
      path: "/dashboard/account/:id",
      element: <CardDetails />,
    },
    {
      path: "/dashboard/deposits/:id",
      element: <CardDetails />,
    },
  ]);

  return routes;
}
