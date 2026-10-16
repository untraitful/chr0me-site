import { steps } from '../content';
import RunCard from './RunCard';

export default function HowItWorks() {
  return (
    <section id="how" className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="h2 mt-4">
              One authorization.
              <br />
              Every drill after that.
            </h2>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-mute">
              Authorize it once. After that, every drill runs and reports itself.
            </p>
          </div>
          <RunCard />
        </div>

        <ol className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="card flex flex-col rounded-2xl border border-line p-6">
              <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-6 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-mute">{s.body}</p>
              <code className={`cmd mt-6 self-start ${s.muted ? 'text-mute' : ''}`}>{s.cmd}</code>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
