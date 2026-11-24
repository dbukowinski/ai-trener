# AI Coach installation — procedure

You take the runner through 7 stages. It usually takes 20–40 minutes of conversation. After each stage, save the result to files so an interrupted conversation isn't lost. When the conversation resumes after a break, read `AI Coach/00 Start.md` → "Installation status" and continue from the first unfinished stage.

At the start, tell the runner in 2–3 sentences what will happen: questionnaire, methodology proposal to approve, watch connection, project setup, first plan. Say they can stop at any point.

## Stage 1. Environment: where I write and what's connected

Check (without asking, if you can find out yourself):

1. **File writing.** Do you have a tool to write to a local folder (Claude Code, Claude Desktop with an added folder, Codex) or to Google Drive (Drive connector)? If you have neither:
   - Claude: ask the runner to add a folder (desktop app: "Add folder", or run in Claude Code) or to connect Google Drive in the connector settings.
   - ChatGPT without writing: work in **copy-paste mode** — give every file as a Markdown block with its name and path; the runner saves it (e.g. in Obsidian). Say so honestly before starting.
2. **Project location.** Ask where the `AI Coach/` folder should go: an existing Obsidian vault, a Drive folder, or a new folder. Default: a new folder next to, not inside, the unpacked package (the package can then be updated without overwriting the runner's data).
3. **MCP / connectors.** List the tools you can see: COROS, Tredict, intervals.icu, Garmin, Suunto, Polar, TrainingPeaks, Strava, Google Drive, calendar, scheduled tasks. Record them in `00 Start.md` in stage 5.
4. **Google Drive.** The Drive connector usually can't overwrite an existing file's content. Update = new file with the same name, old one to trash right away, then check the folder. Record this rule in `00 Start.md` if the project is on Drive.

## Stage 2. Questionnaire

Run the questionnaire in `references/questionnaire.md`:
- in rounds of 3–6 questions, with answer options where possible (if you have a multiple-choice question tool — use it),
- after each round, add the answers to `Runner profile.md` (if the folder already exists) or keep them in the conversation and save them in stage 5,
- ask conditional questions only when they apply (mountain vs road, gym, race),
- **the health screening is mandatory** (round 4). A "yes" to the symptom questions → recommend a medical check before intense training (`references/safety.md`); start the plan with easy movement or hold it.

At the end, show a short profile summary (5–8 lines) and ask for corrections.

## Stage 3. Methodology — proposal for approval

Per `references/methodology-selection.md`:
1. Ask (if the questionnaire didn't) about favourite coaches, books, channels, methods. If the runner has them → procedure in `methodology/own-coach/README.md`.
2. If not → propose the default module for the goal (mountain → `methodology/mountain`, road → `methodology/road` with a variant).
3. Present the proposal as:
   - **Framework:** module / coach and why it fits the runner's goal and life.
   - **Evidence layer:** the shared research layer (intensity distribution, strength, taper, safety).
   - **Fit for you:** 3–6 concrete adaptations (e.g. "no mountains → treadmill climbs at 12–15% and stairs in your building", "3 days a week → 2 quality sessions + long run").
   - **Alternative:** one other route and what it would change.
4. Wait for the decision. Don't continue without the runner's approval.

## Stage 4. Watch and platform

Per `references/platforms.md`:
1. Establish the watch brand and existing accounts (Strava, TrainingPeaks, intervals.icu, Tredict).
2. Choose the plan-writing route (direct MCP → official intermediary → unofficial MCP → manual mode) and walk the runner through connecting it, step by step, in their client (Claude / ChatGPT / Claude Code).
3. **Read test** (if the platform allows): pull the last 4–8 weeks of activities and compute: average weekly time and distance, longest run, weekly elevation gain, running days, typical HR on easy runs. These are the first facts in `_facts.md` (with `source_id` and method "platform summary").
4. **Write test:** send the plan's first session (stage 6) to the watch and ask the runner to confirm they see it. Don't create "test" workouts that can't be removed later (e.g. in COROS, deleting scheduled workouts requires the app).
5. No automated route: manual mode (plan in a note + workout description to type in, per `references/workout-format.md`).

## Stage 5. Project setup (vault)

1. Copy `vault-template/AI Coach/` to the chosen location (the whole folder, with subfolders). On Google Drive: create the folders and files with the same names.
2. Fill the files with data from the questionnaire and stages 3–4 (replace every `<…>`; whatever you don't know — "no data"):
   - `00 Start.md` — installation configuration, installation status, how to talk to the coach,
   - `Runner profile.md` — the questionnaire,
   - `Season.md` — races, phase skeleton (from the methodology module: `phases.md`), fixed constraints,
   - `Methodology.md` — approved framework, evidence layer, adaptations, what we don't do,
   - `My sessions.md` — the module's session library **filtered** to the runner's terrain, equipment and time, with substitutes,
   - `Knowledge Loop/domains/sport/_profile.md` — data sources, platform `source_id`, confounders from the runner's life, key dates,
   - `Knowledge Loop/sources/sport/_registry.md` — module sources (`sources.md`) + the favourite coaches' sources,
   - `Knowledge Loop/domains/sport/_facts.md` — facts from stage 4 and the questionnaire (measured only, with method).
3. Copy the chosen module's files (`principles.md`, `sessions.md`, `phases.md`, `tests.md`, `strength.md`) into `AI Coach/Knowledge/<module>/` so the runner has them in their vault.
4. Verify: list the folder and confirm the files exist. Only then say "saved".

## Stage 6. Tests and first plan

1. If thresholds (AeT / lactate threshold / race-based paces) aren't measured, the first week includes a **test** from the module (`tests.md`) or calibration by feel (talk test / nose breathing) — mark zones as provisional.
2. Build the plan for the first 1–2 weeks per `references/planning.md`. The first week is **conservative**: volume no higher than the average of the last 4 weeks (from stage 4 or the questionnaire).
3. Show the plan (format in SKILL.md §4). In `ask` mode, send after approval; in `send` mode, right away.
4. Save the plan as `Plans/YYYY-Www.md`.

## Stage 7. Rhythm and wrap-up

1. **Weekly rhythm:** if you have a recurring-task tool (scheduled tasks), propose a weekly review (e.g. Sunday evening: "Run the ai-coach skill: weekly review and next week's plan") and a monthly Loop review. Without a tool: tell the runner to write "weekly review" on Sundays.
2. In `00 Start.md` set "Installation status: completed YYYY-MM-DD".
3. Finish briefly: what was created (file list), what's on the watch, how to talk to the coach (3 example sentences from `00 Start.md`), how to report feedback on the package (link to the repository's issues if the runner is testing).

## Updating the package

When the runner downloads a newer package version: don't overwrite `AI Coach/`. Compare `vault-template/` with their project and propose only missing files or sections. Methodology changes from a new module version → `_proposals.md`.
