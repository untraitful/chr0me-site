import type { ReactNode } from 'react';
import { INVITE_URL } from '../content';
import { DiscordIcon } from './icons';

type Size = 'sm' | 'md' | 'lg';

const sizes: Record<Size, string> = {
  sm: 'gap-2 px-4 py-2 text-sm',
  md: 'gap-2.5 px-6 py-3.5 text-[15px]',
  lg: 'gap-2.5 px-7 py-4 text-[15px]',
};

export default function AddButton({ size = 'md', children = 'Add to Discord' }: { size?: Size; children?: ReactNode }) {
  return (
    <a
      href={INVITE_URL}
      className={`inline-flex items-center justify-center rounded-full bg-paper font-semibold text-ink transition hover:bg-white ${sizes[size]}`}
    >
      <DiscordIcon className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} />
      {children}
    </a>
  );
}
