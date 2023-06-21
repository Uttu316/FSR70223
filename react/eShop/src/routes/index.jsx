import React from "react";
import { createBrowserRouter, redirect } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";
import SignIn from "../pages/login/signin";
import Movies from "../pages/Movies";
import NotFound from "../pages/notFound";
import Product from "../pages/product";
import SignUp from "../pages/signup";
import { getIsLoggedin } from "../redux/actions/authActions";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    loader: () => {
      const isLoggedIn = getIsLoggedin();
      if (isLoggedIn) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/signup",
    element: <SignUp />,
    loader: () => {
      const isLoggedIn = getIsLoggedin();
      if (isLoggedIn) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/movies",
    element: <Movies />,
  },
  {
    path: "/cart",
    element: <Cart />,
    loader: () => {
      const isLoggedIn = getIsLoggedin();
      if (!isLoggedIn) {
        return redirect("/signin");
      }
      return null;
    },
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default ROUTES;
