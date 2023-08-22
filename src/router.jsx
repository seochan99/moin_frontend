import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
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
import Auth from "./pages/auths/auth/Auth";
import AuthReset from "./pages/auths/authReset/AuthReset";
import AuthSignup from "./pages/auths/authSignup/AuthSignup";
import ProfileChangePassword from "./pages/profile/profileChangePassword/ProfileChangePassword";
import Search from "./pages/search/Search";
import ProfileFavoritePost from "./pages/profile/profileFavoritePost/ProfileFavoritePost";
import DetailPage from "./pages/community/communityDetail/DetailPage";
import SuggestionDetailPage from "./pages/suggestion/suggestionDetail/SuggestionDetailPage";
import NoticeDetailPage from "./pages/notice/noticeDetail/noticeDetail";
import CommunityCreatPost from "./pages/community/communityCreatePost/CommunityCreatPost";
import CommunityEdit from "./pages/community/communityEdit/CommunityEdit";
import SuggestionCreate from "./pages/suggestion/suggestionCreate/SuggestionCreate";
import AuthReseting from "./pages/auths/authReseting/AuthReseting";
import Loading from "./components/common/loading/Loading";

const LazyAbout = lazy(() => import("./pages/about/About"));

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
        element: (
          <Suspense fallback={<Loading />}>
            <LazyAbout />
          </Suspense>
        )
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
            path: "create/soical",
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
          },
          {
            path: "favoritePost",
            element: <ProfileFavoritePost />
          }
        ]
      },
      {
        path: "auth/reset/:uid/:token",
        element: <AuthReseting />
      },

      {
        path: "AiService/:AiId",
        element: <AiServiceDetail />
      },
      {
        path: "search",
        element: <Search />
      },
      {
        path: "community/:type/:id",
        element: <DetailPage />
      },
      {
        path: "suggestion/:id",
        element: <SuggestionDetailPage />
      },
      {
        path: "suggestion/create",
        element: <SuggestionCreate />
      },
      {
        path: "suggestion/edit/:id",
        element: <CommunityCreatPost />
      },
      {
        path: "notice/:id",
        element: <NoticeDetailPage />
      },
      {
        path: "community/create",
        element: <CommunityCreatPost />
      },
      {
        path: "community/edit/:id",
        element: <CommunityEdit />
      }
    ],
    errorElement: <NotFoundError />
  }
]);

export default router;
