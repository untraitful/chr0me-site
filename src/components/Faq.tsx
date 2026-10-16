import { useId, useState } from 'react';
import { faqs, type FaqPart } from '../content';
import { PlusIcon } from './icons';

function Answer({ parts }: { parts: FaqPart[] }) {
  return (
    <>
      {parts.map((p, i) =>
        typeof p === 'string' ? (
          p
        ) : (
          <code key={i} className="rounded border border-line bg-black px-1.5 py-0.5 font-mono text-[12.5px] text-paper">
            {p.code}
          </code>
        ),
      )}
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: FaqPart[] }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div>
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-center justify-between gap-6 py-6 text-left"
        >
          <span className="font-display text-lg font-bold tracking-tight sm:text-xl">{q}</span>
          <PlusIcon className={`h-4 w-4 shrink-0 text-mute transition-transform duration-300 ${open ? 'rotate-45' : ''}`} />
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden" aria-hidden={!open}>
          <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-mute">
            <Answer parts={a} />
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="border-t border-white/[0.04]">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-[1fr,1.6fr] lg:gap-16">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[1] tracking-[-0.03em] sm:text-5xl">Straight answers.</h2>
          <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-mute">
            If it isn't covered here, the docs go deeper on scope, permissions and logging.
          </p>
        </div>
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {faqs.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
