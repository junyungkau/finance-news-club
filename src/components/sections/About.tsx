import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold lowercase tracking-[0.2em] text-brand-500">
            about current
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            금융, 함께 배우면
            <br />
            <span className="text-brand-500">더 넓은 세상이 보입니다</span>
          </h2>
        </AnimatedSection>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          <AnimatedSection delay={0.1}>
            <p className="text-base leading-relaxed text-ink/70 md:text-lg">
              Current는 금융과 시사를 함께 배워가는 대학생 연합 금융시사
              동아리입니다. 매주 경제 뉴스를 읽고, 함께 토론하고, 직접 자산을
              관리해보며 세상이 돌아가는 흐름을 읽는 눈을 키웁니다.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-base leading-relaxed text-ink/70 md:text-lg">
              단순한 투자 동아리가 아닌, 금융을 배우고 성장하는 동아리입니다.
              읽기(Read)에서 시작해 생각하기(Think)를 거쳐 성장하기(Grow)로
              이어지는 커리큘럼으로, 누구나 금융 문해력을 갖춘 사회인으로
              성장할 수 있도록 돕습니다.
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="mt-16 rounded-3xl bg-accent-100 px-8 py-10 text-center md:px-16 md:py-14">
            <p className="font-[family-name:var(--font-display)] text-2xl italic leading-snug text-accent-700 md:text-3xl">
              &ldquo;돈의 흐름, 세상의 흐름, 우리는 CURRENT를 읽습니다&rdquo;
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
