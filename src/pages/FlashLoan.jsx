import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Wallet, ArrowRightLeft, Coins } from "lucide-react";


const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE";
const CONTRACT_ABI = [
];

export default function FlashLoan() {
  const [busdBorrow, setBusdBorrow] = useState("");
  const [amount, setAmount] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [isConnected, setIsConnected] = useState(false);

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setIsConnected(true);
        console.log("Wallet connected");
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className="grid gap-8 p-8 bg-gradient-to-r from-purple-900 to-blue-900 min-h-screen text-white">
      <div className="flex justify-end p-4">
        <Button
          onClick={connectWallet}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Wallet className="mr-2 h-4 w-4" />{" "}
          {isConnected ? "Connected" : "Connect Wallet"}
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Tabs defaultValue="arbitrage" className="w-full max-w-3xl">
          <TabsList className="justify-center">
            <TabsTrigger value="arbitrage">Initiate Arbitrage</TabsTrigger>
            <TabsTrigger value="balance">Get Token Balance</TabsTrigger>
          </TabsList>
          <TabsContent value="arbitrage">
            <Card className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Initiate Arbitrage</CardTitle>
                <CardDescription>
                  Start a flash loan and execute arbitrage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="BUSD Borrow Address"
                  value={busdBorrow}
                  onChange={(e) => setBusdBorrow(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
                <Input
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
                <Button
                  className="bg-green-600 hover:bg-green-700"
                >
                  <ArrowRightLeft className="mr-2 h-4 w-4" /> Initiate
                  Arbitrage
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="balance">
            <Card className="bg-white bg-opacity-20 backdrop-blur-md shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl text-white">Get Token Balance</CardTitle>
                <CardDescription>
                  Check the balance of a token in the contract
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input
                  placeholder="Token Address"
                  value={tokenAddress}
                  onChange={(e) => setTokenAddress(e.target.value)}
                  className="bg-white bg-opacity-20 text-white placeholder-gray-400"
                />
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Coins className="mr-2 h-4 w-4" /> Get Balance
                </Button>
                {balance && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-lg font-semibold"
                  >
                    Balance: {balance}
                  </motion.p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
}