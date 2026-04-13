<!-- Header -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=header&text=zacess-pages&fontSize=38&fontAlignY=32&fontColor=ffffff&animation=bounce" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=20&pause=1200&color=06ffa5&center=true&vCenter=true&width=650&height=50&lines=Terminal-style+landing+page+for+zacess.com;Built+with+Next.js+14+%7C+TypeScript+%7C+Tailwind+CSS;Interactive+CLI+in+the+browser;Live+at+zacess.com" />
</p>

<p align="center">
  <a href="https://zacess.com">
    <img src="https://img.shields.io/badge/Live-zacess.com-000000?style=for-the-badge&logo=googlechrome&logoColor=06ffa5">
  </a>
  <a href="https://github.com/zaccesss/zacess-pages">
    <img src="https://img.shields.io/badge/Repo-zacess--pages-ffff00?style=for-the-badge&logo=github&logoColor=black">
  </a>
  <a href="mailto:contact@zacess.com">
    <img src="https://img.shields.io/badge/Contact-contact@zacess.com-ff6f61?style=for-the-badge&logo=gmail&logoColor=white">
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/deployment-Vercel-000000?style=flat&logo=vercel&logoColor=white" />
  <img src="https://img.shields.io/badge/DNS-Cloudflare-f48024?style=flat&logo=cloudflare&logoColor=white" />
  <img src="https://img.shields.io/badge/status-live-brightgreen?style=flat" />
</p>

---

<p align="center">
  <b>Quick navigation:</b><br/>
  <a href="#overview">Overview</a> •
  <a href="#live-demo">Live Demo</a> •
  <a href="#features">Features</a> •
  <a href="#commands">Commands</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#file-structure">File Structure</a> •
  <a href="#updating-content">Updating Content</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#roadmap">Roadmap</a>
</p>

---

<a id="overview"></a>
## Overview

**zacess-pages** is a terminal-style browser interface that serves as the landing page for [zacess.com](https://zacess.com) while the full site is being rebuilt. It behaves like a real CLI session — boot sequence, blinking cursor, line-by-line output, command history, tab autocomplete — everything modelled after a genuine terminal, not a styled webpage pretending to be one.

Commands navigate to pages on the main portfolio at [isaacadjei.me](https://isaacadjei.me) or run local interactions like downloading a CV, opening a mail client, or collecting suggestions. A daily motivation quote is pulled from the ZenQuotes API and displayed at the bottom.

Built as a proper **Next.js 14 App Router** application with TypeScript, Tailwind CSS and server-side API routes.

---

<a id="live-demo"></a>
## Live Demo

<div align="center">

| Feature | Detail |
|---|---|
| Hosting | Vercel |
| DNS | Cloudflare |
| Custom domain | [zacess.com](https://zacess.com) / [www.zacess.com](https://www.zacess.com) |
| Auto-deploy | On push to `main` |
| Quote API | ZenQuotes, proxied via `/api/quote`, refreshes every 30 min |

</div>

---

<a id="features"></a>
## Features

### Terminal behaviour
- **Boot sequence** - ZacessOS system lines appear on load with staggered delays before the prompt is ready
- **Line-by-line output** - responses print with a 20ms delay per line, 90ms execution pause before any output starts
- **Command history** - Up / Down arrow keys cycle through previously entered commands
- **Tab autocomplete** - completes on a single match, lists all matches when there are multiple
- **Suggest mode** - interactive prompt that collects a suggestion and fires a pre-filled mailto link
- **Clear preserves boot** - `clear` wipes only post-boot output, keeping the system lines intact
- **XSS-safe echo** - user input is HTML-escaped before being echoed back into the terminal

### Visual
- **Blinking block cursor** (`▊`) - real input is hidden off-screen, text mirrors into a visible span
- **Three-layer colour scheme** - cyan prompt, green commands, amber output
- **Subtle terminal glow** - yellow border shadow gives the window depth
- **Custom scrollbar** - styled to match the terminal palette
- **Dark / light mode** - toggle in the top right, terminal colours never change regardless of theme
- **Responsive** - mobile layout with a tap-to-type hint on touch devices

### Window controls
| Button | Colour | Behaviour |
|---|---|---|
| Close | Red | Collapses to a restore button |
| Minimise | Yellow | Collapses content, keeps titlebar visible |
| Maximise | Green | Full viewport overlay |
| `+` | Yellow | Opens a fresh terminal session |

---

<a id="commands"></a>
## Commands

Type any of the following into the terminal input:

### Navigate -- opens isaacadjei.me

| Command | Description |
|---|---|
| `whoiszac` | Homepage |
| `about` | About me |
| `projects` | Engineering work |
| `experience` | Work history |
| `skills` | Technical stack |
| `blog` | Writing and thoughts |
| `contact` | Get in touch |
| `links` | GitHub, LinkedIn and more |

### Local

| Command | Description |
|---|---|
| `journey` | Background and story |
| `cv` | Download CV (PDF) |
| `collaborate` | Work with me -- opens mail client |
| `suggest` | Suggest what to build next |
| `status` | Site build status |
| `clear` | Clear the terminal |
| `help` | Show all commands |

### Unlockables -- if you know, you know

| Command | Description |
|---|---|
| `zac` | Classified |
| `sudo` | Try your luck |
| `whoami` | Good question |

**Keyboard shortcuts:**

| Key | Action |
|---|---|
| `Enter` | Run command |
| `↑` / `↓` | Cycle through command history |
| `Tab` | Autocomplete |
| Click anywhere | Focus the input |

---

<a id="tech-stack"></a>
## Tech Stack

<div align="center">

| <img src="https://techstack-generator.vercel.app/react-icon.svg" width="65" /> | <img src="https://techstack-generator.vercel.app/ts-icon.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" width="65" /> | <img src="https://techstack-generator.vercel.app/github-icon.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="65" /> |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **React 18** | **TypeScript** | **Next.js 14** | **Tailwind CSS** | **GitHub** | **Git** | **VS Code** |

</div>

<div align="center">

| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" width="65" /> |
|:---:|:---:|
| **Vercel** | **Cloudflare** |

</div>

- **Framework** - Next.js 14 App Router with TypeScript
- **Styling** - Tailwind CSS v3, CSS custom properties for the terminal palette
- **Font** - JetBrains Mono via `next/font/google`
- **Theming** - next-themes, dark mode by default
- **Quote API** - ZenQuotes, proxied through a Next.js API route to avoid CORS
- **Deployment** - Vercel, auto-deploys on push to `main`
- **DNS** - Cloudflare

---

<a id="file-structure"></a>
## File Structure

```
zacess-pages/
│
├── app/
│   ├── api/
│   │   └── quote/
│   │       └── route.ts        # ZenQuotes proxy API route
│   ├── globals.css             # terminal CSS variables and all terminal classes
│   ├── layout.tsx              # root layout, font, metadata, ThemeProvider
│   └── page.tsx                # page composition (Banner + Terminal + QuoteBar)
│
├── components/
│   ├── Banner.tsx              # under construction banner with image and links
│   ├── QuoteBar.tsx            # daily motivation quote with auto-refresh
│   ├── Terminal.tsx            # full terminal -- boot, input, history, commands
│   ├── ThemeProvider.tsx       # next-themes wrapper
│   └── ThemeToggle.tsx         # fixed top-right light/dark toggle
│
├── lib/
│   └── commands.ts             # all command definitions and output lines
│
├── public/
│   ├── Isaac_Adjei_CV.pdf      # CV download target
│   ├── underconstruction.jpg   # banner image
│   └── logo.png                # favicon
│
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

<a id="updating-content"></a>
## Updating Content

All command output lives in `lib/commands.ts`. Each command is a `CommandDef` with a `lines` array of HTML strings -- one string per output line. An empty string `''` inserts a blank spacer line.

### Editing an existing command

Find the command by name and edit its `lines` array:

```ts
journey: {
  description: 'background and story',
  lines: [
    '<span class="lbl">origin:</span>    Ghana',
    '<span class="lbl">location:</span>  United Kingdom  (arrived 2022)',
    // add or edit lines here
  ],
},
```

### Adding a new command

**Step 1** - add the command to `COMMANDS` in `lib/commands.ts`:

```ts
mycommand: {
  description: 'short description',
  lines: [
    '<span class="lbl">section title:</span>',
    '',
    '  <span class="arr">-></span>  first item',
    '  <span class="arr">-></span>  second item',
  ],
},
```

**Step 2** - add it to the `help` command lines so it appears in the help list:

```ts
'  <span class="lbl">mycommand</span>   --  short description',
```

Tab completion picks it up automatically.

### CSS classes available in output

| Class | Colour | Use for |
|---|---|---|
| `lbl` | Cyan | Labels and section headers |
| `arr` | Cyan | Arrow list items |
| `err` | Red | Error messages |
| `dim` | Grey | Hints and secondary info |

### Adding a redirect command

```ts
mypage: {
  description: 'opens mypage.com',
  lines: [
    '<span class="lbl">opening:</span>  <a href="https://mypage.com" target="_blank">mypage.com</a>',
    '<span class="dim">launching in new tab...</span>',
  ],
  redirect: 'https://mypage.com',
},
```

---

<a id="deployment"></a>
## Deployment

Hosted on **Vercel**, connected to this GitHub repo. Every push to `main` triggers an automatic deployment. DNS is managed through **Cloudflare**.

### Setup (already done)

1. Vercel -- import GitHub repo -- Next.js auto-detected, no build config needed
2. Custom domains added: `zacess.com`, `www.zacess.com`
3. Cloudflare DNS updated to point to Vercel

### To deploy an update

```bash
git add .
git commit -m "your message"
git push
```

Vercel picks it up within seconds.

### Environment variables

No environment variables are required. The ZenQuotes API is public and proxied through `/api/quote` with no key needed.

---

<a id="roadmap"></a>
## Roadmap

| Status | Item |
|---|---|
| ✅ Done | Terminal interface with boot sequence |
| ✅ Done | Command history, tab autocomplete |
| ✅ Done | Blinking cursor, line-by-line output |
| ✅ Done | Rebuilt as Next.js 14 App Router |
| ✅ Done | TypeScript, Tailwind CSS, next-themes |
| ✅ Done | ZenQuotes API integration |
| ✅ Done | Mac-style window controls |
| ✅ Done | Mobile support |
| ✅ Done | Favicon, easter egg commands |
| ✅ Done | Vercel deployment + custom domain |
| 🔄 In progress | Full zacess.com experience |
| 🔜 Planned | Interactive projects showcase |
| 🔜 Planned | Case studies and writeups |
| 🔜 Planned | Something cool -- run: suggest |

---

<!-- Footer -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=80&section=footer" />
</p>

<p align="center">
  Built by <a href="https://zacess.com"><strong>Isaac (Zac) Adjei</strong></a> --
  <a href="mailto:contact@zacess.com">contact@zacess.com</a>
</p>
