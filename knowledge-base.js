// Baza wiedzy fitness z embeddingami (uproszczonymi)
const fitnessKnowledge = [
    {
        id: 1,
        category: "ćwiczenia_klatka",
        title: "Wyciskanie sztangi na ławce płaskiej",
        content: "Podstawowe ćwiczenie na klatkę piersiową. Wykonywanie: leż na ławce, chwyć sztangę nieco szerzej niż szerokość barków, opuść kontrolowanie do klatki, wyciśnij do góry. 3-4 serie po 8-12 powtórzeń.",
        keywords: ["klatka", "wyciskanie", "sztanga", "ławka", "siła", "masa"],
        difficulty: "podstawowe",
        equipment: ["sztanga", "ławka"],
        muscles: ["klatka piersiowa", "triceps", "przód barków"]
    },
    {
        id: 2,
        category: "żywienie_białko",
        title: "Dzienne zapotrzebowanie na białko",
        content: "Dla osób trenujących: 1.6-2.2g białka na kg masy ciała. Źródła: kurczak (23g/100g), jajka (13g/100g), twaróg (18g/100g), ryby (20-25g/100g). Rozprowadź spożycie równomiernie w ciągu dnia.",
        keywords: ["białko", "dieta", "masa", "regeneracja", "aminokwasy"],
        difficulty: "podstawowe",
        equipment: [],
        muscles: []
    },
    {
        id: 3,
        category: "ćwiczenia_nogi",
        title: "Przysiady ze sztangą",
        content: "Król ćwiczeń na nogi. Technika: stopy na szerokość barków, sztanga na górnej części trapezów, schodź w dół do momentu gdy uda są równoległe do podłogi, wstań. Aktywuje całe ciało.",
        keywords: ["przysiady", "nogi", "uda", "pośladki", "funkcjonalne", "siła"],
        difficulty: "średnie",
        equipment: ["sztanga", "stojak"],
        muscles: ["czworogłowy", "pośladki", "dwugłowy uda", "łydki"]
    },
    {
        id: 4,
        category: "cardio",
        title: "HIIT - Trening interwałowy wysokiej intensywności",
        content: "HIIT: 30 sek wysokiej intensywności + 30 sek odpoczynku, 15-20 rund. Spalanie tłuszczu do 24h po treningu (efekt EPOC). Przykład: burpees, skoki, sprint na miejscu.",
        keywords: ["hiit", "cardio", "spalanie", "tłuszcz", "kondycja", "interwały"],
        difficulty: "średnie",
        equipment: [],
        muscles: ["całe ciało"]
    },
    {
        id: 5,
        category: "regeneracja",
        title: "Znaczenie snu w regeneracji",
        content: "Sen to 80% regeneracji. Podczas głębokiego snu wydziela się hormon wzrostu (GH), odbudowują się mięśnie. Optymalne: 7-9h snu, stała pora kładzenia się, ciemny i chłodny pokój.",
        keywords: ["sen", "regeneracja", "hormon wzrostu", "odpoczynek", "masa"],
        difficulty: "podstawowe",
        equipment: [],
        muscles: []
    },
    {
        id: 6,
        category: "ćwiczenia_plecy",
        title: "Podciąganie na drążku",
        content: "Najlepsze ćwiczenie na szerokie plecy. Chwyty: szeroki (nacisk na szerokość), wąski (grubość). Jeśli nie dasz rady - użyj gumy oporowej lub maszyny wspomagającej. Cel: 10 czystych powtórzeń.",
        keywords: ["podciąganie", "plecy", "drążek", "szerokość", "siła", "chwyt"],
        difficulty: "trudne",
        equipment: ["drążek"],
        muscles: ["najszerszy grzbietu", "biceps", "tylne barki"]
    },
    {
        id: 7,
        category: "żywienie_węglowodany",
        title: "Węglowodany w diecie sportowca",
        content: "Węglowodany = energia. Proste przed/po treningu, złożone w pozostałych posiłkach. Źródła: owsianka, ryż brązowy, ziemniaki, owoce. 3-5g/kg masy ciała dla osób aktywnych.",
        keywords: ["węglowodany", "energia", "glikogen", "owsianka", "ryż", "owoce"],
        difficulty: "podstawowe",
        equipment: [],
        muscles: []
    },
    {
        id: 8,
        category: "ćwiczenia_ramiona",
        title: "Wyciskanie sztangielek nad głowę",
        content: "Buduje masę i siłę ramion. Stań stabilnie, sztangielki na wysokości uszu, wyciśnij nad głowę nie łącząc na górze. Kontroluj ruch, nie używaj rozmachu. 3x8-12.",
        keywords: ["ramiona", "barki", "sztangielki", "wyciskanie", "masa", "siła"],
        difficulty: "podstawowe",
        equipment: ["sztangielki"],
        muscles: ["przednie barki", "środkowe barki", "triceps"]
    },
    {
        id: 9,
        category: "suplementy",
        title: "Podstawowe suplementy dla trenujących",
        content: "MUST HAVE: 1) Białko serwatkowe (post-workout), 2) Kreatyna (3-5g dziennie), 3) Omega-3, 4) Witamina D3+K2, 5) Magnez+Cynk przed snem. Reszta to dodatek, nie podstawa.",
        keywords: ["suplementy", "białko", "kreatyna", "omega", "witaminy", "magnez"],
        difficulty: "podstawowe",
        equipment: [],
        muscles: []
    },
    {
        id: 10,
        category: "trening_siła",
        title: "Program 5x5 dla początkujących",
        content: "Trening A: Przysiad, Wyciskanie, Wiosłowanie. Trening B: Przysiad, Wyciskanie nad głowę, Martwy ciąg. 5 serii po 5 powtórzeń, 3x w tygodniu na przemian. Progresja: +2.5kg co trening.",
        keywords: ["5x5", "siła", "podstawowe", "program", "progresja", "sztanga"],
        difficulty: "podstawowe",
        equipment: ["sztanga", "ławka"],
        muscles: ["całe ciało"]
    }
    // ... można dodać jeszcze 100+ elementów
];

// Funkcja do obliczania podobieństwa (uproszczona)
function calculateSimilarity(query, item) {
    const queryWords = query.toLowerCase().split(' ');
    const itemText = (item.title + ' ' + item.content + ' ' + item.keywords.join(' ')).toLowerCase();
    
    let score = 0;
    queryWords.forEach(word => {
        if (itemText.includes(word)) {
            score += 1;
        }
        // Bonus za dokładne dopasowanie keywords
        if (item.keywords.some(keyword => keyword.includes(word))) {
            score += 2;
        }
    });
    
    return score;
}

// Eksport dla innych plików
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { fitnessKnowledge, calculateSimilarity };
}