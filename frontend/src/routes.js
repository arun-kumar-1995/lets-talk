import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Chat = lazy(() => import("./pages/Chat"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/sign-in", element: SignUp },
  { path: "/chats", element: Chat },
];
export default routes;
