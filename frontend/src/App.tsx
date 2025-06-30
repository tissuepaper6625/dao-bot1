import { useState } from "react";

export default function App() {
  const [isMinting, setIsMinting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Hardcoded token info
  const tokenName = "MyToken";
  const contractAddress = "0x1234...abcd";

  const mint = () => {
    setIsMinting(true);
    setMessage(null);

    // Simulate mint delay
    setTimeout(() => {
      setIsMinting(false);
      setMessage("🎉 Token minted successfully!");
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-blue-400 to-purple-600 p-8">
      <div className="bg-white rounded-xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{tokenName} Minting Portal</h1>

        <p className="mb-4 font-semibold text-gray-700">
          Contract Address:
          <br />
          <code className="text-sm text-gray-500">{contractAddress}</code>
        </p>

        <button
          onClick={mint}
          disabled={isMinting}
          className={`w-full py-3 font-bold rounded text-white ${
            isMinting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isMinting ? "Minting..." : "Mint Token"}
        </button>

        {message && <p className="mt-6 text-green-600 font-semibold">{message}</p>}
      </div>
    </main>
  );
}
