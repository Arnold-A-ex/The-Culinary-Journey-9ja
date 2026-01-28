import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Educraft from "../../assets/images/logo.png";
import Consiglories from "../../assets/images/d-consiglories.jpg";

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] flex items-center overflow-hidden">
            
            {/* Background Image stored in CSS theme */}
            <div className="absolute inset-0 bg-hero bg-cover bg-fixed bg-center bg-no-repeat" />
            
            {/* Overlay - Jet Black with opacity to ensure text readability */}
            <div className="absolute inset-0 bg-secondary/70 md:bg-gradient-to-r md:from-secondary/90 md:to-secondary/40" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="max-w-3xl text-white">
                    <div className="inline-flex items-center space-x-2 bg-secondary/50 backdrop-blur-sm px-4 py-1 rounded-full mb-6 border border-primary/50">
                        <Star className="w-4 h-4 text-primary" fill="currentColor" />
                        <span className="text-sm font-semibold tracking-wide text-primary">The 2026 Edition is Here</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 text-white">
                        Cook Your Way <br />
                        <span className="text-primary">To The Top</span>
                    </h1>
                    
                    <p className="text-lg md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                        Discovering Nigeria’s most talented cooks. A journey of flavors, culture, and innovation from the heart of the Niger Delta.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/competition"
                            className="flex items-center justify-center space-x-2 bg-primary text-secondary px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-500 transition shadow-lg hover:shadow-primary/30"
                        >
                            <span>Join the Competition</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/about"
                            className="flex items-center justify-center px-8 py-4 rounded-full text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-secondary transition"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>

                {/* Partners Section Overlay */}
                <div className=" bottom-10 left-4 sm:left-8 right-0 mt-3">
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 mt-1">Powered by Partners</p>
                    <div className="flex items-center space-x-6">
                        {/* Educraft */}
                        <div className="flex items-center gap-2">
                            <img src={ Educraft } alt="educraft logo" className="h-15 w-auto object-contain"/>
                        </div>
                        {/* D Consiglories */}
                        <div className="flex items-center gap-2">
                            <img src={ Consiglories } alt="D Consiglories logo" className="h-13 w-auto object-contain"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;