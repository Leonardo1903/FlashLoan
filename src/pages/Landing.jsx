import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <h1 className="text-4xl font-bold mb-6">Welcome to Flash Loan DApp</h1>
      <p className="text-xl mb-8 text-center max-w-2xl">
        Explore the world of decentralized finance with our flash loan and
        arbitrage platform. Execute complex trades and maximize your profits in
        the DeFi space.
      </p>
      <Link
        to="/flash-loan"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center hover:bg-blue-700 transition-colors"
      >
        Get Started
        <ArrowRight className="ml-2" />
      </Link>
    </div>
  );
}
