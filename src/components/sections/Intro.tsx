import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PAIN_POINTS = [
  "자격증과 학점은 잘 따고 있는데, 정작 뉴스는 이해하기 어려울 때",
  "면접에서 시사 및 경제 질문이 나오면 벌써 막막할 때",
  "금융 공부를 시작하고는 싶지만 무엇부터 배워야 할지 모를 때",
  "금리·환율·주식 이야기가 나오면 괜히 어렵게 느껴질 때",
];

export function Intro() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <AnimatedSection>
          <p className="text-base leading-relaxed text-ink/70 md:text-lg">
            안녕하세요, Current는 금융과 시사를 함께 배워가는 대학생 연합
            금융시사 동아리입니다.
          </p>
          <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-ink md:text-3xl">
            대학생활 중 한 번쯤은 이런 경험이 있지 않으신가요?
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {PAIN_POINTS.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm"
              >
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brand-500" />
                <p className="text-sm leading-relaxed text-ink/75 md:text-base">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-14 border-t border-ink/10 pt-10">
            <p className="text-lg text-ink/55 md:text-xl">
              Current는 금융을 잘 알고, 잘 하는 사람들의 모임이 아닙니다.
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl font-bold leading-snug tracking-tight text-ink md:text-3xl">
              금융을 처음 접하는 대학생들이{" "}
              <span className="text-brand-500">
                스펙이 아닌 금융에 대한 시야
              </span>
              를 넓혀갈 수 있는 동아리입니다.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
