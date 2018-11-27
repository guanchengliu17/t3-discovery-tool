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
import SettingPage from "views/Setting";
import TeamMember from "views/TeamMember/TeamMember.jsx";
import TitleBoard from "views/TitleBoard/TitleBoard.jsx";

import PitchBoard from "../containers/PitchBoard.js";
import GoalBoard from "../containers/GoalBoard.js";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import CalenderBoard from "../containers/PitchBoard";

const superAdminDashboardRoutes = [
  {
    path: "/super-admin/dashboard",
    name: "Dashboard",
    authorized: "super-admin",
    icon: Dashboard,
    component: DashboardPage
  },

  {
    path: "/super-admin/pitch",
    name: "Global Pitch Board",
    icon: LibraryBooks,
    component: PitchBoard
  },
  {
    path: "/super-admin/calendar",
    name: "Calendar Board",
    icon: "content_paste",
    component: PitchBoard
  },
  {
    path: "/super-admin/parking",
    name: "Parking Board",
    icon: "content_paste",
    component: PitchBoard
  },
  {
    path: "/super-admin/goal",
    name: "Goal Board",
    icon: Timeline,
    component: GoalBoard
  },
  {
    path: "/super-admin/team",
    name: "Team Member",
    icon: Group,
    component: TeamMember
  },
  {
    path: "/super-admin/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/super-admin/setting",
    name: "Settings",
    icon: Settings,
    component: SettingPage
  },
  {
    redirect: true,
    path: "/super-admin",
    to: "/super-admin/dashboard",
    name: "Redirect"
  }
];

export default superAdminDashboardRoutes;
