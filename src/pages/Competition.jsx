import React from 'react';
import { Trophy, CheckCircle, ClipboardList, Star, Award, Users } from 'lucide-react';
import Flier from "../assets/images/flier-1.jpg";


const Competition = () => {
    return (
        <div className="bg-background py-20">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header Section */}
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-secondary mb-6 italic">How the Competition Works</h1>
                    <p className="text-xl text-muted max-w-3xl mx-auto">
                        A transparent, multi-stage journey from local auditions to the national spotlight.
                    </p>
                </div>

                {/* Competition Stages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-primary relative overflow-hidden">
                        <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-50">1</span>
                        <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Auditions</h3>
                        <p className="text-muted relative z-10">
                            Competitors submit their entry forms (₦5,000) and perform initial cooking tasks. Judges select the top talents based on foundational skills and creativity.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-accent relative overflow-hidden">
                        <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-50">2</span>
                        <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">Elimination Rounds</h3>
                        <p className="text-muted relative z-10">
                            The "Culinary Heat" phase. Contestants face mystery baskets, time trials, and regional signature dish challenges. One mistake could mean going home.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl shadow-sm border-l-8 border-primary relative overflow-hidden">
                        <span className="absolute -right-4 -top-4 text-8xl font-black text-gray-50">3</span>
                        <h3 className="text-2xl font-bold text-secondary mb-4 relative z-10">The Grand Finale</h3>
                        <p className="text-muted relative z-10">
                        The grand finale brings the ultimate showdown where the best of the best compete for the title and top prizes: ₦1,000,000, a branded car and a recipe contract, with ₦750,000 and ₦500,000 for second and third place, plus consolation prizes for 50 contestants.
                        </p>
                    </div>
                </div>

                {/* Judging Criteria */}
                <section className="bg-secondary text-white rounded-[3rem] p-12 md:p-20 mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
                        <ClipboardList className="mr-4 text-primary" /> Judging Criteria
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: "Creativity & Innovation", d: "How the contestant reimagines traditional ingredients." },
                            { t: "Taste & Flavor Profile", d: "Balance, seasoning, and the 'soul' of the dish." },
                            { t: "Plating & Presentation", d: "The visual appeal and artistic arrangement of the food." },
                            { t: "Hygiene & Organization", d: "Cleanliness of the workstation and safe food handling." },
                            { t: "Authenticity", d: "Respect for the roots of the dish while adding a personal touch." }
                        ].map((item, i) => (
                            <div key={i} className="flex space-x-4">
                                <CheckCircle className="text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{item.t}</h4>
                                    <p className="text-gray-400 text-sm">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Eligibility & Form */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-secondary mb-6">Who Can Apply?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center space-x-3 text-muted">
                                <Users className="text-primary" /> <span>Aspiring cooks aged 18 and above.</span>
                            </li>
                            <li className="flex items-center space-x-3 text-muted">
                                <Star className="text-primary" /> <span>Passionate about Nigerian culinary heritage.</span>
                            </li>
                            <li className="flex items-center space-x-3 text-muted">
                                <Award className="text-primary" /> <span>Both amateur and semi-pro cooks are welcome.</span>
                            </li>
                        </ul>
                        <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 mb-8">
                            <p className="text-secondary font-bold mb-2">Registration Fee: ₦5,000</p>
                            <p className="text-sm text-muted">Payment details provided upon contact or through our official partner centers.</p>
                        </div>
			<a
                            href="https://forms.gle/eb9Ud5GbuJGs1A44A" 
			    target="_blank" rel="noopener noreferrer" 
                            className="bg-primary mt-3 text-center text-secondary px-6 py-2 rounded-full font-bold hover:bg-yellow-500 transition transform hover:scale-105 shadow-md"
                        >
                            Register
                        </a>
                    </div>
                    {/* Placeholder for Flier 2 */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <img src={ Flier } alt="Prizes Flier" className="w-full h-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Competition;