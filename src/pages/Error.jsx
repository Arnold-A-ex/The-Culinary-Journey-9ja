import React from 'react';
import { useRouteError, Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
            <div className="bg-red-50 p-6 rounded-full mb-6 border-2 border-red-100">
                <AlertTriangle className="w-12 h-12 text-red-600" />
            </div>
            
            <h1 className="text-4xl font-bold text-text mb-2">Oops! Something went wrong.</h1>
            <p className="text-lg text-muted mb-8 max-w-md">
                The kitchen got a bit too hot! We encountered an unexpected error while loading this page.
            </p>
            
            <div className="bg-white p-4 rounded shadow-sm mb-8 text-left max-w-lg w-full overflow-auto border border-gray-200">
                <p className="font-mono text-sm text-red-500">
                    {error?.statusText || error?.message || "Unknown Error"}
                </p>
            </div>
            
            <Link
                to="/"
                className="bg-primary text-secondary px-6 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg"
            >
                Return to Home
            </Link>
        </div>
    );
};

export default Error;