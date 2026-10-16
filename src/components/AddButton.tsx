import { INVITE_URL } from '../content';
import { DiscordIcon } from './icons';

export default function AddButton() {
  return (
    <a
      href={INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="chrome-btn inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[15px] font-semibold text-ink"
    >
      <DiscordIcon className="relative z-10 h-5 w-5" />
      <span className="relative z-10">Add to Discord</span>
    </a>
  );
}
