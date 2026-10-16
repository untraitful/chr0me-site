import { chips, type ChipTone } from '../content';
import AddButton from './AddButton';

const dot: Record<ChipTone, string> = {
  held: 'bg-emerald-400',
  flagged: 'bg-amber-400',
  simulated: 'bg-accent',
  missed: 'bg-rose-400',
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(91,141,214,0.10),transparent_70%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Authorized red-team drills
        </div>

        <h1 className="font-display text-[40px] font-extrabold leading-[0.95] tracking-[-0.035em] min-[400px]:text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
          Attack your own Discord.
          <br />
          <span className="text-mute">Find the gaps first.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-mute sm:text-lg">
          chrome runs authorized stress tests against your antinuke and permissions, then shows you exactly what held.
        </p>

        <div className="mt-10">
          <AddButton />
        </div>
      </div>

      <div className="marquee-mask group overflow-hidden pb-12 motion-reduce:overflow-x-auto md:pb-16">
        <ul className="flex w-max animate-marquee gap-3 px-4 group-hover:[animation-play-state:paused]" aria-label="Example drill results">
          {[0, 1].map((copy) =>
            chips.map((c) => (
              <li
                key={`${copy}-${c.label}`}
                aria-hidden={copy === 1 || undefined}
                className="flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border border-line bg-white/[0.02] px-4 py-2 text-[13px] text-paper"
              >
                <span className={`h-1.5 w-1.5 rounded-full ${dot[c.tone]}`} />
                {c.label}
                <span className="text-white/25">—</span>
                <span className="text-mute">{c.result}</span>
              </li>
            )),
          )}
        </ul>
      </div>
    </section>
  );
}
