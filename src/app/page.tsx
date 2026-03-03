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
              <div className="flex flex-col gap-1">
                <span className="inline-block rounded-md bg-zinc-100 px-3 py-1 text-[14px] font-extrabold text-zinc-900">
                  환경 · 수질분석
                </span>

                <span className="inline-block text-[11px] text-zinc-500">
                  수질측정대행업 / 환경 분석 연구직
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
                정확한 수질 분석과 데이터 해석을 통해 환경 보호에 기여하는 분석
                인력입니다.
              </h2>

              <p className="text-[12px] leading-7 text-zinc-800 tracking-tight">
                환경질 측정 및 분석 업무를 수행하며 수질 시료 채취부터 실험,
                데이터 정리, 보고서 작성까지 전 과정을 경험했습니다. 분석 기준과
                절차를 철저히 준수하며 오차를 최소화하는 것을 가장 중요하게
                생각합니다. 반복적인 실험 과정에서도 정확성과 일관성을 유지하며,
                데이터를 기반으로 문제 원인을 도출하고 신뢰성 있는 결과를
                제공하는 데 집중해왔습니다.
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
                  환경조사 및 분석
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

              {/* <div className="flex flex-wrap items-center gap-2 text-[12px] leading-6 mt-3">
                <span className="font-semibold">환경 분석 실무 역량 강화</span>
                <span className="rounded-full border border-zinc-300 px-2 py-[2px] text-[11px]">
                  수질 분석 · 데이터 관리
                </span>
              </div>

              <p className="mt-2 text-[12px] leading-7 text-zinc-800 tracking-tight">
                수질 오염물질 분석 및 환경기준 검토를 통해 분석 정확도를 높이는
                방법을 학습했습니다. 실험 장비 유지·관리, 분석 데이터 기록
                체계화, 오차 원인 검토 과정을 통해 실무 이해도를 높였으며,
                보고서 작성 시 관련 법규와 기준을 근거로 명확한 해석을 제시하는
                역량을 갖추었습니다.
              </p> */}

              {/* 회색 콜아웃 박스 */}
              {/* <div className="mt-3 rounded-md bg-zinc-200 p-3 text-[13px] leading-6 text-zinc-700">
                데이터 기반 문제 정의·해결 경험은 노드 운영에서도 그대로
                확장됩니다. 지표를 관찰하고 가설을 검증해 근본 원인을 찾아
                재발을 방지하는 운영 문화를 지향합니다.
              </div> */}
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
            <section className="md:col-span-3 mb-30">
              <h2 className="mb-3 text-lg font-bold">Skills</h2>

              <div className="grid grid-cols-2 gap-x-16">
                {/* 왼쪽 컬럼 */}
                <ul className="space-y-1 text-[12px] text-zinc-800">
                  <li>실험 장비 운용 및 유지 관리</li>
                  <li>환경 데이터 정리 및 통계 분석</li>
                  <li>환경기준 검토 및 법규 이해</li>
                  <li>분석 보고서 작성</li>
                  <li>Excel 기반 데이터 정리</li>
                  <li>현장 조사 및 환경 실태 점검</li>
                  <li>수질 시료 채취 및 보존</li>
                  <li>수질 오염물질 분석 (BOD, COD, SS 등)</li>
                </ul>
                {/* 오른쪽 컬럼 */}
                <ul className="space-y-1 text-[12px] text-zinc-800">
                  <li>환경기능사</li>
                  <li>운전면허증 1종 보통</li>
                  {/* <li>Kubernetes (기초)</li>
                  <li>IaC (Terraform 기초)</li>
                  <li>Secrets/키관리 개념 (SSH, KMS/Vault 학습중)</li>
                  <li>무중단 배포 (롤링/블루그린 개념)</li>
                  <li>FinOps 관점 비용·성능 최적화</li>
                  <li>Cosmos/EVM 노드 운영 학습중</li>
                  <li>Next.js · React (프로젝트 운영경험)</li> */}
                </ul>
              </div>
            </section>
          </div>
        </section>

        {/* 페이지 분리 (인쇄용) */}
        <div className="my-6 h-6 w-full opacity-0 print:break-before-page" />

        {/* ===== Page 2 ===== */}

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
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-500px] w-[1px] bg-gray-500" />
                  {/* 시작 다이아 ⬥ */}
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />

                  <h3 className="text-[12px] font-bold text-zinc-800">
                    1. 책임감 있는 삶, 그리고 성실함에서 배우는 성장
                  </h3>
                </div>
              </aside>

              {/* Right: 내용 */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  “항상 책임감을 가져라.”라는 부모님의 말씀을 어릴 때부터 항상
                  들어왔고 그렇기에 저의 삶에 모티브가 되었습니다. 그렇기에 맡은
                  일에 책임감 있게 행동하고 타인을 배려하는 태도를 배우게
                  되었고. 이러한 가치관은 제 성격에도 자연스럽게 녹아들어
                  갈등보다는 조율을 선호하고, 상대의 이야기를 경청하는 태도로
                  이어졌습니다. 환경회사에서 담당한 환경질 측정 및 데이터 분석
                  업무는 측정값의 정확성과 객관성이 무엇보다 중요한
                  업무였습니다. 저는 시료 채취부터 전처리, 분석, 결과 정리까지
                  단계별 절차를 점검하며 업무를 수행했습니다. 반복되는 작업
                  속에서도 기준을 철저히 준수한 결과, 재검이나 수정을 줄여가며
                  안정적으로 보고를 완료할 수 있었고, 업무의 신뢰도를 유지하는
                  데 기여했습니다. 다만 초기에 업무를 수행할 때는 성격이 다소
                  급해 측정 준비나 자료 정리를 충분히 검토하지 못해 다시
                  확인하는 일이 발생하기도 했습니다. 이 경험을 통해 사전 점검과
                  기록 관리의 중요성을 알게 되었고, 이후에는 현장 방문 전
                  체크리스트를 작성하고 분석 과정을 체계적으로 정리하는 습관을
                  들였습니다. 이를 통해 업무의 정확도와 효율성을 함께 높일 수
                  있었습니다.
                </p>
                {/* <p className="text-[12px] leading-7 text-zinc-800">
                  새로운 도구는 직접 실습하며 익힙니다. Linux, Nginx, GitHub
                  Actions, AWS, Python/Go(기초) 등을 실습 프로젝트에 적용했고,
                  “작게 변경하고 빠르게 검증”하는 방식을 선호합니다.
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
                    2. 전공 계기
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  환경 분야에 대한 관심은 대학에서 전공 수업을 수강하며 직접
                  실험을 수행해보는 과정에서 자연스럽게 생겼습니다. 이론으로만
                  접하던 환경 문제가 실험 데이터를 통해 수치로 확인되고, 그
                  결과가 실제 환경 관리와 정책 판단의 기초 자료로 활용된다는
                  점이 인상 깊었습니다. 단순한 실험이 아닌, 사회에 영향을 줄 수
                  있는 데이터 생산 과정이라는 점에서 큰 책임감과 흥미를 느끼게
                  되었습니다. 이를 계기로 환경 측정과 분석 분야에 더욱 관심을
                  갖게 되었고, 학부 시절에는 춘천 대기권 환경생태조사 연구에
                  팀원들과 함께 참여해 현장 조사부터 데이터 정리 및 결과
                  도출까지의 전 과정을 경험했습니다. 이 과정에서 정확한 측정과
                  체계적인 분석의 중요성을 배우며 환경 분석 분야로 진로를
                  구체화하게 되었습니다.
                </p>
                {/* <p className="text-[12px] leading-7 text-zinc-800">
                  블록체인의 불변성/공개성은 운영 품질을 높이는 데도
                  유의미합니다. 노드 운영을 학습하며 백업/스냅샷, 보안 패치,
                  지표 기반 이상 탐지, 알림 체계를 정비하고 문서화하는 습관을
                  기르고 있습니다.
                </p> */}
              </section>
            </div>

            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-300px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    3. 회사 경력 및 연구 경험
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  저는 2021년 11월부터 2024년 3월까지 약 2년 4개월간 환경 전문
                  기업인 청명기연환경에서 근무했습니다. 환경질 측정팀 소속으로,
                  현장에 나가 대기·수질 등을 조사하고, 수집한 시료를 실험실에서
                  분석해 적합 여부를 판단하는 일을 맡았습니다. 정확성과 책임감이
                  중요한 업무였기에, 꾸준함과 성실함을 바탕으로 제 역할을
                  수행해왔습니다. 이러한 경험을 바탕으로 환경회사에 입사해 2년
                  반 동안 환경질 측정과 측정한 시료를 기반하여 실험 분석 업무를
                  수행했습니다. 현장 방문을 통해 지역별 환경 실태를 조사하고,
                  정확한 데이터를 얻기 위해 반복 검증과 세밀한 분석을 진행하며
                  환경측정분석 분야에 대한 전문성을 더욱 키워왔습니다.
                </p>
              </section>
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-400px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    4. 새로운 분야에 대한 도전
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800">
                  새로운 분야인 코딩에 도전해본 경험이 있습니다. 처음에는 생소한
                  개념과 기술 용어들로 인해 어려움을 겪었지만, 스스로 학습
                  계획을 세우고 작은 기능 단위의 프로젝트부터 단계적으로
                  실습하며 적응해 나갔습니다. 약 1년간 프로젝트 중심으로 개발을
                  익히며 팀원들과 협업했고, 기술적 이해도의 차이로 의견 충돌이
                  발생하기도 했습니다. 그러나 문제를 회피하기보다 적극적으로
                  소통하며 서로의 관점을 이해하려 노력했고, 역할을 재조정하며
                  해결책을 찾아 나갔습니다. 이러한 경험을 통해 새로운 환경에서도
                  빠르게 학습하고 적응하는 능력을 기를 수 있었으며, 변화에
                  유연하게 대응하는 자세의 중요성을 체감했습니다. 코딩은
                  환경분석분야에 필요가없지만 컴퓨터 활용능력과 기존 환경 분석
                  업무에 더해 데이터 처리와 시스템에 대한 이해를 늘리는데에
                  도움이 되었다고 생각합니다. 앞으로도 낯선 분야라 하더라도
                  두려워하기보다 도전하며 역량의 폭을 넓혀가는 자세를
                  유지하겠습니다.
                </p>
              </section>
            </div>
            {/* --- Cover Letter 본문 (아이템 3) --- */}
            <div className="mt-10 grid gap-10 md:grid-cols-5">
              {/* Left */}
              <aside className="md:col-span-2">
                <div className="relative pl-7">
                  <span className="pointer-events-none absolute left-[10px] top-2 bottom-[-120px] w-[1px] bg-gray-500" />
                  <span className="pointer-events-none absolute left-[11px] top-2 h-1.5 w-1.5 -translate-x-1/2 rotate-45 bg-black" />
                  <h3 className="text-[12px] font-bold text-zinc-800">
                    5. 지원동기
                  </h3>
                </div>
              </aside>

              {/* Right */}
              <section className="md:col-span-3 space-y-4">
                <p className="text-[12px] leading-7 text-zinc-800 mb-20">
                  수질측정대행업은 단순한 분석 업무가 아니라, 환경 관리의 기준이
                  되는 신뢰도 높은 데이터를 생산하는 중요한 역할이라고
                  생각합니다. 저는 환경질 측정팀에서 근무하며 시료 채취, 전처리,
                  기기 분석, 데이터 정리 및 보고서 작성까지 전 과정을 직접
                  수행해왔습니다. 특히 분석 과정에서의 작은 오차가 결과의
                  신뢰도를 좌우한다는 점을 알고있고, 절차 준수와 반복 검증을
                  통해 재검률을 줄이며 안정적인 결과를 도출해왔습니다. 입사
                  후에는 경험을 바탕으로 정확하고 객관적인 분석 데이터를
                  제공함은 물론, 장비 관리와 분석 효율 개선에도 적극적으로
                  기여하겠습니다. 책임감과 실행력을 갖춘 인재로서 조직의
                  신뢰도를 높이는 구성원이 되겠습니다.
                </p>
              </section>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
