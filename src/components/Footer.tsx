import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Wordmark small />
          <p className="mt-3 text-sm text-mute">Drills run only where you authorize them.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-mute">
          <a href="#" className="hover:text-paper">Docs</a>
          <a href="#" className="hover:text-paper">Terms</a>
          <a href="#" className="hover:text-paper">Privacy</a>
          <span className="text-white/30">© 2026 chrome</span>
        </div>
      </div>
    </footer>
  );
}
