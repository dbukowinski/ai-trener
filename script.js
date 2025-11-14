class AITrainer {
    constructor() {
        this.messagesContainer = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.userProfile = {
            goal: null,
            level: null,
            time: null
        };
        
        this.init();
    }
    
    init() {
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }
    
    async sendMessage() {
        const message = this.messageInput.value.trim().toLowerCase();
        if (!message) return;
        
        this.addMessage(this.messageInput.value, 'user');
        this.messageInput.value = '';
        this.setLoading(true);
        
        setTimeout(() => {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
            this.setLoading(false);
        }, 1000 + Math.random() * 1000);
    }
    
    generateResponse(message) {
        // Analiza intencji użytkownika
        if (this.containsWords(message, ['cześć', 'hej', 'witaj', 'siema'])) {
            return this.getRandomResponse(responses.greetings) + " W czym mogę pomóc?";
        }
        
        if (this.containsWords(message, ['schudnąć', 'schudnięcie', 'odchudzanie', 'waga'])) {
            return this.getGoalAdvice('schudnąć');
        }
        
        if (this.containsWords(message, ['masa', 'przybrać', 'mięśnie', 'bulk'])) {
            return this.getGoalAdvice('przybrać masy');
        }
        
        if (this.containsWords(message, ['siła', 'silny', 'wzmocnić', 'strong'])) {
            return this.getGoalAdvice('wzmocnić się');
        }
        
        if (this.containsWords(message, ['plan', 'trening', 'ćwiczenia', 'workout'])) {
            return this.getWorkoutPlan();
        }
        
        if (this.containsWords(message, ['dieta', 'jedzenie', 'żywienie', 'posiłki'])) {
            return this.getNutritionAdvice();
        }
        
        if (this.containsWords(message, ['motywacja', 'inspiracja', 'brak energii'])) {
            return this.getMotivation();
        }
        
        if (this.containsWords(message, ['brzuch', 'abs', 'skośne'])) {
            return this.getExercises('brzuch');
        }
        
        if (this.containsWords(message, ['nogi', 'uda', 'pośladki'])) {
            return this.getExercises('nogi');
        }
        
        if (this.containsWords(message, ['klatka', 'pierś', 'chest'])) {
            return this.getExercises('klatka');
        }
        
        if (this.containsWords(message, ['plecy', 'grzbiet', 'back'])) {
            return this.getExercises('plecy');
        }
        
        if (this.containsWords(message, ['ramiona', 'barki', 'shoulders'])) {
            return this.getExercises('ramiona');
        }
        
        if (this.containsWords(message, ['początkuj', 'beginner', 'nowy'])) {
            return this.getBeginnerAdvice();
        }
        
        if (this.containsWords(message, ['zaawansowany', 'advanced', 'pro'])) {
            return this.getAdvancedAdvice();
        }
        
        // Domyślna odpowiedź
        return this.getRandomResponse(responses.unknown);
    }
    
    containsWords(text, words) {
        return words.some(word => text.includes(word));
    }
    
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
    
    getGoalAdvice(goal) {
        const advice = trainerKnowledge.goals[goal];
        if (!advice) return "Nie rozumiem tego celu. Spróbuj: schudnąć, przybrać masy, wzmocnić się.";
        
        return `<strong>🎯 Plan na cel: ${goal}</strong><br><br>
                <strong>🏋️ Trening:</strong><br>${advice.training}<br><br>
                <strong>🥗 Dieta:</strong><br>${advice.diet}<br><br>
                <strong>💡 Tips:</strong><br>${advice.tips}<br><br>
                Chcesz konkretny plan treningowy? Napisz "plan treningowy"! 💪`;
    }
    
    getWorkoutPlan() {
        const plans = trainerKnowledge.workoutPlans;
        return `<strong>📋 Plany treningowe:</strong><br><br>
                <div class="workout-plan">
                <strong>🟢 Początkujący (${plans.beginner.days} dni/tydzień):</strong><br>
                ${plans.beginner.plan.join('<br>')}
                </div>
                
                <div class="workout-plan">
                <strong>🟡 Średniozaawansowany (${plans.intermediate.days} dni/tydzień):</strong><br>
                ${plans.intermediate.plan.join('<br>')}
                </div>
                
                <div class="workout-plan">
                <strong>🔴 Zaawansowany (${plans.advanced.days} dni/tydzień):</strong><br>
                ${plans.advanced.plan.join('<br>')}
                </div>
                
                Który poziom Ci odpowiada? 🤔`;
    }
    
    getNutritionAdvice() {
        const nutrition = trainerKnowledge.nutrition;
        return `<strong>🥗 Podstawy zdrowego żywienia:</strong><br><br>
                <strong>🍗 Białko:</strong> ${nutrition['białko']}<br><br>
                <strong>🍞 Węglowodany:</strong> ${nutrition['węglowodany']}<br><br>
                <strong>🥑 Tłuszcze:</strong> ${nutrition['tłuszcze']}<br><br>
                <strong>🥬 Warzywa:</strong> ${nutrition['warzywa']}<br><br>
                <strong>🍎 Owoce:</strong> ${nutrition['owoce']}<br><br>
                
                <strong>💡 Pamiętaj:</strong> Jedz regularnie, pij dużo wody, unikaj przetworzonych produktów!`;
    }
    
    getExercises(bodyPart) {
        const exercises = trainerKnowledge.exercises[bodyPart];
        return `<strong>🏋️ Ćwiczenia na ${bodyPart}:</strong><br><br>
                <div class="exercise-list">
                ${exercises.map(ex => `• ${ex}`).join('<br>')}
                </div><br>
                <strong>💡 Tips:</strong> Rób 2-3 serie każdego ćwiczenia. Pamiętaj o prawidłowej technice!`;
    }
    
    getMotivation() {
        const motivation = this.getRandomResponse(trainerKnowledge.motivation);
        const tip = this.getRandomResponse(trainerKnowledge.tips);
        
        return `${motivation}<br><br><strong>💡 Dzisiejsza rada:</strong><br>${tip}<br><br>
                Pamiętaj - każdy krok to postęp! Nie porównuj się z innymi, porównaj się z sobą sprzed roku! 🚀`;
    }
    
    getBeginnerAdvice() {
        return `<strong>🌱 Poradnik dla początkujących:</strong><br><br>
                <strong>1.</strong> Zacznij powoli - 2-3 treningi w tygodniu<br>
                <strong>2.</strong> Naucz się prawidłowej techniki<br>
                <strong>3.</strong> Słuchaj swojego ciała<br>
                <strong>4.</strong> Bądź cierpliwy - efekty przyjdą!<br>
                <strong>5.</strong> Pamiętaj o odpoczynku<br><br>
                
                Chcesz plan treningowy dla początkujących? Napisz "plan początkujący"! 💪`;
    }
    
    getAdvancedAdvice() {
        return `<strong>🔥 Porady dla zaawansowanych:</strong><br><br>
                <strong>1.</strong> Periodyzacja treningów<br>
                <strong>2.</strong> Progresywne przeciążanie<br>
                <strong>3.</strong> Monitoruj objętość i intensywność<br>
                <strong>4.</strong> Pamiętaj o deload weeks<br>
                <strong>5.</strong> Precyzyjne odżywianie<br><br>
                
                Gotowy na hardcore challenge? 💀`;
    }
    
    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = text;
        
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    setLoading(isLoading) {
        this.sendButton.disabled = isLoading;
        if (isLoading) {
            this.addMessage("💭 Coach myśli...", 'bot loading');
        } else {
            const loadingMsg = document.querySelector('.loading');
            if (loadingMsg) loadingMsg.remove();
        }
    }
}

// Funkcje dla przycisków
function quickAction(action) {
    const trainer = window.trainer;
    let response = '';
    
    switch(action) {
        case 'plan':
            response = trainer.getWorkoutPlan();
            break;
        case 'dieta':
            response = trainer.getNutritionAdvice();
            break;
        case 'motywacja':
            response = trainer.getMotivation();
            break;
        case 'cwiczenia':
            response = `<strong>🏋️ Wybierz partie mięśni:</strong><br><br>
                       • Napisz "brzuch" - ćwiczenia na core<br>
                       • Napisz "nogi" - ćwiczenia na nogi<br>
                       • Napisz "klatka" - ćwiczenia na klatkę<br>
                       • Napisz "plecy" - ćwiczenia na plecy<br>
                       • Napisz "ramiona" - ćwiczenia na ramiona<br><br>
                       Lub po prostu napisz co Cię interesuje! 💪`;
            break;
    }
    
    trainer.addMessage(response, 'bot');
}

// Uruchom aplikację po załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
    window.trainer = new AITrainer();
});