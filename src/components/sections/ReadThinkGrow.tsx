import Image from "next/image";
import { BookOpen, MessagesSquare, Sprout } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const CARDS = [
  {
    key: "read",
    title: "Read",
    subtitle: "경제·금융 뉴스를 읽습니다",
    description:
      "매주 경제 시사 이슈를 함께 읽고 정리하며, 세상을 읽는 기초 체력을 기릅니다.",
    icon: BookOpen,
    image: "/images/activities/read-market-briefing.jpg",
    accent: "bg-brand-500",
  },
  {
    key: "think",
    title: "Think",
    subtitle: "함께 토론하고 생각합니다",
    description:
      "읽은 내용을 바탕으로 치열하게 토론하며, 나만의 관점과 논리를 만들어갑니다.",
    icon: MessagesSquare,
    image: "/images/activities/think-debate.jpg",
    accent: "bg-brand-400",
  },
  {
    key: "grow",
    title: "Grow",
    subtitle: "직접 경험하며 성장합니다",
    description:
      "자산관리 프로젝트와 포트폴리오 설계로, 이론을 실전 감각으로 바꿉니다.",
    icon: Sprout,
    image: "/images/activities/grow-portfolio.jpg",
    accent: "bg-accent-500",
  },
];

export function ReadThinkGrow() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {CARDS.map(({ key, title, subtitle, description, icon: Icon, image, accent }, i) => (
            <AnimatedSection key={key} delay={i * 0.1}>
              <div className="flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm">
                <div className="relative h-56 w-full">
                  <Image
                    src={image}
                    alt={`${title} 활동 사진`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className={`flex flex-1 flex-col gap-3 px-7 py-8 text-white ${accent}`}>
                  <Icon size={28} strokeWidth={1.5} />
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">
                    {title}
                  </h3>
                  <p className="text-sm font-semibold text-white/90">{subtitle}</p>
                  <p className="text-sm leading-relaxed text-white/80">
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
