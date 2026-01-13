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

// Load data on page load
window.addEventListener('DOMContentLoaded', () => {
    loadSavedData();
    updateButtonStates();
});

// Event Listeners
enhanceBtn.addEventListener('click', () => enhancePrompt());
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

// PEM Enhancement Process
function enhancePrompt(isFurtherEnhancement = false) {
    const userText = userInput.value.trim();
    
    if (!userText) {
        showAlert('Please enter a prompt to enhance.', 'warning');
        return;
    }

    // Show enhancement progress
    enhancementProgress.style.display = 'block';
    let currentCount = parseInt(enhancementCount.textContent.match(/\d+/)) || 0;
    currentCount = isFurtherEnhancement ? currentCount + 1 : 1;
    
    try {
        // Show progress for each layer
        showLayerProgress(1, 'processing');
        
        // Layer 1: Prompt Analysis
        setTimeout(() => {
            showLayerProgress(1, 'completed');
            showLayerProgress(2, 'processing');
            
            // Layer 2: Architecture Design
            setTimeout(() => {
                showLayerProgress(2, 'completed');
                showLayerProgress(3, 'processing');
                
                // Layer 3: Refinement
                setTimeout(() => {
                    showLayerProgress(3, 'completed');
                    showLayerProgress(4, 'processing');
                    
                    // Layer 4: Optimization
                    setTimeout(() => {
                        showLayerProgress(4, 'completed');
                        showLayerProgress(5, 'processing');
                        
                        // Layer 5: Consciousness Engineering
                        setTimeout(() => {
                            showLayerProgress(5, 'completed');
                            
                            // Generate enhanced text
                            const enhancedText = generateEnhancedText(userText, currentCount, output.value);
                            output.value = enhancedText;
                            enhancementCount.textContent = `Enhancement Layers Applied: ${currentCount}/5`;
                            
                            // Hide progress and update UI
                            setTimeout(() => {
                                enhancementProgress.style.display = 'none';
                                updateButtonStates();
                                showAlert(`Prompt enhanced successfully with ${currentCount} layer(s)!`, 'success');
                                saveCurrentData();
                            }, 500);
                            
                        }, 400); // Layer 5
                    }, 300); // Layer 4
                }, 300); // Layer 3
            }, 300); // Layer 2
        }, 300); // Layer 1
        
    } catch (error) {
        console.error('Enhancement error:', error);
        showAlert('Error enhancing prompt. Please try again.', 'error');
        enhancementProgress.style.display = 'none';
    }
}

function showLayerProgress(layer, status) {
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

function generateEnhancedText(userText, layerCount, currentEnhancedText = '') {
    const analysis = extractIntent(userText);
    const domain = assessDomain(userText);
    
    let enhanced = currentEnhancedText || userText;
    
    // Layer 1: Analysis
    if (!currentEnhancedText || layerCount === 1) {
        enhanced += `

## ENHANCED PROMPT FRAMEWORK

**Intent Analysis**: ${analysis.toUpperCase()}
**Domain Focus**: ${domain.toUpperCase()}

**Enhancement Applied**:
- Mapped explicit requirements and implicit needs
- Assessed domain-specific expertise requirements
- Identified boundaries and potential ambiguities
- Determined appropriate complexity level`;
    }

    // Layer 2: Architecture
    if (layerCount >= 2) {
        if (!currentEnhancedText) {
            enhanced += `

## STRUCTURAL ARCHITECTURE

**Role Definition**: You are a professional expert specializing in ${domain}
**Core Objective**: Deliver valuable, actionable results with comprehensive analysis

**Methodological Framework**:
- Introduction: Begin with clear context and purpose
- Body: Develop main content with logical flow
- Conclusion: Summarize key points and next steps

**Process Flow**:
- Step 1: Establish context and understand requirements
- Step 2: Apply domain expertise and analytical frameworks
- Step 3: Develop comprehensive response with supporting evidence
- Step 4: Validate accuracy and ensure actionable value`;
        } else {
            enhanced += `

## ADVANCED ROLE DEFINITION

**Enhanced Expertise Profile**: You are a distinguished ${domain} expert, research specialist, and strategic advisor with 15+ years of advanced experience, holding advanced degrees and professional certifications, with proven expertise in ${domain} methodologies, best practices, case studies, and industry standards.

**Authority Framework**:
- Reference peer-reviewed research and authoritative sources
- Apply evidence-based methodologies and proven frameworks
- Include real-world case studies and implementation examples
- Maintain cross-industry perspective and comparative analysis
- Integrate emerging trends and future-oriented insights`;
        }
    }

    // Layer 3: Refinement
    if (layerCount >= 3) {
        if (!currentEnhancedText) {
            enhanced += `

## CLARITY & COMPLETENESS ENHANCEMENT

**Clarity Enhancements**:
- Converted implicit requirements to explicit specifications
- Eliminated potential ambiguities in language
- Structured logical flow for optimal comprehension

**Completeness Verification**:
- Ensured all necessary components are addressed
- Added context and background where needed
- Included validation criteria for quality assurance`;
        } else {
            enhanced += `

## EXPANDED TASK FRAMEWORK

**Comprehensive Task Architecture**:
1. **Executive Summary/Overview**: Key findings and strategic implications
2. **Detailed Analysis/Content**: Technical depth with practical applications
3. **Key Insights and Findings**: Data-driven conclusions and future projections
4. **Practical Recommendations**: Implementation roadmaps and resource requirements
5. **Action Items and Next Steps**: Timelines, priorities, and success metrics
6. **Summary and Conclusion**: Strategic recommendations and call-to-action

**Advanced Methodological Framework**:
- Apply systems thinking for interconnected impacts and dependencies
- Use comparative analysis across multiple scenarios and contexts
- Implement risk assessment with mitigation strategies
- Include uncertainty quantification and confidence levels
- Provide contingency planning for various outcome scenarios`;
        }
    }

    // Layer 4: Optimization
    if (layerCount >= 4) {
        if (!currentEnhancedText) {
            enhanced += `

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
        } else {
            enhanced += `

## ENHANCED CONSTRAINTS & QUALITY STANDARDS

**Absolute Quality Requirements**:
- Apply rigorous source verification with multiple authoritative references
- Include quantitative metrics, data points, and measurable outcomes
- Ensure logical consistency with cross-reference validation
- Address potential criticisms, counterarguments, and alternative perspectives
- Provide clear implementation steps with specific resource requirements

**Verification Framework**:
- Multi-source verification for all claims and data points
- Peer-reviewed research integration and citation
- Industry report analysis and comparative benchmarking
- Expert opinion synthesis and consensus validation
- Real-world case study examination and lessons learned`;
        }
    }

    // Layer 5: Consciousness Engineering (if applicable)
    if (layerCount >= 5) {
        if (!currentEnhancedText) {
            enhanced += `

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
        } else {
            enhanced += `

## META-COGNITIVE AMPLIFICATION

**Advanced Reasoning Patterns**:
- Apply dialectical thinking to explore thesis, antithesis, and synthesis
- Implement analogical reasoning for pattern recognition and transfer
- Use abductive reasoning for hypothesis formation and testing
- Employ systems dynamics thinking for feedback loops and emergent properties
- Integrate complexity thinking for handling uncertainty and non-linearity

**Consciousness Engineering Expansion**:
- Cultivate deep awareness of own reasoning process and cognitive biases
- Maintain simultaneous awareness of multiple stakeholder perspectives
- Apply wisdom principles for sustainable and beneficial outcomes
- Integrate ethical considerations throughout the analytical process
- Balance competing values and trade-offs with principled decision-making

**Transcendent Optimization**:
- Apply universal principles that transcend specific contexts and timeframes
- Consider implications across multiple dimensions: temporal, spatial, and conceptual
- Integrate aesthetic and beauty considerations for compelling presentation
- Balance analytical rigor with intuitive wisdom and practical intelligence
- Aim for elegant solutions that are both comprehensive and elegantly simple`;
        }
    }
    
    return enhanced;
}

function extractIntent(text) {
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

function assessDomain(text) {
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
    savedPrompts.unshift(promptData);
    localStorage.setItem('savedPrompts', JSON.stringify(savedPrompts));
    
    showAlert('Prompt saved successfully!', 'success');
}

function generatePromptTitle(text) {
    const maxLength = 50;
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
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
    const savedPromptsList = document.getElementById('savedPromptsList');
    
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