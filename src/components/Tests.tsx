import { vectors } from '../content';
import { LockIcon } from './icons';

const cols = 'md:grid-cols-[1fr,1.5fr,1.5fr]';
const th = 'font-mono text-[11px] uppercase tracking-[0.14em] text-mute';
const mobileLabel = 'mb-1 block font-mono text-[10.5px] uppercase tracking-[0.14em] text-mute md:hidden';

export default function Tests() {
  return (
    <section id="tests" className="border-t border-white/[0.04]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
        <p className="eyebrow">Tests</p>
        <h2 className="h2 mt-4 max-w-3xl">What chrome throws at your defenses</h2>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-mute">
          The same moves a malicious admin or a compromised bot would make. Run against your configuration, not your community.
        </p>

        <div className="mt-14 overflow-hidden rounded-2xl border border-line" role="table" aria-label="Attack vectors chrome simulates">
          <div className={`hidden bg-white/[0.02] md:grid md:gap-8 md:px-7 md:py-4 ${cols}`} role="row">
            <div className={th} role="columnheader">Vector</div>
            <div className={th} role="columnheader">What chrome simulates</div>
            <div className={th} role="columnheader">What your protection should do</div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {vectors.map((v) => (
              <div key={v.vector} className={`grid gap-3 px-5 py-6 sm:px-7 md:gap-8 ${cols}`} role="row">
                <div className="font-display text-lg font-bold tracking-tight md:text-[17px]" role="cell">{v.vector}</div>
                <div className="text-[15px] leading-relaxed text-paper/85" role="cell">
                  <span className={mobileLabel}>Simulates</span>
                  {v.simulates}
                </div>
                <div className="text-[15px] leading-relaxed text-mute" role="cell">
                  <span className={mobileLabel}>Should</span>
                  {v.should}
                </div>
              </div>
            ))}
            <div className="grid gap-3 px-5 py-6 sm:px-7 md:grid-cols-[1fr,3fr] md:gap-8" role="row">
              <div className="font-display text-lg font-bold tracking-tight text-mute md:text-[17px]" role="cell">and more</div>
              <div className="text-[15px] leading-relaxed text-mute" role="cell">
                Vanity URL hijacks, emoji and sticker wipes, server setting tampering, audit-log noise. New vectors ship as real attacks change.
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-mute">
          <LockIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <span>
            Destructive vectors run in dry-run or reversible mode by default. In live mode, chrome acts only on sacrificial channels, roles and
            webhooks it creates for the drill, and restores everything when the run ends.
          </span>
        </p>
      </div>
    </section>
  );
}
