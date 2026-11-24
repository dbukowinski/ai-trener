# AI Coach in ChatGPT

ChatGPT doesn't load skills the way Claude does, so the package works here as a **Project with instructions and one knowledge file**.

## Installation (about 5 minutes)

1. Download **`dist/ai-coach-full.md`** from the repository (the whole skill in one file).
2. In ChatGPT create a new **Project** (e.g. "AI Coach").
3. In the project settings, paste the contents of [`project-instructions.en.md`](project-instructions.en.md) as instructions.
4. Add `ai-coach-full.md` to the project files.
5. (Optional) Connect apps: your watch or an intermediary (e.g. Tredict is in the ChatGPT app directory), Google Drive. Details and limits: `skill/ai-coach/references/platforms.md` §4.
6. Write in the project: **"Install AI Coach"**.

## Limits worth knowing

- **Saving files.** ChatGPT usually doesn't save files to your Drive or disk. The coach will give you the project files (`AI Coach/…`) as blocks to copy — save them yourself (e.g. in Obsidian) and every now and then upload current versions of `00 Start.md`, `Runner profile.md`, `Season.md`, `Methodology.md` and the `Knowledge Loop/` files to the project files.
- **Plans to the watch.** Your own MCP servers with write access require developer mode; scope depends on the account plan (as of 2026-11, full write access is described for Business / Enterprise / Edu plans). If writing doesn't work, the coach gives you workouts to enter in the watch or intermediary app.
- **The full version with automatic saving** works best in Claude with a local folder or Google Drive, or in Claude Code / Codex on your computer (`README.en.md`, routes A–C).
