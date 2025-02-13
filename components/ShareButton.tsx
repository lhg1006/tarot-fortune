import { motion } from "framer-motion"
import type { TarotCard } from "../lib/tarotData"
import { Share2 } from "lucide-react"

interface ShareButtonProps {
  card: TarotCard
  className?: string
}

export default function ShareButton({ card, className }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "2025 타로 운세",
          text: `오늘의 카드: ${card.name} - ${card.description}`,
          url: window.location.href,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      alert("공유 기능을 지원하지 않는 브라우저입니다.")
    }
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleShare}
      className={`bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-lg shadow-lg flex items-center justify-center ${className}`}
    >
      <Share2 className="w-5 h-5 mr-2" />
      결과 공유하기
    </motion.button>
  )
}

