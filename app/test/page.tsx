"use client"

import { tarotCards } from "../../lib/tarotData"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function Test() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className={`min-h-screen p-8 ${
      theme === "light"
        ? "bg-gradient-to-br from-white to-blue-50 text-futuristic-dark"
        : "bg-gradient-radial from-futuristic-dark to-black text-white"
    }`}>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tarotCards.map((card) => (
          <div key={card.id} className="flex flex-col gap-4">
            <div className="text-center">
              <h2 className={`text-lg font-bold ${
                theme === "light" 
                  ? "text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" 
                  : "text-neon-pink text-shadow-glow"
              }`}>
                {card.nameKor}
              </h2>
            </div>
            <div className={`aspect-[2/3] rounded-[20px] shadow-lg overflow-hidden ${
              theme === "light"
                ? "bg-white border-2 border-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                : "bg-futuristic-dark border-2 border-neon-pink"
            }`}>
              <img
                src={card.imageUrl}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className={`text-base ${
                theme === "light" 
                  ? "text-blue-600 drop-shadow-[0_0_8px_rgba(37,99,235,0.5)]" 
                  : "text-neon-blue text-shadow-glow"
              }`}>
                {card.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
} 