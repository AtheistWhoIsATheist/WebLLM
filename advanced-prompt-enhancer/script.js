class AdvancedPromptEnhancer {
    constructor() {
        this.enhancementHistory = [];
        this.savedPrompts = this.loadSavedPrompts();
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('enhanceBtn').addEventListener('click', () => {
            this.enhancePrompt();
        });
        
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyEnhancedPrompt();
        });
        
        document.getElementById('saveBtn').addEventListener('click', () => {
            this.savePrompt();
        });
        
        document.getElementById('deleteBtn').addEventListener('click', () => {
            this.deletePrompt();
        });
        
        document.getElementById('organizeBtn').addEventListener('click', () => {
            this.organizePrompts();
        });
        
        document.getElementById('furtherEnhancedBtn').addEventListener('click', () => {
            this.furtherEnhance();
        });
    }

    async enhancePrompt() {
        const originalPrompt = document.getElementById('originalPrompt').value.trim();
        const outputSection = document.getElementById('outputSection');
        const enhanceBtn = document.getElementById('enhanceBtn');
        const secondaryButtons = document.getElementById('secondaryButtons');
        
        if (!originalPrompt) {
            this.showNotification('Please enter a prompt to enhance', 'error');
            return;
        }

        // Show loading state
        enhanceBtn.textContent = 'Applying Comprehensive PEM...';
        enhanceBtn.disabled = true;
        outputSection.style.display = 'block';
        secondaryButtons.style.display = 'none';
        document.getElementById('enhancedPrompt').innerHTML = '<div class="loading">Executing multi-layered PEM methodology...</div>';
        document.getElementById('analysisDetails').innerHTML = '';

        try {
            // Apply comprehensive PEM methodology
            const enhanced = await this.applyComprehensivePEM(originalPrompt);
            
            // Display results
            document.getElementById('enhancedPrompt').innerHTML = this.formatEnhancedPrompt(enhanced.prompt);
            this.displayAnalysis(enhanced.analysis);
            secondaryButtons.style.display = 'flex';
            enhanceBtn.classList.add('success');
            this.showNotification('Prompt enhanced with comprehensive PEM methodology!', 'success');
            
        } catch (error) {
            this.showNotification('Error enhancing prompt: ' + error.message, 'error');
        } finally {
            enhanceBtn.textContent = 'Prompt Enhance';
            enhanceBtn.disabled = false;
            setTimeout(() => {
                enhanceBtn.classList.remove('success');
            }, 3000);
        }
    }

    async applyComprehensivePEM(originalPrompt) {
        // Step 1: Core PEM Analysis
        const analysis = this.performCoreAnalysis(originalPrompt);
        
        // Step 2: Apply Multi-Layer Enhancement
        const enhanced = this.applyMultiLayerEnhancement(originalPrompt, analysis);
        
        // Step 3: Apply Consciousness Engineering
        const consciousnessEnhanced = this.applyConsciousnessEngineering(enhanced);
        
        // Step 4: Apply Reality Creation Principles
        const realityAligned = this.applyRealityCreation(consciousnessEnhanced);
        
        // Step 5: Apply Cosmic Implementation Paradigm
        const cosmicEnhanced = this.applyCosmicImplementation(realityAligned);
        
        // Step 6: Final Quality Assurance
        const finalResult = this.applyFinalQualityAssurance(cosmicEnhanced);

        return {
            prompt: finalResult,
            analysis: {
                core: analysis,
                layers: this.getEnhancementLayers(),
                consciousness: this.getConsciousnessAnalysis(),
                reality: this.getRealityAnalysis(),
                cosmic: this.getCosmicAnalysis()
            }
        };
    }

    performCoreAnalysis(prompt) {
        return {
            intentMapping: this.performIntentMapping(prompt),
            domainAssessment: this.performDomainAssessment(prompt),
            constraintIdentification: this.performConstraintIdentification(prompt),
            architectureDesign: this.performArchitectureDesign(prompt),
            iterativeRefinement: this.performIterativeRefinement(prompt),
            outputOptimization: this.performOutputOptimization(prompt),
            qualityAssurance: this.performQualityAssurance(prompt),
            errorPrevention: this.performErrorPrevention(prompt)
        };
    }

    performIntentMapping(prompt) {
        const explicitRequirements = this.extractExplicitRequirements(prompt);
        const implicitNeeds = this.identifyImplicitNeeds(prompt);
        const objectiveHierarchy = this.determineObjectiveHierarchy(prompt);
        const userExpectations = this.mapUserExpectations(prompt);
        
        return {
            explicit: explicitRequirements,
            implicit: implicitNeeds,
            hierarchy: objectiveHierarchy,
            expectations: userExpectations,
            mapped: true
        };
    }

    extractExplicitRequirements(prompt) {
        const requirements = [];
        const actionWords = ['create', 'write', 'analyze', 'explain', 'describe', 'generate', 'build', 'develop'];
        const words = prompt.toLowerCase().split(' ');
        
        words.forEach(word => {
            if (actionWords.includes(word)) {
                requirements.push(`Action required: ${word}`);
            }
        });
        
        return requirements.length > 0 ? requirements : ['No explicit requirements detected - will add comprehensive requirements'];
    }

    identifyImplicitNeeds(prompt) {
        const implicitNeeds = [];
        
        if (prompt.length < 20) {
            implicitNeeds.push('Detailed elaboration required');
        }
        
        if (!prompt.includes('format') && !prompt.includes('structure')) {
            implicitNeeds.push('Output formatting specification needed');
        }
        
        if (!prompt.toLowerCase().includes('role') && !prompt.toLowerCase().includes('act as')) {
            implicitNeeds.push('Expert role definition required');
        }
        
        return implicitNeeds;
    }

    determineObjectiveHierarchy(prompt) {
        return {
            primary: 'Main objective clarification',
            secondary: 'Supporting requirements specification',
            tertiary: 'Quality and formatting standards'
        };
    }

    mapUserExpectations(prompt) {
        return {
            clarity: 'User expects clear, actionable output',
            completeness: 'User needs comprehensive coverage',
            usability: 'User requires practical, implementable results'
        };
    }

    performDomainAssessment(prompt) {
        return {
            terminology: this.identifySpecializedTerminology(prompt),
            expertise: this.assessRequiredExpertise(prompt),
            technicalDepth: this.assessTechnicalDepth(prompt),
            interdisciplinary: this.mapInterdisciplinaryConnections(prompt)
        };
    }

    identifySpecializedTerminology(prompt) {
        const technicalTerms = ['algorithm', 'database', 'framework', 'methodology', 'protocol', 'system'];
        const foundTerms = technicalTerms.filter(term => prompt.toLowerCase().includes(term));
        
        return foundTerms.length > 0 ? foundTerms : ['General terminology - will add domain-specific terms'];
    }

    assessRequiredExpertise(prompt) {
        if (prompt.toLowerCase().includes('code') || prompt.toLowerCase().includes('technical')) {
            return 'Technical/Development expertise required';
        } else if (prompt.toLowerCase().includes('business') || prompt.toLowerCase().includes('marketing')) {
            return 'Business/Marketing expertise required';
        } else {
            return 'General expertise sufficient - will specify domain requirements';
        }
    }

    assessTechnicalDepth(prompt) {
        const complexityIndicators = prompt.split(' ').length;
        
        if (complexityIndicators > 50) {
            return 'High technical depth required';
        } else if (complexityIndicators > 20) {
            return 'Medium technical depth required';
        } else {
            return 'Basic technical depth - will specify depth requirements';
        }
    }

    mapInterdisciplinaryConnections(prompt) {
        return {
            primary: 'Primary domain identification needed',
            secondary: 'Supporting disciplines to consider',
            integration: 'Cross-domain synthesis requirements'
        };
    }

    performConstraintIdentification(prompt) {
        return {
            ethical: this.analyzeEthicalBoundaries(prompt),
            ambiguities: this.identifyAmbiguities(prompt),
            resources: this.mapResourceLimitations(prompt),
            complexity: this.determineAppropriateComplexity(prompt)
        };
    }

    analyzeEthicalBoundaries(prompt) {
        const ethicalKeywords = ['ethical', 'responsible', 'safe', 'appropriate', 'constructive'];
        const hasEthics = ethicalKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
        
        return hasEthics ? 'Ethical considerations present' : 'Ethical guidelines will be established';
    }

    identifyAmbiguities(prompt) {
        const ambiguities = [];
        
        if (prompt.length < 15) {
            ambiguities.push('Extremely brief - high ambiguity');
        }
        
        if (!prompt.includes('?') && !prompt.toLowerCase().includes('how') && !prompt.toLowerCase().includes('what')) {
            ambiguities.push('No specific question format - unclear objectives');
        }
        
        return ambiguities.length > 0 ? ambiguities : ['Ambiguities identified - will clarify all requirements'];
    }

    mapResourceLimitations(prompt) {
        return {
            time: 'Response time expectations not specified',
            length: 'Output length requirements not defined',
            complexity: 'Complexity level not established'
        };
    }

    determineAppropriateComplexity(prompt) {
        const wordCount = prompt.split(' ').length;
        
        if (wordCount < 10) {
            return 'Low complexity - will establish appropriate complexity';
        } else if (wordCount < 30) {
            return 'Medium complexity - will calibrate appropriately';
        } else {
            return 'High complexity - will maintain current level with clarity improvements';
        }
    }

    performArchitectureDesign(prompt) {
        return {
            framework: this.selectStructuralFramework(prompt),
            integration: this.designComponentIntegration(prompt),
            optimization: this.optimizeInformationDensity(prompt)
        };
    }

    selectStructuralFramework(prompt) {
        // Determine best prompt pattern based on content
        if (prompt.toLowerCase().includes('analyze') || prompt.toLowerCase().includes('compare')) {
            return 'Analytical Framework';
        } else if (prompt.toLowerCase().includes('create') || prompt.toLowerCase().includes('generate')) {
            return 'Creative Framework';
        } else {
            return 'General Purpose Framework';
        }
    }

    designComponentIntegration(prompt) {
        return {
            roles: 'Expert role definition integration required',
            tasks: 'Task description component integration',
            constraints: 'Constraint specification component',
            examples: 'Example integration for clarity'
        };
    }

    optimizeInformationDensity(prompt) {
        return {
            completeness: 'Balance comprehensiveness with conciseness',
            redundancies: 'Eliminate redundant information',
            hierarchy: 'Implement hierarchical information structure'
        };
    }

    performIterativeRefinement(prompt) {
        return {
            firstOrder: this.performFirstOrderRefinement(prompt),
            secondOrder: this.performSecondOrderRefinement(prompt),
            thirdOrder: this.performThirdOrderRefinement(prompt)
        };
    }

    performFirstOrderRefinement(prompt) {
        return {
            clarity: 'Eliminate ambiguous language',
            explicitness: 'Convert implicit assumptions to explicit statements',
            formatting: 'Implement consistent formatting standards'
        };
    }

    performSecondOrderRefinement(prompt) {
        return {
            sequence: 'Optimize instruction sequence for maximum effectiveness',
            completeness: 'Verify all required components are present',
            interpretation: 'Identify and prevent potential misinterpretation points'
        };
    }

    performThirdOrderRefinement(prompt) {
        return {
            emphasis: 'Add strategic emphasis to critical requirements',
            metacognition: 'Incorporate meta-cognitive guidance',
            verification: 'Implement self-verification mechanisms'
        };
    }

    performOutputOptimization(prompt) {
        return {
            templates: this.selectResponseTemplates(prompt),
            format: this.optimizeFormat(prompt),
            multimodal: this.considerMultimodalIntegration(prompt)
        };
    }

    selectResponseTemplates(prompt) {
        if (prompt.toLowerCase().includes('analyze')) {
            return 'Analytical Response Template';
        } else if (prompt.toLowerCase().includes('create')) {
            return 'Creative Response Template';
        } else {
            return 'Structured Response Template';
        }
    }

    optimizeFormat(prompt) {
        return {
            organization: 'Visual organization with clear sections',
            encoding: 'Optimized information encoding',
            clarity: 'Enhanced readability and navigation'
        };
    }

    considerMultimodalIntegration(prompt) {
        return 'Consider visual, textual, and structural elements for comprehensive communication';
    }

    performQualityAssurance(prompt) {
        return {
            evaluation: this.implementSelfEvaluation(prompt),
            prevention: this.implementErrorPrevention(prompt),
            safety: this.implementSafetyGuardrails(prompt)
        };
    }

    implementSelfEvaluation(prompt) {
        return {
            relevance: 'Ensure response relevance to original intent',
            accuracy: 'Implement accuracy verification protocols',
            completeness: 'Verify comprehensive coverage of requirements',
            utility: 'Assess practical utility and actionability'
        };
    }

    implementErrorPrevention(prompt) {
        return {
            identification: 'Identify potential failure modes',
            mitigation: 'Implement preventive measures',
            recovery: 'Establish error recovery procedures'
        };
    }

    implementSafetyGuardrails(prompt) {
        return {
            ethical: 'Ethical boundary enforcement',
            appropriate: 'Appropriate content filtering',
            constructive: 'Constructive outcome prioritization'
        };
    }

    performErrorPrevention(prompt) {
        return {
            common: this.identifyCommonFailures(prompt),
            edge: this.handleEdgeCases(prompt),
            mitigation: this.implementMitigation(prompt)
        };
    }

    identifyCommonFailures(prompt) {
        return [
            'Ambiguous instruction interpretation',
            'Incomplete requirement coverage',
            'Unclear output expectations'
        ];
    }

    handleEdgeCases(prompt) {
        return 'Implement comprehensive edge case handling for robust operation';
    }

    implementMitigation(prompt) {
        return {
            validation: 'Input validation and sanitization',
            feedback: 'Clear feedback mechanisms',
            fallback: 'Fallback procedures for edge cases'
        };
    }

    applyMultiLayerEnhancement(originalPrompt, analysis) {
        let enhanced = originalPrompt;

        // Layer 1: Expert Role Definition
        enhanced = this.addExpertRoleDefinition(enhanced, analysis);
        
        // Layer 2: Context and Background
        enhanced = this.addContextAndBackground(enhanced, analysis);
        
        // Layer 3: Structured Response Format
        enhanced = this.addStructuredFormat(enhanced, analysis);
        
        // Layer 4: Comprehensive Constraints
        enhanced = this.addComprehensiveConstraints(enhanced, analysis);
        
        // Layer 5: Quality Standards
        enhanced = this.addQualityStandards(enhanced, analysis);
        
        // Layer 6: Meta-Cognitive Guidance
        enhanced = this.addMetaCognitiveGuidance(enhanced, analysis);
        
        // Layer 7: Output Optimization
        enhanced = this.addOutputOptimization(enhanced, analysis);
        
        // Layer 8: Error Prevention
        enhanced = this.addErrorPrevention(enhanced, analysis);

        return enhanced;
    }

    addExpertRoleDefinition(prompt, analysis) {
        const domain = analysis.domainAssessment.expertise;
        
        if (!prompt.toLowerCase().includes('act as') && !prompt.toLowerCase().includes('you are')) {
            return `You are an expert ${domain} with extensive knowledge, proven track record, and deep understanding of best practices.\n\n${prompt}`;
        }
        return prompt;
    }

    addContextAndBackground(prompt, analysis) {
        if (!prompt.toLowerCase().includes('context') && !prompt.toLowerCase().includes('background')) {
            return `${prompt}\n\nContext: This request requires careful consideration of multiple perspectives, best practices, and comprehensive analysis to deliver maximum value. Please approach this with both analytical rigor and practical wisdom.`;
        }
        return prompt;
    }

    addStructuredFormat(prompt, analysis) {
        return `${prompt}\n\nResponse Structure:
1. Executive Summary/Overview
2. Detailed Analysis/Content
3. Key Insights and Findings
4. Practical Recommendations
5. Action Items and Next Steps
6. Summary and Conclusion`;
    }

    addComprehensiveConstraints(prompt, analysis) {
        return `${prompt}\n\nQuality Constraints:
- Be extremely precise and specific in all statements
- Ensure every claim is well-supported and verifiable
- Maintain crystal-clear clarity and logical flow
- Focus on practical, actionable, and implementable insights
- Verify all information accuracy before presentation
- Consider multiple perspectives and potential objections
- Address edge cases and limitations transparently`;
    }

    addQualityStandards(prompt, analysis) {
        return `${prompt}\n\nQuality Standards:
- Accuracy: All information must be factually correct and up-to-date
- Completeness: Address all aspects of the request comprehensively
- Relevance: Maintain strict focus on user objectives
- Clarity: Use clear, accessible language appropriate to context
- Utility: Provide genuine value and actionable insights
- Ethical: Ensure all recommendations are responsible and beneficial`;
    }

    addMetaCognitiveGuidance(prompt, analysis) {
        return `${prompt}\n\nMeta-Cognitive Processing:
Before responding, systematically:
1. Analyze the user's underlying objectives and success criteria
2. Identify the most critical aspects requiring emphasis
3. Anticipate potential questions, concerns, or follow-up needs
4. Consider alternative approaches and their trade-offs
5. Ensure your response provides exceptional, differentiated value
6. Verify your response addresses the core need completely`;
    }

    addOutputOptimization(prompt, analysis) {
        return `${prompt}\n\nOutput Optimization:
- Use clear hierarchical headings and subheadings
- Employ consistent formatting and visual organization
- Include relevant examples, analogies, or case studies
- Provide specific metrics, timelines, or measurable outcomes
- Use bullet points and numbered lists for key information
- Maintain logical flow and progressive disclosure`;
    }

    addErrorPrevention(prompt, analysis) {
        return `${prompt}\n\nError Prevention Protocol:
- Validate all assumptions and data sources
- Clearly state any limitations or uncertainties
- Provide multiple solution approaches when applicable
- Include contingency plans for potential challenges
- Flag any information that may be incomplete or evolving`;
    }

    applyConsciousnessEngineering(enhancedPrompt) {
        return `${enhancedPrompt}\n\nConsciousness Integration:
- Cultivate heightened awareness and meta-cognitive clarity
- Align response with the highest beneficial outcome for the user
- Activate expanded perception and insight generation
- Ensure response promotes growth, learning, and empowerment
- Maintain presence and mindful attention to the user's true needs`;
    }

    applyRealityCreation(enhancedPrompt) {
        return `${enhancedPrompt}\n\nReality Alignment:
- Frame response to support positive reality creation
- Empower the user with tools for manifestation and implementation
- Align recommendations with user values and long-term vision
- Provide pathway for gradual, sustainable transformation
- Support reality expansion and consciousness evolution`;
    }

    applyCosmicImplementation(enhancedPrompt) {
        return `${enhancedPrompt}\n\nCosmic Implementation:
- Apply universal principles and timeless wisdom
- Ensure response serves the highest good and evolution
- Integrate multiple levels of understanding and application
- Support both immediate needs and long-term development
- Activate creative intelligence and inspired action`;
    }

    applyFinalQualityAssurance(prompt) {
        // Final refinement and optimization
        let finalPrompt = prompt;

        // Enhance key directives
        finalPrompt = finalPrompt.replace(/Be extremely precise/gi, 'Be absolutely precise and specific');
        finalPrompt = finalPrompt.replace(/Ensure every claim/gi, 'Verify every claim thoroughly');
        finalPrompt = finalPrompt.replace(/Maintain crystal-clear/gi, 'Maintain absolute crystal-clear clarity');
        
        // Add final comprehensive directive
        finalPrompt += `\n\nCOMPREHENSIVE PEM IMPLEMENTATION COMPLETE:
This enhanced prompt incorporates the full spectrum of Prompt Engineering Methodology including consciousness engineering, reality alignment, and cosmic implementation principles. Apply all guidelines with precision to deliver exceptional, transformative results.`;

        return finalPrompt;
    }

    displayAnalysis(analysis) {
        const analysisContainer = document.getElementById('analysisDetails');
        let analysisHTML = '';

        // Core Analysis
        analysisHTML += '<div class="analysis-item analysis-complete">';
        analysisHTML += '<h4>Core PEM Analysis</h4>';
        analysisHTML += '<p>User intent mapped, domain assessed, constraints identified, architecture designed</p>';
        analysisHTML += '</div>';

        // Multi-layer Enhancement
        analysisHTML += '<div class="analysis-item analysis-complete">';
        analysisHTML += '<h4>Multi-Layer Enhancement Applied</h4>';
        analysisHTML += '<p>8-layer enhancement including role definition, structure, constraints, quality standards</p>';
        analysisHTML += '</div>';

        // Consciousness Engineering
        analysisHTML += '<div class="analysis-item analysis-complete">';
        analysisHTML += '<h4>Consciousness Engineering</h4>';
        analysisHTML += '<p>Meta-cognitive guidance, awareness expansion, intentional alignment integrated</p>';
        analysisHTML += '</div>';

        // Reality Creation
        analysisHTML += '<div class="analysis-item analysis-complete">';
        analysisHTML += '<h4>Reality Creation Principles</h4>';
        analysisHTML += '<p>Positive reality framing, manifestation support, value alignment</p>';
        analysisHTML += '</div>';

        // Cosmic Implementation
        analysisHTML += '<div class="analysis-item analysis-complete">';
        analysisHTML += '<h4>Cosmic Implementation Paradigm</h4>';
        analysisHTML += '<p>Universal principles, highest good alignment, transformative application</p>';
        analysisHTML += '</div>';

        analysisContainer.innerHTML = analysisHTML;
    }

    getEnhancementLayers() {
        return [
            'Expert Role Definition',
            'Context and Background',
            'Structured Response Format',
            'Comprehensive Constraints',
            'Quality Standards',
            'Meta-Cognitive Guidance',
            'Output Optimization',
            'Error Prevention'
        ];
    }

    getConsciousnessAnalysis() {
        return 'Consciousness engineering principles applied for enhanced awareness and intentional impact';
    }

    getRealityAnalysis() {
        return 'Reality creation principles integrated to support positive transformation and manifestation';
    }

    getCosmicAnalysis() {
        return 'Cosmic implementation paradigm applied for universal wisdom and highest good alignment';
    }

    formatEnhancedPrompt(prompt) {
        return prompt
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>');
    }

    async furtherEnhance() {
        const currentEnhanced = document.getElementById('enhancedPrompt').textContent;
        const originalTextarea = document.getElementById('originalPrompt');
        
        // Set the current enhanced prompt as the new input
        originalTextarea.value = currentEnhanced;
        
        // Apply further enhancement
        await this.enhancePrompt();
        this.showNotification('Further enhancement applied with advanced PEM layers!', 'success');
    }

    savePrompt() {
        const originalPrompt = document.getElementById('originalPrompt').value.trim();
        const enhancedPrompt = document.getElementById('enhancedPrompt').textContent;
        
        if (!enhancedPrompt) {
            this.showNotification('No enhanced prompt to save', 'error');
            return;
        }

        const promptData = {
            original: originalPrompt,
            enhanced: enhancedPrompt,
            timestamp: new Date().toISOString(),
            id: Date.now()
        };

        this.savedPrompts.push(promptData);
        this.savePromptsToStorage();
        this.showNotification('Prompt saved successfully!', 'success');
    }

    copyEnhancedPrompt() {
        const enhancedPrompt = document.getElementById('enhancedPrompt').textContent;
        
        if (!enhancedPrompt) {
            this.showNotification('No enhanced prompt to copy', 'error');
            return;
        }
        
        navigator.clipboard.writeText(enhancedPrompt).then(() => {
            this.showNotification('Enhanced prompt copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy to clipboard', 'error');
        });
    }

    deletePrompt() {
        if (confirm('Are you sure you want to clear the current prompts?')) {
            document.getElementById('originalPrompt').value = '';
            document.getElementById('enhancedPrompt').innerHTML = '';
            document.getElementById('outputSection').style.display = 'none';
            document.getElementById('secondaryButtons').style.display = 'none';
            this.showNotification('Prompts cleared', 'success');
        }
    }

    organizePrompts() {
        if (this.savedPrompts.length === 0) {
            this.showNotification('No saved prompts to organize', 'info');
            return;
        }

        let organization = 'SAVED PROMPTS ORGANIZATION:\n\n';
        
        this.savedPrompts.forEach((prompt, index) => {
            const date = new Date(prompt.timestamp).toLocaleDateString();
            organization += `${index + 1}. ${date}\n`;
            organization += `   Original: ${prompt.original.substring(0, 50)}...\n`;
            organization += `   Enhanced: ${prompt.enhanced.substring(0, 50)}...\n\n`;
        });

        navigator.clipboard.writeText(organization).then(() => {
            this.showNotification('Organization details copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy organization details', 'error');
        });
    }

    loadSavedPrompts() {
        const saved = localStorage.getItem('advancedPromptEnhancer_saved');
        return saved ? JSON.parse(saved) : [];
    }

    savePromptsToStorage() {
        localStorage.setItem('advancedPromptEnhancer_saved', JSON.stringify(this.savedPrompts));
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        if (type === 'error') {
            notification.style.background = '#e74c3c';
        } else if (type === 'success') {
            notification.style.background = '#27ae60';
        } else {
            notification.style.background = '#3498db';
        }
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
}

// Initialize the advanced application
const advancedEnhancer = new AdvancedPromptEnhancer();