// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import Settings from "@material-ui/icons/Settings";
import Group from "@material-ui/icons/Group";
import Timeline from "@material-ui/icons/Timeline";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TeamMember from "views/TeamMember/TeamMember.jsx";
import TitleBoard from "views/TitleBoard/TitleBoard.jsx";
import PitchBoard from "../containers/PitchBoard.js";
import GoalBoard from "../containers/GoalBoard.js";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import SettingPage from "views/Setting";

const contentAdminDashboardRoutes = [
  {
    path: "/content-admin/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/content-admin/pitch",
    name: "Global Pitch Board",
    icon: LibraryBooks,
    component: PitchBoard
  },
  {
    path: "/content-admin/title",
    name: "Title Board",
    icon: "content_paste",
    component: TitleBoard
  },
  {
    path: "/content-admin/team",
    name: "Team Member",
    icon: Group,
    component: TeamMember
  },
  {
    path: "/content-admin/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/content-admin/setting",
    name: "Settings",
    icon: Settings,
    component: SettingPage
  },
  {
    redirect: true,
    path: "/content-admin",
    to: "/content-admin/dashboard",
    name: "Redirect"
  }
];

export default contentAdminDashboardRoutes;
