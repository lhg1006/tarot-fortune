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
  return [...tarotCards].sort(() => Math.random() - 0.5).slice(0, 8)
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

