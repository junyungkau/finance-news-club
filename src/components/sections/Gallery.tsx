import Image from "next/image";

const PHOTOS = [
  {gen:"1기", image:"/images/retouched/briefing-v2.webp", caption:"경제 뉴스를 함께 읽는 시간", wide:true},
  {gen:"2기", image:"/images/retouched/book-talk-v2.webp", caption:"책에서 시작해 서로의 생각으로", wide:false},
  {gen:"3기", image:"/images/gallery/gen-3.jpg", caption:"질문하고, 기록하고, 나누는 순간", wide:false},
  {gen:"4기", image:"/images/retouched/read-v2.webp", caption:"시장의 흐름을 살펴보는 브리핑", wide:false},
  {gen:"5기", image:"/images/retouched/grow-v2.webp", caption:"배운 내용을 직접 적용해보는 시간", wide:false},
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div><p className="text-xs font-semibold text-brand-600">03 / FIELD NOTES</p><h2 className="mt-4 text-3xl font-bold sm:text-4xl">우리의 활동 기록</h2></div>
          <p className="max-w-sm text-sm leading-7 text-ink/60">1기부터 5기까지,<br />함께 읽고 생각하며 쌓아온 장면들.</p>
        </div>
        <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2">
          {PHOTOS.map(({gen,image,caption,wide})=><figure key={gen} className={wide?"md:col-span-2":""}>
            <div className={wide?"relative aspect-[4/3] overflow-hidden rounded-lg md:aspect-[2/1]":"relative aspect-[4/3] overflow-hidden rounded-lg"}>
              <Image src={image} alt={`Current ${gen} · ${caption}`} fill sizes={wide?"(max-width: 1152px) 100vw, 1152px":"(max-width: 768px) 100vw, 560px"} className="object-cover object-top" />
            </div>
            <figcaption className="mt-4 flex items-start gap-5 border-t border-ink/15 pt-4 text-sm"><span className="shrink-0 font-semibold text-brand-600">{gen}</span><span className="text-ink/70">{caption}</span></figcaption>
          </figure>)}
        </div>
      </div>
    </section>
  );
}
