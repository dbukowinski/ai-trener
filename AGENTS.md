# AGENTS.md

Repozytorium zawiera paczkę **AI Trener** — skill dla asystentów AI, który instaluje i prowadzi projekt treningowy biegacza.

Dwie wersje językowe / two editions:

| | Polski | English |
|---|---|---|
| Instrukcja startowa / start instructions | `START.md` | `START.en.md` |
| Skill | `skill/ai-trener/` | `skill/ai-coach/` |
| Projekt biegacza / runner project | `AI Trener/` | `AI Coach/` |

- Ścieżki w skillu są względne wobec jego folderu / skill paths are relative to its folder.
- Gdy użytkownik prosi o instalację, plan, zapis treningu albo przegląd tygodnia — postępuj wg `START.md` (po polsku) albo `START.en.md` (in English), zgodnie z językiem użytkownika.
- Gdy użytkownik rozwija samą paczkę (edycja skilla, modułów, szablonów):
  - obie wersje muszą mieć tę samą treść merytoryczną: każdą zmianę w `skill/ai-trener/` wprowadź też w `skill/ai-coach/` (i odwrotnie), tak samo w README / START / TESTOWANIE↔TESTING / chatgpt / przyklady↔examples,
  - nazwy plików szablonu Pętli Wiedzy (`_domains.md`, `_facts.md` itd.) zostają jak w frameworku Knowledge Loop,
  - opis skilla w `SKILL.md` ≤ 200 znaków (w obu wersjach),
  - źródła w modułach: tylko własne parafrazy + link, tier A–D, data sprawdzenia; bez kopiowania cudzych tekstów i planów z książek,
  - bez danych osobowych w przykładach (przykłady są fikcyjne),
  - po zmianach w `skill/` przebuduj ZIP: `bash scripts/zbuduj-zip.sh`,
  - sprawdź zmianę na scenariuszach z `skill/ai-trener/evals/scenariusze.md` / `skill/ai-coach/evals/scenarios.md`,
  - przy nowej wersji podbij `wersja_paczki` / `package_version` w obu szablonach `00 Start.md` i dopisz wpis w `CHANGELOG.md`.
