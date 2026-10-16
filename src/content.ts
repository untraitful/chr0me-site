// Replace with your bot's OAuth2 invite URL. Every "Add to Discord" button uses it.
export const INVITE_URL = '#';

export type ChipTone = 'held' | 'flagged' | 'simulated' | 'missed';

export const chips: { label: string; result: string; tone: ChipTone }[] = [
  { label: 'Mass channel delete', result: 'blocked', tone: 'held' },
  { label: 'Webhook spam', result: 'caught in 0.3s', tone: 'held' },
  { label: 'Mass ban', result: 'reverted', tone: 'held' },
  { label: 'Permission escalation', result: 'flagged', tone: 'flagged' },
  { label: 'Anti-raid', result: 'triggered', tone: 'held' },
  { label: 'Bot token abuse', result: 'simulated', tone: 'simulated' },
  { label: '@everyone abuse', result: 'missed', tone: 'missed' },
];

export const steps: { title: string; body: string; cmd: string; muted?: boolean }[] = [
  { title: 'Authorize on your server', body: 'Grant a scoped role. chrome only touches servers that opted in.', cmd: '/chrome auth' },
  { title: 'Pick a scenario', body: 'Choose one vector, or run the full drill end to end.', cmd: '/chrome run antinuke' },
  { title: 'Run safely', body: 'chrome simulates the attack with dry-run or reversible actions. Nothing real is lost.', cmd: 'mode: dry-run', muted: true },
  { title: 'Read the report', body: 'See what your protection caught, what it missed, and how fast it moved.', cmd: '/chrome report' },
];

export const vectors: { vector: string; simulates: string; should: string }[] = [
  {
    vector: 'Mass channel delete',
    simulates: 'Rapid deletion of channels and categories at the rate a nuke script uses. Targets only canary channels chrome creates.',
    should: "Detect the burst within seconds, strip the actor's permissions, and restore anything removed.",
  },
  {
    vector: 'Mass ban / kick',
    simulates: 'A burst of ban and kick actions against members you designate as drill targets. Bans are lifted when the run ends.',
    should: 'Rate-limit moderation actions per account and quarantine whoever exceeds the threshold.',
  },
  {
    vector: 'Webhook spam',
    simulates: 'Creates a webhook in a sandbox channel and floods it with messages and embeds.',
    should: 'Delete the webhook, lock the channel, and flag the account that created it.',
  },
  {
    vector: 'Role & permission escalation',
    simulates: 'Attempts to grant Administrator or dangerous permissions to a role, or move a role above its own position.',
    should: "Block or revert the change and remove the actor's elevated roles.",
  },
  {
    vector: 'Anti-raid (join flood)',
    simulates: 'Replays a join-wave pattern: fresh accounts, patterned names, tight cadence. Measured against your join gate.',
    should: 'Trigger lockdown or verification, and hold new joins until the wave passes.',
  },
  {
    vector: 'Compromised-bot behavior',
    simulates: 'Acts like a trusted integration gone rogue: renames the server, edits roles, mass-pings, all from a whitelisted bot.',
    should: 'Treat no single bot as fully trusted. Cap its actions and alert when it steps outside its usual pattern.',
  },
  {
    vector: '@everyone / mention abuse',
    simulates: 'Repeated @everyone, @here and mass user mentions in a sandbox channel.',
    should: 'Delete the messages, time out the sender, and throttle mentions server-wide.',
  },
];

// `code` segments render as inline monospace command labels.
export type FaqPart = string | { code: string };

export const faqs: { q: string; a: FaqPart[] }[] = [
  {
    q: 'Is chrome a nuke bot?',
    a: ['No. chrome only runs on servers that explicitly authorize it, and only the server owner can grant that. Destructive vectors are simulated or reverted automatically, and every action is logged. It exists to test protection, not to get around it.'],
  },
  {
    q: 'Does it actually delete my channels?',
    a: ['No. By default it runs in dry-run mode and records what it would have done. In live mode it creates sacrificial canary channels for the drill and deletes those, so your antinuke sees real events. Your existing channels are never targeted.'],
  },
  {
    q: 'Do I have to authorize it first?',
    a: ['Yes. Adding the bot is not enough. The server owner runs ', { code: '/chrome auth' }, ' and confirms. Until then, chrome will not run a single test. You can revoke at any time and it stops immediately.'],
  },
  {
    q: 'Can I limit which tests run?',
    a: ['Yes. Use ', { code: '/chrome scope' }, ' to allow or exclude individual vectors, pin drills to a sandbox category, and cap how many actions a single run can take.'],
  },
  {
    q: 'Where do the results go?',
    a: ['To a log channel you pick. Each report lists every vector, whether your protection held, missed or was slow, and the response time. ', { code: '/chrome report' }, ' pulls up any past run.'],
  },
  {
    q: 'Will it trip my own antinuke?',
    a: ["That's the point. If your antinuke strips chrome's role or bans it mid-drill, that counts as a catch and goes in the report. Don't whitelist chrome, or you'll be testing nothing."],
  },
  {
    q: 'Can I schedule it?',
    a: ['Yes. Set a daily, weekly or monthly cadence for the full suite or a subset. Scheduled runs use the same scope and logging as manual ones, and flag any vector that held last time but fails now.'],
  },
];
