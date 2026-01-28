import React from 'react';
import { Briefcase, TrendingUp, Award, Rocket } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        { title: "Mentorship", desc: "Get direct access to seasoned chefs and industry leaders.", icon: Award },
        { title: "Startup Support", desc: "Potential startup support for the most innovative culinary business ideas.", icon: Rocket },
        { title: "Real-World Experience", desc: "Learn within real kitchens and professional environments.", icon: Briefcase },
        { title: "Career Growth", desc: "Open doors to recipe contracts and culinary partnerships.", icon: TrendingUp }
    ];

    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">Beyond the Competition</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((b, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
                            <b.icon className="text-primary mb-4 w-10 h-10" />
                            <h3 className="text-xl font-bold text-secondary mb-2">{b.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{b.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;