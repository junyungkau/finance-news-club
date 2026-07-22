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
}

const TABS = [
  {
    key: "read",
    label: "읽기 Read",
    pill: "bg-brand-500",
    ring: "ring-brand-500",
    items: [
      { icon: Newspaper, title: "Market Briefing", subtitle: "경제·금융 시사 브리핑" },
      { icon: GraduationCap, title: "Finance Basics", subtitle: "금융 기초 클래스" },
      { icon: BookOpen, title: "Finance Book Talk", subtitle: "금융 북토크" },
    ] as Activity[],
  },
  {
    key: "think",
    label: "생각하기 Think",
    pill: "bg-brand-400",
    ring: "ring-brand-400",
    items: [
      { icon: MessageCircle, title: "Economy Discussion", subtitle: "경제 토론" },
      { icon: Users, title: "Mock Investment Meeting", subtitle: "모의 투자 회의" },
      { icon: Swords, title: "CURRENT Debate", subtitle: "커런트 디베이트" },
    ] as Activity[],
  },
  {
    key: "grow",
    label: "성장하기 Grow",
    pill: "bg-accent-500",
    ring: "ring-accent-500",
    items: [
      { icon: Briefcase, title: "Asset Management Project", subtitle: "자산관리 프로젝트" },
      { icon: PieChart, title: "Portfolio Design", subtitle: "나만의 포트폴리오 만들기" },
      { icon: Repeat, title: "Finance Routine", subtitle: "금융 루틴 만들기" },
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
          {tab.items.map(({ icon: Icon, title, subtitle }) => (
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
              <p className="mt-1 text-sm text-ink/60">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
