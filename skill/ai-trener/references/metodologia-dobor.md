# Dobór metodologii

Metodologia jest **elastyczna i szyta pod biegacza**. Składa się z trzech warstw:

1. **Rama** — jedna główna szkoła treningowa (moduł z paczki albo ulubiony trener biegacza). Daje logikę faz, typy sesji i język.
2. **Warstwa dowodowa** — wspólna dla wszystkich: rozkład intensywności, trening siłowy, taper, progresja, bezpieczeństwo (badania tier A/B, wpisane w moduły i w indeks źródeł).
3. **Dopasowanie osobiste** — wynik ankiety (czas, teren, sprzęt, ograniczenia) i potem Pętli Wiedzy (reguły indywidualne z danych biegacza).

Zapisujesz to w `AI Trener/Metodologia.md`.

## Drzewo decyzji

```
Czy biegacz ma ulubionego trenera / metodę / książkę?
├─ TAK → metodologie/wlasny-trener (research, rejestr źródeł, zasady, konflikty z badaniami)
│        Rama = ten trener. Moduł z paczki (góry/asfalt) tylko jako uzupełnienie tam, gdzie trener milczy.
└─ NIE → cel:
   ├─ góry / trail / ultra / skyrunning ........ metodologie/gory  (Evoke Endurance / Uphill Athlete)
   ├─ asfalt 5 km – maraton .................... metodologie/asfalt (wariant niżej)
   ├─ oba (start A w górach) ................... gory jako rama + sesje asfaltowe jako uzupełnienie
   ├─ oba (start A na asfalcie) ................ asfalt jako rama + podbiegi/siła z modułu gory
   └─ bez startu (forma, zdrowie, powrót) ...... asfalt wariant „80/20 / baza”, albo gory „baza”, gdy biegacz woli teren
```

### Warianty modułu asfaltowego

| Wariant | Dla kogo | Rdzeń |
|---|---|---|
| **Daniels (VDOT)** — domyślny | biegacz ma aktualny wynik, lubi konkretne tempa, 4–6 dni biegania | tempa E/M/T/I/R z wyniku, 2 jakościowe dni w tygodniu |
| **Próg „norweski” w wersji amatorskiej** (sub-próg) | mało czasu, regularność, lubi strukturę, ma pomiar tętna | 2–3 sesje sub-progowe w tygodniu, reszta łatwo, długie |
| **Pfitzinger (maraton)** | maratończyk z bazą ok. 85+ km/tydz. (plany 55/70/85 mil) | średnio-długie biegi w tygodniu, próg, długie z tempem maratońskim |
| **80/20 / baza** | początkujący, powrót po przerwie, bez startu | ok. 80% łatwo, proste akcenty, nacisk na regularność |

Szczegóły i źródła: `metodologie/asfalt/README.md`.

## Jak przedstawić propozycję

```
Rama: <moduł/trener> — bo <cel, staż, czas, teren>.
Warstwa dowodowa: <2–3 punkty z modułu, np. większość czasu nisko, siła 2×/tydz.>.
Dopasowanie do Ciebie:
- <ograniczenie> → <rozwiązanie> (np. brak gór → bieżnia 12–15% + schody w bloku + górka 30 m × N)
- …
Alternatywa: <inna droga> — zmieniłaby <co>.
```

## Hierarchia przy konfliktach

1. Bezpieczeństwo (`references/bezpieczenstwo.md`).
2. Ograniczenia i deklaracje biegacza (jego czas, zdrowie, preferencje).
3. Zmierzone dane biegacza → reguły indywidualne z Pętli Wiedzy.
4. Badania A/B (ogólne twierdzenia).
5. Rama metodologii (trener, tier C) — interpretacja praktyczna.
6. Twoja interpretacja — zawsze tylko hipoteza.

Konflikt rama ↔ badania nie ma „zwycięzcy” z automatu: opisujesz go w `Metodologia.md` (sekcja „Spory”) i proponujesz, jak go rozstrzygnąć danymi biegacza (test, eksperyment w Pętli).

## Zmiana metodologii w trakcie sezonu

- Drobna modyfikacja z danych (np. dłuższe rozgrzewki przed interwałami) → hipoteza w Pętli → po bramkach reguła.
- Zmiana ramy, rozkładu intensywności, progresji siły lub tapera → `_proposals.md`, decyzja biegacza.
- Nowy cel (np. zmiana startu z asfaltu na góry) → ponowny dobór wg drzewa, nowy szkielet w `Sezon.md`, stary zostaje w historii.
