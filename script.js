class AITrainer {
    constructor() {
        this.messagesContainer = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.ragSystem = new RAGSystem();
        this.realAI = new RealAIIntegration();
        this.conversationHistory = [];
        
        // Nowe ustawienia
        this.settings = {
            useRAG: true,        // Czy używać RAG jako wsparcie
            ragInfluence: 'low'  // low/medium/high - jak bardzo RAG ma wpływać
        };
        
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
        
        this.realAI.loadStoredKeys();
        this.addSettingsButton();
        this.loadSettings();
        
        console.log('🤖 Free AI Coach loaded - RAG as assistant, not limiter');
    }
    
    showSettings() {
        const modal = document.createElement('div');
        modal.className = 'settings-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <h3>⚙️ Ustawienia AI Coach</h3>
                
                <div class="setting-group">
                    <h4>🔑 API Keys</h4>
                    <label>🚀 Groq API Key (darmowy, szybki):</label>
                    <input type="password" id="groqKey" placeholder="Klucz z console.groq.com">
                    
                    <label>🧠 Gemini API Key (backup):</label>
                    <input type="password" id="geminiKey" placeholder="Klucz z aistudio.google.com">
                </div>
                
                <div class="setting-group">
                    <h4>🧠 Tryb AI</h4>
                    <label>
                        <input type="checkbox" id="useRAG" ${this.settings.useRAG ? 'checked' : ''}>
                        Używaj bazy wiedzy jako wsparcia
                    </label>
                    
                    <label>Wpływ bazy wiedzy:</label>
                    <select id="ragInfluence">
                        <option value="low" ${this.settings.ragInfluence === 'low' ? 'selected' : ''}>Niski - AI ma pełną swobodę</option>
                        <option value="medium" ${this.settings.ragInfluence === 'medium' ? 'selected' : ''}>Średni - RAG jako podpowiedź</option>
                        <option value="high" ${this.settings.ragInfluence === 'high' ? 'selected' : ''}>Wysoki - RAG priorytetem</option>
                    </select>
                </div>
                
                <div class="modal-buttons">
                    <button onclick="this.closest('.settings-modal').remove()">Anuluj</button>
                    <button onclick="window.trainer.saveSettings()">Zapisz</button>
                </div>
                
                <p style="font-size: 12px; color: #666;">
                    💡 Wszystkie ustawienia zapisane lokalnie w przeglądarce
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
        
        // Zapisz ustawienia RAG
        this.settings.useRAG = document.getElementById('useRAG').checked;
        this.settings.ragInfluence = document.getElementById('ragInfluence').value;
        
        localStorage.setItem('ai_settings', JSON.stringify(this.settings));
        
        document.querySelector('.settings-modal').remove();
        
        const ragStatus = this.settings.useRAG ? 
            `✅ Baza wiedzy: ${this.settings.ragInfluence} wpływ` : 
            '❌ Tylko AI (bez bazy wiedzy)';
            
        this.addMessage(`✅ Ustawienia zapisane!<br>${ragStatus}<br>🤖 AI ma teraz pełną swobodę!`, 'bot');
    }
    
    loadSettings() {
        const saved = localStorage.getItem('ai_settings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };
        }
    }
    
    async sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.setLoading(true);
        
        try {
            // Decyduj czy używać RAG na podstawie ustawień
            const ragSystem = this.settings.useRAG ? this.ragSystem : null;
            
            const aiResponse = await this.realAI.generateResponse(
                message,
                this.conversationHistory.slice(-6),
                ragSystem
            );
            
            // Historia tylko rzeczywistych wiadomości użytkownika
            this.conversationHistory.push(
                { role: "user", content: message },
                { role: "assistant", content: aiResponse.message }
            );
            
            // Status info
            const ragInfo = this.settings.useRAG ? 
                ` + RAG(${this.settings.ragInfluence})` : ' (Pure AI)';
                
            const finalMessage = aiResponse.message + 
                `<div class="ai-source">🤖 ${aiResponse.provider}${ragInfo}</div>`;
            
            this.addMessage(finalMessage, 'bot');
            
        } catch (error) {
            console.error('AI Error:', error);
            this.addMessage('⚠️ Coś poszło nie tak. Może sprawdź ustawienia API? ⚙️', 'bot');
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
            this.addMessage("🧠 AI Coach Mike myśli...", 'bot loading');
        } else {
            const loadingMsg = document.querySelector('.loading');
            if (loadingMsg) loadingMsg.remove();
        }
    }
    
    addSettingsButton() {
        const header = document.querySelector('.trainer-info');
        const settingsBtn = document.createElement('button');
        settingsBtn.innerHTML = '⚙️';
        settingsBtn.className = 'settings-btn';
        settingsBtn.onclick = () => this.showSettings();
        header.appendChild(settingsBtn);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.trainer = new AITrainer();
});