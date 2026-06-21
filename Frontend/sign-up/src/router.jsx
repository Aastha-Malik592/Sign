import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import AuthLayout from "./layouts/auth-layout";
import Signup from "./pages/signup";
import Home from "./pages/home";
import ProtectedRoute from "./layouts/protected-route";
const Router = () => {
  return (
    <Routes>
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default Router;
