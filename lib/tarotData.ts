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
    description: "무한한 잠재력과 순수함을 지닌 새로운 시작을 의미합니다. 두려움 없이 모험을 시작할 때입니다.",
    keywords: "무한한 잠재력, 순수함, 새로운 시작, 모험심",
    imageDescription: "푸른 하늘 아래 절벽 끝에서 한 손엔 하얀 장미, 다른 손엔 작은 배낭을 든 인물이 당당히 걷고 있습니다. 해맑은 표정으로 앞을 향해 나아가며, 뒤에는 햇살이 비치고 작은 강아지가 곁에서 뛰어노는 모습이 보입니다."
  },
  {
    id: 2,
    name: "The Magician",  
    nameKor: "마법사",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_magician.jpeg`,
    backImageUrl: cardBackUrl,
    description: "당신의 창조성과 의지력을 발휘할 때입니다. 가진 자원을 활용하여 목표를 실현하세요.",
    keywords: "창조성, 자원 활용, 의지력, 실천 능력",
    imageDescription: "테이블 위에 지팡이, 칼, 컵, 동전 등의 상징물이 배치되어 있으며, 마법사가 오른손을 하늘로 뻗고 왼손을 땅으로 향해 에너지를 끌어오르는 모습입니다. 신비롭고 우아한 마법진 효과가 어우러져 있습니다."
  },
  {
    id: 3,
    name: "The High Priestess",
    nameKor: "여왕제사장",
    imageUrl: `${baseUrl}2738881eaaeafbf5483d4804eb385469e7fa1e00/images/tarot/the_high_priestess.jpeg`,
    backImageUrl: cardBackUrl,
    description: "직관과 내면의 지혜를 따르세요. 깊은 통찰과 신비로운 지식이 당신을 기다립니다.",
    keywords: "직관, 잠재의식, 신비, 내면적 지혜",
    imageDescription: "흰색과 검은색 기둥 사이에 앉아있는 신비로운 여사제가 달과 수수께끼의 문양이 들어간 두루마리를 들고 있습니다. 차분한 푸른색과 보라색 톤으로 신비로움과 지혜가 느껴지는 분위기를 자아냅니다."
  },
  {
    id: 4,
    name: "The Empress",
    nameKor: "여제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_empress.jpeg`,
    backImageUrl: cardBackUrl,
    description: "풍요와 창조의 시기입니다. 모성애와 풍족함이 당신을 감싸고 있으며, 창조적 에너지가 넘칩니다.",
    keywords: "풍요, 모성애, 창조성, 풍족함과 번영",
    imageDescription: "풍요로운 자연 속에서 편안하게 앉아 있는 여성의 모습이 보입니다. 배경에는 풍성한 밀밭과 숲, 만개한 꽃들이 있으며, 사랑스럽고 화사한 분위기로 대지의 여신을 연상시킵니다."
  },
  {
    id: 5,
    name: "The Emperor",
    nameKor: "황제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_emperor.jpeg`,
    backImageUrl: cardBackUrl,
    description: "안정된 리더십과 권위를 상징합니다. 체계적인 접근과 확고한 의지로 목표를 달성할 때입니다.",
    keywords: "권위, 구조, 질서, 안정된 리더십",
    imageDescription: "장엄한 왕좌에 앉아있는 강인한 황제의 모습입니다. 붉은 망토와 갑옷이 보이는 단단한 이미지를 연출하며, 배경의 황갈색 바위산이 권위와 안정감을 강조합니다."
  },
  {
    id: 6,
    name: "The Lovers",
    nameKor: "연인",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_lovers.jpeg`,
    backImageUrl: cardBackUrl,
    description: "사랑과 조화로운 관계의 시기입니다. 중요한 선택 앞에서 진정한 마음을 따르세요.",
    keywords: "사랑, 조화, 선택, 관계",
    imageDescription: "남성과 여성이 마주 보고 서 있으며, 머리 위로 천사가 축복을 내리는 장면입니다. 따스한 햇살이 비추는 가운데, 배경은 꽃과 과일나무가 가득한 정원으로 채워져 있습니다."
  },
  {
    id: 7,
    name: "The Chariot",
    nameKor: "전차",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_chariot.jpeg`,
    backImageUrl: cardBackUrl,
    description: "강한 의지와 결단력으로 목표를 향해 전진하세요. 승리와 성취가 당신을 기다립니다.",
    keywords: "전진, 결단력, 통제력, 목표 달성",
    imageDescription: "멋진 갑옷을 입은 전사가 두 마리 스핑크스가 끄는 전차를 이끄는 모습입니다. 하늘과 별빛을 배경으로 앞을 향해 돌진하는 모습이 파란색과 금색의 화려하고 역동적인 색채로 표현되어 있습니다."
  },
  {
    id: 8,
    name: "Strength",
    nameKor: "힘",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/strength.jpeg`,
    backImageUrl: cardBackUrl,
    description: "내면의 용기와 인내로 어려움을 극복할 수 있습니다. 부드럽지만 강인한 힘을 발휘하세요.",
    keywords: "내면의 용기, 인내, 극복, 온화한 힘",
    imageDescription: "부드럽게 사자를 어루만지는 여성이 등장합니다. 얇은 흰 옷을 입은 여성의 이마 위에는 무한대(∞) 기호가 있는 왕관이 있으며, 따뜻하면서도 강인한 느낌을 노랑과 오렌지 톤으로 표현하고 있습니다."
  },
  {
    id: 9,
    name: "The Hermit",
    nameKor: "은둔자",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_hermit.jpeg`,
    backImageUrl: cardBackUrl,
    description: "고독한 시간을 통해 내면의 지혜를 찾을 때입니다. 깊은 성찰과 탐구가 필요한 시기입니다.",
    keywords: "고독, 성찰, 지혜, 탐구",
    imageDescription: "어두운 산길이나 황량한 설원 위를 지팡이에 의지해 걷는 노인의 모습입니다. 한 손에는 등불을 들어 길을 비추고 있으며, 차분하고 고요한 파란빛과 회색 톤이 현자의 이미지를 표현합니다."
  },
  {
    id: 10,
    name: "Wheel of Fortune",
    nameKor: "운명의 수레바퀴",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/wheel_of_fortune.jpeg`,
    backImageUrl: cardBackUrl,
    description: "운명의 변화가 찾아오는 시기입니다. 새로운 기회를 잡고 변화를 받아들이세요.",
    keywords: "변화, 순환, 운명적 전환, 기회",
    imageDescription: "거대한 수레바퀴 주변에 신화 속 존재들이 둘러싸고 있습니다. 수레바퀴에는 황금색 문양이 빛나며 계속 회전하는 모습이 파란 하늘과 구름 사이로 신비롭게 표현되어 있습니다."
  },
  {
    id: 11,
    name: "Justice",
    nameKor: "정의",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/justice.jpeg`,
    backImageUrl: cardBackUrl,
    description: "공정하고 균형 잡힌 판단이 필요한 시기입니다. 진실을 마주하고 책임을 다하세요.",
    keywords: "공정, 균형, 책임, 진실",
    imageDescription: "눈을 가리지 않은 정의의 여신이 칼과 천칭(저울)을 들고 있는 모습입니다. 붉은 망토나 로브를 입은 채 정면을 응시하며, 빨강과 파랑의 대비되는 색감으로 균형과 단정함을 표현합니다."
  },
  {
    id: 12,
    name: "The Hanged Man",
    nameKor: "매달린 사람",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_hanged_man.jpeg`,
    backImageUrl: cardBackUrl,
    description: "새로운 관점으로 상황을 바라볼 때입니다. 잠시 멈추어 깊이 생각하고 인내하세요.",
    keywords: "희생, 새로운 관점, 내려놓음, 인내",
    imageDescription: "나무에 거꾸로 매달려 있는 인물이 고통스럽지 않고 오히려 명상을 하는 듯한 차분한 표정을 짓고 있습니다. 녹색과 갈색 톤의 배경이 정적이면서도 깊은 깨달음을 상징합니다."
  },
  {
    id: 13,
    name: "Death",
    nameKor: "죽음",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/death.jpeg`,
    backImageUrl: cardBackUrl,
    description: "큰 변화와 새로운 시작이 다가오고 있습니다. 과거를 받아들이고 새로운 시작을 준비하세요.",
    keywords: "변화, 끝과 시작, 재탄생, 필연적 전환",
    imageDescription: "검은 갑옷을 입은 해골 기사가 흰 말을 타고 있는 모습입니다. 배경에는 황량한 들판과 서서히 떠오르는 해 또는 석양이 비치며 끝과 시작을 암시하는 묵직하고 엄숙한 분위기를 자아냅니다."
  },
  {
    id: 14,
    name: "Temperance",
    nameKor: "절제",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/temperance.jpeg`,
    backImageUrl: cardBackUrl,
    description: "균형과 조화를 찾아야 할 때입니다. 신중하게 상황을 조절하고 중용을 지키세요.",
    keywords: "균형, 조화, 중용, 신중한 조절",
    imageDescription: "천사가 두 개의 컵 사이에 물을 조심스럽게 옮기는 장면입니다. 한 발은 물속에, 다른 발은 땅 위에 두어 균형 잡힌 자세를 보여주며, 온화하고 부드러운 파스텔톤의 평온한 하늘을 배경으로 합니다."
  },
  {
    id: 15,
    name: "The Devil",
    nameKor: "악마",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_devil.jpeg`,
    backImageUrl: cardBackUrl,
    description: "물질적 집착과 속박에서 벗어날 때입니다. 자신을 구속하는 것들을 인식하고 해방되세요.",
    keywords: "속박, 유혹, 물질적 집착, 그림자적 욕망",
    imageDescription: "산염소 머리를 한 악마가 어두운 소굴에서 인간을 사슬로 묶고 있는 장면입니다. 검은 날개와 불길이 보이며, 무거운 돌기둥을 배경으로 음산하지만 지나치게 자극적이지 않은 분위기를 연출합니다."
  },
  {
    id: 16,
    name: "The Tower",
    nameKor: "탑",
    imageUrl: `${baseUrl}df4774aac8b7baf4fd27b890264b33d2741bc829/images/tarot/the_tower.jpeg`,
    backImageUrl: cardBackUrl,
    description: "급격한 변화와 혼란이 찾아올 수 있습니다. 이를 통해 새로운 깨달음을 얻고 재정비할 기회로 삼으세요.",
    keywords: "갑작스러운 변화, 충격, 붕괴 후 재정비, 깨달음",
    imageDescription: "번개가 내리치며 꼭대기가 무너져 내리는 거대한 탑의 모습입니다. 탑에서 사람들이 떨어지고 불꽃이 솟구치는 장면이 폭풍우 치는 어두운 하늘을 배경으로, 노랑과 주황색 불꽃이 강렬한 대비를 이루며 표현되어 있습니다."
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

