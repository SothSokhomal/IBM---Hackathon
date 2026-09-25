import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 m-8 bg-red-900/20 border-2 border-red-500 rounded-xl text-white">
          <h1 className="text-2xl font-bold text-red-400 mb-4">React Error Boundary Tripped</h1>
          <h2 className="text-xl font-mono text-red-300 mb-2">{this.state.error && this.state.error.toString()}</h2>
          <pre className="whitespace-pre-wrap text-xs bg-black/50 p-4 rounded overflow-auto mt-4 text-red-200">
            {this.state.errorInfo?.componentStack}
          </pre>
          <pre className="whitespace-pre-wrap text-xs bg-black/50 p-4 rounded overflow-auto mt-4 text-gray-300">
            {this.state.error?.stack}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}
