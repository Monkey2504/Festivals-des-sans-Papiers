
import React from 'react';

interface EBProps {
  children: React.ReactNode;
}

interface EBState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<EBProps, EBState> {
  declare state: EBState;
  declare props: EBProps;

  constructor(props: EBProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): EBState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F2F0EB] flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#BC0000] mb-4">Erreur inattendue</p>
            <h1 className="font-serif italic text-2xl text-black mb-4">Une erreur est survenue.</h1>
            <p className="text-sm text-black/60 mb-6">Rechargez la page pour continuer.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-[#BC0000] text-white text-sm font-medium px-6 py-3 rounded-sm hover:bg-[#a00000] transition-colors"
            >
              Recharger
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
