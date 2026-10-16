import AddButton from './AddButton';

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/[0.04]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_50%_100%,rgba(91,141,214,0.10),transparent_70%)]" />
      <div className="mx-auto max-w-4xl px-4 py-28 text-center sm:px-6 md:py-40">
        <h2 className="font-display text-[40px] font-extrabold leading-[0.98] tracking-[-0.035em] sm:text-6xl md:text-7xl">
          Add chrome and run your first drill today.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[17px] leading-relaxed text-mute">
          Two commands to authorize and run. A full report a few minutes later.
        </p>
        <div className="mt-10">
          <AddButton size="lg" />
        </div>
      </div>
    </section>
  );
}
