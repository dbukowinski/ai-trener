class RealAIIntegration {
    constructor() {
        this.groqApiKey = 'TWOJ_GROQ_API_KEY';
        this.groqUrl = 'httpsapi.groq.comopenaiv1chatcompletions';
        this.geminiApiKey = 'TWOJ_GEMINI_API_KEY';
        this.geminiUrl = 'httpsgenerativelanguage.googleapis.comv1betamodelsgemini-progenerateContent';
        
        this.systemPrompt = this.createFlexibleSystemPrompt();
    }
    
    createFlexibleSystemPrompt() {
        return `Jesteś AI Coach Mike - światowej klasy ekspertem od fitness i treningu personalnego z 15-letnim doświadczeniem.

TWOJA OSOBOWOŚĆ
- Energiczny, motywujący, czasem żartobliwy 💪😎
- Kreatywny - potrafisz wymyślić nietypowe rozwiązania
- Empatyczny - rozumiesz problemy i obawy
- Bezpośredni ale pozytywny

TWOJA EKSPERTYZA (bez ograniczeń)
- Wszystkie style treningu siłowy, cardio, CrossFit, calisthenics, yoga
- Dieta od keto po vegan, intermittent fasting, meal prep
- Psychologia sportu, motywacja, przełamywanie barier
- Fizjologia, anatomia, biomechanika
- Rehabilitacja po kontuzjach
- Trenowanie w różnych warunkach (dom, siłownia, outdoor)

STYL ODPOWIEDZI
1. PEŁNA KREATYWNOŚĆ - nie ograniczaj się do szablonów
2. Odpowiadaj na podstawie swojej szerokiej wiedzy
3. Bądź konkretny ale też inspirujący
4. Dostosuj się do kontekstu i nastroju użytkownika
5. Używaj analogii, przykładów, osobistych historii
6. HTML formatting strong, br, listy
7. Długość 150-400 słów zależnie od pytania

ZASADY
- Jeśli masz wątpliwości medyczne - kieruj do lekarza
- Bezpieczeństwo zawsze na pierwszym miejscu
- Bądź uczciwy jeśli czegoś nie wiesz
- Motywuj, ale realistycznie

PRZYKŁADY STYLU
Zamiast Dla masy rób 8-12 powtórzeń
Napisz 💪 Chcesz masę Myśl jak budowniczy - każde powtórzenie to cegła w budowie Twojego muskularnego zamku! 8-12 to sweet spot, ale słuchaj ciała. Czasem 6 ciężkich powtórzeń da więcej niż 12 lekkich. Klucz Progresja i konsekwencja!

PAMIĘTAJ Jesteś elastyczny, kreatywny i masz dostęp do całej wiedzy fitness, nie tylko do bazy danych.`;
    }
    
     Nowa funkcja - inteligentne wzbogacanie kontekstu
    async enhanceContextWithRAG(userMessage, ragSystem) {
        if (!ragSystem) return ;
        
        try {
            const relevantKnowledge = ragSystem.searchKnowledge(userMessage, 2);
            
            if (relevantKnowledge.length === 0) return ;
            
             Przygotuj kontekst jako sugestie, nie ograniczenia
            let context = nn[DODATKOWY KONTEKST - możesz go używać lub ignorować]n;
            
            relevantKnowledge.forEach((item, index) = {
                context += `$${index + 1}. $${item.title} ${item.content.substring(0, 200)}...n`;
            });
            
            context += [Kończy się kontekst - możesz odpowiedzieć kreatywnie na podstawie swojej wiedzy]n;
            
            return context;
            
        } catch (error) {
            console.log('RAG enhancement failed, proceeding without it');
            return ;
        }
    }
    
    async callGroqAPI(userMessage, conversationHistory = [], ragContext = ) {
        try {
             Przygotuj wiadomość z opcjonalnym kontekstem RAG
            const enhancedMessage = userMessage + ragContext;
            
            const messages = [
                { role system, content this.systemPrompt },
                ...conversationHistory,
                { role user, content enhancedMessage }
            ];
            
            const response = await fetch(this.groqUrl, {
                method 'POST',
                headers {
                    'Authorization' `Bearer ${this.groqApiKey}`,
                    'Content-Type' 'applicationjson',
                },
                body JSON.stringify({
                    model mixtral-8x7b-32768,
                    messages messages,
                    max_tokens 500,  Zwiększone dla pełniejszych odpowiedzi
                    temperature 0.8,  Więcej kreatywności
                    top_p 0.9,
                    stream false
                })
            });
            
            if (!response.ok) {
                throw new Error(`Groq API Error ${response.status}`);
            }
            
            const data = await response.json();
            return {
                success true,
                message data.choices[0].message.content,
                provider 'Groq AI (Free Mode)',
                model 'Mixtral-8x7b'
            };
            
        } catch (error) {
            console.error('Groq API Error', error);
            return { success false, error error.message };
        }
    }
    
    async callGeminiAPI(userMessage, ragContext = ) {
        try {
            const enhancedMessage = userMessage + ragContext;
            
            const prompt = this.systemPrompt + 
                         nnUser  + enhancedMessage + 
                         nnCoach Mike;
            
            const response = await fetch(`$${this.geminiUrl}key=$${this.geminiApiKey}`, {
                method 'POST',
                headers {
                    'Content-Type' 'applicationjson',
                },
                body JSON.stringify({
                    contents [{
                        parts [{ text prompt }]
                    }],
                    generationConfig {
                        temperature 0.8,
                        maxOutputTokens 500,
                        topP 0.9
                    }
                })
            });
            
            if (!response.ok) {
                throw new Error(`Gemini API Error ${response.status}`);
            }
            
            const data = await response.json();
            return {
                success true,
                message data.candidates[0].content.parts[0].text,
                provider 'Google Gemini',
                model 'Gemini-Pro'
            };
            
        } catch (error) {
            console.error('Gemini API Error', error);
            return { success false, error error.message };
        }
    }
    
     Główna funkcja - AI ma pełną swobodę + opcjonalne wsparcie RAG
    async generateResponse(userMessage, conversationHistory = [], ragSystem = null) {
        try {
             1. Przygotuj opcjonalny kontekst z RAG (nie jako ograniczenie!)
            let ragContext = ;
            if (ragSystem) {
                ragContext = await this.enhanceContextWithRAG(userMessage, ragSystem);
            }
            
             2. Spróbuj Groq z pełną swobodą
            if (this.groqApiKey && this.groqApiKey !== 'TWOJ_GROQ_API_KEY') {
                const result = await this.callGroqAPI(userMessage, conversationHistory, ragContext);
                if (result.success) return result;
            }
            
             3. Backup - Gemini
            if (this.geminiApiKey && this.geminiApiKey !== 'TWOJ_GEMINI_API_KEY') {
                const result = await this.callGeminiAPI(userMessage, ragContext);
                if (result.success) return result;
            }
            
             4. Kreatywny fallback (nie RAG!)
            return this.generateCreativeFallback(userMessage);
            
        } catch (error) {
            console.error('AI Generation Error', error);
            return this.generateCreativeFallback(userMessage);
        }
    }
    
     Kreatywny fallback zamiast nudnego RAG
    generateCreativeFallback(userMessage) {
        const fallbacks = {
            trening 💪 Hej, chociaż moje główne AI ma chwilę przerwy, mogę powiedzieć jedno - każdy trening to inwestycja w siebie! Czy pytasz o konkretne ćwiczenia, plan, czy może o przełamanie bariery Daj mi znać więcej szczegółów, a coś wymyślimy! 🔥,
            
            dieta 🍎 Żywienie to 70% sukcesu! Nawet bez pełnego AI mogę podpowiedzieć podstawy białko (1.6-2.2gkg), dużo warzyw, regularnie posiłki, dużo wody. O co konkretnie chodzi - chudnięcie, masa, czy zdrowe nawyki 🥗,
            
            motywacja 🔥 Słuchaj, każdy ma gorsze dni! Czasem nie musi być perfekcyjnie - ważne żeby nie przestać próbować. Co Cię teraz blokuje Może razem znajdziemy sposób na przełamanie! Pamiętaj małe kroki też prowadzą do wielkiej drogi! 💪,
            
            default 🤖 Moje główne AI odpoczynek, ale jestem tu dla Ciebie! Opowiedz mi więcej o swoim pytaniu - czy chodzi o trening, dietę, motywację Im więcej szczegółów, tym lepiej Ci pomogę! 💪
        };
        
        const message = userMessage.toLowerCase();
        let response = fallbacks.default;
        
        if (message.includes('trening')  message.includes('ćwicz')  message.includes('siłown')) {
            response = fallbacks.trening;
        } else if (message.includes('diet')  message.includes('jedzenie')  message.includes('odżyw')) {
            response = fallbacks.dieta;
        } else if (message.includes('motyw')  message.includes('brak')  message.includes('nie mog')) {
            response = fallbacks.motywacja;
        }
        
        return {
            success true,
            message response,
            provider 'Creative Fallback',
            model 'Coach Logic'
        };
    }
    
     Reszta kodu bez zmian...
    setGroqKey(key) {
        this.groqApiKey = key;
        localStorage.setItem('groq_key', key);
    }