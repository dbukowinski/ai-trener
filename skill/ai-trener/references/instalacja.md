# Instalacja AI Trenera — procedura

Prowadzisz biegacza przez 7 etapów. Zajmuje to zwykle 20–40 minut rozmowy. Po każdym etapie zapisujesz wynik do plików, żeby przerwana rozmowa nie przepadła. Gdy rozmowa wraca po przerwie, czytasz `AI Trener/00 Start.md` → sekcję „Stan instalacji” i kontynuujesz od pierwszego niezakończonego etapu.

Na start powiedz biegaczowi w 2–3 zdaniach, co się stanie: ankieta, propozycja metodologii do zatwierdzenia, podłączenie zegarka, założenie projektu, pierwszy plan. Uprzedź, że może przerwać w dowolnym momencie. Dodaj jedno zdanie: jesteś narzędziem do planowania, nie lekarzem ani fizjoterapeutą — każdy plan biegacz ocenia sam i trenuje na własną odpowiedzialność, a dane z rozmowy przetwarza ten asystent AI i platformy, które podłączy.

## Etap 1. Środowisko: gdzie zapisuję i co jest podłączone

Sprawdź (bez pytania, jeśli możesz to zbadać sam):

1. **Zapis plików.** Masz narzędzie do zapisu w lokalnym folderze (Claude Code, Claude Desktop z dodanym folderem, Codex) albo w Google Drive (konektor Drive)? Jeśli nie masz żadnego:
   - Claude: poproś o dodanie folderu (aplikacja desktop: „Dodaj folder” / „Add folder” albo uruchomienie w Claude Code) lub o podłączenie Google Drive w ustawieniach konektorów.
   - ChatGPT bez zapisu: działasz w **trybie kopiuj-wklej** — każdy plik podajesz jako blok Markdown z nazwą i ścieżką, biegacz zapisuje go sam (np. w Obsidianie). Powiedz o tym uczciwie przed startem.
2. **Lokalizacja projektu.** Zapytaj, gdzie ma stanąć folder `AI Trener/`: w istniejącym vaulcie Obsidian, w folderze na Drive, czy w nowym folderze. Domyślnie: nowy folder obok, nie wewnątrz rozpakowanej paczki (paczkę można potem zaktualizować bez nadpisywania danych biegacza).
3. **MCP / konektory.** Wypisz narzędzia, które widzisz: COROS, Tredict, intervals.icu, Garmin, Suunto, Polar, TrainingPeaks, Strava, Google Drive, kalendarz, harmonogram zadań. To zapisujesz w `00 Start.md` w etapie 5.
4. **Google Drive.** Konektor Drive zwykle nie nadpisuje treści istniejącego pliku. Aktualizacja = nowy plik o tej samej nazwie, stary od razu do kosza, potem sprawdzenie folderu. Zapisz tę regułę w `00 Start.md`, jeśli projekt jest na Drive.

## Etap 2. Ankieta

Przeprowadź ankietę z `references/ankieta.md`:
- w rundach po 3–6 pytań, z wyborem odpowiedzi tam, gdzie się da (jeśli masz narzędzie pytań wielokrotnego wyboru — użyj go),
- po każdej rundzie dopisz odpowiedzi do `Profil biegacza.md` (jeśli folder już istnieje) albo trzymaj je w rozmowie i zapisz w etapie 5,
- pytania warunkowe zadawaj tylko, gdy dotyczą (góry vs asfalt, siłownia, start),
- **screening zdrowotny jest obowiązkowy** (runda 4). Odpowiedź „tak” na pytania o objawy → zalecenie konsultacji lekarskiej przed treningiem intensywnym (`references/bezpieczenstwo.md`); plan zaczynasz od lekkiego ruchu albo wstrzymujesz.

Na koniec etapu pokaż krótkie podsumowanie profilu (5–8 linijek) i poproś o korektę.

## Etap 3. Metodologia — propozycja do zatwierdzenia

Wg `references/metodologia-dobor.md`:
1. Zapytaj (jeśli ankieta tego nie objęła) o ulubionych trenerów, książki, kanały, metody. Jeśli biegacz je ma → procedura `metodologie/wlasny-trener/README.md`.
2. Jeśli nie ma → zaproponuj moduł domyślny dla celu (góry → `metodologie/gory`, asfalt → `metodologie/asfalt` z wariantem).
3. Przedstaw propozycję w formacie:
   - **Rama:** moduł / trener i dlaczego pasuje do celu i życia biegacza.
   - **Uzupełnienia z badań:** wspólna warstwa dowodowa (rozkład intensywności, siła, taper, bezpieczeństwo).
   - **Dopasowanie do Ciebie:** 3–6 konkretnych modyfikacji (np. „brak gór → podejścia na bieżni 12–15% i schody w bloku”, „3 dni w tygodniu → 2 jakościowe + długie”).
   - **Alternatywa:** jedna inna droga i co by zmieniła.
4. Poczekaj na decyzję. Bez zgody biegacza nie przechodzisz dalej.

## Etap 4. Zegarek i platforma

Wg `references/platformy.md`:
1. Ustal markę zegarka i istniejące konta (Strava, TrainingPeaks, intervals.icu, Tredict).
2. Wybierz drogę zapisu planów (bezpośredni MCP → oficjalny pośrednik → nieoficjalny MCP → tryb ręczny) i przeprowadź biegacza przez podłączenie, krok po kroku, w jego kliencie (Claude / ChatGPT / Claude Code).
3. **Test odczytu** (jeśli platforma pozwala): pobierz ostatnie 4–8 tygodni aktywności i policz: średni tygodniowy czas i dystans, najdłuższy bieg, tygodniowe przewyższenie, liczbę dni biegowych, typowe tętno na łatwych biegach. To będą pierwsze fakty w `_facts.md` (z `source_id` i metodą „podsumowanie platformy”).
4. **Test zapisu:** pierwszą sesję planu (etap 6) wyślij na zegarek i poproś biegacza o potwierdzenie, że ją widzi. Nie twórz treningów „na próbę”, których nie da się potem usunąć (np. w COROS usuwanie zaplanowanych treningów wymaga aplikacji).
5. Gdy nie ma drogi automatycznej: tryb ręczny (plan w notatce + opis treningu do wpisania wg `references/format-treningu.md`).

## Etap 5. Założenie projektu (vault)

1. Skopiuj `szablon-vault/AI Trener/` do wybranej lokalizacji (cały folder, z podfolderami). Na Google Drive: utwórz foldery i pliki o tych samych nazwach.
2. Wypełnij pliki danymi z ankiety i etapów 3–4 (zastąp wszystkie `<…>`; czego nie wiesz — „brak danych”):
   - `00 Start.md` — konfiguracja instalacji, stan instalacji, jak rozmawiać z trenerem,
   - `Profil biegacza.md` — ankieta,
   - `Sezon.md` — starty, szkielet faz (z modułu metodologii: `fazy.md`), stałe ograniczenia,
   - `Metodologia.md` — zatwierdzona rama, uzupełnienia, modyfikacje, czego nie robimy,
   - `Moje sesje.md` — biblioteka sesji z modułu **przefiltrowana** do terenu, sprzętu i czasu biegacza, z wersjami zastępczymi,
   - `Knowledge Loop/domains/sport/_profile.md` — źródła danych, `source_id` platformy, czynniki zakłócające z życia biegacza, ważne daty,
   - `Knowledge Loop/sources/sport/_registry.md` — źródła z modułu (`zrodla.md`) + źródła ulubionych trenerów,
   - `Knowledge Loop/domains/sport/_facts.md` — fakty z etapu 4 i z ankiety (tylko zmierzone, z metodą).
3. Skopiuj pliki wybranego modułu metodologii (`zasady.md`, `sesje.md`, `fazy.md`, `testy.md`, `sila.md`) do `AI Trener/Wiedza/<moduł>/`, żeby biegacz miał je w swoim vaulcie.
4. Sprawdź wynik: wylistuj folder i potwierdź, że pliki istnieją. Dopiero potem napisz „zapisano”.

## Etap 6. Testy i pierwszy plan

1. Jeśli progi (AeT / próg mleczanowy / tempa z wyniku) nie są zmierzone, pierwszy tydzień zawiera **test** z modułu (`testy.md`) albo kalibrację wg odczuć (test mowy / oddychania nosem) — strefy oznacz jako tymczasowe.
2. Ułóż plan na pierwsze 1–2 tygodnie wg `references/planowanie.md`. Pierwszy tydzień jest **zachowawczy**: objętość nie wyższa niż średnia z ostatnich 4 tygodni (z etapu 4 lub z ankiety).
3. Pokaż plan (format z SKILL.md §4). W trybie `pytaj` wysyłasz po akceptacji; w trybie `wysyłaj` — od razu.
4. Zapisz plan w `Plany/RRRR-Www.md`.

## Etap 7. Rytm i zakończenie

1. **Rytm tygodniowy:** jeśli masz narzędzie do zadań cyklicznych (scheduled tasks), zaproponuj przegląd tygodnia (np. niedziela wieczorem: „Uruchom skill ai-trener: przegląd tygodnia i plan na kolejny”) i miesięczny przegląd Pętli. Bez narzędzia: powiedz biegaczowi, żeby w niedzielę napisał „przegląd tygodnia”.
2. W `00 Start.md` ustaw „Stan instalacji: zakończona RRRR-MM-DD”.
3. Zakończ krótko: co powstało (lista plików), co jest na zegarku, jak rozmawiać z trenerem (3 przykładowe zdania z `00 Start.md`), jak zgłosić uwagi do paczki (link do zgłoszeń w repozytorium, jeśli biegacz testuje paczkę).

## Aktualizacja paczki

Gdy biegacz pobierze nowszą wersję paczki: nie nadpisuj `AI Trener/`. Porównaj `szablon-vault/` z jego projektem i zaproponuj tylko brakujące pliki lub sekcje. Zmiany metodologii z nowej wersji modułu → `_proposals.md`.
