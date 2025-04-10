import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Users, TrendingUp, Wallet } from "lucide-react";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/bannerAnimation.json";
import bannerAnimation1 from "../assets/supermarket.json";

function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="max-w-7xl w-full text-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Welcome to MLM System
        </motion.h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
          Join our community and start earning through referrals
        </p>

        {/* 🎥 Lottie Animations & Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Lottie animationData={bannerAnimation} className="w-60 sm:w-72 md:w-96" />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/register")}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join Now
          </motion.button>
          <Lottie animationData={bannerAnimation1} className="w-60 sm:w-72 md:w-96" />
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
        {[
          {
            Icon: Users,
            title: "Community Growth",
            description: "Build your network by inviting others and earn through referrals.",
          },
          {
            Icon: TrendingUp,
            title: "Earning Potential",
            description: "Earn ₹15 for each new member you bring to the community.",
          },
          {
            Icon: Wallet,
            title: "Easy Withdrawals",
            description: "Withdraw your earnings directly to your bank account or UPI.",
          },
        ].map(({ Icon, title, description }, i) => (
          <motion.div
            key={i}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 * (i + 1) }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
          >
            <Icon className="w-10 h-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">{description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Home;
