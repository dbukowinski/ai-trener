class AITrainer {
    constructor() {
        this.messagesContainer = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.ragSystem = new RAGSystem(); // Nowy system RAG
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
        
        // Pokaż statystyki bazy wiedzy w konsoli
        console.log('📚 RAG System załadowany:', this.ragSystem.getStats());
    }
    
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(this.messageInput.value, 'user');
        this.messageInput.value = '';
        this.setLoading(true);
        
        setTimeout(() => {
            // Najpierw spróbuj RAG
            const ragResponse = this.ragSystem.generateRAGResponse(message);
            
            let finalResponse;
            if (ragResponse.confidence > 2) {
                // Wysoka pewność - użyj odpowiedzi RAG
                finalResponse = ragResponse.answer + 
                    `<br><div style="font-size: 11px; color: #666; margin-top: 10px;">
                    🎯 Pewność odpowiedzi: ${Math.min(ragResponse.confidence * 20, 100)}%
                    </div>`;
            } else {
                // Niska pewność - użyj standardowej logiki + RAG jako dodatek
                const standardResponse = this.generateStandardResponse(message.toLowerCase());
                const ragInfo = ragResponse.sources.length > 0 ? 
                    `<br><br><strong>📚 Dodatkowo z bazy wiedzy:</strong><br>${ragResponse.sources[0].content}` : '';
                
                finalResponse = standardResponse + ragInfo;
            }
            
            this.addMessage(finalResponse, 'bot');
            this.setLoading(false);
        }, 800 + Math.random() * 1000);
    }
    
    // Zmienione z generateResponse na generateStandardResponse
    generateStandardResponse(message) {
        // Twoja poprzednia logika generateResponse...
        if (this.containsWords(message, ['cześć', 'hej', 'witaj', 'siema'])) {
            return this.getRandomResponse(responses.greetings) + " W czym mogę pomóc?";
        }
        
        if (this.containsWords(message, ['schudnąć', 'schudnięcie', 'odchudzanie', 'waga'])) {
            return this.getGoalAdvice('schudnąć');
        }
        
        // ... reszta logiki
        
        return this.getRandomResponse(responses.unknown);
    }
    
    // Nowa funkcja dla eksploracji bazy wiedzy
    exploreKnowledge(category) {
        const knowledge = this.ragSystem.searchByCategory(category, 3);
        if (knowledge.length === 0) {
            return "Nie mam jeszcze informacji w tej kategorii.";
        }
        
        let response = `<strong>📚 Wiedza z kategorii: ${category}</strong><br><br>`;
        knowledge.forEach((item, index) => {
            response += `<strong>${index + 1}. ${item.title}</strong><br>`;
            response += `${item.content}<br><br>`;
        });
        
        return response;
    }
    
    // Reszta kodu pozostaje bez zmian...
    containsWords(text, words) {
        return words.some(word => text.includes(word));
    }
    
    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
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
            this.addMessage("🧠 Przeszukuję bazę wiedzy...", 'bot loading');
        } else {
            const loadingMsg = document.querySelector('.loading');
            if (loadingMsg) loadingMsg.remove();
        }
    }
    
    // Pozostałe metody bez zmian...
}

// Dodaj nowy przycisk do quick actions
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
            response = trainer.exploreKnowledge('ćwiczenia_klatka');
            break;
        case 'baza':
            const stats = trainer.ragSystem.getStats();
            response = `<strong>📊 Statystyki bazy wiedzy:</strong><br><br>
                       📚 Łącznie: ${stats.totalItems} elementów<br>
                       📂 Kategorii: ${stats.categories}<br>
                       📈 Poziomy: ${stats.difficulties.join(', ')}<br><br>
                       <strong>Kategorie:</strong><br>
                       ${stats.categoriesBreakdown.map(cat => 
                           `• ${cat.name}: ${cat.count} elementów`
                       ).join('<br>')}`;
            break;
    }
    
    trainer.addMessage(response, 'bot');
}

document.addEventListener('DOMContentLoaded', () => {
    window.trainer = new AITrainer();
});