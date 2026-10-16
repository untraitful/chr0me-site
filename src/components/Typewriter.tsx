import { useEffect, useState } from 'react';

/** Types each line, holds, deletes, moves on. Reduced motion shows the first line still. */
export default function Typewriter({ lines }: { lines: string[] }) {
  const [reduce] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [i, setI] = useState(0);
  const [n, setN] = useState(reduce ? lines[0].length : 0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const line = lines[i];
    let delay = deleting ? 18 : 45;
    if (!deleting && n === line.length) delay = 1800;
    const t = window.setTimeout(() => {
      if (!deleting && n === line.length) setDeleting(true);
      else if (deleting && n === 0) {
        setDeleting(false);
        setI((i + 1) % lines.length);
      } else setN(n + (deleting ? -1 : 1));
    }, delay);
    return () => window.clearTimeout(t);
  }, [n, deleting, i, lines, reduce]);

  return (
    <p className="font-mono text-[12px] text-mute sm:text-[13px]" aria-live="off">
      <span className="text-steel">drill › </span>
      <span className="text-paper/80">{lines[i].slice(0, n)}</span>
      <span className="ml-0.5 inline-block h-[1.05em] w-[7px] translate-y-[2px] bg-paper/70" style={{ animation: 'blink 1s step-end infinite' }} />
    </p>
  );
}
