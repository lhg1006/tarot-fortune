export interface TarotCard {
  id: number
  name: string
  nameKor: string
  imageUrl: string
  backImageUrl: string
  description: string
  keywords: string
  imageDescription: string
}
const baseUrl = "https://raw.githubusercontent.com/lhg1006/portfolio-images/"
// const cardBackUrl = `${baseUrl}837cc7c6b29bc704887a63fde904a9d46df8acb0/images/taro/taro-card-back.png`
const cardBackUrl = `/tarot_back.png`
export const tarotCards: TarotCard[] = [
  {
    id: 1,
    name: "The Fool",
    nameKor: "바보",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_fool.jpeg`,
    backImageUrl: cardBackUrl,
    description: "무한한 잠재력과 순수함을 지닌 새로운 시작을 의미합니다.\n두려움 없이 모험을 시작할 때입니다.",
    keywords: "무한한 잠재력, 순수함, 새로운 시작, 모험심",
    imageDescription: "절벽 끝에서 한 손엔 하얀 장미, 다른 손엔 작은 배낭을 든 인물이 당당히 걷고 있습니다. 해맑은 표정으로 앞을 향해 나아가며, 작은 강아지가 곁에서 뛰어노는 모습이 보입니다. 뒤로는 밝은 햇살이 비추고 있습니다."
  },
  {
    id: 2,
    name: "The Magician",
    nameKor: "마법사",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_magician.jpeg`,
    backImageUrl: cardBackUrl,
    description: "당신의 창조성과 의지력을 발휘할 때입니다.\n가진 자원을 활용하여 목표를 실현하세요.",
    keywords: "창조성, 자원 활용, 의지력, 실천 능력",
    imageDescription: "황금빛 보름달을 배경으로 당당히 서 있는 여성 마법사의 모습입니다. 검은 마법사 모자와 우아한 로브를 입고 있으며, 주변에는 녹색 빛을 발하는 마법의 수정구들이 놓여있습니다. 양팔을 활짝 펼친 자세로 마법의 힘을 표현하고 있습니다."
  },
  {
    id: 3,
    name: "The High Priestess",
    nameKor: "여왕제사장",
    imageUrl: `${baseUrl}2738881eaaeafbf5483d4804eb385469e7fa1e00/images/tarot/the_high_priestess.jpeg`,
    backImageUrl: cardBackUrl,
    description: "직관과 내면의 지혜를 따르세요.\n깊은 통찰과 신비로운 지식이 당신을 기다립니다.",
    keywords: "직관, 잠재의식, 신비, 내면적 지혜",
    imageDescription: "거대한 보름달을 배경으로 두 개의 대리석 기둥 사이에 앉아있는 여왕제사장의 모습입니다. 깊은 푸른색 로브를 입고 신비로운 문양의 장식물과 고대의 책을 들고 있습니다. 고요한 표정으로 깊은 지혜를 표현하고 있습니다."
  },
  {
    id: 4,
    name: "The Empress",
    nameKor: "여제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_empress.jpeg`,
    backImageUrl: cardBackUrl,
    description: "풍요와 창조의 시기입니다.\n모성애와 풍족함이 당신을 감싸고 있으며,\n창조적 에너지가 넘칩니다.",
    keywords: "풍요, 모성애, 창조성, 풍족함과 번영",
    imageDescription: "황금빛 태양이 비치는 풍요로운 밀밭 한가운데 앉아있는 여제의 모습입니다. 청록색 상의와 금빛 자수가 놓인 드레스를 입고 있으며, 주변에는 황금빛 연꽃들이 만개해 있습니다. 양손을 가슴에 모은 자애로운 모습이 모성을 표현합니다."
  },
  {
    id: 5,
    name: "The Emperor",
    nameKor: "황제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_emperor.jpeg`,
    backImageUrl: cardBackUrl,
    description: "안정된 리더십과 권위를 상징합니다.\n체계적인 접근과 확고한 의지로 목표를 달성할 때입니다.",
    keywords: "권위, 구조, 질서, 안정된 리더십",
    imageDescription: "웅장한 설산을 배경으로 왕좌에 앉아있는 강인한 황제의 모습입니다. 정교한 문양이 새겨진 황금빛 갑옷과 진홍색 망토를 입고 있으며, 단단한 눈빛으로 확고한 의지를 보여줍니다. 전체적인 구도가 권위와 힘을 상징합니다."
  },
  {
    id: 6,
    name: "The Lovers",
    nameKor: "연인",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_lovers.jpeg`,
    backImageUrl: cardBackUrl,
    description: "사랑과 조화로운 관계의 시기입니다.\n중요한 선택 앞에서 진정한 마음을 따르세요.",
    keywords: "사랑, 조화, 선택, 관계",
    imageDescription: "황금빛 일몰을 배경으로 서로를 사랑스럽게 바라보는 연인들의 모습입니다. 여성은 순백의 드레스를, 남성은 푸른빛 의상을 입고 있으며, 천사의 날개가 두 사람을 감싸고 있습니다. 주변에는 붉은 장미와 오렌지색 꽃들이 만발해 있습니다."
  },
  {
    id: 7,
    name: "The Chariot",
    nameKor: "전차",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_chariot.jpeg`,
    backImageUrl: cardBackUrl,
    description: "강한 의지와 결단력으로 목표를 향해 전진하세요.\n승리와 성취가 당신을 기다립니다.",
    keywords: "전진, 결단력, 통제력, 목표 달성",
    imageDescription: "황혼의 하늘을 배경으로 세 마리의 웅장한 푸른빛 말들을 이끄는 기사의 모습입니다. 정교한 문양의 황금빛 갑옷을 입고 있으며, 말들은 황금빛 마구를 착용하고 있습니다. 역동적인 움직임이 승리를 향한 강한 의지를 표현합니다."
  },
  {
    id: 8,
    name: "Strength",
    nameKor: "힘",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/strength.jpeg`,
    backImageUrl: cardBackUrl,
    description: "내면의 용기와 인내로 어려움을 극복할 수 있습니다.\n부드럽지만 강인한 힘을 발휘하세요.",
    keywords: "내면의 용기, 인내, 극복, 온화한 힘",
    imageDescription: "황금빛 달을 배경으로 당당히 서 있는 여성과 위엄 있는 사자의 모습입니다. 순백의 드레스와 황금빛 왕관을 쓴 여성의 곁에서 사자가 부드러운 표정을 짓고 있습니다. 전체적으로 내면의 강인함과 부드러운 힘이 조화롭게 표현되어 있습니다."
  },
  {
    id: 9,
    name: "The Hermit",
    nameKor: "은둔자",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_hermit.jpeg`,
    backImageUrl: cardBackUrl,
    description: "고독한 시간을 통해 내면의 지혜를 찾을 때입니다.\n깊은 성찰과 탐구가 필요한 시기입니다.",
    keywords: "고독, 성찰, 지혜, 탐구",
    imageDescription: "달빛이 비치는 겨울 밤, 눈 덮인 산길을 홀로 걸어가는 은둔자의 모습입니다. 긴 로브를 입고 지팡이를 든 채 묵묵히 앞으로 나아가며, 주변의 침엽수와 나무들이 깊은 고독을 표현합니다. 고요한 겨울 풍경이 내면의 성찰을 상징합니다."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameKor: "운명의 수레바퀴",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/wheel_of_fortune.jpeg`,
    backImageUrl: cardBackUrl,
    description: "운명의 변화가 찾아오는 시기입니다.\n새로운 기회를 잡고 변화를 받아들이세요.",
    keywords: "변화, 순환, 운명적 전환, 기회",
    imageDescription: "깊은 청록색 하늘을 배경으로 황금빛으로 빛나는 거대한 운명의 수레바퀴가 떠 있습니다. 수레바퀴에는 정교한 문양과 상징들이 새겨져 있으며, 아래에는 황금 날개를 가진 신비로운 존재들이 있습니다. 별들과 구름이 신비로운 분위기를 자아냅니다."
  },
  {
    id: 11,
    name: "Justice",
    nameKor: "정의",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/justice.jpeg`,
    backImageUrl: cardBackUrl,
    description: "공정하고 균형 잡힌 판단이 필요한 시기입니다.\n진실을 마주하고 책임을 다하세요.",
    keywords: "공정, 균형, 책임, 진실",
    imageDescription: "장엄한 아치형 문 앞에 서 있는 정의의 여신의 모습입니다. 정교한 갑옷과 붉은 망토를 입고 있으며, 한 손에는 검을, 다른 손에는 저울을 들고 있습니다. 단호한 표정과 위엄 있는 자세가 정의와 균형을 상징합니다."
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameKor: "매달린 사람",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_hanged_man.jpeg`,
    backImageUrl: cardBackUrl,
    description: "새로운 관점으로 상황을 바라볼 때입니다.\n잠시 멈추어 깊이 생각하고 인내하세요.",
    keywords: "희생, 새로운 관점, 내려놓음, 인내",
    imageDescription: "평화로운 강가와 초록빛 숲을 배경으로 거꾸로 매달린 남성의 모습입니다. 푸른색 옷을 입은 인물은 양팔을 자유롭게 벌리고 있으며, 고요한 미소를 띠고 있습니다. 부드러운 녹색 빛이 새로운 관점과 깨달음을 상징합니다."
  },
  {
    id: 13,
    name: "Death",
    nameKor: "죽음",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/death.jpeg`,
    backImageUrl: cardBackUrl,
    description: "큰 변화와 새로운 시작이 다가오고 있습니다.\n과거를 받아들이고 새로운 시작을 준비하세요.",
    keywords: "변화, 끝과 시작, 재탄생, 필연적 전환",
    imageDescription: "거대한 황금빛 석양을 배경으로 하얀 말을 탄 검은 갑옷의 기사가 서 있습니다. 정교한 갑옷은 빛을 반사하며 위엄을 드러내고, 주변의 어두운 숲과 강가는 붉은 석양빛에 물들어 있습니다. 엄숙한 분위기가 변화와 전환을 상징합니다."
  },
  {
    id: 14,
    name: "Temperance",
    nameKor: "절제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/temperance.jpeg`,
    backImageUrl: cardBackUrl,
    description: "균형과 조화를 찾아야 할 때입니다.\n신중하게 상황을 조절하고 중용을 지키세요.",
    keywords: "균형, 조화, 중용, 신중한 조절",
    imageDescription: "황금빛 석양을 배경으로 호수 위에 서 있는 천사의 모습입니다. 흰색과 파스텔톤의 드레스를 입고 양손에 잔을 들고 있으며, 무지개빛 날개를 펼치고 있습니다. 평화로운 표정과 물결이 조화와 균형을 상징합니다."
  },
  {
    id: 15,
    name: "The Devil",
    nameKor: "악마",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_devil.jpeg`,
    backImageUrl: cardBackUrl,
    description: "물질적 집착과 속박에서 벗어날 때입니다.\n자신을 구속하는 것들을 인식하고 해방되세요.",
    keywords: "속박, 유혹, 물질적 집착, 그림자적 욕망",
    imageDescription: "황금빛 석양을 배경으로 강렬한 붉은 눈을 가진 악마의 모습이 등장합니다. 검은 뿔과 푸른 머리카락, 어두운 근육질의 신체가 위압적인 존재감을 드러내며, 붉은 산맥이 있는 배경이 음산한 분위기를 자아냅니다. 전체적으로 어둡고 신비로운 톤이 유혹과 속박을 상징합니다."
  },
  {
    id: 16,
    name: "The Tower",
    nameKor: "탑",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_tower.jpeg`,
    backImageUrl: cardBackUrl,
    description: "급격한 변화와 혼란이 찾아올 수 있습니다.\n이를 통해 새로운 깨달음을 얻고 재정비할 기회로 삼으세요.",
    keywords: "갑작스러운 변화, 충격, 붕괴 후 재정비, 깨달음",
    imageDescription: "폭풍우 치는 하늘에서 강렬한 빛줄기가 내리치는 고딕 양식의 탑이 서 있습니다. 황금빛으로 빛나는 탑 주변으로 불꽃과 파편이 흩날리며, 어두운 구름과 검은 침엽수림이 배경을 이룹니다. 급격한 변화의 순간이 극적으로 표현되어 있습니다."
  }
]

// Fisher-Yates 셔플 알고리즘을 사용하여 카드를 섞는 함수
export function shuffleCards(): TarotCard[] {
  // 원본 배열을 복사하여 사용
  const shuffledCards = [...tarotCards]
  
  // 배열을 섞습니다
  for (let i = shuffledCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]]
  }
  
  // 섞은 카드 중 앞에서 8장만 반환
  return shuffledCards.slice(0, 8)
}

