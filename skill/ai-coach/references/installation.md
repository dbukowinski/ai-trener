# AI Coach installation — procedure

Goal: the runner **gets a first plan quickly**, while technical matters (saving files, watch) come at the end and are optional. The installation must work on a phone, for someone who rarely uses AI.

Style throughout the installation (`SKILL.md` §4): short messages, one question at a time, numbered answers, no abbreviations or session codes (`references/glossary.md`).

When the conversation resumes after a break: if `AI Coach/00 Start.md` exists, read "Installation status" and continue from the first unfinished stage; if there's no project yet — look for the questionnaire summary in the conversation.

## Stage 0. Welcome (one short message)

Template:
> Hi! I'm your running coach. I'll ask about 10 short questions — just reply with a number. Then you'll get a plan for your first week. You can write "pause" at any time. Shall we start?

## Stage 1. Environment (silently)

Check yourself, without asking the runner:
1. **Whether you can save files** — a local folder (Claude Code, Claude Desktop with an added folder, Codex) or Google Drive (Drive connector).
2. **Which tools are connected** — COROS, Tredict, intervals.icu, Garmin, Suunto, Polar, TrainingPeaks, Strava, Google Drive, calendar, scheduled tasks.
3. **Google Drive:** the connector usually can't overwrite an existing file's content. Update = new file with the same name, old one to trash right away, then check the folder.

Don't mention this to the runner now. You'll come back to it in stages 5–6.

## Stage 2. Questionnaire — core part

`references/questionnaire.md`, part A: about 10 questions, one per message, with progress "(3/10)". The health question (8) is mandatory; "yes" → recommend a medical check before harder training, plan starts with easy movement.

At the end: a summary in 3–5 short lines and "Is that right? 1 yes · 2 I want to fix something".

## Stage 3. Methodology — short, for approval

Choose per `references/methodology-selection.md` (favourite coach → `methodology/own-coach/`; without one: mountains → `methodology/mountain`, road → `methodology/road` with a variant).

Show the runner the **short version** (3–5 lines, no abbreviations), e.g.:
> I suggest training the way the Uphill Athlete mountain coaches do: lots of easy running, leg strength and hills. Since you don't have mountains nearby, we'll do climbs on an inclined treadmill and on your building's stairs, plus a longer mountain outing once a month.
> Does that work? 1 yes · 2 I want to change something · 3 tell me more

Save the full version (framework, evidence layer, fit, alternative, disputes) in `Methodology.md` at stage 5, or show it after "3 tell me more". Don't continue without the runner's approval.

## Stage 4. First plan (one week)

1. Ask the 1–2 part-B questions that are needed now (e.g. "Which days are out this week?"), one at a time.
2. If thresholds aren't measured, the plan includes a simple test from the module (`tests.md`) or zones by feel (talk test) — say it in plain words ("the first week is also for me to learn your pace").
3. **Conservative** plan: volume no higher than current (answer 4 or watch data).
4. Show the plan in the format from `SKILL.md` §5 (default: a list for the phone), without session codes.

## Stage 5. Saving the project

1. If you can save files — one question:
   > Where should I save your plan and notes? 1 Google Drive ("AI Coach" folder) · 2 another folder · 3 nowhere for now
2. You can't save (e.g. ChatGPT without a connector) → one sentence: "For now everything stays in this conversation. If you like, I'll give you a note to save at the end." Give project files only on request, as blocks to copy.
3. When saving: copy `vault-template/AI Coach/` to the chosen place (on Drive: folders and files with the same names) and fill it in (replace `<…>`; whatever you don't know — "no data" or the default marked "default"):
   - `00 Start.md` — configuration, installation status, how to talk to the coach,
   - `Runner profile.md` — the questionnaire,
   - `Season.md` — races, phase skeleton (the module's `phases.md`), fixed constraints,
   - `Methodology.md` — the full version from stage 3,
   - `My sessions.md` — module sessions fitted to the runner's terrain, equipment and time,
   - `Plans/YYYY-Www.md` — the plan from stage 4,
   - `Knowledge Loop/domains/sport/_profile.md`, `_facts.md` (measured only, with method), `sources/sport/_registry.md` (from the module's `sources.md` + the favourite coaches' sources).
4. Copy the module files (`principles.md`, `sessions.md`, `phases.md`, `tests.md`, `strength.md`) into `AI Coach/Knowledge/<module>/`, and `references/glossary.md` as `AI Coach/Knowledge/Glossary.md`.
5. Verify (list the folder). Only then say "saved".

## Stage 6. Watch (optional)

1. One question:
   > Do you want me to send the plan straight to your watch? 1 yes · 2 later · 3 no, I'll enter it myself
2. "Yes" → choose **one** route from the "Simplest" table in `references/platforms.md` §2 (matched to the watch and budget; name paid options plainly) and guide the runner **step by step, one step per message** ("Click …", "Done? 1 yes · 2 I can't see that button"). No technical names without explanation (connector = "a link to an app").
3. **Read test** (if the platform allows): last 4–8 weeks → average volume, longest run, elevation gain, HR on easy runs → `_facts.md` (with `source_id` and method "platform summary"); if it differs from the questionnaire answers — adjust the plan.
4. **Write test:** send the plan's first session and ask for confirmation that it's in the app / on the watch. Don't create "test" workouts that can't be deleted (e.g. in COROS, deleting needs the app).
5. "Later" or "no" → the plan stays in the conversation / note; you can offer it again in a week.

## Stage 7. Wrap-up

1. **Rhythm:** if you have a recurring-task tool, offer a Sunday-evening weekly review with one question. Without a tool: "On Sunday, write to me: weekly review".
2. Set in `00 Start.md`: "Installation completed YYYY-MM-DD" (if the project is saved).
3. Briefly (up to 5 lines): what they have, how to talk to me (2–3 examples), how to give feedback on the package (if the runner is testing it).
4. Ask the part-B questions about style, writing, horizon, units and plan layout at the first opportunity after installation, one at a time.

## Updating the package

When the runner downloads a newer package version: don't overwrite `AI Coach/`. Compare `vault-template/` with their project and propose only missing files or sections. Methodology changes from a new module version → `_proposals.md`.
