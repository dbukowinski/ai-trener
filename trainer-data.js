const trainerKnowledge = {
    goals: {
        'schudnąć': {
            training: 'Cardio 4x w tygodniu + siłowy 2x. Interwały wysokiej intensywności (HIIT).',
            diet: 'Deficyt kaloryczny 300-500 kcal. Więcej białka, mniej węglowodanów prostych.',
            tips: 'Pij dużo wody, śpij 7-8h, jedz regularnie co 3-4h.'
        },
        'przybrać masy': {
            training: 'Trening siłowy 4-5x w tygodniu. Skupienie na ćwiczeniach złożonych.',
            diet: 'Nadwyżka kaloryczna 300-500 kcal. 2g białka na kg masy ciała.',
            tips: 'Odpoczynek między treningami, progresja obciążeń, cierpliwość.'
        },
        'wzmocnić się': {
            training: 'Trening siłowy z ciężkimi obciążeniami 3-4x w tygodniu.',
            diet: 'Zbilansowana dieta z wystarczającą ilością białka.',
            tips: 'Prawidłowa technika ważniejsza niż ciężar. Regularne zwiększanie obciążeń.'
        }
    },
    
    exercises: {
        'brzuch': ['Plank (30-60s)', 'Crunches (15-20)', 'Bicycle (20 na stronę)', 'Russian twists (20)', 'Leg raises (15)'],
        'nogi': ['Squats (15-20)', 'Lunges (12 na nogę)', 'Deadlifts (10-12)', 'Calf raises (20)', 'Bulgarian split squats (10 na nogę)'],
        'klatka': ['Push-ups (10-15)', 'Bench press (8-12)', 'Dips (8-12)', 'Flyes (12-15)', 'Incline press (8-12)'],
        'plecy': ['Pull-ups (5-10)', 'Rows (10-12)', 'Lat pulldowns (12-15)', 'Deadlifts (8-10)', 'Face pulls (15-20)'],
        'ramiona': ['Shoulder press (10-12)', 'Lateral raises (12-15)', 'Front raises (12-15)', 'Shrugs (15-20)', 'Upright rows (12-15)']
    },
    
    workoutPlans: {
        beginner: {
            days: 3,
            plan: [
                'Dzień 1: Całe ciało - Squats, Push-ups, Plank, Lunges',
                'Dzień 2: Odpoczynek lub lekkie cardio',
                'Dzień 3: Całe ciało - Pull-ups, Dips, Crunches, Walking'
            ]
        },
        intermediate: {
            days: 4,
            plan: [
                'Dzień 1: Klatka + Triceps',
                'Dzień 2: Plecy + Biceps', 
                'Dzień 3: Nogi + Brzuch',
                'Dzień 4: Ramiona + Cardio'
            ]
        },
        advanced: {
            days: 5,
            plan: [
                'Dzień 1: Klatka + Triceps',
                'Dzień 2: Plecy + Biceps',
                'Dzień 3: Nogi',
                'Dzień 4: Ramiona',
                'Dzień 5: Brzuch + Cardio'
            ]
        }
    },
    
    nutrition: {
        'białko': 'Kurczak, ryby, jajka, orzechy, rośliny strączkowe, ser cottage',
        'węglowodany': 'Owsianka, ryż brązowy, quinoa, słodkie ziemniaki, owoce',
        'tłuszcze': 'Awokado, orzechy, oliwa z oliwek, łosoś, nasiona',
        'warzywa': 'Brokuły, szpinak, papryka, pomidory, marchew, ogórki',
        'owoce': 'Banany, jabłka, borówki, truskawki, pomarańcze'
    },
    
    motivation: [
        "💪 Każdy dzień to nowa szansa na bycie lepszym!",
        "🔥 Pamiętaj: bez bólu nie ma zysku!",
        "🚀 Twoje ciało może więcej niż myślisz!",
        "⭐ Małe kroki prowadzą do wielkich zmian!",
        "💯 Konsekwencja to klucz do sukcesu!",
        "🏆 Nie poddawaj się, gdy jest ciężko - właśnie wtedy się rozwijasz!",
        "⚡ Energia płynie z ruchu - zacznij już dziś!",
        "🎯 Cel bez planu to tylko życzenie!",
        "💎 Diament powstaje pod presją!",
        "🌟 Jesteś silniejszy niż myślisz!"
    ],
    
    tips: [
        "💧 Pij przynajmniej 2-3 litry wody dziennie",
        "😴 Śpij 7-9 godzin dla lepszej regeneracji",
        "🍎 Jedz 5-6 małych posiłków dziennie",
        "🏃‍♂️ Rozgrzej się przed treningiem (5-10 min)",
        "🧘‍♂️ Pamiętaj o stretching po treningu",
        "📱 Zapisuj swoje postępy w dzienniku treningowym",
        "👥 Znajdź partnera treningowego dla motywacji"
    ]
};

const responses = {
    greetings: ["Cześć! 👋", "Hej! 💪", "Witaj, wojowniku! 🔥"],
    encouragement: ["Świetnie! 🎉", "Tak trzymaj! 💪", "Jesteś na dobrej drodze! 🚀"],
    unknown: [
        "Hmm, nie jestem pewien... Możesz sprecyzować pytanie?",
        "Potrzebuję więcej informacji. O co dokładnie chodzi?",
        "Spróbuj zadać pytanie inaczej lub wybierz jedną z opcji powyżej."
    ]
};