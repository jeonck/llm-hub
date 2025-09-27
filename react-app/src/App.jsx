import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import LearningPath from './components/LearningPath'
import ResourceCard from './components/ResourceCard'
import Footer from './components/Footer'

function App() {
  const [currentSection, setCurrentSection] = useState('home')

  const resources = [
    {
      title: "LLM 기본 개념",
      description: "거대 언어 모델의 정의, 작동 원리, 발전 역사를 쉽게 이해하기",
      category: "beginner",
      icon: "🧠",
      link: "#basics"
    },
    {
      title: "주요 LLM 모델 비교",
      description: "ChatGPT, Claude, Gemini 등 주요 모델들의 특징과 활용법",
      category: "beginner",
      icon: "⚖️",
      link: "#models"
    },
    {
      title: "프롬프트 엔지니어링",
      description: "효과적인 프롬프트 작성법과 고급 기법들",
      category: "intermediate",
      icon: "✍️",
      link: "#prompting"
    },
    {
      title: "직무별 활용 가이드",
      description: "마케팅, 개발, 기획 등 직무별 실전 활용 사례",
      category: "advanced",
      icon: "💼",
      link: "#career"
    },
    {
      title: "LLM 기반 서비스 개발",
      description: "API 연동부터 RAG까지, 개발자를 위한 가이드",
      category: "advanced",
      icon: "⚙️",
      link: "#development"
    },
    {
      title: "커뮤니티 & Q&A",
      description: "사용자들과 경험을 공유하고 질문하기",
      category: "community",
      icon: "👥",
      link: "#community"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

      <main>
        <Hero />

        <section id="learning-path" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              학습 로드맵
            </h2>
            <LearningPath />
          </div>
        </section>

        <section id="resources" className="py-20 px-4 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              주요 콘텐츠
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <ResourceCard
                  key={index}
                  {...resource}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              주요 특징
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-white mb-4">체계적 학습</h3>
                <p className="text-gray-300">
                  입문자부터 전문가까지 단계별 맞춤형 학습 경로
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-white mb-4">실전 중심</h3>
                <p className="text-gray-300">
                  실무에 바로 적용할 수 있는 구체적인 활용법
                </p>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-white mb-4">커뮤니티</h3>
                <p className="text-gray-300">
                  사용자들과 함께 성장하는 지식 공유 플랫폼
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App