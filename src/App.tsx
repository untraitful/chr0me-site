import Background from './components/Background';
import Hero from './components/Hero';
import Logo from './components/Logo';

export default function App() {
  return (
    <div className="flex min-h-[100svh] flex-col">
      <Background />
      <header className="reveal mx-auto flex w-full max-w-6xl items-center px-5 pt-6 sm:px-8 sm:pt-8" style={{ '--d': '0s' } as React.CSSProperties}>
        <Logo />
      </header>
      <Hero />
      <footer className="mx-auto w-full max-w-6xl px-5 pb-6 text-center font-mono text-[11px] text-steel sm:px-8">
        © 2026 chrome<span className="hidden sm:inline"> · drills run only where you authorize them</span>
      </footer>
    </div>
  );
}
