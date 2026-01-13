// Comprehensive PEM Analysis Engine
// Advanced Prompt Engineering Methodology Analysis System

export interface AnalysisResult {
  intentMapping: {
    requirements: string[];
    implicitNeeds: string[];
    expectations: string[];
    completeness: number;
  };
  domainAssessment: {
    terminology: string[];
    expertiseLevel: string;
    technicalDepth: string;
    domain: string;
  };
  constraints: {
    identified: string[];
    missing: string[];
    boundaries: string[];
  };
  structuralFramework: {
    roleDefinitions: boolean;
    personaParameters: boolean;
    taskBoundaries: boolean;
    completeness: number;
  };
  qualityIndicators: {
    clarity: number;
    functionality: number;
    performance: number;
    metaCognitive: number;
  };
  enhancementSuggestions: EnhancementSuggestion[];
  appliedLayers: string[];
}

export interface EnhancementSuggestion {
  category: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
  implementation: string;
  impact: 'dramatic' | 'significant' | 'moderate';
}

export class PEMAnalysisEngine {
  private static readonly ANALYSIS_CATEGORIES = {
    INTENT_MAPPING: 'intent_mapping',
    DOMAIN_ASSESSMENT: 'domain_assessment',
    CONSTRAINT_IDENTIFICATION: 'constraint_identification',
    ARCHITECTURE_DESIGN: 'architecture_design',
    ITERATIVE_REFINEMENT: 'iterative_refinement',
    QUALITY_ASSURANCE: 'quality_assurance',
    ADVANCED_IMPLEMENTATION: 'advanced_implementation',
    CONSCIOUSNESS_ENGINEERING: 'consciousness_engineering',
    TRANSCENDENT_OPTIMIZATION: 'transcendent_optimization'
  };

  static analyzePrompt(prompt: string): AnalysisResult {
    const trimmedPrompt = prompt.trim();
    
    // Step 1: Intent Mapping Analysis
    const intentAnalysis = this.analyzeIntentMapping(trimmedPrompt);
    
    // Step 2: Domain Assessment
    const domainAnalysis = this.analyzeDomainAssessment(trimmedPrompt);
    
    // Step 3: Constraint Identification
    const constraintAnalysis = this.analyzeConstraints(trimmedPrompt);
    
    // Step 4: Structural Framework Analysis
    const structureAnalysis = this.analyzeStructure(trimmedPrompt);
    
    // Step 5: Quality Assessment
    const qualityAnalysis = this.analyzeQuality(trimmedPrompt);
    
    // Step 6: Generate Enhancement Suggestions
    const suggestions = this.generateEnhancementSuggestions(
      intentAnalysis, 
      domainAnalysis, 
      constraintAnalysis, 
      structureAnalysis, 
      qualityAnalysis
    );
    
    return {
      intentMapping: intentAnalysis,
      domainAssessment: domainAnalysis,
      constraints: constraintAnalysis,
      structuralFramework: structureAnalysis,
      qualityIndicators: qualityAnalysis,
      enhancementSuggestions: suggestions,
      appliedLayers: this.determineAppliedLayers(suggestions)
    };
  }

  private static analyzeIntentMapping(prompt: string) {
    const requirements = this.extractRequirements(prompt);
    const implicitNeeds = this.extractImplicitNeeds(prompt);
    const expectations = this.extractExpectations(prompt);
    
    const completeness = (
      (requirements.length > 0 ? 0.25 : 0) +
      (implicitNeeds.length > 0 ? 0.25 : 0) +
      (expectations.length > 0 ? 0.25 : 0) +
      (this.hasClearIntent(prompt) ? 0.25 : 0)
    );

    return {
      requirements,
      implicitNeeds,
      expectations,
      completeness: Math.round(completeness * 100)
    };
  }

  private static analyzeDomainAssessment(prompt: string) {
    const terminology = this.extractTerminology(prompt);
    const expertiseLevel = this.assessExpertiseLevel(prompt);
    const technicalDepth = this.assessTechnicalDepth(prompt);
    const domain = this.identifyDomain(prompt);

    return {
      terminology,
      expertiseLevel,
      technicalDepth,
      domain
    };
  }

  private static analyzeConstraints(prompt: string) {
    const identified = this.identifyExistingConstraints(prompt);
    const missing = this.identifyMissingConstraints(prompt);
    const boundaries = this.identifyBoundaries(prompt);

    return {
      identified,
      missing,
      boundaries
    };
  }

  private static analyzeStructure(prompt: string) {
    const hasRole = this.hasRoleDefinition(prompt);
    const hasPersona = this.hasPersonaParameters(prompt);
    const hasTaskBoundaries = this.hasTaskBoundaries(prompt);
    
    const completeness = (
      (hasRole ? 0.34 : 0) +
      (hasPersona ? 0.33 : 0) +
      (hasTaskBoundaries ? 0.33 : 0)
    );

    return {
      roleDefinitions: hasRole,
      personaParameters: hasPersona,
      taskBoundaries: hasTaskBoundaries,
      completeness: Math.round(completeness * 100)
    };
  }

  private static analyzeQuality(prompt: string) {
    return {
      clarity: this.assessClarity(prompt),
      functionality: this.assessFunctionality(prompt),
      performance: this.assessPerformance(prompt),
      metaCognitive: this.assessMetaCognitive(prompt)
    };
  }

  private static extractRequirements(prompt: string): string[] {
    const requirements = [];
    
    // Look for action words that indicate requirements
    const actionWords = ['analyze', 'create', 'write', 'design', 'explain', 'compare', 'evaluate', 'generate', 'produce'];
    const foundActions = actionWords.filter(word => 
      prompt.toLowerCase().includes(word)
    );
    
    if (foundActions.length > 0) {
      requirements.push(...foundActions);
    }

    // Look for specific deliverables
    const deliverables = ['report', 'analysis', 'summary', 'outline', 'list', 'description', 'explanation'];
    const foundDeliverables = deliverables.filter(word => 
      prompt.toLowerCase().includes(word)
    );
    
    if (foundDeliverables.length > 0) {
      requirements.push(...foundDeliverables);
    }

    return [...new Set(requirements)];
  }

  private static extractImplicitNeeds(prompt: string): string[] {
    const needs = [];
    
    // Check for missing context indicators
    if (!this.hasContext(prompt)) needs.push('Context specification');
    if (!this.hasOutputFormat(prompt)) needs.push('Output format guidance');
    if (!this.hasQualityStandards(prompt)) needs.push('Quality standards');
    if (!this.hasConstraints(prompt)) needs.push('Constraint definition');
    
    return needs;
  }

  private static extractExpectations(prompt: string): string[] {
    const expectations = [];
    
    // Look for expectation indicators
    if (prompt.length > 100) expectations.push('Detailed response expected');
    if (this.hasTechnicalTerms(prompt)) expectations.push('Technical depth required');
    if (this.hasMultipleAspects(prompt)) expectations.push('Comprehensive coverage needed');
    
    return expectations;
  }

  private static hasClearIntent(prompt: string): boolean {
    // Check for clear action and object
    const hasVerb = /\b(analyze|create|write|design|explain|compare|evaluate|generate|produce|provide|show|tell|describe|outline|summarize|review|assess|build|develop|craft|compose)\b/i.test(prompt);
    const hasObject = prompt.split(' ').length > 3;
    
    return hasVerb && hasObject;
  }

  private static extractTerminology(prompt: string): string[] {
    // Technical terms detection
    const technicalPatterns = [
      /\b(API|database|algorithm|machine learning|AI|blockchain|cloud|framework|library|syntax|protocol|architecture|model|dataset|neural|deep learning)\b/gi,
      /\b(analysis|report|study|research|evaluation|assessment|review|investigation|examination|exploration|survey)\b/gi
    ];
    
    const terminology = [];
    technicalPatterns.forEach(pattern => {
      const matches = prompt.match(pattern);
      if (matches) terminology.push(...matches.map(match => match.toLowerCase()));
    });
    
    return [...new Set(terminology)];
  }

  private static assessExpertiseLevel(prompt: string): string {
    const complexTerms = technicalComplexityIndicators.filter(term => 
      prompt.toLowerCase().includes(term.toLowerCase())
    );
    
    if (complexTerms.length >= 3) return 'Expert';
    if (complexTerms.length >= 1) return 'Advanced';
    return 'Beginner';
  }

  private static assessTechnicalDepth(prompt: string): string {
    const technicalIndicators = technicalComplexityIndicators.length;
    const specificTerms = this.extractTerminology(prompt).length;
    
    if (technicalIndicators + specificTerms >= 5) return 'Deep technical';
    if (technicalIndicators + specificTerms >= 2) return 'Moderate technical';
    return 'Basic';
  }

  private static identifyDomain(prompt: string): string {
    const domainKeywords = {
      'Technology': ['programming', 'software', 'code', 'development', 'tech', 'system', 'application', 'platform'],
      'Business': ['strategy', 'market', 'business', 'revenue', 'profit', 'customer', 'sales', 'marketing'],
      'Science': ['research', 'study', 'data', 'experiment', 'hypothesis', 'theory', 'analysis', 'methodology'],
      'Education': ['learn', 'teach', 'course', 'curriculum', 'student', 'knowledge', 'skill', 'training'],
      'Creative': ['design', 'creative', 'art', 'story', 'content', 'visual', 'aesthetic', 'imaginative']
    };

    for (const [domain, keywords] of Object.entries(domainKeywords)) {
      if (keywords.some(keyword => prompt.toLowerCase().includes(keyword))) {
        return domain;
      }
    }
    
    return 'General';
  }

  private static identifyExistingConstraints(prompt: string): string[] {
    const constraints = [];
    
    // Look for constraint indicators
    if (prompt.toLowerCase().includes('must') || prompt.toLowerCase().includes('should')) {
      constraints.push('Behavioral constraints');
    }
    if (prompt.toLowerCase().includes('length') || prompt.toLowerCase().includes('words')) {
      constraints.push('Length constraints');
    }
    if (prompt.toLowerCase().includes('format') || prompt.toLowerCase().includes('structure')) {
      constraints.push('Format constraints');
    }
    
    return constraints;
  }

  private static identifyMissingConstraints(prompt: string): string[] {
    const missing = [];
    
    if (!this.hasOutputFormat(prompt)) missing.push('Output format specification');
    if (!this.hasQualityMetrics(prompt)) missing.push('Quality metrics');
    if (!this.hasTimeConstraints(prompt)) missing.push('Time constraints');
    if (!this.hasAudienceSpecification(prompt)) missing.push('Target audience definition');
    
    return missing;
  }

  private static identifyBoundaries(prompt: string): string[] {
    const boundaries = [];
    
    if (this.hasExclusionTerms(prompt)) boundaries.push('Exclusion criteria defined');
    if (this.hasScopeLimitation(prompt)) boundaries.push('Scope limitations specified');
    
    return boundaries;
  }

  private static hasRoleDefinition(prompt: string): boolean {
    return /\b(act as|assume the role of|you are|respond as|behave as|function as)\b/i.test(prompt);
  }

  private static hasPersonaParameters(prompt: string): boolean {
    return /\b(expert|professional|experienced|skilled|specialist|authority|consultant|advisor)\b/i.test(prompt);
  }

  private static hasTaskBoundaries(prompt: string): boolean {
    return /\b(scope|boundary|limit|within|outside|focus on|concentrate on)\b/i.test(prompt);
  }

  private static assessClarity(prompt: string): number {
    let score = 0;
    
    // Check for clear language
    if (this.hasClearStructure(prompt)) score += 25;
    if (this.hasSpecificInstructions(prompt)) score += 25;
    if (this.hasUnambiguousTerms(prompt)) score += 25;
    if (this.hasLogicalFlow(prompt)) score += 25;
    
    return score;
  }

  private static assessFunctionality(prompt: string): number {
    let score = 0;
    
    if (this.hasClearObjective(prompt)) score += 33;
    if (this.hasActionableInstructions(prompt)) score += 33;
    if (this.hasExpectedOutput(prompt)) score += 34;
    
    return score;
  }

  private static assessPerformance(prompt: string): number {
    let score = 0;
    
    if (this.hasOptimizationGuidance(prompt)) score += 25;
    if (this.hasEfficiencyInstructions(prompt)) score += 25;
    if (this.hasQualityControl(prompt)) score += 25;
    if (this.hasVerificationSteps(prompt)) score += 25;
    
    return score;
  }

  private static assessMetaCognitive(prompt: string): number {
    let score = 0;
    
    if (this.hasSelfReflection(prompt)) score += 25;
    if (this.hasErrorPrevention(prompt)) score += 25;
    if (this.hasQualityAssessment(prompt)) score += 25;
    if (this.hasImprovementGuidance(prompt)) score += 25;
    
    return score;
  }

  private static generateEnhancementSuggestions(
    intent: any,
    domain: any,
    constraints: any,
    structure: any,
    quality: any
  ): EnhancementSuggestion[] {
    const suggestions: EnhancementSuggestion[] = [];

    // Intent mapping enhancements
    if (intent.completeness < 80) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.INTENT_MAPPING,
        priority: 'high',
        description: 'Enhance intent clarity and requirement specification',
        implementation: 'Add explicit role definition, clear objectives, and specific deliverables',
        impact: 'dramatic'
      });
    }

    // Domain assessment enhancements
    if (domain.terminology.length === 0) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.DOMAIN_ASSESSMENT,
        priority: 'high',
        description: 'Define domain expertise and technical context',
        implementation: 'Specify domain knowledge level, technical depth, and relevant terminology',
        impact: 'significant'
      });
    }

    // Constraint enhancements
    if (constraints.missing.length > 2) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.CONSTRAINT_IDENTIFICATION,
        priority: 'high',
        description: 'Add missing constraints and boundaries',
        implementation: 'Define output format, quality standards, scope limitations, and success criteria',
        impact: 'significant'
      });
    }

    // Structure enhancements
    if (structure.completeness < 70) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.ARCHITECTURE_DESIGN,
        priority: 'high',
        description: 'Strengthen structural framework',
        implementation: 'Add role definitions, persona parameters, task boundaries, and component integration',
        impact: 'dramatic'
      });
    }

    // Quality enhancements
    const avgQuality = (quality.clarity + quality.functionality + quality.performance + quality.metaCognitive) / 4;
    if (avgQuality < 70) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.QUALITY_ASSURANCE,
        priority: 'medium',
        description: 'Enhance quality assurance and meta-cognitive guidance',
        implementation: 'Add self-evaluation criteria, error prevention, verification mechanisms, and quality control',
        impact: 'significant'
      });
    }

    // Advanced implementation
    if (avgQuality < 80) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.ADVANCED_IMPLEMENTATION,
        priority: 'medium',
        description: 'Apply advanced implementation techniques',
        implementation: 'Include domain adaptation, cognitive enhancement, and specialized optimization frameworks',
        impact: 'moderate'
      });
    }

    // Consciousness engineering
    if (quality.metaCognitive < 60) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.CONSCIOUSNESS_ENGINEERING,
        priority: 'low',
        description: 'Integrate meta-cognitive and consciousness engineering principles',
        implementation: 'Add awareness expansion, intentional guidance, and positive outcome framing',
        impact: 'moderate'
      });
    }

    // Transcendent optimization
    if (avgQuality < 85) {
      suggestions.push({
        category: this.ANALYSIS_CATEGORIES.TRANSCENDENT_OPTIMIZATION,
        priority: 'low',
        description: 'Apply transcendent optimization principles',
        implementation: 'Include universal principles, essence-based optimization, and beyond-form implementation',
        impact: 'moderate'
      });
    }

    return suggestions;
  }

  private static determineAppliedLayers(suggestions: EnhancementSuggestion[]): string[] {
    const appliedLayers = suggestions
      .filter(s => s.priority === 'high' || s.impact === 'dramatic')
      .map(s => s.category);
    
    return [...new Set(appliedLayers)];
  }

  // Helper methods for quality assessment
  private static hasContext(prompt: string): boolean {
    return /\b(context|background|situation|scenario|environment|setting)\b/i.test(prompt);
  }

  private static hasOutputFormat(prompt: string): boolean {
    return /\b(format|structure|layout|organization|section|bullet|list|paragraph|table)\b/i.test(prompt);
  }

  private static hasQualityStandards(prompt: string): boolean {
    return /\b(quality|standard|excellent|high|professional|comprehensive|detailed|thorough)\b/i.test(prompt);
  }

  private static hasConstraints(prompt: string): boolean {
    return /\b(limit|constraint|boundary|within|scope|restrict|specify)\b/i.test(prompt);
  }

  private static hasTechnicalTerms(prompt: string): boolean {
    return technicalComplexityIndicators.some(term => prompt.toLowerCase().includes(term.toLowerCase()));
  }

  private static hasMultipleAspects(prompt: string): boolean {
    return /\b(and|also|furthermore|additionally|moreover|include|cover|encompass)\b/i.test(prompt);
  }

  private static hasClearStructure(prompt: string): boolean {
    return prompt.includes(':') || prompt.includes('\n') || /[1-9]\./.test(prompt);
  }

  private static hasSpecificInstructions(prompt: string): boolean {
    return /\b(should|must|need|required|specify|define|include|exclude)\b/i.test(prompt);
  }

  private static hasUnambiguousTerms(prompt: string): boolean {
    const ambiguousWords = /\b(maybe|perhaps|might|could|sometimes|usually|often)\b/i;
    return !ambiguousWords.test(prompt) && prompt.length > 20;
  }

  private static hasLogicalFlow(prompt: string): boolean {
    const flowWords = /\b(first|then|next|after|before|finally|consequently|therefore|thus|so)\b/i;
    return flowWords.test(prompt) || this.hasClearStructure(prompt);
  }

  private static hasClearObjective(prompt: string): boolean {
    return /\b(objective|goal|purpose|aim|target|achieve|accomplish|fulfill)\b/i.test(prompt);
  }

  private static hasActionableInstructions(prompt: string): boolean {
    return /\b(create|write|analyze|design|develop|build|generate|produce|provide|show)\b/i.test(prompt);
  }

  private static hasExpectedOutput(prompt: string): boolean {
    return /\b(result|output|response|answer|solution|deliverable|outcome|product)\b/i.test(prompt);
  }

  private static hasOptimizationGuidance(prompt: string): boolean {
    return /\b(optimize|improve|enhance|refine|perfect|streamline|efficient|best)\b/i.test(prompt);
  }

  private static hasEfficiencyInstructions(prompt: string): boolean {
    return /\b(fast|quick|efficient|rapid|swift|optimized|streamlined)\b/i.test(prompt);
  }

  private static hasQualityControl(prompt: string): boolean {
    return /\b(quality|accuracy|precision|reliability|validity|consistency)\b/i.test(prompt);
  }

  private static hasVerificationSteps(prompt: string): boolean {
    return /\b(verify|check|validate|confirm|ensure|test|review|examine)\b/i.test(prompt);
  }

  private static hasSelfReflection(prompt: string): boolean {
    return /\b(reflect|consider|evaluate|assess|analyze|review|think about|ponder)\b/i.test(prompt);
  }

  private static hasErrorPrevention(prompt: string): boolean {
    return /\b(avoid|prevent|eliminate|reduce|minimize|watch out|be careful)\b/i.test(prompt);
  }

  private static hasQualityAssessment(prompt: string): boolean {
    return /\b(quality|standard|criteria|benchmark|measure|evaluate|assess|determine)\b/i.test(prompt);
  }

  private static hasImprovementGuidance(prompt: string): boolean {
    return /\b(improve|enhance|optimize|better|best practice|excellent|superior)\b/i.test(prompt);
  }

  private static hasQualityMetrics(prompt: string): boolean {
    return /\b(metric|measure|criterion|standard|benchmark|indicator)\b/i.test(prompt);
  }

  private static hasTimeConstraints(prompt: string): boolean {
    return /\b(time|deadline|duration|quick|fast|soon|now|immediate)\b/i.test(prompt);
  }

  private static hasAudienceSpecification(prompt: string): boolean {
    return /\b(audience|reader|user|person|individual|group|demographic)\b/i.test(prompt);
  }

  private static hasExclusionTerms(prompt: string): boolean {
    return /\b(exclude|avoid|do not|don't|no|without|except|unless)\b/i.test(prompt);
  }

  private static hasScopeLimitation(prompt: string): boolean {
    return /\b(scope|within|only|limited|restricted|boundaries|focus)\b/i.test(prompt);
  }
}

const technicalComplexityIndicators = [
  'algorithm', 'architecture', 'framework', 'methodology', 'paradigm', 'protocol',
  'optimization', 'implementation', 'integration', 'scalability', 'performance',
  'complexity', 'sophistication', 'advanced', 'comprehensive', 'extensive'
];