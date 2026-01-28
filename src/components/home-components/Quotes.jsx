import React from 'react';
import { Quote } from 'lucide-react';

const Quotes = () => {
    const quotes = [
        "Discovering Nigeria’s most talented and creative cooks.",
        "Blending tradition with creativity to inspire a new generation.",
        "Elevating Nigerian cuisine on national and global stages."
    ];

    return (
        <section className="py-20 bg-secondary text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 opacity-10">
                <Quote size={200} className="text-primary" />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {quotes.map((quote, index) => (
                        <div key={index} className="text-center italic">
                            <p className="text-xl md:text-2xl font-light leading-relaxed mb-4">
                                "{quote}"
                            </p>
                            <div className="h-1 w-12 bg-primary mx-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Quotes;