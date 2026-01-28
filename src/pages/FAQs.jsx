import React from 'react';
import { HelpCircle, MessageCircle, Users, Briefcase, Info } from 'lucide-react';

const FAQs = () => {
    const faqData = [
        {
            category: "The Process",
            icon: Info,
            questions: [
                {
                    q: "What is the process for smaller culinary projects and modules?",
                    a: "The process is designed to be inclusive and educational. It begins with registration followed by joining our dedicated WhatsApp community. Participants undergo a 10-module training program involving orientation, safety, indigenous cuisine, and entrepreneurship. You will learn in real kitchens, receive direct mentorship, and upon completion, earn a certificate and potential startup support for innovative business ideas."
                }
            ]
        },
        {
            category: "The Team",
            icon: Users,
            questions: [
                {
                    q: "Who is behind the Culinary Journey 9ja Show?",
                    a: "John Courage Oparah is the driving force behind the show. As the producer and director, he leads the creative vision, curating content that highlights Nigerian culinary diversity. He works alongside a dedicated team of professionals who facilitate the hosting, culinary training, and regional outreach."
                },
                {
                    q: "How can I meet the team?",
                    a: "We encourage fans and collaborators to reach out through our official channels. You can use the inquiry forms on our website, send a professional email, or connect via our social media handles. When reaching out, briefly explain your interest—whether it's for an interview, collaboration, or a fan meet-up—and include your contact details for follow-up."
                }
            ]
        },
        {
            category: "Opportunities",
            icon: Briefcase,
            questions: [
                {
                    q: "Can I apply to be part of the team or work as a volunteer?",
                    a: "Yes! We are always looking for passionate community members. You can send a Direct Message (DM) to our email or contact us via WhatsApp expressing your interest. We also monitor our social media comments for individuals who professionally express interest in hiring or recruitment calls. Partnerships are also welcome via the same channels."
                }
            ]
        }
    ];

    return (
        <div className="py-20 bg-background min-h-screen">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="bg-primary p-4 rounded-full mb-6">
                        <HelpCircle size={40} className="text-secondary" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">Frequently Asked Questions</h1>
                    <p className="text-muted max-w-2xl">Everything you need to know about the show, the team, and how you can get involved.</p>
                </div>

                <div className="space-y-12">
                    {faqData.map((section, i) => (
                        <div key={i} className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                            <div className="flex items-center space-x-4 mb-8 border-b border-gray-50 pb-4">
                                <section.icon className="text-primary" size={28} />
                                <h2 className="text-2xl font-bold text-secondary uppercase tracking-tight">{section.category}</h2>
                            </div>
                            <div className="space-y-8">
                                {section.questions.map((item, j) => (
                                    <div key={j} className="group">
                                        <h3 className="text-xl font-bold text-secondary mb-3 flex items-start">
                                            <span className="text-primary mr-3">Q:</span> {item.q}
                                        </h3>
                                        <p className="text-muted leading-relaxed pl-8 border-l-2 border-primary/20">
                                            {item.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-secondary rounded-3xl p-10 text-center text-white">
                    <MessageCircle className="mx-auto mb-4 text-primary" size={40} />
                    <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
                    <p className="text-gray-400 mb-6">If you couldn't find the answer you're looking for, please reach out via WhatsApp.</p>
                    <a href="/contact" className="inline-block bg-primary text-secondary px-10 py-4 rounded-full font-bold hover:bg-yellow-500 transition">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQs;
