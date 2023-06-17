import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import SignIn from "./pages/login/signin";
import Movies from "./pages/Movies";
import NotFound from "./pages/notFound";
import Product from "./pages/product";
import SignUp from "./pages/signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
