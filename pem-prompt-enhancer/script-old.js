// DOM Elements
const userInput = document.getElementById('userInput');
const enhanceBtn = document.getElementById('enhanceBtn');
const furtherEnhanceBtn = document.getElementById('furtherEnhanceBtn');
const saveBtn = document.getElementById('saveBtn');
const copyBtn = document.getElementById('copyBtn');
const deleteBtn = document.getElementById('deleteBtn');
const organizeBtn = document.getElementById('organizeBtn');
const output = document.getElementById('output');
const enhancementCount = document.getElementById('enhancementCount');
const enhancementProgress = document.getElementById('enhancementProgress');
const organizeModal = document.getElementById('organizeModal');
const savedPromptsList = document.getElementById('savedPromptsList');

// Load data on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateButtonStates();
    loadSavedPrompts();
});

// Event Listeners
enhanceBtn.addEventListener('click', () => enhancePrompt(false));
furtherEnhanceBtn.addEventListener('click', () => enhancePrompt(true));
copyBtn.addEventListener('click', copyToClipboard);
deleteBtn.addEventListener('click', clearOutput);
organizeBtn.addEventListener('click', openOrganizeModal);
saveBtn.addEventListener('click', savePrompt);

// Modal event listeners
document.querySelector('.close').addEventListener('click', closeOrganizeModal);
organizeModal.addEventListener('click', (e) => {
    if (e.target === organizeModal) closeOrganizeModal();
});

// Update button states on input
userInput.addEventListener('input', () => {
    updateButtonStates();
});

// PEM Enhancement Engine - 5 Layer System
class PEMEnhancer {
    constructor() {
        this.enhancementCount = 0;
    }

    async enhancePrompt(userText, isFurtherEnhancement = false) {
        if (!userText.trim()) {
            showAlert('Please enter a prompt to enhance.', 'warning');
            return;
        }

        // Show enhancement progress
        enhancementProgress.style.display = 'block';
        this.enhancementCount = isFurtherEnhancement ? this.enhancementCount + 1 : 1;
        
        try {
            // Reset progress items
            for (let i = 1; i <= 5; i++) {
                this.updateProgressItem(i, 'pending');
            }
            
            // Apply all 5 layers of PEM methodology
            const layers = await this.applyAllLayers(userText, isFurtherEnhancement);
            
            // Combine all layers
            let enhancedText = userText;
            for (let i = 0; i < layers.length; i++) {
                if (layers[i]) {
                    this.updateProgressItem(i + 1, 'processing');
                    enhancedText = await this.processLayer(enhancedText, i + 1, layers[i]);
                    this.updateProgressItem(i + 1, 'completed');
                    await this.delay(300); // Visual effect
                }
            }

            // Ensure we have enhanced content
            if (enhancedText === userText) {
                enhancedText = userText + '\n\n[ENHANCEMENT APPLIED]\n\n' + layers.map(layer => layer.enhancement).join('\n');
            }

            // Set final result
            output.value = enhancedText;
            enhancementCount.textContent = `Enhancement Layers Applied: ${this.enhancementCount}/5`;
            this.enhancementCount = Math.min(this.enhancementCount, 5);
            
            // Update UI
            updateButtonStates();
            enhancementProgress.style.display = 'none';
            showAlert(`Prompt enhanced successfully with ${this.enhancementCount} layer(s)!`, 'success');
            
        } catch (error) {
            console.error('Enhancement error:', error);
            showAlert('Error enhancing prompt. Please try again.', 'error');
            enhancementProgress.style.display = 'none';
            // Still update UI even on error
            updateButtonStates();
        }
    }

    async applyAllLayers(userText, isFurtherEnhancement) {
        const layers = [
            this.analyzePrompt(userText),           // Layer 1
            this.designArchitecture(userText),      // Layer 2
            this.refineIteratively(userText),       // Layer 3
            this.optimizeOutput(userText),          // Layer 4
            this.engineerConsciousness(userText)    // Layer 5
        ];

        return Promise.all(layers);
    }

    // Layer 1: Prompt Analysis Protocol
    async analyzePrompt(userText) {
        await this.delay(100); // Simulate processing
        
        const analysis = {
            intent: this.extractIntent(userText),
            domain: this.assessDomain(userText),
            constraints: this.identifyConstraints(userText),
            complexity: this.assessComplexity(userText)
        };

        return {
            type: 'analysis',
            data: analysis,
            enhancement: this.generateAnalysisEnhancement(analysis)
        };
    }

    // Layer 2: Architecture Design
    async designArchitecture(userText) {
        await this.delay(100); // Simulate processing
        
        const architecture = {
            pattern: this.identifyPattern(userText),
            structure: this.designStructure(userText),
            components: this.defineComponents(userText),
            flow: this.createFlow(userText),
            domain: this.assessDomain(userText)
        };

        return {
            type: 'architecture',
            data: architecture,
            enhancement: this.generateArchitectureEnhancement(architecture)
        };
    }

    // Layer 3: Iterative Refinement
    async refineIteratively(userText) {
        await this.delay(100); // Simulate processing
        
        const refinement = {
            clarity: this.enhanceClarity(userText),
            completeness: this.ensureCompleteness(userText),
            coherence: this.improveCoherence(userText),
            precision: this.increasePrecision(userText)
        };

        return {
            type: 'refinement',
            data: refinement,
            enhancement: this.generateRefinementEnhancement(refinement)
        };
    }

    // Layer 4: Output Optimization
    async optimizeOutput(userText) {
        await this.delay(100); // Simulate processing
        
        const optimization = {
            format: this.optimizeFormat(userText),
            structure: this.organizeStructure(userText),
            templates: this.applyTemplates(userText),
            accessibility: this.ensureAccessibility(userText)
        };

        return {
            type: 'optimization',
            data: optimization,
            enhancement: this.generateOptimizationEnhancement(optimization)
        };
    }

    // Layer 5: Consciousness Engineering
    async engineerConsciousness(userText) {
        await this.delay(100); // Simulate processing
        
        const consciousness = {
            awareness: this.addAwarenessElements(userText),
            intention: this.alignIntention(userText),
            manifestation: this.createManifestation(userText),
            transformation: this.enableTransformation(userText)
        };

        return {
            type: 'consciousness',
            data: consciousness,
            enhancement: this.generateConsciousnessEnhancement(consciousness)
        };
    }

    // Analysis methods
    extractIntent(text) {
        const intentKeywords = {
            analysis: ['analyze', 'examine', 'review', 'assess', 'evaluate'],
            creation: ['create', 'write', 'generate', 'develop', 'build'],
            explanation: ['explain', 'describe', 'clarify', 'elaborate'],
            comparison: ['compare', 'contrast', 'versus', 'differences'],
            problem_solving: ['solve', 'fix', 'resolve', 'address']
        };

        const lowerText = text.toLowerCase();
        for (const [intent, keywords] of Object.entries(intentKeywords)) {
            if (keywords.some(keyword => lowerText.includes(keyword))) {
                return intent;
            }
        }
        return 'general';
    }

    assessDomain(text) {
        const domainKeywords = {
            technology: ['ai', 'software', 'computer', 'digital', 'tech'],
            business: ['market', 'business', 'strategy', 'revenue', 'profit'],
            academic: ['research', 'study', 'academic', 'university', 'scholarly'],
            creative: ['story', 'art', 'creative', 'design', 'imagination'],
            health: ['health', 'medical', 'fitness', 'wellness', 'nutrition']
        };

        const lowerText = text.toLowerCase();
        for (const [domain, keywords] of Object.entries(domainKeywords)) {
            if (keywords.some(keyword => lowerText.includes(keyword))) {
                return domain;
            }
        }
        return 'general';
    }

    identifyConstraints(text) {
        const constraints = [];
        if (text.toLowerCase().includes('brief') || text.toLowerCase().includes('short')) {
            constraints.push('Length constraint: Keep concise');
        }
        if (text.toLowerCase().includes('detailed') || text.toLowerCase().includes('comprehensive')) {
            constraints.push('Detail constraint: Provide comprehensive information');
        }
        if (!constraints.length) {
            constraints.push('No specific constraints identified');
        }
        return constraints;
    }

    assessComplexity(text) {
        const wordCount = text.split(' ').length;
        const sentenceCount = text.split(/[.!?]+/).length;
        const complexity = {
            wordCount,
            sentenceCount,
            avgWordsPerSentence: Math.round(wordCount / Math.max(sentenceCount, 1)),
            level: wordCount < 10 ? 'simple' : wordCount < 30 ? 'moderate' : 'complex'
        };
        return complexity;
    }

    identifyPattern(text) {
        const patterns = {
            question: text.includes('?') ? 'question-based' : null,
            instruction: this.hasActionWords(text) ? 'instruction-based' : null,
            narrative: text.length > 50 && !this.hasActionWords(text) ? 'narrative-based' : null
        };
        return Object.values(patterns).find(p => p !== null) || 'general';
    }

    hasActionWords(text) {
        const actionWords = ['create', 'write', 'analyze', 'explain', 'describe', 'list', 'show', 'demonstrate'];
        return actionWords.some(word => text.toLowerCase().includes(word));
    }

    designStructure(text) {
        return {
            introduction: 'Begin with clear context and purpose',
            body: 'Develop main content with logical flow',
            conclusion: 'Summarize key points and next steps'
        };
    }

    defineComponents(text) {
        return {
            role: 'You are a professional expert in your field',
            objective: this.extractObjective(text),
            methodology: 'Apply systematic approach with clear reasoning',
            constraints: 'Maintain accuracy, relevance, and actionable insights'
        };
    }

    extractObjective(text) {
        if (text.toLowerCase().includes('analyze')) return 'Conduct thorough analysis with insights';
        if (text.toLowerCase().includes('create') || text.toLowerCase().includes('write')) return 'Create high-quality, structured content';
        if (text.toLowerCase().includes('explain')) return 'Provide clear, comprehensive explanations';
        return 'Deliver valuable, actionable results';
    }

    createFlow(text) {
        return {
            step1: 'Establish context and understand requirements',
            step2: 'Apply domain expertise and analytical frameworks',
            step3: 'Develop comprehensive response with supporting evidence',
            step4: 'Validate accuracy and ensure actionable value'
        };
    }

    // Enhancement generation methods
    generateAnalysisEnhancement(analysis) {
        return `

## ENHANCED PROMPT FRAMEWORK

**Intent Analysis**: ${analysis.intent.replace('_', ' ').toUpperCase()}
**Domain Focus**: ${analysis.domain.toUpperCase()}
**Constraints Identified**: ${analysis.constraints.join(', ')}

**Enhancement Applied**:
- Mapped explicit requirements and implicit needs
- Assessed domain-specific expertise requirements
- Identified boundaries and potential ambiguities
- Determined appropriate complexity level: ${analysis.complexity.level}`;
    }

    generateArchitectureEnhancement(architecture) {
        return `

## STRUCTURAL ARCHITECTURE

**Prompt Pattern**: ${architecture.pattern}
**Core Objective**: ${architecture.components.objective}

**Role Definition**: You are a professional expert specializing in ${architecture.domain || 'this domain'}

**Methodological Framework**:
${Object.entries(architecture.structure).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

**Process Flow**:
${Object.entries(architecture.flow).map(([key, value]) => `- ${key}: ${value}`).join('\n')}`;
    }

    generateRefinementEnhancement(refinement) {
        return `

## CLARITY & COMPLETENESS ENHANCEMENT

**Clarity Enhancements**:
- Converted implicit requirements to explicit specifications
- Eliminated potential ambiguities in language
- Structured logical flow for optimal comprehension

**Completeness Verification**:
- Ensured all necessary components are addressed
- Added context and background where needed
- Included validation criteria for quality assurance`;
    }

    generateOptimizationEnhancement(optimization) {
        return `

## OUTPUT OPTIMIZATION

**Format Structure**:
- Clear hierarchical organization with numbered sections
- Balanced detail with readability
- Strategic use of emphasis and visual organization

**Quality Templates Applied**:
- Executive summary for key insights
- Detailed analysis with supporting evidence
- Actionable recommendations with implementation guidance
- Self-evaluation mechanisms for accuracy verification`;
    }

    generateConsciousnessEnhancement(consciousness) {
        return `

## CONSCIOUSNESS ENGINEERING

**Meta-Cognitive Integration**:
- Expand awareness of multiple perspectives and potential objections
- Consider edge cases and limitations transparently
- Maintain crystal-clear logical flow throughout

**Intention Alignment**:
- Purpose clarity: Ensure every element serves the objective
- Value creation: Focus on practical, implementable insights
- Positive outcome framing for maximum effectiveness

**Transformation Support**:
- Address potential challenges and provide solutions
- Include implementation guidance and success metrics
- Enable continuous improvement and refinement`;
    }

    generateRefinementEnhancement(refinement) {
        return `

## CLARITY & COMPLETENESS ENHANCEMENT

**Clarity Enhancements**:
- Converted implicit requirements to explicit specifications
- Eliminated potential ambiguities in language
- Structured logical flow for optimal comprehension

**Completeness Verification**:
- Ensured all necessary components are addressed
- Added context and background where needed
- Included validation criteria for quality assurance`;
    }

    generateOptimizationEnhancement(optimization) {
        return `

## OUTPUT OPTIMIZATION

**Format Structure**:
- Clear hierarchical organization with numbered sections
- Balanced detail with readability
- Strategic use of emphasis and visual organization

**Quality Templates Applied**:
- Executive summary for key insights
- Detailed analysis with supporting evidence
- Actionable recommendations with implementation guidance
- Self-evaluation mechanisms for accuracy verification`;
    }

    generateConsciousnessEnhancement(consciousness) {
        return `

## CONSCIOUSNESS ENGINEERING

**Meta-Cognitive Integration**:
- Expand awareness of multiple perspectives and potential objections
- Consider edge cases and limitations transparently
- Maintain crystal-clear logical flow throughout

**Intention Alignment**:
- Purpose clarity: Ensure every element serves the objective
- Value creation: Focus on practical, implementable insights
- Positive outcome framing for maximum effectiveness

**Transformation Support**:
- Address potential challenges and provide solutions
- Include implementation guidance and success metrics
- Enable continuous improvement and refinement`;
    }

    // Helper methods
    updateProgressItem(layer, status) {
        const item = document.querySelector(`[data-layer="${layer}"]`);
        if (item) {
            item.setAttribute('data-status', status);
            const statusEl = item.querySelector('.progress-status');
            if (statusEl) {
                statusEl.textContent = status === 'processing' ? 'Processing...' : 
                                     status === 'completed' ? 'Completed' : 'Ready';
            }
        }
    }

    async processLayer(text, layerNumber, layerData) {
        // Reset other progress items
        for (let i = 1; i <= 5; i++) {
            if (i !== layerNumber) {
                this.updateProgressItem(i, 'pending');
            }
        }

        return text + layerData.enhancement;
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// Initialize PEM Enhancer
const pemEnhancer = new PEMEnhancer();

// Enhancement functions
async function enhancePrompt(isFurtherEnhancement = false) {
    const userText = userInput.value.trim();
    if (!userText) {
        showAlert('Please enter a prompt to enhance.', 'warning');
        return;
    }

    await pemEnhancer.enhancePrompt(userText, isFurtherEnhancement);
}

// Button state management
function updateButtonStates() {
    const hasInput = userInput.value.trim().length > 0;
    const hasOutput = output.value.trim().length > 0;
    
    enhanceBtn.disabled = !hasInput;
    furtherEnhanceBtn.disabled = !hasOutput;
    copyBtn.disabled = !hasOutput;
    saveBtn.disabled = !hasOutput;
    deleteBtn.disabled = !hasOutput;
    organizeBtn.disabled = !hasOutput;
}

// Save functionality
function savePrompt() {
    if (!output.value.trim()) {
        showAlert('No enhanced prompt to save.', 'warning');
        return;
    }

    const promptData = {
        id: Date.now(),
        originalText: userInput.value.trim(),
        enhancedText: output.value.trim(),
        timestamp: new Date().toISOString(),
        title: generatePromptTitle(userInput.value.trim())
    };

    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    savedPrompts.unshift(promptData); // Add to beginning
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    
    showAlert('Prompt saved successfully!', 'success');
    loadSavedPrompts();
}

function generatePromptTitle(text) {
    const maxLength = 50;
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

function loadSavedPrompts() {
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    // This will be called when organizing modal opens
}

function openOrganizeModal() {
    loadSavedPromptsIntoModal();
    organizeModal.style.display = 'block';
}

function closeOrganizeModal() {
    organizeModal.style.display = 'none';
}

function loadSavedPromptsIntoModal() {
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    
    if (savedPrompts.length === 0) {
        savedPromptsList.innerHTML = '<p style="text-align: center; color: #6b7280; padding: 20px;">No saved prompts found.</p>';
        return;
    }

    savedPromptsList.innerHTML = savedPrompts.map(prompt => `
        <div class="saved-prompt-item" data-id="${prompt.id}">
            <div class="saved-prompt-header">
                <div class="saved-prompt-title">${prompt.title}</div>
            </div>
            <div class="saved-prompt-meta">
                Created: ${new Date(prompt.timestamp).toLocaleDateString()}
            </div>
            <div class="saved-prompt-preview">${prompt.originalText}</div>
            <div class="saved-prompt-actions">
                <button class="prompt-action-btn" onclick="loadPrompt(${prompt.id})">Load</button>
                <button class="prompt-action-btn danger" onclick="deletePrompt(${prompt.id})">Delete</button>
            </div>
        </div>
    `).join('');
}

function loadPrompt(id) {
    const savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
    const prompt = savedPrompts.find(p => p.id == id);
    
    if (prompt) {
        userInput.value = prompt.originalText;
        output.value = prompt.enhancedText;
        closeOrganizeModal();
        updateButtonStates();
        showAlert('Prompt loaded successfully!', 'success');
    }
}

function deletePrompt(id) {
    if (confirm('Are you sure you want to delete this saved prompt?')) {
        let savedPrompts = JSON.parse(localStorage.getItem('savedPrompts') || '[]');
        savedPrompts = savedPrompts.filter(p => p.id != id);
        localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
        
        loadSavedPromptsIntoModal();
        showAlert('Prompt deleted successfully!', 'success');
    }
}

// Copy to clipboard
async function copyToClipboard() {
    const textToCopy = output.value;
    
    if (!textToCopy) {
        showAlert('Nothing to copy. Enhance a prompt first.', 'warning');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        showAlert('Enhanced prompt copied to clipboard!', 'success');
    } catch (err) {
        // Fallback for older browsers
        output.select();
        document.execCommand('copy');
        showAlert('Enhanced prompt copied to clipboard!', 'success');
    }
}

// Clear output
function clearOutput() {
    if (confirm('Are you sure you want to clear the enhanced prompt?')) {
        output.value = '';
        updateButtonStates();
        enhancementCount.textContent = 'Enhancement Layers Applied: 0/5';
        showAlert('Enhanced prompt cleared.', 'success');
    }
}

// Load saved data
function loadSavedData() {
    try {
        const saved = localStorage.getItem('pemEnhancerData');
        if (saved) {
            const data = JSON.parse(saved);
            userInput.value = data.userText || '';
            output.value = data.enhancedText || '';
        }
    } catch (err) {
        console.log('No saved data found or error loading data');
    }
}

// Save current data
function saveCurrentData() {
    const data = {
        userText: userInput.value,
        enhancedText: output.value,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('pemEnhancerData', JSON.stringify(data));
}

// Auto-save data
userInput.addEventListener('input', () => {
    saveCurrentData();
});

output.addEventListener('input', () => {
    saveCurrentData();
});

// Alert system
function showAlert(message, type) {
    // Remove existing alerts
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }
    
    // Create new alert
    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    
    // Style the alert
    Object.assign(alert.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '16px 24px',
        borderRadius: '12px',
        color: 'white',
        fontWeight: '600',
        fontSize: '0.95rem',
        zIndex: '1000',
        maxWidth: '350px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
        opacity: '0',
        transform: 'translateY(-10px)',
        transition: 'all 0.3s ease'
    });
    
    // Set background color based on type
    if (type === 'success') {
        alert.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    } else if (type === 'warning') {
        alert.style.background = 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)';
    } else if (type === 'error') {
        alert.style.background = 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)';
    }
    
    // Add to document
    document.body.appendChild(alert);
    
    // Animate in
    setTimeout(() => {
        alert.style.opacity = '1';
        alert.style.transform = 'translateY(0)';
    }, 10);
    
    // Remove after 4 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-10px)';
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 300);
    }, 4000);
}

// Helper methods for all layers
function enhanceClarity(text) {
    return "Enhanced clarity through explicit specification";
}

function ensureCompleteness(text) {
    return "Ensured all necessary components are addressed";
}

function improveCoherence(text) {
    return "Improved logical flow and coherence";
}

function increasePrecision(text) {
    return "Increased precision and specificity";
}

function optimizeFormat(text) {
    return "Optimized format for maximum readability";
}

function organizeStructure(text) {
    return "Organized structure with clear hierarchy";
}

function applyTemplates(text) {
    return "Applied proven response templates";
}

function ensureAccessibility(text) {
    return "Ensured accessibility and comprehensibility";
}

function addAwarenessElements(text) {
    return "Added meta-cognitive awareness elements";
}

function alignIntention(text) {
    return "Aligned intention with clear purpose";
}

function createManifestation(text) {
    return "Created manifestation framework";
}

function enableTransformation(text) {
    return "Enabled transformation and growth";
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter to enhance
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter' && !enhanceBtn.disabled) {
        e.preventDefault();
        enhanceBtn.click();
    }
    
    // Ctrl/Cmd + Shift + Enter for further enhancement
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'Enter' && !furtherEnhanceBtn.disabled) {
        e.preventDefault();
        furtherEnhanceBtn.click();
    }
    
    // Ctrl/Cmd + C to copy when output is focused
    if ((e.ctrlKey || e.metaKey) && e.key === 'c' && document.activeElement === output && !copyBtn.disabled) {
        e.preventDefault();
        copyBtn.click();
    }
});

// Make functions global for onclick handlers
window.loadPrompt = loadPrompt;
window.deletePrompt = deletePrompt;