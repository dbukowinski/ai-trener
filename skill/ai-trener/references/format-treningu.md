# Neutralny format treningu

Każdą sesję opisujesz najpierw w tym formacie, a potem mapujesz na narzędzie platformy. Dzięki temu ten sam plan da się wysłać do COROS, Tredict, intervals.icu albo wpisać ręcznie.

```yaml
data: 2026-12-02
nazwa: "Z2 pod górę — bieżnia 12%"
sport: bieg | trail | bieg-bieżnia | rower | rower-indoor | siła | marsz | inne
cel: "baza tlenowa pod górę"
miara_intensywności: tętno | tempo | moc | RPE
kroki:
  - typ: rozgrzewka            # rozgrzewka | praca | przerwa | schłodzenie | powtórz
    czas: 10min                # albo dystans: 2km
    cel: {tętno: "Z1"}         # strefa z _facts.md albo zakres bpm / tempo / RPE
  - typ: powtórz
    razy: 4
    kroki:
      - {typ: praca, czas: 8min, cel: {tętno: "Z2 górna połowa"}, uwagi: "nachylenie 12%"}
      - {typ: przerwa, czas: 2min, cel: {tętno: "Z1"}, uwagi: "nachylenie 1%"}
  - typ: schłodzenie
    czas: 10min
    cel: {tętno: "Z1"}
przewyższenie_planowane: 450m
wersja_zastępcza: "4 × 8 min po schodach w bloku, tętno jak wyżej"
uwagi: "Jeśli tętno ucieka powyżej Z2 przy 12% — zmniejsz nachylenie, nie przyspieszaj."
```

## Mapowanie

| Platforma | Jak | Ograniczenia |
|---|---|---|
| COROS MCP | trening w bibliotece + zaplanowanie albo trening bezpośrednio w kalendarzu; plan wielotygodniowy jako plan treningowy | tylko bieg / rower / trail; siła i pływanie wyłącznie z istniejącej biblioteki |
| Tredict MCP | trening dodany do planu lub kalendarza | sync zwykle 7 dni naprzód |
| intervals.icu MCP | wydarzenie w kalendarzu z opisem kroków (narzędzia MCP budują strukturę) | sync zwykle ok. 7 dni naprzód; zaznaczone „Upload planned workouts” |
| Tryb ręczny | tekst kroków w notatce planu | biegacz wpisuje w aplikacji |

Strefy w krokach podawaj jako konkretne liczby (bpm, min/km, W), gdy platforma tego wymaga. Liczby bierzesz z `_facts.md`; gdy ich brak — RPE i opis, z dopiskiem „strefy tymczasowe”.

## Siła

Platformy zegarkowe słabo obsługują siłownię. Sesję siłową zapisz w notatce (`Dziennik/_szablon trening siłowy.md`) jako tabelę: ćwiczenie · serie × powtórzenia · ciężar startowy · RPE / zapas powtórzeń · przerwa · uwagi techniczne. Na zegarek wyślij najwyżej „blok czasowy” (np. 60 min siła), jeśli platforma na to pozwala.
