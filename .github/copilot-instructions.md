Project: MA1805-portfolio (p5.js sketches)

High-level intent
- This repository is a collection of small p5.js sketches (student portfolio). Each top-level folder (e.g. `00 Test`, `01 Drawing`, `02 Variables`) is an independent sketch with its own `index.html`, `sketch.js`, `style.css`, and a `libraries/` folder containing `p5.min.js` and `p5.sound.min.js`.

What an AI coding agent should know (quick)
- The app is static: open `index.html` in a browser (or use a static server like `http-server`) to run a sketch. There is no build step, package manager, or backend.
- Each sketch uses global p5.js functions (setup, draw, createCanvas, etc.). Files are plain JavaScript (ES6 target set in `jsconfig.json`).
- The repository relies on the user's local VS Code p5 extension types (see `jsconfig.json` includes). Don't attempt to alter that path.

Key files and examples
- Example sketch entry: `02 Variables/sketch.js` — uses global `setup()`/`draw()` and creates an 800×800 canvas. Refer to it when generating new sketches or matching style.
- Example HTML entry: `01 Drawing/index.html` — links `libraries/p5.min.js`, `libraries/p5.sound.min.js`, and the page script (e.g., `sketch.js`). Maintain this pattern when adding new folders.
- Per-folder `jsconfig.json` is configured to target ES6 and include local JS files and p5 typings from the user environment. Keep this format when adding project-level JS configuration.

Conventions and patterns
- One-folder-per-sketch: add a new folder named with a zero-padded index and a short title (e.g., `03 Animation/`) containing `index.html`, `sketch.js`, `style.css`, and `libraries/` if external libs are required.
- Use global variables and p5 lifecycle functions rather than module exports — these sketches expect the global p5 runtime.
- Avoid changing the `libraries/` contents; instead, add new lightweight helper files in the sketch folder (e.g., `helpers.js`) and reference them from `index.html` after p5 scripts.

Running and debugging notes
- To preview a sketch during development, open the folder's `index.html` directly in a browser. For features blocked by file:// restrictions, run a simple static server in the repo root, for example using Python or npm `http-server` (not included):
  - Python 3: `python3 -m http.server 8000` and open `http://localhost:8000/02%20Variables/`
- In VS Code, the `jsconfig.json` includes a p5 typing path that points into an extension. If p5 autocompletion or types are missing, check the user's extension path in `jsconfig.json` rather than changing it in the repo.

When editing or adding code
- Keep sketches small and self-contained. Use clear variable names (the project currently mixes short names like `i` and longer names like `body_x`). Prefer explicit comments for animation math — existing sketches include inline comments showing how oscillation formulas are computed.
- If adding new files, update that sketch's `index.html` to preserve load order: first `libraries/p5.min.js`, then `libraries/p5.sound.min.js` (if needed), then helper scripts, then `sketch.js`.

Do not change
- Do not alter `jsconfig.json` include paths that reference the developer's local VS Code extension — those are personal environment settings.

Examples to copy/use
- Minimal index.html pattern (follow this structure when adding a new sketch):
  - include `libraries/p5.min.js`
  - include `libraries/p5.sound.min.js` (only if sound used)
  - include `sketch.js`

If you need more context
- Inspect `02 Variables/sketch.js` to see a typical canvas size, animation loop, and naming style used across the portfolio.

If anything here is unclear or you need me to include more examples (e.g., how to add an assets folder, or a small test harness), tell me which areas to expand and I'll update this file.
