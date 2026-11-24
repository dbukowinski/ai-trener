# Zmiany / Changelog

## 0.3.0 — 2026-11-24 (po pierwszym teście / after the first test)

Uwagi testerki: na telefonie ankieta była mało czytelna (dużo pytań w jednej wiadomości), za dużo skrótów, trudne dla osób rzadko używających AI.

- Ankieta: ok. 10 pytań podstawowych, **jedno na wiadomość**, odpowiedzi numerowane, postęp „(n/10)”, opcja „nie wiem / pomiń”, „pauza”; szczegóły dopytywane dopiero, gdy są potrzebne (z rozsądnymi ustawieniami domyślnymi).
- Instalacja w nowej kolejności: krótka ankieta → krótka metodologia → **pierwszy plan** → zapis → zegarek (opcjonalnie, krok po kroku).
- Styl rozmowy w `SKILL.md` §4: krótko, zero skrótów i kodów sesji w rozmowie, technika po ludzku; plan domyślnie jako lista na telefon.
- Słowniczek po ludzku (`references/slowniczek.md`), kopiowany do projektu biegacza.
- Zegarek bez kopiowania i bez instalowania: tabela „Najprościej” w `platformy.md` §2 (np. Garmin: Tredict, intervals.icu + oficjalny konektor Intervals w becie, athletedata) — plan pojawia się w kalendarzu Garmin Connect.
- Nowe scenariusze testowe 16–19; najszybszy test w README (jeden plik w dowolnym czacie).
- EN: the same changes in the English edition (`questionnaire.md`, `installation.md`, `glossary.md`, `SKILL.md` §4–5, `platforms.md` §2 "Simplest", scenarios 16–19).

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
