import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          Flash Loan DApp
        </a>
        <div>
          <a href="/" className="text-white mr-4">
            Home
          </a>
          <a href="/flash-loan" className="text-white">
            Flash Loan
          </a>
        </div>
      </div>
    </nav>
  );
}
