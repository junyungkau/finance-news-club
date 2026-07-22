"use client";

import { motion } from "framer-motion";
import {
  PiggyBank,
  Coins,
  DollarSign,
  TrendingUp,
  Banknote,
  LineChart,
} from "lucide-react";

const DECOR_ICONS = [
  { Icon: PiggyBank, top: "12%", left: "58%", size: 120, rotate: -8, opacity: 0.1 },
  { Icon: Coins, top: "58%", left: "78%", size: 90, rotate: 12, opacity: 0.12 },
  { Icon: DollarSign, top: "8%", left: "84%", size: 70, rotate: 6, opacity: 0.14 },
  { Icon: TrendingUp, top: "68%", left: "56%", size: 80, rotate: -6, opacity: 0.1 },
  { Icon: Banknote, top: "38%", left: "88%", size: 100, rotate: -10, opacity: 0.1 },
  { Icon: LineChart, top: "36%", left: "64%", size: 64, rotate: 4, opacity: 0.12 },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Decorative background illustrations */}
      <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
        {DECOR_ICONS.map(({ Icon, top, left, size, rotate, opacity }, i) => (
          <Icon
            key={i}
            style={{
              position: "absolute",
              top,
              left,
              width: size,
              height: size,
              opacity,
              transform: `rotate(${rotate}deg)`,
              color: i % 2 === 0 ? "#C4593A" : "#4A6FA5",
            }}
            strokeWidth={1.25}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-brand-900 px-4 py-1.5 text-xs font-semibold tracking-wide text-brand-100"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-300" />
          2026년 하반기 6기 신규부원 모집
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-8 font-[family-name:var(--font-display)] text-2xl italic text-ink/50 md:text-3xl"
        >
          in this economy...
        </motion.p>

        <div className="mt-2 font-[family-name:var(--font-display)] leading-[0.95] tracking-tight">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl font-bold text-ink sm:text-7xl md:text-8xl"
          >
            are you
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-6xl font-bold text-brand-500 sm:text-7xl md:text-8xl"
          >
            financially
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="text-6xl font-bold text-ink sm:text-7xl md:text-8xl"
          >
            ready?
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.34 }}
          className="mt-8 max-w-lg text-base leading-relaxed text-ink/70 md:text-lg"
        >
          금융과 시사를 함께 배워가는 대학생 연합 금융시사 동아리 Current
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#apply"
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-cream transition-transform hover:scale-105"
          >
            지원하기
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-ink px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            동아리 알아보기
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 border-t border-ink/10 pt-6"
        >
          <p className="font-[family-name:var(--font-display)] text-base italic text-ink/60 md:text-lg">
            돈의 흐름, 세상의 흐름, 우리는 CURRENT를 읽습니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
