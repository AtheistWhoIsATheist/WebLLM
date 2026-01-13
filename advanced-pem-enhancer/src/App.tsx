import React from 'react';
import PromptEnhancer from './components/PromptEnhancer';
import { ErrorBoundary } from './components/ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <PromptEnhancer />
    </ErrorBoundary>
  );
}

export default App
