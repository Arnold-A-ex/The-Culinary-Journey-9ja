import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Globe, Utensils } from 'lucide-react';
import Flier from "../../assets/images/flier-2.jpg";

const MiniAbout = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Visual Side */}
                    <div className="relative">
                        <div className="aspect-square bg-secondary rounded-3xl overflow-hidden shadow-2xl border-b-8 border-primary">
                            {/* Replace with one of your show fliers or a high-quality food image */}
                            <img 
                                src={ Flier }
                                alt="Culinary Journey 9ja Show" 
                                className="w-full h-full object-cover opacity-90"
                            />
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-primary text-secondary p-6 rounded-2xl shadow-xl hidden md:block">
                            <p className="text-3xl font-black italic">100%</p>
                            <p className="text-xs font-bold uppercase tracking-widest">Nigerian Flavors</p>
                        </div>
                    </div>

                    {/* Text Side */}
                    <div>
                        <div className="inline-flex items-center space-x-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                            <ChefHat size={18} />
                            <span>Discover the Story</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-secondary mb-6 leading-tight">
                            More Than Just <br />
                            <span className="text-primary">A Cooking Show</span>
                        </h2>
                        <p className="text-muted text-lg leading-relaxed mb-8">
                            The Culinary Journey 9ja Show is a nationwide movement designed to discover Nigeria’s most creative cooks. From the rivers of the Niger Delta to the global stage, we blend tradition with innovation to transform local ingredients into world-class art.
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            <div className="flex items-start space-x-3">
                                <Globe className="text-primary shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-secondary">Cultural Heritage</h4>
                                    <p className="text-sm text-muted">Celebrating 9 states of the Niger Delta.</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-3">
                                <Utensils className="text-primary shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-secondary">Culinary Innovation</h4>
                                    <p className="text-sm text-muted">Elevating local flavors to fine dining.</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            to="/about"
                            className="inline-flex items-center space-x-2 bg-secondary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary/90 transition shadow-lg group"
                        >
                            <span>Read Full Story</span>
                            <span className="text-primary group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MiniAbout;