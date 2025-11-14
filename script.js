class AITrainer {
    constructor() {
        this.messagesContainer = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.ragSystem = new RAGSystem();
        this.realAI = new RealAIIntegration(); // Nowe AI
        this.conversationHistory = []; // Historia rozmowy
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
        
        // Załaduj zapisane klucze API
        this.realAI.loadStoredKeys();
        
        // Dodaj przycisk ustawień
        this.addSettingsButton();
        
        console.log('🤖 Real AI Integration loaded');
    }
    
    addSettingsButton() {
        const header = document.querySelector('.trainer-info');
        const settingsBtn = document.createElement('button');
        settingsBtn.innerHTML = '⚙️';
        settingsBtn.className = 'settings-btn';
        settingsBtn.onclick = () => this.showSettings();
        header.appendChild(settingsBtn);
    }
    
    showSettings() {
        const modal = document.createElement('div');
        modal.className = 'settings-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>⚙️ Ustawienia AI</h3>
                <label>🚀 Groq API Key (darmowy):</label>
                <input type="password" id="groqKey" placeholder="Wklej klucz z console.groq.com">
                
                <label>🧠 Gemini API Key (backup):</label>
                <input type="password" id="geminiKey" placeholder="Opcjonalnie - z aistudio.google.com">
                
                <div class="modal-buttons">
                    <button onclick="this.closest('.settings-modal').remove()">Anuluj</button>
                    <button onclick="window.trainer.saveSettings()">Zapisz</button>
                </div>
                
                <p style="font-size: 12px; color: #666;">
                    💡 Klucze są zapisane lokalnie w przeglądarce
                </p>
            </div>
        `;
        
        document.body.appendChild(modal);
    }
    
    saveSettings() {
        const groqKey = document.getElementById('groqKey').value;
        const geminiKey = document.getElementById('geminiKey').value;
        
        if (groqKey) this.realAI.setGroqKey(groqKey);
        if (geminiKey) this.realAI.setGeminiKey(geminiKey);
        
        document.querySelector('.settings-modal').remove();
        this.addMessage('✅ Ustawienia zapisane! Teraz używam prawdziwego AI! 🤖', 'bot');
    }
    
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.setLoading(true);
        
        try {
            // Wywołaj prawdziwe AI z historią rozmowy
            const aiResponse = await this.realAI.generateResponse(
                message, 
                this.conversationHistory.slice(-6), // Ostatnie 6 wiadomości
                this.ragSystem
            );
            
            // Dodaj do historii
            this.conversationHistory.push(
                { role: "user", content: message },
                { role: "assistant", content: aiResponse.message }
            );
            
            // Pokaż odpowiedź z info o źródle
            const finalMessage = aiResponse.message + 
                `<div class="ai-source">🤖 ${aiResponse.provider} (${aiResponse.model})</div>`;
            
            this.addMessage(finalMessage, 'bot');
            
        } catch (error) {
            console.error('AI Error:', error);
            this.addMessage('⚠️ Wystąpił błąd. Sprawdź połączenie i spróbuj ponownie.', 'bot');
        }
        
        this.setLoading(false);
    }
    
    // Reszta kodu bez zmian...
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
            this.addMessage("🧠 AI Coach myśli...", 'bot loading');
        } else {
            const loadingMsg = document.querySelector('.loading');
            if (loadingMsg) loadingMsg.remove();
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.trainer = new AITrainer();
});