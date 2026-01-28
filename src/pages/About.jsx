import React from 'react';
import { Target, Eye, Landmark, Waves, Sprout, Flame } from 'lucide-react';
import Flier from "../assets/images/flier-3.jpg";

const About = () => {
    return (
        <div className="bg-background">
            {/* Full Write-up Section */}
            <section className="max-w-7xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-8">
                            The Culinary <span className="text-primary">Journey 9ja</span> Show
                        </h1>
                        <div className="prose prose-lg text-muted space-y-6">
                            <p>
                                The Culinary Journey 9ja Show is a thrilling nationwide cooking competition designed to discover Nigeria’s most talented and creative cooks. Celebrating the country’s rich culinary heritage, the show brings together aspiring cooks from all regions to compete, innovate, and showcase the flavors that define Nigerian cuisine.
                            </p>
                            <p>
                                Contestants are challenged to transform local ingredients into world-class dishes, blending tradition with creativity. From street food classics to regional specialties, each stage of the competition highlights the depth, diversity, and artistry of Nigerian cooking.
                            </p>
                            <p>
                                With expert judges, exciting challenges, and captivating storytelling, The Culinary Journey 9ja Show offers contestants the opportunity to cook their way to the top, win life-changing prizes, and inspire a new generation of culinary stars.
                            </p>
                        </div>
                    </div>
                    {/* Placeholder for Flier 1 */}
                    <div className="bg-secondary aspect-square rounded-3xl overflow-hidden border-8 border-primary shadow-2xl flex items-center justify-center relative">
                        <img src={ Flier } alt="Show Flier" className="w-full h-full object-cover " />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Detailed Mission & Vision */}
            <section className="py-20 bg-secondary text-white">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
                        <Target className="text-primary w-12 h-12 mb-6" />
                        <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To discover, inspire, and empower Nigeria’s emerging culinary talents by showcasing the richness of local ingredients, traditional flavors, and innovative cooking techniques. We aim to provide a platform for cooks to showcase their skills, preserve cultural heritage, and build sustainable careers in the culinary arts.
                        </p>
                    </div>
                    <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
                        <Eye className="text-accent w-12 h-12 mb-6" />
                        <h2 className="text-3xl font-bold mb-4 text-accent">Our Vision</h2>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            To become Nigeria’s leading culinary competition and a celebrated cultural brand that elevates Nigerian cuisine on national and global stages. We envision a future where culinary artists are recognized as cultural ambassadors, and Nigerian food is celebrated for its diversity and innovation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Origins of Niger Delta Cuisine - Expanded */}
            <section className="py-20 max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-secondary mb-4">Origins of Niger Delta Cuisine</h2>
                    <p className="max-w-2xl mx-auto text-muted">A unique food identity shaped by rivers, mangroves, and centuries of tradition.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="group">
                        <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition group-hover:bg-accent group-hover:text-white text-accent">
                            <Waves size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-secondary uppercase tracking-wider">Abundance of Seafood</h3>
                        <p className="text-muted leading-relaxed">
                            Surrounded by creeks, rivers, and the Atlantic coastline, the region's diet relies heavily on fresh and smoked fish, prawns, crabs, lobsters, and oysters. Seafood is often used as a base for soups and a symbol of hospitality.
                        </p>
                    </div>
                    <div className="group">
                        <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition group-hover:bg-primary group-hover:text-secondary text-primary">
                            <Sprout size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-secondary uppercase tracking-wider">Fertile Soil & Staples</h3>
                        <p className="text-muted leading-relaxed">
                            The rainforest and mangrove swamps provide fertile land for cassava, plantains, yams, and oil palms. Cassava processing is a major tradition, giving rise to staples like garri, starch (usi), and various types of fufu.
                        </p>
                    </div>
                    <div className="group">
                        <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition group-hover:bg-accent group-hover:text-white text-accent">
                            <Flame size={32} />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-secondary uppercase tracking-wider">Traditional Spices</h3>
                        <p className="text-muted leading-relaxed">
                            Unique aromatic spices like ataiko, irugeje, beletete, and aidan fruit (prekese) are essential. They give Niger Delta soups their distinctive earthy depth, aroma, and medicinal properties.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;