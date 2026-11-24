---
domena: sport
rytm: tygodniowy
swiezosc_zrodel: 12 miesięcy
uspienie_hipotez: 8 tygodni
niezalezne_sytuacje: różne tygodnie treningowe
notatki: Dziennik/, Plany/, Wiedza/, Sezon.md, Metodologia.md
aktualizacja: <RRRR-MM-DD>
---

# Profil domeny: sport — <imię biegacza>

## Zakres
<np. trail i ultra w górach (z miasta), siła, rower jako objętość tlenowa, regeneracja; plany w <platforma>>

## Kontekst do każdego planu
- Sezon: `../../../Sezon.md` · Metodologia: `../../../Metodologia.md` · Profil: `../../../Profil biegacza.md`

## Źródła obserwacji (drabina kosztów)
1. Podsumowania z platformy: <lista aktywności, obciążenie, HRV, sen, tętno spoczynkowe>.
2. Notatki biegacza w `Dziennik/` (odczucia, RPE, ciężary) i plany w `Plany/`.
3. Dane okrążeń — tylko kluczowe sesje, max 2 w tygodniu.
4. Pliki FIT — tylko gdy hipoteza wymaga szczegółu.

`source_id`: `<platforma>:<id>` (aktywności) · `<platforma>:hrv:<data>` / `<platforma>:rhr:<data>` · `fit:<źródło>:<data>` · `vault:<ścieżka>` · `user:<data>`.

## Metodyka nadrzędna
<rama z `Metodologia.md`> — rama interpretacji, nie bezwzględna prawda.

## Uwagi o pomiarze
- Biegi w górach: tempo i tętno zniekształcone przez przewyższenie, zbiegi, upał i zmęczenie mięśni → porównuj tylko podobne sesje; inaczej obserwacja `zanieczyszczona`.
- Markery tlenowe (dryf tętna, AeT) — najlepiej z bieżni, płaskiej pętli lub roweru ze stałą mocą.
- Źródło tętna: <nadgarstek / opaska / pas> — <uwagi o dokładności>.
- Siła: szacowane 1RM to przybliżenie — porównuj ten sam ruch i technikę.
- Progi bez testu → strefy tymczasowe (patrz `_facts.md`).

## Czynniki zakłócające (checklista)
Krótki sen · stres w pracy · deficyt kaloryczny · teren / przewyższenie / pogoda / upał · infekcja · dzień po siłowni nóg · dni od ostatniej mocnej sesji lub startu · podróż · <czynniki z życia biegacza: praca zmianowa, opieka nad dziećmi, …>

## Wymaga zgody (→ `_proposals.md`)
- Reguły zwiększające objętość lub intensywność, zmieniające rozkład akcentów, progresję siły lub taper.
- Zmiany faktów, od których zależą strefy i progi.

## Bezpieczeństwo
Ból, infekcja, sygnały przeciążenia (spadek HRV + wyższe tętno spoczynkowe + złe samopoczucie) wygrywają z każdą regułą. Objawy sercowe → stop i lekarz. Informacje zdrowotne nie stają się hipotezami ani regułami. Szczegóły: skill `ai-trener`, `references/bezpieczenstwo.md`.

## Ważne daty (bez eksperymentów w ostatnich 3 tygodniach przed)
- <RRRR-MM-DD> <start A>
