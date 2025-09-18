'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      const FallbackComponent = this.props.fallback || DefaultErrorFallback;
      return (
        <FallbackComponent
          error={this.state.error}
          resetError={this.resetError}
        />
      );
    }

    return this.props.children;
  }
}

function DefaultErrorFallback({
  error,
  resetError,
}: {
  error?: Error;
  resetError: () => void;
}) {
  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900'>
      <div className='w-full max-w-md rounded-lg bg-white p-6 text-center shadow-lg dark:bg-gray-800'>
        <div className='mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20'>
          <svg
            className='h-8 w-8 text-red-600 dark:text-red-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
            />
          </svg>
        </div>

        <h2 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
          Something went wrong
        </h2>

        <p className='mb-6 text-gray-600 dark:text-gray-400'>
          We&apos;re sorry, but something unexpected happened. Please try
          refreshing the page.
        </p>

        {process.env.NODE_ENV === 'development' && error && (
          <details className='mb-6 text-left'>
            <summary className='mb-2 cursor-pointer text-sm text-gray-500 dark:text-gray-400'>
              Error Details (Development)
            </summary>
            <pre className='overflow-auto rounded bg-gray-100 p-3 text-xs dark:bg-gray-700'>
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </pre>
          </details>
        )}

        <div className='flex justify-center gap-3'>
          <button
            onClick={resetError}
            className='rounded-lg bg-brand-600 px-4 py-2 text-white transition-colors hover:bg-brand-700'
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className='rounded-lg bg-gray-200 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          >
            Refresh Page
          </button>
        </div>
      </div>
    </div>
  );
}

// Hook for error handling in functional components
export function useErrorHandler() {
  return (error: Error, errorInfo?: { componentStack?: string }) => {
    console.error('Error caught by hook:', error, errorInfo);

    // In production, you might want to send this to an error reporting service
    if (process.env.NODE_ENV === 'production') {
      // Example: send to error reporting service
      // errorReportingService.captureException(error, { extra: errorInfo });
    }
  };
}
