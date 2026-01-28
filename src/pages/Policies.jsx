import React from 'react';
import { ShieldCheck, Scale, AlertCircle, FileText, Gavel } from 'lucide-react';

const Policies = () => {
    return (
        <div className="py-20 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden border border-gray-100">
                    
                    {/* Policy Header */}
                    <div className="bg-secondary p-12 text-center">
                        <ShieldCheck size={60} className="text-primary mx-auto mb-6" />
                        <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
                        <p className="text-gray-400">Please read these competition rules and legal policies carefully.</p>
                    </div>

                    <div className="p-8 md:p-16 space-y-12">
                        
                        {/* Section 1 */}
                        <section className="flex gap-6">
                            <div className="hidden sm:block"><FileText className="text-primary" size={32} /></div>
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-tighter">1. Acceptance of Terms</h2>
                                <p className="text-muted leading-relaxed">
                                    By taking part in this competition, you shall be deemed to have accepted and be bound by these "Terms and Conditions", as may be amended by the Organizers from time to time. It is the responsibility of the participant to stay updated on any changes made to these terms during the course of the competition.
                                </p>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="flex gap-6">
                            <div className="hidden sm:block"><AlertCircle className="text-primary" size={32} /></div>
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-tighter">2. Right to Cancel or Suspend</h2>
                                <p className="text-muted leading-relaxed">
                                    If for any reason the contest is not capable of running as planned—due to infection by computer viruses, bugs, tampering, unauthorized intervention, fraud, technical failures, or any other causes beyond the control of the Organizer—the Organizer reserves the right, in its sole discretion, to disqualify any individual who tampers with the entry process or to cancel, terminate, modify, or suspend the competition.
                                </p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="flex gap-6">
                            <div className="hidden sm:block"><Scale className="text-primary" size={32} /></div>
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-tighter">3. Liability & Technical Issues</h2>
                                <p className="text-muted leading-relaxed">
                                    The Organizer assumes no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission, communications line failure, theft, destruction, or unauthorized access to, or alteration of entries. The Organizer is not responsible for any problems or technical malfunction of any telephone network, online systems, servers, or computer equipment.
                                </p>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="flex gap-6">
                            <div className="hidden sm:block"><Gavel className="text-primary" size={32} /></div>
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4 uppercase tracking-tighter">4. Governing Law</h2>
                                <p className="text-muted leading-relaxed">
                                    The competition and these Terms and Conditions shall be governed by the Laws of the Federal Republic of Nigeria. Participants agree to the exclusive jurisdiction of the courts of Nigeria to settle any disputes which may arise in connection with the competition.
                                </p>
                            </div>
                        </section>

                        {/* Footer Disclaimer */}
                        <div className="pt-10 border-t border-gray-100 text-center">
                            <p className="text-sm text-gray-400 italic">
                                Last updated: January 2026. For further legal inquiries, please contact info@theculinaryjourney9ja.org.ng
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Policies;