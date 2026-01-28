import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
            {/* Background 404 watermark */}
            <h1 className="text-9xl font-extrabold text-secondary opacity-5 select-none absolute">404</h1>
            
            <div className="relative flex flex-col items-center text-center z-10">
                <div className="bg-accent/10 p-6 rounded-full mb-4">
                    <Search className="w-10 h-10 text-accent" />
                </div>
                
                <h2 className="text-3xl font-bold text-secondary mb-2">Page Not Found</h2>
                <p className="text-muted mb-8 max-w-md text-lg">
                    Looks like you're lost in the sauce! The page you are looking for doesn't exist or has been moved.
                </p>
                
                <Link
                    to="/"
                    className="bg-primary text-secondary px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;