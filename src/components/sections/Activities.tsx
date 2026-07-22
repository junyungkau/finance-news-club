"use client";

import { useState } from "react";
import {
  Newspaper,
  GraduationCap,
  BookOpen,
  MessageCircle,
  Users,
  Swords,
  Briefcase,
  PieChart,
  Repeat,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

interface Activity {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
}

const TABS = [
  {
    key: "read",
    label: "읽기 Read",
    pill: "bg-brand-500",
    ring: "ring-brand-500",
    items: [
      {
        icon: Newspaper,
        title: "Market Briefing",
        subtitle: "경제·금융 시사 브리핑",
        description:
          "한 주간의 주요 경제·금융 뉴스를 함께 읽고, 금리·환율·물가 등 자주 듣는 경제 용어를 쉽게 이해하며, 경제 이슈가 우리 생활과 금융시장에 어떤 영향을 주는지 함께 이야기합니다.",
      },
      {
        icon: GraduationCap,
        title: "Finance Basics",
        subtitle: "금융 기초 클래스",
        description:
          "예·적금, 주식, ETF, 펀드 등 금융상품의 기초를 배우고, 자산관리와 투자의 기본 개념을 이해하며, 대학생에게 필요한 실생활 금융 상식을 알아봅니다.",
      },
      {
        icon: BookOpen,
        title: "Finance Book Talk",
        subtitle: "금융 북토크",
        description:
          "쉽고 흥미로운 경제·금융 도서를 함께 읽고, 인상 깊었던 내용과 생각을 자유롭게 공유하며, 책 속 내용을 실제 경제 이슈와 연결해 봅니다.",
      },
    ] as Activity[],
  },
  {
    key: "think",
    label: "생각하기 Think",
    pill: "bg-brand-400",
    ring: "ring-brand-400",
    items: [
      {
        icon: MessageCircle,
        title: "Economy Discussion",
        subtitle: "경제 토론",
        description:
          "한 주간의 경제 이슈 중 하나를 선정해 자유롭게 의견을 나누고, 서로 다른 관점에서 문제를 바라보며 논리적으로 생각을 정리하는 힘을 기릅니다.",
      },
      {
        icon: Users,
        title: "Mock Investment Meeting",
        subtitle: "모의 투자 회의",
        description:
          "실제 투자 회의처럼 종목이나 산업을 분석하고 팀원들과 투자 아이디어를 발표·검토하며, 데이터에 기반한 의사결정 과정을 경험합니다.",
      },
      {
        icon: Swords,
        title: "CURRENT Debate",
        subtitle: "커런트 디베이트",
        description:
          "금리, 환율, 정책 등 찬반이 나뉘는 경제 이슈를 주제로 찬성과 반대 입장에서 치열하게 토론하며, 근거를 갖춘 논리적 사고력을 키웁니다.",
      },
    ] as Activity[],
  },
  {
    key: "grow",
    label: "성장하기 Grow",
    pill: "bg-accent-500",
    ring: "ring-accent-500",
    items: [
      {
        icon: Briefcase,
        title: "Asset Management Project",
        subtitle: "자산관리 프로젝트",
        description:
          "가상의 자산을 직접 운용해보며 분산투자, 리스크 관리 등 자산관리 전략을 세우고, 정기적으로 성과를 점검하며 투자 감각을 익힙니다.",
      },
      {
        icon: PieChart,
        title: "Portfolio Design",
        subtitle: "나만의 포트폴리오 만들기",
        description:
          "자신의 투자 성향과 목표를 파악해 나만의 포트폴리오를 직접 설계하고, 근거를 바탕으로 자산 배분 전략을 완성해봅니다.",
      },
      {
        icon: Repeat,
        title: "Finance Routine",
        subtitle: "금융 루틴 만들기",
        description:
          "가계부 작성, 지출 관리, 저축 습관 등 일상 속에서 실천할 수 있는 나만의 금융 루틴을 만들어보고 꾸준히 관리하는 방법을 배웁니다.",
      },
    ] as Activity[],
  },
];

export function Activities() {
  const [active, setActive] = useState(0);
  const tab = TABS[active];

  return (
    <section id="activities" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            activities
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Read <span className="text-brand-500">→</span> Think{" "}
            <span className="text-brand-500">→</span> Grow
          </h2>
        </AnimatedSection>

        <div className="mt-10 flex flex-wrap gap-3">
          {TABS.map((t, i) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors",
                active === i
                  ? cn(t.pill, "text-white")
                  : "border-2 border-ink/15 text-ink/70 hover:border-ink/30"
              )}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {tab.items.map(({ icon: Icon, title, subtitle, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-ink/10 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <div
                className={cn(
                  "inline-flex h-12 w-12 items-center justify-center rounded-full text-white",
                  tab.pill
                )}
              >
                <Icon size={22} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-lg font-bold text-ink">
                {title}
              </h3>
              <p className="mt-1 text-sm font-semibold text-brand-500">{subtitle}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink/65">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
