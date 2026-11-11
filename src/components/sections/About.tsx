export function About() {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1fr_2fr] md:gap-16">
        <p className="text-xs font-semibold text-brand-600">01 / ABOUT CURRENT</p>
        <div>
          <h2 className="text-2xl font-bold leading-relaxed md:text-4xl">잘 아는 사람들의 모임보다,<br /><span className="text-brand-600">함께 알아가는 모임.</span></h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-ink/70">뉴스 속 금리와 환율이 낯설어도 괜찮습니다. Current는 금융과 시사를 함께 배워가는 대학생 연합 동아리입니다. 기사를 읽고, 질문을 나누고, 배운 내용을 일상에 연결합니다.</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ink/70">전공이나 투자 경험보다 궁금해하는 마음을 중요하게 생각합니다. 스펙을 넘어, 금융을 바라보는 나만의 시야를 넓혀갑니다.</p>
          <div className="mt-8 border-l-2 border-brand-500 pl-5 text-sm leading-7 text-ink/60">돈의 흐름, 세상의 흐름,<br />우리는 CURRENT를 읽습니다.</div>
        </div>
      </div>
    </section>
  );
}
