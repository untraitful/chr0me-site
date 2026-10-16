import { LogoMark } from './icons';

export default function Logo() {
  return (
    <a href="#" className="group flex items-center gap-2.5" aria-label="chrome">
      <LogoMark className="h-7 w-7 transition-transform duration-500 group-hover:scale-110" />
      <span className="chrome-text font-display text-[22px] font-black tracking-[-0.04em]">chrome</span>
    </a>
  );
}
