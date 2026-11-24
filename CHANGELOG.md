# Zmiany / Changelog

## 0.2.1 — 2026-11-24

- Przygotowanie do publikacji: w README nowe sekcje „Bezpieczeństwo i odpowiedzialność”, „Prywatność” (kto przetwarza dane: asystent AI i podłączone platformy) oraz „Uwagi i wsparcie”.
- Instalacja: na starcie AI mówi w jednym zdaniu, że jest narzędziem do planowania, nie lekarzem, a biegacz trenuje na własną odpowiedzialność.
- Release prep: README gets "Safety and responsibility", "Privacy" (who processes data: your AI assistant and the platforms you connect) and "Feedback and support" sections.
- Installation: at the start the AI says in one sentence that it is a planning tool, not a doctor, and that the runner trains at their own risk.

## 0.2.0 — 2026-11-24

- Wersja angielska paczki: skill `ai-coach` (`skill/ai-coach/`), `README.en.md`, `START.en.md`, `TESTING.md`, instrukcje ChatGPT, przykłady (`examples/`), szablon zgłoszenia, paczki `dist/ai-coach-skill.zip` i `dist/ai-coach-full.md`.
- English edition of the package: the `ai-coach` skill, English README / START / testing guide / ChatGPT instructions / examples, issue template and `dist/` packages. Same content as the Polish edition; safety notes generalised for international users (local emergency numbers, mountain rescue), units km / miles in the questionnaire.
- Skrypt `scripts/zbuduj-zip.sh` buduje obie wersje.

## 0.1.0 — 2026-11-24 (wersja testowa)

- Nowa paczka AI Trener w miejsce poprzedniej aplikacji web (ta jest w gałęzi `archiwum/wersja-0`).
- Skill `ai-trener`: instalacja rozmową (ankieta → metodologia → zegarek → projekt → pierwszy plan), router codziennej pracy, zasady bezpieczeństwa.
- Moduły metodologii: góry (Evoke Endurance / Uphill Athlete, z zamiennikami w mieście), asfalt (warianty Daniels / sub-próg / Pfitzinger / 80/20), własny trener biegacza.
- Szablon projektu `AI Trener/` z Pętlą Wiedzy (fakty, hipotezy, reguły, indeks źródeł, propozycje).
- Platformy: COROS MCP, Tredict, intervals.icu, TrainingPeaks / Polar, tryb ręczny; konfiguracja w Claude, Claude Code i ChatGPT.
- Narzędzie `vdot.py`, scenariusze testowe, przykłady, instrukcja dla ChatGPT, szablon zgłoszeń testera.
