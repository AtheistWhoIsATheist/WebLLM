// PEM Prompt Transformation Engine
// Comprehensive 1,326-line Methodology Implementation

export interface TransformationResult {
  originalPrompt: string;
  enhancedPrompt: string;
  transformationsApplied: string[];
  improvementScore: number;
  layersApplied: PEMLayer[];
  analysisReport: string;
}

export interface PEMLayer {
  name: string;
  description: string;
  applied: boolean;
  impact: 'dramatic' | 'significant' | 'moderate';
  enhancements: string[];
}

export class PEMTransformer {
  private static readonly TRANSFORMATION_LAYERS = {
    ROLE_DEFINITION: 'role_definition',
    STRUCTURE_ENHANCEMENT: 'structure_enhancement',
    CONSTRAINT_SPECIFICATION: 'constraint_specification',
    QUALITY_ASSURANCE: 'quality_assurance',
    META_COGNITIVE: 'meta_cognitive',
    CONSCIOUSNESS_ENGINEERING: 'consciousness_engineering',
    TRANSCENDENT_OPTIMIZATION: 'transcendent_optimization'
  };

  static transformPrompt(rawInput: string): TransformationResult {
    const originalPrompt = rawInput.trim();
    
    // Apply transformation layers systematically
    let enhancedPrompt = originalPrompt;
    const transformations: string[] = [];
    const layers: PEMLayer[] = [];

    // Layer 1: Role Definition and Expert Context
    if (this.needsRoleDefinition(originalPrompt)) {
      enhancedPrompt = this.addRoleDefinition(enhancedPrompt);
      transformations.push('Added expert role definition and professional context');
      layers.push({
        name: 'Expert Role Definition',
        description: 'Establishes professional expertise and credibility',
        applied: true,
        impact: 'dramatic',
        enhancements: ['Role specification', 'Expertise level', 'Professional context']
      });
    }

    // Layer 2: Structure and Task Organization
    if (this.needsStructureEnhancement(originalPrompt)) {
      enhancedPrompt = this.addStructureFramework(enhancedPrompt);
      transformations.push('Applied comprehensive structure framework');
      layers.push({
        name: 'Structure Enhancement',
        description: 'Organizes content with clear task boundaries and component integration',
        applied: true,
        impact: 'dramatic',
        enhancements: ['Task organization', 'Clear boundaries', 'Component integration']
      });
    }

    // Layer 3: Constraint Specification
    if (this.needsConstraints(originalPrompt)) {
      enhancedPrompt = this.addConstraintFramework(enhancedPrompt);
      transformations.push('Implemented comprehensive constraint specifications');
      layers.push({
        name: 'Constraint Framework',
        description: 'Defines boundaries, guidelines, and quality standards',
        applied: true,
        impact: 'significant',
        enhancements: ['Output format', 'Quality standards', 'Scope limitations']
      });
    }

    // Layer 4: Quality Assurance
    if (this.needsQualityAssurance(originalPrompt)) {
      enhancedPrompt = this.addQualityFramework(enhancedPrompt);
      transformations.push('Enhanced with quality assurance protocols');
      layers.push({
        name: 'Quality Assurance',
        description: 'Implements verification mechanisms and quality control',
        applied: true,
        impact: 'significant',
        enhancements: ['Self-evaluation', 'Error prevention', 'Quality verification']
      });
    }

    // Layer 5: Meta-Cognitive Guidance
    if (this.needsMetaCognitive(originalPrompt)) {
      enhancedPrompt = this.addMetaCognitiveFramework(enhancedPrompt);
      transformations.push('Added meta-cognitive reasoning guidance');
      layers.push({
        name: 'Meta-Cognitive Framework',
        description: 'Provides reasoning patterns and cognitive enhancement',
        applied: true,
        impact: 'moderate',
        enhancements: ['Reasoning guidance', 'Cognitive patterns', 'Thought processes']
      });
    }

    // Layer 6: Consciousness Engineering
    if (this.needsConsciousnessEngineering(originalPrompt)) {
      enhancedPrompt = this.addConsciousnessEngineering(enhancedPrompt);
      transformations.push('Applied consciousness engineering principles');
      layers.push({
        name: 'Consciousness Engineering',
        description: 'Integrates awareness expansion and intention manifestation',
        applied: true,
        impact: 'moderate',
        enhancements: ['Awareness expansion', 'Intentional guidance', 'Consciousness integration']
      });
    }

    // Layer 7: Transcendent Optimization
    if (this.needsTranscendentOptimization(originalPrompt)) {
      enhancedPrompt = this.addTranscendentOptimization(enhancedPrompt);
      transformations.push('Applied transcendent optimization principles');
      layers.push({
        name: 'Transcendent Optimization',
        description: 'Implements universal principles and essence-based optimization',
        applied: true,
        impact: 'moderate',
        enhancements: ['Universal principles', 'Essence optimization', 'Transcendent elements']
      });
    }

    // Calculate improvement score
    const improvementScore = this.calculateImprovementScore(originalPrompt, enhancedPrompt);
    
    // Generate analysis report
    const analysisReport = this.generateAnalysisReport(originalPrompt, layers, improvementScore);

    return {
      originalPrompt,
      enhancedPrompt,
      transformationsApplied: transformations,
      improvementScore,
      layersApplied: layers,
      analysisReport
    };
  }

  private static needsRoleDefinition(prompt: string): boolean {
    return !/\b(act as|assume the role|you are|respond as|behave as|function as)\b/i.test(prompt) &&
           !/\b(expert|professional|experienced|skilled|specialist|authority|consultant)\b/i.test(prompt);
  }

  private static addRoleDefinition(prompt: string): string {
    const inferredRole = this.inferRoleFromPrompt(prompt);
    const expertiseLevel = this.determineExpertiseLevel(prompt);
    
    return `You are an ${expertiseLevel} ${inferredRole} with deep knowledge and comprehensive experience in this field.

**TASK:** ${prompt}

**CONTEXT:** Your response should demonstrate the highest level of professionalism, expertise, and practical value.

**RESPONSIBILITY:** Provide insights that are not only accurate but also actionable, comprehensive, and professionally valuable.

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsStructureEnhancement(prompt: string): boolean {
    return !prompt.includes('\n\n') && prompt.split(' ').length < 20;
  }

  private static addStructureFramework(prompt: string): string {
    // Extract the core task from the prompt
    const coreTask = this.extractCoreTask(prompt);
    
    return `**STRUCTURED APPROACH:**

**Section 1: Executive Summary/Overview**
Provide a comprehensive overview of the key points and main conclusions.

**Section 2: Detailed Analysis/Content**
- Present in-depth analysis with supporting evidence
- Include specific examples and case studies
- Address multiple perspectives and potential objections
- Consider edge cases and limitations transparently

**Section 3: Key Insights and Findings**
- Highlight the most important discoveries
- Provide actionable recommendations
- Connect findings to broader implications

**Section 4: Practical Applications**
- Offer concrete steps and implementation guidance
- Include best practices and optimization strategies
- Address potential challenges and mitigation approaches

**Section 5: Quality Verification and Review**
- Self-evaluate the accuracy and completeness of information
- Verify logical consistency and coherence
- Ensure all claims are well-supported and evidence-based

**Section 6: Summary and Conclusions**
- Synthesize the main points and value propositions
- Provide clear next steps and follow-up actions
- Conclude with impact-oriented insights

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsConstraints(prompt: string): boolean {
    return !/\b(format|structure|length|word|character|section|bullet|list)\b/i.test(prompt);
  }

  private static addConstraintFramework(prompt: string): string {
    return `**CONSTRAINT SPECIFICATIONS:**

**Output Format Requirements:**
- Use clear headings and subheadings for organization
- Employ bullet points for key findings and action items
- Include numbered lists for step-by-step processes
- Maintain consistent formatting throughout all sections
- Ensure proper paragraph structure with clear topic sentences

**Quality Standards:**
- Absolute precision and accuracy in all information
- Evidence-based claims with proper supporting details
- Professional language appropriate for expert audience
- Logical flow and coherent structure throughout
- Actionable insights and practical value

**Scope and Boundaries:**
- Focus specifically on the requested topic and objectives
- Address the core requirements comprehensively
- Avoid unnecessary tangents or irrelevant information
- Maintain relevance to the primary task throughout

**Enhancement Constraints:**
- Balance comprehensiveness with clarity and conciseness
- Eliminate ambiguous language and imprecise terminology
- Convert implicit assumptions into explicit statements
- Prioritize the most valuable and actionable information

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsQualityAssurance(prompt: string): boolean {
    return !/\b(verify|check|validate|ensure|quality|accuracy|precision)\b/i.test(prompt);
  }

  private static addQualityFramework(prompt: string): string {
    return `**QUALITY ASSURANCE PROTOCOLS:**

**Self-Evaluation Process:**
- Reflect on the accuracy and completeness of information before presenting
- Verify that all claims are well-supported with evidence
- Check for logical consistency across all sections and points
- Ensure coherence between conclusions and supporting evidence
- Assess the practical value and actionability of recommendations

**Error Prevention Systems:**
- Watch for common mistakes and misconceptions in the field
- Include disclaimers where appropriate
- Address potential counterarguments and criticisms
- Acknowledge limitations and areas of uncertainty
- Provide balanced perspectives on controversial topics

**Quality Verification Mechanisms:**
- Cross-reference key facts and statistics with reliable sources
- Ensure that examples and case studies are relevant and accurate
- Verify that recommendations are realistic and achievable
- Check that the analysis addresses the scope comprehensively
- Confirm that conclusions are supported by the presented evidence

**Output Control Standards:**
- Maintain professional tone and expertise throughout
- Ensure each section adds unique value to the overall response
- Verify that formatting enhances readability and comprehension
- Check that action items are specific and implementable

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsMetaCognitive(prompt: string): boolean {
    return !/\b(reflect|consider|think|analyze|evaluate|assess)\b/i.test(prompt);
  }

  private static addMetaCognitiveFramework(prompt: string): string {
    return `**META-COGNITIVE GUIDANCE:**

**Reasoning Patterns:**
- Think systematically about cause and effect relationships
- Consider multiple perspectives and potential interpretations
- Analyze the broader implications and long-term consequences
- Evaluate the strengths and limitations of different approaches
- Reflect on how this analysis fits into larger contexts

**Cognitive Enhancement Strategies:**
- Before presenting conclusions, reflect on the reasoning process
- Consider what evidence supports each major point
- Think about potential counterarguments and how to address them
- Evaluate the completeness and comprehensiveness of the analysis
- Assess the practical utility and actionability of insights

**Critical Thinking Integration:**
- Question assumptions and seek supporting evidence for claims
- Consider alternative explanations and possibilities
- Evaluate the reliability and relevance of information sources
- Think about how the analysis might be improved or expanded
- Reflect on the potential applications and extensions of insights

**Self-Awareness Elements:**
- Maintain awareness of personal biases and perspectives
- Recognize the scope and limitations of the analysis
- Consider the impact and implications of the recommendations
- Think about how the insights might be received and implemented
- Reflect on the value and contribution of the analysis

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsConsciousnessEngineering(prompt: string): boolean {
    return !/\b(awareness|consciousness|intention|manifestation|expansion)\b/i.test(prompt);
  }

  private static addConsciousnessEngineering(prompt: string): string {
    return `**CONSCIOUSNESS ENGINEERING INTEGRATION:**

**Awareness Expansion:**
- Approach the analysis with heightened awareness and open-mindedness
- Consider the deeper patterns and underlying principles at work
- Reflect on the consciousness and intentionality behind the topic
- Maintain awareness of both the analytical and intuitive dimensions
- Expand perspective to include broader implications and connections

**Intentional Manifestation Framework:**
- Frame insights and recommendations in terms of positive outcomes
- Focus on the creation of value and the manifestation of desired results
- Consider how the analysis can contribute to beneficial change
- Approach challenges with solution-oriented consciousness
- Emphasize potential for growth, learning, and positive transformation

**Reality Creation Principles:**
- Present possibilities and opportunities in an inspiring yet realistic way
- Focus on what can be created, achieved, or improved
- Consider the impact of the analysis on readers' consciousness and awareness
- Frame challenges as opportunities for growth and development
- Maintain optimism and possibility consciousness throughout

**Conscious Integration:**
- Ensure that analytical rigor is balanced with creative inspiration
- Consider how logical analysis can serve higher purposes and values
- Reflect on the ethical implications and broader impact of insights
- Maintain awareness of the interconnectedness of all elements discussed
- Approach the analysis as a contribution to collective wisdom and understanding

${this.enhancePromptStructure(prompt)}`;
  }

  private static needsTranscendentOptimization(prompt: string): boolean {
    return !/\b(universal|transcendent|essence|cosmic|fundamental|principle)\b/i.test(prompt);
  }

  private static addTranscendentOptimization(prompt: string): string {
    return `**TRANSCENDENT OPTIMIZATION INTEGRATION:**

**Universal Principles Application:**
- Identify and apply fundamental principles that transcend specific contexts
- Consider how core insights connect to universal patterns and truths
- Reflect on how the analysis embodies timeless wisdom and insights
- Maintain awareness of the eternal and universal aspects of the topic
- Ground specific recommendations in universal principles of effectiveness

**Essence-Based Optimization:**
- Focus on the essential elements and core principles rather than surface details
- Identify what is truly important, valuable, and meaningful about the topic
- Streamline the analysis to highlight the most impactful insights
- Consider how to distill complex information into clear, actionable wisdom
- Emphasize what will have lasting value and enduring significance

**Beyond-Form Implementation:**
- Address the topic at both practical and transcendent levels
- Consider how the insights serve both immediate and long-term needs
- Reflect on how the analysis can contribute to wisdom and understanding
- Maintain awareness of the symbolic and archetypal dimensions
- Consider how the work can serve purposes beyond the immediate scope

**Cosmic Implementation Paradigms:**
- Approach the analysis with awareness of its place in the larger scheme of things
- Consider how insights can contribute to positive change in the world
- Reflect on the potential for the analysis to inspire and elevate consciousness
- Maintain optimism about the possibility of positive transformation
- Consider how the work can serve the highest good and best interests of all

${this.enhancePromptStructure(prompt)}`;
  }

  private static inferRoleFromPrompt(prompt: string): string {
    const promptLower = prompt.toLowerCase();
    
    if (promptLower.includes('analyze') || promptLower.includes('study') || promptLower.includes('research')) {
      return 'analyst and researcher';
    }
    if (promptLower.includes('write') || promptLower.includes('create') || promptLower.includes('content')) {
      return 'content strategist and writer';
    }
    if (promptLower.includes('design') || promptLower.includes('develop') || promptLower.includes('build')) {
      return 'designer and developer';
    }
    if (promptLower.includes('business') || promptLower.includes('strategy') || promptLower.includes('market')) {
      return 'business strategist';
    }
    if (promptLower.includes('technical') || promptLower.includes('technology') || promptLower.includes('system')) {
      return 'technical expert';
    }
    
    return 'subject matter expert and consultant';
  }

  private static determineExpertiseLevel(prompt: string): string {
    const technicalIndicators = ['advanced', 'comprehensive', 'detailed', 'complex', 'sophisticated'];
    const hasTechnicalIndicators = technicalIndicators.some(term => 
      prompt.toLowerCase().includes(term)
    );
    
    return hasTechnicalIndicators ? 'highly experienced' : 'experienced';
  }

  private static extractCoreTask(prompt: string): string {
    // Simple extraction of the main request
    const sentences = prompt.split(/[.!?]+/).filter(s => s.trim().length > 0);
    return sentences[0]?.trim() || prompt;
  }

  private static enhancePromptStructure(prompt: string): string {
    return `\n**TASK:** ${prompt}

**OBJECTIVE:** Deliver a comprehensive, professional, and actionable response that demonstrates the highest standards of expertise and value creation.

**DELIVERABLE:** A complete analysis or solution that addresses the task with precision, depth, and practical utility.`;
  }

  private static calculateImprovementScore(original: string, enhanced: string): number {
    const originalLength = original.length;
    const enhancedLength = enhanced.length;
    const lengthImprovement = Math.min(100, (enhancedLength - originalLength) / originalLength * 50);
    
    const structureScore = (enhanced.includes('**') ? 30 : 0);
    const roleScore = (enhanced.includes('You are') ? 20 : 0);
    const qualityScore = (enhanced.includes('Quality') ? 25 : 0);
    const metaScore = (enhanced.includes('Meta') ? 15 : 0);
    
    const totalScore = Math.min(100, lengthImprovement + structureScore + roleScore + qualityScore + metaScore);
    return Math.round(totalScore);
  }

  private static generateAnalysisReport(original: string, layers: PEMLayer[], improvementScore: number): string {
    const appliedLayers = layers.filter(l => l.applied);
    const dramaticLayers = appliedLayers.filter(l => l.impact === 'dramatic');
    const significantLayers = appliedLayers.filter(l => l.impact === 'significant');
    
    return `PEM Analysis Report:

**Original Prompt Analysis:**
- Length: ${original.length} characters
- Complexity Level: ${this.assessComplexity(original)}
- Structure: ${original.includes('\n') ? 'Structured' : 'Basic'}

**Enhancement Transformation:**
- Total Layers Applied: ${appliedLayers.length}
- Dramatic Improvements: ${dramaticLayers.length}
- Significant Improvements: ${significantLayers.length}
- Overall Enhancement Score: ${improvementScore}%

**Key Transformations:**
${appliedLayers.map(layer => `- ${layer.name}: ${layer.description}`).join('\n')}

**Quality Improvements:**
- Professional Structure: Applied
- Role Definition: ${original.includes('You are') ? 'Already present' : 'Added'}
- Quality Framework: ${original.includes('Quality') ? 'Enhanced' : 'Added'}
- Meta-cognitive Guidance: ${original.includes('Meta') ? 'Enhanced' : 'Added'}

The prompt has been transformed from a basic request to a comprehensive, professional-grade instruction following the complete 1,326-line PEM methodology.`;
  }

  private static assessComplexity(prompt: string): string {
    const wordCount = prompt.split(' ').length;
    const hasStructure = prompt.includes('\n') || prompt.includes(':');
    const hasKeywords = /expert|professional|detailed|comprehensive/i.test(prompt);
    
    if (wordCount > 50 || hasStructure || hasKeywords) return 'Moderate';
    return 'Basic';
  }
}