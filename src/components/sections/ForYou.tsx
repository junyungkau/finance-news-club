import { Check } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const APPLY_CHECKS = [
  "경제·금융 뉴스에 관심이 많은 분",
  "다양한 사람들과 토론하고 소통하는 것을 즐기는 분",
  "새로운 지식을 배우고 꾸준히 성장하고 싶은 분",
  "책임감을 가지고 정기 활동에 참여할 수 있는 분",
  "자신의 생각을 논리적으로 표현하고 싶은 분",
  "금융 지식이 없어도 배우고자 하는 열정이 있는 분",
];

const FIT_CHECKS = [
  "혼자보다 함께 성장하는 것을 좋아하는 분",
  "낯선 주제도 끝까지 파고드는 것을 즐기는 분",
  "피드백을 주고받는 데 거리낌이 없는 분",
  "장기적인 커리어를 위해 지금 투자하고 싶은 분",
];

function ChecklistCard({
  title,
  items,
  accent,
}: {
  title: string;
  items: string[];
  accent: string;
}) {
  return (
    <div className="h-full rounded-3xl bg-white p-8 shadow-sm md:p-10">
      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
        {title}
      </h3>
      <ul className="mt-7 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${accent}`}
            >
              <Check size={13} strokeWidth={3} className="text-white" />
            </span>
            <span className="text-sm leading-relaxed text-ink/75 md:text-base">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ForYou() {
  return (
    <section id="for-you" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            for you
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Current에는 <span className="text-brand-500">이런 분들</span>이
            지원하시면 좋습니다
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <ChecklistCard
              title="이런 분들이 지원하시면 좋습니다"
              items={APPLY_CHECKS}
              accent="bg-brand-500"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <ChecklistCard
              title="이런 분이라면 Current와 잘 맞습니다"
              items={FIT_CHECKS}
              accent="bg-accent-500"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
