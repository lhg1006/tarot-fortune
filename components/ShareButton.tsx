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
        const currentYear = new Date().getFullYear()
        const mainUrl = window.location.origin
        const shareText = `오늘의 카드:\n${card.name} ${card.nameKor}✨\n\n키워드:\n${card.keywords}🔮\n\n메시지:\n${card.description}\n\n운세를 확인해보세요 👇\n${mainUrl}`
        await navigator.share({
          title: `🌟 ${currentYear} 타로 운세 결과 🌟`,
          text: shareText,
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
      className={`flex items-center justify-center ${className}`}
    >
      <Share2 className="w-5 h-5 mr-2" />
      결과 공유하기
    </motion.button>
  )
}

