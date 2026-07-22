"use client";

import { useState, type FormEvent } from "react";
import { Sparkle, CircleCheck } from "lucide-react";

const INTERESTS = [
  "시사 브리핑",
  "금융 스터디",
  "북토크",
  "경제 토론",
  "모의 투자",
  "자산관리 프로젝트",
];

const GRADES = ["1학년", "2학년", "3학년", "4학년", "휴학생", "기타"];

const MAX_INTRO_LENGTH = 500;

export function Apply() {
  const [intro, setIntro] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleInterest = (item: string) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="apply" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-100 px-4 py-1.5 text-xs font-semibold text-brand-600">
          <Sparkle size={13} className="fill-brand-500 text-brand-500" />
          6기 모집중
        </div>
        <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Current 6기 <span className="text-brand-500">지원하기</span>
        </h2>

        {submitted ? (
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-white px-8 py-16 text-center shadow-sm">
            <CircleCheck size={44} strokeWidth={1.5} className="text-brand-500" />
            <p className="font-[family-name:var(--font-display)] text-xl font-bold text-ink">
              지원서가 제출되었습니다
            </p>
            <p className="max-w-sm text-sm text-ink/60">
              Current에 관심을 가져주셔서 감사합니다. 검토 후 기재해주신
              연락처로 안내드리겠습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 rounded-3xl bg-white p-8 shadow-sm sm:p-10">
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="이름" htmlFor="name">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="홍길동"
                    className={inputClass}
                  />
                </Field>
                <Field label="이메일" htmlFor="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </Field>
                <Field label="연락처" htmlFor="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    className={inputClass}
                  />
                </Field>
                <Field label="학교" htmlFor="school">
                  <input
                    id="school"
                    name="school"
                    type="text"
                    required
                    placeholder="OO대학교"
                    className={inputClass}
                  />
                </Field>
                <Field label="학과·전공" htmlFor="major">
                  <input
                    id="major"
                    name="major"
                    type="text"
                    required
                    placeholder="경영학과"
                    className={inputClass}
                  />
                </Field>
                <Field label="학년" htmlFor="grade">
                  <select id="grade" name="grade" required className={inputClass} defaultValue="">
                    <option value="" disabled>
                      선택해주세요
                    </option>
                    {GRADES.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">관심 분야</p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {INTERESTS.map((item) => {
                    const checked = interests.includes(item);
                    return (
                      <label
                        key={item}
                        className={`flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-sm transition-colors ${
                          checked
                            ? "border-brand-500 bg-brand-50 text-brand-600"
                            : "border-ink/15 text-ink/70 hover:border-ink/30"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-brand-500"
                          checked={checked}
                          onChange={() => toggleInterest(item)}
                        />
                        {item}
                      </label>
                    );
                  })}
                </div>
              </div>

              <Field label="자기소개 및 지원 동기" htmlFor="intro">
                <textarea
                  id="intro"
                  name="intro"
                  required
                  rows={6}
                  maxLength={MAX_INTRO_LENGTH}
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                  placeholder="Current에 지원하게 된 이유와 본인을 자유롭게 소개해주세요."
                  className={`${inputClass} resize-none`}
                />
                <p className="mt-1.5 text-right text-xs text-ink/40">
                  {intro.length} / {MAX_INTRO_LENGTH}
                </p>
              </Field>
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-ink py-4 text-sm font-semibold text-cream transition-transform hover:scale-[1.01]"
            >
              지원서 제출하기
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-ink/15 bg-cream/40 px-4 py-3 text-sm text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-brand-500 focus:bg-white";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
