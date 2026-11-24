# Przykład 2 — półmaraton na asfalcie (osoba fikcyjna)

## Profil (podsumowanie po ankiecie)

- **Marek**, 41 lat, biega 6 lat, 4 dni w tygodniu, średnio 32 km / 3 h 20 min.
- **Ostatni wynik:** 10 km w 48:30 na płaskiej trasie, 3 tygodnie temu.
- **Start A:** półmaraton, 2027-04-11 (19 tygodni od instalacji). Cel: 1:45.
- **Czas:** wt, czw, sb, nd (do 1 h w tygodniu, do 1 h 45 min w niedzielę). Bieżnia lekkoatletyczna 2 km od domu.
- **Zdrowie:** screening bez flag. **Sprzęt:** Garmin Forerunner, pas na klatkę; konto intervals.icu (już połączone z Garmin Connect).
- **Preferencje:** brak ulubionego trenera, lubi konkretne tempa; siłownia nie, ale ćwiczenia w domu tak; tryb `wysyłaj`; plan na tydzień.

## Propozycja metodologii (zatwierdzona)

- **Rama:** moduł `asfalt`, **wariant D (Daniels, VDOT)** — aktualny wynik, lubi tempa, 4 dni biegania.
- **Punkt startowy:** VDOT ≈ 41,5 z wyniku 10 km 48:30 (`narzedzia/vdot.py`, do potwierdzenia oficjalnym kalkulatorem). Przewidywany półmaraton przy tym VDOT: ok. 1:47:30; cel 1:45 wymaga poprawy o ok. 1 punkt VDOT — realne w 19 tygodni, ocena po teście w połowie cyklu.
- **Orientacyjne tempa:** E 5:41–6:48 /km, T 4:57–5:11 /km, I 4:28–4:39 /km, R ok. 103 s / 400 m.
- **Warstwa dowodowa:** większość biegania w E (piramidalnie); siła 2× w tygodniu w domu (ćwiczenia jednonóż, łydki, plyometria); taper ok. 10–14 dni.
- **Dopasowanie:** 4 dni → Q1 (wt, T) + Q2 (czw, I lub R) + długie (nd) + łatwy z przebieżkami (sb); siła w domu pn i pt; bieżnia lekkoatletyczna do I i R.
- **Alternatywa:** wariant N (sub-próg 2–3× w tygodniu) — jeśli Q2 z interwałami będzie zbyt męczący przy pracy.

## Platforma

Droga na zegarek: **intervals.icu** (darmowe; „Upload planned workouts” zaznaczone, typ: Run) + lokalny MCP `intervals-icu-mcp` w Claude Desktop. Plan trafia do Garmin Connect ok. tydzień naprzód. Siła — w notatce.

## Pierwszy tydzień

**Co Marek widzi w czacie (telefon):**

> Pn — ćwiczenia w domu 30 min
> Wt — 15 min truchtu + 2 × 1,6 km „komfortowo ciężko” (ok. 5:00/km), minuta przerwy + 10 min truchtu
> Śr — wolne
> Czw — spokojny bieg 40 min + 6 krótkich przyspieszeń
> Pt — ćwiczenia w domu 30 min
> Sb — spokojny bieg 40 min
> Nd — długi spokojny bieg 1 h 10 min
> Biegi wysłałem na zegarek.

**Notatka `Plany/2026-W49.md` (z kodami, dla porządku):**

| Dzień | Kod | Sesja | Intensywność | Czas / dystans | Zegarek |
|---|---|---|---|---|---|
| Pn | Siła A | dom: przysiad bułgarski, wspięcia na palce, pogo, deska | RPE 6 | 30 min | ręcznie |
| Wt | A-T-CRUISE | 15 min E + 2 × 1,6 km T (przerwa 1 min) + 10 min E | T 4:57–5:11 /km | ok. 7 km (T = 10% tygodnia) | wysłano |
| Śr | — | wolne | — | — | — |
| Czw | A-E + A-ST | łatwy + 6 × 20 s przebieżki | E | 40 min | wysłano |
| Pt | Siła B | dom: step-up, RDL na jednej nodze z plecakiem, skoki obunóż | RPE 6 | 30 min | ręcznie |
| Sb | A-E | łatwy | E | 40 min | wysłano |
| Nd | A-LR | długie | E | 1 h 10 min | wysłano |

Bieganie ok. 32 km (= średnia z 4 tygodni); pierwszy Q2 z interwałami dopiero w 2. tygodniu. Test (parkrun lub 5 km samodzielnie) w tygodniu 7.
