import Image from "next/image";
import { Star, Mic, Clapperboard, Brain } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CARDS = [
  {
    title: "현직자와의 대화",
    description: "금융권 현직자를 초청해 생생한 커리어 이야기를 듣습니다.",
    icon: Mic,
    image: "/images/retouched/night-talk-v2.webp",
    accent: "bg-brand-500",
  },
  {
    title: "금융 영화·다큐 감상",
    description: "금융을 다룬 영화와 다큐멘터리를 함께 보고 이야기 나눕니다.",
    icon: Clapperboard,
    image: "/images/activities/night-film.jpg",
    accent: "bg-brand-400",
  },
  {
    title: "금융 퀴즈",
    description: "그동안 배운 금융 지식을 퀴즈로 재미있게 복습합니다.",
    icon: Brain,
    image: "/images/retouched/think-v2.webp",
    accent: "bg-accent-500",
  },
];

export function CurrentNight() {
  return (
    <section id="current-night" className="border-y border-ink/10 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-transparent px-4 py-1.5 text-xs font-semibold text-brand-600">
            <Star size={13} className="text-brand-600" />
            04 / AFTER HOURS
          </div>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Current Night
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            정기 활동 외에도 Current만의 특별한 활동들이 준비되어 있습니다
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CARDS.map(({ title, description, icon: Icon, image }, i) => (
            <AnimatedSection key={title} delay={i * 0.1}>
              <div className="flex h-full flex-col">
                <div className="relative h-52 w-full">
                  <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="rounded-lg object-cover" />
                </div>
                <div className="flex flex-1 flex-col gap-3 border-b border-ink/20 py-6 text-ink">
                  <Icon size={22} strokeWidth={1.5} className="text-brand-600" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold">
                    {title}
                  </h3>
                  <p className="text-sm leading-7 text-ink/65">
                    {description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
