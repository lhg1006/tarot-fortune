import { motion } from "framer-motion"

const StarEffect = () => {
  const stars = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-white rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        delay: Math.random() * 2,
      }}
    />
  ))

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{stars}</div>
}

export default StarEffect

