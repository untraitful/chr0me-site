import type { ReactNode } from 'react';

function FeatureCard({ title, body, children }: { title: string; body: string; children: ReactNode }) {
  return (
    <article className="card flex min-w-0 flex-col rounded-2xl border border-line p-6 sm:p-8">
      <div className="inset rounded-xl border border-line p-4">{children}</div>
      <h3 className="mt-7 font-display text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-mute">{body}</p>
    </article>
  );
}

function Line({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="min-w-0 truncate">{left}</span>
      <span className="shrink-0">{right}</span>
    </div>
  );
}

function Tag({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span className={`rounded border px-1.5 py-0.5 text-[10.5px] ${accent ? 'border-accent/40 text-accent' : 'border-line text-mute'}`}>
      {children}
    </span>
  );
}

const weeks = ['ok', 'ok', 'ok', 'ok', 'regression', 'ok', 'ok', 'next'] as const;

export default function Features() {
  return (
    <section className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <p className="eyebrow">Guardrails</p>
        <h2 className="h2 mt-4 max-w-3xl">What it takes care of</h2>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          <FeatureCard
            title="Scoped to your server only"
            body="chrome refuses to act anywhere it wasn't authorized. No authorization, no drill. The check runs before every action, not once at install."
          >
            <div className="space-y-2 font-mono text-[12px] leading-relaxed">
              <Line
                left={<span className="text-mute">guild 1042·8817 <span className="text-paper">Northwind Labs</span></span>}
                right={<span className="text-emerald-400">authorized</span>}
              />
              <Line
                left={<span className="text-mute">guild 7730·2194 <span className="text-paper">unknown</span></span>}
                right={<span className="text-rose-400">refused</span>}
              />
              <div className="border-t border-line pt-3 text-mute">› no authorization on record. no action taken.</div>
            </div>
          </FeatureCard>

          <FeatureCard
            title="Reversible by design"
            body="Every action is simulated or auto-reverted. When the run ends, your server is exactly how you left it."
          >
            <div className="space-y-2 font-mono text-[12px] text-paper">
              <Line left="#drill-canary-03 deleted" right={<Tag>restored 0.8s</Tag>} />
              <Line left="@drill-target banned" right={<Tag>unbanned 1.1s</Tag>} />
              <Line left={'role "staff" → admin'} right={<Tag accent>dry-run</Tag>} />
            </div>
          </FeatureCard>

          <FeatureCard
            title="A log for every drill"
            body="Timestamped results posted to a channel you choose. What ran, what responded, and how long it took."
          >
            <div className="flex items-center gap-2 font-mono text-[11px] text-mute">
              <span className="text-paper">#drill-log</span>
              <span>·</span>
              <span>today 03:00:14</span>
            </div>
            <div className="mt-3 space-y-1.5 font-mono text-[12px] text-paper">
              <Line left="mass-channel-delete" right={<span className="text-emerald-400">held · 0.4s</span>} />
              <Line left="webhook-spam" right={<span className="text-emerald-400">held · 0.3s</span>} />
              <Line left="mention-abuse" right={<span className="text-rose-400">missed</span>} />
            </div>
          </FeatureCard>

          <FeatureCard
            title="Scheduled drills"
            body="Re-run the whole suite on a cadence. When a config change or bot update weakens a defense, you find out that week."
          >
            <div className="flex items-center justify-between gap-3 font-mono text-[11px]">
              <span className="text-paper">full suite</span>
              <span className="text-mute">every mon · 03:00 utc</span>
            </div>
            <div className="mt-4 grid grid-cols-8 gap-1.5" aria-hidden="true">
              {weeks.map((w, i) => (
                <span
                  key={i}
                  className={`h-7 rounded ${
                    w === 'regression' ? 'bg-rose-400/60' : w === 'next' ? 'border border-dashed border-accent/50' : 'bg-white/[0.08]'
                  }`}
                />
              ))}
            </div>
            <div className="mt-3 flex justify-between gap-2 font-mono text-[11px] text-mute">
              <span>wk 34</span>
              <span className="text-rose-400">regression · wk 38</span>
              <span>next</span>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
