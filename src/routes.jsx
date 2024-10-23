import DashboardPanel from "./layouts/DashboardPanel/DashboardPanel";
import AddUserBulk from "./pages/Dashboard/AddUserBulk/AddUserBulk";
import Index from "./pages/Index/Index";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/dashboard", element: <Index /> },
  {
    path: "/dashboard/*",
    element: <DashboardPanel />,
    children: [{ path: "add-user-bulk", element: <AddUserBulk /> }],
  },
];

export default routes;
