import Pages from "layouts/Pages.jsx";
import Dashboard from "layouts/Dashboard.jsx";

var indexRoutes = [
  { path: "/super-admin", component: Dashboard },
  { path: "/content-admin", component: Dashboard},
  { path: "/content-contributor", component: Dashboard},
  { path: "/", component: Pages}
];

export default indexRoutes;
