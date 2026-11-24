# Neutral workout format

Describe each session in this format first, then map it to the platform's tool. That way the same plan can go to COROS, Tredict, intervals.icu or be typed in by hand.

```yaml
date: 2026-12-02
name: "Uphill Z2 — treadmill 12%"
sport: run | trail | treadmill-run | bike | indoor-bike | strength | hike | other
purpose: "uphill aerobic base"
intensity_measure: heart_rate | pace | power | RPE
steps:
  - type: warmup              # warmup | work | recovery | cooldown | repeat
    duration: 10min           # or distance: 2km
    target: {heart_rate: "Z1"} # zone from _facts.md or a bpm / pace / RPE range
  - type: repeat
    times: 4
    steps:
      - {type: work, duration: 8min, target: {heart_rate: "upper half of Z2"}, notes: "incline 12%"}
      - {type: recovery, duration: 2min, target: {heart_rate: "Z1"}, notes: "incline 1%"}
  - type: cooldown
    duration: 10min
    target: {heart_rate: "Z1"}
planned_elevation: 450m
substitute: "4 × 8 min on the building stairs, same HR"
notes: "If HR drifts above Z2 at 12% — reduce the incline, don't speed up."
```

## Mapping

| Platform | How | Limits |
|---|---|---|
| COROS MCP | library workout + scheduling, or a workout straight on the calendar; multi-week plan as a training plan | run / bike / trail only; strength and swim only from the existing library |
| Tredict MCP | workout added to a plan or the calendar | sync usually 7 days ahead |
| intervals.icu MCP | calendar event with step description (MCP tools build the structure) | sync usually ~7 days ahead; "Upload planned workouts" ticked |
| Manual mode | step text in the plan note | runner enters it in the app |

Give step targets as concrete numbers (bpm, min/km or min/mile, W) when the platform requires it. Take numbers from `_facts.md`; without them — RPE and a description, labelled "provisional zones".

## Strength

Watch platforms handle gym work poorly. Record a strength session in a note (`Log/_template strength.md`) as a table: exercise · sets × reps · starting load · RPE / reps in reserve · rest · technique notes. Send at most a "time block" to the watch (e.g. 60 min strength) if the platform allows.
