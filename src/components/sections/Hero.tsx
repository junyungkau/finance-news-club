import Image from "next/image";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[540px] items-end overflow-hidden bg-ink text-white md:min-h-[620px]">
      <Image src="/images/gallery/gen-3.jpg" alt="자료와 노트를 펼쳐 함께 공부하는 Current의 활동 테이블" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/55" />
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-28 md:pb-16">
        <p className="mb-5 text-xs font-medium text-white/80">대학생 연합 금융시사 동아리</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none sm:text-7xl md:text-8xl">CURRENT</h1>
        <p className="mt-7 text-xl font-medium leading-relaxed md:text-3xl">돈의 흐름을 읽고,<br />나의 관점을 만듭니다.</p>
        <div className="mt-9 flex flex-wrap items-center gap-5">
          <a href="#activities" className="inline-flex items-center gap-5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink hover:bg-cream">우리의 활동 <ArrowDownRight size={18} /></a>
          <button type="button" disabled className="cursor-not-allowed rounded-full border border-white/45 px-6 py-3 text-sm text-white/75">지원하기 · 준비 중</button>
        </div>
        <div className="mt-10 flex justify-between border-t border-white/30 pt-4 text-xs text-white/70"><span>Read. Think. Grow.</span><span>함께 읽는 세상의 흐름</span></div>
      </div>
    </section>
  );
}
