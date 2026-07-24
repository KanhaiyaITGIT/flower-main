import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 py-24 select-none">
          <span className="text-4xl">🌸</span>
          <h2 className="font-serif-display text-2xl font-bold text-[var(--color-primary)] text-center">
            Something went wrong
          </h2>
          <p className="text-gray-400 text-sm text-center max-w-sm font-light">
            We encountered an unexpected issue. Please try refreshing the page or selecting a different category.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            className="mt-2 bg-[var(--color-primary)] text-white rounded-2xl px-6 py-2.5 text-xs font-bold tracking-wider uppercase hover:bg-[var(--color-primary)] hover:shadow-soft-lg hover:shadow-[var(--color-primary)]/30 transition-all duration-300"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
