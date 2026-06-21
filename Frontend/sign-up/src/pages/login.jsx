import React from "react";

import { useNavigate, Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginThunk } from "../features/auth/auth-thunk";
import { loginSchema } from "../features/auth/auth-schema";
import { useDispatch } from "react-redux";

import toast from "react-hot-toast";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const result = await dispatch(loginThunk(data));

    if (loginThunk.fulfilled.match(result)) {
      toast.success("Login successful");
      navigate("/home");
    } else {
      toast.error(result.payload || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleLogin)}>
      <h1>Welcome Back</h1>

      <p>Login to continue</p>

      <input type="email" placeholder="Email Address" {...register("email")} />

      {errors.email && <p>{errors.email.message}</p>}

      <input type="password" placeholder="Password" {...register("password")} />

      {errors.password && <p>{errors.password.message}</p>}

      <button className="auth-btn" type="submit">
        Login
      </button>

      <div className="bottom-link">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </form>
  );
};

export default Login;
