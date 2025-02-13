"use client"

import { useEffect, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { tarotCards, type TarotCard as TarotCardType } from "../../lib/tarotData"
import ShareButton from "../../components/ShareButton"
import { clearTodaysCard } from "../../lib/utils"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export default function Result() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [card, setCard] = useState<TarotCardType | null>(null)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = searchParams.get("id")
    if (id) {
      const selectedCard = tarotCards.find((card) => card.id === Number.parseInt(id))
      if (selectedCard) {
        setCard(selectedCard)
      } else {
        router.push("/")
      }
    } else {
      router.push("/")
    }
  }, [searchParams, router])

  const handleReset = () => {
    clearTodaysCard()
    router.push("/?reset=true")
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted || !card) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-radial from-futuristic-dark to-black">
        <div className="text-2xl font-bold text-neon-blue animate-pulse">Loading...</div>
      </div>
    )
  }

  return (
    <main className={`flex min-h-screen flex-col items-center justify-center p-6 transition-colors duration-300 ${
      theme === "light"
        ? "bg-gradient-to-br from-white to-blue-50 text-futuristic-dark"
        : "bg-gradient-radial from-futuristic-dark to-black text-white"
    }`}>
      <div className={`absolute inset-0 cyber-grid opacity-20 pointer-events-none ${
        theme === "light" ? "bg-blue-100" : ""
      }`}></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-2xl relative z-10"
      >
        <h1 className={`text-4xl font-display font-bold mb-4 ${
          theme === "light" 
            ? "text-blue-600 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
            : "text-neon-blue text-shadow-glow"
        }`}>
          {card.name}
          <span className={`block text-2xl mt-2 ${
            theme === "light"
              ? "text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"
              : "text-neon-pink"
          }`}>
            {card.nameKor}
          </span>
        </h1>
        <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
          <div className="w-64 h-96 shrink-0">
            <motion.div
              className="w-full h-full relative preserve-3d"
              initial={{ rotateY: 0 }}
              animate={{ rotateY: 180 }}
              transition={{ duration: 0.8 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Back of the card */}
              <div
                className={`w-full h-full absolute rounded-[20px] shadow-lg ${
                  theme === "light"
                    ? "bg-blue-50 border-2 border-blue-300 shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                    : "bg-futuristic-dark border-2"
                }`}
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img
                  src={card.backImageUrl || "/placeholder.svg"}
                  alt="Card Back"
                  className="w-full h-full object-cover rounded-[18px] opacity-50"
                />
                <div className={`absolute inset-0 ${
                  theme === "light" ? "bg-cyber-grid opacity-30" : "bg-cyber-grid"
                } rounded-[18px]`}></div>
              </div>
              {/* Front of the card */}
              <div
                className={`w-full h-full absolute rounded-[20px] shadow-lg ${
                  theme === "light"
                    ? "bg-white border-2 border-pink-400 shadow-[0_0_10px_rgba(236,72,153,0.3)]"
                    : "bg-futuristic-dark border-2 border-neon-pink"
                }`}
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img
                  src={card.imageUrl}
                  alt={card.name}
                  className="w-full h-full object-cover rounded-[18px]"
                />
              </div>
            </motion.div>
          </div>
          <div className="flex-1 text-left space-y-6">
            <div>
              <h2 className={`text-xl font-bold mb-2 ${
                theme === "light" 
                  ? "text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" 
                  : "text-neon-pink text-shadow-glow"
              }`}>카드의 의미</h2>
              <p className={`text-lg ${theme === "light" ? "text-gray-800" : "text-white"}`}>{card.description}</p>
            </div>
            <div>
              <h2 className={`text-xl font-bold mb-2 ${
                theme === "light" 
                  ? "text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
                  : "text-neon-yellow text-shadow-glow"
              }`}>주요 키워드</h2>
              <p className={`text-lg ${theme === "light" ? "text-gray-800" : "text-white"}`}>{card.keywords}</p>
            </div>
            <div>
              <h2 className={`text-xl font-bold mb-2 ${
                theme === "light" 
                  ? "text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" 
                  : "text-neon-green text-shadow-glow"
              }`}>카드 이미지</h2>
              <p className={`text-lg ${theme === "light" ? "text-gray-800" : "text-white"}`}>{card.imageDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-4 max-w-md mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg ${
              theme === "light"
                ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                : "bg-neon-blue text-futuristic-dark animate-glow-pulse"
            }`}
          >
            다시 뽑기
          </motion.button>
          <ShareButton
            card={card}
            className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg ${
              theme === "light"
                ? "bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                : "bg-neon-pink text-futuristic-dark animate-glow-pulse"
            }`}
          />
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`mt-8 p-2 rounded-full shadow-lg transition-all duration-300 ${
          theme === "light"
            ? "bg-blue-100 border-2 border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            : "bg-futuristic-dark border-2 animate-glow-pulse"
        }`}
        aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
      >
        {theme === "light" ? (
          <Sun className="w-6 h-6 text-blue-600" />
        ) : (
          <Moon className="w-6 h-6 text-neon-yellow" />
        )}
      </motion.button>
    </main>
  )
}

