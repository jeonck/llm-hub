import { useState } from 'react'

function PromptEngineering() {
  const [activeSection, setActiveSection] = useState('basics')

  const sections = [
    { id: 'basics', title: '프롬프트 기초', icon: '📝' },
    { id: 'techniques', title: '고급 기법', icon: '🎯' },
    { id: 'templates', title: '실용 템플릿', icon: '📋' },
    { id: 'examples', title: '실전 예시', icon: '💡' },
    { id: 'tips', title: '최적화 팁', icon: '⚡' }
  ]

  const promptTemplates = [
    {
      name: "역할 기반 프롬프트",
      template: "당신은 [전문가 역할]입니다. [구체적 상황]에서 [목표]를 달성하기 위해 [요청사항]을 해주세요.",
      example: "당신은 마케팅 전문가입니다. 새로운 SaaS 제품 출시를 앞둔 스타트업에서 SNS 마케팅 전략을 수립하기 위해 타겟 고객 분석과 콘텐츠 계획을 작성해 주세요.",
      category: "basic"
    },
    {
      name: "단계별 사고 (CoT)",
      template: "다음 문제를 단계별로 해결해 주세요:\n1단계: 문제 분석\n2단계: 접근 방법\n3단계: 실행 계획\n4단계: 결과 검증",
      example: "회사의 고객 이탈률이 20% 증가했습니다. 이 문제를 단계별로 해결해 주세요:\n1단계: 이탈률 증가 원인 분석\n2단계: 데이터 수집 방법\n3단계: 개선 전략 수립\n4단계: 성과 측정 방안",
      category: "advanced"
    },
    {
      name: "Few-Shot Learning",
      template: "다음 예시들을 참고하여 비슷한 형식으로 답변해 주세요:\n\n예시 1: [예시 입력] → [예시 출력]\n예시 2: [예시 입력] → [예시 출력]\n\n이제 다음에 대해 답변해 주세요: [실제 질문]",
      example: "다음 예시들을 참고하여 제품 설명을 작성해 주세요:\n\n예시 1: 무선 이어폰 → \"크리스털 사운드와 하루 종일 편안함을 선사하는 프리미엄 무선 이어폰\"\n예시 2: 스마트워치 → \"건강과 연결성을 손목에서 관리하는 차세대 스마트워치\"\n\n이제 다음 제품에 대해 설명해 주세요: 휴대용 블루투스 스피커",
      category: "intermediate"
    }
  ]

  const advancedTechniques = [
    {
      name: "Chain-of-Thought (CoT)",
      description: "복잡한 문제를 단계별로 사고하도록 유도",
      icon: "🔗",
      color: "from-blue-400 to-purple-500",
      steps: [
        "문제를 명확히 정의",
        "해결 과정을 단계별로 분해",
        "각 단계의 논리적 연결 확인",
        "최종 결론 도출"
      ]
    },
    {
      name: "Few-Shot Prompting",
      description: "몇 가지 예시를 제공하여 패턴 학습",
      icon: "🎯",
      color: "from-green-400 to-blue-500",
      steps: [
        "작업에 적합한 예시 선별",
        "다양한 케이스 포함",
        "일관된 형식 유지",
        "새로운 입력에 적용"
      ]
    },
    {
      name: "Role-Playing",
      description: "특정 역할이나 관점에서 답변하도록 설정",
      icon: "🎭",
      color: "from-purple-400 to-pink-500",
      steps: [
        "적절한 전문가 역할 설정",
        "상황과 맥락 제공",
        "역할의 특성 강조",
        "전문성 활용 유도"
      ]
    },
    {
      name: "Tree of Thoughts",
      description: "여러 사고 경로를 탐색하고 최적해 선택",
      icon: "🌳",
      color: "from-orange-400 to-red-500",
      steps: [
        "다양한 접근법 생성",
        "각 경로 평가",
        "가장 유망한 경로 선택",
        "결과 통합 및 검증"
      ]
    }
  ]

  const practicalExamples = [
    {
      title: "콘텐츠 제작",
      prompt: "블로그 포스트 작성을 위한 프롬프트",
      before: "AI에 대한 글을 써줘",
      after: "당신은 기술 전문 작가입니다. 비개발자도 이해할 수 있도록 'AI가 일상생활에 미치는 영향'에 대한 2000자 분량의 블로그 포스트를 작성해 주세요. 구체적인 사례 3가지와 향후 전망을 포함하고, 친근하면서도 신뢰할 수 있는 톤을 사용해 주세요.",
      improvement: "240% 더 구체적이고 목적에 맞는 결과"
    },
    {
      title: "문제 해결",
      prompt: "복잡한 비즈니스 문제 분석",
      before: "우리 회사 매출이 줄었어, 어떻게 해야 할까?",
      after: "당신은 경영 컨설턴트입니다. 다음 상황을 분석해 주세요:\n\n회사: 중소 제조업체\n문제: 최근 3개월간 매출 15% 감소\n배경: 경쟁사 신제품 출시, 원자재 가격 상승\n\n다음 단계로 분석해 주세요:\n1. 매출 감소의 근본 원인 3가지\n2. 각 원인별 대응 전략\n3. 우선순위와 실행 계획\n4. 성과 측정 지표",
      improvement: "체계적이고 실행 가능한 솔루션 제공"
    },
    {
      title: "창작 활동",
      prompt: "창의적 아이디어 발상",
      before: "새로운 앱 아이디어 좀 줘",
      after: "당신은 혁신적인 제품 기획자입니다. 다음 조건에 맞는 모바일 앱 아이디어를 3가지 제안해 주세요:\n\n타겟: 20-30대 직장인\n문제: 바쁜 일상 속 자기계발 시간 부족\n제약: 개발 예산 1억원, 6개월 개발 기간\n\n각 아이디어는 다음 형식으로:\n- 앱 이름 및 핵심 기능\n- 차별화 포인트\n- 수익 모델\n- MVP 범위",
      improvement: "현실적이고 구체적인 비즈니스 아이디어"
    }
  ]

  const renderBasics = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">📝 프롬프트 엔지니어링 기초</h3>
        <p className="text-gray-400 text-lg">효과적인 프롬프트 작성의 핵심 원칙</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
          <h4 className="text-xl font-bold text-white mb-4">🎯 좋은 프롬프트의 5가지 원칙</h4>
          <div className="space-y-4">
            {[
              { title: "명확성 (Clarity)", desc: "모호한 표현보다 구체적이고 명확한 지시", color: "blue" },
              { title: "맥락 (Context)", desc: "상황, 배경, 목적을 충분히 제공", color: "green" },
              { title: "구체성 (Specificity)", desc: "원하는 결과의 형식, 길이, 스타일 명시", color: "purple" },
              { title: "역할 (Role)", desc: "AI에게 적절한 전문가 역할 부여", color: "orange" },
              { title: "제약사항 (Constraints)", desc: "하지 말아야 할 것들을 명확히 지정", color: "red" }
            ].map((principle, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <h5 className={`font-semibold text-${principle.color}-400 mb-2`}>{principle.title}</h5>
                <p className="text-gray-300 text-sm">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/30">
          <h4 className="text-xl font-bold text-white mb-4">📐 프롬프트 구조 템플릿</h4>
          <div className="bg-slate-900/50 rounded-lg p-4 font-mono text-sm">
            <div className="space-y-3 text-gray-300">
              <div><span className="text-blue-400">[역할]</span> 당신은 ~전문가입니다.</div>
              <div><span className="text-green-400">[맥락]</span> 다음 상황에서...</div>
              <div><span className="text-purple-400">[작업]</span> ~을/를 해주세요.</div>
              <div><span className="text-orange-400">[형식]</span> 결과는 ~형태로...</div>
              <div><span className="text-red-400">[제약]</span> 단, ~는 포함하지 마세요.</div>
            </div>
          </div>
          <div className="mt-4">
            <h5 className="font-semibold text-green-400 mb-2">실제 적용 예시</h5>
            <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-gray-300">
              <span className="text-blue-400">[역할]</span> 당신은 마케팅 전략 전문가입니다.<br/>
              <span className="text-green-400">[맥락]</span> 새로운 건강식품 브랜드 런칭을 앞두고 있습니다.<br/>
              <span className="text-purple-400">[작업]</span> SNS 마케팅 전략을 수립해 주세요.<br/>
              <span className="text-orange-400">[형식]</span> 플랫폼별로 구분하여 표 형태로 정리해 주세요.<br/>
              <span className="text-red-400">[제약]</span> 과장된 효과 언급은 피해 주세요.
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-xl p-6 border border-yellow-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🚫 피해야 할 프롬프트 실수</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h5 className="font-semibold text-red-400">❌ 나쁜 예시들</h5>
            <div className="space-y-2 text-sm">
              <div className="bg-red-900/20 rounded p-3 text-gray-300">"뭔가 좋은 아이디어 줘"</div>
              <div className="bg-red-900/20 rounded p-3 text-gray-300">"이거 어떻게 생각해?"</div>
              <div className="bg-red-900/20 rounded p-3 text-gray-300">"도움이 되는 조언 해줘"</div>
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="font-semibold text-green-400">✅ 개선된 예시들</h5>
            <div className="space-y-2 text-sm">
              <div className="bg-green-900/20 rounded p-3 text-gray-300">"온라인 쇼핑몰 매출 증대를 위한 구체적인 마케팅 전략 3가지 제안해 주세요"</div>
              <div className="bg-green-900/20 rounded p-3 text-gray-300">"다음 제품 기획서의 타당성을 시장성, 기술성, 수익성 관점에서 분석해 주세요"</div>
              <div className="bg-green-900/20 rounded p-3 text-gray-300">"신입 개발자의 스킬 향상을 위한 6개월 학습 로드맵을 단계별로 작성해 주세요"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTechniques = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🎯 고급 프롬프트 기법</h3>
        <p className="text-gray-400 text-lg">전문가 수준의 프롬프트 엔지니어링 기술</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {advancedTechniques.map((technique, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all group">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-4">{technique.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{technique.name}</h4>
                <p className="text-gray-400 text-sm">{technique.description}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="font-semibold text-gray-300">적용 단계:</h5>
              {technique.steps.map((step, stepIndex) => (
                <div key={stepIndex} className="flex items-start space-x-3">
                  <div className={`bg-gradient-to-r ${technique.color} text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5`}>
                    {stepIndex + 1}
                  </div>
                  <span className="text-gray-300 text-sm">{step}</span>
                </div>
              ))}
            </div>

            <div className={`mt-4 h-1 bg-gradient-to-r ${technique.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}></div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🧠 메타 프롬프팅 (Meta-Prompting)</h4>
        <p className="text-gray-300 mb-4">AI에게 더 나은 프롬프트를 작성하도록 요청하는 고급 기법</p>

        <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
          <h5 className="font-semibold text-indigo-400 mb-2">메타 프롬프트 예시</h5>
          <div className="text-gray-300 text-sm font-mono leading-relaxed">
            "다음 작업을 위한 최적의 프롬프트를 작성해 주세요:<br/>
            <br/>
            작업: [구체적인 작업 설명]<br/>
            대상: [타겟 오디언스]<br/>
            목표: [달성하고자 하는 결과]<br/>
            제약사항: [고려해야 할 제한사항]<br/>
            <br/>
            프롬프트는 역할, 맥락, 구체적 지시사항, 출력 형식을 모두 포함해야 합니다."
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h6 className="font-semibold text-purple-400 mb-2">장점</h6>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 프롬프트 최적화 자동화</li>
              <li>• 다양한 관점 확보</li>
              <li>• 시행착오 시간 단축</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h6 className="font-semibold text-indigo-400 mb-2">활용 팁</h6>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• 명확한 작업 정의 필수</li>
              <li>• 여러 버전 생성 후 테스트</li>
              <li>• 점진적 개선 과정 반복</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTemplates = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">📋 실용 프롬프트 템플릿</h3>
        <p className="text-gray-400 text-lg">바로 사용할 수 있는 검증된 템플릿 모음</p>
      </div>

      <div className="space-y-6">
        {promptTemplates.map((template, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-xl font-bold text-white">{template.name}</h4>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                template.category === 'basic' ? 'bg-green-500/20 text-green-400' :
                template.category === 'intermediate' ? 'bg-blue-500/20 text-blue-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                {template.category === 'basic' ? '기초' : template.category === 'intermediate' ? '중급' : '고급'}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-blue-400 mb-3">📝 템플릿 구조</h5>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <pre className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap">{template.template}</pre>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-green-400 mb-3">💡 실제 적용 예시</h5>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-gray-300 text-sm leading-relaxed">{template.example}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                템플릿 복사
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🔧 업무별 특화 템플릿</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "마케팅", icon: "📢", templates: ["타겟 분석", "캠페인 기획", "카피 작성", "성과 분석"] },
            { title: "개발", icon: "💻", templates: ["코드 리뷰", "아키텍처 설계", "버그 분석", "문서화"] },
            { title: "기획", icon: "📊", templates: ["요구사항 분석", "프로젝트 계획", "위험 관리", "품질 평가"] }
          ].map((category, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <span className="text-2xl mr-2">{category.icon}</span>
                <h5 className="font-semibold text-white">{category.title}</h5>
              </div>
              <ul className="space-y-1">
                {category.templates.map((template, tIndex) => (
                  <li key={tIndex} className="text-gray-300 text-sm flex items-center">
                    <span className="text-cyan-400 mr-2">•</span>
                    {template}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderExamples = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">💡 실전 프롬프트 예시</h3>
        <p className="text-gray-400 text-lg">Before & After로 보는 극적인 개선 사례</p>
      </div>

      <div className="space-y-8">
        {practicalExamples.map((example, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-6">
              <h4 className="text-xl font-bold text-white mr-4">{example.title}</h4>
              <span className="text-sm text-gray-400">{example.prompt}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h5 className="font-semibold text-red-400 mb-2 flex items-center">
                    <span className="mr-2">❌</span>
                    개선 전 (비효율적)
                  </h5>
                  <div className="bg-slate-900/50 rounded p-3">
                    <p className="text-gray-300 text-sm italic">"{example.before}"</p>
                  </div>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4">
                  <h5 className="font-semibold text-green-400 mb-2 flex items-center">
                    <span className="mr-2">✅</span>
                    개선 후 (최적화)
                  </h5>
                  <div className="bg-slate-900/50 rounded p-3">
                    <p className="text-gray-300 text-sm">{example.after}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6 border border-blue-500/30">
                  <h5 className="font-semibold text-blue-400 mb-3">📈 개선 효과</h5>
                  <p className="text-white text-lg font-bold mb-2">{example.improvement}</p>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+</span>
                      구체적인 역할과 맥락 제공
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+</span>
                      명확한 출력 형식 지정
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+</span>
                      단계별 사고 과정 유도
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-400 mr-2">+</span>
                      실행 가능한 결과 도출
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🎯 산업별 활용 사례</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { industry: "교육", icon: "🎓", use: "개인 맞춤 학습 계획, 교안 작성, 평가 문항 생성" },
            { industry: "의료", icon: "🏥", use: "증상 분석 보조, 환자 설명 자료, 의학 논문 요약" },
            { industry: "금융", icon: "💰", use: "리스크 분석, 투자 전략 수립, 고객 상담 스크립트" },
            { industry: "법률", icon: "⚖️", use: "계약서 검토, 판례 분석, 법률 문서 초안" },
            { industry: "미디어", icon: "📺", use: "콘텐츠 기획, 기사 작성, 인터뷰 질문 생성" },
            { industry: "스타트업", icon: "🚀", use: "사업 계획서, 투자 제안서, 시장 분석" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2">{item.icon}</span>
                <h5 className="font-semibold text-white">{item.industry}</h5>
              </div>
              <p className="text-gray-300 text-sm">{item.use}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTips = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">⚡ 프롬프트 최적화 팁</h3>
        <p className="text-gray-400 text-lg">전문가들이 사용하는 실전 노하우</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl p-6 border border-emerald-500/30">
            <h4 className="text-xl font-bold text-white mb-4">🎯 정확도 높이기</h4>
            <div className="space-y-3">
              {[
                { tip: "구체적인 숫자 명시", desc: "'적당히' → '3가지' 또는 '500자 이내'" },
                { tip: "예시 포함하기", desc: "원하는 결과의 샘플을 함께 제공" },
                { tip: "단계별 분해", desc: "복잡한 작업을 작은 단위로 나누기" },
                { tip: "검증 요청", desc: "'결과를 다시 확인해 주세요' 추가" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <h5 className="font-semibold text-emerald-400 text-sm">{item.tip}</h5>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6 border border-blue-500/30">
            <h4 className="text-xl font-bold text-white mb-4">💨 속도 향상</h4>
            <div className="space-y-3">
              {[
                { tip: "템플릿 활용", desc: "자주 사용하는 패턴을 미리 저장" },
                { tip: "반복 최소화", desc: "한 번에 여러 결과 요청하기" },
                { tip: "우선순위 명시", desc: "'가장 중요한 3가지부터' 지정" },
                { tip: "간결한 표현", desc: "불필요한 단어 제거하여 토큰 절약" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <h5 className="font-semibold text-blue-400 text-sm">{item.tip}</h5>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30">
            <h4 className="text-xl font-bold text-white mb-4">🎨 창의성 극대화</h4>
            <div className="space-y-3">
              {[
                { tip: "브레인스토밍 유도", desc: "'10가지 다양한 아이디어' 요청" },
                { tip: "관점 변경", desc: "'반대 입장에서', '고객 관점에서' 접근" },
                { tip: "조합과 변형", desc: "서로 다른 개념의 융합 시도" },
                { tip: "제약 조건 활용", desc: "창의적 제한을 통한 혁신 유도" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <h5 className="font-semibold text-purple-400 text-sm">{item.tip}</h5>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
            <h4 className="text-xl font-bold text-white mb-4">🛡️ 오류 방지</h4>
            <div className="space-y-3">
              {[
                { tip: "할루시네이션 대비", desc: "'확실하지 않으면 모른다고 하세요' 명시" },
                { tip: "출처 요구", desc: "정보의 근거나 참고 자료 요청" },
                { tip: "범위 제한", desc: "답변할 수 있는 영역을 명확히 한정" },
                { tip: "다중 검증", desc: "같은 질문을 다른 방식으로 재확인" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-3">
                  <h5 className="font-semibold text-orange-400 text-sm">{item.tip}</h5>
                  <p className="text-gray-300 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-xl p-6 border border-gray-500/20">
        <h4 className="text-xl font-bold text-white mb-4">📊 프롬프트 성능 측정</h4>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h5 className="font-semibold text-white mb-1">정확성</h5>
            <p className="text-gray-400 text-xs">원하는 결과와 얼마나 일치하는가?</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">⚡</div>
            <h5 className="font-semibold text-white mb-1">효율성</h5>
            <p className="text-gray-400 text-xs">최소한의 시도로 목표 달성</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">🔄</div>
            <h5 className="font-semibold text-white mb-1">일관성</h5>
            <p className="text-gray-400 text-xs">반복 실행 시 안정적 결과</p>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-2xl mb-2">💡</div>
            <h5 className="font-semibold text-white mb-1">창의성</h5>
            <p className="text-gray-400 text-xs">예상을 뛰어넘는 혁신적 아이디어</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🚀 고급자를 위한 팁</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-indigo-400 mb-3">프롬프트 체이닝</h5>
            <p className="text-gray-300 text-sm mb-3">
              복잡한 작업을 여러 단계로 나누어 이전 결과를 다음 프롬프트에 활용
            </p>
            <div className="bg-slate-900/50 rounded p-3 text-xs text-gray-400">
              1단계: 주제 분석 → 2단계: 구조 설계 → 3단계: 내용 작성 → 4단계: 검토 및 개선
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-purple-400 mb-3">동적 프롬프트</h5>
            <p className="text-gray-300 text-sm mb-3">
              사용자 입력이나 이전 결과에 따라 프롬프트를 자동으로 조정
            </p>
            <div className="bg-slate-900/50 rounded p-3 text-xs text-gray-400">
              IF (전문성 = 초급) THEN 기초 설명 포함 ELSE 고급 내용 제공
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
              <span className="text-2xl">✍️</span>
              <h1 className="text-2xl font-bold text-white">프롬프트 엔지니어링</h1>
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
          {activeSection === 'basics' && renderBasics()}
          {activeSection === 'techniques' && renderTechniques()}
          {activeSection === 'templates' && renderTemplates()}
          {activeSection === 'examples' && renderExamples()}
          {activeSection === 'tips' && renderTips()}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>LLM Hub - 프롬프트 엔지니어링 완전 가이드</p>
            <p className="mt-2">🚀 더 많은 콘텐츠는 <a href="#/" className="text-blue-400 hover:text-blue-300">메인 페이지</a>에서 확인하세요</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptEngineering