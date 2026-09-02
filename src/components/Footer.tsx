export default function Footer() {
  return (
    <footer className="border-t border-line/70 px-5 py-8 text-[13px] text-fg-dim sm:px-8">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-3">
        <span>© {new Date().getFullYear()} Pengran Chen</span>
        <a
          href="mailto:chenpengran0315@gmail.com"
          className="hover:text-fg transition-colors"
        >
          chenpengran0315@gmail.com
        </a>
      </div>
    </footer>
  );
}
