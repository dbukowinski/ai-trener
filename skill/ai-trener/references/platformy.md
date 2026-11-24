# Platformy i MCP — jak plan trafia na zegarek

> Stan na 2026-11-24. Integracje zmieniają się szybko. Przy instalacji sprawdź aktualną dokumentację podanego narzędzia; gdy coś nie działa, wpisz to do `Knowledge Loop/lessons.md` i zgłoś w repozytorium paczki.

## 1. Kolejność wyboru drogi

1. **Oficjalny MCP producenta zegarka** (najprostszy, OAuth, bez haseł).
2. **Oficjalny MCP pośrednika**, który sam synchronizuje plany z zegarkiem (Tredict).
3. **Darmowy pośrednik z API + MCP społeczności** (intervals.icu).
4. **Nieoficjalny MCP** do konta producenta (wymaga hasła lub ciasteczka sesji, może przestać działać, ryzyko po stronie użytkownika) — tylko dla zaawansowanych, za wyraźną zgodą.
5. **Tryb ręczny** — plan w notatce + opis treningu do wpisania w aplikacji.

## 2. Macierz zegarków

| Zegarek | Zapis planów na zegarek | Odczyt danych | Uwagi |
|---|---|---|---|
| **COROS** | **oficjalny COROS MCP** `https://mcp.coros.com/mcp` (OAuth; Claude, ChatGPT i inne) | ten sam MCP | Tworzy treningi strukturalne bieg / rower / trail, plany 4–16 tyg. (start w ciągu 14 dni), treningi w kalendarzu do 90 dni naprzód. Siłę i pływanie można tylko zaplanować z istniejącej biblioteki, nie utworzyć. Przesuwanie i usuwanie zaplanowanych treningów oraz kończenie planów — w aplikacji COROS. Gdy klient nie obsługuje przekierowań: `https://mcpeu.coros.com/mcp` (Europa), `https://mcpus.coros.com/mcp` (USA). |
| **Garmin** | **Tredict** (oficjalny MCP Tredict, sync planów do Garmin Connect) albo **intervals.icu** (darmowe; opcja „Upload planned workouts”) | Garmin Connect **Personal API** (oficjalne, tylko odczyt, klucz w ustawieniach konta) przez MCP społeczności, albo przez pośrednika | Oficjalnego MCP z zapisem brak. Nieoficjalne MCP oparte o `python-garminconnect` (np. `Taxuspt/garmin_mcp`) potrafią tworzyć i planować treningi, ale logują się hasłem + MFA i mogą przestać działać. |
| **Suunto** | **Tredict** (SuuntoPlus Guides, najbliższe 7 dni) albo **intervals.icu** (SuuntoPlus Guides) | MCP społeczności (np. `googlarz/suunto-mcp`, odczyt przez oficjalne API Suunto) albo pośrednik | Potrzebny zegarek z SuuntoPlus. |
| **Polar** | **TrainingPeaks → Polar Flow** (oficjalna integracja Polar, także darmowe konto TP) | MCP społeczności przez Polar AccessLink (odczyt) albo pośrednik (Tredict, intervals.icu odbierają aktywności) | Polar nie przyjmuje planów od innych serwisów przez API. MCP do TrainingPeaks są nieoficjalne (ciasteczko sesji) → domyślnie: AI układa plan, biegacz wpisuje go w TrainingPeaks lub Polar Flow, albo zgadza się na nieoficjalny MCP. |
| **Wahoo** | Tredict albo intervals.icu | pośrednik | — |
| **Apple Watch** | Tredict + aplikacja Watchletic | pośrednik | — |
| **Inny / brak zegarka** | tryb ręczny | ręczny wpis w dzienniku | — |

**Strava** ma oficjalny konektor w katalogu Claude do analizy aktywności, ale nie przyjmuje planów. Traktuj ją jako źródło danych, nie drogę na zegarek.

**Rower indoor (MyWhoosh, Zwift)**: aktywności często trafiają tylko do Stravy lub pośrednika — zapisz w `00 Start.md`, skąd je brać.

## 3. Pośrednicy — szczegóły

### Tredict (oficjalny MCP)
- Adres: `https://www.tredict.com/api/mcp/v2` (Streamable HTTP / SSE), logowanie OAuth; dla klientów bez OAuth — osobisty token z „Settings → Personal API / MCP” w Tredict.
- Narzędzia m.in.: tworzenie planu („My Plans”), dodawanie treningu do planu, lista i szczegóły zaplanowanych treningów, zmiana daty.
- Plany wstawione do kalendarza Tredict trafiają automatycznie na podłączony zegarek (Garmin, COROS, Suunto, Wahoo; Apple Watch przez Watchletic). Zwykle synchronizowane jest najbliższe 7 dni.
- Konto Tredict w modelu przedpłaconym — sprawdź cennik przed instalacją.
- W ChatGPT Tredict jest dostępny także jako aplikacja z katalogu.

### intervals.icu (darmowe, MCP społeczności)
- Konto darmowe (projekt utrzymywany z darowizn). Podłącz zegarek w „Settings”, zaznacz **„Upload planned workouts”** i wybierz typy treningów do wysyłki (bez tego nic nie trafi na zegarek).
- Klucz API i ID sportowca: „Settings → Developer Settings”.
- MCP (lokalne, uruchamiane na komputerze): np. `hhopke/intervals-icu-mcp` (`uvx intervals-icu-mcp`, zmienne `INTERVALS_ICU_API_KEY`, `INTERVALS_ICU_ATHLETE_ID`) albo `eddmann/intervals-icu-mcp`; są też wersje hostowane z logowaniem przez intervals.icu.
- Wysyła zwykle ok. tydzień zaplanowanych treningów naprzód.

### TrainingPeaks
- Jedyna oficjalna droga planów na zegarki Polar; działa też z Garmin, COROS, Suunto, Wahoo.
- Oficjalnego MCP brak; MCP społeczności logują się ciasteczkiem sesji z przeglądarki → tylko za wyraźną zgodą biegacza, z ostrzeżeniem o ryzyku.

## 4. Podłączanie w kliencie

### Claude (claude.ai, aplikacja desktop i mobilna)
- **Ustawienia → Konektory**: najpierw szukaj w katalogu (np. Strava, Tredict, COROS, jeśli są widoczne). Brak w katalogu → „Dodaj własny konektor” i adres MCP (np. COROS lub Tredict wyżej). Dostępność własnych konektorów zależy od planu konta.
- Po dodaniu: włącz konektor w rozmowie (menu narzędzi) i przejdź logowanie OAuth.
- MCP uruchamiane lokalnie (intervals.icu, nieoficjalne Garmin) — tylko w aplikacji desktop (konfiguracja serwerów lokalnych) albo w Claude Code.

### Claude Code
```bash
# zdalny MCP z OAuth
claude mcp add --transport http coros https://mcp.coros.com/mcp
claude mcp add --transport http tredict https://www.tredict.com/api/mcp/v2
# lokalny MCP (przykład: intervals.icu)
claude mcp add intervals-icu --scope user \
  --env INTERVALS_ICU_API_KEY=<klucz> --env INTERVALS_ICU_ATHLETE_ID=<id> \
  -- uvx intervals-icu-mcp
```
Po dodaniu: `/mcp` w Claude Code, żeby zalogować się do serwerów OAuth.

### ChatGPT
- Najpierw **katalog aplikacji** (np. Tredict jako aplikacja).
- Własne serwery MCP: tryb deweloperski (Ustawienia → Aplikacje → Zaawansowane → Tryb deweloperski). Na dzień 2026-11 pełne MCP z akcjami zapisu jest oficjalnie opisane dla planów Business / Enterprise / Edu; w planach indywidualnych możliwości mogą być ograniczone (np. tylko odczyt) — sprawdź aktualną pomoc OpenAI przed instalacją.
- Gdy zapis przez MCP nie działa: AI przygotowuje plan, biegacz wpisuje go w aplikacji zegarka lub pośrednika.

## 5. Test po podłączeniu

1. Odczyt: lista aktywności z ostatnich 4–8 tygodni → podsumowanie do `_facts.md`.
2. Zapis: pierwsza prawdziwa sesja planu → biegacz potwierdza, że widzi ją w aplikacji / na zegarku.
3. Zapisz w `00 Start.md`: droga zapisu, czego platforma nie przyjmuje, jak przesuwać i usuwać treningi, `source_id` aktywności (np. `coros:<id>`, `garmin:<id>`, `intervals:<id>`, `tredict:<id>`).

## Źródła (sprawdzone 2026-11-24)

- COROS MCP — oficjalne repozytorium: https://github.com/coroslab/COROS-MCP
- Tredict MCP: https://mcpservers.org/servers/tredict-com/mcp-server · synchronizacja z zegarkami: https://www.tredict.com/faq/which-recording-devices-and-services-are-supported/ · Suunto: https://www.tredict.com/faq/suunto---how-to-connect-and-synchronize-my-watch/ · COROS: https://tredict.com/blog/coros_training_sync
- intervals.icu — integracje: https://www.intervals.icu/integrations/ · Suunto Guides: https://forum.intervals.icu/t/upload-workouts-to-suunto-watches/9560 · Garmin: https://forum.intervals.icu/t/upload-planned-workouts-to-garmin-connect/1521
- intervals.icu MCP: https://pypi.org/project/intervals-icu-mcp · https://github.com/eddmann/intervals-icu-mcp
- Garmin Personal API (odczyt) — przykład MCP: https://mcpservers.org/servers/indaco/garmin-personal-mcp · nieoficjalny MCP z zapisem: https://github.com/Taxuspt/garmin_mcp
- Suunto MCP (społeczność): https://github.com/googlarz/suunto-mcp
- Polar + TrainingPeaks: https://polar.com/en/media-room/polar-brings-automatic-trainingpeaks-training-plan-and-structured-workout-integration · Polar MCP (odczyt): https://github.com/NelsonNew/polar-mcp-server
- ChatGPT — tryb deweloperski: https://developers.openai.com/api/docs/guides/developer-mode.md · https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt
