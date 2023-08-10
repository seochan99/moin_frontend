import { createBrowserRouter } from "react-router-dom";

import App from "./App";

import Main from "./pages/main/Main";
import Community from "./pages/community/Community";
import Notice from "./pages/notice/Notice";
import Suggestion from "./pages/suggestion/Suggestion";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";

import AiServiceDetail from "./pages/ai/AiServiceDetail";

import NotFoundError from "./pages/errors/NotFound";
import AuthLogin from "./pages/auths/authLogin/AuthLogin";
import ProfileFavorite from "./pages/profile/profileFavorite/ProfileFavorite";
import ProfileComment from "./pages/profile/profileComment/ProfileComment";
import ProfilePost from "./pages/profile/profilePost/ProfilePost";
import ProfileModify from "./pages/profile/profileModify/ProfileModify";
import ProfileMain from "./pages/profile/profileMain/ProfileMain";
import Auth from "./pages/auths/auth/auth";
import AuthReset from "./pages/auths/authReset/AuthReset";
import AuthSignup from "./pages/auths/authSignup/AuthSignup";
import ProfileChangePassword from "./pages/profile/profileChangePassword/ProfileChangePassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "community",
        element: <Community />
      },
      {
        path: "notice",
        element: <Notice />
      },
      {
        path: "suggestion",
        element: <Suggestion />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "login",
        element: <AuthLogin />
      },
      {
        path: "auth",
        element: <Auth />,
        children: [
          {
            path: "create",
            element: <AuthSignup />
          },
          {
            path: "reset",
            element: <AuthReset />
          }
        ]
      },
      {
        path: "mypage",
        element: <Profile />,
        children: [
          {
            path: "",
            element: <ProfileMain />
          },
          {
            path: "changepassword",
            element: <ProfileChangePassword />
          },
          {
            path: "favorite",
            element: <ProfileFavorite />
          },
          {
            path: "comment",
            element: <ProfileComment />
          },
          {
            path: "post",
            element: <ProfilePost />
          },
          {
            path: "modify",
            element: <ProfileModify />
          }
        ]
      },

      {
        path: "AiService/:AiId",
        element: <AiServiceDetail />
      },
      {
        path: "search",
        element: <Search />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
