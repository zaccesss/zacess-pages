# zacess-pages

Terminal-style portfolio landing page for Isaac (Zac) Adjei.

Live at: [zacess.com](https://zacess.com)

---

## What it is

A single-file portfolio built to feel like a real terminal session. No frameworks, no build step — just HTML, CSS, and vanilla JS. Serves as a professional placeholder while the full portfolio is in development.

## How to use it

Type commands into the input at the bottom. The terminal accepts:

| command | description |
|---|---|
| `whoiszac` | who i am and what i do |
| `journey` | background and story |
| `projects` | featured engineering work |
| `skills` | technical stack |
| `experience` | work history |
| `contact` | how to reach me |
| `links` | github, linkedin, and more |
| `cv` | download cv (pdf) |
| `status` | portfolio build status |
| `clear` | clear terminal |
| `help` | show all commands |

**Keyboard shortcuts:**
- `↑` / `↓` — cycle through command history
- `Tab` — autocomplete (completes if one match, lists options if multiple)
- `Enter` — run command
- Click anywhere on the page to focus the input

**Window buttons:**
- Red — dims the terminal (close)
- Yellow — collapses/restores the content area (minimise)
- Green — fullscreen mode, hides the banner (maximise)

## Files

```
index.html   — everything (HTML, CSS, JS in one file)
giphy.gif    — banner animation
cv.pdf       — cv download (add your own)
```

## Updating content

All command output is defined in the `commands` object inside the `<script>` tag in `index.html`. Each command is an array of HTML strings, one per output line. An empty string `''` creates a blank spacer line.

To add a new command:

```js
mycommand: [
  '<span class="lbl">label:</span>  value',
  '',
  '  <span class="arr">&#x2192;</span>  list item',
],
```

Then add it to the `help` command array and it will appear in the help list and tab completion automatically.

## Deployment

Hosted on cloudfare Pages. Push to `main` and it deploys.

To add a custom domain, create a `CNAME` file in the repo root:

```
zacess.com
```

---

Built by Isaac (Zac) Adjei — [contact@zacess.com](mailto:contact@zacess.com)
