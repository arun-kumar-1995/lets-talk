import React, { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/auth/Login"));
const SignUp = lazy(() => import("../pages/auth/SignUp"));
const ForgotPassword = lazy(() => import("../pages/auth/ForgotPassword"));
const Channel = lazy(() => import("../pages/Channel"));
const Chat = lazy(() => import("../pages/Chat"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/sign-up", element: SignUp },
  { path: "/forgot-password", element: ForgotPassword },
  { path: "/channel/:c-id", element: Channel },
  { path: "/chat/:chatId", element: Chat },
];
export default routes;
