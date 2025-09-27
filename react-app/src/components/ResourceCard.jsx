function ResourceCard({ title, description, category, icon, link, delay = 0 }) {
  const getCategoryColor = (cat) => {
    switch (cat) {
      case 'beginner': return 'from-green-400 to-blue-500'
      case 'intermediate': return 'from-blue-400 to-purple-500'
      case 'advanced': return 'from-purple-400 to-pink-500'
      case 'community': return 'from-orange-400 to-red-500'
      default: return 'from-gray-400 to-gray-600'
    }
  }

  const getCategoryLabel = (cat) => {
    switch (cat) {
      case 'beginner': return '입문'
      case 'intermediate': return '중급'
      case 'advanced': return '고급'
      case 'community': return '커뮤니티'
      default: return '기타'
    }
  }

  return (
    <div
      className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-3xl">{icon}</div>
        <span className={`bg-gradient-to-r ${getCategoryColor(category)} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
          {getCategoryLabel(category)}
        </span>
      </div>

      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>

      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        {description}
      </p>

      <div className="flex justify-between items-center">
        <a
          href={link}
          className="text-blue-400 hover:text-blue-300 text-sm font-semibold flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
        >
          <span>자세히 보기</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default ResourceCard