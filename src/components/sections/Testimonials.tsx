import { Plus } from "lucide-react";




const TESTIMONIALS = [
  {
    name: "김○○",
    major: "경영학과",
    paragraphs: [
      "처음에는 경제 뉴스를 보면 용어부터 어려워서 그냥 넘기곤 했는데, Current에서는 금리나 환율 같은 내용도 쉽게 풀어서 이야기해줘서 뉴스가 조금씩 이해되기 시작했어요.",
      "무엇보다 혼자 공부할 때는 오래 못 갔는데, 매주 함께 경제 이슈를 읽고 토론하다 보니 자연스럽게 금융에 관심이 생겼습니다.",
      "요즘은 아침에 경제 기사 하나 읽는 게 습관이 되었고, 소비할 때도 예전보다 한 번 더 생각하게 되었어요.",
    ],
  },
  {
    name: "이○○",
    major: "컴퓨터공학과",
    paragraphs: [
      "경제학 전공이 아니라 처음에는 걱정을 많이 했는데 오히려 전공자가 아니어도 충분히 따라갈 수 있도록 진행돼서 부담 없이 참여할 수 있었습니다.",
      "모의 투자회의에서는 '어떤 종목을 사야 한다'보다 왜 그렇게 생각하는지를 이야기하는 시간이 많아서 사고하는 방식 자체가 많이 바뀌었습니다.",
      "금융을 단순히 투자로만 보지 않고, 세상을 이해하는 하나의 언어라는 걸 알게 된 시간이었습니다.",
    ],
  },
  {
    name: "박○○",
    major: "국제통상학과",
    paragraphs: [
      "Current에서 가장 좋았던 활동은 Market Briefing이었습니다.",
      "평소에는 그냥 지나쳤던 경제 뉴스들이 실제 우리 생활이나 주식시장, 소비에 어떤 영향을 주는지 함께 이야기하다 보니 경제 흐름이 조금씩 연결되기 시작했습니다.",
      "토론도 서로 의견을 존중하는 분위기라 질문하기 편했고, 다양한 시각을 들을 수 있어서 생각의 폭이 넓어졌습니다.",
    ],
  },
  {
    name: "최○○",
    major: "산업공학과",
    paragraphs: [
      "금융권 취업에 관심이 있어서 지원했는데, 현직자와의 대화(Current Night)가 정말 도움이 많이 됐습니다.",
      "은행, 증권사, 자산운용사에서 실제 어떤 일을 하는지 들을 수 있었고, 인턴 준비나 자격증, 취업 과정까지 현실적인 이야기를 들을 수 있어서 앞으로의 방향을 잡는 데 큰 도움이 되었습니다.",
      "취업뿐 아니라 금융 공부를 어떻게 꾸준히 해야 하는지도 배울 수 있었어요.",
    ],
  },
  {
    name: "정○○",
    major: "국어국문학과",
    paragraphs: [
      "사실 처음에는 금융이라고 해서 딱딱할 줄 알았는데 생각보다 분위기가 정말 편했습니다.",
      "북토크, 금융 퀴즈, 영화 감상처럼 재미있는 활동도 많았고, 서로 모르는 걸 부담 없이 질문할 수 있는 분위기라 꾸준히 참여할 수 있었습니다.",
      "지금은 적금, ETF, 소비 습관 같은 것들을 스스로 찾아보게 되었고, 돈을 관리하는 방법에 대해 자신감이 생겼습니다.",
    ],
  },
  {
    name: "윤○○",
    major: "경제학과",
    paragraphs: [
      "전공 수업에서는 이론 위주로 배우는 경우가 많았는데 Current에서는 실제 경제 이슈를 함께 이야기하고 토론하면서 배운 내용을 현실과 연결할 수 있었습니다.",
      "특히 다양한 전공 친구들과 의견을 나누면서 '경제를 바라보는 시각'이 사람마다 다르다는 걸 느꼈고, 저 역시 훨씬 넓은 관점에서 생각하게 되었습니다.",
    ],
  },
];

export function Testimonials() {
  const highlights = ["아침에 경제 기사 하나 읽는 게 습관이 되었어요.", "금융이 세상을 이해하는 하나의 언어라는 걸 알게 됐어요.", "다양한 시각을 들으며 생각의 폭이 넓어졌어요.", "현실적인 이야기를 듣고 앞으로의 방향을 잡았어요.", "모르는 걸 부담 없이 질문할 수 있었어요.", "전공에서 배운 내용을 현실과 연결할 수 있었어요."];
  return (
    <section id="testimonials" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-semibold text-brand-600">05 / VOICES</p>
        <h2 className="mt-4 text-3xl font-bold sm:text-4xl">함께한 사람들의 이야기</h2>
        <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {TESTIMONIALS.map(({name,major,paragraphs},i)=><article key={name} className="border-t border-ink/20 py-7">
            <p className="text-lg font-medium leading-8">{highlights[i]}</p>
            <details className="group mt-4">
              <summary className="flex list-none items-center justify-between py-2 text-sm text-ink/60 [&::-webkit-details-marker]:hidden">후기 전문 <Plus size={16} className="transition-transform group-open:rotate-45" /></summary>
              <div className="mt-4 space-y-3">{paragraphs.map(p=><p key={p} className="text-sm leading-7 text-ink/70">{p}</p>)}</div>
            </details>
            <p className="mt-5 text-sm font-semibold">{name}<span className="ml-3 font-normal text-ink/60">{major}</span></p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
