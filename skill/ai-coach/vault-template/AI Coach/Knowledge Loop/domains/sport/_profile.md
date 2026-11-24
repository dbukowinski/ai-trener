---
domain: sport
rhythm: weekly
source_freshness: 12 months
hypothesis_dormancy: 8 weeks
independent_situations: different training weeks
notes_area: Log/, Plans/, Knowledge/, Season.md, Methodology.md
updated: <YYYY-MM-DD>
---

# Domain profile: sport — <runner's name>

## Scope
<e.g. trail and ultra in the mountains (from the city), strength, cycling as aerobic volume, recovery; plans in <platform>>

## Context for every plan
- Season: `../../../Season.md` · Methodology: `../../../Methodology.md` · Profile: `../../../Runner profile.md`

## Observation sources (cost ladder)
1. Platform summaries: <activity list, load, HRV, sleep, resting HR>.
2. The runner's notes in `Log/` (feel, RPE, loads) and plans in `Plans/`.
3. Lap data — key sessions only, max 2 per week.
4. FIT files — only when a hypothesis needs the detail.

`source_id`: `<platform>:<id>` (activities) · `<platform>:hrv:<date>` / `<platform>:rhr:<date>` · `fit:<source>:<date>` · `vault:<path>` · `user:<date>`.

## Guiding methodology
<framework from `Methodology.md`> — an interpretive frame, not absolute truth.

## Measurement notes
- Mountain runs: pace and HR are distorted by elevation, descents, heat and muscle fatigue → compare only similar sessions; otherwise the observation is `contaminated`.
- Aerobic markers (HR drift, AeT) — best from a treadmill, flat loop or bike at constant power.
- HR source: <wrist / arm band / chest strap> — <accuracy notes>.
- Strength: estimated 1RM is an approximation — compare the same lift and technique.
- Thresholds not tested → provisional zones (see `_facts.md`).

## Confounders checklist
Short sleep · work stress · calorie deficit · terrain / elevation / weather / heat · infection · day after leg day · days since the last hard session or race · travel · <factors from the runner's life: shift work, childcare, …>

## Requires approval (→ `_proposals.md`)
- Rules that increase volume or intensity, change the distribution of hard sessions, the strength progression or the taper.
- Changes to facts that zones and thresholds depend on.

## Safety
Pain, infection, overload signals (falling HRV + rising resting HR + feeling unwell) beat any rule. Cardiac symptoms → stop and see a doctor. Health information never becomes hypotheses or rules. Details: skill `ai-coach`, `references/safety.md`.

## Important dates (no experiments in the last 3 weeks before)
- <YYYY-MM-DD> <A race>
