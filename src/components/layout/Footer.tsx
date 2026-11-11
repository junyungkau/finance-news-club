export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 text-center">
        <span className="font-[family-name:var(--font-display)] text-lg font-bold text-ink">
          CURRENT
        </span>
        <p className="text-xs text-ink/45">
          대학생 연합 금융시사 동아리 Current
        </p>
        <p className="text-xs leading-relaxed text-ink/60">
          활동 사진은 초상권 보호와 가독성을 위해 인물 및 일부 자료 화면을 AI로 보정했습니다.
        </p>
      </div>
    </footer>
  );
}
