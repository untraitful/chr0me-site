import { drillLines, INVITE_URL } from '../content';
import AddButton from './AddButton';
import { ArrowUpRightIcon } from './icons';
import Typewriter from './Typewriter';

const d = (s: number) => ({ '--d': `${s}s` }) as React.CSSProperties;

export default function Hero() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
      <a
        href={INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="chrome-border reveal group mb-9 inline-block rounded-full"
        style={d(0.1)}
      >
        <span className="flex items-center gap-2.5 rounded-full bg-[#0b0b0c] px-4 py-2 font-tech text-[9.5px] uppercase tracking-[0.22em] text-paper/85 transition-colors group-hover:bg-[#141416] sm:text-[10.5px]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
          </span>
          <span className="whitespace-nowrap">
            <span className="hidden sm:inline">Authorized </span>Red-team drills
          </span>
          <span className="h-3 w-px bg-white/20" />
          <span className="flex items-center gap-1 text-paper">
            Join
            <ArrowUpRightIcon className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </span>
      </a>

      <h1 className="font-display text-[42px] font-black leading-[0.95] tracking-[-0.04em] min-[400px]:text-[46px] sm:text-6xl md:text-7xl lg:text-[96px]">
        <span className="chrome-text reveal block pb-1" style={d(0.25)}>
          Attack your own Discord.
        </span>
        <span className="chrome-text-dark reveal block pb-2" style={d(0.45)}>
          Find the gaps first.
        </span>
      </h1>

      <p className="reveal mx-auto mt-7 max-w-xl text-[17px] leading-relaxed text-mute sm:text-lg" style={d(0.65)}>
        chrome runs authorized stress tests against your antinuke and permissions, then shows you exactly what held.
      </p>

      <div className="reveal mt-10" style={d(0.8)}>
        <AddButton />
      </div>

      <div className="reveal mt-10 h-5" style={d(1)}>
        <Typewriter lines={drillLines} />
      </div>
    </section>
  );
}
