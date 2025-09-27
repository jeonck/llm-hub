function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: '홈', href: '#home' },
    { label: '학습 로드맵', href: '#learning-path' },
    { label: '주요 콘텐츠', href: '#resources' },
    { label: '주요 특징', href: '#features' }
  ]

  const handleQuickLinkClick = (e, href) => {
    e.preventDefault()

    // 부드러운 스크롤로 해당 섹션으로 이동
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const resources = [
    { label: 'OpenAI ChatGPT', href: 'https://chat.openai.com' },
    { label: 'Anthropic Claude', href: 'https://claude.ai' },
    { label: 'Google Gemini', href: 'https://gemini.google.com' },
    { label: 'Hugging Face', href: 'https://huggingface.co' }
  ]

  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="text-2xl">🧠</div>
              <h3 className="text-xl font-bold text-white">LLM Hub</h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              거대 언어 모델의 세계로 안내하는 종합 가이드 플랫폼입니다.
              입문자부터 전문가까지 모든 레벨의 사용자를 위한 체계적인 학습 자료와
              실전 노하우를 제공합니다.
            </p>
            <div className="text-gray-500 text-xs">
              🚀 Claude Code로 자동 생성됨
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">외부 리소스</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors flex items-center space-x-1"
                  >
                    <span>{resource.label}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} LLM Hub. 모든 권리 보유.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                개인정보처리방침
              </a>
              <a href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                이용약관
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer