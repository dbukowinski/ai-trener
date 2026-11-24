---
type: ai-coach-start
package_version: 0.3.1
created: <YYYY-MM-DD>
---

# AI Coach — <runner's name>

This is your training project. The coach (AI) reads this file at the start of every conversation.

## How to talk to the coach

- "Build next week's plan" / "plan the next two weeks".
- "I can't make Thursday, move the quality session."
- "I did my session: …" (how it felt, RPE, gym weights) — the coach saves the log and observations.
- "Weekly review" — plan vs execution, conclusions, next week's plan.
- "I have a new race: …" / "I want to train per …" — season or methodology change.
- "My … hurts" — the coach checks safety first.
- "Approve P-003" — consent to a change waiting in `Knowledge Loop/_proposals.md`.

## Configuration (filled in by the coach at installation)

| Field | Value |
|---|---|
| Project location | <local folder / Google Drive: path> |
| Write rule | <e.g. Drive: update = new file, old one to trash, check the folder> |
| AI client | <Claude / Claude Code / ChatGPT / other> |
| Watch | <brand, model, HR source> |
| Route for plans to the watch | <e.g. COROS MCP / Tredict MCP → Garmin / intervals.icu → Suunto / manual> |
| What the platform won't accept | <e.g. strength — note only; moving workouts — in the app> |
| Reading data | <e.g. COROS MCP / Strava / intervals.icu> |
| Activity `source_id` | <e.g. coros:<id>> |
| Plan write mode | <ask / send> |
| Plan horizon | <1 / 2 weeks> |
| Units | <km / miles> |
| Plan layout | <list for the phone / table> |
| Communication style | <short / with explanations> |
| Rhythm | <e.g. weekly review Sunday evening — scheduled task: yes / no> |

## Project map

| File / folder | Contents |
|---|---|
| `Runner profile.md` | questionnaire results: starting point, time, terrain, equipment, preferences |
| `Season.md` | races, phases with dates, fixed constraints, current state |
| `Methodology.md` | your methodology: framework, evidence layer, fit, disputes |
| `My sessions.md` | session library fitted to your places and equipment |
| `Plans/` | weekly plans `YYYY-Www.md` |
| `Log/` | run and gym session notes |
| `Knowledge/` | files of the chosen methodology module |
| `Knowledge Loop/` | Knowledge Loop: facts, hypotheses, rules, sources, change proposals |

## Installation status

- [ ] 1. Environment
- [ ] 2. Questionnaire
- [ ] 3. Methodology approved
- [ ] 4. Watch connected (read / write)
- [ ] 5. Project set up
- [ ] 6. Tests and first plan
- [ ] 7. Rhythm set

Installation completed: <YYYY-MM-DD>
