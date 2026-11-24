# Example 2 — road half marathon (fictional person)

## Profile (summary after the questionnaire)

- **Mark**, 41, running for 6 years, 4 days a week, averaging 32 km / 3 h 20 min.
- **Latest result:** 10K in 48:30 on a flat course, 3 weeks ago.
- **A race:** half marathon, 2027-04-11 (19 weeks from installation). Goal: 1:45.
- **Time:** Tue, Thu, Sat, Sun (up to 1 h on weekdays, up to 1 h 45 min on Sunday). Athletics track 2 km from home.
- **Health:** screening without flags. **Equipment:** Garmin Forerunner, chest strap; intervals.icu account (already linked to Garmin Connect).
- **Preferences:** no favourite coach, likes concrete paces; no gym, but home exercises are fine; `send` mode; one-week plans; kilometres.

## Methodology proposal (approved)

- **Framework:** `road` module, **variant D (Daniels, VDOT)** — recent result, likes paces, 4 running days.
- **Starting point:** VDOT ≈ 41.5 from the 10K in 48:30 (`tools/vdot.py`, to be confirmed with the official calculator). Predicted half marathon at this VDOT: about 1:47:30; the 1:45 goal needs about 1 VDOT point of improvement — realistic in 19 weeks, assessed after a mid-cycle test.
- **Approximate paces:** E 5:41–6:48 /km, T 4:57–5:11 /km, I 4:28–4:39 /km, R about 103 s / 400 m.
- **Evidence layer:** most running at E (pyramidal); strength 2× per week at home (single-leg work, calves, plyometrics); taper of about 10–14 days.
- **Fit:** 4 days → Q1 (Tue, T) + Q2 (Thu, I or R) + long run (Sun) + easy with strides (Sat); home strength Mon and Fri; track for I and R.
- **Alternative:** variant N (sub-threshold 2–3× a week) — if Q2 intervals prove too tiring alongside work.

## Platform

Route to the watch: **intervals.icu** (free; "Upload planned workouts" ticked, type: Run) + the local `intervals-icu-mcp` MCP in Claude Desktop. The plan reaches Garmin Connect about a week ahead. Strength — in a note.

## First week (`Plans/2026-W49.md`)

| Day | Code | Session | Intensity | Time / distance | Watch |
|---|---|---|---|---|---|
| Mon | Strength A | home: Bulgarian split squat, calf raises, pogos, plank | RPE 6 | 30 min | manual |
| Tue | RD-T-CRUISE | 15 min E + 2 × 1.6 km T (1 min rest) + 10 min E | T 4:57–5:11 /km | about 7 km (T = 10% of the week) | sent |
| Wed | — | rest | — | — | — |
| Thu | RD-E + RD-ST | easy + 6 × 20 s strides | E | 40 min | sent |
| Fri | Strength B | home: step-up, single-leg RDL with a backpack, two-leg jumps | RPE 6 | 30 min | manual |
| Sat | RD-E | easy | E | 40 min | sent |
| Sun | RD-LR | long run | E | 1 h 10 min | sent |

Running about 32 km (= 4-week average); the first Q2 interval session comes in week 2. Test (parkrun or a solo 5K) in week 7.
