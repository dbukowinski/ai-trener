# Platforms and MCP — getting the plan onto the watch

> As of 2026-11-24. Integrations change fast. During installation, check the current documentation of the tool; if something doesn't work, add it to `Knowledge Loop/lessons.md` and report it in the package repository.

## 1. Route priority

1. **The watch maker's official MCP** (simplest, OAuth, no passwords).
2. **An intermediary's official MCP** that syncs plans to the watch itself (Tredict).
3. **A free intermediary with an API + community MCP** (intervals.icu).
4. **Unofficial MCP** into the maker's account (needs a password or session cookie, may break, risk is the user's) — advanced users only, with explicit consent.
5. **Manual mode** — plan in a note + workout description to enter in the app.

## 2. Simplest — no installs and no copying

For someone who wants the plan to **appear in their watch app on its own** (no copy-paste) and doesn't want to install anything on a computer. All routes below are "a link to an app" added in Claude's settings (address + sign-in). On the free Claude plan you can add one custom connector.

| Watch | Simplest route | Cost (as of 2026-11) | Where the plan appears |
|---|---|---|---|
| COROS | official COROS MCP | free | COROS app → watch |
| Garmin | **Tredict** (official Tredict MCP) | Tredict is prepaid — check pricing | Garmin Connect calendar |
| Garmin | **intervals.icu + the official Intervals connector** (`https://mcp.intervals.icu/mcp`, sign in via intervals.icu) | intervals.icu free; the connector is in beta for supporters only | Garmin Connect calendar (with "Upload planned workouts" on) |
| Garmin | **athletedata** (connector in the Claude directory; sends via a connected intervals.icu account) | 7 days free, then a subscription | Garmin Connect calendar |
| Suunto | Tredict or intervals.icu + the Intervals connector | as above | Suunto app (Guides) |
| Polar | no copy-free route: Polar accepts plans only from TrainingPeaks | — | the coach gives the workout to enter in TrainingPeaks / Polar Flow |
| Wahoo, Apple Watch | Tredict (Apple Watch via Watchletic) | as above | watch app |

Garmin: workouts land in the Garmin Connect calendar, where they can be reviewed, moved or deleted; how they then reach the watch depends on Garmin Connect sync. There's no official Garmin MCP with write access (Garmin's official Personal API is read-only).

When guiding the runner through connecting: one route (the simplest for their watch and budget), one step per message, no technical names without explanation.

## 3. Watch matrix (all routes)

| Watch | Plans onto the watch | Reading data | Notes |
|---|---|---|---|
| **COROS** | **official COROS MCP** `https://mcp.coros.com/mcp` (OAuth; Claude, ChatGPT and others) | same MCP | Creates structured run / bike / trail workouts, 4–16-week plans (starting within 14 days), calendar workouts up to 90 days ahead. Strength and swim workouts can only be scheduled from an existing library, not created. Moving and deleting scheduled workouts and ending plans — in the COROS app. If the client doesn't follow redirects: `https://mcpeu.coros.com/mcp` (Europe), `https://mcpus.coros.com/mcp` (US). |
| **Garmin** | **Tredict** (official Tredict MCP, plan sync to Garmin Connect) or **intervals.icu** (free; "Upload planned workouts" option) + the official Intervals connector (beta) or a community MCP, or **athletedata** (hosted, paid) | Garmin Connect **Personal API** (official, read-only, key in account settings) via a community MCP, or via an intermediary | No official MCP with write access. Unofficial MCPs based on `python-garminconnect` (e.g. `Taxuspt/garmin_mcp`) can create and schedule workouts, but log in with password + MFA and may break. |
| **Suunto** | **Tredict** (SuuntoPlus Guides, next 7 days) or **intervals.icu** (SuuntoPlus Guides) | community MCP (e.g. `googlarz/suunto-mcp`, reading via the official Suunto API) or an intermediary | Needs a SuuntoPlus-capable watch. |
| **Polar** | **TrainingPeaks → Polar Flow** (official Polar integration, also with a free TP account) | community MCP via Polar AccessLink (read) or an intermediary (Tredict, intervals.icu receive activities) | Polar doesn't accept plans from other services via API. TrainingPeaks MCPs are unofficial (session cookie) → default: the AI builds the plan, the runner enters it in TrainingPeaks or Polar Flow, or agrees to an unofficial MCP. |
| **Wahoo** | Tredict or intervals.icu | intermediary | — |
| **Apple Watch** | Tredict + the Watchletic app | intermediary | — |
| **Other / no watch** | manual mode | manual log entries | — |

**Strava** has an official connector in the Claude directory for analysing activities, but it doesn't accept plans. Treat it as a data source, not a route to the watch.

**Indoor cycling (MyWhoosh, Zwift)**: activities often reach only Strava or an intermediary — record in `00 Start.md` where to get them.

## 4. Intermediaries — details

### Tredict (official MCP)
- Address: `https://www.tredict.com/api/mcp/v2` (Streamable HTTP / SSE), OAuth sign-in; for clients without OAuth — a personal token from "Settings → Personal API / MCP" in Tredict.
- Tools include: creating a plan ("My Plans"), adding a workout to a plan, listing and showing planned workouts, changing a date.
- Plans placed on the Tredict calendar go to the connected watch automatically (Garmin, COROS, Suunto, Wahoo; Apple Watch via Watchletic). Usually the next 7 days are synced.
- Tredict uses a prepaid model — check pricing before installing.
- In ChatGPT, Tredict is also available as an app in the directory.

### intervals.icu (free, community MCP)
- Free account (donation-supported project). Connect the watch under "Settings", tick **"Upload planned workouts"** and select the workout types to send (without this nothing reaches the watch).
- API key and athlete ID: "Settings → Developer Settings".
- **Official Intervals connector** (`https://mcp.intervals.icu/mcp`, sign in via intervals.icu, no keys): adds, moves and changes planned workouts on the calendar. Since 2026-10/11 in beta, supporters of intervals.icu only; setup steps per assistant: intervals.icu/connector.
- Community hosted connectors with intervals.icu sign-in (e.g. IcuSync, Gregaria) — convenient, but third-party services: check who you're giving access to.
- Local MCP (runs on your computer, for advanced users): e.g. `hhopke/intervals-icu-mcp` (`uvx intervals-icu-mcp`, variables `INTERVALS_ICU_API_KEY`, `INTERVALS_ICU_ATHLETE_ID`) or `eddmann/intervals-icu-mcp`; hosted versions with intervals.icu sign-in also exist.
- Usually sends about a week of planned workouts ahead.

### athletedata (hosted, paid)
- Connector in the Claude connector directory ("one click"); in ChatGPT the address `https://www.athletedata.health/mcp` in developer mode (paid plan).
- Combines data from many apps; sends workouts to Garmin / COROS via a connected intervals.icu account.
- 7-day trial, then a subscription — check the current price.

### TrainingPeaks
- The only official route for plans onto Polar watches; also works with Garmin, COROS, Suunto, Wahoo.
- No official MCP; community MCPs sign in with a browser session cookie → only with the runner's explicit consent and a risk warning.

## 5. Connecting in the client

### Claude (claude.ai, desktop and mobile apps)
- **Settings → Connectors**: first look in the directory (e.g. Strava, Tredict, COROS, if listed). Not listed → "Add custom connector" with the MCP address (e.g. COROS or Tredict above). Custom connector availability depends on the account plan.
- After adding: enable the connector in the conversation (tools menu) and complete the OAuth sign-in.
- Locally run MCPs (intervals.icu, unofficial Garmin) — only in the desktop app (local server configuration) or in Claude Code.

### Claude Code
```bash
# remote MCP with OAuth
claude mcp add --transport http coros https://mcp.coros.com/mcp
claude mcp add --transport http tredict https://www.tredict.com/api/mcp/v2
# local MCP (example: intervals.icu)
claude mcp add intervals-icu --scope user \
  --env INTERVALS_ICU_API_KEY=<key> --env INTERVALS_ICU_ATHLETE_ID=<id> \
  -- uvx intervals-icu-mcp
```
Then run `/mcp` in Claude Code to sign in to OAuth servers.

### ChatGPT
- First the **app directory** (e.g. Tredict as an app).
- Your own MCP servers: developer mode (Settings → Apps → Advanced → Developer mode). As of 2026-11, full MCP with write actions is officially described for Business / Enterprise / Edu plans; individual plans may be limited (e.g. read-only) — check OpenAI's current help before installing.
- If writing via MCP doesn't work: the AI prepares the plan, the runner enters it in the watch or intermediary app.

## 6. Test after connecting

1. Read: list activities from the last 4–8 weeks → summary into `_facts.md`.
2. Write: the plan's first real session → the runner confirms they see it in the app / on the watch.
3. Record in `00 Start.md`: write route, what the platform won't accept, how to move and delete workouts, activity `source_id` (e.g. `coros:<id>`, `garmin:<id>`, `intervals:<id>`, `tredict:<id>`).

## Sources (checked 2026-11-24)

- COROS MCP — official repository: https://github.com/coroslab/COROS-MCP
- Tredict MCP: https://mcpservers.org/servers/tredict-com/mcp-server · watch sync: https://www.tredict.com/faq/which-recording-devices-and-services-are-supported/ · Suunto: https://www.tredict.com/faq/suunto---how-to-connect-and-synchronize-my-watch/ · COROS: https://tredict.com/blog/coros_training_sync
- intervals.icu — integrations: https://www.intervals.icu/integrations/ · Suunto Guides: https://forum.intervals.icu/t/upload-workouts-to-suunto-watches/9560 · Garmin: https://forum.intervals.icu/t/upload-planned-workouts-to-garmin-connect/1521
- intervals.icu MCP: official connector (beta): https://forum.intervals.icu/t/intervals-mcp-connector-official-mcp-beta-testers-needed/133365 · local: https://pypi.org/project/intervals-icu-mcp · https://github.com/eddmann/intervals-icu-mcp
- athletedata: https://www.athletedata.health/mcp
- Garmin Personal API (read) — MCP example: https://mcpservers.org/servers/indaco/garmin-personal-mcp · unofficial MCP with write: https://github.com/Taxuspt/garmin_mcp
- Suunto MCP (community): https://github.com/googlarz/suunto-mcp
- Polar + TrainingPeaks: https://polar.com/en/media-room/polar-brings-automatic-trainingpeaks-training-plan-and-structured-workout-integration · Polar MCP (read): https://github.com/NelsonNew/polar-mcp-server
- ChatGPT — developer mode: https://developers.openai.com/api/docs/guides/developer-mode.md · https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt
