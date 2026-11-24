# Choosing the methodology

The methodology is **flexible and tailored to the runner**. It has three layers:

1. **Framework** — one main training school (a package module or the runner's favourite coach). It provides the phase logic, session types and vocabulary.
2. **Evidence layer** — shared by all: intensity distribution, strength training, taper, progression, safety (tier A/B research, built into the modules and the Sources index).
3. **Personal fit** — the questionnaire (time, terrain, equipment, constraints) and later the Knowledge Loop (individual rules from the runner's data).

Record it in `AI Coach/Methodology.md`.

## Decision tree

```
Does the runner have a favourite coach / method / book?
├─ YES → methodology/own-coach (research, source registry, principles, conflicts with research)
│        Framework = that coach. A package module (mountain/road) only fills gaps where the coach is silent.
└─ NO → goal:
   ├─ mountains / trail / ultra / skyrunning ...... methodology/mountain (Evoke Endurance / Uphill Athlete)
   ├─ road 5K – marathon .......................... methodology/road (variant below)
   ├─ both (A race in the mountains) .............. mountain as framework + road sessions as complement
   ├─ both (A race on the road) ................... road as framework + hills/strength from mountain
   └─ no race (fitness, health, comeback) ......... road variant "80/20 / base", or mountain "base" if the runner prefers trails
```

### Road module variants

| Variant | For whom | Core |
|---|---|---|
| **Daniels (VDOT)** — default | has a recent result, likes concrete paces, runs 4–6 days | E/M/T/I/R paces from the result, 2 quality days per week |
| **Amateur "Norwegian" sub-threshold** | little time, consistent, likes structure, has HR | 2–3 sub-threshold sessions per week, the rest easy, long run |
| **Pfitzinger (marathon)** | marathoner with a large base (plans at 55/70/85 miles per week) | mid-week medium-long runs, threshold, long runs with marathon-pace segments |
| **80/20 / base** | beginner, comeback, no race | ~80% easy, simple quality, focus on consistency |

Details and sources: `methodology/road/README.md`.

## How to present the proposal

```
Framework: <module/coach> — because <goal, experience, time, terrain>.
Evidence layer: <2–3 points from the module, e.g. most time at low intensity, strength 2×/week>.
Fit for you:
- <constraint> → <solution> (e.g. no mountains → treadmill 12–15% + stairs in your building + 30 m hill × N)
- …
Alternative: <other route> — would change <what>.
```

## Hierarchy when things conflict

1. Safety (`references/safety.md`).
2. The runner's constraints and statements (their time, health, preferences).
3. The runner's measured data → individual rules from the Knowledge Loop.
4. A/B research (general claims).
5. Methodology framework (coach, tier C) — practical interpretation.
6. Your interpretation — always just a hypothesis.

A framework ↔ research conflict has no automatic "winner": describe it in `Methodology.md` ("Disputes" section) and propose how to settle it with the runner's data (a test, a Loop experiment).

## Changing the methodology mid-season

- Small data-driven tweak (e.g. longer warm-ups before intervals) → Loop hypothesis → rule after passing the gates.
- Change of framework, intensity distribution, strength progression or taper → `_proposals.md`, the runner decides.
- New goal (e.g. switching from road to mountains) → re-run the decision tree, new skeleton in `Season.md`, the old one stays in history.
