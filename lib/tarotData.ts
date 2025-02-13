export interface TarotCard {
  id: number
  name: string
  imageUrl: string
  backImageUrl: string
  description: string
}

const cardBackUrl = "https://raw.githubusercontent.com/lhg1006/portfolio-images/837cc7c6b29bc704887a63fde904a9d46df8acb0/images/taro/taro-card-back.png"

export const tarotCards: TarotCard[] = [
  {
    id: 1,
    name: "The Fool",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Fool",
    backImageUrl: cardBackUrl,
    description: "새로운 시작과 모험을 상징합니다. 두려움 없이 앞으로 나아가세요.",
  },
  {
    id: 2,
    name: "The Magician",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Magician",
    backImageUrl: cardBackUrl,
    description: "당신의 잠재력을 깨닫고 실현할 때입니다. 창의력을 발휘하세요.",
  },
  {
    id: 3,
    name: "The High Priestess",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+High+Priestess",
    backImageUrl: cardBackUrl,
    description: "직관과 내면의 지혜에 귀 기울이세요. 숨겨진 진실을 발견할 수 있습니다.",
  },
  {
    id: 4,
    name: "The Empress",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Empress",
    backImageUrl: cardBackUrl,
    description: "풍요와 창조성의 시기입니다. 자신과 주변을 돌보세요.",
  },
  {
    id: 5,
    name: "The Emperor",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Emperor",
    backImageUrl: cardBackUrl,
    description: "안정과 권위를 상징합니다. 리더십을 발휘할 때입니다.",
  },
  {
    id: 6,
    name: "The Hierophant",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Hierophant",
    backImageUrl: cardBackUrl,
    description: "전통과 교육의 가치를 인식하세요. 지혜로운 조언을 구하세요.",
  },
  {
    id: 7,
    name: "The Lovers",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Lovers",
    backImageUrl: cardBackUrl,
    description: "사랑과 관계의 중요성을 나타냅니다. 중요한 선택의 시기입니다.",
  },
  {
    id: 8,
    name: "The Chariot",
    imageUrl: "/placeholder.svg?height=300&width=200&text=The+Chariot",
    backImageUrl: cardBackUrl,
    description: "의지력과 결단력을 상징합니다. 목표를 향해 전진하세요.",
  },
]

