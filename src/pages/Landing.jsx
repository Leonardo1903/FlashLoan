import { ArrowRight, Zap, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Zap className="h-6 w-6 text-yellow-400" />,
    title: "Instant Liquidity",
    description:
      "Access large amounts of capital instantly for your trading strategies.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-green-400" />,
    title: "Arbitrage Opportunities",
    description:
      "Capitalize on price differences across various DeFi platforms.",
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-400" />,
    title: "Risk-Free Profits",
    description: "Execute complex trades without risking your own capital.",
  },
];

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-purple-900 text-white">
      <motion.h1
        className="text-6xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unleash the Power of <span className="text-yellow-400">Flash Loans</span>
      </motion.h1>
      <motion.p
        className="text-2xl mb-16 text-center max-w-3xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Explore the cutting-edge of decentralized finance with our flash loan
        and arbitrage platform. Execute complex trades, maximize profits, and
        revolutionize your DeFi strategy.
      </motion.p>
      <motion.div
        className="grid md:grid-cols-3 gap-12 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white bg-opacity-20 p-8 rounded-lg backdrop-blur-md shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center mb-4">
              {feature.icon}
              <h3 className="text-2xl font-semibold ml-4">{feature.title}</h3>
            </div>
            <p className="text-gray-200">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/flash-loan"
          className="bg-yellow-500 text-black px-10 py-4 rounded-full flex items-center hover:bg-yellow-600 transition-colors text-lg font-semibold shadow-lg"
        >
          Get Started
          <ArrowRight className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
}