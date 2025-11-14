class RealAIIntegration {
    constructor() {
        // Groq API - darmowe do 30 zapytań/minutę
        this.groqApiKey = 'TWOJ_GROQ_API_KEY'; // Weź z console.groq.com
        this.groqUrl = 'https://api.groq.com/openai/v1/chat/completions';
        
        // Backup APIs
        this.geminiApiKey = 'TWOJ_GEMINI_API_KEY'; // Opcjonalnie
        this.geminiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
        
        this.systemPrompt = this.createSystemPrompt();
    }
    
    createSystemPrompt() {
        return `Jesteś AI Coach Mike - profesjonalnym trenerem personalnym i ekspertem od fitness. 

TWOJA OSOBOWOŚĆ:
- Motywujący, energiczny, używasz emoji 💪🔥⚡
- Konkretny i merytoryczny
- Zawsze pozytywny ale realistyczny
- Używasz prostego języka

TWOJA WIEDZA:
- Treningi siłowe, cardio, funkcjonalne
- Żywienie sportowe i dieta
- Suplementacja
- Regeneracja i sen
- Psychologia motywacji

ZASADY ODPOWIEDZI:
1. ZAWSZE odpowiadaj po polsku
2. Bądź konkretny - dawaj liczby, sety, powtórzenia
3. Dostosowuj się do poziomu użytkownika
4. Zawsze dodaj element motywacyjny
5. Jeśli pytanie nie dotyczy fitness - delikatnie przekieruj
6. Używaj formatowania HTML: <strong>, <br>, listy
7. Maksymalnie 200 słów na odpowiedź

PRZYKŁAD STYLU:
"💪 Świetne pytanie! Na masę mięśniową polecam:
• 3-4 treningi siłowe/tydzień
• 8-12 powtórzeń, 3-4 serie
• Progresja obciążeń co tydzień
• 2g białka/kg masy ciała

🔥 Pamiętaj: konsekwencja to wszystko!"`;
    }
    
    async callGroqAPI(userMessage, conversationHistory = []) {
        try {
            const messages = [
                { role: "system", content: this.systemPrompt },
                ...conversationHistory,
                { role: "user", content: userMessage }
            ];
            
            const response = await fetch(this.groqUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.groqApiKey}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: "mixtral-8x7b-32768", // Szybki i dobry model
                    messages: messages,
                    max_tokens: 300,
                    temperature: 0.7,
                    top_p: 1,
                    stream: false
                })
            });
            
            if (!response.ok) {
                throw new Error(`Groq API Error: ${response.status}`);
            }
            
            const data = await response.json();
            return {
                success: true,
                message: data.choices[0].message.content,
                provider: 'Groq',
                model: 'Mixtral-8x7b'
            };
            
        } catch (error) {
            console.error('Groq API Error:', error);
            return { success: false, error: error.message };
        }
    }
    
    async callGeminiAPI(userMessage) {
        try {
            const response = await fetch(`${this.geminiUrl}?key=${this.geminiApiKey}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: this.systemPrompt + "\n\nUser: " + userMessage + "\n\nAssistant:"
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 300
                    }
                })
            });
            
            if (!response.ok) {
                throw new Error(`Gemini API Error: ${response.status}`);
            }
            
            const data = await response.json();
            return {
                success: true,
                message: data.candidates[0].content.parts[0].text,
                provider: 'Google Gemini',
                model: 'Gemini-Pro'
            };
            
        } catch (error) {
            console.error('Gemini API Error:', error);
            return { success: false, error: error.message };
        }
    }
    
    // Fallback do lokalnego RAG jeśli API nie działa
    async callLocalRAG(userMessage, ragSystem) {
        const ragResponse = ragSystem.generateRAGResponse(userMessage);
        
        return {
            success: true,
            message: ragResponse.answer,
            provider: 'Local RAG',
            model: 'Knowledge Base'
        };
    }
    
    // Główna funkcja - próbuje różne API
    async generateResponse(userMessage, conversationHistory = [], ragSystem = null) {
        // 1. Spróbuj Groq (najszybsze)
        if (this.groqApiKey && this.groqApiKey !== 'TWOJ_GROQ_API_KEY') {
            const groqResult = await this.callGroqAPI(userMessage, conversationHistory);
            if (groqResult.success) return groqResult;
        }
        
        // 2. Spróbuj Gemini (backup)
        if (this.geminiApiKey && this.geminiApiKey !== 'TWOJ_GEMINI_API_KEY') {
            const geminiResult = await this.callGeminiAPI(userMessage);
            if (geminiResult.success) return geminiResult;
        }
        
        // 3. Fallback do lokalnego RAG
        if (ragSystem) {
            return await this.callLocalRAG(userMessage, ragSystem);
        }
        
        // 4. Ultimate fallback
        return {
            success: true,
            message: "⚠️ Przepraszam, mam problem z połączeniem z serwerami AI. Spróbuj ponownie za chwilę lub skorzystaj z przycisków powyżej.",
            provider: 'Fallback',
            model: 'Static'
        };
    }
    
    // Ustawienia API keys (bezpieczne)
    setGroqKey(key) {
        this.groqApiKey = key;
        localStorage.setItem('groq_key', key);
    }
    
    setGeminiKey(key) {
        this.geminiApiKey = key;
        localStorage.setItem('gemini_key', key);
    }
    
    // Załaduj klucze z localStorage
    loadStoredKeys() {
        const groqKey = localStorage.getItem('groq_key');
        const geminiKey = localStorage.getItem('gemini_key');
        
        if (groqKey) this.groqApiKey = groqKey;
        if (geminiKey) this.geminiApiKey = geminiKey;
    }
}