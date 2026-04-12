<!-- Header -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=120&section=header&text=zacess-pages&fontSize=38&fontAlignY=32&fontColor=ffffff&animation=bounce" />
</p>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=20&pause=1200&color=06ffa5&center=true&vCenter=true&width=600&height=50&lines=Terminal-style+portfolio+landing+page;Single+file.+No+frameworks.+No+build+step.;HTML+%7C+CSS+%7C+Vanilla+JS;Live+at+zacess.com" />
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
  <img src="https://img.shields.io/badge/deployment-Cloudflare_Pages-orange?style=flat&logo=cloudflare" />
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

**zacess-pages** is a terminal-style portfolio landing page built to feel like a real CLI session in the browser. It serves as a professional placeholder while the full portfolio is in development.

The entire site is a **single HTML file** - no frameworks, no build tools, no dependencies beyond a Google Font. Everything runs in the browser with vanilla HTML, CSS, and JavaScript.

The design philosophy: **authenticity over aesthetics**. Every interaction - the boot sequence, the blinking cursor, the line-by-line output, the command history - is designed to behave like a real terminal, not a styled webpage pretending to be one.

---

<a id="live-demo"></a>
## Live Demo

<div align="center">

| Feature | Detail |
|---|---|
| Hosting | Cloudflare Pages |
| Custom domain | zacess.com / www.zacess.com |
| Auto-deploy | On push to `main` |
| Load time | < 1s (single file, no JS bundles) |

</div>

---

<a id="features"></a>
## Features

### Behaviour
- **Boot sequence** - ZacessOS system lines appear on load before the terminal is ready
- **Line-by-line output** - responses print with a 22ms delay per line, 90ms execution pause before any output
- **Command history** - Up / Down arrow keys cycle through previously run commands
- **Tab autocomplete** - completes if one match, lists all matches if multiple
- **Click-to-focus** - clicking anywhere on the page focuses the input, no mouse targeting needed
- **XSS-safe echo** - user input is HTML-escaped before being echoed back to the terminal

### Visual
- **Blinking block cursor** (`▊`) - real input is hidden off-screen, text mirrors into a visible span
- **Three-layer colour scheme** - cyan prompt, green command, grey output
- **Subtle glow** - yellow border shadow gives the terminal window depth without being flashy
- **Custom scrollbar** - styled to match the terminal colour palette
- **Responsive** - works on mobile with a collapsed layout at 768px

### Window controls
| Button | Colour | Behaviour |
|---|---|---|
| Close | Red | Dims and disables the terminal |
| Minimise | Yellow | Collapses / restores the content area |
| Maximise | Green | Full viewport, hides banner, removes border |

---

<a id="commands"></a>
## Commands

Type any of the following into the terminal input:

| Command | Description |
|---|---|
| `whoiszac` | Who I am and what I do |
| `journey` | Background and story |
| `projects` | Featured engineering work |
| `skills` | Technical stack |
| `experience` | Work history |
| `contact` | How to reach me |
| `links` | GitHub, LinkedIn, and more |
| `cv` | Download CV (PDF) |
| `status` | Portfolio build status |
| `clear` | Clear the terminal |
| `help` | Show all commands |

**Keyboard shortcuts:**

| Key | Action |
|---|---|
| `Enter` | Run command |
| `↑` / `↓` | Cycle through command history |
| `Tab` | Autocomplete - completes or lists matches |
| Click anywhere | Focus the input |

---

<a id="tech-stack"></a>
## Tech Stack

<div align="center">

| <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="65" /> | <img src="https://techstack-generator.vercel.app/js-icon.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" width="65" /> | <img src="https://techstack-generator.vercel.app/github-icon.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" width="65" /> | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cloudflare/cloudflare-original.svg" width="65" /> |
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **HTML5** | **CSS3** | **JavaScript** | **Git** | **GitHub** | **VS Code** | **Cloudflare** |

</div>

- **No frameworks** - zero React, Vue, or any other library
- **No build step** - open `index.html` in a browser and it works
- **No package.json** - nothing to install
- **Font** - JetBrains Mono via Google Fonts (preconnected for performance)
- **Deployment** - Cloudflare Pages, auto-deploys on push to `main`

---

<a id="file-structure"></a>
## File Structure

```
zacess-pages/
│
├── index.html      # entire site - HTML, CSS, and JS in one file
├── giphy.gif       # banner animation (under construction)
├── cv.pdf          # cv download target (replace with your own)
└── README.md       # this file
```

Everything lives in `index.html`. The structure inside is:

```
index.html
├── <head>
│   ├── meta tags + SEO
│   ├── Google Fonts (JetBrains Mono)
│   └── <style> - all CSS, organised by section
└── <body>
    ├── .banner - under construction notice + GIF
    ├── .terminal-wrapper
    │   ├── .terminal-titlebar - title + window buttons
    │   ├── .terminal-content - output area (built by JS)
    │   └── .terminal-input-area - prompt + mirror + hidden input
    └── <script>
        ├── DOM refs + state
        ├── Helper functions
        ├── commands{} - all command data as HTML string arrays
        ├── runCommand() - async command runner with delay
        ├── Input event listeners (keydown, input)
        ├── Window button handlers
        └── boot() - startup sequence
```

---

<a id="updating-content"></a>
## Updating Content

All command output lives in the `commands` object inside the `<script>` tag in `index.html`. Each command is an array of HTML strings - one string per output line. An empty string `''` inserts a blank spacer line.

### Editing an existing command

Find the command by name in the `commands` object and edit its lines array:

```js
whoiszac: [
  '<span class="lbl">user:</span>      Isaac (Zac) Adjei',
  '<span class="lbl">role:</span>      Electronic Engineering & CS Student',
  // add or edit lines here
],
```

### Adding a new command

**Step 1** - add the command to the `commands` object:

```js
mycommand: [
  '<span class="lbl">section title:</span>',
  '',
  '  <span class="arr">&#x2192;</span>  first item',
  '  <span class="arr">&#x2192;</span>  second item',
],
```

**Step 2** - add it to the `help` command array so it appears in the help list:

```js
help: [
  ...
  '  <span class="lbl">mycommand</span>   &mdash;  short description',
],
```

Tab completion picks it up automatically - no extra wiring needed.

### CSS classes available in output

| Class | Colour | Use for |
|---|---|---|
| `lbl` | Cyan | Labels and section headers |
| `arr` | Cyan | Arrow list items (`→`) |
| `err` | Red | Error messages |
| `dim` | Grey | Hints and secondary info |

---

<a id="deployment"></a>
## Deployment

Hosted on **Cloudflare Pages**, connected to this GitHub repo. Every push to `main` triggers an automatic deployment.

### Setup (already done)

1. Cloudflare Pages → connect GitHub repo → set branch to `main`
2. Build command: *(none)*
3. Build output directory: *(none)*
4. Custom domains: `zacess.com`, `www.zacess.com`

### To deploy an update

```bash
git add index.html
git commit -m "your message"
git push
```

Cloudflare picks it up within ~30 seconds.

---

<a id="roadmap"></a>
## Roadmap

| Status | Item |
|---|---|
| ✅ Done | Terminal interface with boot sequence |
| ✅ Done | Command history, tab autocomplete |
| ✅ Done | Blinking cursor, line-by-line output |
| ✅ Done | Cloudflare Pages deployment + custom domain |
| 🔄 In progress | Full portfolio v2 rebuild |
| 🔜 Planned | Project showcase pages |
| 🔜 Planned | Case studies and writeups |
| 🔜 Planned | Interactive project demos |

---

<!-- Footer -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=80&section=footer" />
</p>

<p align="center">
  Built by <a href="https://zacess.com"><strong>Isaac (Zac) Adjei</strong></a> -
  <a href="mailto:contact@zacess.com">contact@zacess.com</a>
</p>
