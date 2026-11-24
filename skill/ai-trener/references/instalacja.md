# Instalacja AI Trenera — procedura

Cel: biegacz **szybko dostaje pierwszy plan**, a sprawy techniczne (zapis plików, zegarek) są na końcu i są opcjonalne. Instalacja musi dać się przejść na telefonie, przez osobę, która rzadko używa AI.

Styl przez całą instalację (`SKILL.md` §4): krótkie wiadomości, jedno pytanie naraz, odpowiedzi numerowane, zero skrótów i kodów sesji (`references/slowniczek.md`).

Gdy rozmowa wraca po przerwie: jeśli jest `AI Trener/00 Start.md`, czytasz „Stan instalacji” i kontynuujesz od pierwszego niezakończonego etapu; jeśli projektu jeszcze nie ma — szukasz podsumowania ankiety w rozmowie.

## Etap 0. Powitanie (jedna krótka wiadomość)

Wzór:
> Cześć! Jestem Twoim trenerem biegowym. Zadam ok. 10 krótkich pytań — wystarczy odpisywać numerem. Potem dostaniesz plan na pierwszy tydzień. W każdej chwili możesz napisać „pauza”. Jestem narzędziem do planowania, nie lekarzem — plan zawsze oceniasz sam. Zaczynamy?

## Etap 1. Środowisko (po cichu)

Sprawdź sam, bez pytania biegacza:
1. **Czy możesz zapisywać pliki** — lokalny folder (Claude Code, Claude Desktop z dodanym folderem, Codex) albo Google Drive (konektor Drive).
2. **Jakie są podłączone narzędzia** — COROS, Tredict, intervals.icu, Garmin, Suunto, Polar, TrainingPeaks, Strava, Google Drive, kalendarz, zadania cykliczne.
3. **Google Drive:** konektor zwykle nie nadpisuje treści istniejącego pliku. Aktualizacja = nowy plik o tej samej nazwie, stary od razu do kosza, potem sprawdzenie folderu.

Nie mów o tym teraz biegaczowi. Wrócisz do tego w etapach 5–6.

## Etap 2. Ankieta — część podstawowa

`references/ankieta.md`, część A: ok. 10 pytań, jedno na wiadomość, z postępem „(3/10)”. Pytanie zdrowotne (8) jest obowiązkowe; „tak” → zalecenie konsultacji lekarskiej przed mocniejszym treningiem, plan od lekkiego ruchu.

Na koniec: podsumowanie w 3–5 krótkich linijkach i „Zgadza się? 1 tak · 2 chcę coś poprawić”.

## Etap 3. Metodologia — krótko, do zatwierdzenia

Dobór wg `references/metodologia-dobor.md` (ulubiony trener → `metodologie/wlasny-trener/`; bez niego: góry → `metodologie/gory`, asfalt → `metodologie/asfalt` z wariantem).

Biegaczowi pokazujesz **krótką wersję** (3–5 linijek, bez skrótów), np.:
> Proponuję trenować metodą trenerów górskich Uphill Athlete: dużo spokojnego biegania, siła nóg i podbiegi. Ponieważ nie masz gór pod ręką, podbiegi zrobimy na bieżni pod kątem i na schodach w bloku, a raz w miesiącu dłuższe wyjście w góry.
> Pasuje? 1 tak · 2 chcę coś zmienić · 3 opowiedz więcej

Pełną wersję (rama, warstwa dowodowa, dopasowanie, alternatywa, spory) zapisujesz w `Metodologia.md` w etapie 5 albo pokazujesz po „3 opowiedz więcej”. Bez zgody biegacza nie przechodzisz dalej.

## Etap 4. Pierwszy plan (tydzień)

1. Zadaj 1–2 pytania z części B, które są potrzebne teraz (np. „Które dni w tym tygodniu odpadają?”), jedno naraz.
2. Jeśli progi nie są zmierzone, plan zawiera prosty test z modułu (`testy.md`) albo strefy wg odczuć (test mowy) — powiedz to po ludzku („pierwszy tydzień jest też po to, żebym poznał Twoje tempo”).
3. Plan **zachowawczy**: objętość nie wyższa niż obecna (odpowiedź 4 lub dane z zegarka).
4. Pokaż plan w formacie z `SKILL.md` §5 (domyślnie lista na telefon), bez kodów sesji.

## Etap 5. Zapis projektu

1. Jeśli możesz zapisywać pliki — jedno pytanie:
   > Gdzie mam zapisać Twój plan i notatki? 1 Google Drive (folder „AI Trener”) · 2 inny folder · 3 na razie nigdzie
2. Nie możesz zapisywać (np. ChatGPT bez konektora) → jedno zdanie: „Na razie wszystko zostaje w tej rozmowie. Jeśli chcesz, na końcu dam Ci notatkę do zapisania.” Pliki projektu podajesz tylko na prośbę, jako bloki do skopiowania.
3. Przy zapisie: skopiuj `szablon-vault/AI Trener/` do wybranego miejsca (na Drive: foldery i pliki o tych samych nazwach) i wypełnij (zastąp `<…>`; czego nie wiesz — „brak danych” albo wartość domyślna z dopiskiem „domyślnie”):
   - `00 Start.md` — konfiguracja, stan instalacji, jak rozmawiać z trenerem,
   - `Profil biegacza.md` — ankieta,
   - `Sezon.md` — starty, szkielet faz (`fazy.md` modułu), stałe ograniczenia,
   - `Metodologia.md` — pełna wersja z etapu 3,
   - `Moje sesje.md` — sesje z modułu dopasowane do terenu, sprzętu i czasu biegacza,
   - `Plany/RRRR-Www.md` — plan z etapu 4,
   - `Knowledge Loop/domains/sport/_profile.md`, `_facts.md` (tylko zmierzone, z metodą), `sources/sport/_registry.md` (z `zrodla.md` modułu + źródła ulubionych trenerów).
4. Skopiuj pliki modułu (`zasady.md`, `sesje.md`, `fazy.md`, `testy.md`, `sila.md`) do `AI Trener/Wiedza/<moduł>/`, a `references/slowniczek.md` jako `AI Trener/Wiedza/Słowniczek.md`.
5. Sprawdź wynik (wylistuj folder). Dopiero potem napisz „zapisano”.

## Etap 6. Zegarek (opcjonalnie)

1. Jedno pytanie:
   > Chcesz, żebym wysyłał plan prosto na Twój zegarek? 1 tak · 2 później · 3 nie, wpiszę sam
2. „Tak” → wybierasz **jedną** drogę z tabeli „Najprościej” w `references/platformy.md` §2 (dopasowaną do zegarka i budżetu; płatne opcje nazywasz wprost) i prowadzisz biegacza **krok po kroku, jeden krok na wiadomość** („Kliknij …”, „Gotowe? 1 tak · 2 nie widzę tego przycisku”). Bez nazw technicznych bez wyjaśnienia (konektor = „połączenie z aplikacją”).
3. **Test odczytu** (jeśli platforma pozwala): ostatnie 4–8 tygodni → średnia objętość, najdłuższy bieg, przewyższenie, tętno na łatwych biegach → `_facts.md` (z `source_id` i metodą „podsumowanie platformy”); jeśli różni się od odpowiedzi z ankiety — popraw plan.
4. **Test zapisu:** wyślij pierwszą sesję planu i poproś o potwierdzenie, że jest w aplikacji / na zegarku. Nie twórz treningów „na próbę”, których nie da się usunąć (np. w COROS usuwanie wymaga aplikacji).
5. „Później” lub „nie” → plan zostaje w rozmowie / notatce; możesz to zaproponować ponownie za tydzień.

## Etap 7. Zakończenie

1. **Rytm:** jeśli masz narzędzie do zadań cyklicznych, zaproponuj jednym pytaniem przegląd tygodnia w niedzielę wieczorem. Bez narzędzia: „W niedzielę napisz mi: przegląd tygodnia”.
2. Ustaw w `00 Start.md`: „Instalacja zakończona RRRR-MM-DD” (jeśli projekt jest zapisany).
3. Krótko (do 5 linijek): co masz, jak ze mną rozmawiać (2–3 przykłady), jak zgłosić uwagi do paczki (jeśli biegacz testuje paczkę).
4. Pytania z części B o styl, zapis, horyzont, jednostki i wygląd planu zadajesz przy pierwszej okazji po instalacji, po jednym.

## Aktualizacja paczki

Gdy biegacz pobierze nowszą wersję paczki: nie nadpisuj `AI Trener/`. Porównaj `szablon-vault/` z jego projektem i zaproponuj tylko brakujące pliki lub sekcje. Zmiany metodologii z nowej wersji modułu → `_proposals.md`.
