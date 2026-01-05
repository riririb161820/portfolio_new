import React, { useState } from 'react';
import { Mail, Download, ExternalLink, Calendar, MapPin, Briefcase, Award, TrendingUp, Users, ChevronDown, X } from 'lucide-react';

const Portfolio = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const stats = [
    { icon: <Calendar className="w-5 h-5" />, label: '경력', value: '15년' },
    { icon: <Briefcase className="w-5 h-5" />, label: '프로젝트', value: '50+' },
    { icon: <TrendingUp className="w-5 h-5" />, label: '상점 도입', value: '450개' },
    { icon: <Users className="w-5 h-5" />, label: '앱 생태계', value: '200+' }
  ];

  const competencies = [
    {
      emoji: '🎯',
      title: '프로덕트 전략 & PM',
      level: 95,
      desc: '비즈니스 목표를 제품 전략으로 전환하고 실행 로드맵 수립',
      highlights: [
        '현대/기아샵 3개월 완성',
        '워크스페이스 0→200+앱 생태계',
        'MVP 우선순위 매트릭스 설계'
      ]
    },
    {
      emoji: '✨',
      title: '사용자 경험 설계',
      level: 90,
      desc: '데이터 기반 페인포인트 분석 및 직관적 UX 솔루션',
      highlights: [
        'AutoDiPi 작업시간 80% 단축',
        '클릭맵 전환율 22% 개선',
        'Journey Map 설계'
      ]
    },
    {
      emoji: '📊',
      title: '데이터 기반 의사결정',
      level: 88,
      desc: '성과 지표 설계, 실시간 모니터링, A/B 테스트 기획',
      highlights: [
        '네이버페이 전환 측정 최초 기획',
        '실시간 대시보드 설계',
        '추천 클릭률 38% 달성'
      ]
    },
    {
      emoji: '⚙️',
      title: '기술 이해 & 협업',
      level: 85,
      desc: 'API, MSA 구조 이해로 실행 가능한 기획',
      highlights: [
        'API 프로세스 정의로 리워크 0건',
        'MSA 커스터마이징 최소화',
        'Postman 검증'
      ]
    }
  ];

  const projects = [
    {
      id: 'hyundai',
      emoji: '🚗',
      title: '현대샵 구축',
      company: 'NHN커머스',
      role: 'PM',
      period: '2023.03 - 2023.06',
      tags: ['B2C', 'PM', '대기업'],
      summary: '현대자동차 B2C 커머스를 SaaS 플랫폼 기반 3개월 만에 구축',
      impact: ['3개월 완성', '장애 0건', '기아샵 수주'],
      situation: '레거시 시스템 연계, 브랜드 정체성 유지, 단기간 안정적 런칭 필요',
      task: '3개월 내 레거시 시스템 연계, 현대 브랜드 가이드 적용, 대규모 트래픽 대응',
      action: [
        '이해관계자 요구사항 매트릭스로 MVP 범위 확정',
        '구매자/판매자 여정 맵 설계 및 전환 포인트 시나리오 정의',
        '외부 API 연동 프로세스 상세 기획으로 개발 리워크 0건',
        '단계별 QA 시나리오 및 장애 매뉴얼 사전 준비'
      ],
      result: '기한 내 오픈, 3개월간 주요 장애 0건, 현대 만족도 기반 기아샵 수주'
    },
    {
      id: 'workspace',
      emoji: '👨‍💻',
      title: '워크스페이스 (개발자센터)',
      company: 'NHN커머스',
      role: 'PO',
      period: '2022.01 - 2022.07',
      tags: ['플랫폼', 'PO', '생태계'],
      summary: 'SaaS 개발자가 앱을 만들고 판매하는 플랫폼 0→1 구축',
      impact: ['200+앱', '월50개 신규', '생태계 완성'],
      situation: '개발자 생태계 부재, 온보딩부터 정산까지 전체 프로세스 필요',
      task: '개발자 온보딩부터 앱 개발, 심사, 배포, 수익 정산까지 전체 프로세스 설계',
      action: [
        '페르소나별(스타트업/대행사/솔루션) 시나리오 및 요구사항 도출',
        'GitHub 스타일 개발자 친화 UI/UX 및 IA 구조 설계',
        '앱 심사 정책, 요금제, 정산 등 비즈니스 운영 정책 전체 기획',
        'DX 최적화: 샌드박스, API 문서 자동화, 개발 가이드'
      ],
      result: '6개월 200+앱, 월평균 50개 신규, 앱스토어 매출 연동 완료'
    },
    {
      id: 'autodpi',
      emoji: '🤖',
      title: 'AutoDiPi 자동진열',
      company: '코리아센터닷컴',
      role: '기획·PM',
      period: '2016.03 - 2017.12',
      tags: ['자동화', 'B2B', 'SaaS'],
      summary: '데이터 기반 상품 자동진열로 쇼핑몰 운영 효율화',
      impact: ['450개 상점', '80% 시간단축', '15% 전환↑'],
      situation: '수동 진열 작업 비효율, 데이터 분석 없이 감에만 의존',
      task: '판매 데이터 분석하여 최적 상품을 자동 진열하고 실시간 효과 측정',
      action: [
        '운영자 인터뷰로 페인포인트 도출 (작업 시간, 전환율, 재고)',
        '다차원 데이터 기반 자동진열 로직 설계',
        '실시간 효과 리포트 대시보드 UX 설계',
        'B2B 영업 전략: 무료 체험 → 효과 검증 → 유료 전환 퍼널'
      ],
      result: '450개 상점 도입, 작업시간 80% 단축, 전환율 15% 향상'
    },
    {
      id: 'crm',
      emoji: '📈',
      title: '배송대행 CRM',
      company: '코리아센터닷컴',
      role: 'PM',
      period: '2017.01 - 2017.07',
      tags: ['CRM', '데이터분석', 'B2B'],
      summary: '구매 패턴 분석 기반 맞춤형 쇼핑 컨설팅',
      impact: ['재구매 25%↑', '이탈 40%↓', '구매액 18%↑'],
      situation: '회원 구매 데이터는 많지만 활용 안 됨, 개인화 서비스 부재',
      task: '구매 데이터 분석하여 고객별 쇼핑 취향 파악 및 맞춤 추천',
      action: [
        '구매 빈도, 카테고리, 가격대, 시즌성 분석 알고리즘 설계',
        '개인별 맞춤 쇼핑 인사이트 리포트 자동 생성',
        'CRM 대시보드: 세그먼트별 마케팅 캠페인 실행',
        '월별/분기별 구매 목표 설정 및 달성률 시각화'
      ],
      result: '재구매율 25%↑, VIP 이탈률 40%↓, 월평균 구매액 18%↑'
    },
    {
      id: 'clickmap',
      emoji: '🗺️',
      title: '클릭맵 마케팅',
      company: '코리아센터닷컴',
      role: '기획·PL',
      period: '2015.09 - 2018.10',
      tags: ['마케팅', 'UX분석', 'SaaS'],
      summary: '실시간 히트맵 분석으로 쇼핑몰 전환율 최적화',
      impact: ['450개 사용', '전환 22%↑', '배너 35%↑'],
      situation: '클릭 데이터 없이 감으로만 배너·상품 배치 결정',
      task: '실시간 클릭 히트맵 분석으로 전환율 높은 영역 시각화',
      action: [
        '클릭 이벤트 수집 및 개인정보 비식별화 처리',
        '히트맵 시각화: 색상·농도로 빈도 표현, 시간대·디바이스 필터',
        '전환율 개선 알고리즘: 클릭↑ 구매↓ 영역 자동 탐지',
        'A/B 테스트: 배너 위치 변경 전후 효과 비교'
      ],
      result: '450개 상점 사용, 메인 전환율 22%↑, 배너 효율 35%↑'
    },
    {
      id: 'mining',
      emoji: '💎',
      title: '마이닝 추천',
      company: '코리아센터닷컴',
      role: 'PO·PM',
      period: '2016.06 - 2017.02',
      tags: ['추천', 'AI', '개인화'],
      summary: '구매 데이터 기반 개인화 추천으로 교차판매 극대화',
      impact: ['클릭률 38%', '교차판매 28%↑', '객단가 +12K'],
      situation: '구매 데이터는 쌓이지만 개인화 추천이나 교차 판매 전략 없음',
      task: '구매 이력 분석으로 개인 맞춤 상품 자동 추천',
      action: [
        '협업 필터링 및 연관 상품 분석 로직 설계',
        '메인·상세·장바구니 영역별 추천 전략 차별화',
        '추천 성과 대시보드: 클릭률, 전환율, 객단가 실시간 측정',
        '판매자 관리: 연관 상품 수동 편집 및 우선순위 조정'
      ],
      result: '추천 클릭률 38%, 교차판매 28%↑, 객단가 평균 12,000원↑'
    }
  ];

  const timeline = [
    {
      period: '2018.10 ~ 현재',
      company: 'NHN커머스',
      role: '차장·팀장',
      desc: 'SaaS 플랫폼 리더 | 워크스페이스·앱스토어 구축 | 현대/기아샵 PM'
    },
    {
      period: '2015.05 ~ 2018.10',
      company: '코리아센터닷컴',
      role: '과장',
      desc: 'AutoDiPi·클릭맵·CRM | 450개 상점 운영 | 데이터 마케팅'
    },
    {
      period: '2010.05 ~ 2015.04',
      company: '지오니드 外',
      role: 'PM·기획',
      desc: '공공·기업 SI/SM | 금융위·문체부·경기도 | ERP 연동'
    }
  ];

  return (
    <div className="min-h-screen bg-[#191919] text-[#e8e6e3]">
      {/* Notion-style Header */}
      <header className="sticky top-0 z-40 bg-[#191919]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-lg font-bold">
              박
            </div>
            <span className="font-semibold">박준혁 포트폴리오</span>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-sm hover:bg-white/5 rounded-lg transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              연락하기
            </button>
            <button className="px-4 py-2 text-sm bg-white/10 hover:bg-white/15 rounded-lg transition-colors flex items-center gap-2">
              <Download className="w-4 h-4" />
              이력서
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-12">
        {/* Hero - Notion Page Title Style */}
        <div className="mb-12">
          <div className="text-5xl mb-3">👋</div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            박준혁
          </h1>
          <p className="text-xl text-white/60 mb-6">
            비즈니스를 성장시키는 Technical PM
          </p>
          <p className="text-base text-white/50 leading-relaxed max-w-3xl">
            현대/기아샵 PM, 450개 상점 성장, 200+앱 생태계 구축. 전략 수립부터 실행까지, 데이터로 검증하며 성과를 만드는 15년 차 플랫폼 기획자입니다.
          </p>
        </div>

        {/* Stats - Notion Database Properties Style */}
        <div className="grid grid-cols-4 gap-4 mb-12 p-6 bg-white/5 rounded-lg border border-white/10">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="text-white/40">{stat.icon}</div>
              <div>
                <div className="text-xs text-white/40 mb-1">{stat.label}</div>
                <div className="text-lg font-semibold">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Competencies - Notion Callout Style */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">💪 핵심 역량</h2>
          <div className="space-y-3">
            {competencies.map((comp, idx) => (
              <div key={idx} className="bg-white/5 hover:bg-white/8 rounded-lg p-5 border border-white/10 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{comp.emoji}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">{comp.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                            style={{ width: `${comp.level}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-white/40 min-w-[3rem] text-right">{comp.level}%</span>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 mb-3">{comp.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {comp.highlights.map((item, i) => (
                        <span key={i} className="text-xs px-3 py-1 bg-white/5 rounded-full text-white/70">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects - Notion Toggle List Style */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">🎯 주요 프로젝트</h2>
          <div className="space-y-2">
            {projects.map((project) => (
              <div key={project.id} className="bg-white/5 hover:bg-white/8 rounded-lg border border-white/10 transition-all">
                <button
                  onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                  className="w-full p-5 text-left flex items-start gap-4"
                >
                  <ChevronDown className={`w-5 h-5 text-white/40 flex-shrink-0 mt-0.5 transition-transform ${expandedProject === project.id ? '' : '-rotate-90'}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{project.emoji}</span>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <span className="text-xs px-2 py-1 bg-white/10 rounded text-white/60">{project.role}</span>
                    </div>
                    <p className="text-sm text-white/50 mb-3">{project.summary}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/5 rounded text-white/60">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-xs text-white/40">
                      <span>{project.company}</span>
                      <span>•</span>
                      <span>{project.period}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {project.impact.map((item, i) => (
                      <div key={i} className="px-3 py-1 bg-green-500/10 text-green-400 rounded text-xs font-medium">
                        {item}
                      </div>
                    ))}
                  </div>
                </button>

                {expandedProject === project.id && (
                  <div className="px-5 pb-5 pl-14 space-y-4 animate-in fade-in duration-200">
                    {/* Image Placeholder */}
                    <div className="aspect-video bg-white/5 rounded-lg border border-white/10 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-sm text-white/40">프로젝트 스크린샷</p>
                      </div>
                    </div>

                    {/* STAR Method */}
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-500/5 rounded-lg border-l-4 border-blue-500">
                        <div className="text-xs font-semibold text-blue-400 mb-2">SITUATION</div>
                        <p className="text-sm text-white/70">{project.situation}</p>
                      </div>

                      <div className="p-4 bg-green-500/5 rounded-lg border-l-4 border-green-500">
                        <div className="text-xs font-semibold text-green-400 mb-2">TASK</div>
                        <p className="text-sm text-white/70">{project.task}</p>
                      </div>

                      <div className="p-4 bg-purple-500/5 rounded-lg border-l-4 border-purple-500">
                        <div className="text-xs font-semibold text-purple-400 mb-2">ACTION</div>
                        <ul className="space-y-2">
                          {project.action.map((item, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-white/70">
                              <span className="text-purple-400 font-medium">{idx + 1}.</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 bg-orange-500/5 rounded-lg border-l-4 border-orange-500">
                        <div className="text-xs font-semibold text-orange-400 mb-2">RESULT</div>
                        <p className="text-sm text-white/70 font-medium">{project.result}</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline - Notion Simple Table Style */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">📅 경력</h2>
          <div className="space-y-3">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-6 p-5 bg-white/5 rounded-lg border border-white/10 hover:bg-white/8 transition-all">
                <div className="flex-shrink-0 w-40">
                  <div className="text-sm font-medium text-white/90 mb-1">{item.period}</div>
                  <div className="text-xs text-white/50">{item.company}</div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-white/60 mb-2">{item.role}</div>
                  <div className="text-sm text-white/50">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA - Notion Callout Style */}
        <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg border border-white/10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-3">함께 성장할 기회를 찾고 있습니다</h3>
            <p className="text-white/60 mb-6">
              비즈니스 전략 수립부터 실행까지, 데이터로 검증하며 성과를 만들어냅니다
            </p>
            <div className="flex gap-4 justify-center">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
                이메일 보내기
              </button>
              <button className="px-6 py-3 bg-white/10 hover:bg-white/15 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                이력서 다운로드
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center text-sm text-white/30">
          <p>© 2025 박준혁 Portfolio · Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
