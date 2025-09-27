function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              LLM Hub
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            거대 언어 모델 입문부터 활용까지
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            ChatGPT, Claude, Gemini 등 LLM을 처음 접하는 분부터
            실무에 활용하고 싶은 분까지, 체계적인 가이드와 실전 노하우를 제공합니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#learning-path"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              🚀 학습 시작하기
            </a>
            <a
              href="#resources"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              📚 리소스 둘러보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero