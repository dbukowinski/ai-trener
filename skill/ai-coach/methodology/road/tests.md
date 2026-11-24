# Tests — road module

Record the result as a fact in `_facts.md` (value, method, date, `source_id`). Changing a fact that paces and zones depend on → `_proposals.md`.

## RD-TEST-RACE · VDOT from a result

- A result from the last ~6 weeks, on a flat course, run all-out (a training run or a relaxed race gives paces that are too slow).
- VDOT and E / M / T / I / R paces: the official VDOT calculator (VDOT O2 app / website) [DAN]. Without access to the calculator but with code execution: `python3 tools/vdot.py <metres> <time>` in the skill folder (the same Daniels–Gilbert equations; training paces approximate). Record VDOT, paces and the method in `_facts.md`.
- Recalculate after every race or every 4–6 weeks (e.g. parkrun as a test).
- Heat, wind, hills on the course → the result understates VDOT; note it in the method.

## RD-TEST-30 · 30-minute threshold test (LTHR)

- After a warm-up, 30 min solo, even and all-out (like a 30-minute race), on the flat. Press lap at 10 min.
- **Average HR of the last 20 min ≈ LTHR** (lactate-threshold heart rate); average pace over the 30 min ≈ threshold pace. Joe Friel's method, tier C. [FRIEL]
- Tested in a group or a race → about 60 min is needed, because competition pushes the effort.

## RD-TEST-TALK · Talk test

- The upper limit at which you can speak in full sentences ≈ the top of the easy zone. For the start, before there's data.

## RD-TEST-DRIFT · HR drift (optional, as in the mountain module)

- 60 min at a steady pace on a treadmill or flat loop; drift ≤5% → the easy zone is set well. Details: `../mountain/tests.md` MTN-TEST-AeT.

## HR zones from LTHR (indicative, Friel — running)

| Zone | % LTHR |
|---|---|
| Z1 | < 85% |
| Z2 | 85–89% |
| Z3 | 90–94% |
| Z4 | 95–99% |
| Z5a / b / c | 100–102% / 103–106% / > 106% |

VDOT zones (pace) and LTHR zones (HR) are two systems — record in `Methodology.md` which one drives which sessions (e.g. easy and sub-threshold by HR, T / I / R by pace).
