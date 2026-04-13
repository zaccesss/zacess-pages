// Each line is an HTML string. Empty string renders as a blank spacer line.
export type OutputLine = string

export interface CommandDef {
  description: string
  lines: OutputLine[]
  /** External URL to open after printing lines. mailto: opens in _self, https: in _blank. */
  redirect?: string
  /** Built-in behaviours handled specially in the terminal */
  special?: 'clear' | 'cv' | 'suggest'
}

// ── Shared redirect line builder ───────────────────────────────────────────────
const nav = (path: string): OutputLine[] => [
  `<span class="lbl">opening:</span>  <a href="https://isaacadjei.me${path}" target="_blank" rel="noopener noreferrer">isaacadjei.me${path || '/'}</a>`,
  '<span class="dim">launching in new tab...</span>',
]

export const COMMANDS: Record<string, CommandDef> = {
  help: {
    description: 'show this message',
    lines: [
      '<span class="lbl">navigate  <span class="dim">-- opens isaacadjei.me</span></span>',
      '',
      '  <span class="lbl">whoiszac</span>    --  homepage',
      '  <span class="lbl">about</span>       --  about me',
      '  <span class="lbl">projects</span>    --  engineering work',
      '  <span class="lbl">experience</span>  --  work history',
      '  <span class="lbl">skills</span>      --  technical stack',
      '  <span class="lbl">blog</span>        --  writing and thoughts',
      '  <span class="lbl">contact</span>     --  get in touch',
      '  <span class="lbl">links</span>       --  github, linkedin and more',
      '',
      '<span class="lbl">local</span>',
      '',
      '  <span class="lbl">journey</span>     --  background and story',
      '  <span class="lbl">cv</span>          --  download cv (pdf)',
      '  <span class="lbl">collaborate</span> --  work with me',
      '  <span class="lbl">suggest</span>     --  suggest what i should build here',
      '  <span class="lbl">status</span>      --  site build status',
      '  <span class="lbl">clear</span>       --  clear terminal',
      '  <span class="lbl">help</span>        --  show this message',
      '',
      '<span class="lbl">unlockables  <span class="dim">-- if you know, you know</span></span>',
      '',
      '  <span class="lbl">zac</span>         --  classified',
      '  <span class="lbl">sudo</span>        --  try your luck',
      '  <span class="lbl">whoami</span>      --  good question',
    ],
  },

  // ── Navigation commands (open isaacadjei.me) ───────────────────────────────

  whoiszac: {
    description: 'homepage on isaacadjei.me',
    lines: nav(''),
    redirect: 'https://isaacadjei.me',
  },

  about: {
    description: 'about me on isaacadjei.me',
    lines: nav('/about'),
    redirect: 'https://isaacadjei.me/about',
  },

  projects: {
    description: 'engineering projects on isaacadjei.me',
    lines: nav('/projects'),
    redirect: 'https://isaacadjei.me/projects',
  },

  experience: {
    description: 'work history on isaacadjei.me',
    lines: nav('/experience'),
    redirect: 'https://isaacadjei.me/experience',
  },

  skills: {
    description: 'technical stack on isaacadjei.me',
    lines: nav('/skills'),
    redirect: 'https://isaacadjei.me/skills',
  },

  blog: {
    description: 'writing and thoughts on isaacadjei.me',
    lines: nav('/blog'),
    redirect: 'https://isaacadjei.me/blog',
  },

  contact: {
    description: 'get in touch via isaacadjei.me',
    lines: nav('/contact'),
    redirect: 'https://isaacadjei.me/contact',
  },

  links: {
    description: 'github, linkedin and more via isaacadjei.me',
    lines: nav('/links'),
    redirect: 'https://isaacadjei.me/links',
  },

  // ── Local commands ─────────────────────────────────────────────────────────

  journey: {
    description: 'background and story',
    lines: [
      '<span class="lbl">origin:</span>    Ghana',
      '<span class="lbl">location:</span>  United Kingdom  (arrived 2022)',
      '',
      '<span class="lbl">background:</span>',
      '  Navigated international relocation as a student.',
      '  Built resilience through personal obstacles,',
      '  including partial sight. These experiences shaped',
      '  a problem-solving mindset and engineering discipline.',
      '',
      '<span class="lbl">driving force:</span>',
      '  <span class="arr">-></span>  Engineering as a discipline, not just a career',
      '  <span class="arr">-></span>  Creating tangible solutions from first principles',
      '  <span class="arr">-></span>  Continuous learning and iteration',
      '  <span class="arr">-></span>  Bridging ideas and implementation',
    ],
  },

  cv: {
    description: 'download cv (pdf)',
    lines: [
      '<span class="lbl">curriculum vitae:</span>',
      '',
      '  <span class="arr">-></span>  <a href="/Isaac_Adjei_CV.pdf" download="Isaac_Adjei_CV.pdf">Isaac_Adjei_CV.pdf</a>  <span class="dim">[download]</span>',
      '',
      '<span class="lbl">contents:</span>',
      '  education and qualifications',
      '  technical skills',
      '  work experience',
      '  projects and achievements',
    ],
    special: 'cv',
  },

  collaborate: {
    description: 'work with me',
    lines: [
      '<span class="lbl">collaboration:</span>',
      '',
      '  want to build something together?',
      '',
      '  <span class="arr">-></span>  email:    <a href="mailto:contact@zacess.com?subject=Collaboration">contact@zacess.com</a>',
      '  <span class="arr">-></span>  subject:  <span class="dim">Collaboration -- [your project]</span>',
      '',
      '<span class="lbl">open to:</span>',
      '  <span class="arr">-></span>  internships and placements',
      '  <span class="arr">-></span>  freelance engineering projects',
      '  <span class="arr">-></span>  open source contributions',
      '  <span class="arr">-></span>  hardware and software projects',
      '',
      '<span class="dim">opening mail client...</span>',
    ],
    redirect: 'mailto:contact@zacess.com?subject=Collaboration',
  },

  suggest: {
    description: 'suggest what i should build here',
    lines: [],
    special: 'suggest',
  },

  status: {
    description: 'site build status',
    lines: [
      '<span class="lbl">system:</span>   ZacessOS v2.0-beta',
      '<span class="lbl">build:</span>    zacess.com -- in progress',
      '',
      '<span class="lbl">current state:</span>',
      '  this terminal is the live placeholder',
      '  while zacess.com is being rebuilt.',
      '',
      '<span class="lbl">ready now:</span>',
      '  <span class="arr">-></span>  main site  <span class="dim">(try: whoiszac)</span>',
      '  <span class="arr">-></span>  cv available  <span class="dim">(try: cv)</span>',
      '  <span class="arr">-></span>  get in touch  <span class="dim">(try: contact)</span>',
      '',
      '<span class="lbl">coming soon:</span>',
      '  <span class="arr">-></span>  full zacess.com experience',
      '  <span class="arr">-></span>  interactive projects showcase',
      '  <span class="arr">-></span>  something cool -- run: suggest',
    ],
  },

  clear: {
    description: 'clear terminal',
    lines: [],
    special: 'clear',
  },

  // ── Easter eggs ────────────────────────────────────────────────────────────

  whoami: {
    description: 'who are you?',
    lines: [
      '<span class="lbl">you are:</span>  a visitor on zacess.com',
      '',
      '  curious enough to type whoami in a terminal.',
      '  that already says something.',
      '',
      '<span class="dim">  (try: whoiszac if you meant to ask about me)</span>',
    ],
  },

  sudo: {
    description: '',
    lines: [
      '<span class="err">bash: sudo: permission denied</span>',
      '<span class="dim">nice try though.</span>',
    ],
  },

  zac: {
    description: '',
    lines: [
      '<span class="lbl">access granted:</span>  zac mode activated',
      '',
      '  you found the secret command.',
      '',
      '<span class="lbl">classified intel:</span>',
      '  <span class="arr">-></span>  partial sight. full speed.',
      '  <span class="arr">-></span>  built a terminal site instead of a normal one.',
      '  <span class="arr">-></span>  once debugged hardware at 2am with just a multimeter.',
      '  <span class="arr">-></span>  currently running on coffee and curiosity.',
      '',
      '<span class="dim">  [end of classified file]</span>',
    ],
  },
}
