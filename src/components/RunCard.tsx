import { useEffect, useState } from 'react';
import { CheckIcon, SpinnerIcon } from './icons';

const TOTAL = 7;
const STEP_MS = 900;
const HOLD_MS = 4000;

function usePrefersReducedMotion() {
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  return reduce;
}

function Check() {
  return (
    <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent">
      <CheckIcon className="h-3 w-3" />
    </span>
  );
}

function Row({ icon, label, meta, dim = false }: { icon: React.ReactNode; label: string; meta: string; dim?: boolean }) {
  return (
    <li className="flex items-center justify-between gap-4 px-1 py-2.5">
      <span className="flex items-center gap-3 text-[15px]">
        <span className="grid h-5 w-5 place-items-center">{icon}</span>
        <span className={dim ? 'text-mute' : undefined}>{label}</span>
      </span>
      <span className="font-mono text-xs text-mute">{meta}</span>
    </li>
  );
}

export default function RunCard() {
  const reduce = usePrefersReducedMotion();
  const [elapsed, setElapsed] = useState(reduce ? 42.6 : 0);
  const done = elapsed >= (TOTAL * STEP_MS * 6.6) / 1000;
  const vectors = Math.min(TOTAL, Math.floor(elapsed / ((STEP_MS * 6.6) / 1000)));

  useEffect(() => {
    if (reduce) return;
    let start = performance.now();
    const id = window.setInterval(() => {
      const ms = performance.now() - start;
      const runMs = TOTAL * STEP_MS;
      if (ms > runMs + HOLD_MS) start = performance.now();
      // Time is shown sped up so the mock reads like a real run.
      setElapsed((Math.min(ms, runMs) * 6.6) / 1000);
    }, 100);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <div className="card rounded-2xl border border-line p-5 sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            {!done && <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs text-mute">attack run</span>
        </div>
        <span className="font-mono text-xs text-mute">
          run_<span className="text-paper">7f3a9c</span>
        </span>
      </div>

      <div className="inset mt-5 rounded-xl border border-line p-4">
        <dl className="grid grid-cols-[auto,minmax(0,1fr)] gap-x-6 gap-y-2.5 font-mono text-[12.5px]">
          <dt className="text-mute">target</dt>
          <dd className="truncate text-paper">guild · Northwind Labs</dd>
          <dt className="text-mute">scenario</dt>
          <dd className="truncate text-paper">antinuke / mass-channel-delete</dd>
          <dt className="text-mute">mode</dt>
          <dd className="text-paper">
            dry-run <span className="text-mute">· reversible</span>
          </dd>
          <dt className="text-mute">elapsed</dt>
          <dd className="tabular-nums text-paper">{elapsed.toFixed(1)}s</dd>
        </dl>
      </div>

      <ul className="mt-5 space-y-1">
        <Row icon={<Check />} label="Authorized" meta="/chrome auth" />
        <Row
          icon={done ? <Check /> : <SpinnerIcon className="h-4 w-4 animate-spin text-accent" />}
          label={done ? 'Run complete' : 'Running…'}
          meta={`${vectors} / ${TOTAL} vectors`}
        />
        <Row
          icon={done ? <Check /> : <span className="h-2 w-2 rounded-full border border-white/25" />}
          label="Report posted"
          meta={done ? '#drill-log' : 'pending'}
          dim={!done}
        />
      </ul>
    </div>
  );
}
