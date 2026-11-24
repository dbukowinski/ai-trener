# AI Coach 🏃‍♂️⛰️

🇵🇱 [Wersja polska](README.md) · 🇬🇧 English

**A personal running coach inside your AI assistant** — for mountain, trail, ultra and road runners.

You run the instructions, the AI walks you through a questionnaire, proposes a methodology **tailored to you** (your favourite coach or a proven module from the package), sets up your training project with evidence-based memory (Knowledge Loop) and sends plans to your watch.

> Status: **test version 0.2.0** (November 2026). Testers wanted — see [TESTING.md](TESTING.md).

## What you get

- **Setup by conversation:** a questionnaire in a few rounds (goal, life, terrain, equipment, health, preferences) → methodology proposal for approval → watch connection → ready project and first plan.
- **A flexible methodology:**
  - you have a favourite coach or method → the AI builds the methodology from their sources (with reliability ratings and a comparison with research),
  - you don't → **mountains:** a module based on the Evoke Endurance / Uphill Athlete school (aerobic base, strength → muscular endurance, descents); **road:** a module based on intensity-distribution research plus your choice of Daniels (VDOT), amateur "Norwegian" sub-threshold, Pfitzinger (marathon) or 80/20.
- **Mountains without mountains:** a mountain plan from the city — treadmill incline, stairs in your building, StairMaster with a pack, repeats on a small hill, descents and gym eccentrics.
- **Plans to your watch via MCP:** COROS (official MCP), Garmin / Suunto / Wahoo / Apple Watch via intermediaries (Tredict, intervals.icu), Polar via TrainingPeaks; manual mode always as a fallback.
- **A project in your vault** (Obsidian, Google Drive or a plain folder): profile, season, methodology, session library, plans, log.
- **Knowledge Loop:** facts from measurements, hypotheses with counter-hypotheses, individual rules, a Sources index, change proposals you approve.

## How it works

```
Questionnaire ──► Methodology (you approve) ──► Watch connected ──► "AI Coach/" project ──► 1–2-week plan to the watch
                                                                          ▲                          │
                                                                          └──── weekly review ◄──────┘
                                                                  (Knowledge Loop: observations → hypotheses → rules)
```

## Installation

Pick one route. In each, finish by writing to the AI: **"Install AI Coach"**.

### A. Claude (web, desktop, mobile) — skill
1. Download [`dist/ai-coach-skill.zip`](dist/ai-coach-skill.zip).
2. In Claude: **Customize → Skills → "+" → Create skill → Upload a skill** and choose the ZIP. Skills require file creation / code execution to be enabled in settings. Details: [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
3. Connect a place for the project in connectors: **Google Drive** (or add a folder in the desktop app) plus your watch or an intermediary (see "Watches" below).
4. Write: "Install AI Coach".

### B. A folder on your computer — Claude Code, Claude Desktop with a folder, Codex
1. `git clone https://github.com/dbukowinski/ai-trener` or download the repository ZIP and unpack it.
2. Open the folder in Claude Code / Codex (or add it in Claude Desktop).
3. Write: "Read START.en.md and install AI Coach".
   The AI asks where to create your project (e.g. your Obsidian vault) — the package stays separate, so it's easy to update later.

### C. Google Drive
1. Unpack the repository and upload the whole folder to Google Drive.
2. In Claude (or another assistant with a Drive connector) write: "Find START.en.md from the ai-trener package on my Google Drive and follow it".

### D. ChatGPT
A Project with instructions + one knowledge file: [chatgpt/README.en.md](chatgpt/README.en.md). Note: ChatGPT usually can't save files, so you run the project in copy-paste mode.

## Watches (as of 2026-11)

| Watch | Plan onto the watch |
|---|---|
| COROS | official COROS MCP (`https://mcp.coros.com/mcp`) |
| Garmin | Tredict (official MCP) or intervals.icu (free, community MCP) |
| Suunto | Tredict or intervals.icu (SuuntoPlus Guides) |
| Polar | TrainingPeaks → Polar Flow (official integration); TrainingPeaks MCPs are unofficial only |
| Wahoo, Apple Watch | Tredict (Apple Watch via Watchletic), intervals.icu |
| other / none | manual mode |

Details, addresses, setup in Claude, Claude Code and ChatGPT: [skill/ai-coach/references/platforms.md](skill/ai-coach/references/platforms.md).

## Examples

- [Trail from the city](examples/trail-from-the-city.md) — 50 km / +2400 m with no mountains nearby, COROS.
- [Half marathon](examples/road-half-marathon.md) — Daniels variant, Garmin via intervals.icu.

## Repository layout

```
README.md / README.en.md         ← Polish / English overview
START.md / START.en.md           ← instructions for the AI (install / work)
AGENTS.md, CLAUDE.md             ← context for agents (Codex, Claude Code)
skill/ai-trener/                 ← Polish skill
skill/ai-coach/                  ← English skill (same content)
  SKILL.md                       ← coach router and principles
  references/                    ← installation, questionnaire, methodology selection, planning, platforms, workout format, Knowledge Loop, safety
  methodology/mountain/          ← mountain module (principles, sessions, phases, tests, strength, sources)
  methodology/road/              ← road module (variants D / N / P / B)
  methodology/own-coach/         ← building a methodology from your favourite coach
  vault-template/AI Coach/       ← your project template (with Knowledge Loop)
  tools/vdot.py                  ← VDOT and paces from a race
  evals/scenarios.md             ← test scenarios
chatgpt/                         ← ChatGPT instructions (PL and EN)
przyklady/ · examples/           ← sample installations (fictional people), PL · EN
dist/                            ← ready packages: skill ZIPs, whole skill in one file (PL and EN)
scripts/zbuduj-zip.sh            ← builds the packages from skill/
```

## Safety and privacy

- AI Coach is a training-planning tool, **not a doctor or physiotherapist**. The questionnaire includes a short health screening; with worrying symptoms the AI recommends a check-up and doesn't build an intense plan.
- Under 18: training under adult supervision, no weight loss (rules in `references/safety.md`).
- Your data stays in your files and your accounts. The AI sends only general terms to search engines.
- Unofficial integrations (e.g. password login to Garmin Connect, TrainingPeaks cookie) are described as an option for advanced users, at your own risk.

## Sources and credits

The modules describe principles **in their own words** and point to the sources (registries: `methodology/*/sources.md`). The package is not affiliated with Evoke Endurance, Uphill Athlete, book authors or watch and platform makers. The Knowledge Loop is an adaptation of the [knowledge-loop](https://github.com/dbukowinski/knowledge-loop) framework.

The previous version of this repository (a web app) lives in the `archiwum/wersja-0` branch.

## License

[MIT](LICENSE)
