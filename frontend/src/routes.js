import React, { lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Channel = lazy(() => import("./pages/Channel"));

const routes = [
  { path: "/", element: Home },
  { path: "/login", element: Login },
  { path: "/sign-up", element: SignUp },
  { path: "/channel", element: Channel }
];
export default routes;
