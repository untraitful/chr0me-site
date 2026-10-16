import { useEffect, useState } from 'react';
import AddButton from './AddButton';
import Wordmark from './Wordmark';
import { MenuIcon } from './icons';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#tests', label: 'Tests' },
  { href: '#faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b transition-colors duration-300 ${scrolled ? 'border-line' : 'border-transparent'}`}>
      <div className="absolute inset-0 -z-10 bg-ink/70 backdrop-blur-xl" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Wordmark />

        <div className="hidden items-center gap-8 text-sm text-mute md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-paper">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <AddButton size="sm">
            <span className="hidden sm:inline">Add to Discord</span>
            <span className="sm:hidden">Add</span>
          </AddButton>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line text-mute md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <MenuIcon className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-ink/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2 text-[15px]">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-mute hover:text-paper">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
