# Testy — moduł asfaltowy

Wynik zapisujesz jako fakt w `_facts.md` (wartość, metoda, data, `source_id`). Zmiana faktu, od którego zależą tempa i strefy → `_proposals.md`.

## A-TEST-RACE · VDOT z wyniku

- Wynik z ostatnich ~6 tygodni, na płaskiej trasie, pobiegnięty „na maksa” (trening albo luźny start daje za wolne tempa).
- VDOT i tempa E / M / T / I / R: oficjalny kalkulator VDOT (aplikacja / strona VDOT O2) [DAN]. Bez dostępu do kalkulatora, a z wykonywaniem kodu: `python3 narzedzia/vdot.py <metry> <czas>` w folderze skilla (te same równania Danielsa–Gilberta; tempa treningowe przybliżone). Zapisz VDOT, tempa i metodę w `_facts.md`.
- Przeliczaj po każdym kolejnym starcie lub co 4–6 tygodni (np. parkrun jako test).
- Upał, wiatr, podbiegi na trasie → wynik zaniża VDOT; zaznacz w metodzie.

## A-TEST-30 · Test progowy 30 min (LTHR)

- Po rozgrzewce 30 min samodzielnie, równo i maksymalnie (jak start na 30 min), na płaskim. Po 10 min naciśnij okrążenie.
- **Średnie tętno z ostatnich 20 min ≈ LTHR** (tętno progowe); średnie tempo z 30 min ≈ tempo progowe. Metoda Joe Friela, tier C. [FRIEL]
- Test w grupie lub na zawodach → potrzebne ok. 60 min, bo rywalizacja podbija wysiłek.

## A-TEST-TALK · Test mowy

- Górna granica, przy której mówisz pełnymi zdaniami ≈ granica łatwej strefy. Na start, zanim są dane.

## A-TEST-DRIFT · Dryf tętna (opcjonalnie, jak w module górskim)

- 60 min stałym tempem na bieżni lub płaskiej pętli; dryf ≤5% → łatwa strefa ustawiona dobrze. Szczegóły: `../gory/testy.md` G-TEST-AeT.

## Strefy tętna z LTHR (orientacyjnie, Friel — bieg)

| Strefa | % LTHR |
|---|---|
| Z1 | < 85% |
| Z2 | 85–89% |
| Z3 | 90–94% |
| Z4 | 95–99% |
| Z5a / b / c | 100–102% / 103–106% / > 106% |

Strefy z VDOT (tempa) i z LTHR (tętno) to dwa systemy — w `Metodologia.md` zapisz, którym prowadzisz które sesje (np. E i sub-próg tętnem, T / I / R tempem).
