import React, { useState } from 'react';
import { Building2, User, Copy, CheckCircle2 } from 'lucide-react';

const PaymentDetails = () => {
    const [copiedId, setCopiedId] = useState(null);

    const bankAccounts = [
        { id: 1, bank: "Zenith Bank", number: "1311334679" },
        { id: 2, bank: "Fidelity Bank", number: "5601648656" },
        { id: 3, bank: "OPay", number: "6542203035" },
    ];

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        // Reset the icon back to "Copy" after 2 seconds
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="w-full py-16 px-4 bg-secondary rounded-[3rem] mb-10">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Our Banking Partners
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
                        To finalize your registration, please make your payment to any of the official accounts listed below.
                    </p>
                </div>

                {/* Bank Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {bankAccounts.map((acc) => (
                        <div 
                            key={acc.id} 
                            className="group relative bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 hover:border-primary dark:hover:border-primary transition-all duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-xl group-hover:scale-110 transition-transform">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-xl text-gray-800 dark:text-zinc-100">
                                    {acc.bank}
                                </h3>
                            </div>
                            
                            <div className="space-y-4">
                                <div>
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-400 dark:text-zinc-500">
                                        Account Number
                                    </label>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-2xl font-mono font-bold text-gray-900 dark:text-white">
                                            {acc.number}
                                        </span>
                                        <button 
                                            onClick={() => handleCopy(acc.number, acc.id)}
                                            className="p-2 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                                            title="Copy to clipboard"
                                        >
                                            {copiedId === acc.id ? (
                                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                            ) : (
                                                <Copy className="w-5 h-5 text-gray-400 group-hover:text-primary" />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-zinc-400">
                                        <User className="w-4 h-4" />
                                        <span className="text-sm font-semibold italic">
                                            THE CULINARY JOURNEY 9JA VENTURES
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="mt-12 flex items-center justify-center">
                    <div className="bg-orange-950/30 border border-primary px-6 py-4 rounded-full">
                        <p className="text-sm text-primary dark:text-primary text-center">
                            <span className="font-bold">Important:</span> Ensure the account name matches exactly before confirming your transfer.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PaymentDetails;


