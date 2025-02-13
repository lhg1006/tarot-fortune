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
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gradient-radial from-futuristic-dark to-black overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md relative z-10"
      >
        <h1 className="text-4xl font-display font-bold mb-4 text-neon-blue text-shadow-glow">{card.name}</h1>
        <div className="w-64 h-96 mx-auto mb-6">
          <motion.div
            className="w-full h-full relative preserve-3d"
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180 }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Back of the card */}
            <div
              className="w-full h-full absolute rounded-[20px] shadow-lg bg-futuristic-dark border-2 border-neon-blue"
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
              <div className="absolute inset-0 bg-cyber-grid rounded-[18px]"></div>
            </div>
            {/* Front of the card */}
            <div
              className="w-full h-full absolute rounded-[20px] shadow-lg bg-futuristic-dark border-2 border-neon-pink flex items-center justify-center"
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <h2 className="text-2xl font-bold text-neon-pink text-center p-4 text-shadow-glow">{card.name}</h2>
            </div>
          </motion.div>
        </div>
        <p className="text-xl mb-8 font-medium text-white">{card.description}</p>
        <div className="flex flex-col space-y-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="w-full bg-neon-blue text-futuristic-dark font-bold py-3 px-6 rounded-full text-lg shadow-lg animate-glow-pulse"
          >
            다시 뽑기
          </motion.button>
          <ShareButton
            card={card}
            className="w-full bg-neon-pink text-futuristic-dark font-bold py-3 px-6 rounded-full text-lg shadow-lg animate-glow-pulse"
          />
        </div>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`mt-8 p-2 rounded-full bg-futuristic-dark border-2 border-neon-blue shadow-lg animate-glow-pulse transition-all duration-300 ${
          theme === "dark" ? "bg-opacity-100" : "bg-opacity-50"
        }`}
        aria-label={theme === "light" ? "다크 모드로 전환" : "라이트 모드로 전환"}
      >
        {theme === "light" ? <Moon className="w-6 h-6 text-neon-blue" /> : <Sun className="w-6 h-6 text-neon-yellow" />}
      </motion.button>
    </main>
  )
}

