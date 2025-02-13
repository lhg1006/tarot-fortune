import { type TarotCard, tarotCards } from "./tarotData"

export function getRandomCard(): TarotCard {
  const randomIndex = Math.floor(Math.random() * tarotCards.length)
  return tarotCards[randomIndex]
}

export function setTodaysCard(card: TarotCard) {
  localStorage.setItem("todaysCard", JSON.stringify({ card, date: new Date().toDateString() }))
}

export function getTodaysCard(): TarotCard | null {
  const storedCard = localStorage.getItem("todaysCard")
  if (storedCard) {
    const { card, date } = JSON.parse(storedCard)
    if (date === new Date().toDateString()) {
      return card
    }
  }
  return null
}

export function clearTodaysCard() {
  localStorage.removeItem("todaysCard")
}

export function shuffleCards(): TarotCard[] {
  // 원본 배열을 복사
  const shuffledCards = [...tarotCards]
  
  // Fisher-Yates 셔플 알고리즘 적용
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
  }
  
  // 섞은 카드 중 앞에서 8장만 반환
  return shuffledCards.slice(0, 8)
}

export function getShuffleAnimation(index: number) {
  const maxRadius = 100 // 최대 반경을 100px로 제한
  const angle = Math.random() * 360
  const radius = Math.random() * maxRadius
  return {
    x: Math.cos((angle * Math.PI) / 180) * radius,
    y: Math.sin((angle * Math.PI) / 180) * radius,
  }
}

