import React from 'react'
import { Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import AuthLayout from "./layouts/AuthLayout";
import Signup from "./features/auth/Signup";
import Home from "./pages/Home";
import ProtectedRoute from "./layouts/ProtectedRoute";
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
  <Route path="/" element={< Signup/>} />
  <Route path="/login" element={ <Login /> } />
  <Route path="/signup" element={<Signup />} />
</Route>
  </Routes>
    
  )
}

export default Router
