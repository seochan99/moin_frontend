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
import Login from "./pages/auths/Login";
import ProfileFavorite from "./pages/profile/profileFavorite/ProfileFavorite";
import ProfileComment from "./pages/profile/profileComment/ProfileComment";
import ProfilePost from "./pages/profile/profilePost/ProfilePost";
import ProfileModify from "./pages/profile/profileModify/ProfileModify";
import ProfileMain from "./pages/profile/profileMain/ProfileMain";

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
        element: <Login />
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
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
