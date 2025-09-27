import { useState } from 'react'

function LLMBasics() {
  const [activeSection, setActiveSection] = useState('definition')

  const sections = [
    { id: 'definition', title: 'LLM이란 무엇인가?', icon: '🧠' },
    { id: 'principles', title: '작동 원리', icon: '⚙️' },
    { id: 'history', title: '발전 역사', icon: '📈' },
    { id: 'types', title: '주요 유형', icon: '🔍' },
    { id: 'applications', title: '활용 분야', icon: '🚀' }
  ]

  const timelineData = [
    {
      year: '1950s',
      title: 'AI의 시작',
      description: '튜링 테스트와 초기 AI 개념 등장',
      color: 'from-gray-400 to-gray-600'
    },
    {
      year: '1980s-1990s',
      title: '신경망의 부활',
      description: '역전파 알고리즘과 다층 퍼셉트론 발전',
      color: 'from-blue-400 to-blue-600'
    },
    {
      year: '2017',
      title: 'Transformer 혁명',
      description: '"Attention Is All You Need" 논문 발표',
      color: 'from-green-400 to-green-600'
    },
    {
      year: '2018-2019',
      title: 'BERT & GPT 등장',
      description: '사전 훈련된 언어 모델의 시대 개막',
      color: 'from-purple-400 to-purple-600'
    },
    {
      year: '2020',
      title: 'GPT-3 출시',
      description: '1750억 개 매개변수, 일반인도 사용 가능한 AI',
      color: 'from-orange-400 to-orange-600'
    },
    {
      year: '2022-2023',
      title: 'ChatGPT 열풍',
      description: '대화형 AI의 대중화, LLM 경쟁 시대',
      color: 'from-red-400 to-red-600'
    }
  ]

  const renderDefinition = () => (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
        <h3 className="text-2xl font-bold text-white mb-4">📚 LLM (Large Language Model)이란?</h3>
        <p className="text-gray-300 text-lg leading-relaxed mb-4">
          <strong className="text-blue-400">거대 언어 모델(LLM)</strong>은 방대한 양의 텍스트 데이터로 훈련된
          인공지능 모델로, 인간의 언어를 이해하고 생성할 수 있는 능력을 가진 시스템입니다.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <div className="text-3xl mb-4">🎯</div>
          <h4 className="text-xl font-bold text-white mb-3">핵심 특징</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>수십억에서 조 단위의 매개변수 보유</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>다양한 언어 작업 수행 가능</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>문맥을 이해하고 일관된 응답 생성</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>Few-shot 또는 Zero-shot 학습 가능</span>
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <div className="text-3xl mb-4">💡</div>
          <h4 className="text-xl font-bold text-white mb-3">주요 능력</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <span className="text-green-400 mt-1">•</span>
              <span>텍스트 생성 및 완성</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 mt-1">•</span>
              <span>질문 답변 및 대화</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 mt-1">•</span>
              <span>번역 및 요약</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-green-400 mt-1">•</span>
              <span>코드 생성 및 분석</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
        <h4 className="text-xl font-bold text-white mb-3">🔄 쉬운 비유로 이해하기</h4>
        <p className="text-gray-300 leading-relaxed">
          LLM을 <strong className="text-green-400">매우 똑똑한 도서관 사서</strong>로 생각해보세요.
          이 사서는 세상의 모든 책을 읽고 기억하며, 어떤 질문을 해도 관련된 정보를 종합하여
          명확하고 유용한 답변을 제공할 수 있습니다. 단, 실시간 정보는 알지 못하고,
          때로는 확신에 찬 목소리로 잘못된 정보를 말할 수도 있습니다.
        </p>
      </div>
    </div>
  )

  const renderPrinciples = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">⚙️ LLM은 어떻게 작동할까요?</h3>
        <p className="text-gray-400 text-lg">복잡한 과정을 단계별로 쉽게 설명드립니다</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">1</div>
              <h4 className="text-xl font-bold text-white">데이터 수집</h4>
            </div>
            <p className="text-gray-300">
              인터넷의 웹페이지, 책, 논문, 위키피디아 등 방대한 텍스트 데이터를 수집합니다.
              수조 개의 단어로 이루어진 데이터셋을 구축합니다.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">2</div>
              <h4 className="text-xl font-bold text-white">토큰화</h4>
            </div>
            <p className="text-gray-300">
              텍스트를 "토큰"이라는 작은 단위로 나눕니다. 단어나 문자의 조합을 숫자로 변환하여
              컴퓨터가 이해할 수 있게 만듭니다.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">3</div>
              <h4 className="text-xl font-bold text-white">신경망 훈련</h4>
            </div>
            <p className="text-gray-300">
              Transformer 아키텍처를 사용하여 "다음 단어 예측" 작업을 반복 학습합니다.
              수백억 개의 매개변수를 조정하며 패턴을 학습합니다.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
            <h4 className="text-xl font-bold text-white mb-4">🧩 Transformer의 핵심: Attention</h4>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-blue-400 mb-2">Self-Attention 메커니즘</h5>
                <p className="text-gray-300 text-sm">
                  문장의 각 단어가 다른 모든 단어와의 관계를 동시에 파악합니다.
                  "그는 강에서 물고기를 잡았다"에서 "그는"이 누구를 가리키는지 문맥으로 이해합니다.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="font-semibold text-green-400 mb-2">병렬 처리</h5>
                <p className="text-gray-300 text-sm">
                  순차적으로 처리하는 RNN과 달리, 모든 위치를 동시에 처리하여
                  훨씬 빠르고 효율적인 학습이 가능합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-3">4</div>
              <h4 className="text-xl font-bold text-white">추론 과정</h4>
            </div>
            <p className="text-gray-300">
              사용자의 입력을 받으면, 학습된 패턴을 바탕으로 확률적으로 다음에 올
              가장 적절한 단어들을 순차적으로 생성합니다.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500/10 to-red-500/10 rounded-xl p-6 border border-yellow-500/20">
        <h4 className="text-xl font-bold text-white mb-3">🎭 재미있는 사실</h4>
        <p className="text-gray-300 leading-relaxed">
          LLM은 실제로 "이해"하는 것이 아니라, 패턴을 매우 정교하게 모방합니다.
          마치 매우 정교한 "확률적 앵무새"와 같지만, 그 모방 능력이 너무 뛰어나서
          실제 이해와 구별하기 어려울 정도입니다. 이를 <strong className="text-yellow-400">"확률적 패턴 매칭의 예술"</strong>이라고 부르기도 합니다.
        </p>
      </div>
    </div>
  )

  const renderHistory = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">📈 LLM의 발전 역사</h3>
        <p className="text-gray-400 text-lg">70년간의 AI 발전 과정을 한눈에</p>
      </div>

      <div className="space-y-6">
        {timelineData.map((item, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0">
              <div className={`bg-gradient-to-r ${item.color} text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-sm`}>
                {item.year}
              </div>
            </div>
            <div className="flex-grow bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🚀 현재와 미래</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-indigo-400 mb-2">현재 (2024-2025)</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• GPT-4, Claude 3, Gemini 등 경쟁</li>
              <li>• 멀티모달 AI (텍스트+이미지+음성)</li>
              <li>• 전문 도메인 특화 모델 등장</li>
              <li>• AI 에이전트 시대 도래</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-400 mb-2">미래 전망</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• AGI (일반 인공지능) 향한 발전</li>
              <li>• 더 효율적이고 경량화된 모델</li>
              <li>• 개인화된 AI 어시스턴트</li>
              <li>• 과학 연구의 혁신적 도구</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTypes = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🔍 LLM의 주요 유형</h3>
        <p className="text-gray-400 text-lg">목적과 구조에 따른 분류</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-6 border border-blue-500/30">
          <h4 className="text-xl font-bold text-white mb-4">📝 생성형 모델 (Generative)</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-blue-400 mb-2">GPT 시리즈</h5>
              <p className="text-gray-300 text-sm">OpenAI의 대표 모델. 텍스트 생성에 특화</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-400 mb-2">Claude</h5>
              <p className="text-gray-300 text-sm">Anthropic의 안전성에 중점을 둔 모델</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-teal-400 mb-2">LLaMA</h5>
              <p className="text-gray-300 text-sm">Meta의 오픈소스 지향 모델</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-6 border border-green-500/30">
          <h4 className="text-xl font-bold text-white mb-4">🎯 이해형 모델 (Understanding)</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-green-400 mb-2">BERT</h5>
              <p className="text-gray-300 text-sm">Google의 양방향 인코더. 이해 작업에 특화</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-emerald-400 mb-2">RoBERTa</h5>
              <p className="text-gray-300 text-sm">Facebook의 BERT 개선 버전</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-lime-400 mb-2">DeBERTa</h5>
              <p className="text-gray-300 text-sm">Microsoft의 개선된 디코딩 구조</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
          <h4 className="text-xl font-bold text-white mb-4">🔄 멀티모달 모델</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-purple-400 mb-2">GPT-4V</h5>
              <p className="text-gray-300 text-sm">텍스트 + 이미지 이해 및 생성</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-pink-400 mb-2">Gemini</h5>
              <p className="text-gray-300 text-sm">Google의 통합 멀티모달 AI</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-rose-400 mb-2">DALL-E</h5>
              <p className="text-gray-300 text-sm">텍스트에서 이미지 생성 전문</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
          <h4 className="text-xl font-bold text-white mb-4">⚡ 경량화 모델</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-orange-400 mb-2">Phi 시리즈</h5>
              <p className="text-gray-300 text-sm">Microsoft의 소형 고성능 모델</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-red-400 mb-2">Mistral</h5>
              <p className="text-gray-300 text-sm">효율성과 성능의 균형</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-yellow-400 mb-2">Gemma</h5>
              <p className="text-gray-300 text-sm">Google의 오픈 경량 모델</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderApplications = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🚀 LLM 활용 분야</h3>
        <p className="text-gray-400 text-lg">다양한 산업과 업무에서의 실제 적용</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "콘텐츠 창작",
            icon: "✍️",
            color: "from-blue-400 to-purple-500",
            items: ["블로그 글 작성", "마케팅 카피", "소설/시나리오", "소셜미디어 콘텐츠"]
          },
          {
            title: "코딩 & 개발",
            icon: "💻",
            color: "from-green-400 to-blue-500",
            items: ["코드 생성", "버그 수정", "코드 리뷰", "문서화 자동화"]
          },
          {
            title: "교육 & 학습",
            icon: "📚",
            color: "from-purple-400 to-pink-500",
            items: ["개인 튜터", "문제 해결", "학습 계획", "언어 학습"]
          },
          {
            title: "비즈니스",
            icon: "💼",
            color: "from-orange-400 to-red-500",
            items: ["이메일 작성", "보고서 요약", "회의록 정리", "기획서 초안"]
          },
          {
            title: "연구 & 분석",
            icon: "🔬",
            color: "from-cyan-400 to-blue-500",
            items: ["논문 요약", "데이터 분석", "가설 생성", "문헌 검토"]
          },
          {
            title: "창작 & 예술",
            icon: "🎨",
            color: "from-pink-400 to-purple-500",
            items: ["아이디어 브레인스토밍", "스토리텔링", "음악 작사", "게임 시나리오"]
          }
        ].map((category, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all group">
            <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform`}>{category.icon}</div>
            <h4 className="text-xl font-bold text-white mb-4">{category.title}</h4>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2">
                  <span className="text-blue-400 mt-1 text-sm">•</span>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className={`mt-4 h-1 bg-gradient-to-r ${category.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🌟 혁신적인 활용 사례</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-blue-400 mb-2">🏥 의료 분야</h5>
              <p className="text-gray-300 text-sm">의료 기록 분석, 진단 보조, 약물 발견 연구</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-green-400 mb-2">⚖️ 법률 서비스</h5>
              <p className="text-gray-300 text-sm">계약서 검토, 판례 분석, 법률 문서 작성</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-purple-400 mb-2">🌍 언어 서비스</h5>
              <p className="text-gray-300 text-sm">실시간 번역, 다국어 고객 지원, 문화적 맥락 이해</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-orange-400 mb-2">🎮 게임 개발</h5>
              <p className="text-gray-300 text-sm">동적 스토리 생성, NPC 대화, 개인화된 게임 경험</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-pink-400 mb-2">🛒 전자상거래</h5>
              <p className="text-gray-300 text-sm">개인화 추천, 상품 설명 생성, 고객 서비스 챗봇</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-cyan-400 mb-2">📺 미디어</h5>
              <p className="text-gray-300 text-sm">자동 자막 생성, 콘텐츠 요약, 개인화 뉴스</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🧠</span>
              <h1 className="text-2xl font-bold text-white">LLM 기본 개념</h1>
            </div>
            <button
              onClick={() => window.close()}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-slate-800/50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto py-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <span>{section.icon}</span>
                <span className="text-sm font-medium">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="fade-in-up">
          {activeSection === 'definition' && renderDefinition()}
          {activeSection === 'principles' && renderPrinciples()}
          {activeSection === 'history' && renderHistory()}
          {activeSection === 'types' && renderTypes()}
          {activeSection === 'applications' && renderApplications()}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>LLM Hub - 거대 언어 모델 종합 가이드</p>
            <p className="mt-2">🚀 더 많은 콘텐츠는 <a href="/" className="text-blue-400 hover:text-blue-300">메인 페이지</a>에서 확인하세요</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LLMBasics