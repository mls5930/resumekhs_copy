import Image from "next/image";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-zinc-50 py-8 print:bg-white">
      <div className="mx-auto w-full max-w-[820px]">
        {/* ===== Page 1 ===== */}
        <section className="rounded-2xl border border-zinc-200 bg-white px-15   shadow-sm">
          {/* 상단 검은 바: 섹션 맨 위에 붙이기 (좌우 여백 없이) */}
          <div className="mb-8 h-3 w-full  bg-zinc-600" />
          {/* 헤더: [사진] [이름블록] [연락처] */}
          {/* 헤더: 사진 / (배지↑  이름+연락처↓) */}
          <header className="flex items-start gap-4">
            {/* 사진 */}
            <Image
              src="/poto.jpg"
              alt="Profile photo"
              width={160}
              height={120}
              className="object-cover"
            />

            {/* 오른쪽 전체(사진과 동일 높이로 고정) */}
            <div className="flex h-52 w-full flex-col">
              {/* 배지: 맨 위 */}
              <div>
                <span className="inline-block rounded-md bg-zinc-100 px-3 py-1 text-[14px] font-extrabold text-zinc-900">
                  Technician
                </span>
              </div>

              {/* 이름 + 연락처: 맨 아래로 내리기 */}
              <div className="mt-auto flex items-end justify-between gap-6">
                {/* 이름 블록 (생년월일은 이름 오른쪽 '아래' 정렬) */}
                <div>
                  <div className="flex items-end gap-1">
                    <h1 className="text-[28px] font-extrabold leading-none">
                      고혜성
                    </h1>
                    <span className="text-sm text-zinc-900 font-extrabold ">
                      (1998.12.31)
                    </span>
                  </div>
                  <p className="mt-1 text-[26px]  tracking-tight text-zinc-400">
                    Ko Hyesung
                  </p>
                </div>

                {/* 연락처 블록 (오른쪽 정렬) */}
                <ul className="min-w-[300px] text-right text-[13px] leading-6 text-zinc-800">
                  <li>경기도 남양주시 화도읍 창현리 두산 1차</li>
                  <li>
                    <span className="font-semibold">gmaildle5930</span>
                    @gmail.com
                  </li>
                  <li>010-8510-5930</li>
                </ul>
              </div>
            </div>
          </header>

          {/* 본문 2단 — 카드 스타일 제거 + 타이포 조정 */}
          <div className="mt-8 grid grid-cols-1 pt-10 gap-8 md:grid-cols-5">
            {/* About (왼쪽) */}
            <section className="md:col-span-2">
              <h2 className="mb-2 text-[12px] font-bold leading-6">
                꼼꼼함과 책임감으로 장비와 시스템을 관리하며, 안정적인 업무
                환경을 만드는 기술자입니다.
              </h2>

              <p className="text-[12px] leading-7 text-zinc-800 tracking-tight">
                저는 문제를 빠르게 파악하고 정확하게 해결하는 것을 중요하게
                생각합니다. 장비나 시스템이 안정적으로 운영될 때 비로소 사용자가
                불편함 없이 일할 수 있다고 믿기 때문입니다. 환경회사에서의 장비
                관리 경험을 통해 작은 이상도 놓치지 않고 점검하는 습관을
                길렀으며, OA 유지보수 업무에서도 이러한 꼼꼼함과 책임감을
                바탕으로 안정적인 지원 환경을 제공하겠습니다. 단순한 수리 업무를
                넘어, 문제의 원인을 분석하고 재발을 방지하는 체계적인 관리로
                회사의 효율적인 운영에 기여하는 기술자가 되고자 합니다.
              </p>
            </section>

            {/* Professional Experience (오른쪽) */}
            <section className="md:col-span-3">
              <h2 className="mb-3 text-lg font-extrabold tracking-tight">
                Professional Experience
              </h2>

              {/* 회사/팀/기간 1줄 */}
              <div className="flex flex-wrap items-center gap-2 text-[12px] leading-6">
                <span className="font-semibold">청명기연환경</span>
                <span className="rounded-full border border-zinc-300 px-2 py-[2px] text-[11px]">
                  환경질조사팀
                </span>
                <span className="ml-auto text-zinc-500">2021.11 - 2024.03</span>
              </div>

              {/* 상세 서술 */}
              <p className="mt-2 text-[12px] leading-7 text-zinc-800 tracking-tight">
                전국 각지의 산업 현장 및 생활환경 지역을 직접 방문하여 환경
                실태를 조사하고, 대기·수질·토양 등의 시료를 채취했습니다. 수집한
                시료를 분석 장비를 통해 실험하고, 데이터 기반으로 환경오염
                수치를 정량화하여 실험 데이터를 통계적으로 분석했습니다. 이를
                통해 기준 초과 여부 및 문제 원인을 도출하고 종합 보고서 작성에
                참여했으며, 관련 법규와 조사 지침에 따라 조사 설계와 결과 해석을
                수행했습니다.
              </p>

              {/* 회색 콜아웃 박스 */}

              <div className="flex flex-wrap items-center gap-2 text-[12px] leading-6 mt-3">
                <span className="font-semibold">경일게임 아카데미</span>
                <span className="rounded-full border border-zinc-300 px-2 py-[2px] text-[11px]">
                  프론트엔드, 블록체인
                </span>
                <span className="ml-auto text-zinc-500">2024.11 - 2025.08</span>
              </div>

              {/* 상세 서술 */}
              <p className="mt-2 text-[12px] leading-7 text-zinc-800 tracking-tight">
                체계적인 교육 과정을 통해 프론트엔드와 블록체인 기술을
                집중적으로 학습했습니다. React와 Next.js를 기반으로 한 웹
                애플리케이션 개발, Zustand와 Redux를 활용한 상태 관리, AWS 배포
                및 데이터베이스 설계·연동까지 실무형 프로젝트 경험을 쌓았습니다.
                특히 팀 프로젝트를 통해 기획·설계·구현·배포 전 과정을 경험하며,
                사용자 요구사항을 분석하고 UI/UX를 개선하는 훈련을 받았습니다.
                또한 블록체인 파트에서는 ERC-20, ERC-1155 토큰 표준과 스마트
                컨트랙트 설계 및 배포를 직접 실습하여, 서비스 내 보상·인증
                시스템을 구현할 수 있는 능력을 길렀습니다.
              </p>

              {/* 회색 콜아웃 박스 */}
              <div className="mt-3 rounded-md bg-zinc-200 p-3 text-[13px] leading-6 text-zinc-700">
                환경실태 조사 및 데이터 기반 분석 업무를 통해, 문제를 정의하고
                수치화하여 해결 방안을 도출하는 훈련을 받았습니다. 이러한 경험은
                사용자의 행동 데이터를 기반으로 기능을 설계하고 개선하는
                프론트엔드 개발 업무에도 자연스럽게 녹아들었습니다.
              </div>
            </section>

            {/* History — 타임라인 */}
            <section className="md:col-span-2">
              <h2 className="mb-3 text-lg font-bold">History</h2>

              {/* 타임라인: 각 li에 선을 붙이고 마지막 li는 선 숨김 */}
              <ul className="text-[12px] text-zinc-800">
                {/* 항목 1 */}
                <li
                  className="
      relative mb-5 pl-8
      after:absolute after:left-3 after:top-3 after:h-15 after:w-px after:bg-zinc-500
      last:after:hidden
    "
                >
                  {/* ⬥ 다이아 */}
                  <span className="absolute left-3 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-zinc-900" />
                  <div className="font-semibold">
                    2017.03 - 2022.02{" "}
                    <span className="text-zinc-500">[졸업]</span>
                  </div>
                  <div className="mt-1 text-zinc-600">
                    한림성심대학교(3년제) · 환경공학과
                  </div>
                </li>

                {/* 항목 2 */}
                <li
                  className="
    relative mb-5 pl-8
    after:absolute after:left-3 after:top-3 after:bottom-0 after:w-px after:bg-zinc-500
    last:after:hidden
  "
                >
                  <span className="absolute left-3 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-zinc-900" />
                  <div className="font-semibold">
                    2014.03 - 2017.02{" "}
                    <span className="text-zinc-500">[졸업]</span>
                  </div>
                  <div className="mt-1 text-zinc-600">마석고등학교</div>
                </li>
              </ul>
            </section>

            {/* Skills — 두 컬럼 리스트 */}
            <section className="md:col-span-3 mb-40">
              <h2 className="mb-5 text-lg font-bold">Skills</h2>

              {/* 위아래 간격(gap-y-4) 추가 */}
              <div className="grid grid-cols-2 gap-x-16 gap-y-4">
                {/* 왼쪽 컬럼: 기본 IT 활용 및 장비 이해 */}
                <ul className="space-y-2 text-[12px] text-zinc-800">
                  <li>⦁ PC 기본 조립 및 운영체제(Windows 10/11) 설치 경험</li>
                  <li>⦁ 드라이버 설치 및 주변기기(프린터·스캐너) 연결 지원</li>
                  <li>⦁ 기초 네트워크 이해(IP주소, 공유기 설정 등)</li>
                  <li>⦁ 파일/폴더 권한 관리 및 네트워크 공유 설정</li>
                  <li>⦁ 간단한 오류 해결(부팅 문제, 장치 인식 오류 등)</li>
                  <li>⦁ 백신 프로그램 설치 및 정기 점검 수행 가능</li>
                </ul>

                {/* 오른쪽 컬럼: 문서화/소통 및 기초 개발 이해 */}
                <ul className="space-y-2 text-[12px] text-zinc-800">
                  <li>
                    ⦁ MS Office(Word, Excel, PowerPoint) 기본 문서 작성 능력
                  </li>
                  <li>⦁ 기기 점검표 및 관리 기록 문서 작성 경험</li>
                  <li>⦁ GitHub를 통한 파일/문서 버전 관리 경험</li>
                  <li>⦁ HTML, CSS, JavaScript를 통한 웹 기본 구조 이해</li>
                  <li>⦁ Node.js 환경 설정 및 간단한 로컬 서버 구축 경험</li>
                </ul>
              </div>

              {/* 위 블록과 간격 늘림 (mt-6 → 여유 있는 느낌) */}
              <div className="mt-6 rounded-md bg-zinc-50 border border-zinc-200 p-3 text-[12px] text-zinc-700">
                <div className="font-semibold mb-1">현재 배우고 있는 내용</div>
                <p>
                  네트워크 관리, PowerShell 기본 명령어, 하드웨어 점검 절차 등
                  OA 유지보수에 필요한 기초 지식을 꾸준히 학습 중이며, 현장에서
                  빠르게 적응하고 성장할 수 있도록 실습 중심으로 배우고
                  있습니다.
                </p>
              </div>
            </section>
          </div>
        </section>

        {/* 페이지 분리 (인쇄용) */}
        <div className="my-6 h-6 w-full opacity-0 print:break-before-page" />

        {/* ===== Page 2 ===== */}
        <div className="mx-auto w-full max-w-[820px]">
          <section className="rounded-2xl border border-zinc-200 bg-white px-15 shadow-sm">
            {/* 상단 검은 바 */}
            <div className="mb-8 h-3 w-full bg-zinc-600" />

            {/* 섹션 타이틀: 자간 살짝 + 톤 다운 */}
            <h2 className="mb-5 text-[18px] pt-10 font-extrabold tracking-tight text-zinc-900">
              Project
            </h2>

            {/* --- Project 본문 --- */}
            <div className="mt-2 grid gap-10 md:grid-cols-5">
              {/* ========== Left (2) : 제목/메타 + 세로 라인 ========== */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  {/* 세로 라인 (검은색) */}
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-1300px] w-[1px] bg-gray-500" />

                  {/* 시작 다이아 (⬥) */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  {/* 프로젝트 이름 */}
                  <h3 className="text-[12px] font-bold text-zinc-700">
                    야미 버거(yummy burgers)
                  </h3>

                  {/* 메타 정보 */}
                  <dl className="mt-2 space-y-1 text-[12px] leading-5 text-zinc-600">
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">개발기간</dt>
                      <dd>2024.12 - 2024.12 [8일]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">사용 기술</dt>
                      <dd className="max-w-[220px]">
                        html, css, javaScript, Dom, node.js
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              {/* ========== Right (3) : 설명 영역 ========== */}
              <section className="md:col-span-3 space-y-7">
                {/* 프로젝트 개요 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    프로젝트 개요
                  </h4>
                  <p className="mt-1 text-[12px] leading-7 text-zinc-800">
                    햄버거 예약·주문 웹사이트로 기획하고, 사용자가 메뉴를
                    살펴보고 장바구니에 담아 주문까지 완료할 수 있게
                    구현했습니다. 전체적인 UI/UX 설계와 햄버거 구매시 사용자
                    동선과 흐름을 고려해 화면을 구성했습니다.
                  </p>
                </div>

                {/* 주요 구현 내용 — 커스텀 불릿 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    주요 구현 내용
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      전체 UI/UX 설계 및 페이지 구성을 구성
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      카테고리 기반 메뉴 필터링 기능으로 사용자 편의성 향상
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      localStorage를 활용한 장바구니 상태 관리 구현
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      제품 상세 페이지 및 유사 추천 메뉴 구현
                    </div>
                  </div>
                </div>

                {/* 문제 상황 및 해결 방향 — 제목+설명 포맷 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    문제 상황
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        로그인 기능 미구현
                      </span>
                      <div className="pl-5 text-zinc-600">
                        사용자 기반 주문 내역 저장이 어려운 상태 <br />
                        향후 JWT 기반 인증 구조 및 사용자 세션 관리 기능 설계
                        예정
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        제품 이미지 해상도 문제
                      </span>
                      <div className="pl-5 text-zinc-600">
                        제품 상세 페이지에서 사용되는 버거 이미지들이 해상도가
                        낮아 화면 크기에 맞춰 확대될 때 심하게 픽셀이 깨지는
                        현상이 발생함. 특히 UI 디자인상 일정 크기의 이미지
                        공간을 확보해두었기 때문에, 원본 이미지가 작을 경우
                        시각적으로 품질이 저하되어 보임.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 향후 개선 과제 — 커스텀 불릿 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    향후 과제
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        로그인/회원가입 기능 구현 및 UI 보완
                      </span>
                      <div className="pl-5 text-zinc-600">
                        로그인/회원가입 버튼 추가 및 모달 팝업 또는 전용 페이지
                        설계
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        기초 인증 구조 설계
                      </span>
                      <div className="pl-5 text-zinc-600">
                        JWT 기반 로그인 방식 적용 계획수립 회원 정보 및 로그인
                        상태를 localStorage 또는 쿠키 기반으로저장
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        제품 이미지 해상도 문제
                      </span>
                      <div className="pl-5 text-zinc-600">
                        제품 상세 페이지에서 사용되는 버거 이미지들이 해상도가
                        낮아 화면 크기에 맞춰 확대될 때 심하게 픽셀이 깨지는
                        현상이 발생함. 특히 UI 디자인상 일정 크기의 이미지
                        공간을 확보해두었기 때문에, 원본 이미지가 작을 경우
                        시각적으로 품질이 저하되어 보임.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 링크 박스 — 테두리+배경 톤 정리 */}
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3 mb-6  mb-6 text-[12.5px] leading-6">
                  <div className="mb-1 font-semibold text-zinc-800">
                    관련 링크
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex gap-2">
                      <span className="w-12 shrink-0 text-zinc-500">
                        Github
                      </span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="https://github.com/mls5930/burger_project"
                      >
                        https://github.com/mls5930/burger_project
                      </a>
                    </div>
                    <div className="flex gap-2 ">
                      <span className="w-12 shrink-0 text-zinc-500">배포</span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="https://burger-project-8e98k4a7g-kohyesungs-projects.vercel.app/"
                      >
                        https://burger-project-8e98k4a7g-kohyesungs-projects.vercel.app
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-2 grid gap-10 md:grid-cols-5">
              {/* ========== Left (2) : 제목/메타 + 세로 라인 ========== */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  {/* 세로 라인 (검은색) */}
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-1600px] w-[1px] bg-gray-500" />

                  {/* 시작 다이아 (⬥) */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  {/* 프로젝트 이름 */}
                  <h3 className="text-[12px] font-bold text-zinc-700">
                    북아일랜드 (Book Island)
                  </h3>

                  {/* 메타 정보 */}
                  <dl className="mt-2 space-y-1 text-[12px] leading-5 text-zinc-600">
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">개발기간</dt>
                      <dd>2025.02 - 2025.02 [13일]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">사용 기술</dt>
                      <dd className="max-w-[220px]">
                        React, TypeScript, React Router, Context API,
                        Styled-components
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>
              {/* ========== Right (3) : 설명 영역 ========== */}
              <section className="md:col-span-3 space-y-7">
                {/* 프로젝트 개요 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    프로젝트 개요
                  </h4>
                  <p className="mt-1 text-[12px] leading-7 text-zinc-800">
                    사용자가 자유롭게 도서 리뷰를 작성하고, 다른 사용자들과
                    소통할 수 있는 커뮤니티 기반 도서 리뷰 플랫폼입니다.
                  </p>
                </div>

                {/* 주요 구현 내용 — 커스텀 불릿 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    주요 구현 내용
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      전체 UI/UX 기획 및 반응형 페이지 구성
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      JWT 기반 사용자 인증 및 로그인 유지 기능을 구현하여 보안성
                      확보.
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      검색창을 통한 도서 검색 기능 구현으로 사용자 편의성을
                      개선.
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      Axios 인터셉터를 활용하여 불필요한 토큰 인증 문제를
                      개선하고, 인증 API와 비인증 API를 명확히 분리하는 구조
                      설계.
                    </div>
                  </div>
                </div>

                {/* 문제 상황 및 해결 방향 — 제목+설명 포맷 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    문제 상황
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        불필요한 api 요청구조
                      </span>
                      <div className="pl-5 text-zinc-600">
                        프로젝트 초기 설계에서 Header를 고정하는 방식으로
                        구현하면서, 모든 API 요청에 JWT 토큰이 자동으로 포함되는
                        구조가 되어버렸습니다. 이로 인해 로그인 여부와 관계없는
                        일반적인 요청(API)에서도 불필요한 인증 처리가 수행되어,
                        불필요한 token 검증이 발생하고 네트워크 효율성과
                        유지보수성 모두 저하되는 문제가 있었습니다.
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    해결 방안
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        비효율 구조 분석
                      </span>
                      <div className="pl-5 text-zinc-600">
                        인증이 필요하지 않은 API 요청에도 토큰이 포함되는 문제를
                        확인하고, 요청 흐름을 구분할 필요성을 인식했습니다.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        Axios 인터셉터 개선
                      </span>
                      <div className="pl-5 text-zinc-600">
                        Axios 인터셉터를 수정하여, 인증이 필요한 요청에만 토큰을
                        포함하도록 조건 분기를 설정하고.
                        <br />
                        이를 통해 요청마다 발생하는 인증 처리 오버헤드를
                        줄였습니다.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        디렉토리 구조 및 API 구분
                      </span>
                      <div className="pl-5 text-zinc-600">
                        인증이 필요한 API와 필요하지 않은 API를 명확하게
                        디렉토리로 분리했습니다.
                        <br />
                        이는 작업 영역 충돌을 줄이고, 유지보수를 보다 용이하게
                        만드는 기반이 되었습니다.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        미들웨어 검증으로 로직 이관
                      </span>
                      <div className="pl-5 text-zinc-600">
                        토큰 검증 로직을 클라이언트에서 처리하지 않고, Express
                        미들웨어에서 일괄 관리하도록 변경함으로써 클라이언트
                        로직을 단순화했습니다.
                      </div>
                    </div>
                  </div>
                </div>
                {/* 향후 개선 과제 — 커스텀 불릿 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    향후 과제
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        요청구조에 대한 인증흐름
                      </span>
                      <div className="pl-5 text-zinc-600">
                        프로젝트 초기에 API 설계 기준과 인증 흐름에 대한 합의가
                        부족했음을 인식했습니다. 향후 협업 시에는 초기 설계
                        단계에서 인증 대상 API 목록과 요구사항을 명확히 정의하는
                        프로세스가 필요함을 느꼈습니다. <br />
                        인증 방식 변경 등 보안 요소가 바뀔 경우에도, 인터셉터와
                        미들웨어 역할 분리를 명확히 유지 하여 유연하게 대응할 수
                        있는 구조 설계가 과제로 남아 있습니다.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 링크 박스 — 테두리+배경 톤 정리 */}
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3 mb-6 text-[12.5px] leading-6">
                  <div className="mb-1 font-semibold text-zinc-800">
                    관련 링크
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex gap-2">
                      <span className="w-12 shrink-0 text-zinc-500">
                        Github
                      </span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="https://github.com/mls5930/burger_project"
                      >
                        https://github.com/mls5930/BookReviewProject_front
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* === Project 3: 누룩 (NuLook) === */}
            <div className="mt-2 grid gap-10 md:grid-cols-5">
              {/* Left: 제목/메타 + 타임라인 */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  {/* 세로 라인 (연한) */}
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-1300px] w-[1px] bg-gray-500" />
                  {/* 시작 다이아 (⬥ 작게) */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  {/* 프로젝트 이름 */}
                  <h3 className="text-[12px] font-bold text-zinc-700">
                    누룩 (NuLook)
                  </h3>

                  {/* 메타 정보 */}
                  <dl className="mt-2 space-y-1 text-[12px] leading-5 text-zinc-600">
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">개발기간</dt>
                      <dd>2025.03 - 2025.03 [16일]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">사용 기술</dt>
                      <dd className="max-w-[220px]">
                        React, TypeScript, Axios, CSS Modules, React Router,
                        useMediaQuery, Express, Nginx, EC2, Vercel, TLS
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>

              {/* Right: 상세 내용 */}
              <section className="md:col-span-3 space-y-7">
                {/* 개요 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    프로젝트 개요
                  </h4>
                  <p className="mt-1 text-[12px] leading-7 text-zinc-800">
                    사용자 맞춤 정보를 제공하고 예약/관리 기능을 중심으로 한 웹
                    서비스입니다. 전체 UI/UX를 설계하고 반응형 레이아웃과 디자인
                    시스템을 적용하여, 기기 환경에 따라 일관된 사용 경험을
                    제공하도록 구성했습니다.
                  </p>
                </div>

                {/* 주요 구현 내용 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    주요 구현 내용
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      전체 UI/UX 설계 및 메인/예약/마이페이지 구성
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      JWT 기반 사용자 인증 및 로그인 상태 유지 로직
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      공통 컴포넌트(헤더/네비게이션/카드 등) 설계 및 재사용
                      구조화
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      반응형 네비게이션 및 페이지 라우팅(React Router)
                    </div>
                  </div>
                </div>

                {/* 문제 상황 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    문제 상황
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        디렉토리/컴포넌트 경계 불명확
                      </span>
                      <div className="pl-5 text-zinc-600">
                        화면 단위가 아닌 임의의 구분으로 컴포넌트가 나뉘어
                        중복과 의존성이 증가. 역할/책임 기준 분리가
                        필요했습니다.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        배포 환경 의사결정
                      </span>
                      <div className="pl-5 text-zinc-600">
                        초기 배포 편의성(Vercel)과 운영 제어(EC2) 사이에서
                        트레이드오프가 존재.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 해결 방안 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    해결 방안
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        역할 기반 디렉토리 정리
                      </span>
                      <div className="pl-5 text-zinc-600">
                        페이지·도메인·컴포넌트 레이어를 명확히 구분하여 중복
                        제거 및 재사용성 향상.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        배포 전략 수립
                      </span>
                      <div className="pl-5 text-zinc-600">
                        EC2 + Nginx Reverse Proxy + TLS 구성으로 운영 제어 확보.
                        (프로토타입 구간은 Vercel로 신속 배포)
                      </div>
                    </div>
                  </div>
                </div>

                {/* 향후 과제 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    향후 과제
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        초기 설계 프로세스 고도화
                      </span>
                      <div className="pl-5 text-zinc-600">
                        반응형 전략·컴포넌트 책임·인증 흐름을 사전 정의하여 협업
                        시 기준 일치.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 링크 박스 */}
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3 mb-6  mb-6 text-[12.5px] leading-6">
                  <div className="mb-1 font-semibold text-zinc-800">
                    관련 링크
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex gap-2">
                      <span className="w-12 shrink-0 text-zinc-500">
                        Github
                      </span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="http://43.201.101.26/"
                      >
                        http://43.201.101.26
                      </a>
                    </div>
                    <div className="flex gap-2 ">
                      <span className="w-12 shrink-0 text-zinc-500">배포</span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="https://github.com/mls5930/NulookFront"
                      >
                        https://github.com/mls5930/NulookFront
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="mt-12 grid gap-10 md:grid-cols-5">
              {/* Left: 타임라인 + 메타 */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  {/* 세로 라인(연한 톤) */}
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-1050px] w-[1px] bg-gray-500" />
                  {/* 시작 다이아 ⬥ */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  {/* 프로젝트명 */}
                  <h3 className="text-[12px] font-bold text-zinc-700">
                    IPXHOP x MVE 음원 가치 평가 설문 시스템 (관리자단
                    프론트엔드)
                  </h3>

                  {/* 메타 */}
                  <dl className="mt-2 space-y-1 text-[12px] leading-5 text-zinc-600">
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">개발기간</dt>
                      <dd>2025.06 - 2025.07 [32일]</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="w-16 shrink-0">사용 기술</dt>
                      <dd className="max-w-[220px]">
                        Next.js, TypeScript, Zustand, Axios Interceptor,
                        Tailwind CSS, Node.js(Express), MySQL, AWS EC2 · Nginx ·
                        PM2, Route53, HTTPS/SSL
                      </dd>
                    </div>
                  </dl>
                </div>
              </aside>

              {/* Right: 내용 */}
              <section className="md:col-span-3 space-y-7">
                {/* 개요 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    프로젝트 개요
                  </h4>
                  <p className="mt-1 text-[12px] leading-7 text-zinc-800">
                    Web3 기반의 음원 가치 평가를 위한 관리자 전용 설문
                    시스템입니다. 설문/항목 생성·배포, 응답 관리, 사용자/권한
                    관리(RBAC)와 기본 통계 확인 기능을 제공합니다. 메타마스크
                    지갑 연동 및 SBT(전문가 뱃지) 발급 연동을 고려한 구조로
                    설계하고, 운영 환경은 EC2에 Nginx 리버스
                    프록시·HTTPS·도메인(Route53)·PM2 프로세스 매니저로
                    구성했습니다.
                  </p>
                </div>

                {/* 주요 구현 내용 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    주요 구현 내용
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      관리자 대시보드: 설문/항목 생성·보관·배포,
                      사용자/역할(RBAC) 관리
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      상태 관리(Zustand) + Axios 인터셉터로 인증 흐름 표준화
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      배포 인프라: EC2 · Nginx 리버스 프록시 · PM2 · HTTPS(SSL)
                      · Route53
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      반응형 UI · 디자인 토큰 기반 컴포넌트화로 일관성 확보
                    </div>
                  </div>
                </div>

                {/* 문제 상황 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    문제 상황
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        디자인 전달 지연
                      </span>
                      <div className="pl-5 text-zinc-600">
                        기업 측 디자인 시안 전달이 지연되어 개발 착수·변경 이슈
                        발생 가능.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        모든 요청에 불필요한 토큰 포함
                      </span>
                      <div className="pl-5 text-zinc-600">
                        인증이 불필요한 API에도 토큰이 포함되어 과도한 인증 처리
                        발생.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        검색 입력 시 과도한 요청 발생
                      </span>
                      <div className="pl-5 text-zinc-600">
                        입력 변경마다 API 호출이 발생해 UX 저하 및 서버 부하
                        가능성.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 해결 방안 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    해결 방안
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        디자인 시안 대응
                      </span>
                      <div className="pl-5 text-zinc-600">
                        와이어프레임·디자인 토큰으로 기획/디자인 변경에 유연한
                        구조 설계.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        Axios 인터셉터 조건 분기
                      </span>
                      <div className="pl-5 text-zinc-600">
                        인증 필요한 요청에만 토큰 주입하도록 조건 분기하여
                        네트워크 오버헤드 감소.
                      </div>
                    </div>
                    <div>
                      <span className="before:content-['⬥'] before:mr-1 font-semibold text-zinc-900">
                        Debounce 적용
                      </span>
                      <div className="pl-5 text-zinc-600">
                        검색 입력에 디바운스 적용으로 불필요 호출 억제, UX/성능
                        개선.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 향후 과제 */}
                <div>
                  <h4 className="text-[16px] font-extrabold tracking-tight text-zinc-900">
                    향후 과제
                  </h4>
                  <div className="mt-2 space-y-3 text-[12px] leading-7">
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      지갑 서명 기반 인증 고도화 및 SBT/리워드 실환경 연동
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      관리자 통계 시각화(차트/필터) 확장, 로그·모니터링 강화
                    </div>
                    <div className="before:content-['⬥'] before:mr-1 text-zinc-900">
                      보안 정책(HSTS/CSP 등) 단계적 적용
                    </div>
                  </div>
                </div>
                <div className="rounded-md border border-zinc-200 bg-zinc-50 p-3 mb-6  mb-6 text-[12.5px] leading-6">
                  <div className="mb-1 font-semibold text-zinc-800">
                    관련 링크
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex gap-2">
                      <span className="w-12 shrink-0 text-zinc-500">
                        Github
                      </span>
                      <a
                        className="underline underline-offset-2 hover:opacity-80"
                        href="https://github.com/mls5930/MVE__PROJECT"
                      >
                        https://github.com/mls5930/MVE__PROJECT
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="w-12 shrink-0 text-zinc-500">배포</span>
                      <div className="flex flex-col">
                        <a
                          className="underline underline-offset-2 hover:opacity-80"
                          href="https://tunemate.store"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://tunemate.store
                        </a>
                        <a
                          className="underline underline-offset-2 hover:opacity-80"
                          href="https://admin.tunemate.store/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          https://admin.tunemate.store
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        </div>
        {/* --- page break (page 2 -> page 3) --- */}
        <div className="my-6 h-6 w-full opacity-0 print:break-before-page" />

        {/* ===== Page 3 ===== */}
        <div className="mx-auto w-full max-w-[820px]">
          <section className="rounded-2xl border border-zinc-200 bg-white px-15 shadow-sm">
            {/* 상단 바 */}
            <div className="mb-8 h-3 w-full bg-zinc-600" />

            {/* 타이틀 */}
            <h2 className="mb-5 pt-10 text-[18px] font-extrabold tracking-tight text-zinc-900">
              Cover Letter
            </h2>

            {/* --- Cover Letter 본문 (아이템 1) --- */}
            <div className="mt-2 grid gap-10 md:grid-cols-5">
              {/* Left: 타임라인 + 제목 */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  {/* 세로 라인 (2페이지와 동일 느낌) */}
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-400px] w-[1px] bg-gray-500" />
                  {/* 시작 다이아 ⬥ */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  <h3 className="text-[12px] font-bold text-zinc-800">
                    1. 피해를 주지 않는 삶, 그리고 성실함에서 배우는 성장
                  </h3>
                </div>
              </aside>

              {/* Right: 내용 */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  “남에게 피해 주지 말라”는 부모님의 말씀은 저의 삶의 기준이
                  되었습니다. 이 말은 단순히 조용히 살라는 뜻이 아니라, 책임감
                  있게 행동하고 타인에게 신뢰를 주는 태도로 이어졌습니다.
                  환경회사에서 근무하며 장비 점검과 데이터 기록 업무를
                  수행했는데, 작은 실수 하나가 전체 결과에 영향을 미칠 수
                  있었기에 매 순간 꼼꼼함과 정확함을 유지하려 노력했습니다.
                  이러한 습관은 OA 유지보수 업무에서도 장비 하나하나를 책임감
                  있게 관리하는 데 큰 도움이 될 것이라 생각합니다.
                </p>
                {/* <p className="text-[12px] leading-7 text-zinc-800">
                  또한 ‘말보다 행동이 중요하다’는 신념으로, 새로운 기술은 반드시
                  직접 구현해보며 익히고 있습니다. DOM, React, Node.js, Solidity
                  등을 학습할 때도 예제 → 실습 → 프로젝트 적용의 단계를 반복하며
                  이해를 다졌습니다. 이러한 성실함과 실행력은 비전공자인 저에게
                  큰 강점이 되었고, 현재까지 총 4개의 프로젝트를 완수하며 꾸준히
                  성장해왔습니다. 앞으로도 부족한 점은 개선하며, 팀과 함께
                  성장하는 개발자가 되겠습니다.
                </p> */}
              </section>
            </div>

            {/* --- Cover Letter 본문 (아이템 2) --- */}
            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-700px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    2. 환경에서 기술로, 변화를 선택한 이유
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  저는 2021년 11월부터 2024년 3월까지 약 2년 4개월간 환경 전문
                  기업인 청명기연환경에서 근무했습니다. 환경질 측정팀 소속으로,
                  현장에 나가 대기·수질 등을 조사하고, 수집한 시료를 실험실에서
                  분석해 적합 여부를 판단하는 일을 맡았습니다. 다양한 장비를
                  다루며 기기 관리, 오류 진단, 측정값 검증, 보고서 작성 등
                  업무를 수행했습니다. 현장과 실험실 정확성과 책임감이 중요한
                  업무였기에, 꾸준함과 성실함을 바탕으로 제 역할을
                  수행해왔습니다. 하지만 일을 하며 점차 느낀 것은 세상이 빠르게
                  기술 중심으로 변화하고 있다는 점이었습니다. 특히 AI, 자동화,
                  블록체인 같은 기술이 다양한 분야에 접목되며 산업 구조를 바꾸는
                  모습을 가까이에서 경험할 수 있었습니다. 무엇보다 환경 데이터를
                  다루며 느낀 ‘측정값의 신뢰성과 결과의 투명성’ 문제는 저에게
                  깊은 인상을 남겼습니다. 시료 측정부터 보고서 작성까지 사람이
                  개입하는 과정이 많았고, ‘어떻게 하면 더 신뢰할 수 있는
                  방식으로 정보를 기록하고 공유할 수 있을까?’라는 고민이
                  생겼습니다.
                </p>
                <p className="text-[12px] leading-7 text-zinc-800">
                  그 과정에서 저는 블록체인 기술이 가진 불변성과 공개성이 이런
                  문제를 해결할 수 있는 가능성에 주목하게 되었고, 단순한
                  호기심을 넘어 문제를 기술로 해결하고 싶어서 개발자 교육을
                  듣게되었으며. 이 경험을 통해 장비의 상태를 세밀하게 점검하고,
                  문제가 발생했을 때 원인을 추적하고 해결하는 능력을 기를 수
                  있었습니다. OA 장비 점검·유지보수 업무도 이러한 경험과 매우
                  유사하다고 생각합니다. 실제 세계의 데이터를 다뤘던 경험을
                  바탕으로, 기술을 통해 신뢰성과 투명성을 높이는 시스템을
                  만들어가는 사람이 되고자 합니다.
                </p>
              </section>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-200px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    3. 빠른 기술 습득력과 문제 해결력
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  비전공자였지만 개발에 관심을 갖고 스스로 PC 환경을 구성하며 웹
                  개발을 배웠습니다. Node.js, React, AWS 등 다양한 환경 설정과
                  프로그램 설치, 오류 해결 과정을 직접 경험했습니다. 이 과정에서
                  시스템의 구조를 이해하고 스스로 문제를 해결하는 습관이
                  생겼습니다. 새로운 OA 장비나 소프트웨어를 다루더라도 빠르게
                  적응하고 필요한 설정을 직접 찾아 해결할 수 있습니다.
                </p>
              </section>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-170px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    4. 사용자 중심의 문제 해결 태도
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  개발을 배우며 깨달은 것은, 기술은 결국 ‘사용자가 편리하게
                  사용할 수 있어야 한다’는 점이었습니다. OA 유지보수 또한 단순히
                  장비를 고치는 것이 아니라, 사용자가 불편 없이 업무를 이어갈 수
                  있도록 돕는 일이라고 생각합니다. 문제 해결 시 사용자 입장에서
                  원인을 분석하고, 빠르게 대응하며, 문제 발생을 미리 방지하는
                  예방적 관리에 힘쓰겠습니다.
                </p>
                {/* <p className="text-[12px] leading-7 text-zinc-800">
                  또한, 사용자의 이탈율과 관련된 UX 연구를 참고하여, 초기 화면
                  렌더링 속도를 줄이고 핵심 정보를 빠르게 전달하는 흐름을 설계한
                  경험도 있습니다. 신기술에만 집중하는 것이 아니라, 기술을
                  사용자에게 어떻게 전달할지를 함께 고민할 수 있는 개발자로
                  성장하고 있습니다.
                </p> */}
              </section>
            </div>
            {/* --- Cover Letter 본문 (아이템 3) --- */}
            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-150px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    5. 함께 성장하는 신뢰받는 구성원
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800 mb-20">
                  회사는 혼자서가 아니라 함께 만들어가는 공간이라고 생각합니다.
                  혼자가 아니라 함께 만들어가는 작업이라는 점에서, 피해를 주지
                  않겠다는 삶의 태도는 큰 장점이 된다고 믿습니다. 주어진 역할을
                  책임감 있게 해내고, 팀에 보탬이 되는 기술자가 되겠습니다.
                  이후의 프로젝트들 속에서도 저는 꾸준히 배우고 나아가겠습니다.
                  ‘믿고 함께할 수 있는 사람’이라는 말을 들을 수 있는 기술자 되는
                  것이 제 목표입니다.
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
