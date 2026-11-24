# AI Trener w ChatGPT

ChatGPT nie wczytuje skilli tak jak Claude, więc paczka działa tu jako **Projekt z instrukcjami i jednym plikiem wiedzy**.

## Instalacja (ok. 5 minut)

1. Pobierz z repozytorium plik **`dist/ai-trener-pelny.md`** (cały skill w jednym pliku).
2. W ChatGPT utwórz nowy **Projekt** (np. „AI Trener”).
3. W ustawieniach projektu wklej jako instrukcje treść pliku [`instrukcje-projektu.md`](instrukcje-projektu.md).
4. Dodaj do plików projektu `ai-trener-pelny.md`.
5. (Opcjonalnie) Podłącz aplikacje: zegarek lub pośrednika (np. Tredict jest w katalogu aplikacji ChatGPT), Google Drive. Szczegóły i ograniczenia: `skill/ai-trener/references/platformy.md` §4.
6. Napisz w projekcie: **„Zainstaluj AI Trenera”**.

## Ograniczenia, o których warto wiedzieć

- **Zapis plików.** ChatGPT zwykle nie zapisuje plików w Twoim Drive ani na dysku. Trener poda pliki projektu (`AI Trener/…`) jako bloki do skopiowania — zapisz je u siebie (np. w Obsidianie) i co jakiś czas wgrywaj aktualne wersje `00 Start.md`, `Profil biegacza.md`, `Sezon.md`, `Metodologia.md` i plików z `Knowledge Loop/` do plików projektu.
- **Plany na zegarek.** Własne serwery MCP z zapisem wymagają trybu deweloperskiego; zakres zależy od planu konta (stan 2026-11: pełny zapis opisany dla planów Business / Enterprise / Edu). Jeśli zapis nie działa, trener poda treningi do wpisania w aplikacji zegarka lub pośrednika.
- **Pełna wersja z automatycznym zapisem** działa najlepiej w Claude z folderem lokalnym lub Google Drive albo w Claude Code / Codex na komputerze (`README.md`, ścieżki A–C).
