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

  const sparkles = Array.from({ length: 25 }, (_, i) => (
    <motion.circle
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 + Math.random() * 0.4 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      cx={`${Math.random() * 100}%`}
      cy={`${Math.random() * 100}%`}
      r={Math.random() * 2 + 2}
      fill={theme === "light" ? "#FFD700" : "#F0F8FF"}
      className="sparkle animate-pulse"
      style={{
        animationDelay: `${Math.random() * 1.5}s`,
        animationDuration: `${0.5 + Math.random() * 0.5}s`,
        transform: `scale(${1.2 + Math.random() * 1.5})`
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
      whileHover={!isSelecting && !isShuffling ? { 
        scale: 1.05, 
        zIndex: 10,
        transition: { duration: 0.1 }
      } : {}}
      onClick={() => !isShuffling && onSelect()}
      onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setIsHovered(true)}
      onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setIsHovered(false)}
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
          className={`w-full h-full absolute rounded-[20px] shadow-lg overflow-hidden ${
            theme === "light" 
              ? "bg-blue-50 border-4 border-black shadow-[0_0_15px_rgba(37,99,235,0.3),0_0_30px_rgba(37,99,235,0.2)]" 
              : "bg-futuristic-dark border-4 shadow-[0_0_20px_rgba(240,248,255,0.2),0_0_40px_rgba(240,248,255,0.1)]"
          }`}
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={card.backImageUrl || "/placeholder.svg"}
            alt="Card Back"
            className={`w-full h-full object-cover object-center rounded-[15px] ${theme === "light" ? "opacity-100" : "opacity-80"}`}
          />
          <div className={`absolute inset-0 ${
            theme === "light" ? "bg-cyber-grid opacity-30" : "bg-cyber-grid"
          } rounded-[15px]`}></div>
        </div>

        {/* Front of the card */}
        <div
          className={`w-full h-full absolute rounded-[20px] shadow-lg ${
            theme === "light"
              ? "bg-white border-4 border-black shadow-[0_0_20px_rgba(37,99,235,0.4),0_0_40px_rgba(236,72,153,0.2)]"
              : "bg-futuristic-dark border-4 shadow-[0_0_25px_rgba(240,248,255,0.3),0_0_50px_rgba(255,0,255,0.2)]"
          }`}
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <img
            src={card.imageUrl || "/placeholder.svg"}
            alt="Card Front"
            className="w-full h-full object-cover object-center rounded-[15px]"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 p-[2px] sm:p-2 flex flex-col gap-[1px] sm:gap-1 rounded-bl-[12px] rounded-br-[12px]">
            <h2
              className={`text-[8px] xs:text-[10px] sm:text-lg font-bold text-center leading-none ${
                theme === "light" ? "text-white drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" : "text-shadow-glow"
              }`}
            >
              {card.name}
            </h2>
            <h3
              className={`text-[6px] xs:text-[8px] sm:text-sm text-center leading-none ${
                theme === "light" ? "text-gray-200" : "text-neon-blue text-shadow-glow"
              }`}
            >
              {card.nameKor}
            </h3>
          </div>
        </div>

        {isHovered && !isSelected && window.matchMedia("(hover: hover)").matches && (
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
              <radialGradient id="light-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8">
                  <animate attributeName="offset" values="0;0.3" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0">
                  <animate attributeName="offset" values="0.7;1" dur="2s" repeatCount="indefinite" />
                </stop>
              </radialGradient>
              <radialGradient id="neon-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#F0F8FF" stopOpacity="0.8">
                  <animate attributeName="offset" values="0;0.3" dur="2s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#FF00FF" stopOpacity="0">
                  <animate attributeName="offset" values="0.7;1" dur="2s" repeatCount="indefinite" />
                </stop>
              </radialGradient>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="10s"
                repeatCount="indefinite"
              />
            </defs>
          </svg>
        )}
      </motion.div>
    </motion.div>
  )
}

export default TarotCard

