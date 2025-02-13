"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { setTodaysCard, getTodaysCard, clearTodaysCard, shuffleCards } from "../lib/utils"
import type { TarotCard as TarotCardType } from "../lib/tarotData"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import TarotCard from "../components/TarotCard"
import ShareButton from "../components/ShareButton"

export default function Home() {
  const [cards, setCards] = useState<TarotCardType[]>([])
  const [selectedCard, setSelectedCard] = useState<TarotCardType | null>(null)
  const [isSelecting, setIsSelecting] = useState(false)
  const [isShuffling, setIsShuffling] = useState(false)
  const [showInterpretation, setShowInterpretation] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    initializeCards()
  }, [])

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    if (searchParams.get("reset") === "true") {
      handleReset()
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }, [])

  const initializeCards = () => {
    const todaysCard = getTodaysCard()
    if (todaysCard) {
      setSelectedCard(todaysCard)
      setShowInterpretation(true)
    }
    setCards(shuffleCards())
  }

  const handleSelectCard = async (card: TarotCardType) => {
    if (!selectedCard && !isSelecting && !isShuffling) {
      setIsSelecting(true)
      setSelectedCard(card)
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setTodaysCard(card)
      setIsSelecting(false)
      setTimeout(() => setShowInterpretation(true), 500)
    }
  }

  const handleReset = async () => {
    setShowInterpretation(false)
    setSelectedCard(null)
    setIsShuffling(true)

    if (selectedCard) {
      const updatedCards = cards.map((card) => (card.id === selectedCard.id ? { ...card, isFlipped: false } : card))
      setCards(updatedCards)
    }

    clearTodaysCard()

    for (let i = 0; i < 3; i++) {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setCards(shuffleCards())
    }

    await new Promise((resolve) => setTimeout(resolve, 500))
    setCards((cards) => [...cards].sort((a, b) => a.id - b.id))

    await new Promise((resolve) => setTimeout(resolve, 500))

    setIsSelecting(false)
    setIsShuffling(false)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) return null

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-4 sm:p-6 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-br from-white to-blue-50 text-futuristic-dark"
          : "bg-gradient-radial from-futuristic-dark to-black text-white"
      }`}
    >
      <div
        className={`absolute inset-0 cyber-grid opacity-20 pointer-events-none ${
          theme === "light" ? "bg-blue-100" : ""
        }`}
      ></div>
      <motion.h1
        className={`text-3xl sm:text-4xl md:text-6xl font-display font-bold mb-8 ${
          theme === "light" 
            ? "text-blue-600 drop-shadow-[0_0_10px_rgba(37,99,235,0.5)]" 
            : "text-neon-blue text-shadow-glow"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {new Date().getFullYear()} 타로 운세
      </motion.h1>
      <div className="w-full max-w-4xl relative">
        <div className="flex flex-col items-center">
          <motion.div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 w-full mb-8">
            {cards.map((card, index) => (
              <div key={card.id} className="aspect-[2/3]">
                <TarotCard
                  card={card}
                  isSelected={selectedCard?.id === card.id}
                  onSelect={() => handleSelectCard(card)}
                  isSelecting={isSelecting}
                  isShuffling={isShuffling}
                  index={index}
                  theme={theme}
                />
              </div>
            ))}
          </motion.div>
          {showInterpretation && selectedCard && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={`rounded-lg shadow-2xl overflow-hidden max-w-md w-full border ${
                  theme === "light"
                    ? "bg-white/90 border-black shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    : "bg-gradient-to-br from-futuristic-dark to-black text-white"
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <motion.div className="w-48 h-72 relative preserve-3d"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: 180 }}
                      transition={{ duration: 0.8 }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div
                        className={`w-full h-full absolute rounded-[20px] shadow-lg ${
                          theme === "light"
                            ? "bg-black border-2 border-black shadow-[0_0_10px_rgba(37,99,235,0.2)]"
                            : "bg-futuristic-dark border-2"
                        }`}
                        style={{
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        <img
                          src={selectedCard.backImageUrl || "/placeholder.svg"}
                          alt="Card Back"
                          className="w-full h-full object-cover rounded-[18px] opacity-50"
                        />
                        <div
                          className={`absolute inset-0 ${
                            theme === "light" ? "bg-cyber-grid opacity-30" : "bg-cyber-grid"
                          } rounded-[18px]`}
                        ></div>
                      </div>
                      <div
                        className={`w-full h-full absolute rounded-[20px] shadow-lg ${
                          theme === "light"
                            ? "bg-white border-2 border-black shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                            : "bg-futuristic-dark border-2 "
                        }`}
                        style={{
                          transform: "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                      >
                        <img
                          src={selectedCard.imageUrl || "/placeholder.svg"}
                          alt="Card Front"
                          className="w-full h-full object-cover rounded-[18px]"
                        />
                        <div className="absolute bottom-0 w-full bg-black bg-opacity-50 p-2 rounded-bl-[20px] rounded-br-[20px]">
                          <h2
                            className={`text-lg font-bold text-center ${
                              theme === "light" ? "text-white drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" : "text-shadow-glow"
                            }`}
                          >
                            {selectedCard.name}
                          </h2>
                          <h3
                            className={`text-sm text-center ${
                              theme === "light" ? "text-gray-200" : "text-neon-blue text-shadow-glow"
                            }`}
                          >
                            {selectedCard.nameKor}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <p className={`text-lg mb-6 text-center ${theme === "light" ? "text-gray-800" : "text-white"}`}>
                    {selectedCard.description}
                  </p>
                  <div className="flex flex-col space-y-4">
                    <Link href={`/result?id=${selectedCard.id}`} className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg ${
                          theme === "light"
                            ? "bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]"
                            : "bg-neon-blue text-white animate-glow-pulse"
                        }`}
                      >
                        자세한 해석 보기
                      </motion.button>
                    </Link>
                    <ShareButton
                      card={selectedCard}
                      className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg ${
                        theme === "light"
                          ? "bg-pink-500 text-white shadow-[0_0_15px_rgba(236,72,153,0.3)] hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                          : "bg-neon-pink text-white animate-glow-pulse"
                      }`}
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleReset}
                      className={`w-full font-bold py-3 px-6 rounded-full text-lg shadow-lg ${
                        theme === "light"
                          ? "bg-yellow-400 text-gray-800 shadow-[0_0_15px_rgba(250,204,21,0.3)] hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]"
                          : "bg-futuristic-dark text-white border border-neon-yellow animate-glow-pulse"
                      }`}
                    >
                      다시 뽑기
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
      {!selectedCard && !isShuffling && (
        <p
          className={`mt-2 text-lg ${
            theme === "light" 
              ? "text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" 
              : "text-neon-yellow text-shadow-glow"
          }`}
        >
          카드를 선택하여 오늘의 운세를 확인하세요.
        </p>
      )}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleTheme}
        className={`mt-8 p-2 rounded-full shadow-lg transition-all duration-300 ${
          theme === "light"
            ? "bg-dark-100 border-2 border-dark-400 shadow-[0_0_15px_rgba(37,99,235,0.2)] hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
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

