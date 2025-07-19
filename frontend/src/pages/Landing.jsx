import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center px-4 overflow-hidden"
    >
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600 mb-6">
        Welcome to BitFinance
      </h1>

      <p className="text-lg text-gray-300 mb-8 max-w-xl">
        A futuristic DeFi platform to Deposit, Borrow and Earn Crypto rewards.
        Connect your Plug Wallet to get started.
      </p>

      <div className="flex gap-6">
        <Link
          to="/connect"
          className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-600 hover:scale-105 transition-all"
        >
          Connect Wallet
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 rounded-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 hover:scale-105 transition-all"
        >
          Explore Dashboard
        </Link>
      </div>
    </motion.div>
  );
}

export default Landing;
