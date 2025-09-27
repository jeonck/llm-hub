import { useState } from 'react'

function LLMDevelopment() {
  const [activeSection, setActiveSection] = useState('api-basics')

  const sections = [
    { id: 'api-basics', title: 'API 기초', icon: '🔌' },
    { id: 'architecture', title: '시스템 아키텍처', icon: '🏗️' },
    { id: 'rag', title: 'RAG 시스템', icon: '🔍' },
    { id: 'frameworks', title: '프레임워크', icon: '⚙️' },
    { id: 'production', title: '프로덕션 배포', icon: '🚀' }
  ]

  const apiProviders = [
    {
      name: "OpenAI",
      logo: "🤖",
      models: ["GPT-4", "GPT-3.5-turbo", "Embedding"],
      strengths: ["뛰어난 성능", "풍부한 문서", "안정적 서비스"],
      pricing: "$0.01-0.06 / 1K tokens",
      useCase: "범용 텍스트 생성, 대화형 AI"
    },
    {
      name: "Anthropic",
      logo: "🎭",
      models: ["Claude-3", "Claude-2", "Claude-instant"],
      strengths: ["안전성 중심", "긴 컨텍스트", "정확한 추론"],
      pricing: "$0.008-0.024 / 1K tokens",
      useCase: "복잡한 분석, 창작, 안전한 AI"
    },
    {
      name: "Google",
      logo: "🔍",
      models: ["Gemini Pro", "PaLM", "Vertex AI"],
      strengths: ["다국어 지원", "무료 할당량", "GCP 통합"],
      pricing: "무료 ~ $0.0025 / 1K tokens",
      useCase: "다국어 서비스, 검색 통합"
    },
    {
      name: "Hugging Face",
      logo: "🤗",
      models: ["오픈소스 모델", "Transformers", "Inference API"],
      strengths: ["오픈소스", "커스터마이징", "모델 다양성"],
      pricing: "무료 ~ 종량제",
      useCase: "연구, 커스텀 모델, 실험"
    }
  ]

  const codeExamples = {
    openai: `// OpenAI API 사용 예제
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function chatCompletion(message) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "user", content: message }],
    model: "gpt-3.5-turbo",
    max_tokens: 1000,
    temperature: 0.7,
  });

  return completion.choices[0].message.content;
}

// 스트리밍 응답
async function streamResponse(message) {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
    stream: true,
  });

  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}`,

    claude: `// Anthropic Claude API 사용 예제
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function chatWithClaude(message) {
  const msg = await anthropic.messages.create({
    model: "claude-3-sonnet-20240229",
    max_tokens: 1000,
    temperature: 0,
    system: "당신은 도움이 되는 AI 어시스턴트입니다.",
    messages: [
      {
        "role": "user",
        "content": message
      }
    ]
  });

  return msg.content[0].text;
}

// 이미지 분석
async function analyzeImage(imageBase64) {
  const response = await anthropic.messages.create({
    model: "claude-3-vision-20240229",
    max_tokens: 1024,
    messages: [{
      role: "user",
      content: [
        {
          type: "image",
          source: {
            type: "base64",
            media_type: "image/jpeg",
            data: imageBase64,
          },
        },
        {
          type: "text",
          text: "이 이미지에서 무엇을 볼 수 있나요?"
        }
      ],
    }],
  });

  return response.content[0].text;
}`,

    embedding: `// 임베딩 & 벡터 검색 예제
import OpenAI from 'openai';
import { ChromaClient } from 'chromadb';

const openai = new OpenAI();
const chroma = new ChromaClient();

// 텍스트를 임베딩으로 변환
async function getEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });

  return response.data[0].embedding;
}

// 문서 저장 (RAG 시스템)
async function storeDocument(id, text, metadata = {}) {
  const embedding = await getEmbedding(text);

  const collection = await chroma.getOrCreateCollection({
    name: "documents"
  });

  await collection.add({
    ids: [id],
    embeddings: [embedding],
    documents: [text],
    metadatas: [metadata]
  });
}

// 유사 문서 검색
async function searchSimilar(query, topK = 5) {
  const queryEmbedding = await getEmbedding(query);

  const collection = await chroma.getCollection({
    name: "documents"
  });

  const results = await collection.query({
    queryEmbeddings: [queryEmbedding],
    nResults: topK
  });

  return results;
}`
  }

  const architecturePatterns = [
    {
      name: "간단한 API 프록시",
      description: "LLM API를 래핑하여 사용자 친화적 인터페이스 제공",
      complexity: "초급",
      icon: "🔄",
      components: ["Frontend", "Backend API", "LLM Provider"],
      useCase: "프로토타입, 간단한 챗봇",
      code: `// Express.js API 프록시 예제
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      max_tokens: 1000
    });

    res.json({
      reply: response.choices[0].message.content
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});`
    },
    {
      name: "RAG 시스템",
      description: "외부 지식 베이스와 LLM을 결합한 정보 검색 시스템",
      complexity: "중급",
      icon: "🔍",
      components: ["Vector DB", "Embedding Model", "LLM", "Document Store"],
      useCase: "문서 기반 Q&A, 지식 베이스",
      code: `// RAG 파이프라인 예제
async function ragQuery(question) {
  // 1. 질문을 임베딩으로 변환
  const questionEmbedding = await getEmbedding(question);

  // 2. 관련 문서 검색
  const relevantDocs = await vectorDB.search(
    questionEmbedding,
    { limit: 5 }
  );

  // 3. 컨텍스트와 함께 LLM에 질문
  const context = relevantDocs.map(doc => doc.content).join('\\n');
  const prompt = \`컨텍스트: \${context}\\n\\n질문: \${question}\`;

  const answer = await llm.generate(prompt);
  return answer;
}`
    },
    {
      name: "에이전트 시스템",
      description: "도구 사용 능력을 가진 자율적 AI 에이전트",
      complexity: "고급",
      icon: "🤖",
      components: ["Agent Core", "Tool Registry", "Memory", "Planning"],
      useCase: "복잡한 업무 자동화, 멀티모달 작업",
      code: `// LangChain 에이전트 예제
import { ChatOpenAI } from "langchain/chat_models/openai";
import { AgentExecutor, createOpenAIFunctionsAgent } from "langchain/agents";
import { DynamicTool } from "langchain/tools";

const tools = [
  new DynamicTool({
    name: "calculator",
    description: "수학 계산을 수행합니다",
    func: async (input) => {
      return eval(input).toString();
    },
  }),
];

const agent = await createOpenAIFunctionsAgent({
  llm: new ChatOpenAI({ temperature: 0 }),
  tools,
  prompt: agentPrompt,
});

const agentExecutor = new AgentExecutor({
  agent,
  tools,
});`
    }
  ]

  const ragComponents = [
    {
      name: "문서 로더",
      description: "다양한 형식의 문서를 처리하고 텍스트 추출",
      icon: "📄",
      examples: ["PDF", "DOCX", "HTML", "Markdown", "CSV"],
      code: `// LangChain Document Loaders
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { DocxLoader } from "langchain/document_loaders/fs/docx";
import { WebBaseLoader } from "langchain/document_loaders/web/web_base";

// PDF 로딩
const pdfLoader = new PDFLoader("path/to/document.pdf");
const pdfDocs = await pdfLoader.load();

// 웹 페이지 로딩
const webLoader = new WebBaseLoader("https://example.com");
const webDocs = await webLoader.load();`
    },
    {
      name: "텍스트 분할기",
      description: "긴 문서를 의미 있는 청크로 분할",
      icon: "✂️",
      examples: ["토큰 기반", "문장 기반", "의미 기반", "재귀적 분할"],
      code: `// 텍스트 분할 예제
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 1000,
  chunkOverlap: 200,
  separators: ['\\n\\n', '\\n', ' ', '']
});

const chunks = await splitter.splitDocuments(documents);`
    },
    {
      name: "벡터 스토어",
      description: "임베딩을 저장하고 유사성 검색 수행",
      icon: "🗄️",
      examples: ["Chroma", "Pinecone", "Weaviate", "FAISS"],
      code: `// Chroma 벡터 스토어 예제
import { Chroma } from "langchain/vectorstores/chroma";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";

const vectorStore = await Chroma.fromDocuments(
  chunks,
  new OpenAIEmbeddings(),
  {
    collectionName: "knowledge-base",
    url: "http://localhost:8000",
  }
);

// 유사성 검색
const results = await vectorStore.similaritySearch(query, 4);`
    },
    {
      name: "리트리버",
      description: "질문에 가장 관련성 높은 문서 조각을 검색",
      icon: "🎯",
      examples: ["유사성", "MMR", "압축", "앙상블"],
      code: `// 다양한 리트리버 설정
// 기본 유사성 검색
const basicRetriever = vectorStore.asRetriever();

// MMR (Maximum Marginal Relevance)
const mmrRetriever = vectorStore.asRetriever({
  searchType: "mmr",
  searchKwargs: { fetchK: 20, lambda: 0.5 }
});

// 압축 리트리버
import { ContextualCompressionRetriever } from "langchain/retrievers/contextual_compression";
import { LLMChainExtractor } from "langchain/retrievers/document_compressors/llm_chain_extract";

const compressor = LLMChainExtractor.fromLLM(llm);
const compressionRetriever = new ContextualCompressionRetriever({
  baseCompressor: compressor,
  baseRetriever: basicRetriever,
});`
    }
  ]

  const frameworkComparison = [
    {
      name: "LangChain",
      logo: "🦜",
      language: "Python / JavaScript",
      strengths: ["풍부한 생태계", "다양한 통합", "활발한 커뮤니티"],
      weaknesses: ["복잡성", "성능 오버헤드", "빠른 변화"],
      bestFor: "프로토타이핑, 복잡한 워크플로우",
      code: `// LangChain 기본 체인
import { ChatOpenAI } from "langchain/chat_models/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

const model = new ChatOpenAI({ temperature: 0.9 });
const prompt = PromptTemplate.fromTemplate(
  "다음 제품에 대한 회사명을 제안해주세요: {product}"
);

const chain = new LLMChain({ llm: model, prompt: prompt });
const result = await chain.call({ product: "컬러풀한 양말" });`
    },
    {
      name: "LlamaIndex",
      logo: "🦙",
      language: "Python / TypeScript",
      strengths: ["RAG 특화", "단순한 API", "빠른 성능"],
      weaknesses: ["제한적 기능", "작은 생태계", "문서 부족"],
      bestFor: "문서 검색, 질의응답 시스템",
      code: `// LlamaIndex RAG 예제
import { VectorStoreIndex, SimpleDirectoryReader } from "llamaindex";

// 문서 로드
const reader = new SimpleDirectoryReader();
const documents = await reader.loadData("./data");

// 인덱스 생성
const index = await VectorStoreIndex.fromDocuments(documents);

// 쿼리 엔진 생성
const queryEngine = index.asQueryEngine();
const response = await queryEngine.query("문서의 주요 내용은?");`
    },
    {
      name: "Haystack",
      logo: "🌾",
      language: "Python",
      strengths: ["프로덕션 준비", "확장성", "모듈러 설계"],
      weaknesses: ["학습 곡선", "Python 전용", "설정 복잡"],
      bestFor: "대규모 검색 시스템, 엔터프라이즈",
      code: `# Haystack 파이프라인
from haystack import Pipeline
from haystack.nodes import EmbeddingRetriever, PromptNode

# 파이프라인 구성
pipeline = Pipeline()
pipeline.add_node(
    component=EmbeddingRetriever(document_store=document_store),
    name="Retriever",
    inputs=["Query"]
)
pipeline.add_node(
    component=PromptNode(model_name_or_path="gpt-3.5-turbo"),
    name="PromptNode",
    inputs=["Retriever"]
)

# 실행
result = pipeline.run(query="질문 내용")`
    }
  ]

  const renderApiBasics = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🔌 LLM API 기초</h3>
        <p className="text-gray-400 text-lg">주요 API 제공업체와 기본 사용법</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {apiProviders.map((provider, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">{provider.logo}</div>
              <div>
                <h4 className="text-xl font-bold text-white">{provider.name}</h4>
                <p className="text-gray-400 text-sm">{provider.pricing}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-400 mb-2">주요 모델</h5>
                <div className="flex flex-wrap gap-2">
                  {provider.models.map((model, mIndex) => (
                    <span key={mIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {model}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-green-400 mb-2">강점</h5>
                <ul className="space-y-1">
                  {provider.strengths.map((strength, sIndex) => (
                    <li key={sIndex} className="text-gray-300 text-sm flex items-center">
                      <span className="text-green-400 mr-2">•</span>
                      {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-orange-400 mb-2">적합한 용도</h5>
                <p className="text-gray-300 text-sm">{provider.useCase}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🔑 API 키 관리 모범 사례</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-indigo-400 mb-3">보안</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 환경 변수로 API 키 저장</li>
              <li>• .env 파일을 .gitignore에 추가</li>
              <li>• 프로덕션에서는 비밀 관리 서비스 사용</li>
              <li>• 정기적으로 키 교체</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-purple-400 mb-3">사용량 관리</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• API 호출 제한 설정</li>
              <li>• 사용량 모니터링 구현</li>
              <li>• 캐싱으로 불필요한 호출 방지</li>
              <li>• 예산 알림 설정</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h4 className="text-xl font-bold text-white">💻 코드 예제</h4>

        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
            <h5 className="text-sm font-semibold text-gray-300">OpenAI API</h5>
          </div>
          <div className="p-4">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{codeExamples.openai}</code>
            </pre>
          </div>
        </div>

        <div className="bg-slate-900 rounded-lg overflow-hidden">
          <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
            <h5 className="text-sm font-semibold text-gray-300">Anthropic Claude</h5>
          </div>
          <div className="p-4">
            <pre className="text-gray-300 text-sm overflow-x-auto">
              <code>{codeExamples.claude}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )

  const renderArchitecture = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🏗️ 시스템 아키텍처</h3>
        <p className="text-gray-400 text-lg">확장 가능한 LLM 애플리케이션 설계 패턴</p>
      </div>

      <div className="space-y-8">
        {architecturePatterns.map((pattern, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{pattern.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-white">{pattern.name}</h4>
                  <p className="text-gray-400">{pattern.description}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                pattern.complexity === '초급' ? 'bg-green-500/20 text-green-400' :
                pattern.complexity === '중급' ? 'bg-blue-500/20 text-blue-400' :
                'bg-purple-500/20 text-purple-400'
              }`}>
                {pattern.complexity}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-blue-400 mb-2">주요 컴포넌트</h5>
                  <div className="flex flex-wrap gap-2">
                    {pattern.components.map((component, cIndex) => (
                      <span key={cIndex} className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-sm">
                        {component}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">적용 사례</h5>
                  <p className="text-gray-300 text-sm">{pattern.useCase}</p>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-orange-400 mb-2">코드 예제</h5>
                <div className="bg-slate-900 rounded-lg p-3">
                  <pre className="text-gray-300 text-xs overflow-x-auto">
                    <code>{pattern.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🔧 아키텍처 고려사항</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-cyan-400 mb-2">성능</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 응답 시간 최적화</li>
              <li>• 스트리밍 응답 구현</li>
              <li>• 캐싱 전략</li>
              <li>• 로드 밸런싱</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-blue-400 mb-2">확장성</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 마이크로서비스 구조</li>
              <li>• 큐 시스템 활용</li>
              <li>• 수평적 확장</li>
              <li>• 상태 비저장 설계</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-purple-400 mb-2">안정성</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 에러 핸들링</li>
              <li>• 재시도 로직</li>
              <li>• 폴백 메커니즘</li>
              <li>• 모니터링 & 알람</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderRAG = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🔍 RAG 시스템 구축</h3>
        <p className="text-gray-400 text-lg">Retrieval-Augmented Generation 완전 가이드</p>
      </div>

      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-blue-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🎯 RAG란 무엇인가?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-300 mb-4">
              RAG(Retrieval-Augmented Generation)는 외부 지식 소스에서 관련 정보를 검색하여
              LLM의 응답을 개선하는 기술입니다.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300 text-sm">실시간 정보 접근</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300 text-sm">도메인 특화 지식</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300 text-sm">할루시네이션 감소</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span className="text-gray-300 text-sm">출처 추적 가능</span>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h5 className="font-semibold text-blue-400 mb-2">RAG 처리 과정</h5>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">1</div>
                <span>사용자 질문 입력</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">2</div>
                <span>임베딩으로 변환</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">3</div>
                <span>관련 문서 검색</span>
              </div>
              <div className="flex items-center">
                <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">4</div>
                <span>컨텍스트와 함께 LLM 호출</span>
              </div>
              <div className="flex items-center">
                <div className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">5</div>
                <span>향상된 답변 생성</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ragComponents.map((component, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">{component.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-white">{component.name}</h4>
                <p className="text-gray-400 text-sm">{component.description}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-blue-400 mb-2">지원 형식/방법</h5>
                <div className="flex flex-wrap gap-2">
                  {component.examples.map((example, eIndex) => (
                    <span key={eIndex} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {example}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-green-400 mb-2">코드 예제</h5>
                <div className="bg-slate-900 rounded-lg p-3">
                  <pre className="text-gray-300 text-xs overflow-x-auto">
                    <code>{component.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🚀 RAG 성능 최적화</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-green-400 mb-2">청킹 전략</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 적절한 청크 크기 (500-1500 토큰)</li>
                <li>• 의미 단위로 분할</li>
                <li>• 청크 간 중복(overlap) 설정</li>
                <li>• 메타데이터 보존</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-blue-400 mb-2">검색 개선</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 하이브리드 검색 (키워드 + 벡터)</li>
                <li>• 쿼리 확장/재작성</li>
                <li>• 다중 검색 전략</li>
                <li>• 결과 재랭킹</li>
              </ul>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-purple-400 mb-2">컨텍스트 관리</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 관련성 점수 임계값 설정</li>
                <li>• 컨텍스트 압축</li>
                <li>• 중복 제거</li>
                <li>• 토큰 한도 관리</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-orange-400 mb-2">평가 지표</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 검색 정확도 (Precision@K)</li>
                <li>• 답변 품질 평가</li>
                <li>• 응답 시간 측정</li>
                <li>• 사용자 만족도</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-lg overflow-hidden">
        <div className="bg-slate-800 px-4 py-2 border-b border-slate-700">
          <h5 className="text-sm font-semibold text-gray-300">완전한 RAG 시스템 예제</h5>
        </div>
        <div className="p-4">
          <pre className="text-gray-300 text-sm overflow-x-auto">
            <code>{codeExamples.embedding}</code>
          </pre>
        </div>
      </div>
    </div>
  )

  const renderFrameworks = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">⚙️ 개발 프레임워크</h3>
        <p className="text-gray-400 text-lg">LLM 애플리케이션 개발을 위한 주요 도구들</p>
      </div>

      <div className="space-y-6">
        {frameworkComparison.map((framework, index) => (
          <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="text-3xl mr-4">{framework.logo}</div>
                <div>
                  <h4 className="text-xl font-bold text-white">{framework.name}</h4>
                  <p className="text-gray-400 text-sm">{framework.language}</p>
                </div>
              </div>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                {framework.bestFor}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
                    <h5 className="font-semibold text-green-400 mb-2 text-sm">장점</h5>
                    <ul className="space-y-1">
                      {framework.strengths.map((strength, sIndex) => (
                        <li key={sIndex} className="text-gray-300 text-xs flex items-center">
                          <span className="text-green-400 mr-1">+</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                    <h5 className="font-semibold text-red-400 mb-2 text-sm">단점</h5>
                    <ul className="space-y-1">
                      {framework.weaknesses.map((weakness, wIndex) => (
                        <li key={wIndex} className="text-gray-300 text-xs flex items-center">
                          <span className="text-red-400 mr-1">-</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-blue-400 mb-2">코드 예제</h5>
                <div className="bg-slate-900 rounded-lg p-3">
                  <pre className="text-gray-300 text-xs overflow-x-auto">
                    <code>{framework.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-6 border border-purple-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🛠️ 추천 기술 스택</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-purple-400 mb-3">프로토타입</h5>
            <div className="space-y-2">
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Frontend: Streamlit</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Backend: LangChain</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Vector DB: Chroma</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">LLM: OpenAI API</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-blue-400 mb-3">MVP</h5>
            <div className="space-y-2">
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Frontend: React/Next.js</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Backend: FastAPI</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Vector DB: Pinecone</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">LLM: Claude/GPT</span>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-green-400 mb-3">프로덕션</h5>
            <div className="space-y-2">
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Frontend: React/Vue</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Backend: Node.js/Python</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Vector DB: Weaviate</span>
              </div>
              <div className="bg-slate-800 rounded px-2 py-1">
                <span className="text-gray-300 text-sm">Infra: Docker/K8s</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-xl p-6 border border-cyan-500/20">
        <h4 className="text-xl font-bold text-white mb-4">📚 학습 리소스</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-cyan-400 mb-3">공식 문서</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• <span className="text-blue-400">LangChain</span>: python.langchain.com</li>
              <li>• <span className="text-blue-400">LlamaIndex</span>: docs.llamaindex.ai</li>
              <li>• <span className="text-blue-400">Haystack</span>: docs.haystack.deepset.ai</li>
              <li>• <span className="text-blue-400">OpenAI</span>: platform.openai.com/docs</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-blue-400 mb-3">실습 튜토리얼</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• LangChain 공식 튜토리얼</li>
              <li>• OpenAI Cookbook</li>
              <li>• Pinecone Learning Center</li>
              <li>• Hugging Face Courses</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProduction = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">🚀 프로덕션 배포</h3>
        <p className="text-gray-400 text-lg">실제 서비스를 위한 배포 및 운영 가이드</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h4 className="text-xl font-bold text-white mb-4">🔧 성능 최적화</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <h5 className="font-semibold text-blue-400 mb-2">응답 시간 개선</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 스트리밍 응답 구현</li>
                <li>• 캐싱 전략 적용</li>
                <li>• 비동기 처리</li>
                <li>• 커넥션 풀링</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <h5 className="font-semibold text-green-400 mb-2">비용 최적화</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 토큰 사용량 최적화</li>
                <li>• 모델 선택 전략</li>
                <li>• 배치 처리</li>
                <li>• 사용량 모니터링</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h4 className="text-xl font-bold text-white mb-4">🛡️ 보안 & 안정성</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <h5 className="font-semibold text-purple-400 mb-2">보안 고려사항</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• API 키 보안 관리</li>
                <li>• 입력 검증 및 필터링</li>
                <li>• 출력 검증</li>
                <li>• 사용자 인증/권한</li>
              </ul>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <h5 className="font-semibold text-orange-400 mb-2">오류 처리</h5>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• 재시도 로직</li>
                <li>• 회로 차단기 패턴</li>
                <li>• 폴백 메커니즘</li>
                <li>• 우아한 성능 저하</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-6 border border-indigo-500/20">
        <h4 className="text-xl font-bold text-white mb-4">📊 모니터링 & 관찰성</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-indigo-400 mb-2">핵심 지표</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 응답 시간 (P95, P99)</li>
              <li>• 에러율</li>
              <li>• 토큰 사용량</li>
              <li>• 동시 사용자 수</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-purple-400 mb-2">로깅</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 구조화된 로그</li>
              <li>• 요청/응답 추적</li>
              <li>• 에러 스택 트레이스</li>
              <li>• 성능 프로파일링</li>
            </ul>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <h5 className="font-semibold text-cyan-400 mb-2">알림</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• 임계값 기반 알림</li>
              <li>• 비정상 탐지</li>
              <li>• 서비스 상태 페이지</li>
              <li>• 인시던트 대응</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-6 border border-green-500/20">
        <h4 className="text-xl font-bold text-white mb-4">☁️ 클라우드 배포 옵션</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-green-400 mb-3">컨테이너 기반</h5>
            <div className="bg-slate-900 rounded-lg p-3 mb-3">
              <h6 className="text-xs font-semibold text-gray-400 mb-2">Dockerfile 예제</h6>
              <pre className="text-gray-300 text-xs">
{`FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
EXPOSE 3000

CMD ["node", "server.js"]`}
              </pre>
            </div>
            <div className="bg-slate-900 rounded-lg p-3">
              <h6 className="text-xs font-semibold text-gray-400 mb-2">Docker Compose</h6>
              <pre className="text-gray-300 text-xs">
{`version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - OPENAI_API_KEY=\${OPENAI_API_KEY}
    depends_on:
      - redis

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"`}
              </pre>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-blue-400 mb-3">서버리스</h5>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-blue-300 mb-1">Vercel</h6>
                <p className="text-gray-300 text-xs">Next.js 앱을 위한 최적화된 배포</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-green-300 mb-1">AWS Lambda</h6>
                <p className="text-gray-300 text-xs">이벤트 기반 함수 실행</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-purple-300 mb-1">Google Cloud Run</h6>
                <p className="text-gray-300 text-xs">컨테이너 기반 서버리스</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-orange-300 mb-1">Azure Functions</h6>
                <p className="text-gray-300 text-xs">이벤트 중심 컴퓨팅</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl p-6 border border-orange-500/20">
        <h4 className="text-xl font-bold text-white mb-4">🔄 CI/CD 파이프라인</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-orange-400 mb-3">GitHub Actions 예제</h5>
            <div className="bg-slate-900 rounded-lg p-3">
              <pre className="text-gray-300 text-xs overflow-x-auto">
{`name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Deploy to production
        run: |
          docker build -t myapp .
          docker push registry/myapp:latest`}
              </pre>
            </div>
          </div>
          <div>
            <h5 className="font-semibold text-red-400 mb-3">배포 전략</h5>
            <div className="space-y-3">
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-red-300 mb-1">블루-그린 배포</h6>
                <p className="text-gray-300 text-xs">무중단 배포를 위한 전환 방식</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-orange-300 mb-1">카나리 배포</h6>
                <p className="text-gray-300 text-xs">점진적 트래픽 전환</p>
              </div>
              <div className="bg-white/10 rounded-lg p-3">
                <h6 className="font-semibold text-yellow-300 mb-1">롤링 업데이트</h6>
                <p className="text-gray-300 text-xs">순차적 인스턴스 교체</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 rounded-xl p-6 border border-gray-500/20">
        <h4 className="text-xl font-bold text-white mb-4">📈 확장성 고려사항</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="font-semibold text-gray-300 mb-3">수평적 확장</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• 로드 밸런서 구성</li>
              <li>• 상태 비저장 설계</li>
              <li>• 세션 저장소 분리</li>
              <li>• 마이크로서비스 아키텍처</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-gray-300 mb-3">수직적 확장</h5>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• CPU/메모리 최적화</li>
              <li>• GPU 가속 활용</li>
              <li>• 캐시 계층 구성</li>
              <li>• 데이터베이스 튜닝</li>
            </ul>
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
              <span className="text-2xl">⚙️</span>
              <h1 className="text-2xl font-bold text-white">LLM 기반 서비스 개발</h1>
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
          {activeSection === 'api-basics' && renderApiBasics()}
          {activeSection === 'architecture' && renderArchitecture()}
          {activeSection === 'rag' && renderRAG()}
          {activeSection === 'frameworks' && renderFrameworks()}
          {activeSection === 'production' && renderProduction()}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-slate-900 border-t border-slate-700 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400 text-sm">
            <p>LLM Hub - 개발자를 위한 완전 가이드</p>
            <p className="mt-2">🚀 더 많은 콘텐츠는 <a href="#/" className="text-blue-400 hover:text-blue-300">메인 페이지</a>에서 확인하세요</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LLMDevelopment