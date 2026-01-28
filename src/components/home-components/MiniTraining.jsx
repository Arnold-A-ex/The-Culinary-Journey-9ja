import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Award, TrendingUp, ChevronRight } from 'lucide-react';

const MiniTraining = () => {
    const highlights = [
        { 
            title: "Indigenous Cuisine", 
            desc: "Master Banga, Owo, and the secrets of Niger Delta spices.",
            icon: BookOpen 
        },
        { 
            title: "Business Skills", 
            desc: "Learn menu engineering, costing, and branding yourself.",
            icon: TrendingUp 
        },
        { 
            title: "Certification", 
            desc: "Earn a professional certificate recognized by industry leaders.",
            icon: Award 
        }
    ];

    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-secondary mb-4 italic">Culinary Mastery Program</h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        We don't just judge dishes; we build careers. Our comprehensive 10-module curriculum turns home cooks into professional chefs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {highlights.map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                            <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/training"
                        className="inline-flex items-center space-x-3 bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition shadow-lg shadow-primary/20"
                    >
                        <span>Explore All 10 Modules</span>
                        <ChevronRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default MiniTraining; 