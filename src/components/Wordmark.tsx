import { LogoMark } from './icons';

export default function Wordmark({ small = false }: { small?: boolean }) {
  return (
    <a href="#top" className="flex items-center gap-2.5" aria-label="chrome home">
      <LogoMark className={`${small ? 'h-4 w-4' : 'h-5 w-5'} text-accent`} />
      <span className={`font-display font-extrabold tracking-tight ${small ? 'text-[17px]' : 'text-[19px]'}`}>chrome</span>
    </a>
  );
}
