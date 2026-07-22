import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const PHOTOS = [
  {
    gen: "1기",
    image: "/images/activities/read-market-briefing.jpg",
    position: "col-start-1 row-start-1",
  },
  {
    gen: "2기",
    image: "/images/activities/night-film.jpg",
    position: "col-start-2 col-span-2 row-start-1 row-span-2",
  },
  {
    gen: "3기",
    image: "/images/activities/think-debate.jpg",
    position: "col-start-4 row-start-1",
  },
  {
    gen: "4기",
    image: "/images/activities/grow-portfolio.jpg",
    position: "col-start-1 row-start-2",
  },
  {
    gen: "5기",
    image: "/images/activities/night-quiz.jpg",
    position: "col-start-4 row-start-2",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-500">
            gallery
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            1기 ~ 5기 활동 사진
          </h2>
          <p className="mt-4 max-w-xl text-base text-ink/60">
            지난 5개 기수 동안 Current가 함께 읽고, 생각하고, 성장해온
            순간들
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="mt-12 grid auto-rows-[9rem] grid-cols-4 gap-4 sm:auto-rows-[11rem] md:auto-rows-[13rem]">
            {PHOTOS.map(({ gen, image, position }) => (
              <div
                key={gen}
                className={`relative overflow-hidden rounded-2xl ${position}`}
              >
                <Image
                  src={image}
                  alt={`Current ${gen} 활동 사진`}
                  fill
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-brand-500 px-2 text-xs font-bold text-white shadow-sm">
                  {gen}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
