import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    toast.success("Logged in successfully!");
    navigate("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4"
    >
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-8">
        Login
      </h1>

      <div className="max-w-md w-full space-y-6 bg-gray-800 p-8 rounded-2xl border border-gray-700">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-cyan-500 outline-none"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 transition-all"
        >
          Login
        </button>
        <p className="text-center text-gray-400">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}

export default Login;
