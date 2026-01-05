import React, { useState } from 'react';
import { Briefcase, TrendingUp, Users, Award, Mail, Download, X, Menu, ChevronRight, Star, CheckCircle } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const profile = {
    name: '박준혁',
    title: 'Technical Platform Leader',
    subtitle: '비즈니스를 성장시키는 데이터 기반 PM',
    email: 'contact@example.com',
    phone: '010-0000-0000',
    location: '서울, 대한민국'
  };

  const impactNumbers = [
    { number: '15년', label: '커머스 플랫폼 경력' },
    { number: '450개', label: '상점 AutoDiPi 도입' },
    { number: '200+', label: '앱 생태계 구축' },
    { number: '3개월', label: '현대/기아샵 완성' }
  ];

  const competencies = [
    { 
      title: '프로덕트 전략 & PM',
      level: 95,
      color: 'bg-blue-500',
      icon: '🎯',
      desc: '비즈니스 목표를 제품 전략으로 전환하고 실행 로드맵 수립',
      items: [
        '현대/기아샵 3개월 완성 (단기 MVP 전략)',
        '워크스페이스 0→200+앱 생태계 구축',
        '이해관계자 요구사항 우선순위 매트릭스 설계'
      ]
    },
    { 
      title: '사용자 경험 설계',
      level: 90,
      color: 'bg-purple-500',
      icon: '✨',
      desc: '데이터 기반 페인포인트 분석 및 직관적 UX 솔루션 제시',
      items: [
        'AutoDiPi 자동진열로 작업시간 80% 단축',
        '클릭맵 히트맵 분석으로 전환율 22% 개선',
        '구매자/판매자 Journey Map 설계 및 시나리오 정의'
      ]
    },
    { 
      title: '데이터 기반 의사결정',
      level: 88,
      color: 'bg-green-500',
      icon: '📊',
      desc: '성과 지표 설계, 실시간 모니터링, A/B 테스트 기획',
      items: [
        '네이버페이 전환 측정 업계 최초 기획',
        '실시간 효과 리포트 대시보드 설계 (AutoDiPi, CRM)',
        '추천 시스템 성과 측정: 클릭률 38%, 교차판매 28%↑'
      ]
    },
    { 
      title: '기술 이해 & 협업',
      level: 85,
      color: 'bg-orange-500',
      icon: '⚙️',
      desc: 'API, MSA 구조 이해로 실행 가능한 기획 및 개발팀 소통',
      items: [
        'API 연동 프로세스 상세 정의로 리워크 0건',
        'MSA 아키텍처 기반 커스터마이징 범위 최소화',
        'Postman 검증 및 기술적 제약 사전 파악'
      ]
    }
  ];

  const projects = [
    {
      id: 'hyundai',
      title: '현대샵 구축',
      company: 'NHN커머스',
      role: 'PM',
      period: '2023.03 - 2023.06',
      status: '완료',
      tags: ['B2C커머스', 'PM', '대기업'],
      highlight: '3개월 완성 · 장애 0건 · 기아샵 수주',
      metrics: [
        { label: '프로젝트 기간', value: '3개월' },
        { label: '런칭 후 장애', value: '0건' },
        { label: '후속 프로젝트', value: '기아샵' }
      ],
      summary: '현대자동차 B2C 커머스를 SaaS 플랫폼 기반 3개월 만에 구축',
      challenge: '레거시 시스템 연계, 브랜드 정체성 유지, 단기간 안정적 런칭 필요',
      approach: [
        '이해관계자 요구사항 매트릭스로 MVP 범위 확정',
        '구매자/판매자 여정 맵 설계 및 전환 포인트 시나리오 정의',
        '외부 API 연동 프로세스 상세 기획으로 개발 리워크 0건',
        '단계별 QA 시나리오 및 장애 매뉴얼 사전 준비'
      ],
      result: '기한 내 오픈, 3개월간 주요 장애 0건, 현대 만족도 기반 기아샵 수주'
    },
    {
      id: 'workspace',
      title: '워크스페이스',
      company: 'NHN커머스',
      role: 'PO',
      period: '2022.01 - 2022.07',
      status: '운영중',
      tags: ['개발자플랫폼', 'PO', '생태계'],
      highlight: '200+앱 · 월50개 신규 · 생태계 구축',
      metrics: [
        { label: '등록 앱', value: '200+' },
        { label: '월 신규', value: '50개' },
        { label: '생태계 완성', value: '6개월' }
      ],
      summary: 'SaaS 개발자가 앱을 만들고 판매하는 플랫폼 0→1 구축',
      challenge: '개발자 생태계 부재, 온보딩부터 정산까지 전체 프로세스 필요',
      approach: [
        '페르소나별(스타트업/대행사/솔루션) 시나리오 및 요구사항 도출',
        'GitHub 스타일 개발자 친화 UI/UX 및 IA 구조 설계',
        '앱 심사 정책, 요금제, 정산 등 비즈니스 운영 정책 전체 기획',
        'DX 최적화: 샌드박스, API 문서 자동화, 개발 가이드'
      ],
      result: '6개월 200+앱, 월평균 50개 신규, 앱스토어 매출 연동 완료'
    },
    {
      id: 'autodpi',
      title: 'AutoDiPi 자동진열',
      company: '코리아센터닷컴',
      role: '기획·PM',
      period: '2016.03 - 2017.12',
      status: '운영중',
      tags: ['자동화', 'B2B', '데이터'],
      highlight: '450개 상점 · 작업시간 80%↓ · 전환율 15%↑',
      metrics: [
        { label: '도입 상점', value: '450개' },
        { label: '작업시간 단축', value: '80%' },
        { label: '전환율 향상', value: '15%' }
      ],
      summary: '데이터 기반 상품 자동진열로 쇼핑몰 운영 효율화',
      challenge: '수동 진열 작업 비효율, 데이터 분석 없이 감에만 의존',
      approach: [
        '운영자 인터뷰로 페인포인트 도출 (작업 시간, 전환율, 재고)',
        '다차원 데이터 기반 자동진열 로직 설계',
        '실시간 효과 리포트 대시보드 UX 설계',
        'B2B 영업 전략: 무료 체험 → 효과 검증 → 유료 전환 퍼널'
      ],
      result: '450개 상점 도입, 작업시간 80% 단축, 전환율 15% 향상'
    },
    {
      id: 'crm',
      title: '배송대행 CRM',
      company: '코리아센터닷컴',
      role: 'PM',
      period: '2017.01 - 2017.07',
      status: '완료',
      tags: ['CRM', '데이터분석', 'B2B'],
      highlight: '재구매 25%↑ · 이탈률 40%↓',
      metrics: [
        { label: '재구매율', value: '+25%' },
        { label: '이탈률', value: '-40%' },
        { label: '구매액', value: '+18%' }
      ],
      summary: '구매 패턴 분석 기반 맞춤형 쇼핑 컨설팅 서비스',
      challenge: '회원 구매 데이터는 많지만 활용 안 됨, 개인화 서비스 부재',
      approach: [
        '구매 빈도, 카테고리, 가격대, 시즌성 분석 알고리즘 설계',
        '개인별 맞춤 쇼핑 인사이트 리포트 자동 생성',
        'CRM 대시보드: 세그먼트별 마케팅 캠페인 실행 가능',
        '월별/분기별 구매 목표 설정 및 달성률 시각화'
      ],
      result: '재구매율 25%↑, VIP 이탈률 40%↓, 월평균 구매액 18%↑'
    },
    {
      id: 'clickmap',
      title: '클릭맵 마케팅',
      company: '코리아센터닷컴',
      role: '기획·PL',
      period: '2015.09 - 2018.10',
      status: '운영중',
      tags: ['마케팅툴', 'UX분석', 'SaaS'],
      highlight: '450개 사용 · 전환율 22%↑',
      metrics: [
        { label: '사용 상점', value: '450개' },
        { label: '전환율', value: '+22%' },
        { label: '배너효율', value: '+35%' }
      ],
      summary: '실시간 히트맵 분석으로 쇼핑몰 전환율 최적화',
      challenge: '클릭 데이터 없이 감으로만 배너·상품 배치 결정',
      approach: [
        '클릭 이벤트 수집 및 개인정보 비식별화 처리',
        '히트맵 시각화: 색상·농도로 빈도 표현, 시간대·디바이스 필터',
        '전환율 개선 알고리즘: 클릭↑ 구매↓ 영역 자동 탐지',
        'A/B 테스트: 배너 위치 변경 전후 효과 비교'
      ],
      result: '450개 상점 사용, 메인 전환율 22%↑, 마케팅 배너 효율 35%↑'
    },
    {
      id: 'mining',
      title: '마이닝 추천',
      company: '코리아센터닷컴',
      role: 'PO·PM',
      period: '2016.06 - 2017.02',
      status: '완료',
      tags: ['개인화', '추천시스템', 'AI'],
      highlight: '클릭률 38% · 교차판매 28%↑',
      metrics: [
        { label: '추천 클릭률', value: '38%' },
        { label: '교차판매', value: '+28%' },
        { label: '객단가', value: '+12K' }
      ],
      summary: '구매 데이터 기반 개인화 추천으로 교차판매 극대화',
      challenge: '구매 데이터는 쌓이지만 개인화 추천이나 교차 판매 전략 없음',
      approach: [
        '협업 필터링 및 연관 상품 분석 로직 설계',
        '메인·상세·장바구니 영역별 추천 전략 차별화',
        '추천 성과 대시보드: 클릭률, 전환율, 객단가 실시간 측정',
        '판매자 관리 기능: 연관 상품 수동 편집 및 우선순위 조정'
      ],
      result: '추천 클릭률 38%, 교차판매 28%↑, 객단가 평균 12,000원↑'
    }
  ];

  const timeline = [
    {
      period: '2018.10 ~ 현재',
      company: 'NHN커머스',
      role: '차장·팀장',
      type: 'SaaS 플랫폼',
      desc: '워크스페이스·앱스토어 구축 | 현대/기아샵 PM | OpenAPI 정책 관리'
    },
    {
      period: '2015.05 ~ 2018.10',
      company: '코리아센터닷컴',
      role: '과장',
      type: '데이터 마케팅',
      desc: 'AutoDiPi·클릭맵·CRM | 450개 상점 운영 | 네이버페이 측정'
    },
    {
      period: '2010.05 ~ 2015.04',
      company: '지오니드 外',
      role: 'PM·기획',
      type: '공공·기업 SI',
      desc: '금융위·문체부·경기도 | ERP 연동 | SI/SM 프로젝트'
    }
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-white overflow-hidden">
      {/* Left Sidebar - 고정 */}
      <aside className="w-80 bg-slate-950 border-r border-slate-800 flex flex-col overflow-y-auto">
        {/* Profile */}
        <div className="p-8 border-b border-slate-800">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-4 flex items-center justify-center text-3xl font-bold">
            박
          </div>
          <h1 className="text-2xl font-bold mb-2">{profile.name}</h1>
          <p className="text-sm text-slate-400 mb-1">{profile.title}</p>
          <p className="text-xs text-slate-500">{profile.subtitle}</p>
        </div>

        {/* Quick Stats */}
        <div className="p-6 border-b border-slate-800">
          <h3 className="text-xs font-semibold text-slate-400 uppercase mb-4">주요 성과</h3>
          <div className="space-y-3">
            {impactNumbers.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <span className="text-sm text-slate-400">{item.label}</span>
                <span className="text-lg font-bold text-blue-400">{item.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 flex-1">
          <h3 className="text-xs font-semibold text-slate-400 uppercase mb-4">메뉴</h3>
          <ul className="space-y-2">
            {[
              { id: 'hero', label: '소개', icon: '👋' },
              { id: 'competency', label: '핵심 역량', icon: '⚡' },
              { id: 'projects', label: '프로젝트', icon: '🎯' },
              { id: 'timeline', label: '경력', icon: '📅' }
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact CTA */}
        <div className="p-6 border-t border-slate-800">
          <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 mb-3">
            <Mail className="w-4 h-4" />
            연락하기
          </button>
          <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            이력서 다운
          </button>
        </div>
      </aside>

      {/* Right Content - 스크롤 */}
      <main className="flex-1 overflow-y-auto">
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex items-center justify-center p-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm mb-6">
              Portfolio 2025
            </div>
            <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              현대/기아샵 PM<br />450개 상점 성장<br />200+앱 생태계 구축
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              전략 수립부터 실행까지, 데이터로 검증하며 성과를 만드는 15년 차 플랫폼 기획자입니다.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all inline-flex items-center gap-2">
                프로젝트 보기
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Competencies */}
        <section id="competency" className="p-12 bg-slate-800/30">
          <h2 className="text-3xl font-bold mb-3">핵심 역량</h2>
          <p className="text-slate-400 mb-8">15년간 쌓아온 플랫폼 기획자의 4가지 코어 역량</p>
          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((comp, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">{comp.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{comp.title}</h3>
                      <span className="text-2xl font-bold text-blue-400">{comp.level}%</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{comp.desc}</p>
                  </div>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 mb-4">
                  <div className={`${comp.color} h-2 rounded-full transition-all duration-1000`} style={{ width: `${comp.level}%` }}></div>
                </div>
                <ul className="space-y-2">
                  {comp.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="p-12">
          <h2 className="text-3xl font-bold mb-8">주요 프로젝트</h2>
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        project.status === '운영중' ? 'bg-green-500/20 text-green-300' : 'bg-blue-500/20 text-blue-300'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-3">{project.company} · {project.role} · {project.period}</p>
                    <p className="text-slate-300 mb-4">{project.summary}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-700/50 text-slate-300 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm font-semibold text-green-400">{project.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="p-12 bg-slate-800/30">
          <h2 className="text-3xl font-bold mb-8">경력 타임라인</h2>
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative pl-8 border-l-2 border-blue-500/50">
                <div className="absolute left-0 top-0 w-4 h-4 bg-blue-500 rounded-full -translate-x-[9px]"></div>
                <div className="bg-slate-800/50 backdrop-blur p-6 rounded-xl border border-slate-700">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-blue-400 font-semibold">{item.period}</span>
                    <span className="text-xl font-bold">{item.company}</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full">{item.role}</span>
                    <span className="text-sm text-slate-500">{item.type}</span>
                  </div>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="p-8 bg-slate-950 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2025 박준혁 Portfolio. Built with React & Tailwind CSS</p>
        </footer>
      </main>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-slate-400">{selectedProject.company} · {selectedProject.role} · {selectedProject.period}</p>
              </div>
              <button onClick={() => setSelectedProject(null)} className="p-2 hover:bg-slate-700 rounded-lg">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div className="grid grid-cols-3 gap-4">
                {selectedProject.metrics.map((metric, idx) => (
                  <div key={idx} className="bg-slate-900/50 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{metric.value}</div>
                    <div className="text-sm text-slate-400">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl flex items-center justify-center border border-slate-700">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-slate-700/50 rounded-lg flex items-center justify-center">
                    <span className="text-4xl">📸</span>
                  </div>
                  <p className="text-slate-400 text-sm">프로젝트 스크린샷</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-blue-400 mb-3">Situation (상황)</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">Task (과제)</h3>
                  <p className="text-slate-300 leading-relaxed">{selectedProject.summary}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Action (실행)</h3>
                  <ul className="space-y-3">
                    {selectedProject.approach.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-slate-300">
                        <span className="w-6 h-6 bg-purple-500/20 rounded flex items-center justify-center text-purple-400 text-sm flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-orange-400 mb-3">Result (결과)</h3>
                  <p className="text-slate-300 leading-relaxed font-semibold">{selectedProject.result}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;