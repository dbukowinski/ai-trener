class RAGSystem {
    constructor() {
        this.knowledgeBase = fitnessKnowledge;
        this.minSimilarityScore = 1; // Minimum score do uznania za relevantne
    }
    
    // Wyszukaj najbardziej relevantne informacje
    searchKnowledge(query, limit = 3) {
        const results = this.knowledgeBase
            .map(item => ({
                ...item,
                similarity: calculateSimilarity(query, item)
            }))
            .filter(item => item.similarity >= this.minSimilarityScore)
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, limit);
        
        return results;
    }
    
    // Wyszukaj po kategorii
    searchByCategory(category, limit = 5) {
        return this.knowledgeBase
            .filter(item => item.category === category)
            .slice(0, limit);
    }
    
    // Wyszukaj po poziomie trudności
    searchByDifficulty(difficulty) {
        return this.knowledgeBase
            .filter(item => item.difficulty === difficulty);
    }
    
    // Wyszukaj po sprzęcie
    searchByEquipment(equipment) {
        return this.knowledgeBase
            .filter(item => 
                item.equipment.length === 0 || // ćwiczenia bez sprzętu
                item.equipment.some(eq => eq.toLowerCase().includes(equipment.toLowerCase()))
            );
    }
    
    // Generuj odpowiedź opartą na wiedzy (RAG)
    generateRAGResponse(query) {
        const relevantKnowledge = this.searchKnowledge(query, 2);
        
        if (relevantKnowledge.length === 0) {
            return {
                answer: "Nie znalazłem konkretnych informacji na ten temat. Możesz zadać pytanie inaczej lub wybrać jedną z opcji powyżej.",
                sources: [],
                confidence: 0
            };
        }
        
        // Generuj odpowiedź na podstawie znalezionej wiedzy
        let answer = `<strong>💡 Na podstawie mojej bazy wiedzy:</strong><br><br>`;
        
        relevantKnowledge.forEach((item, index) => {
            answer += `<strong>${index + 1}. ${item.title}</strong><br>`;
            answer += `${item.content}<br><br>`;
            
            if (item.equipment && item.equipment.length > 0) {
                answer += `<strong>🏋️ Sprzęt:</strong> ${item.equipment.join(', ')}<br>`;
            }
            
            if (item.muscles && item.muscles.length > 0) {
                answer += `<strong>💪 Mięśnie:</strong> ${item.muscles.join(', ')}<br>`;
            }
            
            answer += `<strong>📊 Poziom:</strong> ${item.difficulty}<br><br>`;
        });
        
        return {
            answer: answer,
            sources: relevantKnowledge,
            confidence: relevantKnowledge[0].similarity
        };
    }
    
    // Dodaj nową wiedzę do bazy
    addKnowledge(newItem) {
        const maxId = Math.max(...this.knowledgeBase.map(item => item.id), 0);
        newItem.id = maxId + 1;
        this.knowledgeBase.push(newItem);
        return newItem.id;
    }
    
    // Statystyki bazy wiedzy
    getStats() {
        const categories = [...new Set(this.knowledgeBase.map(item => item.category))];
        const difficulties = [...new Set(this.knowledgeBase.map(item => item.difficulty))];
        
        return {
            totalItems: this.knowledgeBase.length,
            categories: categories.length,
            difficulties: difficulties,
            categoriesBreakdown: categories.map(cat => ({
                name: cat,
                count: this.knowledgeBase.filter(item => item.category === cat).length
            }))
        };
    }
}

// Eksport
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RAGSystem;
}