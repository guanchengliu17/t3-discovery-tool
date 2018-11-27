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
import DashboardPage from "../containers/Dashboard.js";
import SettingPage from "views/Setting";
import TeamMember from "views/TeamMember/TeamMember.jsx";
import DraftBoard from "views/DraftBoard/DraftBoard.jsx";
import PitchBoard from "views/PitchBoard/PitchBoard.jsx";
import GoalBoard from "../containers/GoalBoard.js";
import NotificationsPage from "views/Notifications/Notifications.jsx";

const superDashboardRoutes = [
  {
    path: "/content-contributor/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/content-contributor/draft",
    name: "Draft Board",
    icon: "content_paste",
    component: DraftBoard
  },
  {
    path: "/content-contributor/team",
    name: "Team Member",
    icon: Group,
    component: TeamMember
  },
  {
    path: "/content-contributor/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/content-contributor/setting",
    name: "Settings",
    icon: Settings,
    component: SettingPage
  },
  { redirect: true, path: "/content-contributor", to: "/content-contributor/dashboard", name: "Redirect" }
];

export default superDashboardRoutes;
