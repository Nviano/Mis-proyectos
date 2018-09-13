import Components from "views/Components/Components.jsx";
import LandingPage from "views/LandingPage/LandingPage.jsx";
import ProfilePage from "views/ProfilePage/ProfilePage.jsx";
import LoginPage from "views/LoginPage/LoginPage.jsx";
import FormPlayerPage from "views/FormPlayerPage/FormPlayerPage.jsx";
import FormStaffPage from "views/FormStaffPage/FormStaffPage.jsx";
import LoginStaffPage from "views/LoginStaffPage/LoginStaffPage.jsx";
import LoginPlayerPage from "views/LoginPlayerPage/LoginPlayerPage.jsx";
import ProfilePlayerPage from "views/ProfilePage/ProfilePlayerPage.jsx";

var indexRoutes = [
  { path: "/landing-page", name: "LandingPage", component: LandingPage },
  { path: "/profile-page", name: "ProfilePage", component: ProfilePage },
  { path: "/login-page", name: "LoginPage", component: LoginPage },
  { path: "/form-staff", name: "FormStaffPage", component: FormStaffPage },
  { path: "/form-player", name: "FormPlayerPage", component: FormPlayerPage },
  { path: "/login-staff", name: "LoginStaffPage", component: LoginStaffPage },
  { path: "/login-player", name: "LoginPlayerPage", component: LoginPlayerPage },
  { path: "/profile-player", name: "ProfilePlayerPage", component: ProfilePlayerPage },

  // { path: "/form-club", name: "FormClubPage", component: FormClub },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;






