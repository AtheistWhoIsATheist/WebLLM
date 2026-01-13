import React, { useState, useRef, useEffect } from 'react';
import { PEMTransformer, TransformationResult } from '../lib/pemTransformer';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { 
  Zap, 
  Save, 
  Copy, 
  Trash2, 
  FolderOpen, 
  BarChart3, 
  Brain,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileText,
  Target,
  Award
} from 'lucide-react';

interface SavedPrompt {
  id: string;
  original: string;
  enhanced: string;
  timestamp: string;
  score: number;
  layers: string[];
}

const PromptEnhancer: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<TransformationResult | null>(null);
  const [savedPrompts, setSavedPrompts] = useState<SavedPrompt[]>([]);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [showOrganizeModal, setShowOrganizeModal] = useState(false);
  const [enhancementStep, setEnhancementStep] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [finalProgress, setFinalProgress] = useState(0);
  
  const outputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Load saved prompts from localStorage
    const saved = localStorage.getItem('savedPrompts');
    if (saved) {
      setSavedPrompts(JSON.parse(saved));
    }
  }, []);

  const savePrompt = (promptResult: TransformationResult) => {
    const savedPrompt: SavedPrompt = {
      id: Date.now().toString(),
      original: promptResult.originalPrompt,
      enhanced: promptResult.enhancedPrompt,
      timestamp: new Date().toLocaleString(),
      score: promptResult.improvementScore,
      layers: promptResult.layersApplied.map(l => l.name)
    };
    
    const updatedPrompts = [savedPrompt, ...savedPrompts];
    setSavedPrompts(updatedPrompts);
    localStorage.setItem('savedPrompts', JSON.stringify(updatedPrompts));
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const deletePrompt = (id: string) => {
    const updatedPrompts = savedPrompts.filter(p => p.id !== id);
    setSavedPrompts(updatedPrompts);
    localStorage.setItem('savedPrompts', JSON.stringify(updatedPrompts));
  };

  const enhancePrompt = async () => {
    if (!input.trim()) return;
    
    setIsEnhancing(true);
    setEnhancementStep(0);
    setResult(null); // Clear previous result
    
    // Simulate enhancement steps for better UX
    const steps = [
      'Analyzing input...',
      'Applying role definition...',
      'Enhancing structure...',
      'Adding constraints...',
      'Implementing quality assurance...',
      'Integrating meta-cognitive guidance...',
      'Applying consciousness engineering...',
      'Finalizing transcendent optimization...'
    ];
    
    for (let i = 0; i < steps.length; i++) {
      setEnhancementStep(i);
      await new Promise(resolve => setTimeout(resolve, 200)); // Faster animation
    }
    
    try {
      console.log('Starting transformation for input:', input);
      const transformation = PEMTransformer.transformPrompt(input);
      console.log('Transformation result:', transformation);
      
      if (transformation && transformation.enhancedPrompt) {
        setResult(transformation);
        setFinalProgress(8); // Show completed state
        console.log('Successfully set result with enhanced prompt');
      } else {
        console.error('Transformation failed - no enhanced prompt generated');
      }
    } catch (error) {
      console.error('Error during transformation:', error);
    }
    
    setIsEnhancing(false);
  };

  const furtherEnhance = async () => {
    if (result && result.enhancedPrompt) {
      try {
        console.log('Applying further enhancement to:', result.enhancedPrompt.substring(0, 100) + '...');
        const enhanced = PEMTransformer.transformPrompt(result.enhancedPrompt);
        setResult(enhanced);
        setFinalProgress(8);
        console.log('Further enhancement completed');
      } catch (error) {
        console.error('Error during further enhancement:', error);
      }
    }
  };

  const getLayerIcon = (layerName: string) => {
    if (layerName.includes('Role')) return <Award className="w-4 h-4" />;
    if (layerName.includes('Structure')) return <FileText className="w-4 h-4" />;
    if (layerName.includes('Constraint')) return <Target className="w-4 h-4" />;
    if (layerName.includes('Quality')) return <CheckCircle2 className="w-4 h-4" />;
    if (layerName.includes('Meta')) return <Brain className="w-4 h-4" />;
    if (layerName.includes('Consciousness')) return <Sparkles className="w-4 h-4" />;
    if (layerName.includes('Transcendent')) return <BarChart3 className="w-4 h-4" />;
    return <Zap className="w-4 h-4" />;
  };

  const getLayerColor = (impact: string) => {
    switch (impact) {
      case 'dramatic': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'significant': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'moderate': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <Zap className="w-8 h-8 text-blue-600" />
            PEM Prompt Transformer
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform any basic input into professional-grade prompts using comprehensive 1,326-line PEM methodology
          </p>
        </div>

        {/* Input Section */}
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Your Original Prompt
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Enter your basic prompt here... (e.g., 'Write about AI', 'Analyze market trends', 'Create a business plan')"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="min-h-[120px] text-base border-2 border-gray-200 focus:border-blue-400"
            />
            <Button 
              onClick={enhancePrompt}
              disabled={!input.trim() || isEnhancing}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
            >
              {isEnhancing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Enhancing with PEM...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  Prompt Enhance
                </div>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Action Buttons Row */}
        <div className="flex flex-wrap gap-3 justify-center">
          <Button
            onClick={furtherEnhance}
            disabled={!result}
            variant="outline"
            className="bg-white hover:bg-gray-50 border-2"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Further Enhanced
          </Button>
          <Button
            onClick={() => result && savePrompt(result)}
            disabled={!result}
            variant="outline"
            className="bg-white hover:bg-gray-50 border-2"
          >
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button
            onClick={() => result && copyToClipboard(result.enhancedPrompt)}
            disabled={!result}
            variant="outline"
            className="bg-white hover:bg-gray-50 border-2"
          >
            {isCopied ? <CheckCircle2 className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
          <Button
            onClick={() => setShowOrganizeModal(true)}
            variant="outline"
            className="bg-white hover:bg-gray-50 border-2"
          >
            <FolderOpen className="w-4 h-4 mr-2" />
            Organize
          </Button>
          <Button
            onClick={() => result && deletePrompt(result.originalPrompt)}
            disabled={!result}
            variant="outline"
            className="bg-white hover:bg-red-50 border-2 text-red-600 hover:text-red-700"
          >
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
          </Button>
        </div>

        {/* Enhancement Progress */}
        {(isEnhancing || (result && finalProgress > 0)) && (
          <Card className={`border-2 ${isEnhancing ? 'border-blue-200 bg-blue-50/50' : 'border-green-200 bg-green-50/50'}`}>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  {isEnhancing ? (
                    <Brain className="w-5 h-5 text-blue-600" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  )}
                  <span className={`font-semibold ${isEnhancing ? 'text-blue-900' : 'text-green-900'}`}>
                    {isEnhancing 
                      ? `Enhancement Progress: ${enhancementStep + 1}/8`
                      : `Enhancement Complete: 8/8`
                    }
                  </span>
                </div>
                <Progress 
                  value={isEnhancing ? (enhancementStep + 1) / 8 * 100 : 100} 
                  className="h-2" 
                />
                <div className={`text-sm ${isEnhancing ? 'text-blue-700' : 'text-green-700'}`}>
                  {isEnhancing 
                    ? [
                        'Analyzing input...',
                        'Applying role definition...',
                        'Enhancing structure...',
                        'Adding constraints...',
                        'Implementing quality assurance...',
                        'Integrating meta-cognitive guidance...',
                        'Applying consciousness engineering...',
                        'Finalizing transcendent optimization...'
                      ][enhancementStep]
                    : 'All 8 transformation layers successfully applied'
                  }
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Result Section */}
        {result && (
          <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  Enhanced Prompt Result
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    Improvement: {result.improvementScore}%
                  </Badge>
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    Layers: {result.layersApplied.length}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                ref={outputRef}
                value={result.enhancedPrompt}
                readOnly
                className="min-h-[300px] text-sm font-mono border-2 border-gray-200 bg-gray-50/50"
              />
              
              {/* Enhancement Layers Applied */}
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  Enhancement Layers Applied
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {result.layersApplied.map((layer, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg border ${getLayerColor(layer.impact)}`}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        {getLayerIcon(layer.name)}
                        <span className="font-medium text-sm">{layer.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {layer.impact}
                        </Badge>
                      </div>
                      <p className="text-xs opacity-80">{layer.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Transformation Summary */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Transformation Summary</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>Original Length:</strong> {result.originalPrompt.length} characters</p>
                  <p><strong>Enhanced Length:</strong> {result.enhancedPrompt.length} characters</p>
                  <p><strong>Enhancement Factor:</strong> {(result.enhancedPrompt.length / result.originalPrompt.length).toFixed(1)}x</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Organize Modal */}
        {showOrganizeModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-y-auto">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Saved Prompts ({savedPrompts.length})</CardTitle>
                  <Button
                    onClick={() => setShowOrganizeModal(false)}
                    variant="outline"
                    size="sm"
                  >
                    Close
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {savedPrompts.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No saved prompts yet</p>
                ) : (
                  <div className="space-y-4">
                    {savedPrompts.map((prompt) => (
                      <div key={prompt.id} className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">{prompt.score}%</Badge>
                            <span className="text-sm text-gray-500">{prompt.timestamp}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              onClick={() => copyToClipboard(prompt.enhanced)}
                              size="sm"
                              variant="outline"
                            >
                              <Copy className="w-3 h-3" />
                            </Button>
                            <Button
                              onClick={() => deletePrompt(prompt.id)}
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <span className="font-medium text-sm">Original:</span>
                            <p className="text-sm text-gray-600 mt-1">{prompt.original}</p>
                          </div>
                          <div>
                            <span className="font-medium text-sm">Enhanced:</span>
                            <p className="text-sm text-gray-600 mt-1 line-clamp-3">{prompt.enhanced}</p>
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {prompt.layers.map((layer, index) => (
                              <Badge key={index} variant="secondary" className="text-xs">
                                {layer}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptEnhancer;