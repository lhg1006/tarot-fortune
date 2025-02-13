"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import type { TarotCard as TarotCardType } from "../lib/tarotData"
import { getShuffleAnimation } from "../lib/utils"

interface TarotCardProps {
  card: TarotCardType
  isSelected: boolean
  onSelect: () => void
  isSelecting: boolean
  isShuffling: boolean
  index: number
  theme: string | undefined
}

const TarotCard: React.FC<TarotCardProps> = ({
  card,
  isSelected,
  onSelect,
  isSelecting,
  isShuffling,
  index,
  theme,
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const sparkles = Array.from({ length: 20 }, (_, i) => (
    <circle
      key={i}
      cx={`${Math.random() * 100}%`}
      cy={`${Math.random() * 100}%`}
      r="1"
      fill={theme === "light" ? "#1A1A2E" : "#00FFFF"}
      className="sparkle"
      style={{
        animationDelay: `${Math.random() * 2}s`,
        animationDuration: `${1 + Math.random()}s`,
      }}
    />
  ))

  const cardVariants = {
    initial: { scale: 1, opacity: 1, rotate: 0 },
    shuffle: {
      ...getShuffleAnimation(index),
      scale: 0.8,
      rotate: Math.random() * 360 - 180,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.8,
      },
    },
    spread: {
      scale: 1,
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.1,
      },
    },
    selected: {
      scale: 1.1,
      zIndex: 10,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  const shuffleTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.8,
  }

  return (
    <motion.div
      className={`aspect-[2/3] ${isShuffling ? "" : "cursor-pointer"}`}
      variants={cardVariants}
      initial="initial"
      animate={isShuffling ? "shuffle" : isSelecting ? (isSelected ? "selected" : "spread") : "spread"}
      transition={isShuffling ? shuffleTransition : {}}
      whileHover={!isSelecting && !isShuffling ? { scale: 1.05, zIndex: 10 } : {}}
      onClick={() => !isShuffling && onSelect()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d"
        animate={{
          rotateY: isSelected ? 180 : 0,
        }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Back of the card */}
        <div
          className={`w-full h-full absolute rounded-[20px] shadow-lg ${
            theme === "light" ? "bg-gray-100 border-2 border-gray-300" : "bg-futuristic-dark border-2 border-neon-blue"
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
          <div className={`absolute inset-0 ${theme === "light" ? "bg-grid" : "bg-cyber-grid"} rounded-[18px]`}></div>
        </div>

        {/* Front of the card */}
        <div
          className={`w-full h-full absolute rounded-[20px] shadow-lg flex items-center justify-center ${
            theme === "light" ? "bg-white border-2 border-gray-300" : "bg-futuristic-dark border-2 border-neon-pink"
          }`}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <h2
            className={`text-2xl font-bold text-center p-4 ${
              theme === "light" ? "text-futuristic-dark" : "text-neon-pink text-shadow-glow"
            }`}
          >
            {card.name}
          </h2>
        </div>

        {isHovered && !isSelected && (
          <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
            <rect
              width="100%"
              height="100%"
              fill="none"
              stroke={theme === "light" ? "url(#light-gradient)" : "url(#neon-gradient)"}
              strokeWidth="2"
              rx="20"
              ry="20"
              className={`star-border ${isHovered ? "animate-star-flow" : ""}`}
            />
            {sparkles}
            <defs>
              <linearGradient id="light-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1A1A2E" stopOpacity="0.8">
                  <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#E0E0E0" stopOpacity="0">
                  <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
              <linearGradient id="neon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00FFFF" stopOpacity="0.8">
                  <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FF00FF" stopOpacity="0">
                  <animate attributeName="offset" values="0;1" dur="2s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        )}
      </motion.div>
    </motion.div>
  )
}

export default TarotCard

