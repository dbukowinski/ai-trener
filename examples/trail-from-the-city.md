# Example 1 — trail from the city (fictional person)

Shows what an installation result should look like. The data is made up.

## Profile (summary after the questionnaire)

- **Kate**, 34, running for 4 years, averaging 4 h / 5 days a week, longest run in 8 weeks: 1 h 50 min / 18 km / +250 m.
- **A race:** 50 km / +2400 m trail, Saturday 2027-06-12 (28 weeks from installation). Goal: finish strong, no crisis in the second half.
- **Terrain:** lives in a big city with no mountains. A park hill of about 35 m (10 min jog away), an 11-floor stairwell, a gym with a treadmill up to 15% and a StairMaster. Realistically in the mountains about every 4 weeks for a weekend.
- **Time:** Mon–Fri up to 75 min, Saturday up to 3 h in the morning, Sunday up to 1 h. Wednesday — works late.
- **Health:** screening without flags; IT-band overload 8 months ago, pain-free now.
- **Equipment:** COROS Pace 3, wrist HR; Strava. Gym: basics.
- **Preferences:** no favourite coach; dislikes treadmill intervals; `ask` mode; two-week plans; short communication; kilometres.

## Methodology proposal (approved)

- **Framework:** `mountain` module (Evoke Endurance / Uphill Athlete) — mountain race with lots of climbing, 28 weeks = full model.
- **Evidence layer:** most time in Z1–Z2; strength 2× per week, ≥3 h away from running; taper of about 2 weeks with reduced volume.
- **Fit:**
  - no mountains → MTN-Z2-UP on the treadmill at 10–15% and on the stairs (lift down), repeats on the 35 m hill (e.g. 15 × ≈ 500 m of gain),
  - ME → StairMaster with a pack and step-ups (instead of a steep slope),
  - descents → repeated descents of the hill + step-downs; primer 10–12 weeks before the race,
  - a mountain trip about every 4 weeks → weekend block (long run + back-to-back) in the specific phase,
  - IT-band history → descents introduced gradually, short stride, pain monitored (0–10 scale),
  - dislikes treadmill intervals → uphill quality on the park hill, treadmill only for Z2.
- **Alternative:** compressed variant with shorter maximal strength (4–6 weeks) and longer ME — if the gym became unavailable in winter.

## Season skeleton (`Season.md`)

| Phase | Dates | Content |
|---|---|---|
| Calibration | 30.11–6.12.2026 | AeT drift test, load calibration |
| Base + maximal strength | 7.12.2026–31.01.2027 | Z1–Z2, strides, hill sprints, heavy strength 2× (holidays: repeat the week if the gym is missed) |
| Base + ME | 1.02–28.03 | StairMaster with a pack 1×/wk, long runs grow; descent primer about 20–28.03 |
| Specific | 29.03–30.05 | MTN-Z3-UP / MTN-Z4-UP on the hill, mountain weekends (e.g. 17–18.04, 15–16.05), fuelling and race gear |
| Taper | 31.05–11.06 | volume down, intensity kept, no hard descents from 29.05 |
| A race | 12.06.2027 | HR in the first half, eat by the clock |

## First week (`Plans/2026-W49.md`) — calibration

| Day | Code | Session | Intensity | Time | Elevation | Substitute | Watch |
|---|---|---|---|---|---|---|---|
| Mon | — | rest / 15 min mobility | — | — | — | — | — |
| Tue | MTN-Z2 + MTN-ST | easy run + 4 × 20 s strides | nose breathing (provisional zone) | 45 min | — | treadmill 1% | sent |
| Wed | MTN-TEST-AeT | drift test: 10 min warm-up + 60 min steady pace, treadmill 1% | starting HR = top of nose breathing | 75 min | — | — | sent |
| Thu | Strength A | squat, step-up, pull-up (band-assisted), Copenhagen plank — RPE 6–7 calibration | RPE 6–7 | 50 min | — | — | enter manually (note) |
| Fri | — | rest | — | — | — | — | — |
| Sat | MTN-LONG | long run on a hilly loop, food every 30 min | Z1–Z2 provisional | 1 h 40 min | ~200 m | 2 × 50 min in the park with hills | sent |
| Sun | MTN-Z2-UP | building stairs: 6 × 11 floors up, lift down | Z2 provisional | 35 min | ~200 m | StairMaster | sent |

Running about 4 h (= last 4-week average) + 1 strength session. After the test, the coach records AeT in `_facts.md` and recalculates zones (dependent fact → `_proposals.md`).
