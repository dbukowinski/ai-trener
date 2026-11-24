# AI Trener 🏃‍♂️⛰️

🇵🇱 Polski · 🇬🇧 [English version](README.en.md)

**Osobisty trener biegowy w Twoim asystencie AI** — dla biegaczy górskich, trailowych, ultra i asfaltowych.

Uruchamiasz instrukcję, AI przeprowadza ankietę, proponuje metodologię **szytą pod Ciebie** (Twój ulubiony trener albo sprawdzony moduł z paczki), zakłada Twój projekt treningowy z pamięcią opartą na dowodach (Pętla Wiedzy) i wysyła plany na zegarek.

> Stan: **wersja testowa 0.2.0** (listopad 2026), po polsku i [po angielsku](README.en.md). Szukam testerów — zobacz [TESTOWANIE.md](TESTOWANIE.md).

## Co dostajesz

- **Instalację rozmową:** ankieta w kilku rundach (cel, życie, teren, sprzęt, zdrowie, preferencje) → propozycja metodologii do zatwierdzenia → podłączenie zegarka → gotowy projekt i pierwszy plan.
- **Metodologię elastyczną:**
  - masz ulubionego trenera lub metodę → AI buduje metodologię z jego źródeł (z oceną wiarygodności i porównaniem z badaniami),
  - nie masz → **góry:** moduł oparty na szkole Evoke Endurance / Uphill Athlete (baza tlenowa, siła → wytrzymałość mięśniowa, zbiegi), **asfalt:** moduł oparty na badaniach rozkładu intensywności + do wyboru Daniels (VDOT), sub-próg „norweski” dla amatorów, Pfitzinger (maraton) albo 80/20.
- **Góry bez gór:** plan górski z miasta — bieżnia z nachyleniem, schody w bloku, StairMaster z plecakiem, powtórzenia na małej górce, zbiegi i ekscentryka na siłowni.
- **Plany na zegarek przez MCP:** COROS (oficjalny MCP), Garmin / Suunto / Wahoo / Apple Watch przez pośredników (Tredict, intervals.icu), Polar przez TrainingPeaks; zawsze z trybem ręcznym jako zapasem.
- **Projekt w Twoim vaulcie** (Obsidian, Google Drive albo zwykły folder): profil, sezon, metodologia, biblioteka sesji, plany, dziennik.
- **Pętlę Wiedzy:** fakty z pomiarów, hipotezy z kontrhipotezą, reguły indywidualne, indeks źródeł, propozycje zmian zatwierdzane przez Ciebie.

## Jak to działa

```
Ankieta ──► Metodologia (zatwierdzasz) ──► Zegarek podłączony ──► Projekt „AI Trener/” ──► Plan 1–2 tyg. na zegarek
                                                                         ▲                         │
                                                                         └── przegląd tygodnia ◄───┘
                                                                     (Pętla Wiedzy: obserwacje → hipotezy → reguły)
```

## Instalacja

Wybierz jedną ścieżkę. W każdej na koniec piszesz do AI: **„Zainstaluj AI Trenera”**.

### A. Claude (www, desktop, mobile) — skill
1. Pobierz [`dist/ai-trener-skill.zip`](dist/ai-trener-skill.zip).
2. W Claude: **Customize → Skills → „+” → Create skill → Upload a skill** i wybierz ZIP. Skille wymagają włączonego tworzenia plików / wykonywania kodu w ustawieniach. Szczegóły: [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude).
3. Podłącz w konektorach miejsce na projekt: **Google Drive** (albo w aplikacji desktop dodaj folder) oraz zegarek lub pośrednika (patrz „Zegarki” niżej).
4. Napisz: „Zainstaluj AI Trenera”.

### B. Folder na komputerze — Claude Code, Claude Desktop z folderem, Codex
1. `git clone https://github.com/dbukowinski/ai-trener` albo pobierz ZIP repozytorium i rozpakuj.
2. Otwórz folder w Claude Code / Codex (albo dodaj go w Claude Desktop).
3. Napisz: „Przeczytaj START.md i zainstaluj AI Trenera”.
   AI zapyta, gdzie założyć Twój projekt (np. Twój vault Obsidian) — paczka zostaje osobno, więc łatwo ją potem zaktualizować.

### C. Google Drive
1. Rozpakuj repozytorium i wgraj cały folder na Google Drive.
2. W Claude (albo innym asystencie z konektorem Drive) napisz: „Znajdź na moim Google Drive plik START.md z paczki ai-trener i wykonaj instrukcję”.

### D. ChatGPT
Projekt z instrukcjami + jeden plik wiedzy: [chatgpt/README.md](chatgpt/README.md). Uwaga: ChatGPT zwykle nie zapisuje plików, więc projekt prowadzisz w trybie kopiuj-wklej.

## Zegarki (stan 2026-11)

| Zegarek | Plan na zegarek |
|---|---|
| COROS | oficjalny COROS MCP (`https://mcp.coros.com/mcp`) |
| Garmin | Tredict (oficjalny MCP) albo intervals.icu (darmowe, MCP społeczności) |
| Suunto | Tredict albo intervals.icu (SuuntoPlus Guides) |
| Polar | TrainingPeaks → Polar Flow (oficjalna integracja); MCP do TrainingPeaks tylko nieoficjalne |
| Wahoo, Apple Watch | Tredict (Apple Watch przez Watchletic), intervals.icu |
| inny / brak | tryb ręczny |

Szczegóły, adresy, konfiguracja w Claude, Claude Code i ChatGPT: [skill/ai-trener/references/platformy.md](skill/ai-trener/references/platformy.md).

## Przykłady

- [Trail z miasta](przyklady/gory-z-miasta.md) — 50 km / +2400 m bez gór pod ręką, COROS.
- [Półmaraton](przyklady/asfalt-polmaraton.md) — wariant Daniels, Garmin przez intervals.icu.

## Struktura repozytorium

```
START.md / START.en.md       ← instrukcja dla AI (instalacja / praca), PL / EN
AGENTS.md, CLAUDE.md         ← kontekst dla agentów (Codex, Claude Code)
skill/ai-trener/             ← skill po polsku (to samo, co w ZIP)
skill/ai-coach/              ← ten sam skill po angielsku (English edition)
  SKILL.md                   ← router i zasady trenera
  references/                ← instalacja, ankieta, dobór metodologii, planowanie, platformy, format treningu, Pętla Wiedzy, bezpieczeństwo
  metodologie/gory/          ← moduł górski (zasady, sesje, fazy, testy, siła, źródła)
  metodologie/asfalt/        ← moduł asfaltowy (warianty D / N / P / B)
  metodologie/wlasny-trener/ ← budowa metodologii z ulubionego trenera
  szablon-vault/AI Trener/   ← szablon Twojego projektu (z Pętlą Wiedzy)
  narzedzia/vdot.py          ← VDOT i tempa z wyniku
  evals/scenariusze.md       ← scenariusze testowe
chatgpt/                     ← instrukcje dla ChatGPT (PL i EN)
przyklady/ · examples/       ← przykładowe instalacje (osoby fikcyjne), PL · EN
dist/                        ← gotowe paczki: ZIP skilla, cały skill w jednym pliku (PL i EN)
scripts/zbuduj-zip.sh        ← budowanie paczek z folderu skill/
```

## Bezpieczeństwo i prywatność

- AI Trener to narzędzie do planowania treningu, **nie lekarz ani fizjoterapeuta**. Ankieta zawiera krótki screening zdrowotny; przy niepokojących objawach AI zaleca konsultację i nie układa intensywnego planu.
- Osoby poniżej 18 lat: trening pod nadzorem dorosłego, bez redukcji masy ciała (zasady w `references/bezpieczenstwo.md`).
- Twoje dane zostają w Twoich plikach i na Twoich kontach. Do wyszukiwarek AI wysyła tylko ogólne terminy.
- Integracje nieoficjalne (np. logowanie hasłem do Garmin Connect, ciasteczko TrainingPeaks) są opisane jako opcja dla zaawansowanych, na własne ryzyko.

## Źródła i podziękowania

Moduły opisują zasady **własnymi słowami** i odsyłają do źródeł (rejestry: `metodologie/*/zrodla.md`). Paczka nie jest powiązana z Evoke Endurance, Uphill Athlete, autorami książek ani producentami zegarków i platform. Pętla Wiedzy to adaptacja frameworku [knowledge-loop](https://github.com/dbukowinski/knowledge-loop).

Poprzednia wersja tego repozytorium (aplikacja web) jest w gałęzi `archiwum/wersja-0`.

## Licencja

[MIT](LICENSE)
