
import { useState } from "react"
// import { ethers } from "ethers"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"

// ABI and contract address would be imported from a separate file in a real-world scenario
const CONTRACT_ADDRESS = "YOUR_CONTRACT_ADDRESS_HERE"
const CONTRACT_ABI = [
  // Add your contract ABI here
]

export default function FlashLoan() {
  const [busdBorrow, setBusdBorrow] = useState("")
  const [amount, setAmount] = useState("")
  const [tokenAddress, setTokenAddress] = useState("")
  const [balance, setBalance] = useState("")

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Wallet connected")
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    } else {
      console.log("Please install MetaMask")
    }
  }

  // async function initiateArbitrage() {
  //   if (typeof window.ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

  //     try {
  //       const tx = await contract.initateArbitrage(busdBorrow, ethers.utils.parseEther(amount))
  //       await tx.wait()
  //       console.log("Arbitrage initiated successfully")
  //     } catch (error) {
  //       console.error("Error initiating arbitrage:", error)
  //     }
  //   }
  // }

  // async function getBalance() {
  //   if (typeof window.ethereum !== "undefined") {
  //     const provider = new ethers.providers.Web3Provider(window.ethereum)
  //     const signer = provider.getSigner()
  //     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)

  //     try {
  //       const balance = await contract.getBalanceOfToken(tokenAddress)
  //       setBalance(ethers.utils.formatEther(balance))
  //     } catch (error) {
  //       console.error("Error getting balance:", error)
  //     }
  //   }
  // }

  return (
    <div className="grid gap-6">
      <Card>
        <CardHeader>
          <CardTitle>Connect Wallet</CardTitle>
          <CardDescription>Connect your wallet to use the DApp</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={connectWallet}>Connect Wallet</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Initiate Arbitrage</CardTitle>
          <CardDescription>Start a flash loan and execute arbitrage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="BUSD Borrow Address" value={busdBorrow} onChange={(e) => setBusdBorrow(e.target.value)} />
          <Input placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <Button
          //  onClick={initiateArbitrage}
           >Initiate Arbitrage</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Get Token Balance</CardTitle>
          <CardDescription>Check the balance of a token in the contract</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Token Address" value={tokenAddress} onChange={(e) => setTokenAddress(e.target.value)} />
          <Button 
          // onClick={getBalance}
          >Get Balance</Button>
          {balance && <p>Balance: {balance}</p>}
        </CardContent>
      </Card>
    </div>
  )
}

