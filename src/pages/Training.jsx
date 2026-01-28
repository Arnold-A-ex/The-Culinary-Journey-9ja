import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, GraduationCap } from 'lucide-react';

const Training = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const modules = [
        { 
            title: "Module 1: Orientation & Contest Preparation", 
            content: "Introduction to the show's structure, mental preparation for the competition environment, and understanding the rules of engagement." 
        },
        { 
            title: "Module 2: Kitchen Safety & Hygiene", 
            content: "Essential food safety protocols, sanitization, cross-contamination prevention, and maintaining a professional workstation." 
        },
        { 
            title: "Module 3: Knife Skills & Basic Techniques", 
            content: "Mastery of various cuts (julienne, dice, etc.), knife sharpening, and foundational cooking methods like sautéing, poaching, and roasting." 
        },
        { 
            title: "Module 4: Niger Delta Indigenous Cuisine", 
            content: "In-depth study of regional favorites: Banga, Owo, Fisherman Soup, Native Jollof, and the use of local oils and spices." 
        },
        { 
            title: "Module 5: Continental & International Dishes", 
            content: "Expanding the palate with global techniques, pasta making, steak temperatures, and fusion concepts." 
        },
        { 
            title: "Module 6: Pastry, Bakery & Desserts", 
            content: "The science of baking, bread making, indigenous-inspired desserts, and working with chocolate and cream." 
        },
        { 
            title: "Module 7: Food Art & Plating", 
            content: "The aesthetics of food. Color theory, garnishing techniques, and creating a 'wow' factor on every plate." 
        },
        { 
            title: "Module 8: Speed Cooking Simulation", 
            content: "Pressure tests. Learning to deliver high-quality dishes under strict time limits without compromising taste or safety." 
        },
        { 
            title: "Module 9: Entrepreneurship & Business", 
            content: "The business of food. Costing, menu engineering, branding yourself as a chef, and restaurant management basics." 
        },
        { 
            title: "Module 10: Career Development", 
            content: "Preparing for life after the show. Networking, portfolio building, and exploring opportunities in the hospitality industry." 
        }
    ];

    return (
        <div className="py-20 bg-background">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <GraduationCap size={60} className="text-primary mx-auto mb-4" />
                    <h1 className="text-4xl font-bold text-secondary mb-4">Culinary Excellence Program</h1>
                    <p className="text-muted italic">"A comprehensive 10-module journey to culinary mastery."</p>
                </div>

                <div className="space-y-4">
                    {modules.map((m, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <button 
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition"
                            >
                                <span className="text-lg font-bold text-secondary flex items-center">
                                    <span className="text-primary mr-4">0{i + 1}</span> {m.title}
                                </span>
                                {openIndex === i ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-muted" />}
                            </button>
                            {openIndex === i && (
                                <div className="px-8 pb-6 text-muted leading-relaxed border-t border-gray-50 pt-4 animate-in fade-in slide-in-from-top-2">
                                    {m.content}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-accent text-white p-12 rounded-[2.5rem] relative overflow-hidden">
                    <BookOpen className="absolute -right-10 -bottom-10 opacity-10" size={200} />
                    <h2 className="text-2xl font-bold mb-4">Certification & Support</h2>
                    <p className="leading-relaxed mb-6 opacity-90">
                        Upon completion of all modules, participants receive an official certificate from The Culinary Journey 9ja Show. The most promising entrepreneurs from the group gain access to our mentorship network and potential startup support.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Training;