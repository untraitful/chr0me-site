import { chips, type ChipTone } from '../content';
import AddButton from './AddButton';
import { ArrowDownIcon } from './icons';

const dot: Record<ChipTone, string> = {
  held: 'bg-emerald-400',
  flagged: 'bg-amber-400',
  simulated: 'bg-accent',
  missed: 'bg-rose-400',
};

export default function Hero() {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(91,141,214,0.10),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 sm:px-6 sm:pt-28 md:pb-24 md:pt-36">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-mute">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Authorized red-team drills
        </div>

        <h1 className="font-display text-[40px] font-extrabold leading-[0.95] tracking-[-0.035em] min-[400px]:text-[44px] sm:text-6xl md:text-7xl lg:text-[88px]">
          Attack your own Discord.
          <br />
          <span className="text-mute">Find the gaps first.</span>
        </h1>

        <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-mute sm:text-lg">
          chrome runs authorized stress tests against your antinuke and permissions, then shows you exactly what held.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <AddButton />
          <a
            href="#how"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-[15px] font-medium text-paper transition hover:border-white/30 hover:bg-white/[0.03]"
          >
            See how it works
            <ArrowDownIcon className="h-4 w-4 text-mute" />
          </a>
        </div>
      </div>

      <div className="marquee-mask group overflow-hidden pb-20 motion-reduce:overflow-x-auto md:pb-28">
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
