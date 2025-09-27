function LearningPath() {
  const paths = [
    {
      level: "입문자",
      color: "from-green-400 to-blue-500",
      items: [
        "LLM 기본 개념 이해",
        "주요 모델 알아보기",
        "기본 프롬프트 작성법",
        "용어 사전 익히기"
      ],
      icon: "🌱"
    },
    {
      level: "중급자",
      color: "from-blue-400 to-purple-500",
      items: [
        "고급 프롬프트 기법",
        "직무별 활용법",
        "효율적인 워크플로우",
        "결과 최적화 방법"
      ],
      icon: "📈"
    },
    {
      level: "고급자",
      color: "from-purple-400 to-pink-500",
      items: [
        "API 연동 및 개발",
        "RAG 시스템 구축",
        "파인튜닝 이해",
        "서비스 기획 및 배포"
      ],
      icon: "🚀"
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {paths.map((path, index) => (
        <div
          key={index}
          className="relative bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${path.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`}></div>

          <div className="relative z-10">
            <div className="text-4xl mb-4 text-center">{path.icon}</div>
            <h3 className="text-xl font-bold text-white text-center mb-6">
              {path.level}
            </h3>

            <ul className="space-y-3">
              {path.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <button className={`bg-gradient-to-r ${path.color} text-white px-6 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-transform duration-200`}>
                학습하기
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LearningPath