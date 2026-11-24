# AGENTS.md

Repozytorium zawiera paczkę **AI Trener** — skill dla asystentów AI, który instaluje i prowadzi projekt treningowy biegacza.

- Instrukcja startowa dla agenta: `START.md`.
- Skill: `skill/ai-trener/SKILL.md` (ścieżki w skillu są względne wobec `skill/ai-trener/`).
- Gdy użytkownik prosi o instalację, plan, zapis treningu albo przegląd tygodnia — postępuj wg `START.md`.
- Gdy użytkownik rozwija samą paczkę (edycja skilla, modułów, szablonów):
  - język treści: polski; nazwy plików szablonu Pętli Wiedzy (`_domains.md`, `_facts.md` itd.) zostają jak w frameworku Knowledge Loop,
  - opis skilla w `SKILL.md` ≤ 200 znaków,
  - źródła w modułach: tylko własne parafrazy + link, tier A–D, data sprawdzenia; bez kopiowania cudzych tekstów i planów z książek,
  - bez danych osobowych w przykładach (przykłady są fikcyjne),
  - po zmianach w `skill/` przebuduj ZIP: `bash scripts/zbuduj-zip.sh`,
  - sprawdź zmianę na scenariuszach z `skill/ai-trener/evals/scenariusze.md`.
