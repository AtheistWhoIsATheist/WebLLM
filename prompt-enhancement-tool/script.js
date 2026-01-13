class PromptEnhancer {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        document.getElementById('enhanceBtn').addEventListener('click', () => {
            this.enhancePrompt();
        });
        
        document.getElementById('copyBtn').addEventListener('click', () => {
            this.copyEnhancedPrompt();
        });
    }

    async enhancePrompt() {
        const originalPrompt = document.getElementById('originalPrompt').value.trim();
        const outputSection = document.getElementById('outputSection');
        const enhanceBtn = document.getElementById('enhanceBtn');
        
        if (!originalPrompt) {
            this.showNotification('Please enter a prompt to enhance', 'error');
            return;
        }

        // Show loading state
        enhanceBtn.textContent = 'Analyzing & Enhancing...';
        enhanceBtn.disabled = true;
        outputSection.style.display = 'block';
        document.getElementById('enhancedPrompt').innerHTML = '<div class="loading">Applying PEM methodology...</div>';

        try {
            // Simulate processing time for better UX
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            const enhancedPrompt = this.applyPEMMethodology(originalPrompt);
            
            // Display result
            document.getElementById('enhancedPrompt').innerHTML = this.formatEnhancedPrompt(enhancedPrompt);
            this.showNotification('Prompt enhanced successfully!', 'success');
            
        } catch (error) {
            this.showNotification('Error enhancing prompt: ' + error.message, 'error');
        } finally {
            enhanceBtn.textContent = 'Enhance Prompt';
            enhanceBtn.disabled = false;
        }
    }

    applyPEMMethodology(originalPrompt) {
        // Step 1: Prompt Analysis Protocol
        const analysis = this.analyzePrompt(originalPrompt);
        
        // Step 2: Apply Enhancement Framework
        const enhanced = this.enhancePromptStructure(originalPrompt, analysis);
        
        // Step 3: Apply Quality Assurance
        return this.applyQualityAssurance(enhanced);
    }

    analyzePrompt(prompt) {
        const analysis = {
            hasRole: this.checkForRoleDefinition(prompt),
            hasConstraints: this.checkForConstraints(prompt),
            hasFormat: this.checkForOutputFormat(prompt),
            clarity: this.assessClarity(prompt),
            structure: this.assessStructure(prompt),
            context: this.assessContext(prompt)
        };
        
        return analysis;
    }

    checkForRoleDefinition(prompt) {
        const roleKeywords = ['act as', 'you are', 'role', 'position', 'act', 'behave as'];
        return roleKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
    }

    checkForConstraints(prompt) {
        const constraintKeywords = ['must', 'should', 'ensure', 'avoid', 'never', 'always', 'constraints'];
        return constraintKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
    }

    checkForOutputFormat(prompt) {
        const formatKeywords = ['format', 'structure', 'output', 'respond', 'answer', 'return'];
        return formatKeywords.some(keyword => prompt.toLowerCase().includes(keyword));
    }

    assessClarity(prompt) {
        // Simple clarity assessment based on length and complexity
        const wordCount = prompt.split(' ').length;
        if (wordCount < 5) return 'low';
        if (wordCount < 20) return 'medium';
        return 'high';
    }

    assessStructure(prompt) {
        // Check for clear structure indicators
        const structureIndicators = ['step', 'first', 'then', 'next', 'finally', '1.', '2.', '-'];
        const hasStructure = structureIndicators.some(indicator => prompt.includes(indicator));
        return hasStructure ? 'good' : 'poor';
    }

    assessContext(prompt) {
        // Check for contextual information
        const contextIndicators = ['context', 'background', 'situation', 'scenario', 'example'];
        return contextIndicators.some(indicator => prompt.toLowerCase().includes(indicator)) ? 'present' : 'missing';
    }

    enhancePromptStructure(originalPrompt, analysis) {
        let enhanced = originalPrompt;

        // Add role definition if missing
        if (!analysis.hasRole) {
            enhanced = `You are an expert AI assistant with deep knowledge and experience in the relevant domain.\n\n${enhanced}`;
        }

        // Add context and background
        if (analysis.context === 'missing') {
            enhanced += `\n\nContext: This request requires careful consideration of the specific requirements and objectives. Please provide a comprehensive response that addresses the core needs.`;
        }

        // Add structure if poor
        if (analysis.structure === 'poor') {
            enhanced += `\n\nPlease structure your response as follows:
1. Introduction/Overview
2. Main Points/Analysis  
3. Supporting Details
4. Conclusion/Recommendations`;
        }

        // Add constraints and guidelines
        if (!analysis.hasConstraints) {
            enhanced += `\n\nConstraints and Guidelines:
- Be precise and specific in your response
- Ensure all claims are well-supported
- Maintain clarity and avoid unnecessary complexity
- Focus on practical, actionable insights
- Verify information accuracy before presenting it`;
        }

        // Add output format specification
        if (!analysis.hasFormat) {
            enhanced += `\n\nOutput Format:
- Use clear headings and subheadings
- Employ bullet points for key information
- Maintain consistent formatting throughout
- Include relevant examples where appropriate
- Provide a concise summary of main points`;
        }

        // Add quality assurance mechanisms
        enhanced += `\n\nQuality Assurance:
- Verify the accuracy of all information provided
- Check for logical consistency in your reasoning
- Ensure your response fully addresses the request
- Consider multiple perspectives when relevant
- Flag any limitations or uncertainties in your knowledge`;

        // Add meta-cognitive guidance for complex reasoning
        enhanced += `\n\nMeta-Cognitive Guidance:
- Before responding, consider the user's likely objectives
- Identify the most important aspects to address
- Anticipate potential follow-up questions or concerns
- Ensure your response provides genuine value
- Maintain focus on clarity and usefulness`;

        return enhanced;
    }

    applyQualityAssurance(enhancedPrompt) {
        // Final refinement for clarity and effectiveness
        let finalPrompt = enhancedPrompt;

        // Clean up redundant phrases
        finalPrompt = finalPrompt.replace(/Please note that/gi, 'Note that');
        finalPrompt = finalPrompt.replace(/It is important to/gi, 'Important:');
        
        // Enhance key instructions
        finalPrompt = finalPrompt.replace(/Be precise and specific/gi, 'Be extremely precise and specific');
        finalPrompt = finalPrompt.replace(/Maintain clarity/gi, 'Maintain crystal-clear clarity');
        
        // Add final emphasis
        finalPrompt += `\n\nIMPORTANT: This enhanced prompt incorporates comprehensive Prompt Engineering Methodology to maximize effectiveness. Apply all guidelines consistently to deliver exceptional results.`;

        return finalPrompt;
    }

    formatEnhancedPrompt(prompt) {
        // Format for display with proper escaping
        return prompt
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/\n/g, '<br>');
    }

    copyEnhancedPrompt() {
        const enhancedPromptText = document.getElementById('enhancedPrompt').textContent;
        
        navigator.clipboard.writeText(enhancedPromptText).then(() => {
            this.showNotification('Enhanced prompt copied to clipboard!', 'success');
        }).catch(() => {
            this.showNotification('Failed to copy to clipboard', 'error');
        });
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
        }, 3000);
    }
}

// Initialize the application
const enhancer = new PromptEnhancer();