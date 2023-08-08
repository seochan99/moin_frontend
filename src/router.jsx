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
        element: <Profile />
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
