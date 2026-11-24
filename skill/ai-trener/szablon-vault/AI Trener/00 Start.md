---
typ: ai-trener-start
wersja_paczki: 0.3.1
utworzono: <RRRR-MM-DD>
---

# AI Trener — <imię biegacza>

To jest Twój projekt treningowy. Trener (AI) czyta ten plik na początku każdej rozmowy.

## Jak rozmawiać z trenerem

- „Ułóż plan na przyszły tydzień” / „na dwa tygodnie”.
- „W czwartek nie dam rady, przesuń akcent.”
- „Zrobiłem trening: …” (odczucia, RPE, ciężary z siłowni) — trener zapisze dziennik i obserwacje.
- „Przegląd tygodnia” — porównanie planu z wykonaniem, wnioski, plan na kolejny tydzień.
- „Mam nowy start: …” / „Chcę trenować wg …” — zmiana sezonu lub metodologii.
- „Boli mnie …” — trener najpierw sprawdza bezpieczeństwo.
- „Zatwierdzam P-003” — zgoda na zmianę czekającą w `Knowledge Loop/_proposals.md`.

## Konfiguracja (wypełnia trener przy instalacji)

| Pole | Wartość |
|---|---|
| Lokalizacja projektu | <lokalny folder / Google Drive: ścieżka> |
| Reguła zapisu | <np. Drive: aktualizacja = nowy plik, stary do kosza, sprawdzenie folderu> |
| Klient AI | <Claude / Claude Code / ChatGPT / inny> |
| Zegarek | <marka, model, źródło tętna> |
| Droga planów na zegarek | <np. COROS MCP / Tredict MCP → Garmin / intervals.icu → Suunto / ręcznie> |
| Czego platforma nie przyjmuje | <np. siła — tylko w notatce; przesuwanie — w aplikacji> |
| Odczyt danych | <np. COROS MCP / Strava / intervals.icu> |
| `source_id` aktywności | <np. coros:<id>> |
| Tryb zapisu planów | <pytaj / wysyłaj> |
| Horyzont planu | <1 / 2 tygodnie> |
| Jednostki | <km / mile> |
| Wygląd planu | <lista na telefon / tabela> |
| Styl komunikacji | <krótko / z wyjaśnieniami> |
| Rytm | <np. przegląd tygodnia w niedzielę wieczorem — zadanie cykliczne: tak / nie> |

## Mapa projektu

| Plik / folder | Co zawiera |
|---|---|
| `Profil biegacza.md` | wyniki ankiety: punkt startowy, czas, teren, sprzęt, preferencje |
| `Sezon.md` | starty, fazy z datami, stałe ograniczenia, stan na dziś |
| `Metodologia.md` | Twoja metodologia: rama, warstwa dowodowa, dopasowanie, spory |
| `Moje sesje.md` | biblioteka sesji dopasowana do Twoich miejsc i sprzętu |
| `Plany/` | plany tygodniowe `RRRR-Www.md` |
| `Dziennik/` | notatki z treningów i siłowni |
| `Wiedza/` | pliki wybranego modułu metodologii |
| `Knowledge Loop/` | Pętla Wiedzy: fakty, hipotezy, reguły, źródła, propozycje zmian |

## Stan instalacji

- [ ] 1. Środowisko
- [ ] 2. Ankieta
- [ ] 3. Metodologia zatwierdzona
- [ ] 4. Zegarek podłączony (odczyt / zapis)
- [ ] 5. Projekt założony
- [ ] 6. Testy i pierwszy plan
- [ ] 7. Rytm ustawiony

Instalacja zakończona: <RRRR-MM-DD>
